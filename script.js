const search = document.getElementById("searchbar")
const subm = document.getElementById("submit")
const brave = document.getElementById("brave")
const google = document.getElementById("google")
////
let type = "search"
let ext = "search.brave.com/"
const images = document.getElementById("images")
const cs = document.getElementById("cs")

brave.onclick = () => {
ext = "search.brave.com/"
}
google.onclick = () => {
ext = "google.com/"
}

images.addEventListener("click", () => {
if (images.checked) {
type = "images"
} else {
type = "search"
}

});
let customenabled = false

cs.addEventListener("click", () => {
if (cs.checked) {
if (customenabled == false) {
const tag = document.createElement("input")
const submit = document.createElement("button")
submit.innerText = "Set Field"
const element = document.getElementById("customfield")
element.appendChild(tag)
element.appendChild(submit)
submit.onclick = () => {
type = tag.value
}
customenabled = true
}
} else {
//element.innerHTML = ""
//customenabled = false
}
});


////
function openInNewTab(url) {
 window.open(url, '_blank').focus();
}
subm.onclick = () => {
	openInNewTab("https://"+ext+type+"?q="+search.value);
}
