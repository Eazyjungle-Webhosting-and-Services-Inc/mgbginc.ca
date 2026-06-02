# Fresh start: Plesk + GitHub (mgbginc.ca)

Use this after moving the site to the new organization repo. It replaces mixed remotes, failed HTTPS clones, and old account settings.

**Canonical repository (HTTPS):**

`https://github.com/Eazyjungle-Webhosting-and-Services-Inc/mgbginc.ca.git`

**Canonical repository (SSH — use this in Plesk):**

`git@github.com:Eazyjungle-Webhosting-and-Services-Inc/mgbginc.ca.git`

---

## Part 1 — GitHub (one time)

1. Open the repo: [mgbginc.ca](https://github.com/Eazyjungle-Webhosting-and-Services-Inc/mgbginc.ca).
2. Confirm the default branch is **`main`** and it contains this Next.js app (not only a placeholder README).
3. If the repo is **private**, you must use a **deploy key** (Part 2). Public repos can clone without a password, but Plesk still works best with SSH.

### Deploy key (required for private repos; recommended for all)

1. On the server, log in as the domain **system user** (Plesk → Hosting Settings → System user), not `root`:

```bash
su - YOUR_PLESK_SYSTEM_USER
mkdir -p ~/.ssh && chmod 700 ~/.ssh
ssh-keygen -t ed25519 -C "plesk-mgbginc.ca" -f ~/.ssh/id_ed25519_mgbginc -N ""
cat ~/.ssh/id_ed25519_mgbginc.pub
```

2. GitHub → repo **Settings** → **Deploy keys** → **Add deploy key** → paste the `.pub` line → save (read-only is enough).

3. Configure SSH for that user:

```bash
cat >> ~/.ssh/config << 'EOF'
Host github.com
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_ed25519_mgbginc
  IdentitiesOnly yes
EOF
chmod 600 ~/.ssh/config
ssh -T git@github.com
```

You should see: `successfully authenticated` for this repository.

---

## Part 2 — Clean Plesk / server paths

Remove broken clones from the **old** GitHub account or failed pulls (adjust paths if your vhost differs):

```bash
su - YOUR_PLESK_SYSTEM_USER
cd /var/www/vhosts/mgbginc.ca

# Remove old git metadata and half-deployed trees
rm -rf git/mgbginc.git git/mgbginc.ca.git git/mgbginc.ca
rm -rf httpdocs/.git

# Optional: wipe app folder only if you want a completely empty deploy target
# rm -rf httpdocs/*
```

In Plesk:

1. **Domains** → **mgbginc.ca** → remove any existing **Git** repository attachment.
2. Re-add Git using **SSH URL**: `git@github.com:Eazyjungle-Webhosting-and-Services-Inc/mgbginc.ca.git`
3. Leave **username** and **password** empty.
4. Deploy / pull to **`httpdocs`** (or the document root Plesk uses for this subscription).

### Manual deploy (if Plesk Git UI still fails)

```bash
su - YOUR_PLESK_SYSTEM_USER
cd /var/www/vhosts/mgbginc.ca
git clone git@github.com:Eazyjungle-Webhosting-and-Services-Inc/mgbginc.ca.git httpdocs
cd httpdocs
```

---

## Part 3 — Node.js on Plesk

In **Plesk → Node.js** for `mgbginc.ca`:

| Setting | Value |
|--------|--------|
| Node.js version | 20.9+ or 22 |
| Application mode | production |
| Application root | `/var/www/vhosts/mgbginc.ca/httpdocs` (or your path) |
| Application startup file | **`server.js`** |
| Document root | As Plesk requires for the domain (often `httpdocs` or `httpdocs/public` — follow Plesk’s Node.js wizard) |

Copy environment variables from `.env.plesk.example` into **Environment variables** (not into the public web root).

Then in the Plesk terminal (application root):

```bash
npm install
npm run db:deploy
npm run build
```

Restart the Node.js app.

---

## Part 4 — Load default website content

After the database is created, seed loads all pages, services, projects, and blog posts from `src/content/site-content.ts`:

```bash
npm run db:seed
```

If you already ran `npm run db:deploy`, seed ran once. Re-run `npm run db:seed` anytime you update content files in Git and pull on the server.

## Part 5 — Verify

- `https://mgbginc.ca`
- `https://mgbginc.ca/api/health`
- `https://mgbginc.ca/admin/login`

See [DEPLOY-PLESK.md](./DEPLOY-PLESK.md) for database and SMTP details.

---

## Do not use

- Old remote: `https://github.com/ameeq96/mgbginc.git`
- HTTPS clone with GitHub **account password** (disabled by GitHub)
- Startup file `app.js` (use **`server.js`** at project root)
- `public/server.js` (removed; must not be recreated)
