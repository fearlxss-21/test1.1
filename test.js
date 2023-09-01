const MbtiModule = (function() {
	let types = {
		ISTJ: {title: "", percentage: "13.7%", description: "", site: "https://psychomood.online/%d8%b4%d8%ae%d8%b5%d9%8a%d8%a9-istj-%d8%a7%d9%84%d9%84%d9%88%d8%ac%d8%b3%d8%aa%d9%8a/"},
		ISFJ: {title: "", percentage: "12.7%", description: "", site: "https://psychomood.online/%d8%b4%d8%ae%d8%b5%d9%8a%d8%a9-isfj-%d8%a7%d9%84%d9%85%d8%af%d8%a7%d9%81%d8%b9/"},
		INFJ: {title: "", percentage: "1.7%", description: "", site: "https://psychomood.online/%d8%b4%d8%ae%d8%b5%d9%8a%d8%a9-%d8%a7%d9%84%d9%85%d8%ad%d8%a7%d9%85%d9%8a-infj/"},
		INTJ: {title: "", percentage: "1.4%", description: "", site: "https://psychomood.online/%d8%b4%d8%ae%d8%b5%d9%8a%d8%a9-intj-%d8%a7%d9%84%d8%b9%d9%82%d9%84-%d8%a7%d9%84%d9%85%d8%af%d8%a8%d8%b1/"},
		ISTP: {title: "", percentage: "6.4%", description: "", site: "https://psychomood.online/%d8%b4%d8%ae%d8%b5%d9%8a%d8%a9-istp-%d8%a7%d9%84%d9%81%d9%86%d8%a7%d9%86-%d8%a7%d9%84%d9%85%d8%a8%d8%af%d8%b9/"},
		ISFP: {title: "", percentage: "6.1%", description: "", site: "https://psychomood.online/%d8%b4%d8%ae%d8%b5%d9%8a%d8%a9-isfp-%d8%a7%d9%84%d9%85%d8%ba%d8%a7%d9%85%d8%b1/"},
		INFP: {title: "", percentage: "3.2%", description: "", site: "https://psychomood.online/%d8%b4%d8%ae%d8%b5%d9%8a%d8%a9-infp-%d8%a7%d9%84%d9%85%d8%b9%d8%a7%d9%84%d8%ac/"},
		INTP: {title: "", percentage: "2.4%", description: "", site: "https://psychomood.online/%d8%b4%d8%ae%d8%b5%d9%8a%d8%a9-intp-%d8%a7%d9%84%d9%85%d8%b9%d9%85%d8%a7%d8%b1%d9%8a/"},
		ESTP: {title: "", percentage: "5.8%", description: "", site: "https://psychomood.online/%d8%b4%d8%ae%d8%b5%d9%8a%d8%a9-estp-%d8%a7%d9%84%d9%85%d8%b1%d9%88%d8%ac/"},
		ESFP: {title: "", percentage: "8.7%", description: "", site: "https://psychomood.online/%d8%b4%d8%ae%d8%b5%d9%8a%d8%a9-esfp-%d8%a7%d9%84%d9%85%d8%b3%d9%84%d9%8a/"},
		ENFP: {title: "", percentage: "6.3%", description: "", site: "https://psychomood.online/%d8%b4%d8%ae%d8%b5%d9%8a%d8%a9-enfp-%d8%a7%d9%84%d9%85%d9%86%d8%a7%d8%b6%d9%84/"},
		ENTP: {title: "", percentage: "2.8%", description: "", site: "https://psychomood.online/%d8%b4%d8%ae%d8%b5%d9%8a%d8%a9-entp-%d8%a7%d9%84%d9%85%d8%ad%d8%a7%d9%88%d8%b1/"},
		ESTJ: {title: "", percentage: "10.4%", description: "", site: "https://psychomood.online/%d8%b4%d8%ae%d8%b5%d9%8a%d8%a9-estj-%d8%a7%d9%84%d9%85%d8%b4%d8%b1%d9%81/"},
		ESFJ: {title: "", percentage: "12.6%", description: "", site: "https://psychomood.online/%d8%b4%d8%ae%d8%b5%d9%8a%d8%a9-esfj-%d8%a7%d9%84%d9%85%d8%b9%d8%b7%d9%8a/"},
		ENFJ: {title: "", percentage: "2.8%", description: "", site: "https://psychomood.online/%d8%b4%d8%ae%d8%b5%d9%8a%d8%a9-enfj-%d8%a7%d9%84%d9%85%d8%af%d8%b1%d8%b3/"},
		ENTJ: {title: "", percentage: "2.9%", description: "", site: "https://psychomood.online/%d8%b4%d8%ae%d8%b5%d9%8a%d8%a9-entj-%d8%b1%d8%a6%d9%8a%d8%b3-%d8%a7%d9%84%d8%a7%d8%b1%d9%83%d8%a7%d9%86/"}
	};
let e, i, s, n, t, f, j, p;
	let type;
	
function resetScores() {
		e = i = s = n = t = f = j = p = 0;
		type = "";
}
	
function getScores() {
	const inputs = document.getElementsByTagName("input");
	Array.prototype.forEach.call(inputs, function(input) {
		if (input.checked) {
		switch(input.value) {
			case 'e': e++; break;
			case 'i': i++; break;
			case 's': s++; break;
			case 'n': n++; break;
			case 't': t++; break;
			case 'f': f++; break;
			case 'j': j++; break;
			case 'p': p++; break;
		    }
	          }
	 });
}
	
function calculatePercentages() {
	e = Math.floor(e / 10 * 100);
	i = Math.floor(i / 10 * 100);
	s = Math.floor(s / 20 * 100);
	n = Math.floor(n / 20 * 100);
	t = Math.floor(t / 20 * 100);
	f = Math.floor(f / 20 * 100);
	j = Math.floor(j / 20 * 100);
	p = Math.floor(p / 20 * 100);
}
	
function createCharts() {
	document.querySelector("#eScore").innerHTML = e;
	document.querySelector("#iScore").innerHTML = i;
	document.querySelector("#sScore").innerHTML = s;
	document.querySelector("#nScore").innerHTML = n;
	document.querySelector("#tScore").innerHTML = t;
	document.querySelector("#fScore").innerHTML = f;
	document.querySelector("#jScore").innerHTML = j;
	document.querySelector("#pScore").innerHTML = p;
		
	document.querySelector("#eiChart").style.marginLeft = i / 2 + "%";
	document.querySelector("#snChart").style.marginLeft = n / 2 + "%";
	document.querySelector("#tfChart").style.marginLeft = f / 2 + "%";
	document.querySelector("#jpChart").style.marginLeft = p / 2 + "%";
}
	
function showResults() {
	type += (e >= i) ? "E" : "I";
	type += (s >= n) ? "S" : "N";
	type += (t >= f) ? "T" : "F";
	type += (j >= p) ? "J" : "P";
	document.querySelector("#type").innerHTML = type;
	document.querySelector("#type-title").innerHTML = types[type].title;
	document.querySelector("#type-percentage").innerHTML = types[type].percentage;
	document.querySelector("#type-description").innerHTML = types[type].description;
	document.querySelector("#type-site").href = types[type].site;
		
	document.querySelector("#type-details").classList.remove("hidden");
	document.querySelector("#scroll-down").classList.remove("hidden");
	document.querySelector("#results").classList.remove("hidden");
}
	
return {
	processForm: function() {
		resetScores();
		getScores();
		calculatePercentages();
		createCharts();
		showResults();
		}
	};
})();

document.querySelector("#submit").addEventListener("click", function() { MbtiModule.processForm(); });
