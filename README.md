# Azza Organics

A responsive, no-build storefront for Azza Organics. It includes a product catalog with honey and ghee flavors and size/price options, farm eggs, mustard oil, dry fruits, category and price filters, search, best-seller sorting, a cart, wishlist, WhatsApp ordering, contact messages and a local admin dashboard.

## Run locally

The admin password setup uses the browser's Web Crypto API. Serve the folder on `localhost` instead of opening `index.html` directly:

```powershell
python -m http.server 8000
```

Then open `http://localhost:8000`.

The first time you open **Admin access** in the footer, set up the local admin account with:

- Email: `ahsan@gmail.com`
- Password: enter the password you provided during first-run setup

The password is entered in the browser and only a SHA-256 verifier is stored in this browser's local storage; it is not included in the repository. The admin can manage orders and customer messages, add/edit/remove products, and add/rename categories. When adding or editing a product, optional pack options use the format `250 ml:1500, 500 ml:2800`. Upload 2–3 product photos; changing pack sizes uses the matching photo when available. Orders do not collect payment.

## Data and deployment

This version is a **local demo**. The browser stores products, categories, cart, wishlist, orders, messages and the admin verifier in `localStorage`. That data exists only in the current browser profile on the current device. It is not a shared database, is not synchronized to the admin on another device, and can be cleared with browser data.

The static site can be hosted on GitHub Pages, but doing so does not change those limitations. Do not use this demo to collect real customer information or treat its client-side admin panel as secure. A production launch needs a hosted database and server-side authentication/authorization.

## Publish on GitHub Pages

1. Create a GitHub repository and upload these project files to its root.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/(root)`, then save.
4. Open the Pages URL GitHub provides after its deployment finishes.

## Store details

- Contact: [azaaorganics@gmail.com](mailto:azaaorganics@gmail.com)
- WhatsApp orders: [0307 6158708](https://wa.me/923076158708)
- Designer credit: Choudhary Yasir
- Logo: `assets/azza-organics-logo.png`

Honey flavors include 250 ml and 500 ml packs plus 1 liter and 1 kg options at Rs. 2,800. Desi ghee is Rs. 3,000 per kg, eggs are available only in 1-dozen packs at Rs. 400 per dozen, almonds are Rs. 2,000 per kg, and mustard oil starts at Rs. 350 for a 250 ml bottle. Product prices and sizes can be edited in Admin.

A flat Rs. 250 delivery charge is added to each order and included in the checkout, WhatsApp order summary and saved order total.

Starter product photos are loaded from Unsplash URLs, so the product images do not need to be uploaded to GitHub. The logo remains in `assets/`; upload real product photos in Admin to replace starter images. The social links currently point to each platform's homepage; replace them with the business profile URLs. Update product details in `app.js` and links in `index.html` as needed.
