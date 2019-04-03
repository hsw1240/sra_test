var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();
if(dd<10) dd='0'+dd;
if(mm<10) mm='0'+mm;


var prev_3day = new Date();
prev_3day.setDate(prev_3day.getDate() - 3);
var dd3 = prev_3day.getDate();
var mm3 = prev_3day.getMonth()+1;
var yy3 = prev_3day.getFullYear();
if(dd3<10) dd3='0'+dd3;
if(mm3<10) mm3='0'+mm3;

var prev_7day = new Date();
prev_7day.setDate(prev_7day.getDate() - 7);
var dd7 = prev_7day.getDate();
var mm7 = prev_7day.getMonth()+1;
var yy7 = prev_7day.getFullYear();
if(dd7<10) dd7='0'+dd7;
if(mm7<10) mm7='0'+mm7;

var prev_30day = new Date();
prev_30day.setDate(prev_30day.getDate() - 30);
var dd30 = prev_30day.getDate();
var mm30 = prev_30day.getMonth()+1;
var yy30 = prev_30day.getFullYear();
if(dd30<10) dd30='0'+dd30;
if(mm30<10) mm30='0'+mm30;

