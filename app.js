const STORAGE_KEYS = {
  products: "azza-organics-products-v1",
  categories: "azza-organics-categories-v1",
  catalogRevision: "azza-organics-catalog-revision-v1",
  cart: "azza-organics-cart-v1",
  wishlist: "azza-organics-wishlist-v1",
  orders: "azza-organics-orders-v1",
  messages: "azza-organics-messages-v1",
  adminHash: "azza-organics-admin-hash-v1",
  theme: "azza-organics-theme-v1",
};

const CATALOG_REVISION = "9";
const DELIVERY_FEE = 250;
const starterCategories = ["Honey", "Desi Ghee", "Farm Eggs", "Mustard Oil", "Dry Fruits"];
const gheeImage = "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=800&q=80";
const mustardOilImage = "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=800&q=80";
const datesImage = "https://images.unsplash.com/photo-1608797178974-15b35a64ede9?auto=format&fit=crop&w=800&q=80";
const starterProducts = [
  {
    id: "wildflower-honey",
    name: "Wildflower Honey",
    category: "Honey",
    description: "Raw & unfiltered",
    price: 700,
    image: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?auto=format&fit=crop&w=800&q=80",
    tag: "Best seller",
    sold: 96,
    bestSeller: true,
    variants: [
      { id: "250-ml", label: "250 ml", price: 700 },
      { id: "500-ml", label: "500 ml", price: 1400 },
      { id: "1-liter", label: "1 liter", price: 2800 },
      { id: "1-kg", label: "1 kg", price: 2800 },
    ],
  },
  {
    id: "sidr-honey",
    name: "Sidr Honey",
    category: "Honey",
    description: "Rich & naturally sweet",
    price: 700,
    image: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?auto=format&fit=crop&w=800&q=80",
    tag: "Small batch",
    sold: 78,
    bestSeller: true,
    variants: [
      { id: "250-ml", label: "250 ml", price: 700 },
      { id: "500-ml", label: "500 ml", price: 1400 },
      { id: "1-liter", label: "1 liter", price: 2800 },
      { id: "1-kg", label: "1 kg", price: 2800 },
    ],
  },
  {
    id: "desi-ghee",
    name: "Desi Ghee",
    category: "Desi Ghee",
    description: "Slow clarified, golden",
    price: 750,
    image: gheeImage,
    images: [gheeImage],
    tag: "Farm favorite",
    sold: 91,
    bestSeller: true,
    variants: [
      { id: "250-g", label: "250 g", price: 750, image: gheeImage },
      { id: "500-g", label: "500 g", price: 1500, image: gheeImage },
      { id: "1-kg", label: "1 kg", price: 3000, image: gheeImage },
    ],
  },
  {
    id: "farm-eggs",
    name: "Farm Fresh Eggs",
    category: "Farm Eggs",
    description: "Free-range · dozen",
    price: 400,
    image: "https://images.unsplash.com/photo-1518569656558-1f25e69d93d7?auto=format&fit=crop&w=800&q=80",
    tag: "Fresh pick",
    sold: 68,
    bestSeller: true,
    variants: [
      { id: "1-dozen", label: "1 dozen", price: 400 },
    ],
  },
  {
    id: "mustard-oil",
    name: "Cold-Pressed Mustard Oil",
    category: "Mustard Oil",
    description: "Bold, traditional & cold-pressed",
    price: 350,
    image: mustardOilImage,
    images: [mustardOilImage],
    tag: "Pantry essential",
    sold: 0,
    bestSeller: false,
    variants: [
      { id: "250-ml", label: "250 ml bottle", price: 350, image: mustardOilImage },
      { id: "500-ml", label: "500 ml bottle", price: 700, image: mustardOilImage },
      { id: "1-liter", label: "1 liter bottle", price: 1400, image: mustardOilImage },
    ],
  },
  {
    id: "acacia-honey",
    name: "Acacia Honey",
    category: "Honey",
    description: "Delicate & floral",
    price: 700,
    image: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?auto=format&fit=crop&w=800&q=80",
    tag: "Pure & simple",
    sold: 54,
    bestSeller: false,
    variants: [
      { id: "250-ml", label: "250 ml", price: 700 },
      { id: "500-ml", label: "500 ml", price: 1400 },
      { id: "1-liter", label: "1 liter", price: 2800 },
      { id: "1-kg", label: "1 kg", price: 2800 },
    ],
  },
  {
    id: "cultured-ghee",
    name: "Cultured Desi Ghee",
    category: "Desi Ghee",
    description: "Traditional batch churned",
    price: 750,
    image: gheeImage,
    images: [gheeImage],
    tag: "Traditional",
    sold: 42,
    bestSeller: false,
    variants: [
      { id: "250-g", label: "250 g", price: 750, image: gheeImage },
      { id: "500-g", label: "500 g", price: 1500, image: gheeImage },
      { id: "1-kg", label: "1 kg", price: 3000, image: gheeImage },
    ],
  },
  {
    id: "orange-blossom-honey",
    name: "Orange Blossom Honey",
    category: "Honey",
    description: "Light, citrusy floral notes",
    price: 700,
    image: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?auto=format&fit=crop&w=800&q=80",
    tag: "Floral",
    sold: 34,
    bestSeller: false,
    variants: [
      { id: "250-ml", label: "250 ml", price: 700 },
      { id: "500-ml", label: "500 ml", price: 1400 },
      { id: "1-liter", label: "1 liter", price: 2800 },
      { id: "1-kg", label: "1 kg", price: 2800 },
    ],
  },
  {
    id: "cinnamon-honey",
    name: "Cinnamon Infused Honey",
    category: "Honey",
    description: "Warm cinnamon & pure honey",
    price: 700,
    image: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?auto=format&fit=crop&w=800&q=80",
    tag: "Infused",
    sold: 29,
    bestSeller: false,
    variants: [
      { id: "250-ml", label: "250 ml", price: 700 },
      { id: "500-ml", label: "500 ml", price: 1400 },
      { id: "1-liter", label: "1 liter", price: 2800 },
      { id: "1-kg", label: "1 kg", price: 2800 },
    ],
  },
  {
    id: "ginger-honey",
    name: "Ginger Infused Honey",
    category: "Honey",
    description: "A gently warming honey blend",
    price: 700,
    image: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?auto=format&fit=crop&w=800&q=80",
    tag: "Infused",
    sold: 25,
    bestSeller: false,
    variants: [
      { id: "250-ml", label: "250 ml", price: 700 },
      { id: "500-ml", label: "500 ml", price: 1400 },
      { id: "1-liter", label: "1 liter", price: 2800 },
      { id: "1-kg", label: "1 kg", price: 2800 },
    ],
  },
  {
    id: "garlic-ghee",
    name: "Garlic Desi Ghee",
    category: "Desi Ghee",
    description: "Classic ghee with savory garlic",
    price: 750,
    image: gheeImage,
    images: [gheeImage],
    tag: "Savory",
    sold: 31,
    bestSeller: false,
    variants: [
      { id: "250-g", label: "250 g", price: 750, image: gheeImage },
      { id: "500-g", label: "500 g", price: 1500, image: gheeImage },
      { id: "1-kg", label: "1 kg", price: 3000, image: gheeImage },
    ],
  },
  {
    id: "turmeric-ghee",
    name: "Turmeric Desi Ghee",
    category: "Desi Ghee",
    description: "Golden ghee with earthy turmeric",
    price: 750,
    image: gheeImage,
    images: [gheeImage],
    tag: "Savory",
    sold: 22,
    bestSeller: false,
    variants: [
      { id: "250-g", label: "250 g", price: 750, image: gheeImage },
      { id: "500-g", label: "500 g", price: 1500, image: gheeImage },
      { id: "1-kg", label: "1 kg", price: 3000, image: gheeImage },
    ],
  },
  {
    id: "almonds",
    name: "Premium Almonds",
    category: "Dry Fruits",
    description: "Whole, crunchy almonds",
    price: 500,
    image: "https://images.unsplash.com/photo-1508061253366-f7da158b6d46?auto=format&fit=crop&w=800&q=80",
    tag: "Pantry staple",
    sold: 46,
    bestSeller: true,
    variants: [
      { id: "250-g", label: "250 g", price: 500 },
      { id: "500-g", label: "500 g", price: 1000 },
      { id: "1-kg", label: "1 kg", price: 2000 },
    ],
  },
  {
    id: "cashews",
    name: "Whole Cashews",
    category: "Dry Fruits",
    description: "Creamy, whole cashews",
    price: 2200,
    image: "https://images.unsplash.com/photo-1508061253366-f7da158b6d46?auto=format&fit=crop&w=800&q=80",
    tag: "Select harvest",
    sold: 38,
    bestSeller: false,
    variants: [
      { id: "250-g", label: "250 g", price: 2200 },
      { id: "500-g", label: "500 g", price: 4200 },
    ],
  },
  {
    id: "pistachios",
    name: "Salted Pistachios",
    category: "Dry Fruits",
    description: "Lightly salted & roasted",
    price: 2400,
    image: "https://images.unsplash.com/photo-1508061253366-f7da158b6d46?auto=format&fit=crop&w=800&q=80",
    tag: "Roasted",
    sold: 27,
    bestSeller: false,
    variants: [
      { id: "250-g", label: "250 g", price: 2400 },
      { id: "500-g", label: "500 g", price: 4500 },
    ],
  },
  {
    id: "dates",
    name: "Soft Medjool Dates",
    category: "Dry Fruits",
    description: "Naturally sweet, soft dates",
    price: 1400,
    image: datesImage,
    images: [datesImage],
    tag: "Naturally sweet",
    sold: 52,
    bestSeller: true,
    variants: [
      { id: "500-g", label: "500 g", price: 1400 },
      { id: "1-kg", label: "1 kg", price: 2500 },
    ],
  },
  {
    id: "mixed-dry-fruits",
    name: "Mixed Dry Fruits",
    category: "Dry Fruits",
    description: "A mix of nuts & dried fruit",
    price: 2000,
    image: "https://images.unsplash.com/photo-1608797178974-15b35a64ede9?auto=format&fit=crop&w=800&q=80",
    tag: "Pantry mix",
    sold: 33,
    bestSeller: false,
    variants: [
      { id: "250-g", label: "250 g", price: 2000 },
      { id: "500-g", label: "500 g", price: 3800 },
    ],
  },
];

function readStored(key, fallback) {
  const saved = localStorage.getItem(key);
  if (saved === null) return fallback;
  const value = JSON.parse(saved);
  if (value === null || typeof value !== "object") {
    throw new Error(`Saved data for ${key} is not valid.`);
  }
  return value;
}

function loadCatalog() {
  const savedProducts = readStored(STORAGE_KEYS.products, null);
  const savedCategories = readStored(STORAGE_KEYS.categories, null);
  if (savedProducts !== null && !Array.isArray(savedProducts)) {
    throw new Error("Saved product catalog is not valid.");
  }
  if (savedCategories !== null && !Array.isArray(savedCategories)) {
    throw new Error("Saved category list is not valid.");
  }
  if (localStorage.getItem(STORAGE_KEYS.catalogRevision) === CATALOG_REVISION) {
    return {
      products: savedProducts || starterProducts,
      categories: savedCategories || starterCategories,
    };
  }

  const previousProducts = savedProducts || [];
  const previousById = new Map(previousProducts.map((product) => [product.id, product]));
  const seedIds = new Set(starterProducts.map((product) => product.id));
  const products = [
    ...starterProducts.map((product) => {
      const previous = previousById.get(product.id);
      if (!previous) return product;
      const merged = { ...previous, ...product, sold: Math.max(Number(previous.sold) || 0, product.sold) };
      const previousImages = Array.isArray(previous.images) && previous.images.length
        ? previous.images
        : (typeof previous.image === "string" && previous.image.startsWith("data:image/") ? [previous.image] : null);
      const customImages = previousImages && previousImages.some((image) => typeof image === "string" && image.startsWith("data:image/"))
        ? previousImages
        : null;
      if (customImages) {
        merged.image = previous.image || customImages[0];
        merged.images = customImages;
        merged.variants = product.variants.map((variant, index) => {
          const previousVariant = getProductVariants(previous).find((item) => item.label.toLowerCase() === variant.label.toLowerCase());
          return {
            ...variant,
            image: previousVariant && previousVariant.image
              ? previousVariant.image
              : (index === 0 && !variant.image ? customImages[0] : variant.image),
          };
        });
      }
      return merged;
    }),
    ...previousProducts.filter((product) => !seedIds.has(product.id)),
  ];
  const categories = [...new Set([...starterCategories, ...(savedCategories || [])])];
  save(STORAGE_KEYS.products, products);
  save(STORAGE_KEYS.categories, categories);
  localStorage.setItem(STORAGE_KEYS.catalogRevision, CATALOG_REVISION);
  return { products, categories };
}

const catalog = loadCatalog();
const state = {
  products: catalog.products,
  categories: catalog.categories,
  cart: readStored(STORAGE_KEYS.cart, {}),
  wishlist: readStored(STORAGE_KEYS.wishlist, []),
  orders: readStored(STORAGE_KEYS.orders, []),
  messages: readStored(STORAGE_KEYS.messages, []),
  category: "All",
  search: "",
  sort: "popular",
  adminAuthenticated: false,
  adminTab: "orders",
  editingProductId: null,
  editingCategory: null,
};

const overlay = document.querySelector("#overlay");
const toast = document.querySelector("#toast");
let toastTimer;

function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[character]);
}

function formatPrice(value) {
  return `Rs. ${Number(value).toLocaleString("en-PK")}`;
}

function formatDate(value) {
  return new Date(value).toLocaleString("en-PK", {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

function makeId(prefix) {
  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("visible"), 2600);
}

function getProduct(productId) {
  return state.products.find((product) => product.id === productId);
}

function getProductVariants(product) {
  if (Array.isArray(product.variants) && product.variants.length) return product.variants;
  return [{ id: "standard", label: product.size || "Standard pack", price: Number(product.price) }];
}

function getVariant(product, variantId) {
  return getProductVariants(product).find((variant) => variant.id === variantId) || getProductVariants(product)[0];
}

function getVariantImage(product, variant) {
  if (variant.image) return variant.image;
  const variantIndex = getProductVariants(product).findIndex((item) => item.id === variant.id);
  return product.images && product.images[variantIndex] ? product.images[variantIndex] : product.image;
}

function getProductGalleryImages(product, variant) {
  return [...new Set([
    getVariantImage(product, variant),
    ...(Array.isArray(product.images) ? product.images : []),
    ...getProductVariants(product).map((item) => item.image),
    product.image,
  ].filter(Boolean))].slice(0, 3);
}

function getCartKey(productId, variantId) {
  return `${productId}::${variantId}`;
}

function getStartingPrice(product) {
  return Math.min(...getProductVariants(product).map((variant) => Number(variant.price)));
}

function parsePackVariants(value, fallbackPrice) {
  const entries = value.split(",").map((entry) => entry.trim()).filter(Boolean);
  if (!entries.length) {
    return { variants: [{ id: "standard", label: "Standard pack", price: fallbackPrice }] };
  }
  if (entries.length > 8) return { error: "Add no more than 8 pack sizes per product." };

  const labels = new Set();
  const variants = [];
  for (const [index, entry] of entries.entries()) {
    const separator = entry.lastIndexOf(":");
    const label = entry.slice(0, separator).trim();
    const price = Number(entry.slice(separator + 1).trim());
    const normalizedLabel = label.toLowerCase();
    if (separator < 1 || !label || !Number.isInteger(price) || price < 1 || price > 1000000) {
      return { error: "Use pack options like 250 ml:700, with each price from Rs. 1 to Rs. 1,000,000." };
    }
    if (labels.has(normalizedLabel)) return { error: "Pack size labels must be unique." };
    labels.add(normalizedLabel);
    variants.push({
      id: `${normalizedLabel.replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "pack"}-${index + 1}`,
      label,
      price,
    });
  }
  return { variants };
}

async function compressProductImage(file) {
  if (!file.type.startsWith("image/")) throw new Error("Choose an image file to continue.");
  if (file.size > 12 * 1024 * 1024) throw new Error("Image file must be 12 MB or smaller.");
  if (typeof createImageBitmap !== "function") {
    throw new Error("Image uploads require a modern browser with image processing support.");
  }

  let bitmap;
  try {
    bitmap = await createImageBitmap(file);
  } catch {
    throw new Error("This image could not be opened. Try a JPG, PNG or WebP file.");
  }
  const maxDimension = 1000;
  const scale = Math.min(1, maxDimension / Math.max(bitmap.width, bitmap.height));
  const canvas = document.createElement("canvas");
  canvas.width = Math.max(1, Math.round(bitmap.width * scale));
  canvas.height = Math.max(1, Math.round(bitmap.height * scale));
  const context = canvas.getContext("2d");
  if (!context) {
    bitmap.close();
    throw new Error("This browser could not prepare the product image.");
  }
  context.fillStyle = "#ffffff";
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
  bitmap.close();
  const dataUrl = canvas.toDataURL("image/jpeg", 0.72);
  if (dataUrl.length > 700_000) {
    throw new Error("The compressed image is still too large. Choose a smaller image.");
  }
  return dataUrl;
}

function renderCounts() {
  const cartCount = Object.values(state.cart).reduce((sum, quantity) => sum + Number(quantity), 0);
  document.querySelector("#cart-count").textContent = cartCount;
  document.querySelector("#wishlist-count").textContent = state.wishlist.length;
}

function renderCategories() {
  const categories = ["All", ...state.categories];
  if (!categories.includes(state.category)) state.category = "All";
  document.querySelector("#category-tabs").innerHTML = categories.map((category) => `
    <button class="category-tab ${state.category === category ? "active" : ""}" type="button" data-action="category" data-category="${escapeHtml(category)}">${escapeHtml(category === "All" ? "All products" : category)}</button>
  `).join("");
}

function renderProducts() {
  const minValue = document.querySelector("#min-price").value;
  const maxValue = document.querySelector("#max-price").value;
  const minPrice = minValue === "" ? 0 : Math.max(0, Math.min(100000, Number(minValue) || 0));
  const maxPrice = maxValue === "" ? 100000 : Math.max(0, Math.min(100000, Number(maxValue) || 0));
  const search = state.search.trim().toLowerCase();
  const filtered = state.products.filter((product) => {
    const matchesCategory = state.category === "All" || product.category === state.category;
    const searchable = `${product.name} ${product.category} ${product.description} ${getProductVariants(product).map((variant) => variant.label).join(" ")}`.toLowerCase();
    const startingPrice = getStartingPrice(product);
    const matchesPrice = getProductVariants(product).some((variant) => variant.price >= minPrice && variant.price <= maxPrice);
    return matchesCategory && searchable.includes(search) && matchesPrice;
  });

  if (state.sort === "popular") filtered.sort((first, second) => Number(second.sold || 0) - Number(first.sold || 0));
  if (state.sort === "price-low") filtered.sort((first, second) => getStartingPrice(first) - getStartingPrice(second));
  if (state.sort === "price-high") filtered.sort((first, second) => getStartingPrice(second) - getStartingPrice(first));
  if (state.sort === "name") filtered.sort((first, second) => first.name.localeCompare(second.name));

  document.querySelector("#empty-products").classList.toggle("hidden", filtered.length > 0);
  document.querySelector("#product-grid").innerHTML = filtered.map((product) => {
    const wished = state.wishlist.includes(product.id);
    const variants = getProductVariants(product);
    const defaultVariant = variants[0];
    return `
      <article class="product-card">
        <div class="product-image-wrap">
          <button class="product-image-open" type="button" data-action="view-product" data-id="${escapeHtml(product.id)}" aria-label="View ${escapeHtml(product.name)}">
            <img class="product-image" src="${escapeHtml(getVariantImage(product, defaultVariant))}" alt="" loading="lazy" />
          </button>
          <span class="product-tag">${escapeHtml(product.tag || (product.bestSeller ? "Best seller" : product.category))}</span>
          <button class="wish-toggle ${wished ? "active" : ""}" type="button" data-action="toggle-wish" data-id="${escapeHtml(product.id)}" aria-label="${wished ? "Remove from" : "Add to"} wishlist">${wished ? "♥" : "♡"}</button>
        </div>
        <div class="product-details">
          <p class="product-category">${escapeHtml(product.category)}</p>
          <div class="product-title-row"><h3 class="product-title"><button class="product-title-link" type="button" data-action="view-product" data-id="${escapeHtml(product.id)}">${escapeHtml(product.name)}</button></h3><span class="product-price" data-role="variant-price">${formatPrice(defaultVariant.price)}</span></div>
          <p class="product-unit">${escapeHtml(product.description)}</p>
          <label class="product-variant-label">Pack size
            <select class="product-variant-select" data-action="select-variant" data-id="${escapeHtml(product.id)}">
              ${variants.map((variant) => `<option value="${escapeHtml(variant.id)}" data-price="${Number(variant.price)}">${escapeHtml(variant.label)} · ${formatPrice(variant.price)}</option>`).join("")}
            </select>
          </label>
          <button class="add-to-cart" type="button" data-action="add-cart" data-id="${escapeHtml(product.id)}" data-variant-id="${escapeHtml(defaultVariant.id)}">Add to bag <span aria-hidden="true">+</span></button>
        </div>
      </article>
    `;
  }).join("");
}

function renderProductDetails(productId, selectedVariantId) {
  const product = getProduct(productId);
  if (!product) return;
  const variants = getProductVariants(product);
  const defaultVariant = getVariant(product, selectedVariantId || variants[0].id);
  const galleryImages = getProductGalleryImages(product, defaultVariant);
  const wished = state.wishlist.includes(product.id);
  showOverlay(`
    <section class="product-detail-panel" role="dialog" aria-modal="true" aria-label="${escapeHtml(product.name)} details">
      <button class="close-button product-detail-close" type="button" data-action="close-overlay" aria-label="Close product details">×</button>
      <div class="product-detail-gallery">
        <div class="product-detail-image"><img data-role="product-detail-image" src="${escapeHtml(galleryImages[0])}" alt="${escapeHtml(product.name)}" /></div>
        ${galleryImages.length > 1 ? `<div class="product-gallery-thumbnails" aria-label="Product photos">${galleryImages.map((image, index) => `
          <button class="product-gallery-thumbnail ${index === 0 ? "active" : ""}" type="button" data-action="select-product-image" data-index="${index}" data-src="${escapeHtml(image)}" aria-label="View product photo ${index + 1}" aria-pressed="${index === 0}">
            <img src="${escapeHtml(image)}" alt="" />
          </button>
        `).join("")}</div>` : ""}
      </div>
      <div class="product-detail-copy">
        <p class="eyebrow"><span class="eyebrow-line"></span> ${escapeHtml(product.category.toUpperCase())}</p>
        <h2>${escapeHtml(product.name)}</h2>
        <p class="product-detail-description">${escapeHtml(product.description)}</p>
        <p class="product-detail-price" data-role="variant-price">${formatPrice(defaultVariant.price)}</p>
        <label class="product-variant-label">Choose a pack size
          <select class="product-variant-select" data-action="select-variant" data-id="${escapeHtml(product.id)}">
            ${variants.map((variant) => `<option value="${escapeHtml(variant.id)}" ${variant.id === defaultVariant.id ? "selected" : ""}>${escapeHtml(variant.label)} · ${formatPrice(variant.price)}</option>`).join("")}
          </select>
        </label>
        <div class="product-detail-actions">
          <button class="button button-dark" type="button" data-action="add-cart" data-id="${escapeHtml(product.id)}" data-variant-id="${escapeHtml(defaultVariant.id)}">Add to bag <span aria-hidden="true">+</span></button>
          <button class="button button-light" type="button" data-action="toggle-wish" data-id="${escapeHtml(product.id)}">${wished ? "♥ Saved" : "♡ Add to wishlist"}</button>
        </div>
        <p class="drawer-note">No online payment. Order details are confirmed with our team on WhatsApp.</p>
      </div>
    </section>
  `, true);
}

function refreshStorefront() {
  renderCategories();
  renderProducts();
  renderCounts();
}

function showOverlay(content, centered = false) {
  overlay.innerHTML = content;
  overlay.classList.remove("hidden");
  overlay.classList.toggle("product-overlay", centered);
  overlay.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
}

function closeOverlay() {
  overlay.innerHTML = "";
  overlay.classList.add("hidden");
  overlay.classList.remove("product-overlay");
  overlay.setAttribute("aria-hidden", "true");
  document.body.classList.remove("no-scroll");
}

function cartRows() {
  return Object.entries(state.cart)
    .map(([key, quantity]) => {
      const [productId, variantId] = key.includes("::") ? key.split("::") : [key, null];
      const product = getProduct(productId);
      if (!product) return null;
      const variant = variantId ? getVariant(product, variantId) : getProductVariants(product)[0];
      return { key, product, variant, quantity: Number(quantity) };
    })
    .filter((row) => row && row.quantity > 0);
}

function renderCart(checkoutOpen = false, confirmation = "") {
  const rows = cartRows();
  const subtotal = rows.reduce((sum, row) => sum + row.variant.price * row.quantity, 0);
  const total = subtotal + DELIVERY_FEE;
  const content = `
    <aside class="drawer" aria-label="Shopping bag">
      <div class="drawer-header"><h2>Your bag <span>(${rows.reduce((sum, row) => sum + row.quantity, 0)})</span></h2><button class="close-button" data-action="close-overlay" aria-label="Close">×</button></div>
      ${confirmation ? `<p class="drawer-empty">${escapeHtml(confirmation)}</p>` : ""}
      ${rows.length ? `
        <div class="cart-list">${rows.map(({ key, product, variant, quantity }) => `
          <div class="cart-row">
            <img src="${escapeHtml(getVariantImage(product, variant))}" alt="" />
            <div><h3>${escapeHtml(product.name)}</h3><p>${escapeHtml(variant.label)} · ${formatPrice(variant.price)}</p><div class="quantity-control"><button type="button" data-action="qty-minus" data-key="${escapeHtml(key)}" aria-label="Decrease quantity">−</button><span>${quantity}</span><button type="button" data-action="qty-plus" data-key="${escapeHtml(key)}" aria-label="Increase quantity">+</button></div></div>
            <div><span class="cart-row-price">${formatPrice(variant.price * quantity)}</span><br /><button class="remove-item" type="button" data-action="remove-cart" data-key="${escapeHtml(key)}">Remove</button></div>
          </div>
        `).join("")}</div>
        <div class="cart-summary">
          <div><span>Subtotal</span><span>${formatPrice(subtotal)}</span></div>
          <div><span>Delivery</span><span>${formatPrice(DELIVERY_FEE)}</span></div>
          <div class="cart-total"><span>Total</span><span>${formatPrice(total)}</span></div>
        </div>
        <p class="drawer-note">No online payment. We'll confirm your order on WhatsApp.</p>
        ${checkoutOpen ? `
          <form class="checkout-form" id="checkout-form">
            <h3>Where should we deliver?</h3>
            <label>Your name<input name="name" required maxlength="80" autocomplete="name" /></label>
            <label>Phone number<input name="phone" type="tel" required maxlength="30" autocomplete="tel" /></label>
            <label>Delivery address<textarea name="address" rows="2" required maxlength="400" autocomplete="street-address"></textarea></label>
            <button class="button button-dark" type="submit">Place order on WhatsApp <span aria-hidden="true">↗</span></button>
          </form>
        ` : `<button class="button button-dark" type="button" data-action="open-checkout">Continue to order <span aria-hidden="true">→</span></button>`}
      ` : `<p class="drawer-empty">${confirmation ? "" : "Your bag is waiting for something good."}</p>`}
    </aside>
  `;
  showOverlay(content);
}

function renderWishlist() {
  const products = state.wishlist.map(getProduct).filter(Boolean);
  showOverlay(`
    <aside class="drawer" aria-label="Wishlist">
      <div class="drawer-header"><h2>Your wishlist <span>(${products.length})</span></h2><button class="close-button" data-action="close-overlay" aria-label="Close">×</button></div>
      ${products.length ? `<div class="wishlist-list">${products.map((product) => `
        <div class="wishlist-row">
          <img src="${escapeHtml(getVariantImage(product, getProductVariants(product)[0]))}" alt="" />
          <div><h3>${escapeHtml(product.name)}</h3><p>From ${formatPrice(getStartingPrice(product))}</p></div>
          <div class="wishlist-actions"><button type="button" data-action="wish-add" data-id="${escapeHtml(product.id)}">Add to bag</button><button type="button" data-action="wish-remove" data-id="${escapeHtml(product.id)}">Remove</button></div>
        </div>
      `).join("")}</div>` : `<p class="drawer-empty">Save your favorites here and come back to them anytime.</p>`}
    </aside>
  `);
}

function orderWhatsAppUrl(order) {
  const lines = order.items.map((item) => `${item.quantity} × ${item.name}${item.variantLabel ? ` (${item.variantLabel})` : ""} — ${formatPrice(item.price * item.quantity)}`);
  const text = [
    `Hello Azza Organics, I'd like to place order ${order.id}.`,
    `Name: ${order.customer.name}`,
    `Phone: ${order.customer.phone}`,
    `Address: ${order.customer.address}`,
    ...lines,
    `Subtotal: ${formatPrice(order.subtotal ?? order.total - (order.deliveryFee || 0))}`,
    `Delivery: ${formatPrice(order.deliveryFee || 0)}`,
    `Total: ${formatPrice(order.total)}`,
  ].join("\n");
  return `https://wa.me/923076158708?text=${encodeURIComponent(text)}`;
}

function renderAdminLogin(message = "") {
  const setupMode = localStorage.getItem(STORAGE_KEYS.adminHash) === null;
  showOverlay(`
    <section class="admin-overlay">
      <div class="login-panel">
        <button class="close-button" type="button" data-action="close-overlay" aria-label="Close admin panel" style="float:right">×</button>
        <img class="brand-image" src="assets/azza-organics-logo.png" alt="Azza Organics" />
        <h2>${setupMode ? "Set up local admin" : "Welcome back"}</h2>
        <p>${setupMode ? "Create this browser's admin access. Use the email and password you provided." : "Sign in to manage orders, products and customer notes."}</p>
        <form class="admin-form" id="admin-login-form" data-mode="${setupMode ? "setup" : "login"}">
          <label>Email address<input name="email" type="email" value="ahsan@gmail.com" required autocomplete="username" /></label>
          <label>Password<input name="password" type="password" required minlength="8" autocomplete="${setupMode ? "new-password" : "current-password"}" /></label>
          ${setupMode ? `<label>Confirm password<input name="confirmPassword" type="password" required minlength="8" autocomplete="new-password" /></label>` : ""}
          <p class="login-error" id="login-error">${escapeHtml(message)}</p>
          <button class="button button-dark" type="submit">${setupMode ? "Create local admin access" : "Sign in"} <span aria-hidden="true">→</span></button>
        </form>
        <p class="local-warning">Local demo only: this browser stores the admin account, orders, products and messages. This is not a secure shared online database.</p>
      </div>
    </section>
  `);
}

function orderStatusOptions(currentStatus, orderId) {
  const statuses = ["New", "Confirmed", "Preparing", "Out for delivery", "Delivered", "Cancelled"];
  return `<select class="admin-select" data-action="order-status" data-id="${escapeHtml(orderId)}" aria-label="Order status">${statuses.map((status) => `<option ${currentStatus === status ? "selected" : ""}>${status}</option>`).join("")}</select>`;
}

function renderAdminOrders() {
  if (!state.orders.length) return `<div class="admin-empty">No orders yet. New customer orders will appear here.</div>`;
  return `<div class="admin-table-wrap"><table class="admin-table">
    <thead><tr><th>Order</th><th>Placed</th><th>Customer &amp; delivery</th><th>Items</th><th>Total</th><th>Track status</th></tr></thead>
    <tbody>${[...state.orders].reverse().map((order) => `
      <tr>
        <td>${escapeHtml(order.id)}</td>
        <td>${escapeHtml(formatDate(order.createdAt))}</td>
        <td>${escapeHtml(order.customer.name)}<br /><span>${escapeHtml(order.customer.phone)} · ${escapeHtml(order.customer.address)}</span></td>
        <td>${order.items.map((item) => `${escapeHtml(item.quantity)} × ${escapeHtml(item.name)}${item.variantLabel ? ` (${escapeHtml(item.variantLabel)})` : ""}`).join("<br />")}</td>
        <td>Subtotal: ${formatPrice(order.subtotal ?? order.total - (order.deliveryFee || 0))}<br /><span>Delivery: ${formatPrice(order.deliveryFee || 0)}</span><br /><strong>Total: ${formatPrice(order.total)}</strong></td>
        <td>${orderStatusOptions(order.status, order.id)}</td>
      </tr>
    `).join("")}</tbody>
  </table></div>`;
}

function renderAdminProducts() {
  const editingProduct = state.products.find((product) => product.id === state.editingProductId) || null;
  const packOptions = editingProduct
    ? getProductVariants(editingProduct).map((variant) => `${variant.label}:${variant.price}`).join(", ")
    : "";
  const editingImages = editingProduct
    ? [...new Set([...(Array.isArray(editingProduct.images) ? editingProduct.images : []), editingProduct.image].filter(Boolean))].slice(0, 3)
    : [];
  return `
    <div class="admin-section-head"><div><h3>Products</h3><p>Add, edit or remove items from your storefront.</p></div></div>
    <form class="admin-form" id="product-form" ${editingProduct ? `data-product-id="${escapeHtml(editingProduct.id)}"` : ""}>
      <label>Product name<input name="name" value="${escapeHtml(editingProduct ? editingProduct.name : "")}" required maxlength="80" /></label>
      <label>Category<select name="category" required>${state.categories.map((category) => `<option value="${escapeHtml(category)}" ${editingProduct && editingProduct.category === category ? "selected" : ""}>${escapeHtml(category)}</option>`).join("")}</select></label>
      <label>Default price (Rs.)<input name="price" type="number" min="1" max="1000000" step="1" value="${editingProduct ? getStartingPrice(editingProduct) : ""}" required /></label>
      <label>Short description<input name="description" value="${escapeHtml(editingProduct ? editingProduct.description : "")}" required maxlength="100" /></label>
      <label class="full-width">Pack sizes &amp; prices (optional)<input name="packSizes" value="${escapeHtml(packOptions)}" maxlength="240" placeholder="250 ml:700, 500 ml:1400, 1 liter:2800" /></label>
      <label class="full-width">Upload 2–3 product photos<input name="images" type="file" accept="image/*" multiple ${editingProduct ? "" : "required"} /></label>
      ${editingProduct ? `<div class="admin-image-preview full-width">${editingImages.map((image, index) => `<img src="${escapeHtml(image)}" alt="Current photo ${index + 1} of ${escapeHtml(editingProduct.name)}" />`).join("")}<span>Current photos. Leave empty to keep them, or select 2–3 replacement photos.</span></div>` : ""}
      <label><span>Product label (optional)</span><input name="tag" value="${escapeHtml(editingProduct ? editingProduct.tag || "" : "")}" maxlength="30" placeholder="Small batch" /></label>
      <label style="display:flex;align-items:center;gap:8px"><input name="bestSeller" type="checkbox" style="width:auto" ${editingProduct && editingProduct.bestSeller ? "checked" : ""} /> Feature as a best seller</label>
      <button class="button button-dark full-width" type="submit">${editingProduct ? "Save product" : "Add product"} <span aria-hidden="true">${editingProduct ? "✓" : "+"}</span></button>
      ${editingProduct ? `<button class="button button-light full-width" type="button" data-action="cancel-product-edit">Cancel editing</button>` : ""}
    </form>
    <p class="admin-form-note">Upload 2–3 product photos; the first is the main image, and pack options use their matching photo when available. Pack prices are used in the storefront and cart.</p>
    <div class="admin-section-head" style="margin-top:30px"><div><h3>Current catalog</h3><p>${state.products.length} products listed.</p></div></div>
    ${state.products.length ? `<div class="admin-table-wrap"><table class="admin-table"><thead><tr><th>Product</th><th>Category</th><th>Pack options</th><th>From</th><th>Best seller</th><th>Actions</th></tr></thead><tbody>${state.products.map((product) => `
      <tr><td>${escapeHtml(product.name)}</td><td>${escapeHtml(product.category)}</td><td>${getProductVariants(product).map((variant) => escapeHtml(variant.label)).join(", ")}</td><td>${formatPrice(getStartingPrice(product))}</td><td>${product.bestSeller ? "Featured" : "—"}</td><td><div class="admin-row-actions"><button type="button" data-action="edit-product" data-id="${escapeHtml(product.id)}">Edit</button><button type="button" data-action="delete-product" data-id="${escapeHtml(product.id)}">Remove</button></div></td></tr>
    `).join("")}</tbody></table></div>` : `<div class="admin-empty">No products in your catalog.</div>`}
  `;
}

function renderAdminCategories() {
  const editingCategory = state.editingCategory;
  return `
    <div class="admin-section-head"><div><h3>Categories</h3><p>Add or rename storefront collections.</p></div></div>
    <form class="admin-form" id="category-form">
      <label class="full-width">${editingCategory ? "Rename category" : "New category name"}<input name="name" value="${escapeHtml(editingCategory || "")}" required maxlength="40" placeholder="e.g. Pantry staples" /></label>
      <button class="button button-dark full-width" type="submit">${editingCategory ? "Save category" : "Add category"} <span aria-hidden="true">${editingCategory ? "✓" : "+"}</span></button>
      ${editingCategory ? `<button class="button button-light full-width" type="button" data-action="cancel-category-edit">Cancel editing</button>` : ""}
    </form>
    <div class="admin-table-wrap" style="margin-top:22px"><table class="admin-table"><thead><tr><th>Category</th><th>Products</th><th>Actions</th></tr></thead><tbody>${state.categories.map((category) => `
      <tr><td>${escapeHtml(category)}</td><td>${state.products.filter((product) => product.category === category).length}</td><td><button type="button" data-action="edit-category" data-category="${escapeHtml(category)}">Edit</button></td></tr>
    `).join("")}</tbody></table></div>
  `;
}

function renderAdminMessages() {
  if (!state.messages.length) return `<div class="admin-empty">No customer notes yet. Messages sent through the contact form will appear here.</div>`;
  return [...state.messages].reverse().map((message) => `
    <article class="message-card">
      <div class="message-card-head">
        <div><h4>${escapeHtml(message.name)}</h4><small><a href="mailto:${escapeHtml(message.email)}">${escapeHtml(message.email)}</a> · ${escapeHtml(formatDate(message.createdAt))}</small></div>
        <span class="status-badge ${message.status === "New" ? "new" : ""}">${escapeHtml(message.status)}</span>
      </div>
      <p>${escapeHtml(message.message).replace(/\n/g, "<br />")}</p>
      <button type="button" data-action="message-status" data-id="${escapeHtml(message.id)}">${message.status === "New" ? "Mark as replied" : "Mark as new"}</button>
    </article>
  `).join("");
}

function renderAdmin() {
  if (!state.adminAuthenticated) {
    renderAdminLogin();
    return;
  }
  const newMessages = state.messages.filter((message) => message.status === "New").length;
  const newOrders = state.orders.filter((order) => ["New", "Confirmed", "Preparing", "Out for delivery"].includes(order.status)).length;
  const tabContent = {
    orders: renderAdminOrders,
    products: renderAdminProducts,
    categories: renderAdminCategories,
    messages: renderAdminMessages,
  };
  const labels = { orders: "Orders", products: "Products", categories: "Categories", messages: `Messages${newMessages ? ` (${newMessages})` : ""}` };
  showOverlay(`
    <section class="admin-overlay">
      <div class="admin-shell">
        <header class="admin-header">
          <div><p class="eyebrow"><span class="eyebrow-line"></span> AZZA ORGANICS</p><h2>Admin dashboard</h2></div>
          <div class="admin-header-actions"><button class="button button-light" type="button" data-action="admin-theme">Toggle theme</button><button class="button button-light" type="button" data-action="admin-close">Close</button><button class="button button-dark" type="button" data-action="logout">Sign out</button></div>
        </header>
        <p class="admin-welcome">Signed in as <strong>ahsan@gmail.com</strong> · local demo data stays in this browser.</p>
        <div class="admin-stats">
          <div class="stat-card"><span>All orders</span><strong>${state.orders.length}</strong></div>
          <div class="stat-card"><span>To fulfill</span><strong>${newOrders}</strong></div>
          <div class="stat-card"><span>New messages</span><strong>${newMessages}</strong></div>
        </div>
        <nav class="admin-tabs" aria-label="Admin sections">${Object.entries(labels).map(([tab, label]) => `
          <button class="admin-tab ${state.adminTab === tab ? "active" : ""}" type="button" data-action="admin-tab" data-tab="${tab}">${label}</button>
        `).join("")}</nav>
        <div class="admin-content">${tabContent[state.adminTab]()}</div>
      </div>
    </section>
  `);
}

async function hashPassword(password) {
  if (!window.crypto || !window.crypto.subtle) {
    throw new Error("Secure password setup requires a local web server. Open the site at http://localhost instead of as a file.");
  }
  const bytes = new TextEncoder().encode(password);
  const digest = await window.crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, "0")).join("");
}

document.querySelector("#current-year").textContent = new Date().getFullYear();

if (localStorage.getItem(STORAGE_KEYS.theme) === "dark") document.body.classList.add("dark-theme");

document.querySelector("#search-input").addEventListener("input", (event) => {
  state.search = event.target.value;
  renderProducts();
});

document.querySelector("#sort-select").addEventListener("change", (event) => {
  state.sort = event.target.value;
  renderProducts();
});

document.querySelector("#min-price").addEventListener("change", (event) => {
  event.target.value = Math.max(0, Math.min(100000, Number(event.target.value) || 0));
  renderProducts();
});

document.querySelector("#max-price").addEventListener("change", (event) => {
  event.target.value = event.target.value === ""
    ? 100000
    : Math.max(0, Math.min(100000, Number(event.target.value) || 0));
  renderProducts();
});

document.querySelector("#theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  save(STORAGE_KEYS.theme, document.body.classList.contains("dark-theme") ? "dark" : "light");
});

document.querySelector("#cart-button").addEventListener("click", () => renderCart());
document.querySelector("#wishlist-button").addEventListener("click", renderWishlist);
document.querySelector("#admin-button").addEventListener("click", renderAdmin);
const menuToggle = document.querySelector("#menu-toggle");
const mainNav = document.querySelector("#main-nav");
menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});
mainNav.addEventListener("click", (event) => {
  if (!event.target.closest("a")) return;
  mainNav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation");
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !overlay.classList.contains("hidden")) closeOverlay();
});

document.querySelector("#contact-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const fields = new FormData(form);
  state.messages.push({
    id: makeId("MSG"),
    name: String(fields.get("name")).trim(),
    email: String(fields.get("email")).trim(),
    message: String(fields.get("message")).trim(),
    status: "New",
    createdAt: new Date().toISOString(),
  });
  save(STORAGE_KEYS.messages, state.messages);
  form.reset();
  document.querySelector("#contact-feedback").textContent = "Thanks for reaching out. Your note is saved.";
  showToast("Your message has been received.");
});

document.addEventListener("click", (event) => {
  const button = event.target.closest("[data-action]");
  if (!button) return;
  const { action, id, category, tab, variantId, key } = button.dataset;

  if (action === "close-overlay" || action === "admin-close") closeOverlay();
  if (action === "view-product") renderProductDetails(id);
  if (action === "select-product-image") {
    const panel = button.closest(".product-detail-panel");
    panel.querySelector('[data-role="product-detail-image"]').src = button.dataset.src;
    panel.querySelectorAll(".product-gallery-thumbnail").forEach((thumbnail) => {
      const active = thumbnail === button;
      thumbnail.classList.toggle("active", active);
      thumbnail.setAttribute("aria-pressed", String(active));
    });
  }
  if (action === "category") {
    state.category = category;
    refreshStorefront();
  }
  if (action === "add-cart") {
    const cartKey = getCartKey(id, variantId || getProductVariants(getProduct(id))[0].id);
    state.cart[cartKey] = Number(state.cart[cartKey] || 0) + 1;
    save(STORAGE_KEYS.cart, state.cart);
    renderCounts();
    const product = getProduct(id);
    const variant = getVariant(product, variantId);
    showToast(`${product.name} (${variant.label}) added to your bag.`);
  }
  if (action === "toggle-wish") {
    const openedFromDetails = Boolean(button.closest(".product-detail-panel"));
    const selectedVariantId = openedFromDetails
      ? button.closest(".product-detail-panel").querySelector('[data-action="select-variant"]').value
      : null;
    state.wishlist = state.wishlist.includes(id) ? state.wishlist.filter((item) => item !== id) : [...state.wishlist, id];
    save(STORAGE_KEYS.wishlist, state.wishlist);
    if (openedFromDetails) renderProductDetails(id, selectedVariantId);
    else refreshStorefront();
  }
  if (action === "wish-add") {
    const product = getProduct(id);
    const variant = getProductVariants(product)[0];
    const cartKey = getCartKey(id, variant.id);
    state.cart[cartKey] = Number(state.cart[cartKey] || 0) + 1;
    save(STORAGE_KEYS.cart, state.cart);
    renderCounts();
    renderWishlist();
    showToast(`${product.name} (${variant.label}) added to your bag.`);
  }
  if (action === "wish-remove") {
    state.wishlist = state.wishlist.filter((item) => item !== id);
    save(STORAGE_KEYS.wishlist, state.wishlist);
    renderWishlist();
    renderCounts();
  }
  if (action === "qty-plus" || action === "qty-minus") {
    const next = Number(state.cart[key] || 0) + (action === "qty-plus" ? 1 : -1);
    if (next > 0) state.cart[key] = next;
    else delete state.cart[key];
    save(STORAGE_KEYS.cart, state.cart);
    renderCart(true);
    renderCounts();
  }
  if (action === "remove-cart") {
    delete state.cart[key];
    save(STORAGE_KEYS.cart, state.cart);
    renderCart(true);
    renderCounts();
  }
  if (action === "open-checkout") renderCart(true);
  if (action === "admin-tab") {
    state.adminTab = tab;
    state.editingProductId = null;
    state.editingCategory = null;
    renderAdmin();
  }
  if (action === "edit-product") {
    state.editingProductId = id;
    state.adminTab = "products";
    renderAdmin();
  }
  if (action === "cancel-product-edit") {
    state.editingProductId = null;
    renderAdmin();
  }
  if (action === "edit-category") {
    state.editingCategory = category;
    state.adminTab = "categories";
    renderAdmin();
  }
  if (action === "cancel-category-edit") {
    state.editingCategory = null;
    renderAdmin();
  }
  if (action === "admin-theme") {
    document.body.classList.toggle("dark-theme");
    save(STORAGE_KEYS.theme, document.body.classList.contains("dark-theme") ? "dark" : "light");
    renderAdmin();
  }
  if (action === "logout") {
    state.adminAuthenticated = false;
    renderAdminLogin();
  }
  if (action === "delete-product") {
    if (state.editingProductId === id) state.editingProductId = null;
    state.products = state.products.filter((product) => product.id !== id);
    state.wishlist = state.wishlist.filter((productId) => productId !== id);
    state.cart = Object.fromEntries(Object.entries(state.cart).filter(([cartKey]) => cartKey !== id && !cartKey.startsWith(`${id}::`)));
    save(STORAGE_KEYS.products, state.products);
    save(STORAGE_KEYS.wishlist, state.wishlist);
    save(STORAGE_KEYS.cart, state.cart);
    renderAdmin();
    refreshStorefront();
  }
  if (action === "message-status") {
    state.messages = state.messages.map((message) => message.id === id
      ? { ...message, status: message.status === "New" ? "Replied" : "New" }
      : message);
    save(STORAGE_KEYS.messages, state.messages);
    renderAdmin();
  }
});

document.addEventListener("change", (event) => {
  const variantSelect = event.target.closest('[data-action="select-variant"]');
  if (variantSelect) {
    const product = getProduct(variantSelect.dataset.id);
    const variant = getVariant(product, variantSelect.value);
    if (variantSelect.closest(".product-detail-panel")) {
      renderProductDetails(product.id, variant.id);
      return;
    }
    const container = variantSelect.closest(".product-card") || variantSelect.closest(".product-detail-panel");
    container.querySelector('[data-role="variant-price"]').textContent = formatPrice(variant.price);
    container.querySelector('[data-action="add-cart"]').dataset.variantId = variant.id;
    container.querySelector(".product-image").src = getVariantImage(product, variant);
    return;
  }

  const select = event.target.closest('[data-action="order-status"]');
  if (!select) return;
  state.orders = state.orders.map((order) => order.id === select.dataset.id ? { ...order, status: select.value } : order);
  save(STORAGE_KEYS.orders, state.orders);
  renderAdmin();
  showToast("Order status updated.");
});

document.addEventListener("submit", async (event) => {
  const form = event.target;
  if (form.id === "admin-login-form") {
    event.preventDefault();
    const fields = new FormData(form);
    const email = String(fields.get("email")).trim().toLowerCase();
    const password = String(fields.get("password"));
    const error = document.querySelector("#login-error");
    if (email !== "ahsan@gmail.com") {
      error.textContent = "Use the admin email shown in the footer.";
      return;
    }

    try {
      const passwordHash = await hashPassword(password);
      if (form.dataset.mode === "setup") {
        if (password !== String(fields.get("confirmPassword"))) {
          error.textContent = "The passwords do not match.";
          return;
        }
        localStorage.setItem(STORAGE_KEYS.adminHash, passwordHash);
        state.adminAuthenticated = true;
        state.adminTab = "orders";
        renderAdmin();
        showToast("Local admin access is ready.");
        return;
      }

      if (passwordHash !== localStorage.getItem(STORAGE_KEYS.adminHash)) {
        error.textContent = "That email and password combination was not recognized.";
        return;
      }
      state.adminAuthenticated = true;
      state.adminTab = "orders";
      renderAdmin();
    } catch (caughtError) {
      error.textContent = caughtError.message;
    }
    return;
  }

  if (form.id === "product-form") {
    event.preventDefault();
    const fields = new FormData(form);
    const price = Number(fields.get("price"));
    if (!Number.isInteger(price) || price < 1 || price > 1000000) {
      showToast("Enter a default price from Rs. 1 to Rs. 1,000,000.");
      return;
    }
    const existingProduct = state.products.find((item) => item.id === form.dataset.productId);
    const imageFiles = fields.getAll("images").filter((file) => file instanceof File && file.size > 0);
    if (imageFiles.length && (imageFiles.length < 2 || imageFiles.length > 3)) {
      showToast("Upload 2 or 3 photos at a time.");
      return;
    }
    let images = existingProduct
      ? [...new Set([...(Array.isArray(existingProduct.images) ? existingProduct.images : []), existingProduct.image].filter(Boolean))].slice(0, 3)
      : [];
    if (imageFiles.length) {
      try {
        images = await Promise.all(imageFiles.map(compressProductImage));
      } catch (imageError) {
        showToast(imageError.message);
        return;
      }
    }
    if (images.length > 3 || (images.length < 2 && (!existingProduct || imageFiles.length > 0 || !images.length))) {
      showToast("Each product needs 2 or 3 photos. Upload them to continue.");
      return;
    }
    const parsedPacks = parsePackVariants(String(fields.get("packSizes")), price);
    if (parsedPacks.error) {
      showToast(parsedPacks.error);
      return;
    }
    const category = String(fields.get("category"));
    const variants = parsedPacks.variants.map((variant, index) => {
      const existingVariant = existingProduct && getProductVariants(existingProduct).find((item) => item.label.toLowerCase() === variant.label.toLowerCase());
      return {
        ...variant,
        id: existingVariant ? existingVariant.id : variant.id,
        ...(!imageFiles.length && ((existingVariant && existingVariant.image) || images[index])
          ? { image: (existingVariant && existingVariant.image) || images[index] }
          : {}),
      };
    });
    const product = {
      ...(existingProduct || {}),
      id: existingProduct ? existingProduct.id : makeId("product"),
      name: String(fields.get("name")).trim(),
      category,
      description: String(fields.get("description")).trim(),
      price,
      image: images[0],
      images,
      tag: String(fields.get("tag")).trim() || (fields.get("bestSeller") ? "Best seller" : category),
      sold: existingProduct ? Number(existingProduct.sold) || 0 : 0,
      bestSeller: fields.get("bestSeller") === "on",
      variants,
    };
    product.price = getStartingPrice(product);
    const updatedProducts = existingProduct
      ? state.products.map((item) => item.id === existingProduct.id ? product : item)
      : [...state.products, product];
    try {
      save(STORAGE_KEYS.products, updatedProducts);
    } catch (saveError) {
      showToast("Product could not be saved. Browser storage may be full; use smaller photos or remove unused products.");
      return;
    }
    state.products = updatedProducts;
    state.editingProductId = null;
    renderAdmin();
    refreshStorefront();
    showToast(existingProduct ? "Product changes saved." : "Product added to your storefront.");
    return;
  }

  if (form.id === "category-form") {
    event.preventDefault();
    const name = String(new FormData(form).get("name")).trim();
    const oldName = state.editingCategory;
    if (!name) {
      showToast("Enter a category name.");
      return;
    }
    if (name.toLowerCase() === "all" || state.categories.some((category) => category.toLowerCase() === name.toLowerCase() && category !== oldName)) {
      showToast("That category already exists.");
      return;
    }
    if (oldName) {
      state.categories = state.categories.map((category) => category === oldName ? name : category);
      state.products = state.products.map((product) => product.category === oldName ? { ...product, category: name } : product);
      if (state.category === oldName) state.category = name;
      save(STORAGE_KEYS.products, state.products);
    } else {
      state.categories.push(name);
    }
    state.editingCategory = null;
    save(STORAGE_KEYS.categories, state.categories);
    renderAdmin();
    refreshStorefront();
    showToast(oldName ? "Category renamed." : "Category added.");
    return;
  }

  if (form.id === "checkout-form") {
    event.preventDefault();
    const fields = new FormData(form);
    const rows = cartRows();
    if (!rows.length) {
      renderCart();
      return;
    }
    const subtotal = rows.reduce((sum, row) => sum + row.variant.price * row.quantity, 0);
    const order = {
      id: `AZ-${Date.now().toString().slice(-7)}`,
      createdAt: new Date().toISOString(),
      status: "New",
      customer: {
        name: String(fields.get("name")).trim(),
        phone: String(fields.get("phone")).trim(),
        address: String(fields.get("address")).trim(),
      },
      items: rows.map(({ product, variant, quantity }) => ({
        id: product.id,
        name: product.name,
        variantId: variant.id,
        variantLabel: variant.label,
        price: variant.price,
        quantity,
      })),
      subtotal,
      deliveryFee: DELIVERY_FEE,
      total: subtotal + DELIVERY_FEE,
    };
    state.orders.push(order);
    state.products = state.products.map((product) => {
      const orderedItem = order.items.find((item) => item.id === product.id);
      return orderedItem ? { ...product, sold: Number(product.sold || 0) + orderedItem.quantity } : product;
    });
    state.cart = {};
    save(STORAGE_KEYS.orders, state.orders);
    save(STORAGE_KEYS.products, state.products);
    save(STORAGE_KEYS.cart, state.cart);
    window.open(orderWhatsAppUrl(order), "_blank", "noopener,noreferrer");
    renderCart(false, `Order ${order.id} saved. WhatsApp should open so you can send the order details to our team.`);
    renderCounts();
    refreshStorefront();
    showToast("Order saved. No payment has been taken.");
  }
});

document.addEventListener("error", (event) => {
  const image = event.target;
  if (!(image instanceof HTMLImageElement) || image.classList.contains("image-unavailable")) return;
  image.removeAttribute("src");
  image.alt = image.alt || "Azza Organics";
  image.classList.add("image-unavailable");
}, true);

refreshStorefront();
