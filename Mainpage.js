recognition.addEventListener('result', e => {
	const transcript = Array.from(e.results)
		.map(result => result[0])
		.map(result => result.transcript)
		.join('')

	document.getElementById("p").innerHTML = transcript;
	console.log(transcript);
});
