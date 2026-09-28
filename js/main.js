// GALERI: ganti null dengan alamat foto ("foto1.jpg") atau data URI
var G=[
  ['images/Momen%20Pertama.jpeg','Momen pertama'],
  ['images/Jalan%20Bareng.jpeg','Jalan berdua'],
  ['images/Cari%20Makan.jpeg','Makan bareng'],
  ['images/Senyum%20Kamu.jpeg','Senyum kamu'],
  ['images/Bahagia%20Bareng.jpeg','Bahagia bareng'],
  ['images/Liburan%20Bareng.jpeg','Liburan'],
  ['images/Ketawa.jpeg','Ketawa lepas'],
  ['images/Kita.jpeg','Kita']
];
var gal=document.getElementById('gal');
G.forEach(function(g,i){var f=document.createElement('figure');
  f.innerHTML=(g[0]?'<img loading="lazy" alt="'+g[1]+'" src="'+g[0]+'">':'<div class="ghost">💗</div>')+'<figcaption>'+g[1]+'</figcaption>';
  gal.appendChild(f)});

// Muncul saat di-scroll
var revealItems=document.querySelectorAll('.rv');
if('IntersectionObserver' in window){
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});
  revealItems.forEach(function(e){io.observe(e)});
}else{
  revealItems.forEach(function(e){e.classList.add('in')});
}

// Hati melayang di hero
var hero=document.querySelector('.hero');
setInterval(function(){var h=document.createElement('div');h.className='fl bh';
  h.textContent=['💗','💖','💕','🌸'][Math.floor(Math.random()*4)];
  h.style.left=Math.random()*95+'%';h.style.fontSize=(18+Math.random()*24)+'px';
  hero.appendChild(h);setTimeout(function(){h.remove()},7000)},700);

// Hitung hari bersama
var start=new Date(2024,11,29);
function tick(){
  var d=new Date(), t=Math.floor((d-start)/1000);
  var days=Math.floor(t/86400),h=Math.floor(t%86400/3600),m=Math.floor(t%3600/60),s=t%60;
  document.getElementById('count').innerHTML=
    [[days,'hari'],[h,'jam'],[m,'menit'],[s,'detik']].map(function(x){return '<div><b>'+x[0]+'</b><span>'+x[1]+'</span></div>'}).join('');
}
tick();setInterval(tick,1000);

// GANTI: alasan-alasan
var R=["Senyummu bikin hariku cerah","Kamu selalu dengerin aku","Tawamu nular banget","Kamu sabar sama aku","Kamu bikin aku pengen jadi lebih baik","Kamu paling nyaman diajak diam","Perhatian kecilmu berarti besar","Karena kamu itu Dita"];
var box=document.getElementById('reasons');
R.forEach(function(r,i){
  var b=document.createElement('button');b.textContent='Alasan #'+(i+1);
  b.onclick=function(){var o=b.classList.toggle('open');b.textContent=o?r:'Alasan #'+(i+1)};
  box.appendChild(b);
});

// Pesan rahasia
var M=["Aku sayang kamu, Dita.","Terima kasih sudah jadi kamu.","Kamu adalah bagian favoritku dari setiap hari.","Aku beruntung banget punya kamu."];
var n=0;
document.getElementById('secret').onclick=function(){
  document.getElementById('msg').textContent=M[n++%M.length];
  for(var i=0;i<14;i++){(function(){
    var e=document.createElement('div');e.className='fl';e.textContent=['💗','💖','🌸','💕'][Math.floor(Math.random()*4)];
    e.style.left=Math.random()*95+'%';e.style.animationDelay=Math.random()*.8+'s';
    document.body.appendChild(e);setTimeout(function(){e.remove()},4000);
  })()}
};
