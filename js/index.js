$(document).ready(function() {

	$(".openNav").click(function() {
		// $(".sidenav").toggle();
		$(".sidenav").css("width", "250px");
		$("header").css("margin-left", "250px");
		$(".main-content").css("margin-left", "250px");
	});

	// hide sidenav if it is visible
	$(document).click(function(event) {
		if (!$(event.target).closest(".openNav").length) {
			if ($(".sidenav").is(":visible")) {
				$(".sidenav").css("width", "0");
				$("header").css("margin-left", "0");
				$(".main-content").css("margin-left", "0");
				// alert("hello");
			}
		}
	});
	
})