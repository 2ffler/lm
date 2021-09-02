var i = 1;

function senderadd() {
	var n = i + 1;

	var h3 = document.createElement('h3');
	h3.id = 'h3_' + n;
	h3.innerHTML = '<i class="num">' + n + '</i>名様';

	var h4sender = document.createElement('h4');
	h4sender.id = 'h4s_' + n;
	h4sender.innerHTML = 'ユザネ';

	var h4icon = document.createElement('h4');
	h4icon.id = 'h4i_' + n;
	h4icon.innerHTML = 'アイコン';

	var sender = document.createElement('input');
	sender.type = 'text';
	sender.id = 'sender_' + n;
	sender.placeholder = 'メンバー名その' + n;

	var icon = document.createElement('input');
	icon.type = 'file';
	icon.accept = 'image/*';
	icon.id = 'icon_' + n;
	icon.addEventListener("change", iconPPP);

	var iconP = document.createElement('div');
	iconP.id = 'iconP_' + n;
	iconP.innerHTML = "※推奨画像比率１：１<br>※正円になるので表示時は端見えない";	

	var iconC = document.createElement('div');
	iconC.id = 'iconC_' + n;

	var delb = document.getElementById('delb');

	delb.style = "display: block;";
	delb.value = n;

	var parent = document.getElementById('mem');

	parent.appendChild(h3);
	parent.appendChild(h4sender);
	parent.appendChild(sender);
	parent.appendChild(h4icon);
	parent.appendChild(icon);
	parent.appendChild(iconP);
	parent.appendChild(iconC);

	i++ ;
};

function senderadd5() {
	var iii = 0;
	while (iii < 5){
		senderadd();
		iii += 1;
	};
};

function deleteBtn(target) {
  	var target_value = target.value;
  	var target_id = target.id;

  	var parent = document.getElementById('mem');
  	var sender_id = document.getElementById('sender_' + target_value);
  	var h4sender_id = document.getElementById('h4s_' + target_value);
  	var h4icon_id = document.getElementById('h4i_' + target_value);
  	var icon_id = document.getElementById('icon_' + target_value);
  	var h3_id = document.getElementById('h3_' + target_value);
  	var iconP_id = document.getElementById('iconP_' + target_value);
  	var iconC_id = document.getElementById('iconC_' + target_value);

	var tgt_id = document.getElementById(target_id);

  	parent.removeChild(h4sender_id);
	parent.removeChild(h4icon_id);
  	parent.removeChild(sender_id);
  	parent.removeChild(icon_id);	
   	parent.removeChild(iconP_id);
   	parent.removeChild(iconC_id);
 	parent.removeChild(h3_id);

  	i-- ;

  	target.value = i;

  	if (i == 1){
  		var kidoku = document.querySelector('select[name="kidokuCount"]');
  		kidoku.style = "display: none;";
  		tgt_id.style = "display: none;";
  	};
};

function selectadd(obj){
	var sankou = document.getElementById('delb').value;
	var parent = document.querySelector('select[name="sender"]');

	myName = document.getElementById('green').checked

	var mesmenu = document.getElementById('mesmenu')

	obj.innerHTML = 'メッセメンバー<br>名前アイコン追加変更'

	mesmenu.style = 'display: block;'

	var my = document.getElementById('green');
	var iii = -1;

	parent.innerHTML = '';

  	var option = document.createElement('option');
  	option.value = 0;
  	option.hidden = true;
  	option.innerHTML = '誰からのメッセ？';

  	parent.appendChild(option);

	var kidoku = document.querySelector('select[name="kidokuCount"]');
	kidoku.innerHTML = '';

  	var option = document.createElement('option');

  	option.value = 0;
  	option.hidden = true;
  	option.innerHTML = '何人が既読した？';

	kidoku.appendChild(option);

	while (iii < sankou){
		iii += 1;
	  	var sName = document.getElementById('sender_' + iii).value;
	  	var option = document.createElement('option');
	  	option.value = iii;

	  	if (iii == 0 && my.checked == false){
	  		option.innerHTML = "黄緑の方※名前アイコン設定ナシ";	  		
	  	} else {
	  		option.innerHTML = sName;
	  	};

	  	parent.appendChild(option);

		if (iii < 2){
			kidoku.style = "display: none;"
			continue
		} else if (iii == 2) {
			kidoku.style = "display: block;"

			var option = document.createElement('option');
			option.value = 1;
			option.innerHTML = "既読人数1人"
			kidoku.appendChild(option);
		};

		var option = document.createElement('option');
		option.value = iii;
		option.innerHTML = `既読人数${iii}人`

		kidoku.appendChild(option);
	};
};

function iconPP(obj){
	var icon = obj.id;
	iconPPPPP(icon, obj);
};

function iconPPP(){
	var icon = this.id;
	iconPPPPP(icon, this);
};

function iconPPPPP(icon, obj){
	var nnn = icon.split('_');

	var n = nnn[1];

	var iconP = document.getElementById('iconP_' + n);
	var iconC = document.getElementById('iconC_' + n);
	// 選択されたファイルの情報を取得
	const fileData = obj.files[0];

	const imgType = fileData.type;
	// 選択されたファイルが画像かどうか確認
	if(!imgType.match(/^image/)) {
		alert('画像ファイルじゃないんじゃないそれ。');
		icon.value = '';
		iconP.innerHTML = '画像だったらここにプレビュー出てくるんだけど。';
		return;
	}
	var reader = new FileReader();
	// ファイル読み取りに失敗したとき
	reader.onerror = function() {
		alert('読み取り失敗！')
		iconP.style = 'display: block;';
		iconC.innerHTML = '';
	}
	// ファイル読み取りに成功したとき
	reader.onload = function() {
		const insert = '※推奨画像比率１：１<br>※正円になるので表示時は端見えない<h4>アイコン画像プレビュー↓</h4><img src="' + reader.result + '" class="iconPreview">';
		iconP.style = 'display: none;';
		iconC.innerHTML = insert;
	}
	// ファイル読み取りを実行
	reader.readAsDataURL(fileData);
}