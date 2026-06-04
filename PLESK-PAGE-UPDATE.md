# Update live site after a page change (mgbginc.ca)

Use this **every time** we push a GitHub change. Pull + restart alone is **not** enough.

## Before you start

- Application root must exist: `/var/www/vhosts/mgbginc.ca/httpdocs`
- Startup file: **`server.js`**

## Steps (Plesk Node.js panel)

1. **Git** → Pull (or deploy from GitHub)
2. **Node.js** → **NPM install**
3. **Node.js** → **Run script** → `build`
4. **Homepage image only:** **Run script** → `db:seed`  
   - Or **Admin → Home** → Hero image → `/hero-home.jpg` → Save (skip seed if you prefer)
5. **Node.js** → **Restart App**
6. Browser: hard refresh (Ctrl+F5)

## SSH (same steps)

```bash
cd /var/www/vhosts/mgbginc.ca/httpdocs
git pull origin main
npm install
npm run build
npm run db:seed
# Restart App in Plesk UI
```

## If `httpdocs` is missing

```bash
cd /var/www/vhosts/mgbginc.ca
cp -a httpdocs.backup-XXXX httpdocs
# or: git clone git@github.com:Eazyjungle-Webhosting-and-Services-Inc/mgbginc.ca.git httpdocs
```
