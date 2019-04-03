	var im1 = new OpenLayers.Layer.WMS("임진강_NDWI",
		'http://hygis-server.southeastasia.cloudapp.azure.com:8080/geoserver/SRA2017_Aug/wms'

		,{	layers: 'WS_160109_imjin'
		
			, transparent:'TRUE',format:'image/png'
		}
		//,{projection:'EPSG:5179', displayOutsideMaxExtent: true}

		);
	im1.setZIndex(999);
	map.addLayer(im1);
	im1.setVisibility(false);
	var im2 = new OpenLayers.Layer.WMS("임진강 모니터링 지점",
		'http://hygis-server.southeastasia.cloudapp.azure.com:8080/geoserver/SRA2017_Aug/wms'

		,{	layers: 'Imjin_Mjr_point'
		
			, transparent:'TRUE',format:'image/png'
		}
		//,{projection:'EPSG:5179', displayOutsideMaxExtent: true}

		);
	im2.setZIndex(999);
	map.addLayer(im2);
	im2.setVisibility(false);

	
	
	
	
	
