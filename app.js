/* DudeGifts — Premium Storefront Controller */
const PRODUCTS = [
  { id: 1, type: 'physical', title: 'A4 Photo Frame with Free Polaroids', price: 1299, img: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=900&q=85', desc: 'An A4 personalised photo frame with 8 free Polaroids, 8 wooden clips and a decorative thread.' },
  { id: 2, type: 'physical', title: 'A3 Photo Frame with Free Polaroids', price: 1799, img: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=900&q=85', desc: 'A large A3 personalised photo frame with 8 free Polaroids, 8 wooden clips and a decorative thread.' },
  { id: 3, type: 'physical', title: 'A4 Wall Stickers', price: 299, img: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=900&q=85', desc: 'Customised A4 wall stickers designed to add personality and creativity to your favourite space.' },
  { id: 4, type: 'physical', title: '10 Mini Polaroids Gift Set', price: 399, img: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&w=900&q=85', desc: 'A collection of 10 mini Polaroid prints with a free LED light, personalised message card and envelope.' },
  { id: 5, type: 'physical', title: '8 Medium Polaroids Gift Set', price: 499, img: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=85', desc: 'Eight medium-sized Polaroid prints presented with a free LED light, personalised message card and envelope.' },
  { id: 6, type: 'physical', title: '5 Large Polaroids Gift Set', price: 599, img: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=85', desc: 'Five large Polaroid prints perfect for gifting, including a free LED light, personalised message card and envelope.' },
  { id: 7, type: 'physical', title: 'Customised Pixar-Style Sticker Pack', price: 499, img: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=900&q=85', desc: 'A personalised pack of 30 custom Pixar-inspired stickers created to make your memories fun and unique.' },
  { id: 8, type: 'physical', title: '3D Miniature Photo Frame', price: 999, img: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=900&q=85', desc: 'A creative 3D miniature photo frame featuring layered details and a personalised memory-inspired design.' },
  { id: 9, type: 'physical', title: 'A5 Personalised Magazine', price: 799, img: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=900&q=85', desc: 'A personalised A5 magazine with 12 custom-designed pages, including a free heartfelt letter and custom stickers.' },
  { id: 10, type: 'physical', title: 'Pop-Up Photo Cube Boxes', price: 899, img: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=900&q=85', desc: 'Surprise someone special with creative pop-up photo cube boxes filled with personalised pictures and memories.' },
  { id: 11, type: 'physical', title: 'A4 Memory Book', price: 999, img: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=900&q=85', desc: 'An A4 personalised memory book with 10 pages to preserve your favourite photographs, messages and special moments.' },
  { id: 12, type: 'physical', title: '4x4 Inches Photo Frame with Free Polaroids', price: 599, img: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=900&q=85', desc: 'A compact 4x4-inch personalised photo frame with 8 free Polaroids, 8 wooden clips and a decorative thread.' },
  { id: 13, type: 'physical', title: '4x6 Inches Photo Frame with Free Polaroids', price: 799, img: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=900&q=85', desc: 'A stylish 4x6-inch personalised photo frame with 8 free Polaroids, 8 wooden clips and a decorative thread.' },
  { id: 14, type: 'physical', title: '8x6 Inches Photo Frame with Free Polaroids', price: 999, img: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=85', desc: 'An elegant 8x6-inch personalised photo frame with 8 free Polaroids, 8 wooden clips and a decorative thread.' },
  { id: 15, type: 'physical', title: '2x3 Acrylic Magnetic Photo Frame', price: 499, img: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=900&q=85', desc: 'A sleek 2x3-inch acrylic magnetic photo frame with 10 free replaceable photos to refresh your favourite memories.' },
  { id: 16, type: 'physical', title: '2x6 Acrylic Magnetic Photo Frame', price: 699, img: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=900&q=85', desc: 'A modern 2x6-inch acrylic magnetic photo frame with 5 free replaceable photos for a personalised display.' },
  { id: 17, type: 'physical', title: '4x4 Acrylic Magnetic Photo Frame', price: 799, img: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=900&q=85', desc: 'A contemporary 4x4-inch acrylic magnetic photo frame supplied with 4 replaceable photos to display special memories.' },
  { id: 18, type: 'physical', title: '4x6 Acrylic Magnetic Photo Frame', price: 899, img: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=85', desc: 'A premium 4x6-inch acrylic magnetic photo frame with 3 replaceable photos for a timeless personalised gift.' },
  { id: 19, type: 'physical', title: 'A5 Wall Magnetic Sheet Frame', price: 599, img: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=900&q=85', desc: 'An A5 wall-mounted magnetic sheet frame with 2 replaceable photos for a simple and stylish memory display.' },
  { id: 20, type: 'physical', title: 'A4 Wall Magnetic Sheet Frame', price: 899, img: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=900&q=85', desc: 'A larger A4 wall-mounted magnetic sheet frame with 2 replaceable photos to showcase your favourite moments.' },
  { id: 21, type: 'physical', title: 'Custom Gift Box', price: 1499, img: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=900&q=85', desc: 'Create a personalised gift box with a custom number of gifts, thoughtfully selected and arranged for a special occasion.' },
  { id: 22, type: 'digital', title: 'Interactive Birthday Wish', price: 199, img: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=900&q=85', previewUrl: '', desc: 'A personalized birthday experience filled with animated wishes, photos, and a special message.' },
  { id: 23, type: 'digital', title: 'Romantic Anniversary Experience', price: 599, img: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=85', previewUrl: '', desc: 'A cinematic anniversary gift with romantic scenes, music, heartfelt messages, and a surprise ending.' },
  { id: 24, type: 'digital', title: 'Will You Marry Me?', price: 999, img: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=85', previewUrl: '', desc: 'Create a cinematic proposal experience that builds anticipation before revealing the big question.' },
  { id: 25, type: 'digital', title: 'Luxury Wedding Invitation', price: 999, img: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=85', previewUrl: '', desc: 'Invite loved ones with an elegant animated wedding invitation featuring your story, venue, and event schedule.' },
  { id: 26, type: 'digital', title: 'Luxury Housewarming Invitation', price: 499, img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85', previewUrl: '', desc: 'Welcome guests to your new home with an elegant invitation, venue map, and event schedule.' },
  { id: 27, type: 'digital', title: 'The Woman Behind My Story', price: 399, img: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=900&q=85', previewUrl: '', desc: 'Celebrate Mom through childhood memories, heartfelt appreciation, family photos, and a personal letter.' },
  { id: 28, type: 'digital', title: 'A Letter to Mom', price: 199, img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=85', previewUrl: '', desc: 'Give your mother a heartfelt digital letter that expresses gratitude, love, and appreciation.' },
  { id: 29, type: 'digital', title: 'A Letter to Dad', price: 199, img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=85', previewUrl: '', desc: 'Share a meaningful letter thanking your father for his support, guidance, and love.' },
  { id: 30, type: 'digital', title: 'Best Brother Ever', price: 299, img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=85', previewUrl: '', desc: 'Celebrate your brother with funny moments, sibling photos, personal messages, and a surprise reveal.' },
  { id: 31, type: 'digital', title: 'Best Sister Ever', price: 299, img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=85', previewUrl: '', desc: 'Create a loving sibling gift full of memories, inside jokes, appreciation, and personal wishes.' },
  { id: 32, type: 'digital', title: 'The Friendship Files', price: 399, img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=85', previewUrl: '', desc: 'A playful collection of friendship memories, inside jokes, photos, and reasons your friend matters.' },
  { id: 33, type: 'digital', title: 'Baby’s First Birthday', price: 399, img: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=85', previewUrl: '', desc: 'Celebrate the first birthday with a personalized growth story, baby photos, and a special family message.' },
  { id: 34, type: 'digital', title: 'Christmas Mystery Gift', price: 299, img: 'https://images.unsplash.com/photo-1512389142860-9c449e58a543?auto=format&fit=crop&w=900&q=85', previewUrl: '', desc: 'Unwrap a Christmas-themed digital surprise with festive messages, animated scenes, and hidden gifts.' },
  { id: 35, type: 'digital', title: 'First Car Celebration', price: 249, img: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=85', previewUrl: '', desc: 'Celebrate a new car with personalized photos, a special message, and a memorable reveal.' },
  { id: 36, type: 'digital', title: 'Romantic Date Night Planner', price: 299, img: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=900&q=85', previewUrl: '', desc: 'Plan a romantic evening with personalized activities, conversation prompts, and thoughtful surprises.' },
  { id: 37, type: 'digital', title: 'Spin-the-Wheel Surprise', price: 199, img: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=900&q=85', previewUrl: '', desc: 'Spin a personalized digital wheel to reveal activities, messages, rewards, or fun challenges.' },
  { id: 38, type: 'digital', title: 'Open When You’re Sad', price: 249, img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=85', previewUrl: '', desc: 'Offer comforting words, favorite memories, and reminders of support in a private digital keepsake.' },
  { id: 39, type: 'digital', title: 'Employee Birthday Experience', price: 299, img: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=85', previewUrl: '', desc: 'Celebrate an employee with a branded birthday experience featuring team messages and photos.' },
  { id: 40, type: 'digital', title: 'Pet Memorial Tribute', price: 299, img: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=900&q=85', previewUrl: '', desc: 'Remember a beloved pet with a gentle digital tribute featuring favorite photos and special moments.' },
  { id: 41, type: 'surprise', title: 'Birthday Surprise', price: 1499, img: 'https://res.cloudinary.com/dtz0urit6/image/upload/q_auto:best,f_jpg/cloudinary-tools-uploads/xxfjpqm4ehc3ggqadpvb', desc: 'A personalized birthday surprise with decorations, a cake arrangement, and a memorable reveal.' },
  { id: 22, type: 'digital', title: 'Interactive Birthday Wish', price: 199, img: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=900&q=85', previewUrl: '', desc: 'A personalized birthday experience filled with animated wishes, photos, and a special message.' },
  { id: 23, type: 'digital', title: 'Romantic Anniversary Experience', price: 599, img: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=85', previewUrl: '', desc: 'A cinematic anniversary gift with romantic scenes, music, heartfelt messages, and a surprise ending.' },
  { id: 24, type: 'digital', title: 'Will You Marry Me?', price: 999, img: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=85', previewUrl: '', desc: 'Create a cinematic proposal experience that builds anticipation before revealing the big question.' },
  { id: 25, type: 'digital', title: 'Luxury Wedding Invitation', price: 999, img: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=85', previewUrl: '', desc: 'Invite loved ones with an elegant animated wedding invitation featuring your story, venue, and event schedule.' },
  { id: 26, type: 'digital', title: 'Luxury Housewarming Invitation', price: 499, img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85', previewUrl: '', desc: 'Welcome guests to your new home with an elegant invitation, venue map, and event schedule.' },
  { id: 27, type: 'digital', title: 'The Woman Behind My Story', price: 399, img: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=900&q=85', previewUrl: '', desc: 'Celebrate Mom through childhood memories, heartfelt appreciation, family photos, and a personal letter.' },
  { id: 28, type: 'digital', title: 'A Letter to Mom', price: 199, img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=85', previewUrl: '', desc: 'Give your mother a heartfelt digital letter that expresses gratitude, love, and appreciation.' },
  { id: 29, type: 'digital', title: 'A Letter to Dad', price: 199, img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=85', previewUrl: '', desc: 'Share a meaningful letter thanking your father for his support, guidance, and love.' },
  { id: 30, type: 'digital', title: 'Best Brother Ever', price: 299, img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=85', previewUrl: '', desc: 'Celebrate your brother with funny moments, sibling photos, personal messages, and a surprise reveal.' },
  { id: 31, type: 'digital', title: 'Best Sister Ever', price: 299, img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=85', previewUrl: '', desc: 'Create a loving sibling gift full of memories, inside jokes, appreciation, and personal wishes.' },
  { id: 32, type: 'digital', title: 'The Friendship Files', price: 399, img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=85', previewUrl: '', desc: 'A playful collection of friendship memories, inside jokes, photos, and reasons your friend matters.' },
  { id: 33, type: 'digital', title: 'Baby’s First Birthday', price: 399, img: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=85', previewUrl: '', desc: 'Celebrate the first birthday with a personalized growth story, baby photos, and a special family message.' },
  { id: 34, type: 'digital', title: 'Christmas Mystery Gift', price: 299, img: 'https://images.unsplash.com/photo-1512389142860-9c449e58a543?auto=format&fit=crop&w=900&q=85', previewUrl: '', desc: 'Unwrap a Christmas-themed digital surprise with festive messages, animated scenes, and hidden gifts.' },
  { id: 35, type: 'digital', title: 'First Car Celebration', price: 249, img: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=85', previewUrl: '', desc: 'Celebrate a new car with personalized photos, a special message, and a memorable reveal.' },
  { id: 36, type: 'digital', title: 'Romantic Date Night Planner', price: 299, img: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=900&q=85', previewUrl: '', desc: 'Plan a romantic evening with personalized activities, conversation prompts, and thoughtful surprises.' },
  { id: 37, type: 'digital', title: 'Spin-the-Wheel Surprise', price: 199, img: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=900&q=85', previewUrl: '', desc: 'Spin a personalized digital wheel to reveal activities, messages, rewards, or fun challenges.' },
  { id: 38, type: 'digital', title: 'Open When You’re Sad', price: 249, img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=85', previewUrl: '', desc: 'Offer comforting words, favorite memories, and reminders of support in a private digital keepsake.' },
  { id: 39, type: 'digital', title: 'Employee Birthday Experience', price: 299, img: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=85', previewUrl: '', desc: 'Celebrate an employee with a branded birthday experience featuring team messages and photos.' },
  { id: 40, type: 'digital', title: 'Pet Memorial Tribute', price: 299, img: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=900&q=85', previewUrl: '', desc: 'Remember a beloved pet with a gentle digital tribute featuring favorite photos and special moments.' },
  { id: 41, type: 'surprise', title: 'Anniversary Surprise', price: 2799, img: 'https://res.cloudinary.com/dtz0urit6/image/upload/q_auto:best,f_jpg/cloudinary-tools-uploads/xxfjpqm4ehc3ggqadpvb', desc: 'A clue-led surprise that turns familiar places into a story.' },
  { id: 42, type: 'surprise', title: 'Marriage Proposal', price: 4999, img: 'https://res.cloudinary.com/dtz0urit6/image/upload/q_auto:best,f_jpg/cloudinary-tools-uploads/xxfjpqm4ehc3ggqadpvb', desc: 'Plan a beautiful proposal with a personalized setup and a memorable ring reveal.' },
  { id: 43, type: 'surprise', title: 'Naming Ceremony', price: 4999, img: 'https://res.cloudinary.com/dtz0urit6/image/upload/q_auto:best,f_jpg/cloudinary-tools-uploads/xxfjpqm4ehc3ggqadpvb', desc: 'Create a beautiful setting for a meaningful family naming ceremony.' },
  { id: 44, type: 'surprise', title: 'Baby First Birthday', price: 4999, img: 'https://res.cloudinary.com/dtz0urit6/image/upload/q_auto:best,f_jpg/cloudinary-tools-uploads/xxfjpqm4ehc3ggqadpvb', desc: 'Celebrate the first year with a delightful theme, photo area, and family-friendly setup.' },
  { id: 45, type: 'surprise', title: 'College Farewell', price: 3999, img: 'https://res.cloudinary.com/dtz0urit6/image/upload/q_auto:best,f_jpg/cloudinary-tools-uploads/xxfjpqm4ehc3ggqadpvb', desc: 'Give classmates a memorable send-off with photos, messages, and a personalized celebration.' },
  { id: 46, type: 'surprise', title: 'New Car Celebration', price: 1999, img: 'https://res.cloudinary.com/dtz0urit6/image/upload/q_auto:best,f_jpg/cloudinary-tools-uploads/xxfjpqm4ehc3ggqadpvb', desc: 'Mark a new vehicle purchase with a personalized reveal and celebratory details.' },
  { id: 47, type: 'surprise', title: 'Friends Reunion', price: 3999, img: 'https://res.cloudinary.com/dtz0urit6/image/upload/q_auto:best,f_jpg/cloudinary-tools-uploads/xxfjpqm4ehc3ggqadpvb', desc: 'Reconnect old friends through memory displays, group games, and a surprise gathering.' },
  { id: 48, type: 'surprise', title: 'Personalized Gift Surprise', price: 1499, img: 'https://res.cloudinary.com/dtz0urit6/image/upload/q_auto:best,f_jpg/cloudinary-tools-uploads/xxfjpqm4ehc3ggqadpvb', desc: 'Pair a personalized gift with thoughtful presentation and a memorable delivery.' },
  { id: 49, type: 'chocolate', title: 'Premium Chocolate Gift Box', price: 699, img: 'https://images.unsplash.com/photo-1548907040-4d42bfc9b6e9?auto=format&fit=crop&w=900&q=85', desc: 'A thoughtfully arranged chocolate gift box for birthdays, celebrations and heartfelt thank-yous.' },
  { id: 50, type: 'chocolate', title: 'Chocolate & Roses Hamper', price: 1199, img: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=900&q=85', desc: 'A romantic pairing of chocolates and roses, beautifully presented for someone special.' },
  { id: 51, type: 'chocolate', title: 'Personalized Chocolate Hamper', price: 1499, img: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=85', desc: 'A celebratory chocolate hamper with a personalized gifting touch. Ask us about available flavours and packaging.' },
];
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const money = n => '₹' + Number(n || 0).toLocaleString('en-IN');

let filter = 'all';
let current = null;
let cart = loadCart();

function loadCart() {
  try {
    const saved = JSON.parse(localStorage.getItem('dudegifts_cart') || '[]');
    if (!Array.isArray(saved)) return [];
    return saved
      .map(item => ({ ...item, id: Number(item.id), qty: Math.max(1, Number(item.qty) || 1) }))
      .filter(item => PRODUCTS.some(p => p.id === item.id));
  } catch (e) {
    localStorage.removeItem('dudegifts_cart');
    return [];
  }
}

function saveCart() {
  localStorage.setItem('dudegifts_cart', JSON.stringify(cart));
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  const badge = $('.bag-count');
  if (badge) badge.textContent = count;
}

function showToast(message, type = 'success') {
  const toast = $('#toast');
  const text = $('#toastText');
  if (!toast || !text) return;
  text.textContent = message;
  const heading = toast.querySelector('b');
  if (heading) heading.textContent = type === 'remove' ? '✓ Removed from Gift Box' : '✓ Added to cart successfully';
  toast.classList.add('show');
  clearTimeout(window.__giftToastTimer);
  window.__giftToastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
}

function setFilter(value, shouldScroll = false) {
  const allowed = ['all', 'physical', 'digital', 'surprise', 'chocolate'];
  filter = allowed.includes(String(value).toLowerCase()) ? String(value).toLowerCase() : 'all';
  renderProducts();
  if (shouldScroll) {
    const products = $('#products');
    if (products) products.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function renderProducts() {
  const grid = $('#productGrid');
  if (!grid) return;
  const searchEl = $('#search');
  const q = (searchEl?.value || '').trim().toLowerCase();

  const list = PRODUCTS.filter(product => {
    const typeMatches = filter === 'all' || String(product.type).toLowerCase() === filter;
    const text = `${product.title} ${product.type} ${product.desc}`.toLowerCase();
    return typeMatches && text.includes(q);
  });

  if (!list.length) {
    grid.innerHTML = `<div class="empty-results"><strong>No gifts found.</strong><span>${q ? 'Try another search.' : 'Choose All Gifts or another category.'}</span></div>`;
  } else {
    grid.innerHTML = list.map(product => `
      <article class="card">
        <div class="card-img">
          <img src="${product.img}" alt="${product.title}" loading="lazy">
          <span class="card-tag">${product.type}</span>
        </div>
        <div class="card-body">
          <small>${product.type}</small>
          <h3>${product.title}</h3>
          <div class="price">${money(product.price)}</div>
          <div class="card-actions">
            ${product.type === 'digital'
        ? `<button type="button" class="mini" data-action="preview" data-id="${product.id}">Preview ↗</button>
                 <button type="button" class="mini alt" data-action="add" data-id="${product.id}">Order</button>`
        : `<button type="button" class="mini" data-action="view" data-id="${product.id}">View</button>
                 <button type="button" class="mini alt" data-action="add" data-id="${product.id}">Add to cart</button>`}
          </div>
        </div>
      </article>`).join('');
  }

  $$('.filter[data-filter]').forEach(button => {
    button.classList.toggle('active', String(button.dataset.filter).toLowerCase() === filter);
  });
}

function previewDigitalProduct(id) {
  const product = PRODUCTS.find(item => item.id === Number(id));
  if (!product || product.type !== 'digital') return;
  const url = String(product.previewUrl || '').trim();
  if (!url) {
    window.alert(`Preview link not configured for "${product.title}".\n\nOpen app.js and add the product's URL in its previewUrl field.`);
    return;
  }
  window.open(url, '_blank', 'noopener,noreferrer');
}

function openProduct(id) {
  current = PRODUCTS.find(product => product.id === Number(id));
  if (!current) return;
  $('#modalImage').src = current.img;
  $('#modalImage').alt = current.title;
  $('#modalCategory').textContent = current.type;
  $('#modalTitle').textContent = current.title;
  $('#modalPrice').textContent = money(current.price);
  $('#modalDescription').textContent = current.desc;
  $('#modalSuccess').classList.remove('show');
  $('#productModal').classList.add('show');
  $('#productModal').setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
}

function closeProduct() {
  const modal = $('#productModal');
  if (!modal) return;
  modal.classList.remove('show');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
}

function addToCart(id) {
  const product = PRODUCTS.find(item => item.id === Number(id));
  if (!product) return;
  const existing = cart.find(item => item.id === product.id);
  if (existing) existing.qty += 1;
  else cart.push({ ...product, qty: 1 });
  saveCart();
  renderDrawer();
  showToast(`${product.title} is now in your Gift Box.`);
}

function changeQty(id, delta) {
  const item = cart.find(product => product.id === Number(id));
  if (!item) return;
  item.qty += Number(delta);
  if (item.qty <= 0) cart = cart.filter(product => product.id !== item.id);
  saveCart();
  renderDrawer();
}

function removeItem(id) {
  const numericId = Number(id);
  const item = cart.find(product => product.id === numericId);
  if (!item) return;
  cart = cart.filter(product => product.id !== numericId);
  saveCart();
  renderDrawer();
  showToast(`${item.title} was removed from your Gift Box.`, 'remove');
}

function clearCart() {
  if (!cart.length) return;
  cart = [];
  saveCart();
  renderDrawer();
  showToast('All items were removed from your Gift Box.', 'remove');
}

function renderDrawer() {
  const box = $('#drawerItems');
  if (!box) return;
  if (!cart.length) {
    box.innerHTML = `<div class="empty-cart"><strong>Your Gift Box is empty.</strong><span>Add a gift and it will appear here.</span></div>`;
    $('#drawerTotal').textContent = '₹0';
    updateCheckoutState();
    return;
  }

  box.innerHTML = cart.map(item => `
    <div class="cart-row" data-cart-row="${item.id}">
      <img src="${item.img}" alt="${item.title}" loading="lazy">
      <div class="cart-info">
        <h4>${item.title}</h4>
        <small>${money(item.price)} each</small>
        <div class="cart-controls">
          <button type="button" class="qty-btn" data-cart-action="minus" data-id="${item.id}" aria-label="Decrease ${item.title}">−</button>
          <span class="qty-value">${item.qty}</span>
          <button type="button" class="qty-btn" data-cart-action="plus" data-id="${item.id}" aria-label="Increase ${item.title}">+</button>
        </div>
      </div>
      <button type="button" class="remove" data-cart-action="remove" data-id="${item.id}">Remove</button>
    </div>`).join('');

  const total = cart.reduce((sum, item) => sum + Number(item.price) * Number(item.qty), 0);
  $('#drawerTotal').textContent = money(total);
  updateCheckoutState();
}

function updateCheckoutState() {
  const button = $('#whatsappOrder');
  if (!button) return;
  button.disabled = !cart.length;
  button.classList.toggle('disabled', !cart.length);
}

function openDrawer() {
  renderDrawer();
  $('#drawer').classList.add('show');
  $('#drawer').setAttribute('aria-hidden', 'false');
  document.body.classList.add('drawer-open');
}
function closeDrawer() {
  $('#drawer').classList.remove('show');
  $('#drawer').setAttribute('aria-hidden', 'true');
  document.body.classList.remove('drawer-open');
}

function orderOnWhatsApp() {
  if (!cart.length) { showToast('Your Gift Box is empty.'); return; }
  const lines = cart.map((item, index) => `${index + 1}. ${item.title} — ${money(item.price)} x ${item.qty} = ${money(item.price * item.qty)}`);
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const message = `Hello DudeGifts! I would like to place an order.\n\n${lines.join('\n')}\n\nTotal: ${money(total)}\n\nPlease confirm availability and next steps.`;
  /* Replace this with your real DudeGifts WhatsApp number when ready. */
  const whatsappNumber = '917794986409';
  const url = whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    : `https://wa.me/?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}

/* Product grid: event delegation makes View/Add work after every filter change. */
$('#productGrid')?.addEventListener('click', event => {
  const button = event.target.closest('[data-action]');
  if (!button) return;
  const id = Number(button.dataset.id);
  if (button.dataset.action === 'view') openProduct(id);
  if (button.dataset.action === 'preview') previewDigitalProduct(id);
  if (button.dataset.action === 'add') addToCart(id);
});

/* Category buttons. */
$$('.filter[data-filter]').forEach(button => {
  button.addEventListener('click', event => {
    event.preventDefault();
    setFilter(button.dataset.filter, false);
  });
});

/* Large category cards. */
$$('[data-filter-link]').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    setFilter(link.dataset.filter, true);
  });
});

/* Footer category links. */
$$('[data-footer-filter]').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    setFilter(link.dataset.footerFilter, true);
  });
});

$('#search')?.addEventListener('input', renderProducts);
$('#searchBtn')?.addEventListener('click', () => $('#search')?.focus());

$('#modalAdd')?.addEventListener('click', () => {
  if (!current) return;
  addToCart(current.id);
  $('#modalSuccess').classList.add('show');
});
$('#closeModal')?.addEventListener('click', closeProduct);
$('#productModal')?.addEventListener('click', event => {
  if (event.target.id === 'productModal') closeProduct();
});

/* Cart: one delegated listener handles Remove, + and − reliably. */
$('#drawerItems')?.addEventListener('click', event => {
  const button = event.target.closest('[data-cart-action]');
  if (!button) return;
  event.preventDefault();
  event.stopPropagation();
  const id = Number(button.dataset.id);
  const action = button.dataset.cartAction;
  if (action === 'remove') removeItem(id);
  else if (action === 'plus') changeQty(id, 1);
  else if (action === 'minus') changeQty(id, -1);
});

$('#bagBtn')?.addEventListener('click', openDrawer);
$('#closeDrawer')?.addEventListener('click', closeDrawer);
$('#drawer')?.addEventListener('click', event => {
  if (event.target.id === 'drawer') closeDrawer();
});
$('#whatsappOrder')?.addEventListener('click', orderOnWhatsApp);
$('#clearCart')?.addEventListener('click', clearCart);

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    closeProduct();
    closeDrawer();
  }
});

/* Custom navigation and form. */
const navLinks = $$('.nav-link, .mobile-menu-links a');
const sections = ['shop', 'custom', 'story', 'contact'].map(id => document.getElementById(id)).filter(Boolean);
function setActiveSection(id) { navLinks.forEach(link => link.classList.toggle('active', link.dataset.section === id)); }
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    const visible = entries.filter(e => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (visible) setActiveSection(visible.target.id);
  }, { rootMargin: '-25% 0px -55% 0px', threshold: [0, .15, .4, .7] });
  sections.forEach(section => observer.observe(section));
}

$$('[data-custom-scroll]').forEach(button => button.addEventListener('click', () => {
  document.getElementById('custom')?.scrollIntoView({ behavior: 'smooth' });
  setActiveSection('custom');
}));

navLinks.forEach(link => link.addEventListener('click', () => {
  if (link.dataset.section) setActiveSection(link.dataset.section);
  closeMobileMenu();
}));

const menuBtn = $('#menuBtn'), mobileMenu = $('#mobileMenu'), mobileClose = $('#mobileClose');
function openMobileMenu() { mobileMenu?.classList.add('show'); mobileMenu?.setAttribute('aria-hidden', 'false'); document.body.classList.add('menu-open'); }
function closeMobileMenu() { mobileMenu?.classList.remove('show'); mobileMenu?.setAttribute('aria-hidden', 'true'); document.body.classList.remove('menu-open'); }
menuBtn?.addEventListener('click', openMobileMenu);
mobileClose?.addEventListener('click', closeMobileMenu);

const customForm = $('#customForm'), customSuccess = $('#customSuccess');
customForm?.addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(customForm);
  const name = (data.get('name') || '').toString().trim();
  const recipient = (data.get('recipient') || '').toString().trim();
  const occasion = (data.get('occasion') || '').toString().trim();
  const phone = (data.get('phone') || '').toString().trim();
  const idea = (data.get('idea') || '').toString().trim();
  if (!name || !recipient || !occasion || !phone || !idea) return;
  customSuccess.classList.add('show');
  customSuccess.innerHTML = `<b>✓ Request received, ${name}.</b><span>We captured your ${occasion.toLowerCase()} idea for ${recipient}. The studio brief is ready.</span>`;
  customForm.reset();
});

/* Initial state. */
saveCart();
renderProducts();
renderDrawer();

/* Full-screen mobile menu backdrop */
$('#mobileMenuBackdrop')?.addEventListener('click', closeMobileMenu);
