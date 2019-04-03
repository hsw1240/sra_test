var count = 0;
var wmsName;
//var layers = ['MYD_143D_RR_2017-05-06_rgb_3600x1800','MYD_143D_RR_2017-05-07_rgb_3600x1800','MYD_143D_RR_2017-05-08_rgb_3600x1800','MYD_143D_RR_2017-05-09_rgb_3600x1800','MYD_143D_RR_2017-05-10_rgb_3600x1800','MYD_143D_RR_2017-05-11_rgb_3600x1800','MYD_143D_RR_2017-05-12_rgb_3600x1800'];

var layers = [];

//MOD_143D_RR.2018067
//MOD_143D_RR.2018098
for(var i=67; i<=98; i++) {
	
	if (i === 72) {
		continue;
	}
	layers.push("MOD_143D_RR.20180"+i);
}
//console.log(layers);
loop();

function loop() {
	
	var layerLen = layers.length;
	
	if(count < layerLen) {
		//console.log(count);
		showLayers(layers[count]);
		timeId = setTimeout(loop, 10000);
		count++;
	}else {
		
		count = 0;
		//console.log(count);
		showLayers(layers[count]);
		timeId = setTimeout(loop, 10000);
		count++;
	}
}

function showLayers(name) {
	
	//var wmsUrl = "http://hygis-server.southeastasia.cloudapp.azure.com:8080/geoserver/SRA2017_MODIS/wms";
	var wmsUrl = "http://1.227.166.166:9133/geoserver/MOD/wms";
	
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
			//projection: 'EPSG:5179',
			displayOutsideMaxExtent: true		
		});
	
	var temp = name.substring(12, name.length);
	console.log(temp);
	//var label = name.split("_");
	//var date = label[3];
	
	//$("#dateTxt").text(date);
	
	map.addLayer(wmsName);
	
	
}









