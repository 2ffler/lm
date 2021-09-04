let thisSEt = {
	"defultT" : {
		"Color": "f000000",
		"mBack": "mFFFFFF",
		"iColor": "i9DE693",
		"iBack": "bA0B5D9",
		"Back": "if000000"
	},
	"whiteT" : {
		"Color": "f000000",
		"mBack": "mFFFFFF",
		"iColor": "iD5E0F4",
		"iBack": "bEDEFF3",
		"Back": "if000000"
	},
	"blackT" : {
		"Color": "fFFFFFF",
		"mBack": "m2A2A2A",
		"iColor": "i9DE693",
		"iBack": "b1A1A1A",
		"Back": "if000000"
	}
}

function kidoku(obj){
	v = document.getElementById('delb').value
	kid = document.querySelector('select[name="kidokuCount"]');

	if(obj.checked == false || v < 2){
		kid.style = 'display: none;'
	} else {
		kid.style = 'display: block;'
	};
};

function nameCreate(){
	obj =  document.querySelector('input[name="talkname"]').value;
	var sankou = document.getElementById('delb').value;


	that = obj

	if (obj.length > 14) {
		sentence = obj.match(/.{13}/g);
		that = sentence[0] + ' …'
	};

	if (sankou > 1) {
		n = Number(sankou) + 1
		that += ` (${n})`
	};

	mesName = document.getElementById('mesName');
	mesName.innerHTML = that;
};

function changeSender(obj){
	obj.style.color = '#000000';
};

function changeName(obj){
	changeSender(obj);
	senderName = document.getElementById('senderNameopen')
	myName = document.querySelector('input[id="green"]').checked
	kidoku = document.getElementById('kidoku')

	kidokucount = document.querySelector('select[name="kidokuCount"]');

	kidokucount.style = 'display: none;'
	kidoku.disabled = false
	kidoku.checked = true
	senderName.disabled = false
	senderName.checked = true

	if (obj.value == 0){
		
		v = document.getElementById('delb').value

		if (v > 1){
			kidokucount.style = 'display: block;'
		}

		if (myName == false){
			senderName.checked = false
			senderName.disabled = true
		};
	} else {
		kidoku.checked = false
		kidoku.disabled = true
	}
};

function changeItem(obj){
	changeSender(obj);
	change = document.querySelector("textarea[name='message']");
	imageopen = document.querySelector('input[name="image"]');
	tuwaopen = document.querySelector('div[id="tuwatimeopen"]');
	kidokukanren = document.querySelector('div[id="kidokukanren"]');

	change.disabled = true;
	change.value = '';
	imageopen.style = "display: none;";
	tuwaopen.style = "display: none;";
	kidokukanren.style = "display: block;";

	if (obj.value == 1){
		change.disabled = false;
	} else if (obj.value == 3){
		tuwaopen.style = "display: block;";
	} else if (obj.value == 4){
		kidokukanren.style = "display: none;";
	} else if (obj.value == 5){
		imageopen.style = "display: block;";
	};
};

function bImage(obj){

	change = document.querySelector("div[id='backimage']");
	preccc = document.querySelector("div[id='backPreviewC']");
	precc = document.querySelector("div[id='backcolor']");

	if (obj.checked == true){
		change.style = 'display: block;'
		preccc.style = 'display: block;'

		precc.style.display = 'none'
	} else {
		change.style = 'display: none;'
		preccc.style = 'display: none;'
		precc.style.display = 'block'
	};
};

function bImageclick(obj){
	bgColor(obj.value)
};

function bgColor(obj){
	precc = document.querySelector("div[id='backcolor']");
	precccc = document.getElementById('lineContents');
	preccccc = document.getElementById('messageSendC');
	preccB = document.querySelectorAll("div[class='contentsBlack']");
	preccG = document.querySelectorAll("div[class='contentsGray']");
	preccW = document.querySelectorAll("div[class='contentsWhite']");
	notsend = document.getElementById('notsendmessage');

	contents = document.querySelectorAll("div[class='chuou']");
	kidoku = document.querySelectorAll("div[class='kidoku']");

	precc.style.backgroundColor = obj;

	if (obj == "#A0B5D9"){
		precccc.style.backgroundColor = 'transparent';
		precccc.style.color = '#000000';
		preccccc.style.backgroundColor = '#FFFFFF';
		preccccc.style.color = '#000000';

		notsend.style.backgroundColor = '#EDEFF3';

		for(var iiiii in preccB){
			preccB[iiiii].style = 'display: inline;';
			preccG[iiiii].style = 'display: none;';
			preccW[iiiii].style = 'display: none;';
		};
		for(var iiiii in contents){
			contents[iiiii].style = 'color: #000000;';
		}
		for(var iiiii in kidoku){
			kidoku[iiiii].style = 'color: #000000;';
		}
	} else if (obj == "#1A1A1A"){
		precccc.style.backgroundColor = 'transparent';
		precccc.style.color = '#FFFFFF';
		preccccc.style.backgroundColor = '#111111';
		preccccc.style.color = '#ffffff';

		notsend.style.backgroundColor = '#1F1F1F';

		for(var iiiii in preccB){
			preccB[iiiii].style = 'display: none;';
			preccG[iiiii].style = 'display: none;';
			preccW[iiiii].style = 'display: inline;';
		};
		for(var iiiii in contents){
			contents[iiiii].style = 'color: #FFFFFF;';
		}
		for(var iiiii in kidoku){
			kidoku[iiiii].style = 'color: #FFFFFF;';
		}
	} else {
		precccc.style.backgroundColor = '#F8F8F8';
		precccc.style.color = '#000000'
		preccccc.style.backgroundColor = '#FFFFFF';
		preccccc.style.color = '#1A1A1A';

		notsend.style.backgroundColor = '#F7F7F7';

		for(var iiiii in preccB){
			preccB[iiiii].style = 'display: none;';
			preccG[iiiii].style = 'display: inline;';
			preccW[iiiii].style = 'display: none;';
		};
		for(var iiiii in contents){
			contents[iiiii].style = 'color: #000000;';
		}
		for(var iiiii in kidoku){
			kidoku[iiiii].style = 'color: #000000;';
		}
	};
};

function checkGreen(obj){
	change = document.querySelector("div[id='checkG']");
	iconchange = document.querySelectorAll("div[class='rightFaceicon']");
	senderName = document.getElementById('senderNameopen');

	if (obj.checked == true) {
		change.style = 'display: block;';
		senderName.disabled = false
		senderName.checked = true
		for (var ic in iconchange) {
			iconchange[ic].style = 'display: inline-block;';
		};
	} else {
		change.style = 'display: none;';
		senderName.checked = false
		senderName.disabled = true
		for (var ic in iconchange) {
			iconchange[ic].style = 'display: none;';
		};
	};
};

function checkD(obj){
	changeT = document.querySelector("div[id='checkDT']");
	changeF = document.querySelector("div[id='checkDF']");
	if (obj.checked == true) {
		changeT.style = 'display: block;';
		changeF.style = 'display: none;';
	} else {
		changeT.style = 'display: none;';
		changeF.style = 'display: block;';
	};
};

function changeData(obj){
	open = document.querySelector('div[id="mmdata"]');
	if (obj.value == 0){
		open.style = "display: block;";
	} else {
		open.style = "display: none;";
	};
};

function fontColorThis(font, color){

	if (color == '#000000'){
		imgurl = 'image/callphoneB.png'
	} else {
		imgurl = 'image/callphone.png'
	};

	for (var xxx in font) {

		if (font[xxx].tagName == 'P'){
			font[xxx].style.color = color;
		};

		if (font[xxx].firstChild != null){
			font[xxx].firstChild.innerHTML = `<img src="${imgurl}" style="width: 100%;">`
		};
	};
};

function mesBack(color, which){
	if (which == 'left'){
		m = document.querySelectorAll("div[class='rightSays']");
		m3 = document.querySelectorAll("div[class='right3kaku']");
		p = document.querySelectorAll("p[class='rightfont']");
	} else {
		m = document.querySelectorAll("div[class='leftSays']");
		m3 = document.querySelectorAll("div[class='left3kaku']");
		p = document.querySelectorAll("p[class='leftfont']");
	};

	for (var xxx in m) {
		if (m[xxx].tagName == 'DIV'){
			m[xxx].style.backgroundColor = color;
		};

		if (m3[xxx].tagName == 'DIV'){
			if (which == 'left'){
				m3[xxx].style.borderLeftColor = color;
			} else {
				m3[xxx].style.borderRightColor = color;
			};
		};
	};
	for (var xxx in p) {
		if (p[xxx].tagName == 'P'){
			p[xxx].style.borderColor = color;
		};
	};
};

function teeMa(obj){
	fL = document.querySelectorAll("p[class='leftfont']");
	fR = document.querySelectorAll("p[class='rightfont']");

	var it = thisSEt['defultT']

	if (obj.id == 'whiteT'){
		var it = thisSEt['whiteT']
	};
	if (obj.id == 'blackT'){
		var it = thisSEt['blackT']
	};

	document.getElementById(it['Color']).checked = true;
	document.getElementById(it['mBack']).checked = true;
	document.getElementById(it['iColor']).checked = true;
	document.getElementById(it['iBack']).checked = true;
	document.getElementById(it['Back']).checked = true;

	var design = document.getElementById("design");

	fontcolor = design.fontcolor.value;
	myfontcolor = design.myfontcolor.value;
	mescolor = design.mescolor.value;
	mycolor = design.mycolor.value;
	backgroundcolor = design.backgroundcolor.value;

	fontColorThis(fL, fontcolor)
	fontColorThis(fR, myfontcolor)

	mesBack(mescolor, 'right')
	mesBack(mycolor, 'left')

	bgColor(backgroundcolor)
};

function color(obj){
	fL = document.querySelectorAll("p[class='leftfont']");

	var design = document.getElementById('design');

	mfcolor = design.myfontcolor.value;

	fontColorThis(fL, obj.value)

	if (mfcolor == "ifcolor"){
		fR = document.querySelectorAll("p[class='rightfont']");
		mycolor = design.mycolor.value;

		fontColorThis(fR, obj.value)
	};
};

function icolor(obj){
	var design = document.getElementById("design");
	mfcolor = obj.value;
	mesbackcolor = design.mycolor.value

	if (mfcolor == "ifcolor"){
		mfcolor = design.fontcolor.value;
	};

	fR = document.querySelectorAll("p[class='rightfont']");

	fontColorThis(fR, mfcolor)
};

function mcolor(obj){
	var design = document.getElementById("design");

	mmcolor = design.mycolor.value;

	mesLF = design.fontcolor.value;

	if (mmcolor == "imescolor"){
		mesBack(obj.value, 'left')
	};

	mesBack(obj.value, 'right')
};

function ocolor(obj){
	var design = document.getElementById("design");
	mmcolor = obj.value;

	if (mmcolor == "imescolor"){
		mmcolor = design.mescolor.value;
	};

	mesBack(obj.value, 'left')
};

function delmesm(obj){
	change = document.querySelector("div[id='mesdel']");
	mesCount = document.querySelector("select[name='meslist']");

	if (obj.checked == true && obj.id == 'delmm') {
		change.style = 'display: block;';
	} else if (obj.checked == false && obj.id == 'delmmall') {
		change.style = 'display: block;';
		mesCount.style = 'display: inline-block;'
	} else if (obj.id == 'delmmall') {
		mesCount.style = 'display: none;'
	} else {
		change.style = 'display: none;';
	};
}

function delmessage(){
	check = document.getElementById("delmmall").checked
	dellist = document.querySelector("select[name='meslist']");

	selecting = dellist.value

	if (selecting != 0) {
		id = selecting.replace('d', '')
		that = document.getElementById(id);
		add = document.querySelector(`option[value='${id}']`);
		del = document.querySelector(`option[value='${selecting}']`);

		that.remove();
		add.remove();
		del.remove();
	};

	if (check){
		addlist = document.querySelector("select[name='mespos']");
		mesdel = document.getElementById('mesdel')

		talkadd.innerHTML = '';

		addlist.innerHTML = '';
		dellist.innerHTML = '';

		option = document.createElement("option");
		option.value = "0"
		option.hidden = "true"
		option.innerHTML = "どこに入れる？"

		addlist.appendChild(option)

		option = document.createElement("option");
		option.value = "new"
		option.innerHTML = "一番下（新）"

		addlist.appendChild(option)

		option = document.createElement("option");
		option.value = "0"
		option.hidden = "true"
		option.innerHTML = "どのメッセ？"

		dellist.appendChild(option)

		addlist.style = 'color: #666666;'
		dellist.style = 'color: #666666;'

		mesdel.style = 'display: none;'
	};

	dellist.value = 0
	dellist.style = 'color: #666666;'

	createImage = document.getElementById('createImage')
	createImage.style = 'display: none;'

	zoom = document.getElementById('zoom');
	zoom.style = 'display: none;'

	delmm = document.getElementById("delmm");
	delmm.checked = false
};