const products=[
["marble-gold","Twyford Marble Tile 60x60","Premium marble finish tile. Elegant and durable.","1,200","floor"],
["porcelain-grey","Keda Grey Porcelain 60x60","Modern porcelain finish for stylish spaces.","1,200","floor"],
["decor-botanical","Value Decor Wall Tile 30x60","Stylish wall tile for bathrooms and kitchens.","450","wall"],
["stone-look","Stone Look Porcelain 60x60","Natural stone look with high durability.","1,100","floor"],
["white-marble","Twyford White Marble 60x60","Classic white marble design for modern homes.","1,250","floor"],
["black-marble","Black Marble Tile 60x60","Bold and elegant black marble finish.","1,300","floor"],
["wood-look","Wood Look Tile 20x120","Warm wood style, perfect for any room.","1,150","floor"],
["concrete","Concrete Look Tile 60x60","Minimalist design for modern interiors.","1,050","floor"],
["bathroom-wall","Bathroom Wall Tile 30x60","Water resistant and easy to clean.","480","wall"],
["wave-texture","Wave Texture Tile 30x60","Adds depth and style to your walls.","500","wall"],
["tile-adhesive","Tile Adhesive 20kg","High strength adhesive for all tiles.","2,500","accessories"],
["tile-spacers","Tile Spacers (1.5mm)","For perfect alignment and even spacing.","350","accessories"],
["leveling-system","Tile Leveling System","Ensures a flat and professional finish.","1,800","accessories"],
["shower-mixer","Shower Mixer","Modern and durable shower mixer.","4,500","fixtures"],
["ceramic-toilet","Ceramic Toilet","Water efficient and stylish design.","12,500","fixtures"],
["kitchen-sink","Kitchen Sink","Durable stainless steel kitchen sink.","6,800","fixtures"],
["cabros","Concretes Cabros","Colored Cabro — KSh 1,300/sqm\nConcrete Tiles — KSh 1,100/sqm\nOrdinary Cabro — KSh 1,000/sqm\nRoad Channels — KSh 300\nRoad Kerbs — KSh 400\nConcrete Slabs — KSh 300\nOrdinary Cabros (1 bale) — KSh 11,000\nColored Cabros (1 bale) — KSh 13,000\nInstallation — KSh 300/sqm","1,000+","floor"],
["epoxy-floor-coating","Epoxy Floor Coating","20L covers 10 × 10 ft.\nEpoxy Hardener — KSh 1,800\nEpoxy Resin — KSh 4,200\nWe also supply quality floor and wall tiles.\nFloor: 30×30 KSh 1,050 (17pcs), 40×40 KSh 1,250 (12pcs), 50×50 KSh 1,550 (8pcs), 60×60 KSh 2,550 (4pcs).\nWall: 20×30 KSh 1,080 (25pcs), 25×40 KSh 1,150 (15pcs), 30×60 KSh 1,500 (8pcs).\nFree deliveries offered.","1,800+","accessories"],
["twyford-kenya-tiles","Twyford Kenya Tiles","Affordable floor and wall tiles.\nFloor: 30×30 KSh 900, 40×40 KSh 1,200, 50×50 KSh 1,600, 60×60 KSh 1,800, 30×60 KSh 1,300, 60×120 KSh 2,100 per box.\nWall: 20×30 KSh 750 and 25×40 KSh 750 per box.\nQuality tiles with direct office support and countrywide delivery.","750+","floor"]
];
const labels={floor:"FLOOR TILES",wall:"WALL TILES",accessories:"TILE ACCESSORIES",fixtures:"BATHROOM FIXTURES"};
function card(p,i){
  const imageMap={"twyford-kenya-tiles":"twyford-kenya-tiles.jpg","epoxy-floor-coating":"epoxy-floor-coating.jpg","cabros":"concretes-cabros.jpg"};
  const image=imageMap[p[0]]||`${p[0]}.jpg`;
  const price=`KSh ${p[3]} <small>starting</small>`;
  const description=p[2].replace(/\n/g,"<br>");
  return `<article class="product-card ${i===2?'featured':''}"><img src="${image}" alt="${p[1]}"><div class="info"><span class="tag">${labels[p[4]]}</span><h3>${p[1]}</h3><p>${description}</p><div class="price">${price}</div><button class="buy" onclick="buy('${p[1]}')">🛒 BUY NOW</button></div></article>`
}
function buy(name){const msg=encodeURIComponent(`Hello Twyford, I would like to order: ${name}.`);window.open(`https://wa.me/254762531064?text=${msg}`,"_blank")}
const hp=document.querySelector("#homeProducts"); if(hp) hp.innerHTML=products.slice(0,4).map(card).join("");
const sp=document.querySelector("#shopProducts"); let shown=12;
function renderShop(){if(!sp)return;const q=(document.querySelector("#search")?.value||"").toLowerCase();const c=document.querySelector("#category")?.value||"all";const filtered=products.filter(p=>(c==="all"||p[4]===c)&&p.slice(1,3).join(" ").toLowerCase().includes(q));sp.innerHTML=filtered.slice(0,shown).map(card).join("");const count=document.querySelector("#count");if(count)count.textContent=`Showing 1–${Math.min(shown,filtered.length)} of ${filtered.length} products`;const load=document.querySelector("#load");if(load)load.style.display=shown<filtered.length?"block":"none"}
if(sp){renderShop();document.querySelector("#search").addEventListener("input",()=>{shown=12;renderShop()});document.querySelector("#category").addEventListener("change",()=>{shown=12;renderShop()});document.querySelector("#load").addEventListener("click",()=>{shown+=4;renderShop()})}
function sendMessage(e){e.preventDefault();const n=document.querySelector("#name").value,p=document.querySelector("#phone").value,m=document.querySelector("#message").value;const text=encodeURIComponent(`Hello Twyford Kenya,\nName: ${n}\nPhone: ${p}\nMessage: ${m}`);window.open(`https://wa.me/254762531064?text=${text}`,"_blank");return false}


// Mobile navigation
document.querySelectorAll('.site-header').forEach(header => {
  const button = header.querySelector('.menu');
  const nav = header.querySelector('nav');
  if (!button || !nav) return;
  button.addEventListener('click', () => {
    const open = nav.classList.toggle('mobile-open');
    button.setAttribute('aria-expanded', open ? 'true' : 'false');
    button.textContent = open ? '✕' : '☰';
    document.body.classList.toggle('menu-active', open);
  });
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('mobile-open');
      button.setAttribute('aria-expanded', 'false');
      button.textContent = '☰';
      document.body.classList.remove('menu-active');
    });
  });
});
