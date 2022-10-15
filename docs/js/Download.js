$("#download").click(function(){
	canvas = document.getElementById('canvas');
	var base64 = canvas.toDataURL("image/jpeg");
	document.getElementById("download").href = base64;
});