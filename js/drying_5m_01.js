	var center = [14181053.178283, 4296076.8036719];
	
	
	var googleLayer1 = new olgm.layer.Google();
	var googleLayer2 = new olgm.layer.Google();
	var googleLayer3 = new olgm.layer.Google();
	var googleLayer4 = new olgm.layer.Google();

	var osmLayer = new ol.layer.Tile({
		source: new ol.source.OSM()
	});
	
	var testLayer1 = new ol.layer.Tile({
		source: new ol.source.TileWMS({
			url: 'http://hygis-server.southeastasia.cloudapp.azure.com:8080/geoserver/SRA2017_04/wms',
			params: {'LAYERS': 'SRA2017_04:DSI_1985index', 'TILED': true},
			serverType: 'geoserver'
		})
	})
	
	var testLayer2 = new ol.layer.Tile({
		source: new ol.source.TileWMS({
			url: 'http://hygis-server.southeastasia.cloudapp.azure.com:8080/geoserver/SRA2017_04/wms',
			params: {'LAYERS': 'SRA2017_04:DSI_1995index', 'TILED': true},
			serverType: 'geoserver'
		})
	})
	
	var testLayer3 = new ol.layer.Tile({
		source: new ol.source.TileWMS({
			url: 'http://hygis-server.southeastasia.cloudapp.azure.com:8080/geoserver/SRA2017_04/wms',
			params: {'LAYERS': 'SRA2017_04:DSI_2005index', 'TILED': true},
			serverType: 'geoserver'
		})
	})
	
	var testLayer4 = new ol.layer.Tile({
		source: new ol.source.TileWMS({
			url: 'http://hygis-server.southeastasia.cloudapp.azure.com:8080/geoserver/SRA2017_04/wms',
			params: {'LAYERS': 'SRA2017_04:DSI_2015index', 'TILED': true},
			serverType: 'geoserver'
		})
	})
	
	var testLayer6 = new ol.layer.Tile({
		source: new ol.source.TileWMS({
			url: 'http://hygis-server.southeastasia.cloudapp.azure.com:8080/geoserver/SRA2017_SCEN_03/wms',
			params: {'LAYERS': 'SRA2017_SCEN_03:w_frst_ITRF_50만', 'TILED': true},
			serverType: 'geoserver'
		})
	})
	
	var testLayer5 = new ol.layer.Tile({
		source: new ol.source.TileWMS({
			url: 'http://hygis-server.southeastasia.cloudapp.azure.com:8080/geoserver/SRA2017_SCEN_03/wms',
			params: {'LAYERS': 'SRA2017_SCEN_03:w_natl_ITRF_50만', 'TILED': true},
			serverType: 'geoserver'
		})
	})
	
	var testLayer7 = new ol.layer.Tile({
		source: new ol.source.TileWMS({
			url: 'http://hygis-server.southeastasia.cloudapp.azure.com:8080/geoserver/SRA2017_SCEN_03/wms',
			params: {'LAYERS': 'SRA2017_SCEN_03:w_scnd_ITRF_50만', 'TILED': true},
			serverType: 'geoserver'
		})
	})
	testLayer5.setVisible(true);
	testLayer6.setVisible(false);
	testLayer7.setVisible(false);
	/*var testLayer = new ol.layer.Image({
		source: new ol.source.ImageWMS({
			url: 'http://hygis-server.southeastasia.cloudapp.azure.com:8080/geoserver/SRA2017_00/wms',
			params: {'LAYERS': 'SRA2017_00:1985s_19761985'},
			ratio: 1,
			serverType: 'geoserver'
		})
	})*/
	
	$('.imgs').click(function(){
		if(this.id == "country"){
			testLayer5.setVisible(false);
			testLayer6.setVisible(false);
			testLayer7.setVisible(false);
			testLayer5.setVisible(true);
		}else if(this.id == "local"){
			testLayer5.setVisible(false);
			testLayer6.setVisible(false);
			testLayer7.setVisible(false);
			testLayer6.setVisible(true);
		}else{
			testLayer5.setVisible(false);
			testLayer6.setVisible(false);
			testLayer7.setVisible(false);
			testLayer7.setVisible(true);
		}
	})

	var view = new ol.View({
		center: center,
		zoom: 7
	});
	
	var map1 = new ol.Map({
		target: 'map1',
		layers: [googleLayer1, testLayer1,testLayer5,testLayer6, testLayer7],
		view: view
	});
	
	var map2 = new ol.Map({
		target: 'map2',
		layers: [googleLayer2, testLayer2,testLayer5,testLayer6, testLayer7],
		view: view
	});

	var map3 = new ol.Map({
		target: 'map3',
		layers: [googleLayer3, testLayer3,testLayer5,testLayer6, testLayer7],
		view: view
	});

	var map4 = new ol.Map({
		target: 'map4',
		layers: [googleLayer4, testLayer4,testLayer5,testLayer6, testLayer7],
		view: view
	});
	
	var olGM1 = new olgm.OLGoogleMaps({map: map1});
	var olGM2 = new olgm.OLGoogleMaps({map: map2});
	var olGM3 = new olgm.OLGoogleMaps({map: map3});
	var olGM4 = new olgm.OLGoogleMaps({map: map4});
	olGM1.activate();
	olGM2.activate();
	olGM3.activate();
	olGM4.activate();
	
	
	
	
	
	