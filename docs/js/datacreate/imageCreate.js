var btn = document.getElementById("result");

btn.addEventListener("click",() => {

	html2canvas(document.getElementById("zoom")).then(canvas => {
		createImage = document.getElementById("createImage")
		that = document.getElementById("canvas");
		onemore = document.getElementById("thisDownload");
		download = document.getElementById("download");

		that.remove()

		canvas.id = 'canvas'
		canvas.style = 'display: none;'
		download.style = 'display: block;'
		onemore.style.display = 'block'

		createImage.appendChild(canvas)

		var link = canvas.toDataURL("image/jpeg");
		document.getElementById("download").href = link;
	});
})