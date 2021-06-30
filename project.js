setInterval(()=>{
		var timer=0;
	$(`.footer__p`).children().each(function () {
		setTimeout(()=>{$(this).addClass(`color`);setTimeout(()=>{$(this).removeClass(`color`)},500);},timer);
		timer+=500;
	})
},4000);
	 setInterval(()=>{
		var timer=0;
		$(`.head2__circle`).each(function (ind) {
			var img_=$(this).find(`img`);
			setTimeout(()=>{
				$(this).addClass(`tran`);
				img_.attr(`src`,`./images/game1Yellow.png`).removeClass(`rotateBack`).addClass(`rotate`);
			},timer);
			setTimeout(()=>{
				img_.addClass(`rotateBack`);
				setTimeout(()=>{$(this).removeClass(`tran`);img_.attr(`src`,`./images/game1.png`).addClass(`rotateBack`)},300);
			},truly_());
			function truly_() {
				var time;
				if (ind==0) time=3700-timer;
				else if (ind==1) time=4000-timer;
				else time=2500;
				return time;
			}
			timer+=1000;
		})
	},4500);
	$(`.head__block`).find(`p`).on(`click`,function () {
		$(`html`).animate({scrollTop:$(`.`+$(this).attr(`where`)).offset().top},500)
	})
var blocks=[`.head__block`,`.head2__block`].forEach(function (elem) {
		$(elem).on(`mouseenter`,function () {
			$(this).find(`div`).addClass(`visible`)
		})
		$(elem).on(`mouseleave`,function () {
			$(this).find(`div`).removeClass(`visible`)
		})
})
$(`[alt="open"]`).on(`click`,function () {
	const blo_=$(this).parent().parent().find(`.hide`);
	if ($(this).attr(`timer`)==`false`) return;
	$(this).attr(`timer`,false);
	var acti_=$(this).attr(`active`);
	setTimeout(()=>{$(this).attr(`timer`,true);},500);
	if (acti_==`true`) {
		blo_.slideUp(500);
		$(this).addClass(`down`);
		setTimeout(()=>{$(this).removeClass(`up`)},300);
	}
	else {
		blo_.slideDown(500);
		$(this).addClass(`up`);
		setTimeout(()=>{$(this).removeClass(`down`)},300);
	}
	$(this).attr(`active`,!(JSON.parse(acti_)))
})
$(`.burger`).on(`click`,function () {
	if ($(this).attr(`timer`)==`false`) return;
	$(this).attr(`timer`,false);
	setTimeout(()=>{$(this).attr(`timer`,true);},500);
	if ($(this).hasClass(`cross`)) {
		$(this).removeClass(`cross`);
		$(this).children().show(200);
		$(`.footer__p`).slideUp(500)
	} else {
		$(this).children().hide(200,()=>{$(this).addClass(`cross`)});
		$(`.footer__p`).slideDown(500).css({display:"flex"})
	}
})