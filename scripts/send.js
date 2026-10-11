const wp=require('web-push');
const h=new Date(Date.now()+19800000).getUTCHours();            // India time (IST)
if(process.env.FORCE!=='1'&&(h<6||h>=23)){console.log('Quiet hours (11 PM-6 AM IST). Skipped.');process.exit(0)}
const miss=['PUSH_SUBSCRIPTION','VAPID_PUBLIC','VAPID_PRIVATE'].filter(k=>!(process.env[k]||'').trim());
if(miss.length){console.log('MISSING SECRET(S): '+miss.join(', ')+'\nAdd them in: repo Settings > Secrets and variables > Actions > New repository secret. Names must match exactly.');process.exit(1)}
try{wp.setVapidDetails('mailto:'+(process.env.VAPID_EMAIL||'you@example.com'),process.env.VAPID_PUBLIC,process.env.VAPID_PRIVATE)}catch(e){console.log('VAPID keys invalid: '+e.message+'\nCheck you pasted the public and private key correctly, with no spaces or quotes.');process.exit(1)}
const [title,body]=h<9?['Morning start','Workout, 10 words and speaking. Start now.']
 :h<18?['Winter Arc','Check your tasks. Stay on track.']
 :h<21?['Frappe time','Open Frappe / coding now. 70 minutes.']
 :['Wrap up','Finish reading, log minutes and pages, then sleep on time.'];
let subs;try{subs=[].concat(JSON.parse(process.env.PUSH_SUBSCRIPTION||'[]'))}catch(e){console.log('PUSH_SUBSCRIPTION is not valid JSON. Copy the full text from the app (starts with { and ends with }).');process.exit(1)}
if(!subs.length){console.log('No PUSH_SUBSCRIPTION secret found.');process.exit(1)}
(async()=>{for(const s of subs){try{await wp.sendNotification(s,JSON.stringify({title,body}));console.log('Sent')}
 catch(e){console.log('Failed',e.statusCode,'(410/404 = device expired, turn reminders OFF/ON in the app and update the secret)');process.exitCode=1}}})();
