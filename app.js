(function () {
  "use strict";

  const { SITE, CATEGORIES, PRODUCTS, GUIDES } = window;
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const amazonUrl = (asin) => `https://www.amazon.com/dp/${asin}`;
  const categoryLabel = (id) => (CATEGORIES.find((c) => c.id === id) || {}).label || id;

  // ── Site-wide config ───────────────────────────────────
  $$("[data-store-link]").forEach((a) => (a.href = SITE.amazonStoreUrl));
  $$("[data-email-link]").forEach((a) => {
    a.href = `mailto:${SITE.email}`;
    a.textContent = SITE.email;
  });
  $$("[data-response-time]").forEach((el) => (el.textContent = SITE.responseTime));
  $("#year").textContent = new Date().getFullYear();

  // ── Products ───────────────────────────────────────────
  const grid = $("#product-grid");
  const filter = $("#category-filter");

  function renderProducts(category) {
    const list = category === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.category === category);
    grid.innerHTML = list
      .map(
        (p) => `
        <article class="product">
          <a class="product-media" href="${amazonUrl(p.asin)}" target="_blank" rel="noopener" tabindex="-1" aria-hidden="true">
            <img src="${esc(p.image)}" alt="" loading="lazy" width="400" height="400">
          </a>
          <div class="product-body">
            <span class="tag tag-${esc(p.category)}">${esc(categoryLabel(p.category))}</span>
            <h3>${esc(p.name)}</h3>
            <p>${esc(p.blurb)}</p>
            <div class="product-actions">
              <a class="btn btn-small btn-ink" href="${amazonUrl(p.asin)}" target="_blank" rel="noopener">View on Amazon ↗</a>
              ${p.guide ? `<a class="link" href="#how-to" data-open-guide="${esc(p.guide)}">How to use</a>` : ""}
            </div>
          </div>
        </article>`
      )
      .join("");
  }

  const filterOptions = [{ id: "all", label: "All" }, ...CATEGORIES];
  filter.innerHTML = filterOptions
    .map((c, i) => `<button class="chip" role="tab" data-category="${esc(c.id)}" aria-selected="${i === 0}">${esc(c.label)}</button>`)
    .join("");
  filter.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-category]");
    if (!btn) return;
    $$("[data-category]", filter).forEach((b) => b.setAttribute("aria-selected", b === btn));
    renderProducts(btn.dataset.category);
  });
  renderProducts("all");

  // ── Guides ─────────────────────────────────────────────
  const picker = $("#guide-picker");
  const panel = $("#guide-panel");

  picker.innerHTML = GUIDES.map(
    (g) => `<button class="chip" role="tab" id="tab-${esc(g.id)}" data-guide="${esc(g.id)}" aria-controls="guide-panel">${esc(g.title)}</button>`
  ).join("");

  function ebookBlock() {
    const action = SITE.churroEbookUrl
      ? `<a class="btn btn-small" href="${esc(SITE.churroEbookUrl)}" download>Download PDF</a>`
      : `<a class="btn btn-small" href="#contact" data-prefill-product="churro-maker" data-prefill-topic="Request the recipe eBook">Request it by email</a>`;
    return `
      <div class="ebook" id="ebook">
        <div><strong>Free churro recipe eBook</strong><small>10+ recipes included with your churro maker.</small></div>
        ${action}
      </div>`;
  }

  function renderGuide(id) {
    const g = GUIDES.find((x) => x.id === id) || GUIDES[0];
    const product = PRODUCTS.find((p) => p.guide === g.id);
    $$("[data-guide]", picker).forEach((b) => b.setAttribute("aria-selected", b.dataset.guide === g.id));
    panel.setAttribute("aria-labelledby", `tab-${g.id}`);

    const list = (items) => `<ul>${items.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>`;
    panel.innerHTML = `
      <div class="guide-main">
        <div class="guide-head">
          ${product ? `<img src="${esc(product.image)}" alt="">` : ""}
          <h3 class="guide-title">${esc(g.title)}</h3>
        </div>
        <p class="guide-intro">${esc(g.intro)}</p>
        <h3>Step by step</h3>
        <ol class="steps">${g.steps.map((s) => `<li><span>${esc(s)}</span></li>`).join("")}</ol>
        ${g.ebook ? ebookBlock() : ""}
      </div>
      <div class="guide-side">
        ${g.tips && g.tips.length ? `<div class="box box-tips"><h3>Tips</h3>${list(g.tips)}</div>` : ""}
        ${
          g.troubleshooting && g.troubleshooting.length
            ? `<div><h3>Troubleshooting</h3><div class="faq">${g.troubleshooting
                .map((t) => `<details><summary>${esc(t.q)}</summary><p>${esc(t.a)}</p></details>`)
                .join("")}</div></div>`
            : ""
        }
        ${g.care && g.care.length ? `<div class="box box-care"><h3>Care &amp; cleaning</h3>${list(g.care)}</div>` : ""}
        <p class="guide-help">Still stuck? <a href="#contact" data-prefill-product="${esc(g.id)}">Send us a message</a> — we're happy to help.</p>
      </div>`;
  }

  picker.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-guide]");
    if (btn) {
      renderGuide(btn.dataset.guide);
      history.replaceState(null, "", `#guide-${btn.dataset.guide}`);
    }
  });

  // Links anywhere on the page can open a specific guide.
  document.addEventListener("click", (e) => {
    const link = e.target.closest("[data-open-guide]");
    if (link) renderGuide(link.dataset.openGuide);
  });

  // Deep link: reifierproducts.com/#guide-churro-maker
  const hashGuide = location.hash.match(/^#guide-(.+)$/);
  renderGuide(hashGuide ? hashGuide[1] : GUIDES[0].id);
  if (hashGuide) requestAnimationFrame(() => $("#how-to").scrollIntoView());

  // ── Contact form ───────────────────────────────────────
  const form = $("#contact-form");
  const status = $("#form-status");
  const productSelect = $("#product-select");

  productSelect.innerHTML =
    `<option value="">Choose a product…</option>` +
    PRODUCTS.map((p) => `<option data-guide="${esc(p.guide || "")}">${esc(p.name)}</option>`).join("") +
    `<option>Other / not listed</option>`;

  // "Request it by email" / "Send us a message" links pre-fill the form.
  document.addEventListener("click", (e) => {
    const link = e.target.closest("[data-prefill-product]");
    if (!link) return;
    const opt = $$("option", productSelect).find((o) => o.dataset.guide === link.dataset.prefillProduct);
    if (opt) productSelect.value = opt.value;
    if (link.dataset.prefillTopic) form.topic.value = link.dataset.prefillTopic;
  });

  function setStatus(msg, kind) {
    status.textContent = msg;
    status.className = `form-status ${kind || ""}`;
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (form.botcheck.checked) return;

    const required = ["name", "email", "message"];
    let firstInvalid = null;
    required.forEach((n) => {
      const el = form[n];
      const ok = el.value.trim() && (n !== "email" || /^\S+@\S+\.\S+$/.test(el.value.trim()));
      el.classList.toggle("invalid", !ok);
      if (!ok && !firstInvalid) firstInvalid = el;
    });
    if (firstInvalid) {
      setStatus("Please fill in your name, a valid email and a message.", "err");
      firstInvalid.focus();
      return;
    }

    const data = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      product: form.product.value || "Not specified",
      order: form.order.value.trim() || "—",
      topic: form.topic.value,
      message: form.message.value.trim(),
    };
    const subject = `[Reifier website] ${data.topic} — ${data.product}`;
    const body =
      `Name: ${data.name}\nEmail: ${data.email}\nProduct: ${data.product}\n` +
      `Amazon / Walmart order #: ${data.order}\nTopic: ${data.topic}\n\n${data.message}`;

    // No form key yet: hand the message to the visitor's email app.
    if (!SITE.web3formsKey) {
      location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setStatus(`Your email app should open with the message ready to send. If it doesn't, write to us at ${SITE.email}.`, "ok");
      return;
    }

    const btn = $("button[type=submit]", form);
    btn.disabled = true;
    setStatus("Sending…");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: SITE.web3formsKey,
          subject,
          from_name: "Reifier website",
          replyto: data.email,
          ...data,
        }),
      });
      const json = await res.json();
      if (!json.success) throw new Error(json.message || "Send failed");
      form.reset();
      setStatus(`Thanks, ${data.name.split(" ")[0]}! Your message was sent — we'll reply ${SITE.responseTime}.`, "ok");
    } catch (err) {
      setStatus(`Sorry, the message couldn't be sent. Please email us directly at ${SITE.email}.`, "err");
    } finally {
      btn.disabled = false;
    }
  });

  $$("input, textarea", form).forEach((el) => el.addEventListener("input", () => el.classList.remove("invalid")));
})();
