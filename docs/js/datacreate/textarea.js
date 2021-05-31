function changeSender(obj){
	obj.style.color = '#000000';
};

function mespos(obj){
	obj.style.color = '#000000';
	change = document.querySelector("button[name='addmessage']");
	change.style = "display: block;";
};

function changeItem(obj){
	obj.style.color = '#000000';
	change = document.querySelector("textarea[name='message']");
	imageopen = document.querySelector('input[name="image"]');
	tuwaopen = document.querySelector('div[id="tuwatimeopen"]');
	if (obj.value == 1){
		change.disabled = false;
		imageopen.style = "display: none;";
		tuwaopen.style = "display: none;";
	} else if (obj.value == 3){
		change.value = '';
		change.disabled = true;
		imageopen.style = "display: none;";
		tuwaopen.style = "display: block;";
	} else if (obj.value == 5){
		change.value = '';
		change.disabled = true;
		imageopen.style = "display: block;";
		tuwaopen.style = "display: none;";
	} else {
		change.value = '';
		change.disabled = true;
		imageopen.style = "display: none;";
		tuwaopen.style = "display: none;";
	}
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
	} else if (obj.value == "#1A1A1A"){
		precccc.style = 'background-color: transparent; color: #ffffff;';
		preccccc.style = 'background-color: #111111; color: #ffffff;';
		notsend.style = 'background-color: #1F1F1F;';
		for(var iiiii in preccB){
			preccB[iiiii].style = 'display: none;';
			preccG[iiiii].style = 'display: none;';
			preccW[iiiii].style = 'display: inline;';
		};
	} else {
		precccc.style = 'background-color: #F8F8F8; color: #000000;';
		preccccc.style = 'background-color: #FFFFFF; color: #1A1A1A;';
		notsend.style = 'background-color: #F7F7F7;';
		for(var iiiii in preccB){
			preccB[iiiii].style = 'display: none;';
			preccG[iiiii].style = 'display: inline;';
			preccW[iiiii].style = 'display: none;';
		};
	};
};

function checkGreen(obj){
	change = document.querySelector("div[id='checkG']");
	iconchange = document.querySelectorAll("div[class='rightFaceicon']");
	if (obj.checked == true) {
		change.style = 'display: block;';
		for (var ic in iconchange) {
			iconchange[ic].style = 'display: inline-block;';
		};
	} else {
		change.style = 'display: none;';
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

	mesR = document.querySelectorAll("div[class='rightSay']");
	mesR3 = document.querySelectorAll("div[class='right3kaku']");
	fR = document.querySelectorAll("p[class='rightfont']");

	if (obj.id == 'defultT') {
		document.getElementById('f000000').checked = true;
		document.getElementById('mFFFFFF').checked = true;
		document.getElementById('i9DE693').checked = true;
		document.getElementById('bA0B5D9').checked = true;
		document.getElementById('if000000').checked = true;
	};
	if (obj.id == 'whiteT'){
		document.getElementById('f000000').checked = true;
		document.getElementById('mFFFFFF').checked = true;
		document.getElementById('iD5E0F4').checked = true;
		document.getElementById('bEDEFF3').checked = true;
		document.getElementById('if000000').checked = true;
	};
	if (obj.id == 'blackT'){
		document.getElementById('fFFFFFF').checked = true;
		document.getElementById('m2A2A2A').checked = true;
		document.getElementById('i9DE693').checked = true;
		document.getElementById('b1A1A1A').checked = true;
		document.getElementById('if000000').checked = true;
	};

	var design = document.getElementById("design");

	fontcolor = design.fontcolor.value;
	myfontcolor = design.myfontcolor.value;
	mescolor = design.mescolor.value;
	mycolor = design.mycolor.value;
	backgroundcolor = design.backgroundcolor.value;

	document.querySelector("div[id='backimage']").style = 'display: none;';
	document.querySelector("div[id='backPreviewC']").style = 'display: none;';
	document.querySelector("div[id='backcolor']").style = `display: block; background-color: ${backgroundcolor};`;

	for (var xx in mesL) {
		mesL[xx].style = `background-color: ${mescolor};`;
		mesL3[xx].style = `border-color: transparent; border-right-color: ${mescolor};`;
		fL[xx].style = `color: ${fontcolor}`;
	};

	for (var xxx in mesR) {
		mesR[xxx].style = `background-color: ${mycolor}`;
		mesR3[xxx].style = `border-color: transparent; border-left-color: ${mycolor}`;
		fR[xxx].style = `color: ${myfontcolor}`;
	};

	precccc = document.getElementById('lineContents');
	preccccc = document.getElementById('messageSendC');
	preccB = document.querySelectorAll("div[class='contentsBlack']");
	preccG = document.querySelectorAll("div[class='contentsGray']");
	preccW = document.querySelectorAll("div[class='contentsWhite']");
	notsend = document.getElementById('notsendmessage');

	if (backgroundcolor == "#A0B5D9"){
		precccc.style = 'background-color: transparent; color: #000000;';
		preccccc.style = 'background-color: #FFFFFF; color: #000000;';
		notsend.style = 'background-color: #EDEFF3;';
		for(var iiiii in preccB){
			preccB[iiiii].style = 'display: inline;';
			preccG[iiiii].style = 'display: none;';
			preccW[iiiii].style = 'display: none;';
		};
	} else if (backgroundcolor == "#1A1A1A"){
		precccc.style = 'background-color: transparent; color: #ffffff;';
		preccccc.style = 'background-color: #111111; color: #ffffff;';
		notsend.style = 'background-color: #1F1F1F;';
		for(var iiiii in preccB){
			preccB[iiiii].style = 'display: none;';
			preccG[iiiii].style = 'display: none;';
			preccW[iiiii].style = 'display: inline;';
		};
	} else {
		precccc.style = 'background-color: #F8F8F8; color: #000000;';
		preccccc.style = 'background-color: #FFFFFF; color: #1A1A1A;';
		notsend.style = 'background-color: #F7F7F7;';
		for(var iiiii in preccB){
			preccB[iiiii].style = 'display: none;';
			preccG[iiiii].style = 'display: inline;';
			preccW[iiiii].style = 'display: none;';
		};
	};
};

function color(obj){
	fL = document.querySelectorAll("p[class='leftfont']");
	mfcolor = design.myfontcolor.value;

	if (mfcolor == "ifcolor"){
		fR = document.querySelectorAll("p[class='rightfont']");

		for (var xxx in fR) {
			fR[xxx].style = `color: ${obj.value};`;
		};
	};
	for (var xx in fL) {
		fL[xx].style = `color: ${obj.value}`;
	};
};

function icolor(obj){
	var design = document.getElementById("design");
	mfcolor = obj.value;
	if (mfcolor == "ifcolor"){
		mfcolor = design.fontcolor.value;
	};

	fR = document.querySelectorAll("p[class='rightfont']");
	for (var xxx in fR) {
		fR[xxx].style = `color: ${mfcolor}`;
	};
};

function mcolor(obj){
	var design = document.getElementById("design");

	mmcolor = design.mycolor.value;

	if (mmcolor == "imescolor"){
		mesR = document.querySelectorAll("div[class='rightSay']");
		mesR3 = document.querySelectorAll("div[class='right3kaku']");

		for (var xxx in mesR) {
			mesR[xxx].style = `background-color: ${obj.value};`;
			mesR3[xxx].style = `border-color: transparent; border-left-color: ${obj.value};`;
		};
	};

	mesL = document.querySelectorAll("div[class='leftSays']");
	mesL3 = document.querySelectorAll("div[class='left3kaku']");

	for (var xx in mesL) {
		mesL[xx].style = `background-color: ${obj.value};`;
		mesL3[xx].style = `border-color: transparent; border-right-color: ${obj.value};`;
	};
};

function ocolor(obj){
	var design = document.getElementById("design");
	mmcolor = obj.value;

	if (mmcolor == "imescolor"){
		mmcolor = design.mescolor.value;
	};

	mesR = document.querySelectorAll("div[class='rightSay']");
	mesR3 = document.querySelectorAll("div[class='right3kaku']");
	for (var xxx in mesR) {
		mesR[xxx].style = `background-color: ${mmcolor};`;
		mesR3[xxx].style = `border-color: transparent; border-left-color: ${mmcolor};`;
	};
};

function delmesm(obj){
	change = document.querySelector("div[id='mesdel']");
	if (obj.checked == true) {
		change.style = 'display: block;';
	} else {
		change.style = 'display: none;';
	};
}