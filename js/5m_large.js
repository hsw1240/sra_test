	var center = [14181053.178283, 4296076.8036719];
	
	
	var googleLayer1 = new olgm.layer.Google();
	var googleLayer2 = new olgm.layer.Google();
	var googleLayer3 = new olgm.layer.Google();
	var googleLayer4 = new olgm.layer.Google();
	var googleLayer5 = new olgm.layer.Google();

	var osmLayer = new ol.layer.Tile({
		source: new ol.source.OSM()
	});
	
	// 행정구역
	var testLayer1 = new ol.layer.Tile({
		source: new ol.source.TileWMS({
			url: 'http://hygis-server.southeastasia.cloudapp.azure.com:8080/geoserver/SRA2017_04/wms',
			params: {'LAYERS': 'SRA2017_04:DSI_1985index', 'TILED': true},
			serverType: 'geoserver'
		})
	})
	testLayer1.set('name', 'p');
	testLayer1.setZIndex(1);
	
	var testLayer2 = new ol.layer.Tile({
		source: new ol.source.TileWMS({
			url: 'http://hygis-server.southeastasia.cloudapp.azure.com:8080/geoserver/SRA2017_04/wms',
			params: {'LAYERS': 'SRA2017_04:DSI_1995index', 'TILED': true},
			serverType: 'geoserver'
		})
	})
	testLayer2.set('name', 'p');
	var testLayer3 = new ol.layer.Tile({
		source: new ol.source.TileWMS({
			url: 'http://hygis-server.southeastasia.cloudapp.azure.com:8080/geoserver/SRA2017_04/wms',
			params: {'LAYERS': 'SRA2017_04:DSI_2005index', 'TILED': true},
			serverType: 'geoserver'
		})
	})
	testLayer3.set('name', 'p');
	var testLayer4 = new ol.layer.Tile({
		source: new ol.source.TileWMS({
			url: 'http://hygis-server.southeastasia.cloudapp.azure.com:8080/geoserver/SRA2017_04/wms',
			params: {'LAYERS': 'SRA2017_04:DSI_2015index', 'TILED': true},
			serverType: 'geoserver'
		})
	})
	testLayer4.set('name', 'p');
	// 행정구역 끝
	
	// 표준유역
	var hangUrl = 'http://hygis-server.southeastasia.cloudapp.azure.com:8080/geoserver/SRA2017_05/wms';
	var hang1 = new ol.layer.Tile({
		source: new ol.source.TileWMS({
			url: hangUrl,
			params: {'LAYERS': 'SRA2017_05:DSI_distrct_1985', 'TILED': true},
			serverType: 'geoserver'
		})
	})
	hang1.set('name', 'h');
	
	hang1.setZIndex(1);
	var hang2 = new ol.layer.Tile({
		source: new ol.source.TileWMS({
			url: hangUrl,
			params: {'LAYERS': 'SRA2017_05:DSI_distrct_1995', 'TILED': true},
			serverType: 'geoserver'
		})
	})
	hang2.set('name', 'h');
	var hang3 = new ol.layer.Tile({
		source: new ol.source.TileWMS({
			url: hangUrl,
			params: {'LAYERS': 'SRA2017_05:DSI_distrct_2005', 'TILED': true},
			serverType: 'geoserver'
		})
	})
	hang3.set('name', 'h');
	var hang4 = new ol.layer.Tile({
		source: new ol.source.TileWMS({
			url: hangUrl,
			params: {'LAYERS': 'SRA2017_05:DSI_distrct_2015', 'TILED': true},
			serverType: 'geoserver'
		})
	})
	hang4.set('name', 'h');
	// 표준유역 끝
	
	var testLayer6 = new ol.layer.Tile({
		source: new ol.source.TileWMS({
			url: 'http://hygis-server.southeastasia.cloudapp.azure.com:8080/geoserver/SRA2017_SCEN_03/wms',
			params: {'LAYERS': 'SRA2017_SCEN_03:w_frst_ITRF_50만', 'TILED': true},
			serverType: 'geoserver'
		})
	})
	testLayer6.setZIndex(999);
	var testLayer5 = new ol.layer.Tile({
		source: new ol.source.TileWMS({
			url: 'http://hygis-server.southeastasia.cloudapp.azure.com:8080/geoserver/SRA2017_SCEN_03/wms',
			params: {'LAYERS': 'SRA2017_SCEN_03:w_natl_ITRF_50만', 'TILED': true},
			serverType: 'geoserver'
		})
	})
	testLayer5.setZIndex(999);
	var testLayer7 = new ol.layer.Tile({
		source: new ol.source.TileWMS({
			url: 'http://hygis-server.southeastasia.cloudapp.azure.com:8080/geoserver/SRA2017_SCEN_03/wms',
			params: {'LAYERS': 'SRA2017_SCEN_03:w_scnd_ITRF_50만', 'TILED': true},
			serverType: 'geoserver'
		})
	})
	testLayer7.setZIndex(999);
	
	testLayer5.setVisible(true);
	testLayer6.setVisible(false);
	testLayer7.setVisible(false);
	
	hang1.setVisible(false);
	hang2.setVisible(false);
	hang3.setVisible(false);
	hang4.setVisible(false);
	/*var testLayer = new ol.layer.Image({
		source: new ol.source.ImageWMS({
			url: 'http://hygis-server.southeastasia.cloudapp.azure.com:8080/geoserver/SRA2017_00/wms',
			params: {'LAYERS': 'SRA2017_00:1985s_19761985'},
			ratio: 1,
			serverType: 'geoserver'
		})
	})*/
	
	/*$('.imgs').click(function(){
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
	})*/
	
	//var layerArr = [googleLayer1, testLayer1,testLayer5,testLayer6, testLayer7];
	
	var view = new ol.View({
		center: center,
		zoom: 7
	});
	
	var map1 = new ol.Map({
		target: 'map1',
		//layers: layerArr,
		layers: [googleLayer1, testLayer1,hang1,testLayer5,testLayer6, testLayer7],
		view: view
	});
	
	var map2 = new ol.Map({
		target: 'map2',
		layers: [googleLayer2, testLayer2,hang2,testLayer5,testLayer6, testLayer7],
		view: view
	});

	var map3 = new ol.Map({
		target: 'map3',
		layers: [googleLayer3, testLayer3,hang3,testLayer5,testLayer6, testLayer7],
		view: view
	});

	var map4 = new ol.Map({
		target: 'map4',
		layers: [googleLayer4, testLayer4,hang4,testLayer5,testLayer6, testLayer7],
		view: view
	});
	

	
	var map5 = new ol.Map({
		target: 'map5',
		layers: [googleLayer4, testLayer4,hang4,testLayer5,testLayer6, testLayer7],
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
	
	
	
	
	var countChecked = function() {
		var thisId = $(this).val();
		
		if($(this).is(":checked")){
			
			if(thisId == "country"){
				testLayer5.setVisible(true);
			}else if(thisId == "local"){
				testLayer6.setVisible(true);
			}else{
				testLayer7.setVisible(true);
			}

		}else{
			if(thisId == "country"){
				testLayer5.setVisible(false);
			}else if(thisId == "local"){
				testLayer6.setVisible(false);
			}else{
				testLayer7.setVisible(false);
			}
		}
		
	};
	
	$('#pp').click(function(){
		
		$(this).css({'background-color':'gray','color':'#fff'});
		$('#hh').css({'background-color':'lightgray','color':'#000'});
		map1.getLayers().forEach(function (layer) {
			layerVisible(layer, "pp");
		});
		map2.getLayers().forEach(function (layer) {
			layerVisible(layer, "pp");
		});
		map3.getLayers().forEach(function (layer) {
			layerVisible(layer, "pp");
		});
		map4.getLayers().forEach(function (layer) {
			layerVisible(layer, "pp");
		});
	})
	$('#hh').click(function(){
		
		$(this).css({'background-color':'gray','color':'#fff'});
		$('#pp').css({'background-color':'lightgray','color':'#000'});
		map1.getLayers().forEach(function (layer) {
			layerVisible(layer, "hh");
		});
		map2.getLayers().forEach(function (layer) {
			layerVisible(layer, "hh");
		});
		map3.getLayers().forEach(function (layer) {
			layerVisible(layer, "hh");
		});
		map4.getLayers().forEach(function (layer) {
			layerVisible(layer, "hh");
		});
	})
	
	function layerVisible(layer, btnId) {
		if(btnId == "pp") {
			if(layer.get('name')=='p'){
				layer.setVisible(true);
			} else if(layer.get('name')=='h'){
				layer.setVisible(false);
			}
		} else if(btnId == "hh") {
			if(layer.get('name')=='p'){
				layer.setVisible(false);
			} else if(layer.get('name')=='h'){
				layer.setVisible(true);
			}
		}

	}
	
	
	