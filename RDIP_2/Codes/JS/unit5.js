var esens = ["The child liked the chocolate.", "She was stopped by the bravest knight.", "Mary baked a cake for his birthday", "She decorated the cake carefully", "Mary wore a dress with polka dots."];
var hsens = ["राम ने सीता के लिए फल तोड़ा।", "छोटे बच्चे पाठशाला जल्दी आयेंगे।", "मेहनत का फल मीठा होता है।", "वाह! वह खूबसूरत है।", "पेड़ से पत्ते गिर गए।"];
var epos = "<select><option value='NN'>Noun</option><option value='PR'>Pronoun</option><option value='V'>Verb</option><option value='JJ'>Adjective</option><option value='RB'>Adverb</option><option value='DT'>Determiner</option><option value='IN'>Preposition</option><option value='C'>Conjunction</option><option value='UH'>Interjection</option></select>";
var hpos = "<select><option>Noun</option><option>Pronoun</option><option>Verb</option><option>Adjective</option><option>Adverb</option><option>Postposition</option><option>Conjunction</option><option>Interjection</option></select>";
// var pos = require('pos');
// var words = new pos.Lexer().lex('This is some sample text. This text can contain multiple sentences.'); //You have to enter the sentences here
// var tagger = new pos.Tagger();
// var taggedWords = tagger.tag(words);
// for (i in taggedWords) {
//     var taggedWord = taggedWords[i];
//     var word = taggedWord[0];
//     var tag = taggedWord[1];
//     console.log(word + " /" + tag);
// }

$("#tab").css("display", "none");
$("#lang").on("change", function(){
	$("#txt1").css("display", "none");
	$("#tab").css("display", "none");
	$("table > tbody").empty();
	$("#subm").css("display", "none");
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
					var tword = temp[i];
					if(tword.includes(".")) {
						tword = tword.replace(".", "");
					}
					var markup = "<tr><td>" + tword + "</td><td>" + epos + "</td><td>" + "</td><td>" + "</td></tr>";
					var body = $("table tbody");
					body.append(markup);
 				}
				$("#subm").css("display", "block");
				// $("#subm").on("click", function() {
				// 	$("table > td:nth-child(3)").empty();
				// 	var pos = require('pos');
				// 	var words = new pos.Lexer().lex(sen);
				// 	var tagger = new pos.Tagger();
				// 	var taggedWords = tagger.tag(words);
				// 	for(i=0; i<taggedWords.length; i++) {
				// 		if(taggedWords[i][1].charAt(0) != "V" && taggedWords[i][1].charAt(0) != "C") {
				// 			if(taggedWords[i][1].substring(0,2) === $("table tr:nth-child(i+1) td:nth-child(2)").val()) {
				// 				//add tick
				// 				$("table tr:nth-child(i+1) td:nth-child(3)").prepend('<img src="../HTML/right.png">');
				// 			} else {
				// 				//add cross
				// 				$("table tr:nth-child(i+1) td:nth-child(3)").prepend('<img src="../HTML/wrong.png">');
				// 			}
				// 		} else {
				// 			if(taggedWords[i][1].substring(0,1) === $("table tr:nth-child(i+1) td:nth-child(2)").val()) {
				// 				//add tick
				// 				$("table tr:nth-child(i+1) td:nth-child(3)").prepend('<img src="../HTML/right.png">');
				// 			} else {
				// 				//add cross
				// 				$("table tr:nth-child(i+1) td:nth-child(3)").prepend('<img src="../HTML/wrong.png">');
				// 			}
				// 		}
				// 	}
				// }); 
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
					var tword = temp[i];
					if(tword.includes("।")) {
						tword = tword.replace("।", "");
					}
					var markup = "<tr><td>" + tword + "</td><td>" + hpos + "</td><td>" + "</td><td>" + "</td></tr>";
					var body = $("table tbody");
					body.append(markup);
 				}
 				$("#subm").css("display", "block");
			}	
		});
	}
});