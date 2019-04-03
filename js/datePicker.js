function initDatePicker(){
	var $dateOutput = $('#dateOutput');
	var d = new Date();
	var month = d.getMonth()+1;
	var day = d.getDate();

	var output = d.getFullYear() + '-' +
		((''+month).length<2 ? '0' : '') + month + '-' +
		((''+day).length<2 ? '0' : '') + day;
	$dateOutput.html(output);
	
	$("#datepicker").datepicker({
		dateFormat: 'yy-mm-dd',
		onSelect: function(dateText, inst) {
			$dateOutput.html(dateText);
		}
	});
}