var adm = 1;

function addmessage(obj) {
	behind = document.getElementById('preView');

	behind.style = "display: none;";

	check1data = document.getElementById("addD");
	check3type = document.querySelector("select[name='type']").value;

	talk = document.createElement('div');
	talk.id = `talk_${adm}`;

	if (check3type == 0) {
		return;
	} else if (check1data == true){
		//日付
		check11 = document.querySelector("div[name='mdata']").value;
		talk.class = 'chuou';

		if (check11 == 0) {
			check12 = document.getElementById("data").value;
			talk.innerHTML = `${check12}`;
			talk.class = 'chuou';
		} else {
			talk.class = 'chuou';
			talk.innerHTML = `${check11}`;
		};

	} else if (check3type == 4){
		//メッセージの送信取消
		check2sender = document.querySelector("select[name='sender']").value;
		talk.class = 'chuou';
		talk.innerHTML = `${check2sender}がメッセージの送信を取り消しました。`;

	} else {
		//既読時間つくやつ
		check2sender = document.querySelector("select[name='sender']").value;

		if (check2sender == 0){
			talk.class = 'rComment';
		} else {
			talk.class = 'cComment';
		};

		check3type = document.querySelector("select[name='type']").value;

		if (check3type == 5){
			//イラスト
			imagethis = document.querySelector("input[name='image']");

			const fileData = imagethis.target.files[0];

			const imgType = fileData.type;

			var reader = new FileReader();
			// ファイル読み取りに失敗したとき
			reader.onerror = function() {
				alert('読み取り失敗！')
			}
			// ファイル読み取りに成功したとき
			reader.onload = function() {
				const insert = '<img src=' + reader.result + 'class="backPreview">';
				if (check2sender == 0){
					talk.class = 'rComment';
				} else {
					talk.class = 'cComment';
				};
				talk.innerHTML = insert;
			}
			// ファイル読み取りを実行
			reader.readAsDataURL(fileData);
		} else {
			if (check3type == 1){
				textmessage = document.querySelector("textarea[name='message']").value;
			} else if (check3type == 2){
				var textmessage = document.createElement('div');
				textmessage.class = "tell";
				textmessage.innerHTML = '(';
			} else if (check3type == 3){
				telltime = document.getElementById("tuwatimeopen").value;
				var textmessage = document.createElement('div');
				textmessage.innerHTML = '<div class="tell">(</div>' + telltime;
			};
		};

		check4time = document.getElementById("timehyouji").value;
		check5kidoku = document.getElementById("kidoku").value;

		if (check5kidoku == true){
			check51 = '既読';
		};
		if (check4time == true){
			check41 = document.querySelector("select[name='time']").value;
			check51 += `<br>${check41}`
		};

		talkdisplay = document.getElementById('talkadd');
		talkdisplay.appendChild(talk);
		textmessage.appendChild(talkdisplay);
	};
};