function displaytime(createDate){
	//データ取得
	var mdata = document.querySelector("input[name='mdata']").value;

	if (mdate == 0){
		var week = ["日", "月", "火", "水", "木", "金", "土"];
		var inputDate = document.querySelector("input[name='date']").value;

		//データ整頓
		var mdw = inputDate.replace(/-/g,'/');
		var dObj = new Date(`${mdw}`);

		var mm = dObj.getMonth()+1;
		var dd = dObj.getDate();
		var ww = dObj.getDay();

		var wday = week[ww];

		createDate.push(mm, dd, wday);
	} else {
		createDate.push(mdata);
	}
};

function buttonClick(){
	//とりあえず画面背景
};