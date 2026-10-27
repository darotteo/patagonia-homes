/* Galería de las fichas: teclado, miniaturas y deslizamiento en pantallas táctiles. */
document.querySelectorAll('.destination-gallery').forEach(gallery => {
  const image = gallery.querySelector('.destination-main-photo');
  const thumbnails = [...gallery.querySelectorAll('[data-destination-photo]')];
  let index = 0;
  const show = next => {
    index = (next + thumbnails.length) % thumbnails.length;
    const photo = thumbnails[index].querySelector('img');
    image.src = photo.src;
    image.alt = photo.alt;
    thumbnails.forEach((button,i)=>button.setAttribute('aria-pressed',String(i===index)));
    gallery.querySelector('.destination-count').textContent = `${index+1} / ${thumbnails.length}`;
  };
  thumbnails.forEach((button,i)=>button.addEventListener('click',()=>show(i)));
  gallery.querySelectorAll('[data-gallery-step]').forEach(button=>button.addEventListener('click',()=>show(index+Number(button.dataset.galleryStep))));
  gallery.addEventListener('keydown',event=>{
    if (event.key!=='ArrowLeft' && event.key!=='ArrowRight') return;
    event.preventDefault();
    show(index+(event.key==='ArrowRight'?1:-1));
  });
  let start;
  image.addEventListener('touchstart',event=>{start=event.touches.length===1?{x:event.touches[0].clientX,y:event.touches[0].clientY}:null;},{passive:true});
  image.addEventListener('touchend',event=>{
    if(!start)return;
    const dx=event.changedTouches[0].clientX-start.x,dy=event.changedTouches[0].clientY-start.y;
    if(Math.abs(dx)>50 && Math.abs(dx)>Math.abs(dy)*1.3)show(index+(dx<0?1:-1));
    start=null;
  },{passive:true});
  image.addEventListener('touchcancel',()=>{start=null;},{passive:true});
});
