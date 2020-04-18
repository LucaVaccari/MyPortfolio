async function openJSON(fileName) {
	const response = await fetch(fileName);
	const json = await response.json();
	return json;
}

async function load() {
	let info = await openJSON("personalInfo.json");
	console.log(info);
}

load();
