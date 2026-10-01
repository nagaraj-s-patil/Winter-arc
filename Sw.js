self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('push',e=>{
 let d={};try{d=e.data?e.data.json():{}}catch(x){}
 e.waitUntil(self.registration.showNotification(d.title||'Winter Arc',{
  body:d.body||'Check your tasks and keep going.',icon:'icon-192.png',badge:'icon-192.png',
  tag:'winter-arc',renotify:true,data:{url:'./'}}))});
self.addEventListener('notificationclick',e=>{
 e.notification.close();
 e.waitUntil(clients.matchAll({type:'window',includeUncontrolled:true}).then(l=>{
  for(const c of l){if('focus' in c)return c.focus()}
  return clients.openWindow('./')}))});
