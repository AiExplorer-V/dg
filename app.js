/* DudeGifts — Premium Storefront Controller */
const PRODUCTS = [
  {id:1,type:'physical',title:'Memory Frame',price:1299,img:'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=900&q=85',desc:'A layered keepsake designed around a favourite photograph and memory.'},
  {id:2,type:'physical',title:'Polaroid Story Set',price:699,img:'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=85',desc:'A tactile set of printed moments for a desk, wall or memory box.'},
  {id:3,type:'physical',title:'Magnetic Acrylic Frame',price:1499,img:'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=900&q=85',desc:'A clean acrylic display for a photograph that deserves to stay visible.'},
  {id:4,type:'digital',title:'Our Moments — Video Story',price:899,img:'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=85',desc:'A cinematic digital story combining photos, words and music.'},
  {id:5,type:'digital',title:'The Digital Love Card',price:299,img:'https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=900&q=85',desc:'An interactive message they can open from any phone.'},
  {id:6,type:'digital',title:'Our Timeline',price:599,img:'https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=900&q=85',desc:'A beautiful scrollable timeline of the moments that became your story.'},
  {id:7,type:'surprise',title:'The Proposal Reveal',price:4999,img:'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=900&q=85',desc:'A planned reveal with details, timing and a memorable final moment.'},
  {id:8,type:'surprise',title:'First Birthday Magic',price:3499,img:'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=900&q=85',desc:'A joyful birthday experience designed around the little one and family.'},
  {id:9,type:'surprise',title:'Memory Trail',price:2799,img:'https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&w=900&q=85',desc:'A clue-led surprise that turns familiar places into a story.'}
];

const $ = (selector, root=document) => root.querySelector(selector);
const $$ = (selector, root=document) => [...root.querySelectorAll(selector)];
const money = n => '₹' + Number(n || 0).toLocaleString('en-IN');

let filter = 'all';
let current = null;
let cart = loadCart();

function loadCart(){
  try {
    const saved = JSON.parse(localStorage.getItem('dudegifts_cart') || '[]');
    if(!Array.isArray(saved)) return [];
    return saved
      .map(item => ({...item, id:Number(item.id), qty:Math.max(1, Number(item.qty) || 1)}))
      .filter(item => PRODUCTS.some(p => p.id === item.id));
  } catch(e){
    localStorage.removeItem('dudegifts_cart');
    return [];
  }
}

function saveCart(){
  localStorage.setItem('dudegifts_cart', JSON.stringify(cart));
  const count = cart.reduce((sum,item)=>sum + item.qty,0);
  const badge = $('.bag-count');
  if(badge) badge.textContent = count;
}

function showToast(message, type='success'){
  const toast = $('#toast');
  const text = $('#toastText');
  if(!toast || !text) return;
  text.textContent = message;
  const heading = toast.querySelector('b');
  if(heading) heading.textContent = type === 'remove' ? '✓ Removed from Gift Box' : '✓ Added to cart successfully';
  toast.classList.add('show');
  clearTimeout(window.__giftToastTimer);
  window.__giftToastTimer = setTimeout(()=>toast.classList.remove('show'),2600);
}

function setFilter(value, shouldScroll=false){
  const allowed = ['all','physical','digital','surprise'];
  filter = allowed.includes(String(value).toLowerCase()) ? String(value).toLowerCase() : 'all';
  renderProducts();
  if(shouldScroll){
    const products = $('#products');
    if(products) products.scrollIntoView({behavior:'smooth',block:'start'});
  }
}

function renderProducts(){
  const grid = $('#productGrid');
  if(!grid) return;
  const searchEl = $('#search');
  const q = (searchEl?.value || '').trim().toLowerCase();

  const list = PRODUCTS.filter(product => {
    const typeMatches = filter === 'all' || String(product.type).toLowerCase() === filter;
    const text = `${product.title} ${product.type} ${product.desc}`.toLowerCase();
    return typeMatches && text.includes(q);
  });

  if(!list.length){
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
            <button type="button" class="mini" data-action="view" data-id="${product.id}">View</button>
            <button type="button" class="mini alt" data-action="add" data-id="${product.id}">Add to cart</button>
          </div>
        </div>
      </article>`).join('');
  }

  $$('.filter[data-filter]').forEach(button => {
    button.classList.toggle('active', String(button.dataset.filter).toLowerCase() === filter);
  });
}

function openProduct(id){
  current = PRODUCTS.find(product => product.id === Number(id));
  if(!current) return;
  $('#modalImage').src = current.img;
  $('#modalImage').alt = current.title;
  $('#modalCategory').textContent = current.type;
  $('#modalTitle').textContent = current.title;
  $('#modalPrice').textContent = money(current.price);
  $('#modalDescription').textContent = current.desc;
  $('#modalSuccess').classList.remove('show');
  $('#productModal').classList.add('show');
  $('#productModal').setAttribute('aria-hidden','false');
  document.body.classList.add('modal-open');
}

function closeProduct(){
  const modal = $('#productModal');
  if(!modal) return;
  modal.classList.remove('show');
  modal.setAttribute('aria-hidden','true');
  document.body.classList.remove('modal-open');
}

function addToCart(id){
  const product = PRODUCTS.find(item => item.id === Number(id));
  if(!product) return;
  const existing = cart.find(item => item.id === product.id);
  if(existing) existing.qty += 1;
  else cart.push({...product,qty:1});
  saveCart();
  renderDrawer();
  showToast(`${product.title} is now in your Gift Box.`);
}

function changeQty(id, delta){
  const item = cart.find(product => product.id === Number(id));
  if(!item) return;
  item.qty += Number(delta);
  if(item.qty <= 0) cart = cart.filter(product => product.id !== item.id);
  saveCart();
  renderDrawer();
}

function removeItem(id){
  const numericId = Number(id);
  const item = cart.find(product => product.id === numericId);
  if(!item) return;
  cart = cart.filter(product => product.id !== numericId);
  saveCart();
  renderDrawer();
  showToast(`${item.title} was removed from your Gift Box.`, 'remove');
}

function clearCart(){
  if(!cart.length) return;
  cart = [];
  saveCart();
  renderDrawer();
  showToast('All items were removed from your Gift Box.', 'remove');
}

function renderDrawer(){
  const box = $('#drawerItems');
  if(!box) return;
  if(!cart.length){
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

  const total = cart.reduce((sum,item)=>sum + Number(item.price)*Number(item.qty),0);
  $('#drawerTotal').textContent = money(total);
  updateCheckoutState();
}

function updateCheckoutState(){
  const button = $('#whatsappOrder');
  if(!button) return;
  button.disabled = !cart.length;
  button.classList.toggle('disabled', !cart.length);
}

function openDrawer(){
  renderDrawer();
  $('#drawer').classList.add('show');
  $('#drawer').setAttribute('aria-hidden','false');
  document.body.classList.add('drawer-open');
}
function closeDrawer(){
  $('#drawer').classList.remove('show');
  $('#drawer').setAttribute('aria-hidden','true');
  document.body.classList.remove('drawer-open');
}

function orderOnWhatsApp(){
  if(!cart.length){ showToast('Your Gift Box is empty.'); return; }
  const lines = cart.map((item,index)=>`${index+1}. ${item.title} — ${money(item.price)} x ${item.qty} = ${money(item.price*item.qty)}`);
  const total = cart.reduce((sum,item)=>sum + item.price*item.qty,0);
  const message = `Hello DudeGifts! I would like to place an order.\n\n${lines.join('\n')}\n\nTotal: ${money(total)}\n\nPlease confirm availability and next steps.`;
  /* Replace this with your real DudeGifts WhatsApp number when ready. */
  const whatsappNumber = '';
  const url = whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    : `https://wa.me/?text=${encodeURIComponent(message)}`;
  window.open(url,'_blank','noopener,noreferrer');
}

/* Product grid: event delegation makes View/Add work after every filter change. */
$('#productGrid')?.addEventListener('click', event => {
  const button = event.target.closest('[data-action]');
  if(!button) return;
  const id = Number(button.dataset.id);
  if(button.dataset.action === 'view') openProduct(id);
  if(button.dataset.action === 'add') addToCart(id);
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
$('#searchBtn')?.addEventListener('click', ()=>$('#search')?.focus());

$('#modalAdd')?.addEventListener('click', ()=>{
  if(!current) return;
  addToCart(current.id);
  $('#modalSuccess').classList.add('show');
});
$('#closeModal')?.addEventListener('click', closeProduct);
$('#productModal')?.addEventListener('click', event => {
  if(event.target.id === 'productModal') closeProduct();
});

/* Cart: one delegated listener handles Remove, + and − reliably. */
$('#drawerItems')?.addEventListener('click', event => {
  const button = event.target.closest('[data-cart-action]');
  if(!button) return;
  event.preventDefault();
  event.stopPropagation();
  const id = Number(button.dataset.id);
  const action = button.dataset.cartAction;
  if(action === 'remove') removeItem(id);
  else if(action === 'plus') changeQty(id, 1);
  else if(action === 'minus') changeQty(id, -1);
});

$('#bagBtn')?.addEventListener('click', openDrawer);
$('#closeDrawer')?.addEventListener('click', closeDrawer);
$('#drawer')?.addEventListener('click', event => {
  if(event.target.id === 'drawer') closeDrawer();
});
$('#whatsappOrder')?.addEventListener('click', orderOnWhatsApp);
$('#clearCart')?.addEventListener('click', clearCart);

document.addEventListener('keydown', event => {
  if(event.key === 'Escape'){
    closeProduct();
    closeDrawer();
  }
});

/* Custom navigation and form. */
const navLinks = $$('.nav-link, .mobile-menu-links a');
const sections = ['shop','custom','story','contact'].map(id=>document.getElementById(id)).filter(Boolean);
function setActiveSection(id){ navLinks.forEach(link=>link.classList.toggle('active', link.dataset.section === id)); }
if('IntersectionObserver' in window){
  const observer = new IntersectionObserver(entries=>{
    const visible = entries.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
    if(visible) setActiveSection(visible.target.id);
  },{rootMargin:'-25% 0px -55% 0px',threshold:[0,.15,.4,.7]});
  sections.forEach(section=>observer.observe(section));
}

$$('[data-custom-scroll]').forEach(button=>button.addEventListener('click',()=>{
  document.getElementById('custom')?.scrollIntoView({behavior:'smooth'});
  setActiveSection('custom');
}));

navLinks.forEach(link=>link.addEventListener('click',()=>{
  if(link.dataset.section) setActiveSection(link.dataset.section);
  closeMobileMenu();
}));

const menuBtn=$('#menuBtn'), mobileMenu=$('#mobileMenu'), mobileClose=$('#mobileClose');
function openMobileMenu(){ mobileMenu?.classList.add('show'); mobileMenu?.setAttribute('aria-hidden','false'); document.body.classList.add('menu-open'); }
function closeMobileMenu(){ mobileMenu?.classList.remove('show'); mobileMenu?.setAttribute('aria-hidden','true'); document.body.classList.remove('menu-open'); }
menuBtn?.addEventListener('click',openMobileMenu);
mobileClose?.addEventListener('click',closeMobileMenu);

const customForm=$('#customForm'), customSuccess=$('#customSuccess');
customForm?.addEventListener('submit',event=>{
  event.preventDefault();
  const data=new FormData(customForm);
  const name=(data.get('name')||'').toString().trim();
  const recipient=(data.get('recipient')||'').toString().trim();
  const occasion=(data.get('occasion')||'').toString().trim();
  const phone=(data.get('phone')||'').toString().trim();
  const idea=(data.get('idea')||'').toString().trim();
  if(!name || !recipient || !occasion || !phone || !idea) return;
  customSuccess.classList.add('show');
  customSuccess.innerHTML=`<b>✓ Request received, ${name}.</b><span>We captured your ${occasion.toLowerCase()} idea for ${recipient}. The studio brief is ready.</span>`;
  customForm.reset();
});

/* Initial state. */
saveCart();
renderProducts();
renderDrawer();
