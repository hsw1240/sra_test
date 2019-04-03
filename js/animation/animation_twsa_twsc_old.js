var count = 0;
var wmsName;
var layerArr = [];
var proxyUrl = "http://210.92.123.150/sraproxy/sraproxy.aspx?url=";
var webServiceUrl =  "http://1.227.166.166:9132/sracommon/sraservice.asmx/monitoring4mSearch?";
var code = "T0195";
var type = "CSR";
var watershed = "대권역";

console.log("dsfffffff");

loop();

function loop() {
	
	var layerArr = [];
	var layerLen = 0;
	var param = "code="+code+"&type="+type;
	var encodeUrl = encodeURIComponent(webServiceUrl + param);
	var reqUrl = proxyUrl + encodeUrl;

	$.ajax({
		type: 'get',
		data: 'xml',
		async: false,
		url: reqUrl,
		success: function(xml){
			var metadata = $(xml).find('TB_MET_DAT');
			layerLen = metadata.length;
			metadata.each(function(index){
				var datId = $(this).find("DAT_ID").text();
				
				if(datId.indexOf("2") == -1) {
					return;
				}
				
				/*if(type == "CSR") {
					console.log("csr");
					
					if(datId.indexOf("Mascon") == -1) {
						console.log(datId);
						return;
					}
				}*/
				
				layerArr.push(datId);
			});
		},error: function(error){
			console.log(error);
		}
	});
	
	//layerLen = layerArr.length;
	//console.log(layerLen);
	//console.log(layerArr);
	
	loopFn();
	
	function loopFn() {
		if(count < layerLen) {
			showLayers(layerArr[count], code, type);
			timeId = setTimeout(loopFn, 8000);
			count++;
		}else {
			
			count = 0;
			showLayers(layerArr[count], code, type);
			timeId = setTimeout(loopFn, 8000);
			count++;
		}
	}

}

$('#dateBtId').click(function(){
	stopImg();
	count = 0;
	
	var startY = $("#year_initial").val();
	var startM = $("#month_initial").val();
	var endY = 	$("#year_final").val();
	var endM = $("#month_final").val();

	/*if(startM<10){
		startM='0'+startM;
	} 
	if(endM<10){
		endM='0'+endM;
	}*/
	
	var start = startY+startM;
	var end = endY+endM;
	console.log(start);
	console.log(end);
	
	// 0601 중복코드 수정예정
	var layerArr = [];
	var layerLen = 0;
	var param = "code="+code+"&type="+type;
	var encodeUrl = encodeURIComponent(webServiceUrl + param);
	var reqUrl = proxyUrl + encodeUrl;
	
	$.ajax({
		type: 'get',
		data: 'xml',
		async: false,
		url: reqUrl,
		success: function(xml){
			var metadata = $(xml).find('TB_MET_DAT');
			layerLen = metadata.length;
			metadata.each(function(index){
				var datId = $(this).find("DAT_ID").text();
				
				var fileDate = datId.substring(datId.length-6, datId.length);
					
				if(start <= fileDate && end >= fileDate){
					layerArr.push(datId);
				}
				
			});
		},error: function(error){
			console.log(error);
		}
	});
	
	loopFn();
	
	function loopFn() {
		if(count < layerLen) {
			showLayers(layerArr[count], code, type);
			timeId = setTimeout(loopFn, 8000);
			count++;
		}else {
			
			count = 0;
			showLayers(layerArr[count], code, type);
			timeId = setTimeout(loopFn, 8000);
			count++;
		}
	}

});

function showLayers(name, layer, type) {
	//console.log(name);
	var layerName = "";
	if(layer == "T0197") {
		layer = "TWSA_1";
		layerName = "TWSA";
	} else if (layer == "T0198") {
		layer = "TWSA_2";
		layerName = "TWSA";
	} else if (layer == "T0195") {
		layer = "TWSC_1";
		layerName = "TWSC";
	} else if (layer == "T0196") {
		layer = "TWSC_2";
		layerName = "TWSC";
	}

	var wmsUrl = "http://1.227.166.166:9133/geoserver/"+layer+"/wms";
	
	if(wmsName != undefined) {
		
		wmsName.destroy();
	}
	
	wmsName = new OpenLayers.Layer.WMS(name,
		wmsUrl,
		{
			layers: name,
			transparent: 'TRUE',
			srs: "EPSG:3857",
			format: 'image/png'
		}, {
			//projection: 'EPSG:5179',
			
			displayOutsideMaxExtent: true		
		});
	
	/*var temp = name.substring(0,6);
	var y = temp.substring(0,4);
	var m = temp.substring(4,6);	
	$("#dateTxt").text(layer + " /  " +y+"-"+m);*/
	
	var dateText = name.substring(name.length-6, name.length);
	$("#dateTxt").text(watershed + " / " + layer + "_" +type + " /  " +dateText);
	$("#varInfo").text(layerName+"_watershed/"+type+"/"+watershed);
	$("#flow").text(dateText.substring(0,4)+" 유출량(대권역)");
	$("#flowInfo").text(dateText.substring(0,4)+" 연평균 유출량(대권역)");
		
		
	//var label = name.split("_");
	//var date = label[3];
	//$("#dateTxt").text(date);
	
	map.addLayer(wmsName);
	wmsName.setZIndex(1);
}

function stopImg(){
	clearTimeout(timeId);
}

function stopImg2(){
	clearTimeout(timeId);
	count = 0;
}









