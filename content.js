// ─────────────────────────────────────────────────────────────
//  Reifier website content — edit this file to update the site.
//  No build step: save, re-upload / push, done.
// ─────────────────────────────────────────────────────────────

window.SITE = {
  brand: "Reifier",
  // Mailbox shown on the site and used as the fallback when no form key is set.
  email: "support@reifierproducts.com",
  responseTime: "within 1 business day",
  // Free contact-form key from https://web3forms.com (enter your email, they send a key).
  // Leave empty and the form opens the visitor's email app instead.
  web3formsKey: "",
  amazonStoreUrl: "https://www.amazon.com/s?me=A38ELTV7JTUAHC&marketplaceID=ATVPDKIKX0DER",
  amazonSellerUrl: "https://www.amazon.com/sp?seller=A38ELTV7JTUAHC",
  // Put the PDF in /downloads and set e.g. "downloads/churro-recipes.pdf".
  // Leave empty and the button asks the customer to request it by email.
  churroEbookUrl: "",
};

window.CATEGORIES = [
  { id: "garden", label: "Garden" },
  { id: "kitchen", label: "Kitchen" },
];

// To add a product: copy one block, change the fields, drop the photo in /images.
window.PRODUCTS = [
  {
    name: "Plant Watering Globes — 6-Pack",
    category: "garden",
    asin: "B09ZQHVBHV",
    image: "images/watering-globes-6.jpg",
    blurb: "Hand-blown, colorful glass globes that slowly water your plants for days. 6\" L × 2.5\" D.",
    guide: "watering-globes",
  },
  {
    name: "Large Iridescent Watering Globes — 4-Pack",
    category: "garden",
    asin: "B0GHKP1RYD",
    image: "images/watering-globes-iridescent.jpg",
    blurb: "Bigger iridescent globes that hold about 7 oz each — made for larger pots. 8.8\" L × 3\" D.",
    guide: "watering-globes",
  },
  {
    name: "Terracotta Watering Spikes — 6-Pack",
    category: "garden",
    asin: "B0BGQQ9PG7",
    image: "images/watering-spikes-6.jpg",
    blurb: "Natural clay spikes that turn any bottle into a slow-release plant waterer.",
    guide: "watering-spikes",
  },
  {
    name: "Terracotta Watering Spikes — 10-Pack",
    category: "garden",
    asin: "B0BGQPKLCP",
    image: "images/watering-spikes-10.jpg",
    blurb: "Same spikes, more plants. Works with water, soda and glass bottles, indoors or out.",
    guide: "watering-spikes",
  },
  {
    name: "Churro Maker with 8 Discs",
    category: "kitchen",
    asin: "B0BXDGNHD5",
    image: "images/churro-maker.jpg",
    blurb: "Twist-press churro maker with 8 interchangeable discs and a free recipe eBook. Dishwasher safe.",
    guide: "churro-maker",
  },
  {
    name: "14-Piece Cookie Press Set",
    category: "kitchen",
    asin: "B0DD3Z7ZRW",
    image: "images/cookie-press.jpg",
    blurb: "Press-and-release cookie press with 12 stainless steel disks and a storage case.",
    guide: "cookie-press",
  },
];

window.GUIDES = [
  {
    id: "watering-globes",
    title: "Watering Globes",
    intro: "Globes keep soil evenly moist between waterings. They release water as the soil dries, so they work best in soil that is already damp.",
    steps: [
      "Water your plant first so the soil is evenly moist. Globes maintain moisture — they won't rescue bone-dry soil.",
      "Fill the globe by holding the stem under a slow-running faucet, or by submerging it in a sink or bucket until it's full.",
      "Make a pilot hole in the soil with a pencil or chopstick, a few inches away from the plant's stem so you don't hit the main roots.",
      "Cover the opening with your thumb, flip the globe and push the stem into the hole at least 2 inches deep. Firm the soil around it.",
      "Refill when it's empty — usually every 1–2 weeks depending on plant size, pot size, sunlight and temperature.",
    ],
    tips: [
      "Small pots: 1 globe. Medium and large pots: 2 or more, spaced around the plant.",
      "The large iridescent globes are best for pots 8 inches and wider.",
      "Each globe is hand-blown, so size and color can vary slightly from one to the next.",
    ],
    troubleshooting: [
      { q: "The globe empties in a few hours.", a: "The soil was too dry or too loose. Water the plant thoroughly, then re-insert the globe deeper and press the soil firmly around the stem." },
      { q: "The water level doesn't go down.", a: "The stem is probably plugged with soil. Rinse it under the tap and clear it with a pipe cleaner or toothpick. If the soil is still wet, the plant simply doesn't need water yet." },
    ],
    care: [
      "Rinse with warm water between uses.",
      "For cloudy residue, add a splash of white vinegar and a pinch of uncooked rice, shake gently, then rinse.",
      "Hand wash only — the glass is thin and hand-blown, so handle with care.",
    ],
  },
  {
    id: "watering-spikes",
    title: "Terracotta Watering Spikes",
    intro: "The clay spike lets water seep slowly into the soil as it dries out, so a single bottle can water a plant for several days.",
    steps: [
      "Soak the spikes in water for 15–30 minutes before the first use so the clay is saturated and starts releasing water right away.",
      "Water your plant so the soil is moist.",
      "Push the spike into the soil a few inches from the plant's stem, deep enough that the clay part is fully buried.",
      "Fill a bottle with water — plastic water bottles, soda bottles and glass bottles all work.",
      "Flip the bottle and insert its neck into the opening at the top of the spike. Refill when the bottle is empty.",
    ],
    tips: [
      "Bigger bottle = longer between refills. Use larger bottles for thirsty or outdoor plants.",
      "Large pots and garden beds may need 2 or more spikes.",
    ],
    troubleshooting: [
      { q: "The water flows too slowly or stops.", a: "Poke a small pin hole in the bottom of the bottle (now facing up) to let air in. Also check the clay isn't clogged with minerals — see care below." },
      { q: "The bottle empties too fast.", a: "Make sure the clay part is completely buried and the soil around it is pressed firmly. Very dry, sandy soil drinks fast at first — water the plant before inserting the spike." },
    ],
    care: [
      "White marks on the clay are natural mineral deposits from tap water — they're harmless.",
      "If a spike stops releasing water, soak it in water with a little white vinegar for an hour and scrub with a brush.",
      "Bring outdoor spikes inside before freezing weather — wet clay can crack in frost.",
    ],
  },
  {
    id: "churro-maker",
    title: "Churro Maker",
    intro: "Make bakery-style churros at home. Your churro maker includes 8 discs and a free recipe eBook with 10+ recipes.",
    ebook: true,
    steps: [
      "Before the first use, wash all parts in warm soapy water or in the dishwasher.",
      "Prepare your churro dough (see the recipe eBook). Let it cool for a few minutes until you can handle it — it should be thick but pipeable.",
      "Pick a disc, place it in the end cap and screw the cap onto the tube.",
      "Fill the tube with dough, pressing it down to remove air pockets.",
      "Screw the handle on, then twist it to push the dough out. Cut each churro to length with scissors or a knife as it comes out.",
      "Fry in oil heated to 350–375°F (175–190°C) for 2–3 minutes per side until golden. Drain on paper towels and roll in cinnamon sugar.",
    ],
    tips: [
      "Pipe churros onto a parchment-lined tray first, then slide them into the oil — it's safer than piping over hot oil.",
      "The star discs give classic ridged churros; try the others for cookies and fun shapes.",
    ],
    troubleshooting: [
      { q: "The dough is very hard to push out.", a: "The dough is too stiff — mix in a spoonful of warm water at a time until it pipes smoothly." },
      { q: "Churros lose their shape or spread.", a: "The dough is too wet — add a little flour, or let it rest a few minutes to firm up." },
    ],
    care: [
      "All parts are dishwasher safe. Unscrew everything and clean before dough dries inside.",
      "Keep the plastic parts away from hot oil, burners and hot pans.",
    ],
  },
  {
    id: "cookie-press",
    title: "Cookie Press",
    intro: "Press perfect, consistent cookies with one squeeze of the lever. Your set includes 12 stainless steel disks and a storage case.",
    steps: [
      "Before the first use, wash the tube, plunger and disks in warm soapy water and dry them well.",
      "Make a spritz (press) cookie dough — soft and smooth, with no chips or nuts that could block the disk.",
      "Unscrew the bottom ring, drop in the disk you want and screw the ring back on.",
      "Fill the tube with dough, packing it down to remove air pockets, then attach the lever top.",
      "Stand the press straight up on a cool, ungreased baking sheet. Squeeze the lever once, then lift the press straight up — the cookie stays on the sheet.",
      "Bake according to your recipe until the edges are lightly golden.",
    ],
    tips: [
      "Don't use parchment paper, silicone mats or a greased sheet — the dough needs a bare surface to grip.",
      "Use room-temperature dough. Chilled dough is too stiff to press.",
      "The first one or two presses may come out uneven while the press fills up — just scrape them back into the bowl.",
    ],
    troubleshooting: [
      { q: "Cookies stick to the press instead of the sheet.", a: "Use a cool, bare metal sheet (let it cool between batches). Make sure it isn't greased or lined." },
      { q: "Cookies come out uneven or broken.", a: "There's air in the tube — refill it, packing the dough firmly. If the dough crumbles, it's too dry: add a teaspoon of milk." },
      { q: "The dough is too soft and spreads.", a: "Chill it for 5–10 minutes or add a little flour." },
    ],
    care: [
      "Wash all parts by hand in warm soapy water and dry them completely before storing.",
      "Keep the disks in the storage case so they don't get bent or lost.",
    ],
  },
];
