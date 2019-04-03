var count = 0;
var wmsName;
var vsia = ['201501.VSIA','201502.VSIA','201503.VSIA','201504.VSIA','201505.VSIA','201506.VSIA','201507.VSIA','201508.VSIA','201509.VSIA','201510.VSIA','201511.VSIA','201512.VSIA','201601.VSIA','201602.VSIA','201603.VSIA','201604.VSIA','201605.VSIA','201606.VSIA','201607.VSIA','201608.VSIA','201609.VSIA','201610.VSIA','201611.VSIA','201612.VSIA','201701.VSIA','201702.VSIA','201703.VSIA','201704.VSIA','201705.VSIA','201706.VSIA','201707.VSIA','201708.VSIA','201709.VSIA','201710.VSIA','201711.VSIA','201712.VSIA','201801.VSIA','201802.VSIA','201803.VSIA'];

var vhi = ['201501.VHI','201502.VHI','201503.VHI','201504.VHI','201505.VHI','201506.VHI','201507.VHI','201508.VHI','201509.VHI','201510.VHI','201511.VHI','201512.VHI','201601.VHI','201602.VHI','201603.VHI','201604.VHI','201605.VHI','201606.VHI','201607.VHI','201608.VHI','201609.VHI','201610.VHI','201611.VHI','201612.VHI','201701.VHI','201702.VHI','201703.VHI','201704.VHI','201705.VHI','201706.VHI','201707.VHI','201708.VHI','201709.VHI','201710.VHI','201711.VHI','201712.VHI','201801.VHI','201802.VHI','201803.VHI'];

loop("vhi");

function loop(layer) {
	
	//console.log(layer);
	
	if(layer == "vsia") {
		var layerLen = vsia.length;
		ewdiFn();
	} else if(layer == "vhi") {
		var layerLen = vhi.length;
		wbdiFn();
	} else {
		return false;
	}
	
	
	function ewdiFn() {
		if(count < layerLen) {
			showLayers(vsia[count], "VSIA");
			timeId = setTimeout(ewdiFn, 8000);
			count++;
		}else {
			
			count = 0;
			showLayers(vsia[count], "VSIA");
			timeId = setTimeout(ewdiFn, 8000);
			count++;
		}
	}
	
	function wbdiFn() {
		if(count < layerLen) {
			showLayers(vhi[count], "VHI");
			timeId = setTimeout(wbdiFn, 8000);
			count++;
		}else {
			
			count = 0;
			showLayers(vhi[count], "VHI");
			timeId = setTimeout(wbdiFn, 8000);
			count++;
		}
	}
	
	
}

$('#dateBtId').click(function(){
	stopImg();
	
	var chkVal = $('input:radio[name=chk_name1]:checked').val();
	
	console.log(chkVal);
	
	if(chkVal == 'vhi') {
		
		var startY = $("input[name$='yyyy1']").val();
		var startM = $("input[name$='mm1']").val();
		var endY = $("input[name$='yyyy2']").val();
		var endM = $("input[name$='mm2']").val();
		
		var start = startY+startM;
		var end = endY+endM;
		
		var arrVhi = [];
		for(var i=0; i<vhi.length;i++) {
			var fileDate = vhi[i].substring(0, 6);
			
			if(start <= fileDate && end >= fileDate){
				arrVhi.push(vhi[i]);
			}
		}

		var curImg = 0;
		var imgCount = arrVhi.length;
		
		if(imgCount <= 0) {
			alert("데이터가 없습니다.");
			return false;
		}
		
		animateVhi();
		function animateVhi(){	
			if (curImg < imgCount) {
				showLayers(arrVhi[curImg], "VHI");
				timeId = setTimeout(animateVhi, 8000);
				curImg++;
			} else {
				curImg = 0;
				showLayers(arrVhi[curImg], "VHI");
				timeId = setTimeout(animateVhi, 8000);
				curImg++;
			}			
		}
		
	} else if (chkVal == 'vsia') {
		var startY = $("input[name$='yyyy1']").val();
		var startM = $("input[name$='mm1']").val();
		var endY = $("input[name$='yyyy2']").val();
		var endM = $("input[name$='mm2']").val();
		
		var start = startY+startM;
		var end = endY+endM;
		
		var arrVsia = [];
		for(var i=0; i<vsia.length;i++) {
			var fileDate = vsia[i].substring(0, 6);
			
			if(start <= fileDate && end >= fileDate){
				arrVsia.push(vsia[i]);
			}
		}

		var curImg = 0;
		var imgCount = arrVsia.length;
		
		if(imgCount <= 0) {
			alert("데이터가 없습니다.");
			return false;
		}
		
		animateVsia();
		function animateVsia(){	
			if (curImg < imgCount) {
				showLayers(arrVsia[curImg], "VSIA");
				timeId = setTimeout(animateVsia, 8000);
				curImg++;
			} else {
				curImg = 0;
				showLayers(arrVsia[curImg], "VSIA");
				timeId = setTimeout(animateVsia, 8000);
				curImg++;
			}			
		}
		
	}

});

function showLayers(name, layer) {

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
		
	$("#dateTxt").text(layer + " /  " +y+"-"+m);
		
		
	//var label = name.split("_");
	//var date = label[3];
	
	//$("#dateTxt").text(date);
	
	map.addLayer(wmsName);
}

function stopImg(){
	clearTimeout(timeId);
}









