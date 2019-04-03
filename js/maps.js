	var center = [14181053.178283, 4296076.8036719];
	
	
	var googleLayer1 = new olgm.layer.Google();
	var googleLayer2 = new olgm.layer.Google();
	var googleLayer3 = new olgm.layer.Google();
	var googleLayer4 = new olgm.layer.Google();
	var googleLayer5 = new olgm.layer.Google();

	var osmLayer = new ol.layer.Tile({
		source: new ol.source.OSM()
	});
	
	var testLayer1 = new ol.layer.Tile({
		source: new ol.source.TileWMS({
			url: 'http://hygis-server.southeastasia.cloudapp.azure.com:8080/geoserver/SRA2017_WA_N/wms',
			params: {'LAYERS': 'SRA2017_WA_N:1985s(197801 ~ 198512 자료의 평균)', 'TILED': true},
			serverType: 'geoserver'
		})
	})
	
	var testLayer2 = new ol.layer.Tile({
		source: new ol.source.TileWMS({
			url: 'http://hygis-server.southeastasia.cloudapp.azure.com:8080/geoserver/SRA2017_WA_N/wms',
			params: {'LAYERS': 'SRA2017_WA_N:1995s(198601 ~ 199512 자료의 평균)', 'TILED': true},
			serverType: 'geoserver'
		})
	})
	
	var testLayer3 = new ol.layer.Tile({
		source: new ol.source.TileWMS({
			url: 'http://hygis-server.southeastasia.cloudapp.azure.com:8080/geoserver/SRA2017_WA_N/wms',
			params: {'LAYERS': 'SRA2017_WA_N:2005s(199601 ~ 200512 자료의 평균)', 'TILED': true},
			serverType: 'geoserver'
		})
	})
	
	var testLayer4 = new ol.layer.Tile({
		source: new ol.source.TileWMS({
			url: 'http://hygis-server.southeastasia.cloudapp.azure.com:8080/geoserver/SRA2017_WA_N/wms',
			params: {'LAYERS': 'SRA2017_WA_N:2015s(200601 201412 자료의 평균)', 'TILED': true},
			serverType: 'geoserver'
		})
	})


	var view = new ol.View({
		center: center,
		zoom: 6
	});
	
	var map1 = new ol.Map({
		target: 'map1',
		//layers: [googleLayer1, testLayer1],
		layers: [googleLayer1],
		view: view
	});
	
	var map2 = new ol.Map({
		target: 'map2',
		layers: [googleLayer2],
		view: view
	});

	var map3 = new ol.Map({
		target: 'map3',
		layers: [googleLayer3],
		view: view
	});

	var map4 = new ol.Map({
		target: 'map4',
		layers: [googleLayer4],
		view: view
	});
	
	var map5 = new ol.Map({
		target: 'map5',
		layers: [googleLayer4],
		view: view
	});
	
	var olGM1 = new olgm.OLGoogleMaps({map: map1});
	var olGM2 = new olgm.OLGoogleMaps({map: map2});
	var olGM3 = new olgm.OLGoogleMaps({map: map3});
	var olGM4 = new olgm.OLGoogleMaps({map: map4});
	var olGM5 = new olgm.OLGoogleMaps({map: map5});
	olGM1.activate();
	olGM2.activate();
	olGM3.activate();
	olGM4.activate();
	olGM5.activate();