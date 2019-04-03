	
	var outputUrl = "http://hygis-server.southeastasia.cloudapp.azure.com:8080/geoserver/SRA2017_Aug/wms";
	
	var city = new OpenLayers.Layer.WMS("도시",
		outputUrl,
		{
			layers: 'City',
			transparent:'TRUE',format:'image/png'
		});
	city.setZIndex(999);
	
	var DMZ = new OpenLayers.Layer.WMS("DMZ",
		outputUrl,
		{
			layers: 'DMZ',
			transparent:'TRUE',format:'image/png'
		});
	DMZ.setZIndex(999);
	
	var Do_Label = new OpenLayers.Layer.WMS("도라벨",
		outputUrl,
		{
			layers: 'Do_Label',
			transparent:'TRUE',format:'image/png'
		});
	Do_Label.setZIndex(999);
	
	var River_Label = new OpenLayers.Layer.WMS("강_라벨",
		outputUrl,
		{
			layers: 'River_Label',
			transparent:'TRUE',format:'image/png'
		});
	River_Label.setZIndex(999);
	
	var River_tm_polygon = new OpenLayers.Layer.WMS("강_tm_polygon",
		outputUrl,
		{
			layers: 'River_tm_polygon',
			transparent:'TRUE',format:'image/png'
		});
	River_tm_polygon.setZIndex(999);
	
	var Zone_Admin = new OpenLayers.Layer.WMS("행정경계면",
		outputUrl,
		{
			layers: 'Zone_Admin',
			transparent:'TRUE',format:'image/png'
		});
	Zone_Admin.setZIndex(999);
	
	var Zone_Admin_polygon = new OpenLayers.Layer.WMS("행정경계면_polygon",
		outputUrl,
		{
			layers: 'Zone_Admin_polygon',
			transparent:'TRUE',format:'image/png'
		});
	Zone_Admin_polygon.setZIndex(999);
	
	
	city.setVisibility(false);
	DMZ.setVisibility(false);
	Do_Label.setVisibility(false);
	River_Label.setVisibility(false);
	River_tm_polygon.setVisibility(false);
	Zone_Admin.setVisibility(false);
	Zone_Admin_polygon.setVisibility(false);
	map.addLayers([city,DMZ,Do_Label,River_Label,River_tm_polygon,Zone_Admin,Zone_Admin_polygon]);
	
	
	var S_City = new OpenLayers.Layer.WMS("소도시",
		outputUrl,
		{
			layers: 'S_City',
			transparent:'TRUE',format:'image/png'
		});
	S_City.setZIndex(999);
	
	var rake = new OpenLayers.Layer.WMS("호수",
		outputUrl,
		{
			layers: 'rake',
			transparent:'TRUE',format:'image/png'
		});
	rake.setZIndex(999);
	
	var river_tm_arc = new OpenLayers.Layer.WMS("하천tm_arc",
		outputUrl,
		{
			layers: 'river_tm_arc',
			transparent:'TRUE',format:'image/png'
		});
	river_tm_arc.setZIndex(999);
	
	var reservoir_1 = new OpenLayers.Layer.WMS("저수지1",
		outputUrl,
		{
			layers: 'reservoir_1',
			transparent:'TRUE',format:'image/png'
		});
	reservoir_1.setZIndex(999);
	
	
	S_City.setVisibility(false);
	rake.setVisibility(false);
	river_tm_arc.setVisibility(false);
	reservoir_1.setVisibility(false);
	map.addLayers([S_City,rake,river_tm_arc,reservoir_1]);
	
	
	var outflow = new OpenLayers.Layer.WMS("유출계수",
		outputUrl,
		{
			layers: 'outflow',
			transparent:'TRUE',format:'image/png'
		});
	outflow.setZIndex(999);
	
	var outflow_polygon = new OpenLayers.Layer.WMS("유출계수_polygon",
		outputUrl,
		{
			layers: 'outflow_polygon',
			transparent:'TRUE',format:'image/png'
		});
	outflow_polygon.setZIndex(999);
	
	outflow.setVisibility(false);
	outflow_polygon.setVisibility(false);
	map.addLayers([outflow,outflow_polygon]);
	
	
	var Hydro_polygon = new OpenLayers.Layer.WMS("수문지리_polygon",
		outputUrl,
		{
			layers: 'Hydro_polygon',
			transparent:'TRUE',format:'image/png'
		});
	Hydro_polygon.setZIndex(999);
	
	var Label = new OpenLayers.Layer.WMS("라벨",
		outputUrl,
		{
			layers: 'Label',
			transparent:'TRUE',format:'image/png'
		});
	Label.setZIndex(999);
	
	var Label2 = new OpenLayers.Layer.WMS("라벨2",
		outputUrl,
		{
			layers: 'Label2',
			transparent:'TRUE',format:'image/png'
		});
	Label2.setZIndex(999);
	
	Hydro_polygon.setVisibility(false);
	Label.setVisibility(false);
	Label2.setVisibility(false);
	map.addLayers([Hydro_polygon,Label,Label2]);
	
	
	var Hydro_Point = new OpenLayers.Layer.WMS("수문관측지점",
		outputUrl,
		{
			layers: 'Hydro_Point',
			transparent:'TRUE',format:'image/png'
		});
	Hydro_Point.setZIndex(999);
	
	Hydro_Point.setVisibility(false);
	map.addLayers([Hydro_Point]);
	
	var Rainfall = new OpenLayers.Layer.WMS("우량관측소",
		outputUrl,
		{
			layers: 'Rainfall',
			transparent:'TRUE',format:'image/png'
		});
	Rainfall.setZIndex(999);
	
	Rainfall.setVisibility(false);
	map.addLayers([Rainfall]);
	
	
	var thiessennetwork = new OpenLayers.Layer.WMS("thiessennetwork",
		outputUrl,
		{
			layers: 'thiessennetwork',
			transparent:'TRUE',format:'image/png'
		});
	thiessennetwork.setZIndex(999);
	
	thiessennetwork.setVisibility(false);
	map.addLayers([thiessennetwork]);
	
	
	
	var countChecked = function() {
		
		var layerName = $(this).val();
		
		if($(this).is(":checked")){
			
			
			if(layerName == "m01"){
				
				city.setVisibility(true);
				DMZ.setVisibility(true);
				Do_Label.setVisibility(true);
				River_Label.setVisibility(true);
				River_tm_polygon.setVisibility(true);
				Zone_Admin.setVisibility(true);
				Zone_Admin_polygon.setVisibility(true);
			} else if(layerName == "m02") {
				
				S_City.setVisibility(true);
				rake.setVisibility(true);
				river_tm_arc.setVisibility(true);
				reservoir_1.setVisibility(true);
			} else if(layerName == "m03") {
				
				outflow.setVisibility(true);
				outflow_polygon.setVisibility(true);
			} else if(layerName == "m04") {
				
				Hydro_polygon.setVisibility(true);
				Label.setVisibility(true);
				Label2.setVisibility(true);
			} else if(layerName == "m05") {
				
				Hydro_Point.setVisibility(true);
			} else if(layerName == "m06") {
				
				Rainfall.setVisibility(true);
			} else if(layerName == "m07") {
				
				thiessennetwork.setVisibility(true);
			}
			
		}else{
			
			if(layerName == "m01"){
				
				city.setVisibility(false);
				DMZ.setVisibility(false);
				Do_Label.setVisibility(false);
				River_Label.setVisibility(false);
				River_tm_polygon.setVisibility(false);
				Zone_Admin.setVisibility(false);
				Zone_Admin_polygon.setVisibility(false);
			} else if(layerName == "m02") {
				
				S_City.setVisibility(false);
				rake.setVisibility(false);
				river_tm_arc.setVisibility(false);
				reservoir_1.setVisibility(false);
			} else if(layerName == "m03") {
				
				outflow.setVisibility(false);
				outflow_polygon.setVisibility(false);
			} else if(layerName == "m04") {
				
				Hydro_polygon.setVisibility(false);
				Label.setVisibility(false);
				Label2.setVisibility(false);
			}  else if(layerName == "m05") {
				
				Hydro_Point.setVisibility(false);
			} else if(layerName == "m06") {
				
				Rainfall.setVisibility(false);
			} else if(layerName == "m07") {
				
				thiessennetwork.setVisibility(false);
			}
		}
	};
	
	$( "input[type=checkbox]" ).on( "click", countChecked );
	
	
	

	
	
	
	
	
