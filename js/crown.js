$(document).ready(function() {
	// Get the image and insert it inside the modal 
	// - use its "alt" text as a caption
	if ($(".bool").css("float") == "none") {
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