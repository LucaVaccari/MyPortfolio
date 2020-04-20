async function openJSON(fileName) {
	const response = await fetch(fileName);
	const json = await response.json();
	return json;
}

function setHTML(id, text) {
	document.getElementById(id).innerHTML = text;
}
function getAge(birthDate) {
	let date = new Date(birthDate.year, birthDate.month, birthDate.day);
	//the division convert from milliseconds to years
	return parseInt((Date.now() - date) / 31536000000);
}

async function load() {
	let info = await openJSON("personalInfo.json");
	console.log(info);
	setHTML("title", info.firstName + " " + info.lastName);
	setHTML("description", info.description);
	setHTML("first-name", info.firstName);
	setHTML("last-name", info.lastName);
	setHTML("age", getAge(info.birthDate));
}

load();
