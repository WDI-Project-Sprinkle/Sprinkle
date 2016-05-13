$(function(){

  $('.dropdown').dropdown()

  // mobile menu responsive on index page
  let rel = $('body[rel]').attr('rel');

  $('#menu a:eq('+ rel +'), #m_menu a:eq('+ rel +')').addClass('active');
  $('#m_btn').on('click', function(){
    $('#m_menu').sidebar('toggle');
  })


})
