$(function(){
	$('.collapse').on('show.bs.collapse', function(){
    $(this).prev().find('.fa').removeClass().addClass('fa fa-minus-circle');
  });
  $('.collapse').on('hide.bs.collapse', function(){
    $(this).prev().find('.fa').removeClass().addClass('fa fa-plus-circle');
  });
  $('.form-sel').select2({
    minimumResultsForSearch: Infinity
  });
  new WOW({
    mobile: false
  }).init();
});