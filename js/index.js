$(document).ready(function() {

	$(".openNav").click(function() {
		// $(".sidenav").toggle();
		$(".sidenav").show();
		$("header").css("margin-left", "250px");
		$(".main-content").css("margin-left", "250px");
		// $("footer").css("margin-left", "250px");
	});

	// hide sidenav if it is visible
	$(document).click(function(event) {
		if (!$(event.target).closest(".openNav").length) {
			if ($(".sidenav").is(":visible")) {
				$(".sidenav").hide();
				$("header").css("margin-left", "0");
				$(".main-content").css("margin-left", "0");
				// $("footer").css("margin-left", "0");
				// alert("hello");
			}
		}
	});
	// Translate English to Chinese
	
})