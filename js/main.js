document.addEventListener('DOMContentLoaded', function() {
  let wrapper = document.getElementById('wrapper');
  let topLayer = wrapper.querySelector('.top');
  let handle = wrapper.querySelector('.handle');
  let skew = 0;
  let delta = 0;
console.log('hello pipo');
  if(wrapper.className.indexOf('skewed') != -1) {
    skew = 1000;
  }

  let move = true;
  wrapper.addEventListener('mousedown' , function(){
    move = !move;
  });
  wrapper.addEventListener('mousemove', function(e) {
    if(move){
    delta = (e.clientX - window.innerWidth / 2) * 0.5;
    // console.log(e.clientX);

    handle.style.left = (e.clientX + delta) + 'px';
    topLayer.style.width = e.clientX+skew+delta+'px';
    }
  });
});
