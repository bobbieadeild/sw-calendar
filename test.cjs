const fs=require('node:fs'), vm=require('node:vm'), assert=require('node:assert/strict');
const html=fs.readFileSync(__dirname+'/index.html','utf8');
const script=html.split('<script>')[1].split('</script>')[0];
new vm.Script(script);
const core=script.slice(0,script.indexOf('const uid='));
const context={};vm.createContext(context);vm.runInContext(core+';this.check=validate;this.overlap=overlap;',context);
const data={version:1,customers:[{id:'c1',name:'Example'}],sessions:[{id:'s1',customer:'c1',start:1000,end:5000}],active:{customer:'c1',start:6000}};
assert.equal(context.check(JSON.parse(JSON.stringify(data))).active.start,6000);
assert.deepEqual(JSON.parse(JSON.stringify(context.check(data))),data);
const withComment={...data,sessions:[{...data.sessions[0],comment:'Kundmöte <script>är vanlig text</script>\nUppföljning.'}]};
assert.deepEqual(JSON.parse(JSON.stringify(context.check(JSON.parse(JSON.stringify(withComment))))),withComment);
assert.equal(context.check({...data,sessions:[{...data.sessions[0],comment:''}]}).sessions[0].comment,'');
for(const comment of [null,3,{},'x'.repeat(2001)])assert.throws(()=>context.check({...data,sessions:[{...data.sessions[0],comment}]}));
assert.equal(context.check({...data,sessions:[{...data.sessions[0],comment:'x'.repeat(2000)}]}).sessions[0].comment.length,2000);
for(const bad of [{...data,version:2},{...data,customers:[...data.customers,...data.customers]},
 {...data,active:{customer:'unknown',start:1}},{...data,sessions:[{...data.sessions[0],end:0}]},
 {...data,sessions:[{...data.sessions[0],start:NaN}]}, {...data,sessions:[...data.sessions,...data.sessions]}])assert.throws(()=>context.check(bad));
assert.equal(context.overlap({start:100,end:500},200,400),200);
assert.equal(context.overlap({start:100,end:500},600,800),0);
const midnight=new Date(2026,9,8).getTime();
const cross={start:midnight-3600000,end:midnight+3600000};
assert.equal(context.overlap(cross,midnight-86400000,midnight),3600000);
assert.equal(context.overlap(cross,midnight,midnight+86400000),3600000);
console.log('PASS: script syntax, backup round trip, six malformed inputs, interval overlap and midnight split');
