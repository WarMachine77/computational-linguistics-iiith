var corpus = [
			  "A mouse was having a very bad time. She could find no food at all. She looked here and there, but there was no food, and she grew very thin. At last the mouse found a basket, full of corn. There was a small hole in the basket, and she crept in. She could just get through the hole.\
Then she began to eat the corn. Being very hungry, she ate a great deal, and went on eating and eating. She had grown very fat before she felt that she had had enough.\
When the mouse tried to climb out of the basket, she could not. She was too fat to pass through the hole. \"How shall I climb out?\" said the mouse. \"oh, how shall I climb out?\" Just then a rat came along, and he heard the mouse. \"Mouse,\" said the rat, \"if you want to climb out of the basket, you must wait till you have grown as thin as you were when you went in.",
			  "A wolf carried off a lamb. The lamb said, \" I know you are going to eat me, but before you eat me I would like to hear you play the flute. I have heard that you can play the flute better than anyone else, even the shepherd himself.\" The wolf was so pleased at this that he took out his flute and began to play. When he had done, the lamb insisted him to play once more and the wolf played again. The shepherd and the dogs heard the sound, and they came running up and fell on the wolf and the lamb was able to get back to the flock.",
			  "A man had a little dog, and he was very fond of it. He would pat its head, and take it on his knee, and talk to it. Then he would give it little bits of food from his own plate. A donkey looked in at the window and saw the man and the dog. \"Why does he not make a pet of me?\" said the donkey. \"It is not fair. I work hard, and the dog only wags its tail, and barks, and jumps on its master's knee. It is not fair.\" Then the donkey said to himself, \"If I do what the dog does, he may make a pet of me.\" So the donkey ran into the room. It brayed as loudly as it could. It wagged its tail so hard that it knocked over a jar on the table. Then it tried to jump on to its master's knee. The master thought the donkey was mad, and he shouted, \"Help! Help!\" Men came running in with sticks, and they beat the donkey till it ran out of the house, and they drove it back to the field. \"I only did what the dog does,\" said the donkey,\" and yet they make a pet of the dog, and they beat me with sticks. It is not fair."
			 ]

var stemmer = new Snowball('English');
stemmer.setCurrent('abbreviations');
stemmer.stem();
console.log(stemmer.getCurrent());

function tokens(str) {
	var words = str.split(/[\s.]+/);
	var token = [];
	for(i=0; i<words.length; i++) {
		var temp = words[i].toLowerCase();
		if(temp==="" || temp===" " || temp==="." || temp==="," || temp==="?" || temp==='"'){
			continue;
		}
		if(temp.includes(".") || temp.includes(",") || temp.includes("?") || temp.includes('"')) {
			temp = temp.replace(".","");
			temp = temp.replace(",","");
			temp = temp.replace("?","");
			temp = temp.replace(/"/g,"");
		}
		token.push(temp);
	}
	return token;
}
function types(value, index, self) {
	return self.indexOf(value) === index;
}			 
$("#corp").on("change", function(){
	$("#ans1").css("background-color", "white");
	$("#ans2").css("background-color", "white");
	$("#ans1").val("");
	$("#ans2").val("");
	$("#out1").css("color", "black");
	document.getElementById("out1").innerHTML = "";
	$("#out1").css("display", "block");
	$("#cont").css("display", "none");
	document.getElementById("newtxt").innerHTML = "";
	$("#ntype").css("display", "none");
	$("#subm2").css("display", "none");
	var corp = $("#corp").find(":selected").text();
	if(corp === "---Select a corpus---") {
		alert("Select a corpus");
	} else if (corp === "Corpus 1") {
		document.getElementById("corptxt").innerHTML = corpus[0];
		$("#tab1").css("display", "block");
		$("#subm1").css("display", "block");
		var notokens = tokens(corpus[0]).length;
		var type = tokens(corpus[0]).filter(types);
		var notypes = type.length;
		var newtypes = [];
		for(i=0; i<type.length; i++) {
			stemmer.setCurrent(type[i]);
			stemmer.stem();
			var word = stemmer.getCurrent();
			// if(word === "grew") {
			// 	newtypes.push("grow");
			// 	continue;
			// }
			// if(word === "found" || word === "ate" || word === "grown" || word === "not" || word === "were") {
			// 	continue;
			// }
			if(!newtypes.includes(word)) {
				newtypes.push(word);
			}
		}
		console.log(type);
		console.log(newtypes);
		$("#subm1").on("click", function(){
			var inp1 = $("#ans1").val();
			var inp2 = $("#ans2").val();
			if (inp1 == notokens) {
				$("#ans1").css("background-color", "green");
			} else {
				$("#ans1").css("background-color", "red");
			}
			if (inp2 == notypes) {
				$("#ans2").css("background-color", "green");
			} else {
				$("#ans2").css("background-color", "red");
			}
			if (inp1 == notokens && inp2 == notypes) {
				$("#out1").css("color", "green");
				document.getElementById("out1").innerHTML = "Right Answer";
				$("#cont").css("display", "block");
			} else {
				$("#out1").css("color", "red");
				document.getElementById("out1").innerHTML = "Wrong Answer";
				$("#cont").css("display", "none");
			}
		});
		$("#cont").on("click", function(){
			$("#subm1").css("display", "none");
			$("#out1").css("display", "none");
			$("#cont").css("display", "none");
			document.getElementById("newtxt").innerHTML = "Now, consider all the tokens with the same 'root' word to be of the same type. Recalculate the number of types.";
			$("#ntype").css("display", "block");
			$("#subm2").css("display", "block");
		});
	} else if (corp === "Corpus 2") {
		document.getElementById("corptxt").innerHTML = corpus[1];
		$("#tab1").css("display", "block");
		$("#subm1").css("display", "block");
		var notokens = tokens(corpus[1]).length;
		var type = tokens(corpus[1]).filter(types);
		var notypes = type.length;
		var newtypes = [];
		for(i=0; i<type.length; i++) {
			stemmer.setCurrent(type[i]);
			stemmer.stem();
			var word = stemmer.getCurrent();
			if(!newtypes.includes(word)) {
				newtypes.push(word);
			}
		}
		console.log(type);
		console.log(newtypes);
		$("#subm1").on("click", function(){
			var inp1 = $("#ans1").val();
			var inp2 = $("#ans2").val();
			if (inp1 == notokens) {
				$("#ans1").css("background-color", "green");
			} else {
				$("#ans1").css("background-color", "red");
			}
			if (inp2 == notypes) {
				$("#ans2").css("background-color", "green");
			} else {
				$("#ans2").css("background-color", "red");
			}
			if (inp1 == notokens && inp2 == notypes) {
				$("#out1").css("color", "green");
				document.getElementById("out1").innerHTML = "Right Answer";
				$("#cont").css("display", "block");
			} else {
				$("#out1").css("color", "red");
				document.getElementById("out1").innerHTML = "Wrong Answer";
				$("#cont").css("display", "none");
			}
		});	
		$("#cont").on("click", function(){
			$("#subm1").css("display", "none");
			$("#out1").css("display", "none");
			$("#cont").css("display", "none");
			document.getElementById("newtxt").innerHTML = "Now, consider all the tokens with the same 'root' word to be of the same type. Recalculate the number of types.";
			$("#ntype").css("display", "block");
			$("#subm2").css("display", "block");
		});
	} else {
		document.getElementById("corptxt").innerHTML = corpus[2];
		$("#tab1").css("display", "block");
		$("#subm1").css("display", "block");
		var notokens = tokens(corpus[2]).length;
		var type = tokens(corpus[2]).filter(types);
		var notypes = type.length;
		var newtypes = [];
		for(i=0; i<type.length; i++) {
			stemmer.setCurrent(type[i]);
			stemmer.stem();
			var word = stemmer.getCurrent();
			if(!newtypes.includes(word)) {
				newtypes.push(word);
			}
		}
		console.log(type);
		console.log(newtypes);
		$("#subm1").on("click", function(){
			var inp1 = $("#ans1").val();
			var inp2 = $("#ans2").val();
			if (inp1 == notokens) {
				$("#ans1").css("background-color", "green");
			} else {
				$("#ans1").css("background-color", "red");
			}
			if (inp2 == notypes) {
				$("#ans2").css("background-color", "green");
			} else {
				$("#ans2").css("background-color", "red");
			}
			if (inp1 == notokens && inp2 == notypes) {
				$("#out1").css("color", "green");
				document.getElementById("out1").innerHTML = "Right Answer";
				$("#cont").css("display", "block");
			} else {
				$("#out1").css("color", "red");
				document.getElementById("out1").innerHTML = "Wrong Answer";
				$("#cont").css("display", "none");
			}
		});	
		$("#cont").on("click", function(){
			$("#subm1").css("display", "none");
			$("#out1").css("display", "none");
			$("#cont").css("display", "none");
			document.getElementById("newtxt").innerHTML = "Now, consider all the tokens with the same 'root' word to be of the same type. Recalculate the number of types.";
			$("#ntype").css("display", "block");
			$("#subm2").css("display", "block");
		});
	}
});