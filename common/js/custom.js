
//ページトップに戻る
$(document).ready(function() {
  $('.drawer').drawer();
});

$(function() {
	var topBtn = $('.top_btn');
	topBtn.hide();
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			topBtn.fadeIn();
		} else {
			topBtn.fadeOut();
		}
	});
    topBtn.click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 500);
		return false;
    });
});
//カレント設定
$(function() {
	var id = $("body").attr("id");
	$("li." + id).addClass("active");
});
