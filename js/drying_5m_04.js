var count = 0;
var wmsName;
//var layers = ['20161101.SMI','20161102.SMI','20161103.SMI','20161104.SMI','20161105.SMI'];
var layers = [];
$.ajax({
	type:"GET",
	async: false,
	url:"js/5m_04.html",
	success:function(data){

		$(data).find("li").each(function() {

			layers.push($(this).text());
		});
	}
})
console.log(layers);
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
	
	var wmsUrl = "http://hygis-server.southeastasia.cloudapp.azure.com:8080/geoserver/SRA2017_WA/wms";
	
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

	map.addLayer(wmsName);
	
}









