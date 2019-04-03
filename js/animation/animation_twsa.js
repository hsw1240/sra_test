var count = 0;
var wmsName;

loop("twsa1","csr");


function loop(folder, type) {
	
	var layerLen = 0;

	if(folder == "twsa1") {
		//var layerLen = vsia.length;
		twsa1Fn(type, "TWSA_1");
	} else if(folder == "twsa2") {
		twsa2Fn(type, "TWSA_2");
	} else if(folder == "twsc1") {
		twsc1Fn(type, "TWSC_1");
	} else if(folder == "twsc2") {
		twsc2Fn(type, "TWSC_2");
	} else {
		return false;
	}
	
	function twsa1Fn(type, layer) {
		
		var arr = [];
		
		if(type == 'csr') {
			layerLen = twsa1.csr.length;
			arr = twsa1.csr;
		} else if(type == 'mascon') {
			layerLen = layerLen = twsa1.mascon.length;;
			arr = twsa1.mascon;
		} else if(type == 'gfz') {
			layerLen = layerLen = twsa1.gfz.length;
			arr = twsa1.gfz;
		} else if(type == 'jpl') {
			layerLen = layerLen = twsa1.jpl.length;;
			arr = twsa1.jpl;
		}
		
		twsa1LoopFn(arr, layer);
	}
	
	
	// 5/30 함수호출할때 파라미터있으면 안된다.
	function twsa1LoopFn(arr, layer) {
		
		if(count < layerLen) {
			showLayers(arr[count], layer);
			timeId = setTimeout(twsa1LoopFn, 8000);
			count++;
		}else {
			
			count = 0;
			showLayers(arr[count], layer);
			timeId = setTimeout(twsa1LoopFn, 8000);
			count++;
		}
	}
	
	
	/*function twsa2Fn(type) {
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
	}*/
	
	
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









