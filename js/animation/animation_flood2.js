var count = 0;
var wmsName;
var layerArr = [];
var proxyUrl = "http://210.92.123.150/sraproxy/sraproxy.aspx?url=";
var webServiceUrl =  "http://1.227.166.166:9132/sracommon/sraservice.asmx/layerList?";
//var code = "T0197";
//var type = "CSR";
var workspace = "MODIS";

loop();

function loop() {
	
	var layerArr = [];
	var layerLen = 0;
	var param = "workspace="+workspace;
	var encodeUrl = encodeURIComponent(webServiceUrl + param);
	var reqUrl = proxyUrl + encodeUrl;

	$.ajax({
		type: 'get',
		data: 'xml',
		async: false,
		url: reqUrl,
		success: function(data){

			var layerList = $(data).find('string').text();
			var layers = JSON.parse(layerList);
			layerLen = layers.coverageStores.coverageStore.length;
			
			for(var i = 0; i < layerLen; i++) {
				
				layerArr.push(layers.coverageStores.coverageStore[i]);
			}

		},error: function(error){
			console.log(error);
		}
	});
	
	//layerLen = layerArr.length;
	//console.log(layerArr[count].name);
	//console.log(layerArr);
	
	loopFn();
	
	function loopFn() {
		if(count < layerLen) {
			console.log(count);
			showLayers(layerArr[count].name, workspace);
			timeId = setTimeout(loopFn, 8000);
			count++;
		}else {
			
			count = 0;
			showLayers(layerArr[count].name, workspace);
			timeId = setTimeout(loopFn, 8000);
			count++;
		}
	}

}

$('#dateBtId').click(function(){
	stopImg();
	count = 0;
	
	var startY = $("input[name$='yyyy1']").val();
	var startM = $("input[name$='mm1']").val();
	var endY = $("input[name$='yyyy2']").val();
	var endM = $("input[name$='mm2']").val();
	
	var start = startY+startM;
	var end = endY+endM;

	
	// 0601 중복코드 수정예정
	var layerArr = [];
	var layerLen = 0;
	var param = "workspace="+workspace;
	var encodeUrl = encodeURIComponent(webServiceUrl + param);
	var reqUrl = proxyUrl + encodeUrl;
	
	$.ajax({
		type: 'get',
		data: 'xml',
		async: false,
		url: reqUrl,
		success: function(data){

			var layerList = $(data).find('string').text();
			var layers = JSON.parse(layerList);
			layerLen = layers.coverageStores.coverageStore.length;
			
			for(var i = 0; i < layerLen; i++) {
				
				var fileDate = layers.coverageStores.coverageStore[i].name.substring(0, 8);
				
				//console.log(fileDate);
				
				if(start <= fileDate && end >= fileDate){
					layerArr.push(layers.coverageStores.coverageStore[i]);
				}
				
			}

		},error: function(error){
			console.log(error);
		}
	});
	
	loopFn();
	
	function loopFn() {
		if(count < layerLen) {
			showLayers(layerArr[count].name, workspace);
			timeId = setTimeout(loopFn, 8000);
			count++;
		}else {
			
			count = 0;
			showLayers(layerArr[count].name, workspace);
			timeId = setTimeout(loopFn, 8000);
			count++;
		}
	}

});

function showLayers(name, workspace) {
	console.log(name);

	var wmsUrl = "http://1.227.166.166:9133/geoserver/"+workspace+"/wms";
	
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
	
	
	var y = name.substring(0,4);
	var m = name.substring(4,6);
	var d = name.substring(6,8);
	$("#dateTxt").text(workspace + " /  " +y+"-"+m+"-"+d);
	
	//var dateText = name.substring(0,15);
	//$("#dateTxt").text(workspace + " /  " +dateText);
		
		
	//var label = name.split("_");
	//var date = label[3];
	//$("#dateTxt").text(date);
	wmsName.setZIndex(1);
	map.addLayer(wmsName);
	
}

function stopImg(){
	clearTimeout(timeId);
}

function stopImg2(){
	clearTimeout(timeId);
	count = 0;
}









