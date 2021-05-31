var adm = 1;

function addmessage(obj) {
	behind = document.getElementById('preView');

	behind.style = "display: none;";

	check1data = document.getElementById("addD");

	talk = document.createElement('div');
	talk.id = `talk_${adm}`;

	if (check1data == true){

		check11 = document.querySelector("div[name='mdata']").value;
		talk.class = 'chuou';

		if (check11 == 0) {
			check12 = document.getElementById("data").value;
			talk.innerHTML = `${check12}`;
		} else {
			talk.innerHTML = `${check11}`;
		};

	} else if (check3type == 4){

		check2sender = document.querySelector("select[name='sender']").value;
		talk.class = 'chuou';
		talk.innerHTML = `${check2sender}がメッセージの送信を取り消しました。`;

	} else {

		check2sender = document.querySelector("select[name='sender']").value;
		check3type = document.querySelector("select[name='type']").value;

		if (check3type == 1){
			textmessage = document.querySelector("textarea[name='message']").value;
		} else if (check3type == 2){
			var div = document.createElement('div');
			div.class = "tell";
			div.innerHTML = '(';
		} else if (check3type == 3){
			telltime = document.getElementById("tuwatimeopen").value;
			var div = document.createElement('div');
			div.innerHTML = '<div class="tell">(</div>' + telltime;
		} else if (check3type == 5){
			imagethis = document.querySelector("input[name='image']");
		};

		check4time = document.getElementById("timehyouji").value;
		check5kidoku = document.getElementById("kidoku").value;

		if (check4time == true){
			check41 = document.querySelector("select[name='time']").value;
		};
		if (check5kidoku == true){
		};

	talkdisplay = document.getElementById('talkadd');
	talkdisplay.appendChild(talk);
	};
};