var count = 0;
var wmsName;
var layerArr = [];
var proxyUrl = "http://210.92.123.150/sraproxy/sraproxy.aspx?url=";
var webServiceUrl =  "http://1.227.166.166:9132/sracommon/sraservice.asmx/monitoring4mSearch?";
var code = "T0195";
var type = "CSR";
var watershed = "대권역";
var large = [["51","금야강"],["50","동해북부"],["30","청천강"],["20","압록강"],["70","임진강"],["10","두만강"],["60","북한강"],["52","동해남부"],["40","대동강"],["80","예성강"],["90","장연남대천"]];

loop();

function loop() {

	var startY = $("#year_initial").val();
	var startM = $("#month_initial").val();
	var endY = 	$("#year_final").val();
	var endM = $("#month_final").val();
	
	var start = startY+startM;
	var end = endY+endM;
	
	// 하단 연도표시
	addSelectDateFn(startY, endY);
	
	// 하단 중권역
	bottomListMidFn(startY);
	
	// 하단 대권역 리스트
	bottomListLargeFn(startY);
	
	var layerArr = [];
	var layerLen = 0;
	
	
	// 0806 임시
	if(code == "discharge") {
		layerArr = tempWmsListFn(code, type);
	} else {
		
		if(code == "AET" || code == "GPM") {
			layerArr = tempWmsListFn(code, type);
		} else {

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
						
						if(datId.indexOf("2") == -1) {
							return;
						}
						
						/*if(type == "CSR") {
							console.log("csr");
							
							if(datId.indexOf("Mascon") == -1) {
								console.log(datId);
								return;
							}
						}*/
						
						var fileDate = datId.substring(datId.length-6, datId.length);
							
						if(start <= fileDate && end >= fileDate){
							layerArr.push(datId);
						}
						
						//layerArr.push(datId);
					});
				},error: function(error){
					console.log(error);
				}
			});
			
		}
		
	}
	
	layerLen = layerArr.length;

	
	loopFn();
	
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
	
	var start = startY+startM;
	var end = endY+endM;
	
	// 하단 연도표시
	addSelectDateFn(startY, endY);
	
	// 하단 중권역 테스트
	bottomListMidFn(startY);
	
	// 하단 대권역 리스트
	bottomListLargeFn(startY);
	
	// 0601 중복코드 수정예정
	var layerArr = [];
	var layerLen = 0;
	
	// 0806 임시
	if(code == "discharge") {
		layerArr = tempWmsListFn(code, type);
	} else {
		
		if(code == "AET" || code == "GPM") {
			layerArr = tempWmsListFn(code, type);
		} else {
		
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
		
		}
		
	}
	
	layerLen = layerArr.length;
	
	loopFn();
	
	function loopFn() {
		//console.log(count, layerLen);
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

function showLayers(name, layer, type, startY, endY) {
	
	//console.log(name, layer, type, startY, endY);
	
	//console.log(startY, endY);
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
	
	// 0806 임시
	else if (layer == "discharge") {
		layerName = layer;
		layer = layer+"-"+type;
		var typeSplit = type.split("-");
		type = typeSplit[0];
		
	} else if (layer == "AET" || layer == "GPM" ) {
		layerName = layer;
		layer = layer+"-"+type;
		// 0806 type이 없음
		type = "CSR";
		
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
	
	/*var temp = name.substring(0,6);
	var y = temp.substring(0,4);
	var m = temp.substring(4,6);	
	$("#dateTxt").text(layer + " /  " +y+"-"+m);*/
	
	
	// 0806 임시
	if(layer.indexOf("discharge") != -1) {
		var dateText = name.substring(0, 6);
		$("#dateTxt").text(watershed + " / " + layer + " /  " +dateText);
	} else if (layer.indexOf("AET") != -1 || layer.indexOf("GPM") != -1) {
		var dateText = name.substring(0, 6);
		$("#dateTxt").text(watershed + " / " + layerName + " /  " +dateText);
	} else {
		var dateText = name.substring(name.length-6, name.length);
		$("#dateTxt").text(watershed + " / " + layer + "_" +type + " /  " +dateText);
	}
	
	var dateTextY = dateText.substring(0,4);
	var dateTextM = dateText.substring(4,6);
	
	
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
	
	//console.log("전월 : "+preYM);
	//console.log("금월 : "+dateYM);
	//console.log("전년 : "+preY);
	
	//console.log(dateYM, dateTextY, preYM, preY, type)
	
	// 하단 월별,년별 차트변경
	bottomBarFn(dateYM, dateTextY, type);
	
	// 우측 패널 데이터 변경
	rightPanelFn(type, dateTextY);
	
	
	// 좌측 하단 전년,전월,금월 차트변경
	leftBottomBarFn(type, dateYM, preYM, preY);
	
	// 팝업 월평균
	monthPopupFn(type, dateYM);
	
	//var label = name.split("_");
	//var date = label[3];
	//$("#dateTxt").text(date);
	
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



function bottomListLargeFn(year1) {
	
	$("#tableToExcel").html("<tr><th>유출량</th><th>금야강</th><th>대동강</th><th>동해남부</th><th>동해북부</th><th>두만강</th><th>북한강</th><th>압록강</th><th>예성강</th><th>임진강</th><th>장연남대천</th><th>청천강</th></tr><tr><td>1月</td></tr><tr><td>2月</td></tr><tr><td>3月</td></tr><tr><td>4月</td></tr><tr><td>5月</td></tr><tr><td>6月</td></tr><tr><td>7月</td></tr><tr><td>8月</td></tr><tr><td>9月</td></tr><tr><td>10月</td></tr><tr><td>11月</td></tr><tr><td>12月</td></tr>");

	var station = type;
	//var year1 = $("#year_initial").val();
	var year2 = $("#year_final").val();
	
	//var option = "";
	//var optionArr = [];
	
	/*
	if(year1 == year2) {
		year2 = parseInt(year2) + 1;
	}
	*/
	
	
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
	//console.log(yearMid);

	$("#tableToExcelMid").html("<tr><th>권역</th><th>1月</th><th>2月</th><th>3月</th><th>4月</th><th>5月</th><th>6月</th><th>7月</th><th>8月</th><th>9月</th><th>10月</th><th>11月</th><th>12月</th><th>평균</th><th>합계</th>");
	
	var station = type;
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

// 0806 임시 function
function tempWmsListFn(code, type) {
	
	var layerArr = [];
	var workspace = "";
	
	var startY = $("#year_initial").val();
	var startM = $("#month_initial").val();
	var endY = 	$("#year_final").val();
	var endM = $("#month_final").val();
	
	var start = startY+startM;
	var end = endY+endM;
	
	var proxyUrl = "http://210.92.123.150/sraproxy/sraproxy.aspx?url=";
	var webServiceUrl =  "http://1.227.166.166:9132/sracommon/sraservice.asmx/layerList?";
	
	workspace = code+"-"+type;
	
	var param = "workspace="+workspace;
	var encodeUrl = encodeURIComponent(webServiceUrl + param);
	var reqUrl = proxyUrl + encodeUrl;
	
	$.ajax({
		type: 'get',
		data: 'xml',
		async: false,
		url: reqUrl,
		success: function(data){

			var layerList = $(data).find('string').text();
			var layers = JSON.parse(layerList);
			var layerLen = layers.coverageStores.coverageStore.length;
			
			for(var i = 0; i < layerLen; i++) {
				
				var layerName = layers.coverageStores.coverageStore[i].name;
				//console.log(layerName);
				var fileDate = layerName.substring(0, 6);

				if(start <= fileDate && end >= fileDate){
					layerArr.push(layerName);
				}
						
				//layerArr.push(layers.coverageStores.coverageStore[i]);
				//console.log(layers.coverageStores.coverageStore[i].name);
			}

		},error: function(error){
			console.log(error);
		}
	});
	
	console.log(layerArr);

	
	return layerArr;
}


function addSelectDateFn(start, end) {

	$("#selectDate").html("");
	for(var i=start; i<=end; i++) {
		$("#selectDate").append("<option>"+i+"</option>");
	}
	
}

$("#selectDate").change(function() {
	var year = $(this).val();
	
	// 하단 중권역 테스트
	bottomListMidFn(year);
	
	// 하단 대권역 리스트
	bottomListLargeFn(year);
});


	
	









