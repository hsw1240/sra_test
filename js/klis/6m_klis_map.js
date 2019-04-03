
	
	$("input[name$='yyyy1']").val(2017);
	$("input[name$='mm1']").val("05");
	$("input[name$='dd1']").val("01");
	
	$("input[name$='yyyy2']").val(2017);
	$("input[name$='mm2']").val("09");
	$("input[name$='dd2']").val(10);
	
	$("#datepicker1").datepicker({
		showOn: "both", 
		buttonImage: "new/img/calendar.png", 
		buttonImageOnly: true,
		dateFormat: 'yy-mm-dd',
		onSelect: function(dateText, inst) {
			$("#date1").val(dateText);
			var yymmdd = dateText.split("-")
			$("input[name$='yyyy1']").val(yymmdd[0]);
			$("input[name$='mm1']").val(yymmdd[1]);
			$("input[name$='dd1']").val(yymmdd[2]);
		}
	});
	$("#datepicker2").datepicker({
		showOn: "both", 
		buttonImage: "new/img/calendar.png", 
		buttonImageOnly: true,
		dateFormat: 'yy-mm-dd',
		onSelect: function(dateText, inst) {
			$("#date2").val(dateText);
			var yymmdd = dateText.split("-")
			$("input[name$='yyyy2']").val(yymmdd[0]);
			$("input[name$='mm2']").val(yymmdd[1]);
			$("input[name$='dd2']").val(yymmdd[2]);
		}
	});

	
	// 1번째 탭(광역) 첫번째 라디오버튼 이벤트
	$('input:radio[name=chk_name1]').change(function() {

        if (this.value == 'bum') {
			console.log("1");
			//$('#ol2_map1').toggle();
			stopImg();
			startLoop("tt");
            //chkRadio = this.value;
        } else if (this.value == 'sr') {
            console.log("2");
			stopImg();
			startLoop("jj");
        } else if (this.value == 'gc') {
			return false;
		}
		//$("#"+chkRadio).show();
    });

	// 4번째 탭(기타) 라디오버튼 show hide
	$('input:radio[name=chk_name4]').change(function() {
		var chkname4 = this.value;
		//console.log(chkname4);
		$('#etc > div').hide();
		$("#"+chkname4).show();
		
		if (chkname4 == "etc1") {
			$(".targetMap").hide();
			$('#ol2_map3').show();
			droughtWms.setVisibility(true);
			floodWms.setVisibility(false);
		} else if (chkname4 == "etc2") {
			$(".targetMap").hide();
			$('#ol2_map3').show();
			droughtWms.setVisibility(false);
			floodWms.setVisibility(true);
		} else if (chkname4 == "etc3") {
			$(".targetMap").hide();
			$('#ol2_map4').show();
		}
    });
	

	
	$("#stopBtn").click(function(){
		stopImg();
	})
	
	// 3번째 탭(기타) 라디오버튼 이벤트
	$("input[name=chk_name3]").change(function() {
		var radioValue = $(this).val();
		if (radioValue == "gl") {
			console.log("global");
		} else if (radioValue == "ga") {
			console.log("ga");
		} else if (radioValue == "ja") {
			console.log("ja");
			// 맵 ol3으로 변경 show hide (클러스터는 기존대로 map2에 보여주기)
		}
	});

	
	$('#dateBtId').click(function(){
		//$('#ol2_map1').css('z-index','999');
		//$('#ol2_map2').css('z-index','900');
		$('#ol2_map1').show();
		$('#ol2_map2').hide();
	})
	$('#dateBtId2').click(function(){
		//$('#ol2_map2').css('z-index','999');
		//$('#ol2_map1').css('z-index','900');
		$('#ol2_map2').show();
		$('#ol2_map1').hide();
	})
	
	var map1,map2,map3;

	map1 = new OpenLayers.Map('map', {
		projection: 'EPSG:3857',
		layers: [
		new OpenLayers.Layer.Google(
				"Google Satellite",
				{type: google.maps.MapTypeId.SATELLITE, numZoomLevels: 22}
			),
			new OpenLayers.Layer.Google(
				"Google Hybrid",
				{type: google.maps.MapTypeId.HYBRID, numZoomLevels: 20}
			),
			new OpenLayers.Layer.Google(
				"Google Physical",
				{type: google.maps.MapTypeId.TERRAIN}
			),
			new OpenLayers.Layer.Google(
				"Google Streets", // the default
				{numZoomLevels: 20}
			)
			
		],
		center: new OpenLayers.LonLat(14201170.936302,4753221.4290233),
			// Google.v3 uses web mercator as projection, so we have to
			// transform our coordinates
			//.transform('EPSG:4326', 'EPSG:900913'),
		zoom: 6
	});

	
	map1.addControl(new OpenLayers.Control.LayerSwitcher());
	
	var map1ToUrl = "http://hygis-server.southeastasia.cloudapp.azure.com:8080/geoserver/SRA2017_SEP_D01/wms";
	var map1To = new OpenLayers.Layer.WMS(
		"토양수분",
		map1ToUrl,
		{layers: '20170501'
		, transparent:'TRUE',format:'image/png'}
	);
	map1To.setVisibility(true);
	//map1.addLayer(map1To);
	
	map2 = new OpenLayers.Map('ol2_map3', {
		projection: 'EPSG:3857',
		layers: [
			new OpenLayers.Layer.Google(
				"Google Hybrid",
				{type: google.maps.MapTypeId.HYBRID, numZoomLevels: 20}
			),
			new OpenLayers.Layer.Google(
				"Google Streets", // the default
				{numZoomLevels: 20}
			),
			
			new OpenLayers.Layer.Google(
				"Google Physical",
				{type: google.maps.MapTypeId.TERRAIN}
			),
			new OpenLayers.Layer.Google(
				"Google Satellite",
				{type: google.maps.MapTypeId.SATELLITE, numZoomLevels: 22}
			)
		],
		center: new OpenLayers.LonLat(13841611.155299,6010457.6700827),
			// Google.v3 uses web mercator as projection, so we have to
			// transform our coordinates
			//.transform('EPSG:4326', 'EPSG:900913'),
		zoom: 3
	});

	
	map2.addControl(new OpenLayers.Control.LayerSwitcher());
	