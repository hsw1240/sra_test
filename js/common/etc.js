var Z_SOP_BND_SIDO_PG = new OpenLayers.Layer.WMS("행정구역도(시도)",
	'http://1.227.166.166:9133/geoserver/geogrid/wms'

	,{	layers: '시도경계'

		, transparent:'TRUE',format:'image/png'
	}

	);
Z_SOP_BND_SIDO_PG.setZIndex(999);
map.addLayer(Z_SOP_BND_SIDO_PG);
Z_SOP_BND_SIDO_PG.setVisibility(true);



var Z_SOP_BND_SIGUNGU_PG = new OpenLayers.Layer.WMS("행정구역도(시군구)",
	'http://1.227.166.166:9133/geoserver/geogrid/wms'

	,{	layers: '시군구경계'

		, transparent:'TRUE',format:'image/png'
	}

	);
Z_SOP_BND_SIGUNGU_PG.setZIndex(999);
map.addLayer(Z_SOP_BND_SIGUNGU_PG);
Z_SOP_BND_SIGUNGU_PG.setVisibility(false);

var Z_SOP_BND_ADM_DONG_PG = new OpenLayers.Layer.WMS("행정구역도(동)",
	'http://1.227.166.166:9133/geoserver/geogrid/wms'

	,{	layers: '읍면동경계'

		, transparent:'TRUE',format:'image/png'
	}

	);
Z_SOP_BND_ADM_DONG_PG.setZIndex(999);
map.addLayer(Z_SOP_BND_ADM_DONG_PG);
Z_SOP_BND_ADM_DONG_PG.setVisibility(false);

var Z_RIMGIS_WKMNRIV_G = new OpenLayers.Layer.WMS("하천정보(국가하천)",
	'http://1.227.166.166:9133/geoserver/geogrid/wms'

	,{	layers: 'Z_RIMGIS_WKMNRIV_G'

		, transparent:'TRUE',format:'image/png'
	}

	);
Z_RIMGIS_WKMNRIV_G.setZIndex(999);
map.addLayer(Z_RIMGIS_WKMNRIV_G);
Z_RIMGIS_WKMNRIV_G.setVisibility(false);

var Z_RIMGIS_WKML1RIV_G = new OpenLayers.Layer.WMS("하천정보(지방1급하천)",
	'http://1.227.166.166:9133/geoserver/geogrid/wms'

	,{	layers: 'Z_RIMGIS_WKML1RIV_G'

		, transparent:'TRUE',format:'image/png'
	}

	);
Z_RIMGIS_WKML1RIV_G.setZIndex(999);
map.addLayer(Z_RIMGIS_WKML1RIV_G);
Z_RIMGIS_WKML1RIV_G.setVisibility(false);

var Z_RIMGIS_WKML2RIV_G = new OpenLayers.Layer.WMS("하천정보(지방2급하천)",
	'http://1.227.166.166:9133/geoserver/geogrid/wms'

	,{	layers: 'Z_RIMGIS_WKML2RIV_G'

		, transparent:'TRUE',format:'image/png'
	}

	);
Z_RIMGIS_WKML2RIV_G.setZIndex(999);
map.addLayer(Z_RIMGIS_WKML2RIV_G);
Z_RIMGIS_WKML2RIV_G.setVisibility(false);

var W_FRST = new OpenLayers.Layer.WMS("하천정보(하천망도, 국가하천)",
	'http://1.227.166.166:9133/geoserver/geogrid/wms'

	,{	layers: 'W_FRST'

		, transparent:'TRUE',format:'image/png'
	}

	);
W_FRST.setZIndex(999);
map.addLayer(W_FRST);
W_FRST.setVisibility(false);

var W_NATL = new OpenLayers.Layer.WMS("하천정보(하천망도, 구지방1급하천)",
	'http://1.227.166.166:9133/geoserver/geogrid/wms'

	,{	layers: 'W_NATL'

		, transparent:'TRUE',format:'image/png'
	}

	);
W_NATL.setZIndex(999);
map.addLayer(W_NATL);
W_NATL.setVisibility(false);

var W_SCND = new OpenLayers.Layer.WMS("하천정보(하천망도, 구지방2급하천)",
	'http://1.227.166.166:9133/geoserver/geogrid/wms'

	,{	layers: 'W_SCND'

		, transparent:'TRUE',format:'image/png'
	}

	);
W_SCND.setZIndex(999);
map.addLayer(W_SCND);
W_SCND.setVisibility(false);

var Z_WEIS_DMOBSIF = new OpenLayers.Layer.WMS("수문시설물(댐관측소)",
	'http://1.227.166.166:9133/geoserver/geogrid/wms'

	,{	layers: 'Z_WEIS_DMOBSIF'

		, transparent:'TRUE',format:'image/png'
	}

	);
Z_WEIS_DMOBSIF.setZIndex(999);
map.addLayer(Z_WEIS_DMOBSIF);
Z_WEIS_DMOBSIF.setVisibility(false);

var Z_WEIS_WLOBSIF = new OpenLayers.Layer.WMS("수문시설물(수위관측소)",
	'http://1.227.166.166:9133/geoserver/geogrid/wms'

	,{	layers: 'Z_WEIS_WLOBSIF'

		, transparent:'TRUE',format:'image/png'
	}

	);
Z_WEIS_WLOBSIF.setZIndex(999);
map.addLayer(Z_WEIS_WLOBSIF);
Z_WEIS_WLOBSIF.setVisibility(false);

var Z_WEIS_RFOBSIF = new OpenLayers.Layer.WMS("수문시설물(우량관측소)",
	'http://1.227.166.166:9133/geoserver/geogrid/wms'

	,{	layers: 'Z_WEIS_RFOBSIF'

		, transparent:'TRUE',format:'image/png'
	}

	);
Z_WEIS_RFOBSIF.setZIndex(999);
map.addLayer(Z_WEIS_RFOBSIF);
Z_WEIS_RFOBSIF.setVisibility(false);

var WKMBBSN = new OpenLayers.Layer.WMS("하천유역(수자원단위지도, 대권역)",
	'http://1.227.166.166:9133/geoserver/geogrid/wms'

	,{	layers: 'WKMBBSN'

		, transparent:'TRUE',format:'image/png'
	}

	);
WKMBBSN.setZIndex(999);
map.addLayer(WKMBBSN);
WKMBBSN.setVisibility(false);

var WKMMBSN = new OpenLayers.Layer.WMS("하천유역(수자원단위지도, 중권역)",
	'http://1.227.166.166:9133/geoserver/geogrid/wms'

	,{	layers: 'WKMMBSN'

		, transparent:'TRUE',format:'image/png'
	}

	);
WKMMBSN.setZIndex(999);
map.addLayer(WKMMBSN);
WKMMBSN.setVisibility(false);

var WKMSBSN = new OpenLayers.Layer.WMS("하천유역(수자원단위지도, 표준유역)",
	'http://1.227.166.166:9133/geoserver/geogrid/wms'

	,{	layers: 'WKMSBSN'

		, transparent:'TRUE',format:'image/png'
	}

	);
WKMSBSN.setZIndex(999);
map.addLayer(WKMSBSN);
WKMSBSN.setVisibility(false);

var Z_RIMS_RESERV_BORDER = new OpenLayers.Layer.WMS("저수지 경계선",
	'http://1.227.166.166:9133/geoserver/geogrid/wms'

	,{	layers: 'Z_RIMS_RESERV_BORDER'

		, transparent:'TRUE',format:'image/png'
	}

	);
Z_RIMS_RESERV_BORDER.setZIndex(999);
map.addLayer(Z_RIMS_RESERV_BORDER);
Z_RIMS_RESERV_BORDER.setVisibility(false);

var Z_RIMS_RESERV_LOC = new OpenLayers.Layer.WMS("저수지 위치",
	'http://1.227.166.166:9133/geoserver/geogrid/wms'

	,{	layers: 'Z_RIMS_RESERV_LOC'

		, transparent:'TRUE',format:'image/png'
	}

	);
Z_RIMS_RESERV_LOC.setZIndex(999);
map.addLayer(Z_RIMS_RESERV_LOC);
Z_RIMS_RESERV_LOC.setVisibility(false);

var EKR_FI_RESERVOIR_PT = new OpenLayers.Layer.WMS("농업기반시설 기반물 저수지 포인트",
	'http://1.227.166.166:9133/geoserver/geogrid/wms'

	,{	layers: 'EKR_FI_RESERVOIR_PT'

		, transparent:'TRUE',format:'image/png'
	}

	);
EKR_FI_RESERVOIR_PT.setZIndex(999);
map.addLayer(EKR_FI_RESERVOIR_PT);
EKR_FI_RESERVOIR_PT.setVisibility(false);