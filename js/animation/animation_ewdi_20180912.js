var count = 0;
var wmsName;
//var ewdi = ["EWDI_031_200308","EWDI_030_200307","EWDI_024_200301","EWDI_032_200309","EWDI_026_200303","EWDI_027_200304","EWDI_028_200305","EWDI_029_200306","EWDI_025_200302","EWDI_033_200310","EWDI_034_200311","EWDI_035_200312","EWDI_023_200212","EWDI_012_200201","EWDI_013_200202","EWDI_014_200203","EWDI_015_200204","EWDI_016_200205","EWDI_017_200206","EWDI_018_200207","EWDI_019_200208","EWDI_020_200209","EWDI_021_200210","EWDI_022_200211","EWDI_059_200512","EWDI_048_200501","EWDI_049_200502","EWDI_050_200503","EWDI_051_200504","EWDI_052_200505","EWDI_053_200506","EWDI_054_200507","EWDI_055_200508","EWDI_056_200509","EWDI_057_200510","EWDI_058_200511","EWDI_037_200402","EWDI_038_200403","EWDI_039_200404","EWDI_040_200405","EWDI_041_200406","EWDI_042_200407","EWDI_043_200408","EWDI_044_200409","EWDI_045_200410","EWDI_046_200411","EWDI_047_200412","EWDI_036_200401","EWDI_005_200106","EWDI_006_200107","EWDI_007_200108","EWDI_008_200109","EWDI_009_200110","EWDI_010_200111","EWDI_011_200112","EWDI_000_200101","EWDI_001_200102","EWDI_002_200103","EWDI_003_200104","EWDI_004_200105","EWDI_060_200601","EWDI_061_200602","EWDI_062_200603","EWDI_063_200604","EWDI_064_200605","EWDI_065_200606","EWDI_066_200607","EWDI_067_200608","EWDI_068_200609","EWDI_069_200610","EWDI_070_200611","EWDI_071_200612","EWDI_072_200701","EWDI_073_200702","EWDI_074_200703","EWDI_075_200704","EWDI_076_200705","EWDI_077_200706","EWDI_078_200707","EWDI_079_200708","EWDI_080_200709","EWDI_081_200710","EWDI_082_200711","EWDI_083_200712","EWDI_084_200801","EWDI_085_200802","EWDI_086_200803","EWDI_087_200804","EWDI_088_200805","EWDI_089_200806","EWDI_090_200807","EWDI_091_200808","EWDI_092_200809","EWDI_093_200810","EWDI_094_200811","EWDI_095_200812","EWDI_096_200901","EWDI_097_200902","EWDI_098_200903","EWDI_099_200904","EWDI_100_200905","EWDI_101_200906","EWDI_102_200907","EWDI_103_200908","EWDI_104_200909","EWDI_105_200910","EWDI_106_200911","EWDI_107_200912","EWDI_108_201001","EWDI_109_201002","EWDI_110_201003","EWDI_111_201004","EWDI_112_201005","EWDI_113_201006","EWDI_114_201007","EWDI_115_201008","EWDI_116_201009","EWDI_117_201010","EWDI_118_201011","EWDI_119_201012","EWDI_120_201101","EWDI_121_201102","EWDI_122_201103","EWDI_123_201104","EWDI_124_201105","EWDI_125_201106","EWDI_126_201107","EWDI_127_201108","EWDI_128_201109","EWDI_129_201110","EWDI_130_201111","EWDI_131_201112","EWDI_132_201201","EWDI_133_201202","EWDI_134_201203","EWDI_135_201204","EWDI_136_201205","EWDI_137_201206","EWDI_138_201207","EWDI_139_201208","EWDI_140_201209","EWDI_141_201210","EWDI_142_201211","EWDI_143_201212","EWDI_144_201301","EWDI_145_201302","EWDI_146_201303","EWDI_147_201304","EWDI_148_201305","EWDI_149_201306","EWDI_150_201307","EWDI_151_201308","EWDI_152_201309","EWDI_153_201310","EWDI_154_201311","EWDI_155_201312","EWDI_156_201401","EWDI_157_201402","EWDI_158_201403","EWDI_159_201404","EWDI_160_201405","EWDI_161_201406","EWDI_162_201407","EWDI_163_201408","EWDI_164_201409","EWDI_165_201410","EWDI_166_201411","EWDI_167_201412"];

//var wbdi = ["WBDI_025_200304","WBDI_028_200307","WBDI_027_200306","WBDI_022_200301","WBDI_029_200308","WBDI_023_200302","WBDI_024_200303","WBDI_026_200305","WBDI_030_200309","WBDI_031_200310","WBDI_032_200311","WBDI_033_200312","WBDI_019_200210","WBDI_021_200212","WBDI_010_200201","WBDI_011_200202","WBDI_012_200203","WBDI_013_200204","WBDI_014_200205","WBDI_015_200206","WBDI_016_200207","WBDI_017_200208","WBDI_018_200209","WBDI_020_200211","WBDI_034_200401","WBDI_035_200402","WBDI_036_200403","WBDI_037_200404","WBDI_038_200405","WBDI_039_200406","WBDI_040_200407","WBDI_041_200408","WBDI_042_200409","WBDI_043_200410","WBDI_044_200411","WBDI_045_200412","WBDI_002_200105","WBDI_003_200106","WBDI_004_200107","WBDI_005_200108","WBDI_006_200109","WBDI_007_200110","WBDI_008_200111","WBDI_009_200112","WBDI_000_200103","WBDI_001_200104","WBDI_046_200501","WBDI_047_200502","WBDI_048_200503","WBDI_049_200504","WBDI_050_200505","WBDI_051_200506","WBDI_052_200507","WBDI_053_200508","WBDI_054_200509","WBDI_040_200407","WBDI_041_200408","WBDI_042_200409","WBDI_043_200410","WBDI_044_200411","WBDI_045_200412","WBDI_002_200105","WBDI_003_200106","WBDI_004_200107","WBDI_005_200108","WBDI_006_200109","WBDI_007_200110","WBDI_008_200111","WBDI_009_200112","WBDI_000_200103","WBDI_001_200104","WBDI_046_200501","WBDI_047_200502","WBDI_048_200503","WBDI_049_200504","WBDI_050_200505","WBDI_051_200506","WBDI_052_200507","WBDI_053_200508","WBDI_054_200509","WBDI_055_200510","WBDI_056_200511","WBDI_057_200512","WBDI_058_200601","WBDI_059_200602","WBDI_060_200603","WBDI_061_200604","WBDI_062_200605","WBDI_063_200606","WBDI_064_200607","WBDI_065_200608","WBDI_066_200609","WBDI_067_200610","WBDI_068_200611","WBDI_069_200612","WBDI_070_200701","WBDI_071_200702","WBDI_072_200703","WBDI_073_200704","WBDI_074_200705","WBDI_075_200706","WBDI_076_200707","WBDI_077_200708","WBDI_078_200709","WBDI_079_200710","WBDI_080_200711","WBDI_081_200712","WBDI_082_200801","WBDI_083_200802","WBDI_084_200803","WBDI_085_200804","WBDI_086_200805","WBDI_087_200806","WBDI_088_200807","WBDI_089_200808","WBDI_090_200809","WBDI_091_200810","WBDI_092_200811","WBDI_093_200812","WBDI_094_200901","WBDI_095_200902","WBDI_096_200903","WBDI_097_200904","WBDI_098_200905","WBDI_099_200906","WBDI_100_200907","WBDI_101_200908","WBDI_102_200909","WBDI_103_200910","WBDI_104_200911","WBDI_105_200912","WBDI_106_201001","WBDI_107_201002","WBDI_108_201003","WBDI_109_201004","WBDI_110_201005","WBDI_111_201006","WBDI_112_201007","WBDI_113_201008","WBDI_114_201009","WBDI_115_201010","WBDI_116_201011","WBDI_118_201101","WBDI_119_201102","WBDI_120_201103","WBDI_121_201104","WBDI_122_201105","WBDI_123_201106","WBDI_124_201107","WBDI_125_201108","WBDI_126_201109","WBDI_127_201110","WBDI_128_201111","WBDI_129_201112","WBDI_130_201201","WBDI_131_201202","WBDI_132_201203","WBDI_133_201204","WBDI_134_201205","WBDI_135_201206","WBDI_136_201207","WBDI_137_201208","WBDI_138_201209","WBDI_139_201210","WBDI_140_201211","WBDI_141_201212","WBDI_142_201301","WBDI_143_201302","WBDI_144_201303","WBDI_145_201304","WBDI_146_201305","WBDI_148_201307","WBDI_149_201308","WBDI_150_201309","WBDI_151_201310","WBDI_152_201311","WBDI_153_201312","WBDI_154_201401","WBDI_155_201402","WBDI_156_201403","WBDI_157_201404","WBDI_158_201405","WBDI_159_201406","WBDI_160_201407","WBDI_161_201408","WBDI_162_201409","WBDI_163_201410","WBDI_164_201411","WBDI_165_201412"];

var attrD = "EWDI";
var typeD = "ALL";

loop("EWDI", "ALL");

function loop(layer, type) {
	
	//console.log(layer, type);
	
	if(layer == "EWDI") {
		var layerLen = ewdi.length;
		ewdiFn();
	} else if(layer == "WBDI") {
		var layerLen = wbdi.length;
		wbdiFn();
	} else if(layer == "DDI") {
		ddiFn();
	} else {
		return false;
	}
	
	function ewdiFn() {
		
		if(count < layerLen) {
			
			showLayers(ewdi[count], "EWDI", type);
			timeId = setTimeout(ewdiFn, 8000);
			count++;
		}else {
			
			count = 0;
			showLayers(ewdi[count], "EWDI", type);
			timeId = setTimeout(ewdiFn, 8000);
			count++;
		}
	}
	
	function wbdiFn() {
		if(count < layerLen) {
			showLayers(wbdi[count], "WBDI", type);
			timeId = setTimeout(wbdiFn, 8000);
			count++;
		}else {
			
			count = 0;
			showLayers(wbdi[count], "WBDI", type);
			timeId = setTimeout(wbdiFn, 8000);
			count++;
		}
	}
	
	function ddiFn() {
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
					arrPng.push(png_file[png_file.length-1].slice(0,-7));
				}
			})
			//console.dir(arrPng.length);
			var layerLen = arrPng.length;
			//for(var i=0;i<arrPng.length;i++){
				//console.log(arrPng[i].slice(0, -7));
			//}
			
	
			loopImg();
			function loopImg(){
				
				if (count < layerLen) {
					
					showLayers(arrPng[count], "DDI", type);
					timeId = setTimeout(loopImg, 8000);
					count++;
				} else {
					
					count = 0;
					showLayers(arrPng[count], "DDI", type);
					timeId = setTimeout(loopImg, 8000);
					count++;
				}
			}
		});
	}
	
	
	
	
}

$('#dateBtId').click(function(){
	stopImg();
	
	var chkVal = attrD;
	var type = typeD;
	
	if(chkVal == 'EWDI' || chkVal == 'WBDI' ) {
		
		var startY = $("#year_initial").val();
		var startM = $("#month_initial").val();
		var endY = $("#year_final").val();
		var endM = $("#month_final").val();
		
		var start = startY+startM;
		var end = endY+endM;
		
		var arr = [];
		
		if(chkVal == 'EWDI') {
			for(var i=0; i<ewdi.length;i++) {
				var fileDate = ewdi[i].substring(9, ewdi.length);
				
				if(start <= fileDate && end >= fileDate){
					arr.push(ewdi[i]);
				}
			}
		} else if (chkVal == 'WBDI') {
			for(var i=0; i<wbdi.length;i++) {
				var fileDate = wbdi[i].substring(9, wbdi.length);
				
				if(start <= fileDate && end >= fileDate){
					arr.push(wbdi[i]);
				}
			}
		}
		
		var curImg = 0;
		var imgCount = arr.length;
		
		if(imgCount <= 0) {
			alert("데이터가 없습니다.");
			return false;
		}
		
		animateEwdi();
		function animateEwdi(){	
			if (curImg < imgCount) {
				showLayers(arr[curImg], chkVal, type);
				timeId = setTimeout(animateEwdi, 8000);
				curImg++;
			} else {
				curImg = 0;
				showLayers(arr[curImg], chkVal, type);
				timeId = setTimeout(animateEwdi, 8000);
				curImg++;
			}			
		}
		
		

	} else if (chkVal == 'DDI') {

		var startY = $("#year_initial").val();
		var startM = $("#month_initial").val();
		var startD = $("#day_initial").val();
		var endY = $("#year_final").val();
		var endM = $("#month_final").val();
		var endD = $("#day_final").val();
		
		var start = startY+startM+startD;
		var end = endY+endM+endD;
		
		
		$.ajax({
			url: "http://210.92.123.150/monitoring/ftproot/drought02",
		}).done(function(data) {
			var fdata = $(data).find("a");
			var arrPngs = [];
			fdata.each(function(){
				var urls = $(this).attr("href");
				if(urls.indexOf(".txt") != -1){
					var png_file = urls.split("/");
					if(png_file[png_file.length-1].indexOf("shirink") != -1){
						return;
					}
					//arrPng.push(png_file[png_file.length-1].slice(0,-7));
					
					/*var fileDate = wbdi[i].substring(9, wbdi.length);
			
					if(start <= fileDate && end >= fileDate){
						arrWbdi.push(wbdi[i]);
					}*/
					
					var fileDate = png_file[png_file.length-1].substring(0,8);

					if(start <= fileDate && end >= fileDate){
						arrPngs.push(png_file[png_file.length-1].slice(0,-7));
					}
				}
			})

			var curImg = 0;
			var imgCount = arrPngs.length;
			
			if(imgCount <= 0) {
				alert("데이터가 없습니다.");
				return false;
			}
	
			loopImgs();
			function loopImgs(){
				
				if (curImg < imgCount) {
					
					showLayers(arrPngs[curImg], "DDI", type);
					timeId = setTimeout(loopImgs, 8000);
					curImg++;
				} else {
					
					curImg = 0;
					showLayers(arrPngs[curImg], "DDI", type);
					timeId = setTimeout(loopImgs, 8000);
					curImg++;
				}
			}
		});
		
	}

});

function showLayers(name, layer, type) {
	
	console.log(layer);
	
	if(type == "ALL") {
		//console.log("all");
		if(layer == 'EWDI') {
			var layerName = "new_EWDI";
			var temp = name.substring(9, name.length);

			var y = temp.substring(0,4);
			var m = temp.substring(4,6);
			$("#dateTxt").text(layer + " /   " +y+"-"+m);
		} else if(layer == 'WBDI') {
			var layerName = "new_WBDI";
			var temp = name.substring(9, name.length);

			var y = temp.substring(0,4);
			var m = temp.substring(4,6);
			$("#dateTxt").text(layer + " /  " +y+"-"+m);
		} else if(layer == 'DDI') {
			//console.log(name);
			var layerName = "sra";

			var label = name.slice(0,8);
			
			var y = label.substring(0,4);
			var m = label.substring(4,6);
			var d = label.substring(6,8);
			
			$("#dateTxt").text("DDDI /  " +y+"-"+m+"-"+d);
		}

		var wmsUrl = "http://1.227.166.166:9133/geoserver/"+layerName+"/wms";
		
		if(wmsName != undefined) {
			
			wmsName.destroy();
		}
		
		wmsName = new OpenLayers.Layer.WMS(name,
			wmsUrl,
			{
				layers: name,
				transparent: 'TRUE',
				format: 'image/png'
			}, {	
				
				displayOutsideMaxExtent: true		
			});
			
		Z_SOP_BND_SIDO_PG.setVisibility(true);
		
	} else if (type == "TB_GEO_WKMBBSN") {
		
		var layerName = layer;
		var date = "";
		if(layer == "EWDI" || layer == "WBDI") {
			date = name.substring(9, name.length) + "01";
		} else if (layer == "DDI") {
			date = name.substring(0,6)+"01";
			layerName = "DDDI";
		}

		$("#dateTxt").text(layerName + " / 대권역 / " + date);
		
		var wmsUrl = "http://1.227.166.166:9133/geoserver/mysql_201809/wms";
		
		if(wmsName != undefined) {
			
			wmsName.destroy();
		}
		
		wmsName = new OpenLayers.Layer.WMS(layerName+" 대권역 "+date,
			wmsUrl,
			{
				layers: "drought_"+layer+"_layer",
				transparent: 'TRUE',
				format: 'image/png',
				viewparams: 'date:'+date+';area_tb:TB_GEO_WKMBBSN'
			}, {	
				
				displayOutsideMaxExtent: true		
			});
			
		Z_SOP_BND_SIDO_PG.setVisibility(false);
		
	} else if (type == "TB_GEO_WKMMBSN") {
		
		var layerName = layer;
		var date = "";
		if(layer == "EWDI" || layer == "WBDI") {
			date = name.substring(9, name.length) + "01";
		} else if (layer == "DDI") {
			date = name.substring(0,6)+"01";
			layerName = "DDDI";
		}
		
		$("#dateTxt").text(layerName + " / 중권역 / " + date);
		
		var wmsUrl = "http://1.227.166.166:9133/geoserver/mysql_201809/wms";
		
		if(wmsName != undefined) {
			
			wmsName.destroy();
		}
		
		wmsName = new OpenLayers.Layer.WMS(layerName+" 중권역 "+date,
			wmsUrl,
			{
				layers: "drought_"+layer+"_layer",
				transparent: 'TRUE',
				format: 'image/png',
				viewparams: 'date:'+date+';area_tb:TB_GEO_WKMMBSN'
			}, {	
				
				displayOutsideMaxExtent: true		
			});
			
		Z_SOP_BND_SIDO_PG.setVisibility(false);
		
	} else if (type == "TB_GEO_Z_SOP_BND_SIDO_PG") {

		var layerName = layer;
		var date = "";
		if(layer == "EWDI" || layer == "WBDI") {
			date = name.substring(9, name.length) + "01";
		} else if (layer == "DDI") {
			date = name.substring(0,6)+"01";
			layerName = "DDDI";
		}

		$("#dateTxt").text(layerName + " / 행정구역 / " + date);
		
		var wmsUrl = "http://1.227.166.166:9133/geoserver/mysql_201809/wms";
		
		if(wmsName != undefined) {
			
			wmsName.destroy();
		}
		
		wmsName = new OpenLayers.Layer.WMS(layerName+" 행정구역 "+date,
			wmsUrl,
			{
				layers: "drought_"+layer+"_SIDO_layer",
				transparent: 'TRUE',
				format: 'image/png',
				viewparams: 'date:'+date+';area_tb:TB_GEO_Z_SOP_BND_SIDO_PG'
			}, {	
				
				displayOutsideMaxExtent: true		
			});
			
		Z_SOP_BND_SIDO_PG.setVisibility(false);
		
	}

	
	map.addLayer(wmsName);
	wmsName.setZIndex(1);
	wmsName.setVisibility(true);
}

function stopImg(){
	clearTimeout(timeId);
}









