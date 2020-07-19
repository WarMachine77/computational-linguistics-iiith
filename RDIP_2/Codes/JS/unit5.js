$("#lang").on("change", function(){
	var lang = $("#lang").find(":selected").text();
	if(lang === "---Select Language---") {
		alert("Select Language");
	} else if(lang === "English") {
		$("#esen").css("display", "block");
		$("#hsen").css("display", "none");
	} else {
		$("#hsen").css("display", "block");
		$("#esen").css("display", "none");
	}
});