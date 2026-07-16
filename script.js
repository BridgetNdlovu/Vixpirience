/* =========================================================
   VicXperience — app data + interactions
========================================================= */
const ACTIVITIES = [
  {
    id: 'raft-01',
    category: 'rafting',
    tag: 'Rafting',
    name: 'Zambezi White-Water Rafting',
    desc: 'Grade 5 rapids through the Batoka Gorge with expert safety guides. The wildest one-day rafting run on Earth.',
    price: 145,
    duration: 'Full day · 7 hrs',
    rating: 4.9,
    reviews: 312,
    availability: 'Daily',
    img: 'https://images.unsplash.com/photo-1685550903259-96799741df9e?auto=format&fit=crop&w=900&q=80',
    heroImg: 'https://images.unsplash.com/photo-1685550903259-96799741df9e?auto=format&fit=crop&w=1800&q=80',
    coords: [-17.9270, 25.8580],
    meet: 'Boiling Pot trailhead'
  },
  {
    id: 'heli-01',
    category: 'helicopter',
    tag: 'Helicopter',
    name: 'Flight of Angels Helicopter Tour',
    desc: 'A 12–25 minute scenic flight over the full width of the Falls and the Batoka Gorge — the classic first view.',
    price: 195,
    duration: '15–25 min flight',
    rating: 4.9,
    reviews: 428,
    availability: 'Every 30 min',
    img: 'https://images.unsplash.com/photo-1685239159514-2722cf41804a?auto=format&fit=crop&w=900&q=80',
    heroImg: 'https://images.unsplash.com/photo-1685239159514-2722cf41804a?auto=format&fit=crop&w=1800&q=80',
    coords: [-17.9315, 25.8320],
    meet: 'Victoria Falls helipad'
  },
  {
    id: 'bungee-01',
    category: 'bungee',
    tag: 'Bungee',
    name: 'Victoria Falls Bridge Bungee Jump',
    desc: '111 metres of free fall from the historic bridge over the Zambezi gorge, dead centre of the border.',
    price: 160,
    duration: '30 min slot',
    rating: 4.8,
    reviews: 256,
    availability: 'Daily 09:00–17:00',
    img: 'https://images.unsplash.com/photo-1559677624-3c956f10d431?auto=format&fit=crop&w=900&q=80',
    heroImg: 'https://images.unsplash.com/photo-1559677624-3c956f10d431?auto=format&fit=crop&w=1800&q=80',
    coords: [-17.9256, 25.8564],
    meet: 'Victoria Falls Bridge'
  },
  {
    id: 'cruise-01',
    category: 'cruise',
    tag: 'Cruise',
    name: 'Zambezi Sunset Cruise',
    desc: 'A relaxed two-hour cruise upstream of the Falls with drinks, snacks and golden-hour views over the river.',
    price: 65,
    duration: '2 hours',
    rating: 4.7,
    reviews: 519,
    availability: 'Daily 16:00',
    img: 'https://images.unsplash.com/photo-1742647338510-53378767ecd7?auto=format&fit=crop&w=900&q=80',
    heroImg: 'https://images.unsplash.com/photo-1742647338510-53378767ecd7?auto=format&fit=crop&w=1800&q=80',
    coords: [-17.9130, 25.8090],
    meet: 'Zambezi jetty, Elephant Hills'
  },
  {
    id: 'safari-01',
    category: 'safari',
    tag: 'Safari',
    name: 'Zambezi National Park Game Drive',
    desc: 'A guided open-vehicle safari along the river frontage — elephant, buffalo and antelope in their dry-season home.',
    price: 85,
    duration: 'Half day · 4 hrs',
    rating: 4.8,
    reviews: 201,
    availability: 'Morning & afternoon',
    img: 'https://images.unsplash.com/photo-1535759554012-8cbbc491f0b7?auto=format&fit=crop&w=900&q=80',
    heroImg: 'https://images.unsplash.com/photo-1535759554012-8cbbc491f0b7?auto=format&fit=crop&w=1800&q=80',
    coords: [-17.8830, 25.7650],
    meet: 'Zambezi National Park gate'
  },
  {
    id: 'cultural-01',
    category: 'cultural',
    tag: 'Cultural',
    name: 'Chinotimba Village Cultural Tour',
    desc: 'Walk through a local village with a resident guide — food, craft, music and daily life away from the tour buses.',
    price: 40,
    duration: '3 hours',
    rating: 4.6,
    reviews: 148,
    availability: 'Daily 09:00 & 14:00',
    img: 'https://images.unsplash.com/photo-1747889268735-31192c2a6df4?auto=format&fit=crop&w=900&q=80',
    heroImg: 'https://images.unsplash.com/photo-1747889268735-31192c2a6df4?auto=format&fit=crop&w=1800&q=80',
    coords: [-17.9280, 25.8420],
    meet: 'Chinotimba village hall'
  },
  {
    id: 'food-01',
    category: 'food',
    tag: 'Food',
    name: 'The Lookout Café',
    desc: 'Dine on the edge of the Batoka Gorge with panoramic views and contemporary African cuisine.',
    price: 35,
    duration: '2 hours',
    rating: 4.8,
    reviews: 187,
    availability: 'Daily 07:00–22:00',
    img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80',
    heroImg: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1800&q=80',
    coords: [-17.9265, 25.8540],
    meet: 'The Lookout Café, Vic Falls Bridge'
  },
  {
    id: 'food-02',
    category: 'food',
    tag: 'Food',
    name: 'Mama Africa Kitchen',
    desc: 'Authentic Zimbabwean dishes — sadza, nyama, and game meat in a lively open-air setting.',
    price: 25,
    duration: '1.5 hours',
    rating: 4.7,
    reviews: 134,
    availability: 'Daily 11:00–22:00',
    img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80',
    heroImg: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1800&q=80',
    coords: [-17.9310, 25.8530],
    meet: 'Mama Africa, Central Victoria Falls'
  },
  {
    id: 'food-03',
    category: 'food',
    tag: 'Food',
    name: 'Boma Dinner Experience',
    desc: 'Traditional bush dinner under the stars with live drumming, dancing and game meats.',
    price: 55,
    duration: '3 hours',
    rating: 4.9,
    reviews: 263,
    availability: 'Nightly 18:30',
    img: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&w=900&q=80',
    heroImg: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&w=1800&q=80',
    coords: [-17.9190, 25.8440],
    meet: 'The Boma, Victoria Falls Hotel'
  },
  {
    id: 'stay-01',
    category: 'stay',
    tag: 'Stay',
    name: 'The Victoria Falls Hotel',
    desc: 'Iconic colonial-era hotel with manicured gardens, pool, and direct views of the Victoria Falls Bridge.',
    price: 220,
    duration: 'Per night',
    rating: 4.9,
    reviews: 512,
    availability: 'Year-round',
    img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80',
    heroImg: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1800&q=80',
    coords: [-17.9295, 25.8545],
    meet: 'Victoria Falls Hotel'
  },
  {
    id: 'stay-02',
    category: 'stay',
    tag: 'Stay',
    name: 'Ilala Lodge Hotel',
    desc: 'Boutique lodge with thatched rooms, riverside restaurant, and the Falls within walking distance.',
    price: 195,
    duration: 'Per night',
    rating: 4.8,
    reviews: 389,
    availability: 'Year-round',
    img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80',
    heroImg: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1800&q=80',
    coords: [-17.9320, 25.8510],
    meet: 'Ilala Lodge, Victoria Falls'
  },
  {
    id: 'stay-03',
    category: 'stay',
    tag: 'Stay',
    name: 'Elephant Hills Resort',
    desc: 'Lakeside resort on the upper Zambezi with golf course, spa, and wildlife roaming the grounds.',
    price: 180,
    duration: 'Per night',
    rating: 4.7,
    reviews: 276,
    availability: 'Year-round',
    img: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=900&q=80',
    heroImg: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1800&q=80',
    coords: [-17.9130, 25.8090],
    meet: 'Elephant Hills, Victoria Falls'
  }
];

const REVIEWS = [
  { name:'Amara O.', origin:'Lagos, Nigeria', rating:5, text:'Booked the helicopter flight the morning I landed — confirmed in two minutes, no haggling with anyone at a desk. Seeing the whole Falls from the air was worth every cent.' },
  { name:'Tom H.', origin:'Bristol, UK', rating:5, text:'Compared three rafting operators side by side before choosing. Prices were upfront, which made the decision easy as a first-time visitor.' },
  { name:'Naledi M.', origin:'Gaborone, Botswana', rating:4, text:'The sunset cruise ticket showed the exact jetty on the map, so we walked straight there instead of wandering around asking people.' },
  { name:'Yuki S.', origin:'Osaka, Japan', rating:5, text:'Paid by card, got a digital ticket with a booking code — showed my phone at the bridge and that was it. Simple.' },
  { name:'Daniel P.', origin:'Cape Town, South Africa', rating:5, text:'Used it to book a village tour and a game drive in the same afternoon. Having reviews for local guides made picking one much less of a gamble.' }
];

const MAP_COLORS = {
  rafting:'#D97E0C', helicopter:'#FEC135', bungee:'#B64535',
  cruise:'#D97E0C', safari:'#8B0000', cultural:'#B64535',
  food:'#D97E0C', stay:'#5B6FB0'
};

const state = { filter: 'all', currentActivity: null, guests: 2, reviewIndex: 0 };

/* ---------- helpers ---------- */
const $ = (sel, ctx=document) => ctx.querySelector(sel);
const $$ = (sel, ctx=document) => [...ctx.querySelectorAll(sel)];
const money = n => `$${n.toLocaleString()}`;

function toast(msg){
  const t = $('#toast');
  t.textContent = msg;
  t.classList.add('is-visible');
  clearTimeout(toast._h);
  toast._h = setTimeout(()=> t.classList.remove('is-visible'), 2600);
}

/* ---------- NAV ---------- */
const nav = $('#nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('is-scrolled', window.scrollY > 40);
}, { passive:true });

$('#navToggle').addEventListener('click', (e) => {
  const links = $('#navLinks');
  const open = links.style.display === 'flex';
  links.style.display = open ? '' : 'flex';
  links.style.cssText = open ? '' : 'display:flex;position:absolute;top:100%;left:0;right:0;background:#3B0000;flex-direction:column;padding:20px 28px;gap:16px;';
  e.currentTarget.setAttribute('aria-expanded', String(!open));
});
$$('#navLinks a').forEach(a => a.addEventListener('click', () => {
  const links = $('#navLinks');
  if (window.innerWidth <= 720){ links.style.display=''; links.removeAttribute('style'); }
}));

/* ---------- HERO SLIDESHOW ---------- */
(function heroSlides(){
  const wrap = $('#heroSlides');
  ACTIVITIES.forEach((a, i) => {
    const div = document.createElement('div');
    div.className = 'hero-slide' + (i === 0 ? ' is-active' : '');
    div.style.backgroundImage = `url('${a.heroImg}')`;
    wrap.appendChild(div);
  });
  let idx = 0;
  const slides = $$('.hero-slide', wrap);
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  setInterval(() => {
    slides[idx].classList.remove('is-active');
    idx = (idx + 1) % slides.length;
    slides[idx].classList.add('is-active');
  }, 5000);
})();

$('#heroScroll').addEventListener('click', () => {
  $('#activities').scrollIntoView({ behavior:'smooth' });
});

/* ---------- STATS COUNTER ---------- */
(function counters(){
  const nums = $$('.stat-num');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseFloat(el.dataset.count);
      const decimals = parseInt(el.dataset.decimal || '0', 10);
      let cur = 0;
      const step = target / 40;
      const tick = () => {
        cur += step;
        if (cur >= target){ el.textContent = target.toFixed(decimals); return; }
        el.textContent = cur.toFixed(decimals);
        requestAnimationFrame(tick);
      };
      tick();
      obs.unobserve(el);
    });
  }, { threshold: 0.6 });
  nums.forEach(n => obs.observe(n));
})();

/* ---------- ACTIVITY CARDS ---------- */
function stars(rating){
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  return '★'.repeat(full) + (half ? '½' : '');
}

function renderActivities(){
  const grid = $('#activityGrid');
  grid.innerHTML = '';
  const list = ACTIVITIES.filter(a => state.filter === 'all' || a.category === state.filter);
  list.forEach(a => {
    const card = document.createElement('article');
    card.className = 'activity-card reveal';
    card.innerHTML = `
      <div class="activity-media">
        <img src="${a.img}" alt="${a.name}" loading="lazy">
        <span class="activity-tag">${a.tag}</span>
        <span class="activity-avail">${a.availability}</span>
      </div>
      <div class="activity-body">
        <h3>${a.name}</h3>
        <p class="activity-desc">${a.desc}</p>
        <div class="activity-meta">
          <span class="activity-rating"><span class="stars">${stars(a.rating)}</span> ${a.rating} <span class="count">(${a.reviews})</span></span>
          <span class="activity-price">${money(a.price)}<small> / person</small></span>
        </div>
        <div class="activity-footer">
          <button class="btn btn-outline" data-detail="${a.id}" type="button">${a.duration}</button>
          <button class="btn btn-solid" data-book="${a.id}" type="button">Book now</button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
  observeReveal();
  $$('[data-book]').forEach(btn => btn.addEventListener('click', () => openBooking(btn.dataset.book)));
  $$('[data-detail]').forEach(btn => btn.addEventListener('click', () => openBooking(btn.dataset.detail)));
}

$$('.filter-chip').forEach(chip => {
  chip.addEventListener('click', () => {
    $$('.filter-chip').forEach(c => { c.classList.remove('is-active'); c.setAttribute('aria-selected','false'); });
    chip.classList.add('is-active');
    chip.setAttribute('aria-selected','true');
    state.filter = chip.dataset.filter;
    renderActivities();
  });
});

/* ---------- SCROLL REVEAL ---------- */
let revealObs;
function observeReveal(){
  if (!revealObs){
    revealObs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting){
          entry.target.classList.add('is-visible');
          revealObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
  }
  $$('.reveal:not(.is-visible)').forEach(el => revealObs.observe(el));
}

/* ---------- MAP ---------- */
(function initMap(){
  const map = L.map('leafletMap', { scrollWheelZoom:false }).setView([-17.9243, 25.8572], 12.2);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors',
    maxZoom: 18
  }).addTo(map);

  L.circleMarker([-17.9243, 25.8572], {
    radius: 9, color:'#fff', weight:2, fillColor:'#3B0000', fillOpacity:1
  }).addTo(map).bindPopup('<strong>Victoria Falls</strong><br>Mosi-oa-Tunya — the smoke that thunders');

  const legend = $('#mapLegend');
  ACTIVITIES.forEach(a => {
    const color = MAP_COLORS[a.category] || '#D97E0C';
    const marker = L.circleMarker(a.coords, {
      radius: 8, color:'#fff', weight:2, fillColor: color, fillOpacity: 0.95
    }).addTo(map);
    marker.bindPopup(`<strong>${a.name}</strong><br>${a.meet}<br>${money(a.price)} / person`);

    const li = document.createElement('li');
    li.innerHTML = `<span class="dot" style="background:${color}"></span>
      <div><strong>${a.name}</strong><span class="sub">${a.meet}</span></div>`;
    li.addEventListener('click', () => {
      map.flyTo(a.coords, 14, { duration: 0.8 });
      marker.openPopup();
    });
    legend.appendChild(li);
  });
})();

/* ---------- REVIEWS CAROUSEL ---------- */
(function reviews(){
  const track = $('#reviewTrack');
  const dots = $('#reviewDots');
  REVIEWS.forEach((r, i) => {
    const li = document.createElement('li');
    li.className = 'review-card';
    li.innerHTML = `
      <div>
        <div class="review-stars">${stars(r.rating)}</div>
        <blockquote>&ldquo;${r.text}&rdquo;</blockquote>
        <div class="review-meta">
          <span class="review-avatar">${r.name.charAt(0)}</span>
          <div><div class="review-name">${r.name}</div><div class="review-sub">${r.origin}</div></div>
        </div>
      </div>`;
    track.appendChild(li);
    const dot = document.createElement('button');
    if (i === 0) dot.classList.add('is-active');
    dot.addEventListener('click', () => goTo(i));
    dots.appendChild(dot);
  });

  function goTo(i){
    state.reviewIndex = (i + REVIEWS.length) % REVIEWS.length;
    track.style.transform = `translateX(-${state.reviewIndex * 100}%)`;
    $$('button', dots).forEach((d, idx) => d.classList.toggle('is-active', idx === state.reviewIndex));
  }
  $('#revPrev').addEventListener('click', () => goTo(state.reviewIndex - 1));
  $('#revNext').addEventListener('click', () => goTo(state.reviewIndex + 1));

  let auto = setInterval(() => goTo(state.reviewIndex + 1), 6000);
  const carousel = $('.review-carousel');
  carousel.addEventListener('mouseenter', () => clearInterval(auto));
  carousel.addEventListener('mouseleave', () => { auto = setInterval(() => goTo(state.reviewIndex + 1), 6000); });
})();

/* ---------- BOOKING MODAL ---------- */
const modalBackdrop = $('#modalBackdrop');
const panelForm = $('#panelForm');
const panelProcessing = $('#panelProcessing');
const panelTicket = $('#panelTicket');

function openBooking(id){
  const a = ACTIVITIES.find(x => x.id === id);
  if (!a) return;
  state.currentActivity = a;
  state.guests = 2;

  $('#modalActivitySummary').innerHTML = `
    <img src="${a.img}" alt="${a.name}">
    <div><h4>${a.name}</h4><span>${a.duration} · ${a.meet}</span></div>`;
  $('#bkGuests').value = 2;
  $('#bkDate').value = '';
  $('#bkDate').min = new Date().toISOString().split('T')[0];
  $('#bkName').value = '';
  $('#bkEmail').value = '';
  updatePrice();

  panelForm.hidden = false; panelProcessing.hidden = true; panelTicket.hidden = true;
  modalBackdrop.classList.add('is-open');
}

function closeModal(){ modalBackdrop.classList.remove('is-open'); }
$('#modalClose').addEventListener('click', closeModal);
modalBackdrop.addEventListener('click', (e) => { if (e.target === modalBackdrop) closeModal(); });

function updatePrice(){
  const a = state.currentActivity;
  if (!a) return;
  const total = a.price * state.guests;
  $('#priceUnit').textContent = `${money(a.price)} × ${state.guests} guest${state.guests>1?'s':''}`;
  $('#priceSub').textContent = money(total);
  $('#priceTotal').textContent = money(total);
}

$('#guestMinus').addEventListener('click', () => {
  state.guests = Math.max(1, state.guests - 1);
  $('#bkGuests').value = state.guests; updatePrice();
});
$('#guestPlus').addEventListener('click', () => {
  state.guests = Math.min(12, state.guests + 1);
  $('#bkGuests').value = state.guests; updatePrice();
});

$('#bookingForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const a = state.currentActivity;
  const payMethod = $('#bkPayment').value;
  panelForm.hidden = true; panelProcessing.hidden = false;
  $('#processingLabel').textContent = payMethod === 'card' ? 'Confirming your card payment…' : 'Confirming your mobile money payment…';

  setTimeout(() => {
    const booking = {
      ref: genRef(),
      activity: a.name,
      tag: a.tag,
      date: $('#bkDate').value || 'Flexible',
      time: $('#bkTime').value,
      guests: state.guests,
      total: a.price * state.guests,
      meet: a.meet,
      name: $('#bkName').value,
      payMethod
    };
    saveBooking(booking);
    renderTicket(booking);
    panelProcessing.hidden = true; panelTicket.hidden = false;
    toast('Booking confirmed — your ticket is ready.');
  }, 1300);
});

function genRef(){
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let s = 'VX-';
  for (let i=0;i<6;i++) s += chars[Math.floor(Math.random()*chars.length)];
  return s;
}

function barcodeBars(seed){
  let bars = '';
  for (let i=0;i<34;i++){
    const h = 10 + Math.floor(Math.abs(Math.sin(seed + i * 12.9898)) * 26);
    bars += `<span style="height:${h}px"></span>`;
  }
  return bars;
}

function renderTicket(b){
  const seed = b.ref.split('').reduce((s,c)=>s+c.charCodeAt(0),0);
  $('#ticket').innerHTML = `
    <div class="ticket-main">
      <div class="ticket-eyebrow">Digital ticket · ${b.tag}</div>
      <h4>${b.activity}</h4>
      <div class="ticket-grid">
        <div><span class="tl">Date</span><span class="tv">${b.date}</span></div>
        <div><span class="tl">Time</span><span class="tv">${b.time}</span></div>
        <div><span class="tl">Guests</span><span class="tv">${b.guests}</span></div>
        <div><span class="tl">Total paid</span><span class="tv">${money(b.total)}</span></div>
        <div style="grid-column:1/-1"><span class="tl">Meeting point</span><span class="tv">${b.meet}</span></div>
      </div>
      <div class="ticket-ref">REF ${b.ref}</div>
    </div>
    <div class="ticket-stub">
      <span class="ticket-guests">${b.activity.toUpperCase()}</span>
      <div class="ticket-barcode">${barcodeBars(seed)}</div>
    </div>
  `;
}

$('#ticketDone').addEventListener('click', closeModal);
$('#ticketAnother').addEventListener('click', () => { closeModal(); $('#activities').scrollIntoView({behavior:'smooth'}); });

/* ---------- BOOKINGS STORAGE + DRAWER ---------- */
function getBookings(){
  try { return JSON.parse(localStorage.getItem('vx_bookings') || '[]'); }
  catch(e){ return []; }
}
function saveBooking(b){
  const list = getBookings();
  list.unshift(b);
  localStorage.setItem('vx_bookings', JSON.stringify(list));
  updateBookingBadge();
}
function updateBookingBadge(){
  const count = getBookings().length;
  const badge = $('#bookingCount');
  badge.textContent = count;
  badge.hidden = count === 0;
}
function renderDrawer(){
  const body = $('#drawerBody');
  const list = getBookings();
  if (!list.length){
    body.innerHTML = `<div class="drawer-empty">No bookings yet.<br>Book an activity and your digital ticket will appear here.</div>`;
    return;
  }
  body.innerHTML = list.map(b => `
    <div class="mini-ticket">
      <h5>${b.activity}</h5>
      <p>${b.date} · ${b.time} · ${b.guests} guest${b.guests>1?'s':''}</p>
      <p>${money(b.total)} · ${b.payMethod === 'card' ? 'Card' : 'Mobile money'}</p>
      <span class="mt-ref">REF ${b.ref}</span>
    </div>
  `).join('');
}

const drawerBackdrop = $('#drawerBackdrop');
$('#myBookingsBtn').addEventListener('click', () => { renderDrawer(); drawerBackdrop.classList.add('is-open'); });
$('#drawerClose').addEventListener('click', () => drawerBackdrop.classList.remove('is-open'));
drawerBackdrop.addEventListener('click', (e) => { if (e.target === drawerBackdrop) drawerBackdrop.classList.remove('is-open'); });

/* ---------- INIT ---------- */
renderActivities();
observeReveal();
updateBookingBadge();
