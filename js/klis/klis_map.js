$(function () {
	
    $(".tab_content").hide();
    $(".tab_content:eq(0)").show();

    $("ul.tabs li").click(function () {
        $("ul.tabs li").removeClass("active").css("color", "#333");
        //$(this).addClass("active").css({"color": "darkred","font-weight": "bolder"});
        $(this).addClass("active").css("color", "darkred");
        $(".tab_content").hide();
		$(".targetMap").hide();
        var activeTab = $(this).attr("rel");
		//console.log(activeTab);
		if(activeTab == 'tab1') {
			console.log("tab1");
			$('#leftTab2').show();
			$('#etc').hide();
			$('#ol2_map1').show();
		} else if(activeTab == 'tab2') {
			console.log("tab2");
			$('#leftTab2').show();
			$('#etc').hide();
			$('#ol2_map2').show();
		} else if(activeTab == 'tab4') {
			console.log("tab4");
			$('#leftTab2').toggle();
			$('#etc').toggle();
			$('#ol2_map3').show();
			$("input:radio[name='chk_name4']").eq(0).prop('checked', true);
			droughtWms.setVisibility(true);
			floodWms.setVisibility(false);
		}
		/*if(activeTab == 'tab4') {
			$('#leftTab2').toggle();
			$('#etc').toggle();
		} else {
			$('#leftTab2').show();
			$('#etc').hide();
		}*/
        $("#" + activeTab).fadeIn();
    });
	
	
	// 속성보기, 검색결과 
	$(".tab_content2").hide();
    $(".tab_content2:eq(0)").show();
	
	$("ul.tabs2 li").click(function () {
        $("ul.tabs2 li").removeClass("active").css("color", "#333");
        //$(this).addClass("active").css({"color": "darkred","font-weight": "bolder"});
        $(this).addClass("active").css("color", "darkred");
        $(".tab_content2").hide()
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn();
    });
	

});

	
	/*$("input[name$='yyyy1']").val(yyyy);
	$("input[name$='mm1']").val(mm);
	$("input[name$='dd1']").val(dd);

	$("input[name$='yyyy2']").val(yyyy);
	$("input[name$='mm2']").val(mm);
	$("input[name$='dd2']").val(dd);*/
	
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
	
	// 1번째 탭(광역) 첫번째 라디오버튼 show hide
	/*$('input:radio[name=chk_name1]').change(function() {
		var chkRadio;
		$("#tab1 > div:eq(0)").css('border-bottom','');
		$('#radio1 > div').hide();

        if (this.value == 'bum') {
			$('#ol2_map1').toggle();
			startLoop();
            //chkRadio = this.value;
        } else if (this.value == 'sr') {
            //chkRadio = this.value;
        } else if (this.value == 'gc') {
			chkRadio = this.value;
			//stopImg();
			$('#ol2_map1').hide();
			$('#ol2_map2').show();
			$("#tab1 > div:eq(0)").css('border-bottom','1px solid lightgray');
		}
		$("#"+chkRadio).show();
    });*/
	
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
	
	
	// 1번째 탭(광역) 두번째 라디오버튼 show hide
	/*$('input:radio[name=chk_info3]').change(function() {
		var chkinfo3 = this.value;
		console.log(chkinfo3);
		$('#tab1_1 > div').hide();
		$("#"+chkinfo3).show();
		
		if (this.value == 'tab2_gang') {
			$(".targetMap").hide();
			$('#ol2_map2').show();
        } else if (this.value == 'tab2_radar') {
            stopModis();
			stopImg();
			$(".targetMap").hide();
			$('#ol2_map3').show();
        } else if (this.value == 'tab2_aws') {
			
		}
    });*/
	
	
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
	
	
	// Create a list of day and monthnames.
	var
		weekdays = [
			"Sunday", "Monday", "Tuesday",
			"Wednesday", "Thursday", "Friday",
			"Saturday"
		],
		months = [
			"01", "02", "03",
			"04", "05", "06", "07",
			"08", "09", "10",
			"11", "12"
		];

	// Append a suffix to dates.
	// Example: 23 => 23rd, 1 => 1st.
	function nth (d) {
	  if(d>3 && d<21) return 'th';
	  switch (d % 10) {
			case 1:  return "st";
			case 2:  return "nd";
			case 3:  return "rd";
			default: return "th";
		}
	}
	
	var dateSlider = document.getElementById('slider-date');

	noUiSlider.create(dateSlider, {
	// Create two timestamps to define a range.
		range: {
			//min: timestamp('2010'),
			//max: timestamp('2016')
			min: timestamp(['2015','0','1','9']),
			max: timestamp([yyyy,mm-1,dd,'9'])
		},

	// Steps of one week
		step: 24 * 60 * 60 * 1000,
		connect: true,

	// Two more timestamps indicate the handle starting positions.
		//start: [ timestamp('2010'), timestamp('2016') ],
		//start: [ timestamp(['2015','0','1','9']), timestamp(['2015','11','31','9']) ],
		start: [ timestamp(['2015','0','1','9']), timestamp([yyyy,mm-1,dd,'9']) ],

	});

	
	
	var dateValues = [
		document.getElementById('event-start'),
		document.getElementById('event-end')
	];

	dateSlider.noUiSlider.on('update', function( values, handle ) {
		dateValues[handle].innerHTML = formatDate(new Date(+values[handle]));
	});
	
	function timestamp(str){
		//console.log(str);
		//console.log(new Date(str[0],str[1],str[2],str[3]).getTime()); 
		return new Date(str[0],str[1],str[2],str[3]).getTime();
	}
	
	// 숫자 두자리로 만들기
	function numFormat(variable)
	{
		variable = Number(variable).toString();
		if(Number(variable) < 10 && variable.length == 1)
			variable = "0" + variable;
		return variable;
	}

	// Create a string representation of the date.
	function formatDate ( date ) {
		/*return date.getDate() + nth(date.getDate()) + " " +
			months[date.getMonth()] + " " +
			date.getFullYear();*/ 
		return date.getFullYear() + "/" + months[date.getMonth()] + "/" + numFormat(date.getDate());	
	}
	
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

	map1 = new OpenLayers.Map('ol2_map1', {
		projection: 'EPSG:3857',
		layers: [
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
			),
			new OpenLayers.Layer.Google(
				"Google Satellite",
				{type: google.maps.MapTypeId.SATELLITE, numZoomLevels: 22}
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
	