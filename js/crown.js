$(document).ready(function() {
	// Get the image and insert it inside the modal 
	// - use its "alt" text as a caption
	$(".openNav").click(function() {
		// $(".sidenav").toggle();
		$(".sidenav").show();
		$("header").css("margin-left", "250px");
		$(".crown-content").css("margin-left", "250px");
	});

	// hide sidenav if it is visible
	$(document).click(function(event) {
		if (!$(event.target).closest(".openNav").length) {
			if ($(".sidenav").is(":visible")) {
				$(".sidenav").hide();
				$("header").css("margin-left", "0");
				$(".crown-content").css("margin-left", "0");
			}
		}
	});

	if ($(".bool").css("float") == "none" ) {
		$(".thumbnail-img").click(function() {
			$("#myModal").css("display", "block");
			$("#img01").attr("src", this.src);
			$("#caption").html(this.alt);
		});
		// When the user clicks on <span> (x), close the modal
		$("#myModal").click(function() {
			$("#myModal").css("display", "none");
		});
	}
})