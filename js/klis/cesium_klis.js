
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
			// 경로 변경 http
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
					timerId = setTimeout(loopImg_tt, 3000);
					curImg_tt++;
				} else {
					curImg_tt = 0;
					showImg(arrPng[curImg_tt], folder);
					timerId = setTimeout(loopImg_tt, 3000);
					curImg_tt++;
				}
			}
			
			function loopImg_jj(){
				var imgCount = arrPng.length;
				if (curImg_jj < imgCount) {
					showImg(arrPng[curImg_jj], folder);
					timerId = setTimeout(loopImg_jj, 3000);
					curImg_jj++;
				} else {
					curImg_jj = 0;
					showImg(arrPng[curImg_jj], folder);
					timerId = setTimeout(loopImg_jj, 3000);
					curImg_jj++;
				}
			}
			
		});
		
	};
	

	var ia_wms;
	function showImg(num, folder){

		num = num.replace(".tif", "");

		var pname = num.slice(0, -3);
		var drought = num.charAt(num.length-1);

		var wmsUrl = "http://210.92.123.148:8080/geoserver/kldas/wms";
		
		// 세슘 wms 호출로 변경
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
		
		
		// 텍스트 위치 변경
		$("#dateTxt").text(text+" / "+y+"-"+m+"-"+d);
		

		
	}
	
	function stopImg(){
		clearTimeout(timerId);
	}



	
	
	
	
	
	