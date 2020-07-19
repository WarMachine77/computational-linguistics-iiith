var esens = ["The child liked the chocolate.", "She was stopped by the bravest knight.", "Mary baked a cake for his birthday", "She decorated the cake carefully", "Mary wore a dress with polka dots."];
var hsens = ["राम ने सीता के लिए फल तोड़ा।", "छोटे बच्चे पाठशाला जल्दी आयेंगे।", "मेहनत का फल मीठा होता है।", "वाह! वह खूबसूरत है।", "पेड़ से पत्ते गिर गए।"];
var epos = "<select><option>Noun</option><option>Pronoun</option><option>Verb</option><option>Adjective</option><option>Adverb</option><option>Determiner</option><option>Preposition</option><option>Conjunction</option><option>Interjection</option></select>";
var hpos = "<select><option>Noun</option><option>Pronoun</option><option>Verb</option><option>Adjective</option><option>Adverb</option><option>Postposition</option><option>Conjunction</option><option>Interjection</option></select>";
$("#tab").css("display", "none");
$("#lang").on("change", function(){
	$("#txt1").css("display", "none");
	$("#tab").css("display", "none");
	$("table > tbody").empty();
	var lang = $("#lang").find(":selected").text();
	if(lang === "---Select Language---") {
		alert("Select Language");
	} else if(lang === "English") {
		$("#esen").val("none");
		$("#esen").css("display", "block");
		$("#hsen").css("display", "none");
		$("#esen").on("change", function(){
			$("#txt1").css("display", "block");
			$("#tab").css("display", "block");
			$("table > tbody").empty();
			var sen = $("#esen").find(":selected").text();
			if(sen === "---Select a sentence---") {
				alert("Select a sentence");
			} else {
				var temp = sen.split(" ");
				for(i=0; i<temp.length; i++) {
					var word = temp[i];
					if(word.includes(".")) {
						word = word.replace(".", "");
					}
					var markup = "<tr><td>" + word + "</td><td>" + epos + "</td><td>" + "</td><td>" + "</td></tr>";
					var body = $("table tbody");
					body.append(markup);
 				}
			}
		});
	} else {
		$("#hsen").val("none");
		$("#hsen").css("display", "block");
		$("#esen").css("display", "none");
		$("#hsen").on("change", function(){
			$("#txt1").css("display", "block");
			$("#tab").css("display", "block");
			$("table > tbody").empty();
			var sen = $("#hsen").find(":selected").text();	
			if(sen === "---Select a sentence---") {
				alert("Select a sentence");
			} else {
				var temp = sen.split(" ");
				for(i=0; i<temp.length; i++) {
					var word = temp[i];
					if(word.includes("।")) {
						word = word.replace("।", "");
					}
					var markup = "<tr><td>" + word + "</td><td>" + hpos + "</td><td>" + "</td><td>" + "</td></tr>";
					var body = $("table tbody");
					body.append(markup);
 				}
			}	
		});
	}
});