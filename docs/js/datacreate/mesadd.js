var adm = 0;

tttTOP = /[〝(（「『〔｛【゛゜]/g;
tttBOTTOM = /[〜〟，、。．・：；？！!?－→←↑↓)）」』〕｝】々ぁぃぅぇぉっゃゅょァィゥェォッャュョ]/g
tttKIGO = /[―…ー]/

function imageCreateThis(image, nameing, which) {
	const file = document.querySelector(nameing).files[0];
	var reader = new FileReader()

	if (file){
		reader.readAsDataURL(file);
	} else {
		image.innerHTML = '<img src="./image/nonamethis.png">'
	};

	// ファイル読み取りに失敗したとき
	reader.onerror = function() {
		image.remove();
	};
	// ファイル読み取りに成功したとき
	reader.onload = function() {
		image.innerHTML = `<img src="${reader.result}">`
		if (which == 'none'){
			image.innerHTML = `<img src="${reader.result}" class="LinEiconPre">`;
		} else if (which == 'left'){
			image.className = 'imgLeft'
		} else if (which == 'right'){
			image.className = 'imgRight'
		};
	};
};

function addmessage(obj) {
	zoom = document.getElementById('zoom');

	zoom.style = 'display: none;'

	behind = document.getElementById('preView');
	design = document.getElementById('design');

	backgroundcolor = design.backgroundcolor.value
	kidokuColor = '#000000'

	if (backgroundcolor == '#1A1A1A') {
		kidokuColor = '#ffffff'
	};

	if (behind){
		behind.remove()
	};

	checkmemberCount = document.getElementById("delb").value;

	check1data = document.querySelector("input[name='addD']").checked;
	check3type = document.querySelector("select[name='type']").value;

	talk = document.createElement('div');

	var textmessage = document.createElement('div');

	if (check1data == true || check3type == 4){
		//日付
		check11 = document.getElementById("mdatainput").checked;
		talk.className = 'chuoublock';
		textmessage.className = 'chuou'
		textmessage.style = `color: ${kidokuColor}`

		if (check3type == 4 && check1data == false){
			//メッセージの送信取消
			check2sender = document.querySelector("select[name='sender']").value;

			textmessage.innerHTML = ''

			if (check2sender > 0){
				senderName = document.getElementById(`sender_${check2sender}`).value;
				textmessage.innerHTML = senderName + 'が'
			};

			textmessage.innerHTML += 'メッセージの送信を取り消しました。';
		} else if (check11 == true) {
			check12 = document.getElementById("data").value;
			check11 = document.querySelector("input[name='year']").checked;

			date = check12.split('-')

			check12 = ''

			if (check11 == true) {
				check12 = date[0] + '年'
			};

			check12 += date[1] + '月' + date[2] + '日'

			textmessage.innerHTML = `${check12}`;
		} else {
			check11 = document.querySelector("input[name='mdata']").value;
			check12 = document.getElementById("yesterday").checked;

			if (check12 == true) {
				check11 = '昨日'
			};

			textmessage.innerHTML = `${check11}`;
		};
		talk.appendChild(textmessage)

		delmes = 'システムメッセ：' + textmessage.innerHTML

	} else if (check3type == 0) {
		return
	} else {
		//既読時間つくやつ
		check2sender = document.querySelector("select[name='sender']").value;

		senderName = document.getElementById(`sender_${check2sender}`).value;
		myName = document.querySelector('input[id="green"]').checked;

		if (senderName == '') {
			if (check2sender == 0){
				senderName = '黄緑の方'
			} else {
				senderName = `${check2sender}人目の話相手`
			};
		};

		var txtContents = document.createElement('div');
		var txtP = document.createElement('p')
		var sankaku = document.createElement('div')
		var icon = document.createElement('div')

		if (check2sender == 0){
			talk.className = 'rComment';
			which = 'right'
			border = 'left'

			fontcolor = design.elements['myfontcolor'].value
			mesbackcolor = design.elements['mycolor'].value
		} else {
			talk.className = 'cComment';
			which = 'left'
			border = 'right'

			fontcolor = design.elements['fontcolor'].value
			mesbackcolor = design.elements['mescolor'].value
		};


		if (which == 'left') {
			talk.appendChild(icon)
			imageCreateThis(icon, `input[id='icon_${check2sender}']`, 'none')
		};

		textmessage.className = `${which}Chatting`
		txtContents.className = `${which}Says`
		txtP.className = `${which}font`
		sankaku.className = `${which}3kaku`
		icon.className = `${which}Faceicon`

		check3type = document.querySelector("select[name='type']").value;

		delmes = '送信者：' + senderName + '　メッセ内容：'

		senderNameopenthis = document.getElementById('senderNameopen').checked;

		if (senderNameopenthis && senderName != '黄緑の方'){
			senderNameContent = document.createElement('div')

			senderNameContent.className = 'sendername'
			senderNameContent.innerHTML = '<div class="kidoku">' + senderName + '</div>'

			textmessage.appendChild(senderNameContent)
		};

		if (check3type == 5){
			//イラスト

			imageCreateThis(txtContents, "input[id='mesImage']", which)

			delmes += '＜画像＞'

		} else {

			ttt = document.querySelector("textarea[name='message']").value;
			console.log(ttt);

			var newtext = ttt.split('\n');
			ttt = newtext.join('¶');

			console.log(ttt);

			tttlist = ttt.split('');

			resultList = []
			resultMes = []
			checkIT = 1

			for (let i in tttlist){

				if (tttlist[i] == '¶'){
					resultMes.push(resultList)
					resultList = []
					continue
				};

				resultList.push(tttlist[i])

				if (resultList.length > 18){
					resultMes.push(resultList)

					resultList = []

					if (tttlist[i].match(tttTOP) || tttlist.length > Number(i) + 1 && (tttlist[Number(i) + 1].match(tttBOTTOM) || (tttlist[i].match(tttKIGO) && tttlist[Number(i) + 1].match(tttKIGO)))){
						resultList.unshift(resultMes[resultMes.length - 1].pop())

						resultMes[resultMes.length - 1]

						while(resultMes.slice(-1)[0].slice(-1)[0].match(tttTOP) || resultList[0].match(tttBOTTOM) || resultMes.slice(-1)[0].slice(-1)[0].match(tttKIGO) && resultList[0].match(tttKIGO)){
							resultList.unshift(resultMes[resultMes.length - 1].pop())
						};
					};
				};
			};

			if (resultList.length > 0){
				resultMes.push(resultList)
			};

			resultList = ''

			for (let i in resultMes){
				resultList += resultMes[i].join('')

				if (resultMes.length > i){
					resultList += '¶'
				};
			};

			ttt = resultList.replace(/¶/g, '<br>')

			txtP.innerHTML = ttt

			txtContents.style = `background-color: ${mesbackcolor};`
			sankaku.style = `border-${border}-color: ${mesbackcolor};`
			txtP.style = `color: ${fontcolor}; border-color: ${mesbackcolor};`

			if (fontcolor == '#FFFFFF'){
				imgurl = 'image/callphone.png'
			} else {
				imgurl = 'image/callphoneB.png'
			};

			if (check3type == 2 || check3type == 3){
				txtP.innerHTML = `<div class="telln"><img src="${imgurl}"></div>`;

				if (check3type == 3){
					telltime = document.querySelector("input[name='tuwatime'").value;
					timeThis = telltime.split(':')

					if (timeThis[0] == '00'){
						telltime = timeThis[1] + ':' + timeThis[2]
					};
					delmes += '＜通話履歴＞' + telltime
				} else if (check2sender == 0) {
					delmes += '＜応答なし＞'
					telltime = '応答なし'
				} else {
					delmes += '＜不在着信＞'
					telltime = '不在着信'
				};

				txtP.innerHTML += '<div style="text-align: center;">' + telltime + '</div>';
			} else {
				delmes += '「' + txtP.innerHTML + '」'
			};

			txtContents.appendChild(sankaku)
			txtContents.appendChild(txtP)
		};

		check4time = document.getElementById("timehyouji").checked;
		check5kidoku = document.getElementById("kidoku").checked;

		check51 = ''

		if (check5kidoku == true && check2sender == 0){
			check51 = '既読'
			if (checkmemberCount > 1){
				kidokuCount = document.querySelector("select[name='kidokuCount']").value;
				if (kidokuCount > 0){
					check51 += ` ${kidokuCount}`
				};
			};
		};

		if (check4time == true){
			check41 = document.querySelector("input[name='time']").value;
			check51 += `<br>${check41}`
		};

		kidokuTime = document.createElement('div')
		kidokuTime.className = 'kidoku'
		kidokuTime.style = `color: ${kidokuColor};`
		kidokuTime.innerHTML = check51

		if (which == 'right'){
			textmessage.appendChild(kidokuTime);
		};

		textmessage.appendChild(txtContents)

		if (which == 'left'){
			textmessage.appendChild(kidokuTime);
		};

		talk.appendChild(textmessage);

		if (which == 'right' && myName == true) {
			talk.appendChild(icon)
			imageCreateThis(icon, `input[id='icon_${check2sender}']`)
		};
	};

	adm += 1
	talk.id = `talk_${adm}`;

	talkdisplay = document.getElementById('talkadd');

	add = document.querySelector("select[name='mespos']");

	if (add.value == 'new'){
		talkdisplay.appendChild(talk);
	} else {
		beforeContents = document.getElementById(add.value)
		talkdisplay.insertBefore(talk, beforeContents)
	}

	del = document.querySelector("select[name='meslist']");

	childthis = document.createElement('option');

	childthis.value = talk.id
	childthis.innerHTML = delmes + 'の前に挿入'

	if (add.value == 'new'){
		beforeContents = document.querySelector("option[value='new']");
	} else {
		beforeContents = document.querySelector(`option[value='${add.value}']`);
	};

	add.insertBefore(childthis, beforeContents)

	childthat = document.createElement('option');

	childthat.value = talk.id + 'd'
	childthat.innerHTML = delmes

	if (add.value == 'new'){
		del.appendChild(childthat)
	} else {
		beforeContents = document.querySelector(`option[value='${add.value}d']`);
		del.insertBefore(childthat, beforeContents)
	};

	button = document.getElementById('create');
	button.style = 'display: inline-block;'

	createImage = document.getElementById('createImage')
	createImage.style = 'display: none;'
};

function createThis() {
	zoom = document.getElementById('zoom')

	zoom.remove()

	preview = document.getElementById('previeW')

	zoom = preview.cloneNode(true)
	zoom.id = 'zoom'

	zoomlist = zoom.querySelectorAll('div')

	talkdisplay = document.getElementById('talkadd');

	height = (talkdisplay.clientHeight * 2) + (16 * 12)

	for (var i in zoomlist){

		if (zoomlist[i].id == 'backPreviewC'){
			zoomlist[i].id = 'bpc'
			zoomlist[i].style.height =  `${height}px;`
		} else if (zoomlist[i].id == 'backcolor'){
			zoomlist[i].id = 'bc'
			zoomlist[i].style.height = `${height}px`;
		} else if (zoomlist[i].id == 'lineContents'){
			zoomlist[i].id = 'lc'
		} else if (zoomlist[i].id == 'mesName'){
			zoomlist[i].id = 'mne'
		} else if (zoomlist[i].id == 'membersNum'){
			zoomlist[i].id = 'mbn'
		} else if (zoomlist[i].id == 'messageSendC'){
			zoomlist[i].id = 'mssc'
		} else if (zoomlist[i].id == 'notsendmessage'){
			zoomlist[i].id = 'nsm'
		} else if (zoomlist[i].id == 'talkContents'){
			zoomlist[i].id = 'tcn'
		} else {
			zoomlist[i].id = `zoom${i}`
		};
	};
	zoom.style = `height: ${height}px;`

	parent = document.getElementById('zooming')
	parent.appendChild(zoom)


	bpc = document.getElementById('bpc')

	if (bpc.firstChild != null && bpc.firstChild.className == 'backPreview'){

		str = bpc.firstChild

		imgheight = str.height;
		count = Math.ceil(height / imgheight)

		img = '<img src="' + str.src + '" class="backPreview">'

		str = img

		for (var i = 0; i < count; i++){
			str += img
		};

		bpc.innerHTML = str
	};

	download = document.getElementById('download')
	download.style = 'display: none;';

	createImage = document.getElementById('createImage')
	createImage.style = 'display: block;';
};