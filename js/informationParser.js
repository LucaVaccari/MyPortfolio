async function openJSON(fileName) {
	const response = await fetch(fileName);
	const json = await response.json();
	return json;
}

function setHTML(id, text) {
	document.getElementById(id).innerHTML = text;
}

const parseUl = elements => `<ul><li>${elements.join(`</li><li>`)}</li></ul>`;

const getAge = birthDate =>
	parseInt(
		(Date.now() -
			new Date(birthDate.year, birthDate.month, birthDate.day)) /
			31536000000, //from milliseconds to years
	);

async function load() {
	let info = await openJSON("personalInfo.json");
	console.log(info);
	setHTML("title", info.firstName + " " + info.lastName);
	setHTML("description", info.description);
	setHTML("first-name", info.firstName);
	setHTML("last-name", info.lastName);
	setHTML("age", getAge(info.birthDate));
	setHTML("school", info.school);
	setHTML("passions", parseUl(info.passions.map(el => el.name))); //objs to strings
}

load();