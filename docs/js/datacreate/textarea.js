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

	that = obj

	if (obj.length > 14) {
		sentence = obj.match(/.{13}/g);
		that = sentence[0] + ' …'
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

function mespos(obj){
	changeSender(obj);
	change = document.querySelector("button[name='addmessage']");
	change.style = "display: block;";
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

function bImageclick(obj){
	change = document.querySelector("div[id='backimage']");
	preccc = document.querySelector("div[id='backPreviewC']");
	precc = document.querySelector("div[id='backcolor']");
	precccc = document.getElementById('lineContents');
	preccccc = document.getElementById('messageSendC');
	preccB = document.querySelectorAll("div[class='contentsBlack']");
	preccG = document.querySelectorAll("div[class='contentsGray']");
	preccW = document.querySelectorAll("div[class='contentsWhite']");
	notsend = document.getElementById('notsendmessage');

	contents = document.querySelectorAll("div[class='chuou']");
	kidoku = document.querySelectorAll("div[class='kidoku']");

	if (obj.value == "bimage"){
		change.style = 'display: block;';
		preccc.style = 'display: block;';
		precc.style = 'display: none;';
	} else {
		change.style = 'display: none;';
		preccc.style = 'display: none;';
		precc.style = `display: block; background-color: ${obj.value};`;
	};

	if (obj.value == "#A0B5D9"){
		precccc.style = 'background-color: transparent; color: #000000;';
		preccccc.style = 'background-color: #FFFFFF; color: #000000;';
		notsend.style = 'background-color: #EDEFF3;';
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
	} else if (obj.value == "#1A1A1A"){
		precccc.style = 'background-color: transparent; color: #ffffff;';
		preccccc.style = 'background-color: #111111; color: #ffffff;';
		notsend.style = 'background-color: #1F1F1F;';
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
		precccc.style = 'background-color: #F8F8F8; color: #000000;';
		preccccc.style = 'background-color: #FFFFFF; color: #1A1A1A;';
		notsend.style = 'background-color: #F7F7F7;';

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

function teeMa(obj){
	mesL = document.querySelectorAll("div[class='leftSays']");
	mesL3 = document.querySelectorAll("div[class='left3kaku']");
	fL = document.querySelectorAll("p[class='leftfont']");

	mesR = document.querySelectorAll("div[class='rightSays']");
	mesR3 = document.querySelectorAll("div[class='right3kaku']");
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

	document.querySelector("div[id='backimage']").style = 'display: none;';
	document.querySelector("div[id='backPreviewC']").style = 'display: none;';
	document.querySelector("div[id='backcolor']").style = `display: block; background-color: ${backgroundcolor};`;

	if (fontcolor == '#000000'){
		imgurl = 'image/callphoneB.png'
	} else {
		imgurl = 'image/callphone.png'
	};

	for (var xx in mesL) {
		mesL[xx].style = `background-color: ${mescolor};`;
		mesL3[xx].style = `border-color: transparent; border-right-color: ${mescolor};`;
	};

	for (var xx in fL){
		fL[xx].style = `color: ${fontcolor}; border-color: ${mescolor};`;
		if (fL[xx].firstChild != null){
			fL[xx].firstChild.innerHTML = `<img src="${imgurl}" style="width: 100%;">`
		};
	};

	for (var xxx in mesR) {
		mesR[xxx].style = `background-color: ${mycolor}`;
		mesR3[xxx].style = `border-color: transparent; border-left-color: ${mycolor}`;
	};

	for (var xxx in fR) {
		fR[xxx].style = `color: ${myfontcolor}; border-color: ${mycolor};`;
		if (fR[xxx].firstChild != null){
			fR[xxx].firstChild.innerHTML = `<img src="image/callphoneB.png" style="width: 100%;">`
		};
	};

	precccc = document.getElementById('lineContents');
	preccccc = document.getElementById('messageSendC');
	preccB = document.querySelectorAll("div[class='contentsBlack']");
	preccG = document.querySelectorAll("div[class='contentsGray']");
	preccW = document.querySelectorAll("div[class='contentsWhite']");
	notsend = document.getElementById('notsendmessage');

	contents = document.querySelectorAll("div[class='chuou']");
	kidoku = document.querySelectorAll("div[class='kidoku']");


	if (backgroundcolor == "#A0B5D9"){
		precccc.style = 'background-color: transparent; color: #000000;';
		preccccc.style = 'background-color: #FFFFFF; color: #000000;';
		notsend.style = 'background-color: #EDEFF3;';
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
	} else if (backgroundcolor == "#1A1A1A"){
		precccc.style = 'background-color: transparent; color: #ffffff;';
		preccccc.style = 'background-color: #111111; color: #ffffff;';
		notsend.style = 'background-color: #1F1F1F;';
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
		precccc.style = 'background-color: #F8F8F8; color: #000000;';
		preccccc.style = 'background-color: #FFFFFF; color: #1A1A1A;';
		notsend.style = 'background-color: #F7F7F7;';
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

function color(obj){
	fL = document.querySelectorAll("p[class='leftfont']");

	var design = document.getElementById('design');

	mfcolor = design.myfontcolor.value;

	if (obj.value == '#000000'){
		imgurl = 'image/callphoneB.png'
	} else {
		imgurl = 'image/callphone.png'
	};

	mesbackcolor = design.mescolor.value;

	for (var xx in fL) {
		fL[xx].style = `color: ${obj.value}; border-color: ${mesbackcolor};`;

		if (fL[xx].firstChild != null){
			fL[xx].firstChild.innerHTML = `<img src="${imgurl}" style="width: 100%;">`
		};
	};

	if (mfcolor == "ifcolor"){
		fR = document.querySelectorAll("p[class='rightfont']");
		mycolor = design.mycolor.value;

		if (mycolor == 'imescolor'){
			mycolor = design.mescolor.value;
		};

		for (var xxx in fR) {
			fR[xxx].style = `color: ${obj.value}; border-color: ${mycolor};`;
			if (fR[xxx].firstChild != null){
				fR[xxx].firstChild.innerHTML = `<img src="${imgurl}" style="width: 100%;">`
			};
		};
	};
};

function icolor(obj){
	var design = document.getElementById("design");
	mfcolor = obj.value;
	mesbackcolor = design.elements['mycolor'].value

	if (mfcolor == "ifcolor"){
		mfcolor = design.fontcolor.value;
	};

	if (mfcolor == '#000000'){
		imgurl = 'image/callphoneB.png'
	} else {
		imgurl = 'image/callphone.png'
	};

	if (mesbackcolor == "imescolor"){
		mesbackcolor = design.elements['mescolor'].value
	};

	fR = document.querySelectorAll("p[class='rightfont']");
	for (var xxx in fR) {
		fR[xxx].style = `color: ${mfcolor}; border-color: ${mesbackcolor};`;
		if (fR[xxx].firstChild != null){
			fR[xxx].firstChild.innerHTML = `<img src="${imgurl}" style="width: 100%;">`
		};
	};
};

function mcolor(obj){
	var design = document.getElementById("design");

	mmcolor = design.mycolor.value;

	mesLF = design.fontcolor.value;

	if (mmcolor == "imescolor"){
		mesR = document.querySelectorAll("div[class='rightSays']");
		mesR3 = document.querySelectorAll("div[class='right3kaku']");
		mesRp = document.querySelectorAll("p[class='rightfont']");
		mesRF = design.myfontcolor.value;

		if (mesRF == "ifcolor"){
			mesRF = mesLF
		};

		for (var xxx in mesR) {
			mesR[xxx].style = `background-color: ${obj.value};`;
			mesR3[xxx].style = `border-color: transparent; border-left-color: ${obj.value};`;
		};
		for (var xxx in mesRp) {
			mesRp[xxx].style = `color: ${mesRF}; border-color: ${obj.value};`
		};
	};

	mesL = document.querySelectorAll("div[class='leftSays']");
	mesL3 = document.querySelectorAll("div[class='left3kaku']");
	mesLp = document.querySelectorAll("p[class='leftfont']");

	for (var xx in mesL) {
		mesL[xx].style = `background-color: ${obj.value};`;
		mesL3[xx].style = `border-color: transparent; border-right-color: ${obj.value};`;
	};
	for (var xx in mesLp){
		mesLp[xx].style = `color: ${mesLF}; border-color: ${obj.value};`
	}
};

function ocolor(obj){
	var design = document.getElementById("design");
	mmcolor = obj.value;

	mFcolor = design.myfontcolor.value

	if (mmcolor == "imescolor"){
		mmcolor = design.mescolor.value;
	};

	if (mFcolor == "ifcolor"){
		mFcolor = design.fontcolor.value;
	};

	mesR = document.querySelectorAll("div[class='rightSays']");
	mesR3 = document.querySelectorAll("div[class='right3kaku']");
	mesRp = document.querySelectorAll("p[class='rightfont']");

	for (var xxx in mesR) {
		mesR[xxx].style = `background-color: ${mmcolor};`;
		mesR3[xxx].style = `border-color: transparent; border-left-color: ${mmcolor};`;
	};
	for (var xxx in mesRp) {
		mesRp[xxx].style = `color: ${mFcolor}; border-color: ${mmcolor};`
	};
};

function delmesm(obj){
	change = document.querySelector("div[id='mesdel']");
	if ((obj.checked == true && obj.id == 'delmm') || (obj.checked == false && obj.id == 'delmmall')) {
		change.style = 'display: block;';
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

		talkadd.innerHTML = '';
		dellist.innerHTML = '<option value="0" hidden="">どのメッセ？</option>';
		addlist.innerHTML= '<option value="0" hidden>どこに入れる？</option><option value="new">一番下（新）</option>';
		addlist.style = 'color: #666666;'
	};

	dellist.value = 0
	dellist.style = 'color: #666666;'
}