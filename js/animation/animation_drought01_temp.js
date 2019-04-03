	
	//console.log(map);
	
	var speed = $('#range').val();
	
	function showValue(newValue){
		
		speed = $('#range').val();
		stopImg();
	}

	var c = 0;
	//(function() {
	ftprootFn("D02");
	function ftprootFn(repo) {
		//console.log(repo);
		$.ajax({
			url: "http://210.92.123.150/monitoring/ftproot/"+repo,
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
					arrPng.push(png_file[png_file.length-1]);
				}
			})
			
			var curImg = 0;
			loopImg();
			function loopImg(){
				var imgCount = arrPng.length;
				if (curImg < imgCount) {
					showImg(arrPng[curImg], repo);
					timerId = setTimeout(loopImg, 3000);
					curImg++;
				} else {
					curImg = 0;
					showImg(arrPng[curImg], repo);
					timerId = setTimeout(loopImg, 3000);
					curImg++;
				}
			}
		});
		
	//}());
	}
	
	
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
			url: "http://210.92.123.150/monitoring/ftproot/drought02",
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
					timerId = setTimeout(animateImg, 3000);
					curImg++;
				} else {
					curImg = 0;
					showImg(arrPng[curImg]);
					timerId = setTimeout(animateImg, 3000);
					curImg++;
				}			
			}
			
		});
	})
	

	var ia_wms;
	function showImg(num, repo){
		console.log(num);
		num = num.replace(".txt", "");
		var pname_temp = num.slice(0, -3);
		var pname_split = pname_temp.split(".");
		var pname = pname_split[0];
		console.log(pname);
		var drought = num.charAt(num.length-1);
		
		//console.log(pname);
		
		//var wmsUrl = "http://210.92.123.148:8080/geoserver/sra/wms";
		var wmsUrl = "http://hygis-server.southeastasia.cloudapp.azure.com:8080/geoserver/SRA2017_SEP_"+repo+"/wms";
		if(ia_wms != undefined){
			ia_wms.destroy();
		}
			ia_wms = new OpenLayers.Layer.WMS(pname,
				wmsUrl

				,{	layers:pname
				
					, transparent:'TRUE',format:'image/png'
				}
				,{projection:'EPSG:5179', displayOutsideMaxExtent: true}

				);

			map.addLayer(ia_wms);
			ia_wms.setZIndex(1);
		
		if(repo == "D01"){
			// ddi
			var jname = "DDI";
			var fileN = "index";
		} else if(repo == "D02"){
			// smi
			var jname = "SMI";
			var fileN = "SMI";
		}
		//폴더는 d01 이 index, d02가 smi
		
		$('#chartId').attr('src','http://210.92.123.150/monitoring/ftproot/'+repo+'/'+pname+'.'+fileN+'.chart.png');
		//$('#boxImg').attr('src','../4-4/img/mark/new4/'+drought+'.png');
		var label = pname.slice(0,8);
		
		var y = label.substring(0,4);
		var m = label.substring(4,6);
		var d = label.substring(6,8);
		
		
		$("#legend").attr('src','img/'+jname+'.png');
		$("#dateTxt").text(jname+" /  " +y+"-"+m+"-"+d);
		//$("#dateTxt").text(label);
	}
	
	function stopImg(){
		clearTimeout(timerId);
	}



	
	
	
	
	
	