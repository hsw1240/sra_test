var count = 0;
var wmsName;
//var layers = ['20161101.SMI','20161102.SMI','20161103.SMI','20161104.SMI','20161105.SMI'];
var layers = [];
/*for(var i=6; i<=12; i++) {
	
	layers.push("MYD_143D_RR_2017-05-0"+i+"_rgb_3600x1800");
}*/

$.ajax({
	url: "http://210.92.123.150/monitoring/ftproot/LE",
	async: false,
}).done(function(data) {
	var fdata = $(data).find("a");
	fdata.each(function(){
		var urls = $(this).attr("href");
		//console.log(urls);
		if(urls.indexOf(".tif") != -1){
			var png_file = urls.split("/");
			layers.push(png_file[png_file.length-1]);
		}
	})
});

loop();

function loop() {
	
	var layerLen = layers.length;
	
	if(count < layerLen) {
		
		showLayers(layers[count]);
		timeId = setTimeout(loop, 4000);
		count++;
	}else {
		
		count = 0;
		showLayers(layers[count]);
		timeId = setTimeout(loop, 4000);
		count++;
	}
}

function showLayers(name) {
	var pname = name.slice(0, -4);
	//var wmsUrl = "http://hygis-server.southeastasia.cloudapp.azure.com:8080/geoserver/SRA2017_MODIS/wms";
	var wmsUrl = "http://210.92.123.148:8080/geoserver/leee/wms";
	
	if(wmsName != undefined) {
		
		wmsName.destroy();
	}
	
	wmsName = new OpenLayers.Layer.WMS(pname,
		wmsUrl,
		{
			layers: pname,
			transparent: 'TRUE',
			format: 'image/png'
		}, {
			//projection: 'EPSG:5179',
			displayOutsideMaxExtent: true		
		});

	map.addLayer(wmsName);
	
	var label = pname.slice(0,-3);
	$('#label').text(label);
	
}









