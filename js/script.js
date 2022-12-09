const btn = document.querySelector('.btn-menu');
const nav = document.querySelector('.menu-wrapper');

btn.addEventListener('click', () => {
  nav.classList.toggle('open-menu')
  btn.innerHTML = btn.innerHTML === 'メニュー'
    ? '閉じる'
    : 'メニュー'
});

$(function() {
  $('.hamburger').click(function() {
      $(this).toggleClass('active');

      if ($(this).hasClass('active')) {
          $('.globalMenuSp').addClass('active');
      } else {
          $('.globalMenuSp').removeClass('active');
      } 
    
  });
});
//メニュー内を閉じておく
$(function() {
  $('.globalMenuSp a[href]').click(function() {
      $('.globalMenuSp').removeClass('active');
     $('.hamburger').removeClass('active');

  });
});