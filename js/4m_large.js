var count = 0;
var wmsName;
var layers = ['201307110500','201307110600','201307110700','201307110800', '201307110900', '201307111000','201307111100', '201307111200', '201307111300', '201307111400', '201307111500', '201307111600', '201307111700', '201307111800', '201307111900', '201307112000', '201307112100', '201307112200', '201307112300', '201307112400', '201307120100', '201307120200', '201307120300', '201307120400', '201307120500', '201307120600', '201307120700', '201307120800', '201307120900', '201307121000', '201307121100','201307121200', '201307121300', 
'201307121400', '201307121500', '201307121600', '201307121700', '201307121800', '201307121900', '201307122000', '201307122100', '201307122200', '201307122300', 
'201307122400', '201307130100'];


loop();

function loop() {
	
	var layerLen = layers.length;
	
	if(count < layerLen) {
		
		showLayers(layers[count]);
		timeId = setTimeout(loop, 5000);
		count++;
	}else {
		
		count = 0;
		showLayers(layers[count]);
		timeId = setTimeout(loop, 5000);
		count++;
	}
}

function showLayers(name) {
	
	var wmsUrl = "http://hygis-server.southeastasia.cloudapp.azure.com:8080/geoserver/SRA2017_DAN_03/wms";
	
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
			//displayOutsideMaxExtent: true		
		});

	map.addLayer(wmsName);
	wmsName.setZIndex(1);
	
}