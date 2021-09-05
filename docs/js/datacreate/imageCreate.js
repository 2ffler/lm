var btn = document.getElementById("result");

btn.addEventListener("click",() => {

	html2canvas(document.getElementById("zoom")).then(canvas => {
		createImage = document.getElementById("createImage")
		that = document.getElementById("canvas");
		download = document.getElementById("download");

		that.remove()

		canvas.id = 'canvas'
		canvas.style = 'display: none;'
		download.style = 'display: block;'

		createImage.appendChild(canvas)

		var link = canvas.toDataURL("image/jpeg");
		document.getElementById("download").href = link;
	});
})