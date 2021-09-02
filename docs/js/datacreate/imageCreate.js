var btn = document.getElementById("create");

btn.addEventListener("click",() => {
	html2canvas(document.getElementById("previeW")).then(canvas => {
		result = document.getElementById("result");
		itis = document.getElementById("canvas");
		download = document.getElementById("download");

		itis.remove()

		canvas.id = 'canvas'
		download.style = 'display: block;'

	    result.appendChild(canvas)
	});
})