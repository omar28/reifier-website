# reifierproducts.com

Static brand site for Reifier: products (linking to Amazon), how-to guides, contact form.
No build step, no server, no WordPress — plain HTML/CSS/JS hosted for free on GitHub Pages.

## Edit content

Everything editable lives in `content.js`:

- `SITE` — support email, response time, Amazon store link, contact-form key, churro eBook link
- `PRODUCTS` — one block per product (name, category, ASIN, photo, short text, guide id)
- `GUIDES` — how-to steps, tips, troubleshooting, care
- `CATEGORIES` — filter chips on the products section

Photos go in `images/`. The churro eBook PDF goes in `downloads/` (then set `churroEbookUrl`).

Old links printed on packaging (e.g. `/churros`, `/recipes`, `/contact`) hit `404.html`,
which redirects them to the matching section.

## Contact form

1. Go to https://web3forms.com, enter the support email, copy the access key it emails you.
2. Paste it into `SITE.web3formsKey`.

Until a key is set, the form opens the visitor's email app with the message pre-filled.

## Hosting (GitHub Pages, free)

1. Push this folder to a public GitHub repo.
2. Repo → Settings → Pages → Source: `main` branch, `/ (root)`. Custom domain: `reifierproducts.com`.
3. Namecheap → Domain List → reifierproducts.com → Advanced DNS:
   - Remove the old `@` URL-redirect/A record and the `www` CNAME to `wp.wpenginepowered.com`.
   - Add `A @ 185.199.108.153`, `A @ 185.199.109.153`, `A @ 185.199.110.153`, `A @ 185.199.111.153`.
   - Add `CNAME www <github-user>.github.io.`
   - **Keep the Zoho MX and TXT records** — they run the domain's email.
4. Once GitHub shows the domain as verified, tick **Enforce HTTPS**.

## Preview locally

```bash
python3 -m http.server 8090
```
