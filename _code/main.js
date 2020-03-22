
function strip(html){
  var doc = new DOMParser().parseFromString(html, 'text/html');
  return doc.body.textContent || "";
}
word =strip(document.getElementById('word').innerHTML.trim());
document.getElementById('frenchExamble').innerHTML =document.getElementById('frenchExamble').innerHTML.replace(word,"<span style='color:red; background-color:#c2e653bd;'>"+word+"</span>")

var type = document.getElementsByClassName('type')[0].innerHTML.trim();
if (type == "feminine noun" || type == "plural feminine noun" || type== "invariable feminine noun" ) {
  document.getElementById("container").style.background="linear-gradient(90deg, rgba(255,209,209,1) 0%, rgba(255,234,197,1) 24%, rgba(255,225,241,1) 75%, rgba(252,222,222,1) 100%)";
  document.getElementById("imgcontainer").style.backgroundColor='#ad5086';

}
else if (type.trim() == "masculine noun" || type.trim() == "plural masculine noun"  || type.trim() == "invariable masculine noun") {
  document.getElementById("container").className = " masculineBackground";
  document.getElementById("imgcontainer").style.backgroundColor='#507fad';

}
else if (type.trim().includes('adjective')) {
  document.getElementById("container").className = " adjectiveBackground";
  document.getElementById("imgcontainer").className = " adjectiveImageContainer";

}
else if (type.trim() == "adverb") {
	document.getElementById("container").className = "adverbBackground";
	document.getElementById("imgcontainer").className = " adverbImageContainer";

}
