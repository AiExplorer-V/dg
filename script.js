document.addEventListener("DOMContentLoaded",()=>{
 const menu=document.querySelector(".menu"),links=document.querySelector(".nav-links");
 if(menu&&links) menu.addEventListener("click",()=>links.classList.toggle("open"));

 // Active navigation highlighter
 const current=(location.pathname.split('/').pop()||'index.html').toLowerCase();
 document.querySelectorAll('.nav-links a').forEach(a=>{
   if((a.getAttribute('href')||'').toLowerCase()===current)a.classList.add('active');
 });

 // Cart
 const CART_KEY="dudegifts_cart_v1";
 const getCart=()=>{try{return JSON.parse(localStorage.getItem(CART_KEY)||"[]")}catch(e){return[]}};
 const saveCart=(cart)=>{localStorage.setItem(CART_KEY,JSON.stringify(cart));updateCartBadge();};
 const parsePrice=(v)=>Number(String(v||"0").replace(/[^\d.]/g,""))||0;
 const money=(n)=>"₹"+Number(n||0).toLocaleString("en-IN");

 function updateCartBadge(){
   const count=getCart().reduce((s,i)=>s+(i.qty||1),0);
   document.querySelectorAll(".cart-count").forEach(el=>el.textContent=count);
 }

 function addToCart(product){
   const cart=getCart();
   const key=product.name+"|"+product.price;
   const existing=cart.find(i=>i.key===key);
   if(existing) existing.qty+=1;
   else cart.push({...product,key,qty:1});
   saveCart(cart);
   showCartToast(product.name);
 }

 function showCartToast(name){
   let toast=document.getElementById("cartToast");
   if(!toast){
     toast=document.createElement("div");
     toast.id="cartToast";
     toast.className="cart-toast";
     document.body.appendChild(toast);
   }
   toast.innerHTML='<span>✓</span><div><b>Added to cart</b><small>'+escapeHtml(name)+'</small></div><a href="cart.html">View Cart</a>';
   toast.classList.add("show");
   clearTimeout(window.__cartToastTimer);
   window.__cartToastTimer=setTimeout(()=>toast.classList.remove("show"),3500);
 }

 function escapeHtml(s){return String(s||"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]))}

 function productFromCard(card){
   return {
     name:card.dataset.name||card.querySelector("h3")?.textContent?.trim()||"DudeGifts Product",
     price:parsePrice(card.dataset.price||card.querySelector(".price")?.textContent),
     description:card.dataset.description||card.querySelector("p")?.textContent?.trim()||"",
     image:card.querySelector(".product-gallery img")?.src||"",
     category:card.dataset.category||""
   };
 }

 // Filters
 document.querySelectorAll('.filter').forEach(btn=>btn.addEventListener('click',()=>{
   document.querySelectorAll('.filter').forEach(b=>b.classList.remove('active'));
   btn.classList.add('active');
   const f=btn.dataset.filter;
   document.querySelectorAll('.product[data-category]').forEach(card=>card.classList.toggle('hidden',f!=='all'&&card.dataset.category!==f));
 }));

 // WhatsApp forms
 document.querySelectorAll('form[data-whatsapp]').forEach(form=>form.addEventListener('submit',e=>{
   e.preventDefault();
   const d=new FormData(form);
   const lines=['Hello DudeGifts!','','Name: '+(d.get('name')||''),'Contact: '+(d.get('contact')||''),'Occasion: '+(d.get('occasion')||''),'Other Occasion: '+(d.get('otherOccasion')||''),'Idea: '+(d.get('idea')||''),'Message: '+(d.get('message')||'')];
   window.open('https://wa.me/?text='+encodeURIComponent(lines.join('\n')),'_blank');
 }));

 // Product cards: add-to-cart buttons
 document.querySelectorAll('.product').forEach(card=>{
   const product=productFromCard(card);
   const actions=card.querySelector(".product-actions");
   if(actions && !actions.querySelector(".cart-add-btn")){
     const btn=document.createElement("button");
     btn.type="button";
     btn.className="mini-btn cart-add-btn";
     btn.textContent="＋ Add to Cart";
     btn.addEventListener("click",e=>{e.preventDefault();e.stopPropagation();addToCart(product);});
     actions.appendChild(btn);
   }
 });

 // Product popup and 3-photo gallery
 const modal=document.getElementById('productModal');
 if(modal){
   const gallery=modal.querySelector('.modal-gallery'),info=modal.querySelector('.modal-info');
   document.querySelectorAll('.product').forEach(card=>card.addEventListener('click',e=>{
     if(e.target.closest('a,button')) return;
     gallery.innerHTML='';
     card.querySelectorAll('.product-gallery img').forEach(img=>gallery.appendChild(img.cloneNode(true)));
     const product=productFromCard(card);
     info.innerHTML=`<h2>${escapeHtml(product.name)}</h2><div class="modal-price">${money(product.price)}</div><p>${escapeHtml(product.description)}</p><div class="modal-actions"><a class="btn secondary" href="#">▶ Watch Product Video</a><button class="btn secondary modal-add-cart" type="button">＋ Add to Cart</button><a class="btn primary" target="_blank" href="https://wa.me/?text=${encodeURIComponent('Hello DudeGifts! I want to order: '+product.name+' ('+money(product.price)+')')}">Order on WhatsApp →</a></div>`;
     info.querySelector(".modal-add-cart").addEventListener("click",()=>addToCart(product));
     modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';
   }));
   modal.addEventListener('click',e=>{
     if(e.target===modal||e.target.closest('.modal-close')){
       modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.style.overflow='';
     }
   });
 }

 // Cart page
 const cartItems=document.getElementById("cartItems");
 if(cartItems){
   const empty=document.getElementById("cartEmpty"), content=document.getElementById("cartContent");
   const itemCount=document.getElementById("cartItemCount"), totalEl=document.getElementById("cartTotal");
   function renderCart(){
     const cart=getCart();
     const has=cart.length>0;
     empty.hidden=has; content.hidden=!has;
     cartItems.innerHTML="";
     let total=0,count=0;
     cart.forEach((item,index)=>{
       const qty=Math.max(1,Number(item.qty)||1), price=parsePrice(item.price), line=price*qty;
       total+=line;count+=qty;
       const row=document.createElement("article");
       row.className="cart-item";
       row.innerHTML=`<img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.name)}"><div class="cart-item-info"><div class="cart-item-top"><div><h3>${escapeHtml(item.name)}</h3><p>${escapeHtml(item.description)}</p></div><button class="cart-remove" data-index="${index}" aria-label="Remove ${escapeHtml(item.name)}">×</button></div><div class="cart-item-bottom"><span class="cart-unit">${money(price)} each</span><div class="qty-control"><button data-action="minus" data-index="${index}">−</button><b>${qty}</b><button data-action="plus" data-index="${index}">+</button></div><strong>${money(line)}</strong></div></div>`;
       cartItems.appendChild(row);
     });
     itemCount.textContent=count;
     totalEl.textContent=money(total);
     updateCartBadge();
   }
   cartItems.addEventListener("click",e=>{
     const idx=e.target.dataset.index;
     if(idx===undefined)return;
     const cart=getCart();
     if(e.target.classList.contains("cart-remove")) cart.splice(Number(idx),1);
     else if(e.target.dataset.action==="plus") cart[Number(idx)].qty++;
     else if(e.target.dataset.action==="minus") {cart[Number(idx)].qty--;if(cart[Number(idx)].qty<=0)cart.splice(Number(idx),1);}
     saveCart(cart);renderCart();
   });
   document.getElementById("clearCart")?.addEventListener("click",()=>{
     if(confirm("Clear all products from your cart?")){saveCart([]);renderCart();}
   });
   document.getElementById("confirmCart")?.addEventListener("click",()=>{
     const cart=getCart();if(!cart.length)return;
     const lines=["Hello DudeGifts! I would like to confirm this order:",""];
     cart.forEach((i,n)=>lines.push(`${n+1}. ${i.name} × ${i.qty} — ${money(parsePrice(i.price)*i.qty)}`));
     const total=cart.reduce((s,i)=>s+parsePrice(i.price)*i.qty,0);
     lines.push("",`Total: ${money(total)}`,"","Please confirm availability and next steps.");
     window.open("https://wa.me/?text="+encodeURIComponent(lines.join("\n")),"_blank");
   });
   renderCart();
 }

 updateCartBadge();
});