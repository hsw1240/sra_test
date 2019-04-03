	var SN_Zone = new OpenLayers.Layer.WMS("한반도 행정구역",
		'http://hygis-server.southeastasia.cloudapp.azure.com:8080/geoserver/SRA2017_Aug/wms'

		,{	layers: 'SN_Zone_Admin'
		
			, transparent:'TRUE',format:'image/png'
		}

		);
	SN_Zone.setZIndex(999);
	map1.addLayer(SN_Zone);
	SN_Zone.setVisibility(true);