var btn = document.getElementById("result");

btn.addEventListener("click",() => {

	html2canvas(document.getElementById("zoom")).then(canvas => {
		zooming = document.getElementById("zooming")
		canvas = document.getElementById("canvas");
		download = document.getElementById("download");

		canvas.remove()

		canvas.id = 'canvas'
		canvas.style = 'display: none;'
		download.style = 'display: block;'

	    zooming.appendChild(canvas)

		var link = canvas.toDataURL("image/jpeg");
		document.getElementById("download").href = link;
	});
})