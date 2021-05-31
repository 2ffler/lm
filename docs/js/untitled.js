				//入力内容
				var info = new Array();
				infoinput(info);
				//通知の要素b
				var b = info[info.length - 1];
				//リストの要素数z
				var z = 0;
				//入力済欄の数がゼロ以上のときチェック数
				var c = 0;
				//通知枠のデフォ（h0の基準は一番上）
				const w = 720;
				const h = 110;
				const w0 = 15;
				const hs = 415;
				const r = 20;
				const s = 15;
				//通知枠高さ調整用、全体高さ
				var h0 = hs;
				//通知枠高さ調整用、個別高さ
				var hh = 0;

				var icon = new Image();
				icon.onload = function(){
					while (c < b){
						var p = info[z];
						z += 4;
						var g = info[z];
						z += 1;

						if ((p == 2) && (g == 1)){
							var u = 0;
						} else if (g == 6){
							var u = 56;
						} else {
							var u = g * 13;
						}

						hh = u + g * 22 + h;

						//枠を描こうね
						ImgCanvasCtx.fillStyle = "rgb(255, 255, 255)";
						ImgCanvasCtx.globalAlpha = 0.7;
						ImgCanvasCtx.textAlign = "left";
						ImgCanvasCtx.filter = blur(20);
						ImgCanvasCtx.strokeStyle = "rgb(255, 255, 255)";
						ImgCanvasCtx.globalAlpha = 0.7;

						ImgCanvasCtx.moveTo(w0, h0 + r);
			    		ImgCanvasCtx.arc(w0 + r, h0 + hh - r, r, Math.PI, Math.PI * 0.5, true); 
				    	ImgCanvasCtx.arc(w0 + w - r, h0 + hh - r, r, Math.PI * 0.5, 0, 1);
				    	ImgCanvasCtx.arc(w0 + w - r, h0 + r, r, 0, Math.PI * 1.5, 1);
			    		ImgCanvasCtx.arc(w0 + r, h0 + r, r, Math.PI * 1.5, Math.PI, 1);
				        ImgCanvasCtx.closePath();
					    ImgCanvasCtx.stroke();

					    //次の通知
						h0 += hh + 20;

						//カウントゥ……。
						c += 1;
					};

					//塗ろうね
					ImgCanvasCtx.fill();

					//設定し直し
					z = 0;
					c = 0;
					//通知枠高さ調整用、全体高さ
					h0 = hs;
					//通知枠高さ調整用、個別高さ
					hh = 0;

					while (c < b){
						//取り出すよ入力内容
						var p = info[z];
						z += 1;
						var o = info[z];
						z += 1;
						var t = info[z];
						z += 1;
						var d = info[z];
						z += 1;
						var g = info[z];
						z += 1;

						if ((p == 2) && (g == 1)){
							var u = 0;
						} else if (g == 6){
							var u = 56;
						} else {
							var u = g * 13;
						}

						hh = u + g * 22 + h;

			    	   	//アイコンを描こうね

			    	   	var ih = 20 + h0;

			    	   	ImgCanvasCtx.globalAlpha = 1;
			    	   	ImgCanvasCtx.filter = "none";
			    	   	ImgCanvasCtx.drawImage(icon,0,0,40,40,35,ih,40,40);

				       	//メッセージ上の行から

				       	ih += 29;

				       	//らいあー！
						ImgCanvasCtx.fillStyle = "black";
						ImgCanvasCtx.globalAlpha = 0.4;
						ImgCanvasCtx.font = '400 24px "M PLUS 1p", sans-serif';
						ImgCanvasCtx.fillText("LIER", 90, ih);
						//通知時間
						ImgCanvasCtx.textAlign = "right";
						ImgCanvasCtx.fillText(t, 705, ih);

						ih += 52;

						if (p == 1){
							//メッセージ宛名
							ImgCanvasCtx.textAlign = "left";
							ImgCanvasCtx.globalAlpha = 1;
							ImgCanvasCtx.fillStyle = "black";
							ImgCanvasCtx.font = '700 24px "M PLUS 1p", sans-serif';
							ImgCanvasCtx.fillText(o, 45, ih);

							//改行
							var l = d.split(/æ/g);
							var j = g - 1;
							var k = 0;

							ih += 7;

							while ((k < j) && (k < 3)){
								ih += 37;

								ImgCanvasCtx.font = '400 24px "M PLUS 1p", sans-serif';
								ImgCanvasCtx.textAlign = "left";
								ImgCanvasCtx.globalAlpha = 1;
								ImgCanvasCtx.fillStyle = "black";
								ImgCanvasCtx.fillText(l[k], 45, ih);

								k += 1;
							}
						} else {
							//不在着信
							ImgCanvasCtx.font = '400 24px "M PLUS 1p", sans-serif';
							ImgCanvasCtx.textAlign = "left";
							ImgCanvasCtx.globalAlpha = 1;
							ImgCanvasCtx.fillStyle = "black";
							ImgCanvasCtx.fillText(d, 45, ih);
						};

						if (g == 6){
							ih += 5;
							ImgCanvasCtx.textAlign = "right";
							ImgCanvasCtx.globalAlpha = 1;
							ImgCanvasCtx.fillStyle = "black";
							ImgCanvasCtx.font = '400 24px "M PLUS 1p", sans-serif';
							ImgCanvasCtx.fillText('…', 682, ih);	

							ih += 39;
							ImgCanvasCtx.textAlign = "left";
							ImgCanvasCtx.globalAlpha = 0.5;
							ImgCanvasCtx.fillStyle = "black";
							ImgCanvasCtx.font = '400 20px "M PLUS 1p", sans-serif';
							ImgCanvasCtx.fillText('タップしてさらに表示', 45, ih);	
						};

						//次の通知
						h0 += hh + 20;

						//カウントゥ……。
						c += 1;
					};

					ImgCanvasCtx.beginPath();

					ImgCanvasCtx.textAlign = "left";
					ImgCanvasCtx.arc(355, 1314, 7.5, 0 * Math.PI / 180, 360 * Math.PI / 180, true) ;
					ImgCanvasCtx.fillStyle = "white";
					ImgCanvasCtx.globalAlpha = 1;
					ImgCanvasCtx.fill();

					var camera = new Image();
					camera.onload = function(){
						ImgCanvasCtx.globalAlpha = 0.8;
			    	   	ImgCanvasCtx.drawImage(camera,0,0,100,100,380,1304,25,25);
					};
					camera.src = "image/camera3.png"

					var createbutton = document.getElementById('result');

					createbutton.innerHTML = '<h4>※最終確認</h4>・ロック画面表示時間、日付、画面背景は今のもので問題ない？<br>・通知が不在着信かメッセージか、選択した？<br>・送信者の名前は入力済？<br>・通知時間は入力した？<br>・入力した通知時間は時間ごっちゃになってない？<br>・メッセージの通知に本文は入力した？<h4>全部おっけーだったら↓のボタンを押して。</h4><button type="submit" name="letsCreate" onclick="gotcha(this)">作成！</button>';
				};
			icon.src = "image/liersmall.png";


			function infoinput(info){
	//まずはデータ整頓
	//入力欄の位置
	var x = 1;
	//入力済欄の数
	var y = 0;

	while (x < 7){
		const mesSender = document.querySelector(`input[name='sender${x}']`).value;
		const mesType = document.querySelector(`select[name='type${x}']`).value;
		const time = document.querySelector(`select[name='time${x}']`).value;
		const docs = document.querySelector(`textarea[name='message${x}']`).value;
		var detail = '';
		var gyo = 0;
		var v = 0;

		if (mesType == 2) {
			//通知がもしも電話なら
			detail += `${mesSender}から着信がありました。`;
			gyo += 1;
		} else if (mesType == 1) {
			//通知がもしもメッセなら
			//文字数と要素数と該当行文字数
			var ji = 0;
			var jic = 1;
			var gjc = 1;
			gyo += 2;
			//要素と結論表示するメッセ
			var array = new Array();
			//改行をマークに
			var letter = docs.replace(/\n/g, 'æ');
			//限界字数ごとに改行して多すぎたら消す
			while ((ji < letter.length) && (gyo < 6)){
				//文字を取得
				var n = letter.charAt(ji);
				ji += 1;
				//文字を突っ込みます。
				array.push(n);
				//改行文字数での処理
				if((gjc > 26) && (n != 'æ')){
					//禁則処理……。
					var ent = ji;
					var check = letter.charAt(ent);
					var nji = 0;
					//次が改行でなければ！
					if (jic - gyo + 2 == letter.length){
						gyo -= 1;
						n = letter.charAt(ji);
						array.push(n);
						jic += 1;
					} else if ('æ' != check){
						//これは禁則処理
						while (check.match(/[，、。．・：；？！―…ー－→←↑↓）」』〕｝】々んぁぃぅぇぉっゃゅょァィゥェォッャュョ]/)){
							ent -= 1;
							check = letter.charAt(ent);	
						};
						//次の行に持ってく文字数
						nji = ji - ent;
						//改行を挿入
						ent += gyo - 2;
						array.splice(ent, 0, 'æ');
					} else {
						var n = letter.charAt(ent);
						array.push(n);
						ji += 1;
						jic += 1;
					};

					//要素数と行数をカウントして行文字数をリセット
					jic += 1;
					gyo += 1;

					if((gyo == 5) && (ji < letter.length)){
						array.pop();
						array.pop();
						array.pop();
						gyo += 1;
					};

					gjc = 0 + nji;

				} else if(n == 'æ'){
					gyo += 1;
					gjc = 0;

					if((gyo == 5) && (ji < letter.length)){
						gyo += 1;
					};

				};
				//要素数と文字数と行文字数をカウント
				jic += 1;
				gjc += 1;
			};
			//文字列をカウント
			for (let d = 0; d < array.length; d++) {
				detail += array[d];
			};
		};
		//通知概要を入力
		if (gyo >= 1){
			info.push(mesType, mesSender, time, detail, gyo);
			//通知入力済欄カウント
			y += 1;
		};

		x += 1;
	};
	info.push(y);
	//データ整頓ここまで
};