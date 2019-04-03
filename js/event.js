function initEvent(){
	var map;
	function init(){
		initMap();
		wmsEvent();
	}
	function initMap(){
		map = new OpenLayers.Map('map', {
			projection: 'EPSG:3857',
			layers: [
				new OpenLayers.Layer.Google(
					"Google Physical",
					{type: google.maps.MapTypeId.TERRAIN}
				),
				new OpenLayers.Layer.Google(
					"Google Streets", // the default
					{numZoomLevels: 20}
				),
				new OpenLayers.Layer.Google(
					"Google Hybrid",
					{type: google.maps.MapTypeId.HYBRID, numZoomLevels: 20}
				),
				new OpenLayers.Layer.Google(
					"Google Satellite",
					{type: google.maps.MapTypeId.SATELLITE, numZoomLevels: 22}
				)
			],
			center: new OpenLayers.LonLat(127.0,37.06)
				.transform('EPSG:4326', 'EPSG:900913'),
			zoom: 7
		});
		
		map.addControl(new OpenLayers.Control.LayerSwitcher());
	}
	
	function wmsEvent(){
		var wmsUrl = "http://210.92.123.148:8080/geoserver/sra/wms";
		ia_wms = new OpenLayers.Layer.WMS("20160720.wet_mask",
		//ia_wms = new OpenLayers.Layer.WMS(params[1],
			wmsUrl
			,{	layers:"sra:20160720.wet_mask"
			//,{	layers:params[1]
				//,bbox:'122.33452448495811,32.114552835005895,131.86429071230503,43.84192066422573'
				//,bbox: '1.1119962E7,3334936.5,1.2232362E7,4447336.5'            	
				, transparent:'TRUE',format:'image/png'
			}
			,{projection:'EPSG:4326', displayOutsideMaxExtent: true}
			//,{projection:'EPSG:900913', displayOutsideMaxExtent: true}
			);

		map.addLayer(ia_wms);
	}
	
	init();
}