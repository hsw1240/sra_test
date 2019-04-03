
var fulldate;

// plusDate를 0으로 하면 오늘 날짜 return
function getDate(plusDate){

	var today = new Date();
	today.setDate(today.getDate() + plusDate); // plusDate만큼 +하여 setting
	
	var dd = today.getDate();
	var mm = today.getMonth()+1; //January is 0!

	var yyyy = today.getFullYear();

	if(dd<10){
		dd='0'+dd;
	} 
	if(mm<10){
		mm='0'+mm;
	}
	
	fulldate = yyyy + "-" + mm + "-" + dd;

	return fulldate
	
}