var droughtWms, floodWms;

var wms1Url = "http://sedac.ciesin.columbia.edu/geoserver/wms";
	droughtWms = new OpenLayers.Layer.WMS(
		"Population Density",
		wms1Url,
		{layers: 'gpw-v3:gpw-v3-population-density_2000'
		, transparent:'TRUE',format:'image/png'}
	);
	droughtWms.setVisibility(true);
	map2.addLayer(droughtWms);
	
var wmsFlood25Url = "http://preview.grid.unep.ch/geoserver/wms";
	floodWms = new OpenLayers.Layer.WMS(
		"flood_hazard_25_yrp",
		wmsFlood25Url,
		{layers: 'GAR2015:flood_hazard_25_yrp'
		, transparent:'TRUE',format:'image/png'}
	);
	floodWms.setVisibility(true);
	map2.addLayer(floodWms);