DUDEGIFTS — FOREST GREEN & ANTIQUE GOLD REDESIGN

This redesign preserves the original V1 HTML structure, app.js product catalogue, prices, descriptions, filters, search, product modal, gift-box/cart, local cart storage, custom request form and WhatsApp order flow.

FILES
- index.html: page structure and section text
- styles.css: original responsive styles plus a new forest-green/antique-gold visual theme override at the end
- app.js: original product data and interactions (preserved)
- assets/: put your own replaceable photos and videos here

THEME COLORS
- Deep forest: #182C20
- Secondary forest: #263D2B
- Warm ivory: #F8F0E4
- Cream: #F2E6D4
- Champagne sand: #D7C19B
- Antique gold: #B18A4A
- Bronze: #9A7139
- Sage: #A8B19A

HOW TO REPLACE PHOTOS
1. Add your image to assets/ (example: assets/hero-gift.jpg).
2. In index.html, find the image URL inside a <img src="..."> and replace it with assets/hero-gift.jpg.
3. The story background is set in styles.css under .story-art; replace its background-image URL there if desired.
4. Product images are defined in app.js in the PRODUCTS array as img: 'https://...'. Replace an individual URL with 'assets/your-photo.jpg' to use a local image. Keep the id, type, title, price and desc fields intact.

HOW TO CHANGE THE THEME
The new theme override is at the bottom of styles.css. Edit the :root variables in that final section. Keep the original CSS above it so responsive layout and component styles remain available.

MOBILE
The existing responsive breakpoints and mobile navigation are retained. Extract the ZIP fully and keep index.html, styles.css, app.js and assets together. Open index.html in a modern browser. Some mobile file viewers restrict local resources; for best testing use a browser or host the files on a web server.

WHATSAPP
The original app.js and contact links are preserved. Verify your WhatsApp number and order flow before public launch.


DIGITAL GIFT PREVIEW LINKS (UPDATED)
- Only products with type: 'digital' show a Preview button.
- Each digital product has its own previewUrl field in app.js.
- Replace the empty value with that product's actual preview link.
  Example: previewUrl: 'https://your-domain.com/previews/birthday-wish.html'
- Clicking Preview opens that product's configured URL in a new tab.
- If a previewUrl is empty, the site explains that the link needs to be configured.
- Physical and surprise products keep their normal View and Add to cart controls.
- The supplied product data did not contain individual digital preview URLs, so these fields are blank rather than invented.


UPDATE: CHOCOLATE CATEGORY
- Added Chocolate Gifts to the Shop category tiles, product filters, and footer shortcuts.
- Added three starter chocolate products (IDs 49–51) to app.js.
- Replace their image URLs, names, descriptions, and prices with your actual product data when ready.
