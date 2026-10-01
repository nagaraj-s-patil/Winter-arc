# Winter Arc: push setup (5 steps)

1. Upload everything in this folder to your GitHub repo root (keep the `.github` and `scripts` folders). Turn on GitHub Pages.
2. Open your site on your phone. Android: Chrome menu > Install app. iPhone (iOS 16.4+): Share > Add to Home Screen, then open from the icon.
3. In the app: Today > Settings > Turn ON reminders > Allow. Tap **Copy device code**.
4. GitHub repo > Settings > Secrets and variables > Actions > New secret. Create 3 secrets:
   - `PUSH_SUBSCRIPTION` = the device code you copied (for 2 devices use a list: `[{...},{...}]`)
   - `VAPID_PUBLIC` and `VAPID_PRIVATE` = from KEEP-PRIVATE-vapid-keys.txt
5. Actions tab > Winter Arc push > Run workflow. You should get a notification in a minute.

Schedule: every 2 hours, 6:30 AM to 10:30 PM IST (edit `cron` in `.github/workflows/push.yml`).
Limits: GitHub can delay a scheduled run by 5-30 min, and pauses schedules after 60 days without repo activity.
Your old data is stored in your old browser/file. On the new website use Export backup (old) > Import backup (new).
