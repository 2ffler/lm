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

		const img = new Image();

		// ファイル読み取りに成功したとき
		reader.onload = function() {
			const insert = '<img src="' + reader.result + '" class="backPreview">';
			backPreview.style = 'display: none;';
			backPreviewC.innerHTML = insert;

			img.onload = function() {
				height = img.height;

				talkdisplay = document.getElementById('previeW');

				tDheight = talkdisplay.clientHeight

				if (height < tDheight) {
					count = Math.ceil(tDheight / height)
					str = insert
					for (var i = 0; i < count; i++){
						str += insert
					}
					backPreviewC.innerHTML = str;
				};
			};
			img.src = reader.result;
		};
		// ファイル読み取りを実行
		reader.readAsDataURL(fileData);

	}, false);		
};