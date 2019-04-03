/*
var count = 0;
var wmsName;
var layerArr = [];
var proxyUrl = "http://210.92.123.150/sraproxy/sraproxy.aspx?url=";
var webServiceUrl =  "http://1.227.166.166:9132/sracommon/sraservice.asmx/monitoring4mSearch?";
var code = "T0195";
var type = "CSR";
var watershed = "대권역";
var large = [["51","금야강"],["50","동해북부"],["30","청천강"],["20","압록강"],["70","임진강"],["10","두만강"],["60","북한강"],["52","동해남부"],["40","대동강"],["80","예성강"],["90","장연남대천"]];
*/


var count = 0;
var wmsName;
var layerArr = [];
var proxyUrl = "http://210.92.123.150/sraproxy/sraproxy.aspx?url=";
var webServiceUrl =  "http://1.227.166.166:9132/sracommon/sraservice.asmx/layerList?";
//var code = "T0197";
//var type = "CSR";
var workspace = "discharge-CSR-LARGE";
var yearMid = $("#year_initial").val();

loop();

function loop() {
	
	/*
	var layerArr = [];
	var layerLen = 0;
	var param = "code="+code+"&type="+type;
	var encodeUrl = encodeURIComponent(webServiceUrl + param);
	var reqUrl = proxyUrl + encodeUrl;
	*/
	
	var layerArr = [];
	var layerLen = 0;
	var param = "workspace="+workspace;
	var encodeUrl = encodeURIComponent(webServiceUrl + param);
	var reqUrl = proxyUrl + encodeUrl;
	
	var startY = $("#year_initial").val();
	var startM = $("#month_initial").val();
	var endY = 	$("#year_final").val();
	var endM = $("#month_final").val();
	
	var start = startY+startM;
	var end = endY+endM;

	// 하단 연도 콤보박스 넣기
	addSelectDateFn(startY, endY);
	//$("#selectDate").
	
	/*$.ajax({
		type: 'get',
		data: 'xml',
		async: false,
		url: reqUrl,
		success: function(xml){
			var metadata = $(xml).find('TB_MET_DAT');
			layerLen = metadata.length;
			metadata.each(function(index){
				var datId = $(this).find("DAT_ID").text();
				
				if(datId.indexOf("2") == -1) {
					return;
				}

				var fileDate = datId.substring(datId.length-6, datId.length);
					
				if(start <= fileDate && end >= fileDate){
					layerArr.push(datId);
				}

			});
		},error: function(error){
			console.log(error);
		}
	});*/
	
	$.ajax({
		type: 'get',
		data: 'xml',
		async: false,
		url: reqUrl,
		success: function(data){

			var layerList = $(data).find('string').text();
			var layers = JSON.parse(layerList);
			layerLen = layers.coverageStores.coverageStore.length;
			
			for(var i = 0; i < layerLen; i++) {
				
				layerArr.push(layers.coverageStores.coverageStore[i]);
			}

		},error: function(error){
			console.log(error);
		}
	});
	
	layerLen = layerArr.length;
	console.log(layerLen);
	console.log(layerArr);
	
	//loopFn();
	
	function loopFn() {
		//console.log(count, layerLen);
		if(count < layerLen) {
			showLayers(layerArr[count], code, type, startY, endY);
			timeId = setTimeout(loopFn, 4000);
			//console.log(count);
			count++;
		}else {
			
			count = 0;
			showLayers(layerArr[count], code, type, startY, endY);
			timeId = setTimeout(loopFn, 4000);
			//console.log(count);
			count++;
		}
	}

}

$('#dateBtId').click(function(){
	stopImg();
	count = 0;
	
	var startY = $("#year_initial").val();
	var startM = $("#month_initial").val();
	var endY = 	$("#year_final").val();
	var endM = $("#month_final").val();
	
	addSelectDateFn(startY, endY);

	/*if(startM<10){
		startM='0'+startM;
	} 
	if(endM<10){
		endM='0'+endM;
	}*/
	
	var start = startY+startM;
	var end = endY+endM;
	//console.log(start);
	//console.log(end);
	
	// 0601 중복코드 수정예정
	var layerArr = [];
	var layerLen = 0;
	var param = "code="+code+"&type="+type;
	var encodeUrl = encodeURIComponent(webServiceUrl + param);
	var reqUrl = proxyUrl + encodeUrl;
	
	$.ajax({
		type: 'get',
		data: 'xml',
		async: false,
		url: reqUrl,
		success: function(xml){
			var metadata = $(xml).find('TB_MET_DAT');
			layerLen = metadata.length;
			metadata.each(function(index){
				var datId = $(this).find("DAT_ID").text();
				
				var fileDate = datId.substring(datId.length-6, datId.length);
					
				if(start <= fileDate && end >= fileDate){
					layerArr.push(datId);
				}
				
			});
		},error: function(error){
			console.log(error);
		}
	});
	
	loopFn();
	
	// 하단 대권역 리스트
	bottomListLargeFn();
	
	function loopFn() {
		console.log(count, layerLen);
		if(count < layerLen) {
			showLayers(layerArr[count], code, type, startY, endY);
			timeId = setTimeout(loopFn, 8000);
			count++;
		}else {
			
			count = 0;
			showLayers(layerArr[count], code, type, startY, endY);
			timeId = setTimeout(loopFn, 8000);
			count++;
		}
	}

});

/*function showLayers(name, layer, type, startY, endY) {

	if(name == undefined) {
		return false;
	}
	var layerName = "";
	if(layer == "T0197") {
		layer = "TWSA_1";
		layerName = "TWSA";
	} else if (layer == "T0198") {
		layer = "TWSA_2";
		layerName = "TWSA";
	} else if (layer == "T0195") {
		layer = "TWSC_1";
		layerName = "TWSC";
	} else if (layer == "T0196") {
		layer = "TWSC_2";
		layerName = "TWSC";
	}

	var wmsUrl = "http://1.227.166.166:9133/geoserver/"+layer+"/wms";
	
	if(wmsName != undefined) {
		
		wmsName.destroy();
	}
	
	wmsName = new OpenLayers.Layer.WMS(name,
		wmsUrl,
		{
			layers: name,
			transparent: 'TRUE',
			srs: "EPSG:3857",
			format: 'image/png'
		}, {
			//projection: 'EPSG:5179',
			
			displayOutsideMaxExtent: true		
		});

	
	var dateText = name.substring(name.length-6, name.length);
	var dateTextY = dateText.substring(0,4);
	var dateTextM = dateText.substring(4,6);
	
	$("#dateTxt").text(watershed + " / " + layer + "_" +type + " /  " +dateText);
	$("#varInfo").text(layerName+"_watershed/"+type+"/"+watershed);
	$("#flow").text(dateTextY+" 유출량(대권역)");
	$("#flowInfo").text(dateTextY+" 연평균 유출량(대권역)");
	$("#flowInfo2").text(dateTextY+" 연평균 유출량(대권역)");
	
	// 2016-06
	var dateYM = dateTextY+"-"+dateTextM;
	
	// 전월
	if(parseInt(dateTextM) == 1) {
		var preYear = parseInt(dateTextY) - 1;
		var preMonth = 12;
	} else {
		var preYear = dateTextY;
		var preMonth = parseInt(dateTextM) - 1;
	}
	
	if(preMonth<10) preMonth='0'+preMonth;
	
	var preYM = preYear+"-"+preMonth;
	var preY = preYear-1+"-"+dateTextM;

	// 하단 월별,년별 차트변경
	bottomBarFn(dateYM, dateTextY, type);
	
	// 우측 패널 데이터 변경
	rightPanelFn(type, dateTextY);
	
	
	// 좌측 하단 전년,전월,금월 차트변경
	leftBottomBarFn(type, dateYM, preYM, preY);
	
	// 팝업 월평균
	monthPopupFn(type, dateYM);
	
	map.addLayer(wmsName);
	wmsName.setZIndex(1);
}*/


function showLayers(name, workspace, type, startY, endY) {
	console.log(name);

	var wmsUrl = "http://1.227.166.166:9133/geoserver/"+workspace+"/wms";
	
	if(wmsName != undefined) {
		
		wmsName.destroy();
	}
	
	wmsName = new OpenLayers.Layer.WMS(name,
		wmsUrl,
		{
			layers: name,
			transparent: 'TRUE',
			srs: "EPSG:3857",
			format: 'image/png'
		}, {
			//projection: 'EPSG:5179',
			
			displayOutsideMaxExtent: true		
		});
	
	var dateText = name.substring(0,15);
	$("#dateTxt").text(workspace + " /  " +dateText);

	
	map.addLayer(wmsName);
	wmsName.setZIndex(1);
}

function stopImg(){
	clearTimeout(timeId);
}

function stopImg2(){
	clearTimeout(timeId);
	count = 0;
}

// 하단 차트변경 Fn
function bottomBarFn(dateYM, dateTextY, station) {
	
	var webService = "http://1.227.166.166:9132/sracommon/sraservice.asmx/bottomBar?";
	var param = "dateym="+dateYM+"&datey="+dateTextY+"&station="+station;
	var encodeUrl = encodeURIComponent(webService + param);
	var reqUrl = proxyUrl + encodeUrl;
	
	var chart = $('#container').highcharts();
	
	var monthData = [];
	var yearData = [];
	
	$.ajax({
		type: 'get',
		data: 'xml',
		async: false,
		url: reqUrl,
		success: function(xml){
			//console.log(xml);
			var metadata = $(xml).find('avg');
			var layerLen = metadata.length;
			
			
			for(var i=0; i<large.length; i++) {
					
				metadata.each(function(index){
					var outflow = $(this).find("avg").text();
					var gubun = $(this).find("gubun").text();
					var idx = $(this).find("GEO_IDX").text();

					if(outflow == '') {
						outflow = 0;
					}
					
					
					if(large[i][0] == idx) {
						//console.log(idx);
						//console.log(large[i][0]);
						//console.log(large[i][1]);
						if(gubun == "year") {
							yearData.push(parseInt(outflow));
						}
						
						if (gubun == "month") {
							monthData.push(parseInt(outflow));
						}

					}
					
					/*
					if(gubun == "year") {
						
						console.log("year");
						if(large[i][0] == idx) {
							console.log(idx);
							console.log(large[i][0]);
							console.log(large[i][1]);
							yearData.push(parseInt(outflow));
						}
					}
					
					if (gubun == "month") {
						
						console.log("month");
						if(large[i][0] == idx) {
							console.log(idx);
							console.log(large[i][0]);
							console.log(large[i][1]);
							monthData.push(parseInt(outflow));
						}
					}*/


				});
			
			
			}
			
			
		},error: function(error){
			console.log(error);
		}
	});
	
	//console.log(monthData);
	//var chart = $('#container').highcharts();
	//var newData = [39.9, 51.5, 16.4, 12.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6];

	chart.setTitle({text: dateYM});
	chart.series[0].setData(monthData);
	chart.series[1].setData(yearData);
	
}

function rightPanelFn(station, year) {
	
	var webService = "http://1.227.166.166:9132/sracommon/sraservice.asmx/rightPanel?";
	var param = "station="+station+"&year="+year;
	var encodeUrl = encodeURIComponent(webService + param);
	var reqUrl = proxyUrl + encodeUrl;
	
	$.ajax({
		type: 'get',
		data: 'xml',
		async: false,
		url: reqUrl,
		success: function(xml){
			var metadata = $(xml).find('rightPanel');
			var layerLen = metadata.length;
			metadata.each(function(index){
				var idx = $(this).find("GEO_IDX").text();
				
				var avg_et = $(this).find("avg_et").text();				// 증발산량
				var avg_rainfall = $(this).find("avg_rainfall").text(); // 강우량
				var avg_outflow = $(this).find("avg_outflow").text();	// 유출량
				var avg_twsc = $(this).find("avg_twsa").text();			// 변동량
				
				if(avg_outflow.indexOf(".") != -1) {
					avg_outflow = parseFloat(avg_outflow).toFixed(2);
				}
				
				$(".outflow1").eq(index).text(avg_outflow);
				$(".outflow2").eq(index).text(avg_outflow);
				
				if(avg_rainfall.indexOf(".") != -1) {
					avg_rainfall = parseFloat(avg_rainfall).toFixed(2);
				}
				
				$(".rainfall1").eq(index).text(avg_rainfall);
				$(".rainfall2").eq(index).text(avg_rainfall);
				
				if(avg_et.indexOf(".") != -1) {
					avg_et = parseFloat(avg_et).toFixed(2);
				}
				
				$(".et1").eq(index).text(avg_et);
				$(".et2").eq(index).text(avg_et);
				
				if(avg_twsc.indexOf(".") != -1) {
					avg_twsc = parseFloat(avg_twsc).toFixed(2);
				}
				
				$(".avg_twsc1").eq(index).text(avg_twsc);
				$(".avg_twsc2").eq(index).text(avg_twsc);
				
				//toFixed(2)
				//console.log(index);
			});
		},error: function(error){
			console.log(error);
		}
	});
}

function leftBottomBarFn(station, month1, month2, year) {
	
	var webService = "http://1.227.166.166:9132/sracommon/sraservice.asmx/leftBottomBar?";
	var param = "station="+station+"&month1="+month1+"&month2="+month2+"&year="+year;
	var encodeUrl = encodeURIComponent(webService + param);
	var reqUrl = proxyUrl + encodeUrl;
	
	var chart = $('#container2').highcharts();
	
	var newData = [];
	
	$.ajax({
		type: 'get',
		data: 'xml',
		async: false,
		url: reqUrl,
		success: function(xml){
			var metadata = $(xml).find('leftBottomBar');
			var layerLen = metadata.length;
			metadata.each(function(index){
				var avgOutflow = $(this).find("avg_outflow").text();
				//console.log(avgOutflow);
				if(avgOutflow == '') {
					avgOutflow = '0';
				}
				
				
				if(avgOutflow.indexOf(".") != -1) {
					avgOutflow = parseFloat(avgOutflow).toFixed(2);
				}
				
				newData.push(parseInt(avgOutflow));
				
			});
		},error: function(error){
			console.log(error);
		}
	});
	
	chart.series[0].setData(newData);

}

function monthPopupFn(station, month) {
	
	var webService = "http://1.227.166.166:9132/sracommon/sraservice.asmx/monthPopup?";
	var param = "station="+station+"&month="+month;
	var encodeUrl = encodeURIComponent(webService + param);
	var reqUrl = proxyUrl + encodeUrl;
	
	$.ajax({
		type: 'get',
		data: 'xml',
		async: false,
		url: reqUrl,
		success: function(xml){
			var metadata = $(xml).find('monthPopup');
			var layerLen = metadata.length;
			metadata.each(function(index){
				
				var avg_et = $(this).find("avg_et").text();				// 증발산량
				var avg_rainfall = $(this).find("avg_rainfall").text(); // 강우량
				var avg_outflow = $(this).find("avg_outflow").text();	// 유출량
				var avg_twsc = $(this).find("avg_twsa").text();			// 변동량
				
				if(avg_outflow.indexOf(".") != -1) {
					avg_outflow = parseFloat(avg_outflow).toFixed(4);
				}
				$(".outflow_m").text(avg_outflow);
				
				if(avg_rainfall.indexOf(".") != -1) {
					avg_rainfall = parseFloat(avg_rainfall).toFixed(4);
				}
				$(".rainfall_m").text(avg_rainfall);
				
				if(avg_et.indexOf(".") != -1) {
					avg_et = parseFloat(avg_et).toFixed(4);
				}
				$(".et_m").text(avg_et);
				
				if(avg_twsc.indexOf(".") != -1) {
					avg_twsc = parseFloat(avg_twsc).toFixed(4);
				}
				$(".twsc_m").text(avg_twsc);
				
				$("#popDate").text(month);
			});
		},error: function(error){
			console.log(error);
		}
	});
}

// 하단 대권역 리스트
bottomListLargeFn();

// 하단 중권역 테스트
bottomListMidFn(yearMid);

function bottomListLargeFn() {

	//var station = type;
	var station = "CSR";
	var year1 = $("#year_initial").val();
	var year2 = $("#year_final").val();
	
	// 하단 연도 콤보박스 넣기
	
	//var option = "";
	//var optionArr = [];
	
	if(year1 == year2) {
		year2 = parseInt(year2) + 1;
	}
	
	
	var webService = "http://1.227.166.166:9132/sracommon/sraservice.asmx/bottomListLarge?";
	var param = "station="+station+"&year1="+year1+"&year2="+year2;
	var encodeUrl = encodeURIComponent(webService + param);
	var reqUrl = proxyUrl + encodeUrl;

	$.ajax({
		type: 'get',
		data: 'xml',
		async: false,
		url: reqUrl,
		success: function(xml){
			console.log(xml);
			var metadata = $(xml).find('bottomListLarge');
			var layerLen = metadata.length;

			var num = 0;
			
			var tr = "";
			var d = 1;
			metadata.each(function(index){
				
				var idx = $(this).find("GEO_IDX").text();
				var station = $(this).find("STATION").text();
				var date = $(this).find("reg_dt_m").text();
				var outflow = $(this).find("avg_outflow").text();

				
				tr += "<td>"+outflow+"</td>";
				
				if(num == 10) {
					$("#tableToExcel tr").eq(d).append(tr);
					d++;
					tr = "";
					num = 0;
					//return false;
				} else {

					num++;
				}

				
			});
			
			//console.log(tr);
			//$("#tableToExcel").append(tr);

			/*var tr = "<tr>";
			metadata.each(function(index){
				
				var idx = $(this).find("GEO_IDX").text();
				var station = $(this).find("STATION").text();
				var date = $(this).find("reg_dt_m").text();
				var outflow = $(this).find("avg_outflow").text();

				
				tr += "<td>"+outflow+"</td>";
				
				if(num == 10) {

					tr += "</tr>";
					//console.log(tr);
					
					num = 0;
					//return false;
				} else {

					num++;
				}

				
			});
			$("#tableToExcel").append(tr);*/
		},error: function(error){
			console.log(error);
		}
	});

}


function bottomListMidFn(yearMid) {
	console.log(yearMid);
	//var station = type;
	var station = "CSR";
	//var year1 = $("#year_initial").val();
	var year2 = $("#year_final").val();
	
	// 하단 연도 콤보박스 넣기
	
	//var option = "";
	//var optionArr = [];
	
	var webService = "http://1.227.166.166:9132/sracommon/sraservice.asmx/bottomListMid?";
	var param = "station="+station+"&year1="+yearMid+"&year2="+year2;
	var encodeUrl = encodeURIComponent(webService + param);
	var reqUrl = proxyUrl + encodeUrl;

	$.ajax({
		type: 'get',
		data: 'xml',
		async: false,
		url: reqUrl,
		success: function(xml){
			//console.log(xml);
			var metadata = $(xml).find('bottomListMid');
			//console.log(metadata);
			var layerLen = metadata.length;

			var num = 0;
			var avg = 0;
			var sum = 0;
			
			var midName = "";
			var tr = "<tr>";
			var td = "";
			metadata.each(function(index){
				
				var idx = $(this).find("GEO_IDX").text();
				var station = $(this).find("STATION").text();
				var date = $(this).find("reg_dt_m").text();
				var outflow = $(this).find("avg_outflow").text();
				
				if(outflow.indexOf(".") != -1) {
					outflow = parseFloat(outflow).toFixed(4);
				}
				
				
				if(midName == "") {
					midName = idx;
				}
				
				
				if(midName != idx) {
					midName = idx;
				}
				
				
				
				td += "<td>"+outflow+"</td>";
				
				if(outflow != "") {
					sum += parseFloat(outflow);
				}
				//sum += parseFloat(outflow);
				//console.log(outflow);
				
				if(num == 11) {
					
					avg = sum/12;
					
					if(sum.toString().indexOf(".") != -1) {
					sum = parseFloat(sum).toFixed(4);
					}
					
					if(avg.toString().indexOf(".") != -1) {
						avg = parseFloat(avg).toFixed(4);
					}
					
					var tr = "<tr><td>"+midName+"</td>" + td + "<td>"+avg+"</td><td>"+sum+"</td></tr>";
					//$("#tableToExcelMid tr").eq(d).append(td);
					$("#tableToExcelMid").append(tr);
					td = "";
					num = 0;
					sum = 0;

				} else {

					num++;
				}

				
			});
			
		},error: function(error){
			console.log(error);
		}
	});
}


function addSelectDateFn(start, end) {

	$("#selectDate").html("");
	for(var i=start; i<=end; i++) {
		$("#selectDate").append("<option>"+i+"</option>");
	}
	
}
	
	









