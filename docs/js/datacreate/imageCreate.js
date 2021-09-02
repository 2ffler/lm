var btn = document.getElementById("create");

btn.addEventListener("click",() => {
	html2canvas(document.getElementById("previeW")).then(canvas => { 
	    let downloadEle = document.getElementById("download");

	    donwloadEle.href = canvas.toDataURL("image/png");
	    donloadEle.download = "canvas.png";
	    downloadEle.click();
	});
})