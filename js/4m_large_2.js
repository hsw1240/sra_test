	
	var speed = $('#range').val();
	
	function showValue(newValue){
		speed = $('#range').val();
		stopImg();
	}

	var c = 0;
	(function() {
		$.ajax({
			url: "http://210.92.123.150/monitoring/ftproot/flooddb02",
		}).done(function(data) {
			var fdata = $(data).find("a");
			var arrPng = [];
			fdata.each(function(){
				var urls = $(this).attr("href");
				if(urls.indexOf(".tiff") != -1){
					var png_file = urls.split("/");
					if(png_file[png_file.length-1].indexOf("shirink") != -1){
						return;
					}
					arrPng.push(png_file[png_file.length-1]);
				}
			})
			
			var curImg = 0;
			loopImg();
			function loopImg(){
				var imgCount = arrPng.length;
				if (curImg < imgCount) {
					showImg(arrPng[curImg]);
					timerId = setTimeout(loopImg, 5000);
					curImg++;
				} else {
					curImg = 0;
					showImg(arrPng[curImg]);
					timerId = setTimeout(loopImg, 5000);
					curImg++;
				}
			}

		});
		
	}());
	
	$('#dateBtId').click(function(){

		stopImg();

		var dateNull = true;
		
		var d1val = $("#date1").val();
		var d2val = $("#date2").val();

		if(d1val == ""){
			d1val = "2002-01-01-00-00";
			d2val = "2017-12-30-00-00";
		}
		var ymd1 = d1val.replace(/-/g,"");
		var ymd2 = d2val.replace(/-/g,"");
		

		$.ajax({
			url: "http://210.92.123.150/monitoring/ftproot/flooddb02",
		}).done(function(data) {

			var fdata = $(data).find("a");
			var arrPng = [];
			fdata.each(function(){
				var urls = $(this).attr("href");
				if(urls.indexOf(".tiff") != -1){
					var png_file = urls.split("/");
					if(png_file[png_file.length-1].indexOf("shirink") != -1){
						return;
					}
					var fileDate = png_file[png_file.length-1].substring(14,24);
					
					if(ymd1 <= fileDate && ymd2 >= fileDate){
						arrPng.push(png_file[png_file.length-1]);
					}
				}
			})
			
			var curImg = 0;
			var imgCount = arrPng.length;
			animateImg();
			function animateImg(){	
				if (curImg < imgCount) {
					showImg(arrPng[curImg]);
					timerId = setTimeout(animateImg, 5000);
					curImg++;
				} else {
					curImg = 0;
					showImg(arrPng[curImg]);
					timerId = setTimeout(animateImg, 5000);
					curImg++;
				}		
			}
			
		});
	})
	

	var ia_wms;
	function showImg(num){
		
		var pname = num.slice(0, -5);
		var drought = num.charAt(num.length-1);

		var wmsUrl = "http://210.92.123.148:8080/geoserver/grc2/wms";

		if(ia_wms != undefined){
			ia_wms.destroy();
		}
			ia_wms = new OpenLayers.Layer.WMS(pname,
				wmsUrl

				,{	layers:pname
					, transparent:'TRUE',format:'image/png'
				}

				,{projection:'EPSG:900913', displayOutsideMaxExtent: false}
				);

			map.addLayer(ia_wms);
			ia_wms.setZIndex(1);
		

	}
	
	function stopImg(){
		clearTimeout(timerId);
	}
