	
	
	/*var speed = $('#range').val();
	
	function showValue(newValue){
		
		speed = $('#range').val();
		stopImg();
	}*/

	var c = 0;
	(function() {
		$.ajax({
			url: "http://210.92.123.150/monitoring/ftproot/selab_hap",
		}).done(function(data) {
			var fdata = $(data).find("a");
			var arrPng = [];
			fdata.each(function(){
				var urls = $(this).attr("href");
				//console.log(urls);
				if(urls.indexOf(".png") != -1){
					var png_file = urls.split("/");
					/*if(png_file[png_file.length-1].indexOf("shirink") != -1){
						return;
					}*/
					arrPng.push(png_file[png_file.length-1]);
				}
			})
			//console.dir(arrPng.length);
			//console.log(arrPng);
			//for(var i=0;i<arrPng.length;i++){
				//console.log(arrPng[i].slice(0, -7));
			//}
			var curImg = 0;
			loopImg();
			function loopImg(){
				var imgCount = arrPng.length;
				if (curImg < imgCount) {
					showImg(arrPng[curImg]);
					timerId = setTimeout(loopImg, 1000);
					curImg++;
				} else {
					curImg = 0;
					showImg(arrPng[curImg]);
					timerId = setTimeout(loopImg, 1000);
					curImg++;
				}
			}
		});
		
	}());

	
	function showImg(num){
		var date = num.substring(0,12);
		var dateY = date.substring(0,4);
		var dateM = date.substring(4,6);
		var dateD = date.substring(6,8);
		var dateK = date.substring(8,12);
		$('#hap').attr('src','http://210.92.123.150/monitoring/ftproot/selab_hap/'+num);
		$("#dateTxt").text(dateY+"-"+dateM+"-"+dateD+"/"+dateK);
	}
	
	function stopImg(){
		clearTimeout(timerId);
	}



	
	
	
	
	
	