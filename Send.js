const wp=require('web-push');
const h=new Date(Date.now()+19800000).getUTCHours();            // India time (IST)
if(process.env.FORCE!=='1'&&(h<6||h>=23)){console.log('Quiet hours (11 PM-6 AM IST). Skipped.');process.exit(0)}
wp.setVapidDetails('mailto:'+(process.env.VAPID_EMAIL||'you@example.com'),process.env.VAPID_PUBLIC,process.env.VAPID_PRIVATE);
const [title,body]=h<9?['Morning start','Workout, 10 words and speaking. Start now.']
 :h<18?['Winter Arc','Check your tasks. Stay on track.']
 :h<21?['Frappe time','Open Frappe / coding now. 70 minutes.']
 :['Wrap up','Finish reading, log minutes and pages, then sleep on time.'];
const subs=[].concat(JSON.parse(process.env.PUSH_SUBSCRIPTION||'[]'));
if(!subs.length){console.log('No PUSH_SUBSCRIPTION secret found.');process.exit(1)}
(async()=>{for(const s of subs){try{await wp.sendNotification(s,JSON.stringify({title,body}));console.log('Sent')}
 catch(e){console.log('Failed',e.statusCode,'(410/404 = device expired, turn reminders OFF/ON in the app and update the secret)');process.exitCode=1}}})();
