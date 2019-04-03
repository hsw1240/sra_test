	
	//console.log(map);
	
	var speed = $('#range').val();
	
	function showValue(newValue){
		
		speed = $('#range').val();
		stopImg();
	}


	var curImg_tt = 0;
	var curImg_jj = 0;
	startLoop("jj");
	function startLoop(folder) {
		$.ajax({
			//url: "../ftproot/flooddb01",
			url: "ftproot/cesium/"+folder,
		}).done(function(data) {
			var fdata = $(data).find("a");
			var arrPng = [];
			fdata.each(function(){
				var urls = $(this).attr("href");
				if(urls.indexOf(".tif") != -1){
					var png_file = urls.split("/");
					if(png_file[png_file.length-1].indexOf("shirink") != -1){
						return;
					}
					arrPng.push(png_file[png_file.length-1]);
				}
			})
			
			if(folder == "tt") {
				
				loopImg_tt();
			} else if(folder == "jj") {
				
				loopImg_jj();
			}
			
			function loopImg_tt(){
				var imgCount = arrPng.length;
				if (curImg_tt < imgCount) {
					showImg(arrPng[curImg_tt], folder);
					timerId = setTimeout(loopImg_tt, 10000);
					curImg_tt++;
				} else {
					curImg_tt = 0;
					showImg(arrPng[curImg_tt], folder);
					timerId = setTimeout(loopImg_tt, 10000);
					curImg_tt++;
				}
			}
			
			function loopImg_jj(){
				var imgCount = arrPng.length;
				if (curImg_jj < imgCount) {
					showImg(arrPng[curImg_jj], folder);
					timerId = setTimeout(loopImg_jj, 10000);
					curImg_jj++;
				} else {
					curImg_jj = 0;
					showImg(arrPng[curImg_jj], folder);
					timerId = setTimeout(loopImg_jj, 10000);
					curImg_jj++;
				}
			}
			
		});
		
	};
	
	
	$('#dateBtId').click(function(){

		stopImg();

		var dateNull = true;
		
		var d1val = $("#date1").val();
		var d2val = $("#date2").val();

		if(d1val == ""){

			d1val = "2015-01-01";
			d2val = "2017-12-30";
		}
		var ymd1 = d1val.replace(/-/g,"");
		var ymd2 = d2val.replace(/-/g,"");
		//console.log(ymd1);
		//console.log(ymd2);
		$.ajax({
			url: "./ftproot/flooddb01",
		}).done(function(data) {
			var fdata = $(data).find("a");
			var arrPng = [];
			fdata.each(function(){
				var urls = $(this).attr("href");
				if(urls.indexOf(".txt") != -1){
					var png_file = urls.split("/");
					if(png_file[png_file.length-1].indexOf("shirink") != -1){
						return;
					}
					var fileDate = png_file[png_file.length-1].substring(0,8);

					if(ymd1 <= fileDate && ymd2 >= fileDate){
						arrPng.push(png_file[png_file.length-1]);
					}
				}
			});
			
			var curImg = 0;
			var imgCount = arrPng.length;
			animateImg();
			function animateImg(){	
				if (curImg < imgCount) {
					showImg(arrPng[curImg]);
					timerId = setTimeout(animateImg, 10000);
					curImg++;
				} else {
					curImg = 0;
					showImg(arrPng[curImg]);
					timerId = setTimeout(animateImg, 10000);
					curImg++;
				}			
			}
			
		});
	})
	

	var ia_wms;
	function showImg(num, folder){

		num = num.replace(".tif", "");
		//console.log(num);
		var pname = num.slice(0, -3);
		var drought = num.charAt(num.length-1);
		
		//console.log(pname);
		
		//var wmsUrl = "http://210.92.123.148:8080/geoserver/sra/wms";
		//var wmsUrl = "http://210.92.123.148:8080/geoserver/kldas/wms";
		var wmsUrl = "http://1.227.166.166:9133/geoserver/kldas/wms";
		if(ia_wms != undefined){
			ia_wms.destroy();
		}
			ia_wms = new OpenLayers.Layer.WMS(num,
				wmsUrl

				,{	layers:num
				
					, transparent:'TRUE',format:'image/png'
				}
				//,{projection:'EPSG:5179', displayOutsideMaxExtent: true}

				);

			map1.addLayer(ia_wms);
			ia_wms.setZIndex(1);
		
		var label = num.substring(9,17);
		
		var y = label.substring(0,4);
		var m = label.substring(4,6);
		var d = label.substring(6,8);
		
		if(folder == "tt") {
			
			var text = "토양수분";
		} else if(folder == "jj") {
			
			var text = "증발산량";
		}
		
		$("#dateTxt").text(text+" / "+y+"-"+m+"-"+d);
		
		//$('#chartId').attr('src','../ftproot/flooddb01/'+pname+'.chart.png');
		//$('#boxImg').attr('src','../4-4/img/mark/new4/'+drought+'.png');
		
	}
	
	function stopImg(){
		clearTimeout(timerId);
	}



	
	
	
	
	
	