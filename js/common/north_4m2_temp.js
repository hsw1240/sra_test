/*var group01 = new OpenLayers.Layer.WMS("시도경계",
	'http://1.227.166.166:9133/geoserver/SRA2018_06/wms'

	,{	layers: 'SRA2018_06:group01'

		, transparent:'TRUE',format:'image/png'
	}

	);
group01.setZIndex(999);
map.addLayer(group01);
group01.setVisibility(false);

var Zone_Admin_polygon = new OpenLayers.Layer.WMS("시군구경계",
	'http://1.227.166.166:9133/geoserver/SRA2018_06/wms'

	,{	layers: 'SRA2018_06:Zone_Admin_polygon'

		, transparent:'TRUE',format:'image/png'
	}

	);
Zone_Admin_polygon.setZIndex(999);
map.addLayer(Zone_Admin_polygon);
Zone_Admin_polygon.setVisibility(false);

var S_City = new OpenLayers.Layer.WMS("주요도시",
	'http://1.227.166.166:9133/geoserver/SRA2018_06/wms'

	,{	layers: 'SRA2018_06:S_City'

		, transparent:'TRUE',format:'image/png'
	}

	);
S_City.setZIndex(999);
map.addLayer(S_City);
S_City.setVisibility(false);
*/


var zone_admin = new OpenLayers.Layer.WMS("행정경계",
	'http://1.227.166.166:9133/geoserver/SRA2018_06/wms'

	,{	layers: 'SRA2018_06:zone_admin'

		, transparent:'TRUE',format:'image/png'
	}

	);
zone_admin.setZIndex(999);
map.addLayer(zone_admin);
zone_admin.setVisibility(false);


var Basin_tm_polygon_1 = new OpenLayers.Layer.WMS("대권역",
	'http://1.227.166.166:9133/geoserver/SRA2018_06/wms'

	,{	layers: 'SRA2018_06:Basin_tm_polygon_1'

		, transparent:'TRUE',format:'image/png'
	}

	);
Basin_tm_polygon_1.setZIndex(999);
map.addLayer(Basin_tm_polygon_1);
Basin_tm_polygon_1.setVisibility(true);


var Basin_tm_polygon_M = new OpenLayers.Layer.WMS("중권역",
	'http://1.227.166.166:9133/geoserver/SRA2018_06/wms'

	,{	layers: 'SRA2018_06:Basin_tm_polygon_M'

		, transparent:'TRUE',format:'image/png'
	}

	);
Basin_tm_polygon_M.setZIndex(999);
map.addLayer(Basin_tm_polygon_M);
Basin_tm_polygon_M.setVisibility(false);

/*
var hydrogeo_point = new OpenLayers.Layer.WMS("수문관측지점",
	'http://1.227.166.166:9133/geoserver/SRA2018_06/wms'

	,{	layers: 'SRA2018_06:hydrogeo_point'

		, transparent:'TRUE',format:'image/png'
	}

	);
hydrogeo_point.setZIndex(999);
map.addLayer(hydrogeo_point);
hydrogeo_point.setVisibility(false);

var rainfall_point = new OpenLayers.Layer.WMS("우량관측소",
	'http://1.227.166.166:9133/geoserver/SRA2018_06/wms'

	,{	layers: 'SRA2018_06:rainfall_point'

		, transparent:'TRUE',format:'image/png'
	}

	);
rainfall_point.setZIndex(999);
map.addLayer(rainfall_point);
rainfall_point.setVisibility(false);

*/

var hydro_rainfall = new OpenLayers.Layer.WMS("관측소",
	'http://1.227.166.166:9133/geoserver/SRA2018_06/wms'

	,{	layers: 'SRA2018_06:hydro_rainfall'

		, transparent:'TRUE',format:'image/png'
	}

	);
hydro_rainfall.setZIndex(999);
map.addLayer(hydro_rainfall);
hydro_rainfall.setVisibility(false);


var group02 = new OpenLayers.Layer.WMS("하천호수",
	'http://1.227.166.166:9133/geoserver/SRA2018_06/wms'

	,{	layers: 'SRA2018_06:group02'

		, transparent:'TRUE',format:'image/png'
	}

	);
group02.setZIndex(999);
map.addLayer(group02);
group02.setVisibility(false);

/*var H_HT_River = new OpenLayers.Layer.WMS("황강_한탄강 하천",
	'http://1.227.166.166:9133/geoserver/SRA2018_06/wms'

	,{	layers: 'SRA2018_06:H_HT_River'

		, transparent:'TRUE',format:'image/png'
	}

	);
H_HT_River.setZIndex(999);
map.addLayer(H_HT_River);
H_HT_River.setVisibility(false);*/

var River_tm_polygon = new OpenLayers.Layer.WMS("국가하천",
	'http://1.227.166.166:9133/geoserver/SRA2018_06/wms'

	,{	layers: 'SRA2018_06:River_tm_polygon'

		, transparent:'TRUE',format:'image/png'
	}

	);
River_tm_polygon.setZIndex(999);
map.addLayer(River_tm_polygon);
River_tm_polygon.setVisibility(true);

var main_station = new OpenLayers.Layer.WMS("주요관측지점",
	'http://1.227.166.166:9133/geoserver/SRA2018_06/wms'

	,{	layers: 'SRA2018_06:main_station'

		, transparent:'TRUE',format:'image/png'
	}

	);
main_station.setZIndex(999);
map.addLayer(main_station);
main_station.setVisibility(false);






