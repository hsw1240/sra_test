	/*var h = new OpenLayers.Layer.WMS("행정경계",
		'http://hygis-server.southeastasia.cloudapp.azure.com:8080/geoserver/SRA2017_04/wms'

		,{	layers: 'DSI_2015index'
		
			, transparent:'TRUE',format:'image/png'
		}

		);
	h.setZIndex(999);
	map.addLayer(h);
	h.setVisibility(false);
	
	var p = new OpenLayers.Layer.WMS("표준유역",
		'http://hygis-server.southeastasia.cloudapp.azure.com:8080/geoserver/SRA2017_05/wms'

		,{	layers: 'DSI_distrct_2015'
		
			, transparent:'TRUE',format:'image/png'
		}

		);
	p.setZIndex(999);
	map.addLayer(p);
	p.setVisibility(false);
	*/
	
	var wkm1 = new OpenLayers.Layer.WMS("유역도_WKMBBSN",
		'http://210.92.123.148:8080/geoserver/wkm/wms'

		,{	layers: 'WKMBBSN'
		
			, transparent:'TRUE',format:'image/png'
		}

		);
	wkm1.setZIndex(999);
	map.addLayer(wkm1);
	wkm1.setVisibility(false);
	
	var wkm2 = new OpenLayers.Layer.WMS("유역도_WKMMBSN",
		'http://210.92.123.148:8080/geoserver/wkm/wms'

		,{	layers: 'WKMMBSN'
		
			, transparent:'TRUE',format:'image/png'
		}

		);
	wkm2.setZIndex(999);
	map.addLayer(wkm2);
	wkm2.setVisibility(false);
	
	var wkm3 = new OpenLayers.Layer.WMS("유역도_WKMSBSN",
		'http://210.92.123.148:8080/geoserver/wkm/wms'

		,{	layers: 'WKMSBSN'
		
			, transparent:'TRUE',format:'image/png'
		}

		);
	wkm3.setZIndex(999);
	map.addLayer(wkm3);
	wkm3.setVisibility(false);
	
	
	
	var ha1 = new OpenLayers.Layer.WMS("국가하천",
		'http://hygis-server.southeastasia.cloudapp.azure.com:8080/geoserver/SRA2017_SCEN_03/wms'

		,{	layers: 'w_natl_ITRF_50만'
		
			, transparent:'TRUE',format:'image/png'
		}
		//,{projection:'EPSG:5179', displayOutsideMaxExtent: true}

		);
	ha1.setZIndex(999);
	map.addLayer(ha1);
	ha1.setVisibility(false);
	var ha2 = new OpenLayers.Layer.WMS("지방하천",
		'http://hygis-server.southeastasia.cloudapp.azure.com:8080/geoserver/SRA2017_SCEN_03/wms'

		,{	layers: 'w_frst_ITRF_50만'
		
			, transparent:'TRUE',format:'image/png'
		}
		//,{projection:'EPSG:5179', displayOutsideMaxExtent: true}

		);
	ha2.setZIndex(999);
	map.addLayer(ha2);
	ha2.setVisibility(false);
	var ha3 = new OpenLayers.Layer.WMS("소하천",
		'http://hygis-server.southeastasia.cloudapp.azure.com:8080/geoserver/SRA2017_SCEN_03/wms'

		,{	layers: 'w_scnd_ITRF_50만'
		
			, transparent:'TRUE',format:'image/png'
		}
		//,{projection:'EPSG:5179', displayOutsideMaxExtent: true}

		);
	ha3.setZIndex(999);
	map.addLayer(ha3);
	ha3.setVisibility(false);
	
	
	
	
	
