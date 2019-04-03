var count = 0;
var wmsName;


var proxyUrl = "http://210.92.123.150/sraproxy/sraproxy.aspx?url=";
var webServiceUrl =  "http://1.227.166.166:9132/sracommon/sraservice.asmx/layerList?";

loop("SPI30", "ALL");

function layerListFn(layer) {

	var layerArr = [];
	var param = "workspace="+layer;
	var encodeUrl = encodeURIComponent(webServiceUrl + param);
	var reqUrl = proxyUrl + encodeUrl;
	
	$.ajax({
		type: 'get',
		data: 'xml',
		async: false,
		url: reqUrl,
		success: function(data){
			
			//console.log(data);

			var layerList = $(data).find('string').text();
			var layers = JSON.parse(layerList);
			var layerLen = layers.coverageStores.coverageStore.length;
			
			for(var i = 0; i < layerLen; i++) {
				
				var layerName = layers.coverageStores.coverageStore[i].name;
				layerArr.push(layerName);

			}

		},error: function(error){
			console.log(error);
		}
	});
	
	return layerArr;

}

function loop(layer, type) {
	
	//console.log(count);
	
	if(layer == "edi") {
		
		if(wmsName != undefined) {
		
			wmsName.destroy();
		}
		
		$("#dateTxt").text("");
		
		return false;
	}
	
	var layerListArr = layerListFn(layer);
	
	//console.log(layerListArr);
	var layerLen = layerListArr.length;
	
	animateFn();
	function animateFn() {
		if(count < layerLen) {
			showLayers(layerListArr[count], layer, type);
			timeId = setTimeout(animateFn, 8000);
			count++;
		}else {
			
			count = 0;
			showLayers(layerListArr[count], layer, type);
			timeId = setTimeout(animateFn, 8000);
			count++;
		}
	}	
	
}

$('#dateBtId').click(function(){
	stopImg();
	
	var chkVal = attrD;
	
	var type = "ALL";
	
	var layerListArr = layerListFn(chkVal);
	var layerLen = layerListArr.length;
	
	console.log(layerListArr);
	
	var startY = $("#year_initial").val();
	var startM = $("#month_initial").val();
	var endY = $("#year_final").val();
	var endM = $("#month_final").val();
	
	var start = startY+startM;
	var end = endY+endM;
	
	var arr = [];
	
	for(var i=0; i<layerListArr.length;i++) {
		console.log(i);
		var fileDate = layerListArr[i].substring(0, 6)+"01";
		console.log(fileDate);
		if(start <= fileDate && end >= fileDate){
			arr.push(layerListArr[i]);
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



});

function showLayers(name, layer, type) {
	
	//console.log(layer);
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
	
	var temp = name.substring(0,6);
	//console.log(temp);
	var y = temp.substring(0,4);
	var m = temp.substring(4,6);
	
	$("#dateTxt").text(layer + " / 전국 / " +y+"-"+m);
		
	
	
	map.addLayer(wmsName);
	wmsName.setZIndex(1);
	wmsName.setVisibility(true);
}

function stopImg(){
	clearTimeout(timeId);
}









