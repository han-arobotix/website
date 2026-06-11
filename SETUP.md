# The Fab Collective — Deployment & Setup Guide

## What You Have

```
fab-collective/
├── index.html          ← The full website
├── netlify.toml        ← Netlify configuration
├── admin/
│   ├── index.html      ← CMS login panel (yoursite.com/admin)
│   └── config.yml      ← CMS field definitions
└── SETUP.md            ← This file
```

---

## STEP 1 — Create a GitHub Repository

1. Go to https://github.com and sign in (or create a free account)
2. Click **New repository**
3. Name it: `fab-collective`
4. Set to **Private**
5. Click **Create repository**
6. Upload all files from this folder (drag & drop or use GitHub Desktop)

---

## STEP 2 — Deploy to Netlify

1. Go to https://netlify.com and sign in with your GitHub account
2. Click **Add new site → Import an existing project**
3. Select **GitHub** → choose the `fab-collective` repo
4. Build settings — leave everything as default (no build command needed)
5. Click **Deploy site**
6. Netlify gives you a temporary URL like `random-name-123.netlify.app` — the site is live

---

## STEP 3 — Connect Your GoDaddy Domain

### In Netlify:
1. Go to **Site settings → Domain management**
2. Click **Add custom domain**
3. Enter: `the-fab-collective.com`
4. Netlify will show you two nameserver addresses (e.g. `dns1.p01.nsone.net`)

### In GoDaddy:
1. Log in to GoDaddy → go to **My Products → Domains**
2. Click on `the-fab-collective.com`
3. Scroll to **Nameservers** → click **Change**
4. Select **Enter my own nameservers**
5. Paste in Netlify's nameserver addresses (usually 4 of them)
6. Save

⏱ DNS propagation takes 10 minutes to 48 hours. Usually done within 1 hour.

### Enable HTTPS (free):
Once the domain is connected, go to **Netlify → Domain management → HTTPS**
Click **Verify DNS configuration** then **Provision certificate**
Your site will be live at https://the-fab-collective.com with a free SSL certificate.

---

## STEP 4 — Set Up the CMS (Content Editor)

This lets you edit content, add projects, and update prices without touching code.

### Enable Git Gateway in Netlify:
1. Go to **Netlify → Site settings → Identity**
2. Click **Enable Identity**
3. Under **Registration**, set to **Invite only** (important — keeps it private)
4. Go to **Site settings → Identity → Services**
5. Click **Enable Git Gateway**

### Invite yourself as an admin:
1. Go to **Netlify → Identity tab**
2. Click **Invite users**
3. Enter your email address
4. Check your email and accept the invite — set a password

### Access the CMS:
Go to: `https://the-fab-collective.com/admin`
Log in with your email and password.

### What you can edit in the CMS:
- **Pricing & Configurator** — update prices per sqm, sqm per bed, timeline rates
- **Contact Details** — update phone numbers and emails
- **Projects & Portfolio** — add new projects with photos (for the future portfolio section)

---

## STEP 5 — Set Up Contact Form Notifications

Form submissions from the website are automatically captured by Netlify.

### To get email notifications:
1. Go to **Netlify → Forms**
2. Click on the `contact` form
3. Go to **Form notifications**
4. Click **Add notification → Email notification**
5. Enter your email — you'll get an email every time someone submits the form

---

## UPDATING PRICES LATER

### Option A — Through the CMS (recommended):
1. Go to `https://the-fab-collective.com/admin`
2. Click **Site Settings → Pricing & Configurator**
3. Update the values and click **Publish**

*Note: The CMS config currently saves pricing to a JSON file. To wire this into the live configurator, a small additional script is needed — flag this when you're ready and we'll connect it.*

### Option B — Direct code edit:
1. Open `index.html` in any text editor
2. Find the section marked `PRICING CONFIG — Edit all values here`
3. Update the numbers
4. Re-upload to GitHub (Netlify auto-deploys within 1 minute)

---

## ADDING YOUR LOGO

When your logo is ready:
1. Save it as `logo.svg` (SVG preferred) or `logo.png`
2. Place it in the project folder
3. In `index.html`, find both instances of:
   ```html
   <div class="nav-logo">THE FAB <span>COLLECTIVE</span></div>
   ```
   Replace with:
   ```html
   <img src="logo.svg" alt="The Fab Collective" height="32">
   ```

---

## ADDING PROJECT PHOTOS

For now the portfolio section is not yet built into the page. When you're ready:
1. Add projects through the CMS at `/admin`
2. Flag to your developer to add the portfolio grid section to `index.html`

---

## SUPPORT CONTACTS

- Netlify docs: https://docs.netlify.com
- GitHub docs: https://docs.github.com
- GoDaddy DNS help: https://support.godaddy.com
