var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

$(document).ready(function(){

	/* navigation-----------------------------------------------*/
	$("header").navigation();
	// $(".wrap-ul").navigation();
	
	$("header a").on('click', function () {
	  $("#navbar").collapse('hide');
	});

	var $menu = $("#navigation");

	$(window).scroll(function () {
		if ($(this).scrollTop() > 95 && $menu.hasClass("def")) {
			$menu.fadeOut('fast', function () {
			$(this).removeClass("def")
				.addClass("fixed transbg")
				.fadeIn('fast');
			});
		} else if ($(this).scrollTop() <= 95 && $menu.hasClass("fixed")) {
			$menu.fadeOut('fast', function () {
			$(this).removeClass("fixed transbg")
				.addClass("def")
				.fadeIn('fast');
			});
		}
	});

    // prettyPhoto
    $("a[data-gal^='prettyPhoto']").prettyPhoto();
    
    
    $('#feedback .submit').click(function(e){
	    e.preventDefault();
 
	    var error = false;
	    var name = $('#form_name').val();
	    var email = $('#form_email').val();
	    var phone = $('#form_phone').val();
	    var quantity = $('#form_quantity').val();
	    var city = $('#form_city').val();
            
	    var text = '', text_n, text_p, text_e, text_q, text_c;
            
	    if (name.length == 0) text_n = 'Введите свое имя!<br/>';
	    else	text_n = '';

	    if (email.length == 0 || email.indexOf('@') == '-1') text_e = 'Введите свой email!<br/>';
	    else	text_e = '';
            
	    if (phone.length == 0) text_p = 'Введите свой номер телефона!<br/>';
	    else	text_p = '';
            
	    if(quantity == '0') text_q = 'Выберите количество!<br/>';
	    else	text_q = '';
	    
	    if(city.length == 0) text_c = 'Введите город доставки!<br/>';
	    else	text_c = '';
            
	    text = text_n+text_e+text_p+text_q+text_c;
	    if (text.length > 0) error = true;
            
	    if(error == false){
			$.post("feedback.php", $("#feedback").serialize(),function(result) {
				// if(result == 'sent') {
					text = 'Благодарим Вас за заказ горшочков! В ближайшее время наши сотрудники свяжутся с Вами для уточнения деталей оплаты и доставки.<br/><br/>С уважением, <br/>коллектив agroplast.com.ua';
					$('#message').attr('class','status').html(text);
					$('#message').fadeIn(500, function() {
						$(this).fadeOut(15000);   
					}); 
				// }
			});
      	}
      	else  {
			$('#message').attr('class','error').html(text);
			$('#message').fadeIn(500);
	    }
	 });    

	 /* -- Rate -- */
	 
	 $('div.rating').each( function () {
	    $(this).append('<div class="active"></div>');
	    //gray stars
	    var rate =  $(this).attr('data-rate');
	    $(this).css({'width':'60', 'height':'12', 'background': 'url(./images/stars.png) repeat'});
	    //new layer yellow stars
	    var active = $(this).find('.active');
	    var wdrate = rate*12;
	    active.css({'width':wdrate, 'height':'12', 'background': 'url(./images/stars.png) 0 12px repeat', 'padding-left':'80'});
	    $(this).append('<span itemprop="rating">'+ parseFloat(rate).toFixed(2) +'</span>');
	    $(this).find('span').css({'position':'absolute', 'left':'72px', 'line-height':'12px', 'top':'0'});
    });

    
});


/* Responsive Nav -----------------------------------------------*/
   $(function () {

     // Create the dropdown base
     $("<select />").appendTo("nav");

     // Populate dropdown with menu items
     $("nav a").each(function () {
         var el = $(this);
         $("<option />", {
             "value": el.attr("href"),
             "text": el.text()
         }).appendTo("nav select");
     });

     // To make dropdown actually work
     // To make more unobtrusive: http://css-tricks.com/4064-unobtrusive-page-changer/
     $("nav select").change(function () {
         window.location = $(this).find("option:selected").val();
     });

 });

}