function init() {

	let cipherStart = document.querySelector("#cipherStart");
	let cipherValue = document.querySelector("#cipherValue");
	let cipherOutput = document.querySelector("#cipherOutput");
	let baseline = document.querySelector("#baseline");

	function updateCipher() {
		cipherValue.innerText = cipherStart.value;
		console.log(cipherStart.value)

		cipherOutput.innerHTML = '';
		baseline.innerHTML = '';

		for (var i = 65; i < (65+26); i++) {


			let b = document.createElement('p');
			b.innerText = String.fromCharCode(i);
			baseline.appendChild(b);

			let codeNumber = i + parseInt(cipherStart.value);
			if (codeNumber > (65+25)) {
				codeNumber-=26;
			}

			let p = document.createElement('p');
			p.innerText = String.fromCharCode(codeNumber);
			cipherOutput.appendChild(p);	

		}
	}

	cipherStart.addEventListener('change',updateCipher);

	updateCipher();
}

init();