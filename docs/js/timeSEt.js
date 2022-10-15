function timeRandom(){
	var timeRandomH = Math.floor(Math.random() * 24);
	var timeRandomM = Math.floor(Math.random() * 60);

	if(timeRandomM < 10){
		timeRandomM = '0' + `${timeRandomM}`;
	};

	if(timeRandomH < 10){
		timeRandomH = '0' + `${timeRandomH}`;
	};
	
	document.querySelector("input[name='time']").value = timeRandomH + ':' + timeRandomM;
};

function timePlus() {
	thisTime = document.querySelector("input[name='time']").value
	thatTime = document.querySelector("input[name='addtime']").value

	thisHour = thisTime.split(':')[0]
	thisMinutu = thisTime.split(':')[1]

	thatHour = thatTime.split(':')[0]
	thatMinutu = thatTime.split(':')[1]

	hOur = Number(thisHour) + Number(thatHour)
	mInitu = Number(thisMinutu) + Number(thatMinutu)

	if (mInitu > 59){
		mInitu -= 60;
		hOur += 1;
	};

	if (hOur > 23) {
		hOur -= 24;
	};

	if (hOur < 10){
		hOur = '0' + `${hOur}`;
	};

	if (mInitu < 10){
		mInitu = '0' + `${mInitu}`;
	};

	document.querySelector("input[name='time']").value = `${hOur}:${mInitu}`
};

function timeChange(obj){
	change = document.getElementById('timeKanren')
	if (obj.checked == true){
		change.style.display = 'block'
	} else {
		change.style.display = 'none'
	};
};