var english = [["John ate an apple before afternoon ", "before afternoon John ate an apple ", "John before afternoon ate an apple "], 
			   ["some students like to study in the night ", "at night some students like to study "], 
			   ["John and Mary went to church ", "Mary and John went to church "], 
			   ["John went to church after eating ", "after eating John went to church ", "John after eating went to church "], 
			   ["did he go to market ", "he did go to market "], 
			   ["the woman who called my sister sells cosmetics ", "the woman who sells cosmetics called my sister ", "my sister who sells cosmetics called the woman ", "my sister who called the woman sells cosmetics "],
			   ["John goes to the library and studies ", "John studies and goes to the library "],
			   ["John ate an apple so did she ", "she ate an apple so did John "],
			   ["the teacher returned the book after she noticed the error ", "the teacher noticed the error after she returned the book ", "after the teacher returned the book she noticed the error ", "after the teacher noticed the error she returned the book ", "she returned the book after the teacher noticed the error ", "she noticed the error after the teacher returned the book ", "after she returned the book the teacher noticed the error ", "after she noticed the error the teacher returned the book "],
			   ["I told her that I bought a book yesterday ", "I told her yesterday that I bought a book ", "yesterday I told her that I bought a book ", "I bought a book that I told her yesterday ", "I bought a book yesterday that I told her ", "yesterday I bought a book that I told her "] 			  
			  ];
var hindi = [["राम और श्याम बाजार गयें ", "राम और श्याम गयें बाजार ", "बाजार गयें राम और श्याम ", "गयें बाजार राम और श्याम "],
			 ["राम सोया और श्याम भी ", "श्याम सोया और राम भी ", "सोया श्याम और राम भी ", "सोया राम और श्याम भी "],
			 ["मैंने उसे बताया कि राम सो रहा है ", "मैंने उसे बताया कि सो रहा है राम ", "उसे मैंने बताया कि राम सो रहा है ", "उसे मैंने बताया कि सो रहा है राम ", "मैंने बताया उसे कि राम सो रहा है ", "मैंने बताया उसे कि सो रहा है राम ", "उसे बताया मैंने कि राम सो रहा है ", "उसे बताया मैंने कि सो रहा है राम ", "बताया मैंने उसे कि राम सो रहा है ", "बताया मैंने उसे कि सो रहा है राम ", "बताया उसे मैंने कि राम सो रहा है ", "बताया उसे मैंने कि सो रहा है राम "],
			 ["राम खाकर सोया ", "खाकर राम सोया ", "राम सोया खाकर ", "खाकर सोया राम ", "सोया राम खाकर ", "सोया खाकर राम "],
			 ["बिल्लियों को मारकर कुत्ता सो गया ", "मारकर बिल्लियों को कुत्ता सो गया ", "बिल्लियों को मारकर सो गया कुत्ता ", "मारकर बिल्लियों को सो गया कुत्ता ", "कुत्ता सो गया बिल्लियों को मारकर ", "कुत्ता सो गया मारकर बिल्लियों को ", "सो गया कुत्ता बिल्लियों को मारकर ", "सो गया कुत्ता मारकर बिल्लियों को "],
			 ["एक लाल किताब वहाँ है ", "एक लाल किताब है वहाँ ", "वहाँ है एक लाल किताब ", "है वहाँ एक लाल किताब "],
			 ["एक बड़ी सी किताब वहाँ है ", "एक बड़ी सी किताब है वहाँ ", "बड़ी सी एक किताब वहाँ है ", "बड़ी सी एक किताब है वहाँ ", "वहाँ है एक बड़ी सी किताब ", "वहाँ है बड़ी सी एक किताब ", "है वहाँ एक बड़ी सी किताब ", "है वहाँ बड़ी सी एक किताब "]
			];
$("#lang").on("change", function(){
	var count1 = 0;
	document.getElementById("help1").innerHTML = "Form a sentence (Declarative or Interrogative or any other type) from the given words";
	document.getElementById("help2").innerHTML = "(select the buttons in proper order)";
	document.getElementById("buttons").innerHTML = "";
	document.getElementById("help3").innerHTML = "";
	document.getElementById("help4").innerHTML = "";
	document.getElementById("formed").innerHTML = "";
	$("#reform").css("display", "none");
	$("#check").css("display", "none");
	document.getElementById("ans").innerHTML = "";
	$("#get").css("display", "none");
	$("#hid").css("display", "none");
	$("#see").css("display", "none");
	$("#answers").text("");
	$("#answers").css("display", "none");
	var lang = $("#lang").find(":selected").text();
	if(lang === "---Select Language---") {
		alert("Select language");
		// return false;	
	} else if (lang === "English") {
		var eind = Math.floor(Math.random()*10);
		var allans = english[eind];
		var esample = Math.floor(Math.random()*allans.length);
		var words = allans[esample].split(" ");
		words.pop();
		$("#answers").text("");
		var wlen = words.length;
		for(i=0; i<wlen; i++) {
			var n = Math.floor(Math.random()*words.length);
			var temp = words[n];
			words[n] = words[words.length-1];
			words[words.length-1] = temp;
			var btn = document.createElement("BUTTON");
			btn.innerHTML = words[words.length-1];
			btn.style.marginRight = "25px";
			document.getElementById("buttons").appendChild(btn);
			words.pop();
		}
		$("button").on("click", function(){
			document.getElementById("help3").innerHTML = "Formed Sentence";
			document.getElementById("help4").innerHTML = "(after selecting words):"
			var word = $(this).text()+" ";
			if($(this).text() !== "Re-form the sentence" && $(this).text() !== "Check the correctness of this sentence" && $(this).text() !== "Get Correct Sentence" && $(this).text() !== "Hide the correct Sentence" && $(this).text() !== "Get Answers") {
				var wordnode = document.createTextNode(word);
				$(this).hide();
				document.getElementById("formed").appendChild(wordnode);
				$("#reform").css("display", "block");
			}
			$("#reform").on("click", function(){
				$("button").show();
				document.getElementById("help3").innerHTML = "";
				document.getElementById("help4").innerHTML = "";
				document.getElementById("formed").innerHTML = "";
				document.getElementById("ans").innerHTML = "";
				$("#reform").css("display", "none");
				$("#check").css("display", "none");
				$("#get").css("display", "none");
				$("#hid").css("display", "none");
				$("#see").css("display", "none");
				$("#answers").empty();
				count1 = 0;
			});
			var form = $("#formed").text().split(" ");
			if(form.length-1 == wlen) {
				$("#check").css("display", "block");
			}
			$("#check").on("click", function(){
				count1 = 0;
				$("#answers").text("");
				$("#get").css("display", "none");
				$("#hid").css("display", "none");
				$("#see").css("display", "none");
				if(count1 == 0) {	
					$("#answers").text("");
					for(i=0; i<allans.length; i++) {
						if($("#formed").text() === allans[i]) {
							document.getElementById("ans").innerHTML = "Right answer!!!";
							$("#ans").css("color", "#008000");
							$("#get").css("display", "none");
							count1 += 1;
							return true;
						}
					}	
					document.getElementById("ans").innerHTML = "Wrong answer!!!";
					$("#answers").text("");
					document.getElementById("answers").innerHTML = "";
					$("#ans").css("color", "#FF0000");
					$("#get").css("display", "block");
					$("#get").on("click", function(){
						$("#get").css("display", "none");
						$("#hid").css("display", "block");
						$("#answers").css("display", "block");	
						document.getElementById("answers").innerHTML = "";
						for(i=0; i<allans.length; i++) {
							if(i == allans.length-1) {
								document.getElementById("answers").innerHTML += allans[i];
							} else {
								document.getElementById("answers").innerHTML += allans[i];
								document.getElementById("answers").innerHTML += "<br />";
							}
						}
					});
				}		
			});
		});
		$("#hid").on("click", function(){
			$("#hid").css("display", "none");
			$("#see").css("display", "block");
			$("#answers").css("display", "none");
		});
		$("#see").on("click", function(){
			$("#hid").css("display", "block");
			$("#see").css("display", "none");
			$("#answers").css("display", "block");
		});
	} else {
		var hind = Math.floor(Math.random()*7);
		var allans = hindi[hind];
		var hsample = Math.floor(Math.random()*allans.length);
		var words = allans[hsample].split(" ");
		words.pop();
		$("#answers").text("");
		var wlen = words.length;
		for(i=0; i<wlen; i++) {
			var n = Math.floor(Math.random()*words.length);
			var temp = words[n];
			words[n] = words[words.length-1];
			words[words.length-1] = temp;
			var btn = document.createElement("BUTTON");
			btn.innerHTML = words[words.length-1];
			btn.style.marginRight = "25px";
			document.getElementById("buttons").appendChild(btn);
			words.pop();
		}
		$("button").on("click", function(){
			document.getElementById("help3").innerHTML = "Formed Sentence";
			document.getElementById("help4").innerHTML = "(after selecting words):"
			var word = $(this).text()+" ";
			if($(this).text() !== "Re-form the sentence" && $(this).text() !== "Check the correctness of this sentence" && $(this).text() !== "Get Correct Sentence" && $(this).text() !== "Hide the correct Sentence" && $(this).text() !== "Get Answers") {
				var wordnode = document.createTextNode(word);
				$(this).hide();
				document.getElementById("formed").appendChild(wordnode);
				$("#reform").css("display", "block");
			}
			$("#reform").on("click", function(){
				$("button").show();
				document.getElementById("help3").innerHTML = "";
				document.getElementById("help4").innerHTML = "";
				document.getElementById("formed").innerHTML = "";
				document.getElementById("ans").innerHTML = "";
				$("#reform").css("display", "none");
				$("#check").css("display", "none");
				$("#get").css("display", "none");
				$("#hid").css("display", "none");
				$("#see").css("display", "none");
				$("#answers").empty();
				count1 = 0;
			});
			var form = $("#formed").text().split(" ");
			if(form.length-1 == wlen) {
				$("#check").css("display", "block");
			}
			$("#check").on("click", function(){
				count1 = 0;
				$("#answers").text("");
				$("#get").css("display", "none");
				$("#hid").css("display", "none");
				$("#see").css("display", "none");
				if(count1 == 0) {	
					$("#answers").text("");
					for(i=0; i<allans.length; i++) {
						if($("#formed").text() === allans[i]) {
							document.getElementById("ans").innerHTML = "Right answer!!!";
							$("#ans").css("color", "#008000");
							$("#get").css("display", "none");
							count1 += 1;
							return true;
						}
					}
					document.getElementById("ans").innerHTML = "Wrong answer!!!";
					$("#answers").text("");		
					document.getElementById("answers").innerHTML = "";		
					$("#ans").css("color", "#FF0000");
					$("#get").css("display", "block");
					$("#get").on("click", function(){
						$("#get").css("display", "none");
						$("#hid").css("display", "block");
						$("#answers").css("display", "block");
						document.getElementById("answers").innerHTML = "";
						for(i=0; i<allans.length; i++) {
							if(i == allans.length-1) {
								document.getElementById("answers").innerHTML += allans[i];
							} else {
								document.getElementById("answers").innerHTML += allans[i];
								document.getElementById("answers").innerHTML += "<br />";
							}
						}
					});
				}	
			});
		});
		$("#hid").on("click", function(){
			$("#hid").css("display", "none");
			$("#see").css("display", "block");
			$("#answers").css("display", "none");
		});
		$("#see").on("click", function(){
			$("#hid").css("display", "block");
			$("#see").css("display", "none");
			$("#answers").css("display", "block");
		});
	}
});