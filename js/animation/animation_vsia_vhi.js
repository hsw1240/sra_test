var count = 0;
var wmsName;
//var vsia = ['201501.VSIA','201502.VSIA','201503.VSIA','201504.VSIA','201505.VSIA','201506.VSIA','201507.VSIA','201508.VSIA','201509.VSIA','201510.VSIA','201511.VSIA','201512.VSIA','201601.VSIA','201602.VSIA','201603.VSIA','201604.VSIA','201605.VSIA','201606.VSIA','201607.VSIA','201608.VSIA','201609.VSIA','201610.VSIA','201611.VSIA','201612.VSIA','201701.VSIA','201702.VSIA','201703.VSIA','201704.VSIA','201705.VSIA','201706.VSIA','201707.VSIA','201708.VSIA','201709.VSIA','201710.VSIA','201711.VSIA','201712.VSIA','201801.VSIA','201802.VSIA','201803.VSIA'];
//var vhi = ['201501.VHI','201502.VHI','201503.VHI','201504.VHI','201505.VHI','201506.VHI','201507.VHI','201508.VHI','201509.VHI','201510.VHI','201511.VHI','201512.VHI','201601.VHI','201602.VHI','201603.VHI','201604.VHI','201605.VHI','201606.VHI','201607.VHI','201608.VHI','201609.VHI','201610.VHI','201611.VHI','201612.VHI','201701.VHI','201702.VHI','201703.VHI','201704.VHI','201705.VHI','201706.VHI','201707.VHI','201708.VHI','201709.VHI','201710.VHI','201711.VHI','201712.VHI','201801.VHI','201802.VHI','201803.VHI'];

var vsia = [];
var vhi = [];

var attrD = "VSIA";
var typeD = "ALL";

var layerArr = [];
var workspace = ["VHI","ADCI"];
var proxyUrl = "http://210.92.123.150/sraproxy/sraproxy.aspx?url=";
var webServiceUrl =  "http://1.227.166.166:9132/sracommon/sraservice.asmx/layerList?";

for(var i=0; i<workspace.length; i++) {
	
	var param = "workspace="+workspace[i];
	var encodeUrl = encodeURIComponent(webServiceUrl + param);
	var reqUrl = proxyUrl + encodeUrl;
	
	$.ajax({
		type: 'get',
		data: 'xml',
		async: false,
		url: reqUrl,
		success: function(data){
			
			//console.log(data);

			var layerList = $(data).find('string').text();
			var layers = JSON.parse(layerList);
			var layerLen = layers.coverageStores.coverageStore.length;
			
			for(var i = 0; i < layerLen; i++) {
				
				var layerName = layers.coverageStores.coverageStore[i].name;
				
				
				if(layerName.indexOf("VHI") !== -1) {
					vhi.push(layerName);
				} else if(layerName.indexOf("ADCI") !== -1) {
					vsia.push(layerName);
				}
				/*var fileDate = layerName.substring(0, 6);

				if(start <= fileDate && end >= fileDate){
					layerArr.push(layerName);
				}*/

			}

		},error: function(error){
			console.log(error);
		}
	});

}

console.log(vsia);
console.log(vhi);

//console.log(layerArr);

loop("VSIA", "ALL");

function loop(layer, type) {
	
	//console.log(type);
	
	
	
	if(layer == "VSIA") {
		var layerLen = vsia.length;
		vsiaFn();
	} else if(layer == "VHI") {
		var layerLen = vhi.length;
		vhiFn();
	} else {
		return false;
	}
	
	
	function vsiaFn() {
		if(count < layerLen) {
			showLayers(vsia[count], "VSIA", type);
			timeId = setTimeout(vsiaFn, 8000);
			count++;
		}else {
			
			count = 0;
			showLayers(vsia[count], "VSIA", type);
			timeId = setTimeout(vsiaFn, 8000);
			count++;
		}
	}
	
	function vhiFn() {
		if(count < layerLen) {
			showLayers(vhi[count], "VHI", type);
			timeId = setTimeout(vhiFn, 8000);
			count++;
		}else {
			
			count = 0;
			showLayers(vhi[count], "VHI", type);
			timeId = setTimeout(vhiFn, 8000);
			count++;
		}
	}
	
	
}

$('#dateBtId').click(function(){
	stopImg();
	
	var chkVal = attrD;
	var type = typeD;
	
	var startY = $("#year_initial").val();
	var startM = $("#month_initial").val();
	var endY = $("#year_final").val();
	var endM = $("#month_final").val();
	
	var start = startY+startM;
	var end = endY+endM;
	
	var arr = [];
	
	if(chkVal == 'VHI') {
		for(var i=0; i<vhi.length;i++) {
			var fileDate = vhi[i].substring(0, 6)+"01";
			console.log(fileDate);
			if(start <= fileDate && end >= fileDate){
				arr.push(vhi[i]);
			}
		}
	} else if (chkVal == 'VSIA') {
		for(var i=0; i<vsia.length;i++) {
			var fileDate = vsia[i].substring(0, 6)+"01";
			
			if(start <= fileDate && end >= fileDate){
				arr.push(vsia[i]);
			}
		}
	}
	
	var curImg = 0;
	var imgCount = arr.length;
	
	if(imgCount <= 0) {
		alert("데이터가 없습니다.");
		return false;
	}
	
	animateEwdi();
	function animateEwdi(){	
		if (curImg < imgCount) {
			showLayers(arr[curImg], chkVal, type);
			timeId = setTimeout(animateEwdi, 8000);
			curImg++;
		} else {
			curImg = 0;
			showLayers(arr[curImg], chkVal, type);
			timeId = setTimeout(animateEwdi, 8000);
			curImg++;
		}			
	}



});

function showLayers(name, layer, type) {
	
	if(layer == "VSIA") {
		layer = "ADCI";
	}
	
	if(type == "ALL") {
		
		console.log(layer);
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
		
		var temp = name.substring(0,6);
		//console.log(temp);
		var y = temp.substring(0,4);
		var m = temp.substring(4,6);
		
		$("#dateTxt").text(layer + " / 전국 / " +y+"-"+m);
		
		Z_SOP_BND_SIDO_PG.setVisibility(true);
		
	} else if (type == "TB_GEO_WKMBBSN") {
		
		var layerName = layer;
		var date = "";
		date = name.substring(0,6)+"01";
		
		if(layer == "VSIA") {
			layerName = "ADCI";
		}
		
		$("#dateTxt").text(layerName + " / 대권역 / " + date);
		
		var wmsUrl = "http://1.227.166.166:9133/geoserver/mysql_201809/wms";
		
		if(wmsName != undefined) {
			
			wmsName.destroy();
		}
		
		wmsName = new OpenLayers.Layer.WMS(layerName+" 대권역 "+date,
			wmsUrl,
			{
				layers: "drought_"+layer+"_layer",
				transparent: 'TRUE',
				format: 'image/png',
				viewparams: 'date:'+date+';area_tb:TB_GEO_WKMBBSN'
			}, {	
				
				displayOutsideMaxExtent: true		
			});
		
		Z_SOP_BND_SIDO_PG.setVisibility(false);

	} else if (type == "TB_GEO_WKMMBSN") {
		
		var layerName = layer;
		var date = "";
		date = name.substring(0,6)+"01";
		
		if(layer == "VSIA") {
			layerName = "ADCI";
		}
		
		$("#dateTxt").text(layerName + " / 중권역 / " + date);
		
		var wmsUrl = "http://1.227.166.166:9133/geoserver/mysql_201809/wms";
		
		if(wmsName != undefined) {
			
			wmsName.destroy();
		}
		
		wmsName = new OpenLayers.Layer.WMS(layerName+" 중권역 "+date,
			wmsUrl,
			{
				layers: "drought_"+layer+"_layer",
				transparent: 'TRUE',
				format: 'image/png',
				viewparams: 'date:'+date+';area_tb:TB_GEO_WKMMBSN'
			}, {	
				
				displayOutsideMaxExtent: true		
			});
			
		Z_SOP_BND_SIDO_PG.setVisibility(false);
		
	} else if (type == "TB_GEO_Z_SOP_BND_SIDO_PG") {
		
		var layerName = layer;
		var date = "";
		date = name.substring(0,6)+"01";
		
		if(layer == "VSIA") {
			layerName = "ADCI";
		}
		
		$("#dateTxt").text(layerName + " / 행정구역 / " + date);
		
		var wmsUrl = "http://1.227.166.166:9133/geoserver/mysql_201809/wms";
		
		if(wmsName != undefined) {
			
			wmsName.destroy();
		}
		
		wmsName = new OpenLayers.Layer.WMS(layerName+" 행정구역 "+date,
			wmsUrl,
			{
				layers: "drought_"+layer+"_SIDO_layer",
				transparent: 'TRUE',
				format: 'image/png',
				viewparams: 'date:'+date+';area_tb:TB_GEO_Z_SOP_BND_SIDO_PG'
			}, {	
				
				displayOutsideMaxExtent: true		
			});
			
		Z_SOP_BND_SIDO_PG.setVisibility(false);
		
	}
	
	
	map.addLayer(wmsName);
	wmsName.setZIndex(1);
	wmsName.setVisibility(true);
}

function stopImg(){
	clearTimeout(timeId);
}









