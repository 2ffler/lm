if(window.File) {
	var backPreview = document.getElementById('backPreview');
	var backPreviewC = document.getElementById('backPreviewC');
	var select = document.querySelector('input[name="display_back"]');

	// ファイルが選択されたとき
	select.addEventListener('change', function(e) {
		// 選択されたファイルの情報を取得
		const fileData = e.target.files[0];

		const imgType = fileData.type;
		// 選択されたファイルが画像かどうか確認
		if(!imgType.match(/^image/)) {
			alert('画像ファイルじゃないんじゃないそれ。');
			select.value = '';
			backPreview.innerHTML = '画像だったらここにプレビュー出てくるんだけど。';
			return;
		}
		var reader = new FileReader();
		// ファイル読み取りに失敗したとき
		reader.onerror = function() {
			alert('読み取り失敗！')
			backPreview.style = 'display: block;';
			backPreviewC.innerHTML = '';
		}
		// ファイル読み取りに成功したとき
		reader.onload = function() {
			const insert = '<img src="' + reader.result + '" class="backPreview">';
			backPreview.style = 'display: none;';
			backPreviewC.innerHTML = insert;
		}
		// ファイル読み取りを実行
		reader.readAsDataURL(fileData);

		var img = new Image();

		img.onload = function() {
			//トリミング
				if (img.width * 16 < img.height * 9){
					var H = img.width / 9 * 16;
					var H0 = (img.height - H) / 2;
					var HM = img.height - H0 * 2;
					var W0 = 0;
					var WM = img.width;
				} else {
					var W = img.height * 9 / 16;
					var H = 0;
					var W0 = (img.width - W) / 2;
					var WM = img.width - W0 * 2;
					var H0 = 0;
					var HM = img.height;
				}
				var ImgCanvas = document.getElementById("canVas");

				ImgCanvas.width = 750;
				ImgCanvas.height = 1334;

				var ImgCanvasCtx = ImgCanvas.getContext("2d");

				ImgCanvasCtx.clearRect(0,0,ImgCanvas.width,ImgCanvas.height);
				ImgCanvasCtx.drawImage(img,W0,H0,WM,HM,0,0,750,1334);

				ImgCanvasCtx.fillStyle = "black";
				ImgCanvasCtx.globalAlpha = 0.4;
				ImgCanvasCtx.font = '400 24px "M PLUS 1p", sans-serif';
				ImgCanvasCtx.fillText("LIER", 90, ih);
			};
		img.src = reader.result;
	}, false);
		
};