function Update_TimeStamp_MP(increment, flag_timestamp) {
	
	// daily, monthly, yearly 가져옴
	//var current_timestep = $("ul.ts-selection li.active").attr('id');
	//var current_timestep = "daily";
	var current_timestep = $('#dateUnit').val();
	
	var date_temp, i_or_f;

	var initial_date = new Date(parseInt($("#year_initial").val()),
				   parseInt($("#month_initial").val())-1,
				   parseInt($("#day_initial").val()));
	var final_date = new Date(parseInt($("#year_final").val()),
				   parseInt($("#month_final").val())-1,
				   parseInt($("#day_final").val()));

	if (flag_timestamp == 0) {
	date_temp = initial_date;
	i_or_f = "initial";
	}
	else {
	date_temp = final_date;
	i_or_f = "final";
	}

	//Find the next or previous timestamp
	if(""+current_timestep == "daily") {
		date_temp.setDate(date_temp.getDate() + increment);
	} else if (""+current_timestep == "monthly") {
		console.log("mmm");
		date_temp.setMonth(date_temp.getMonth() + increment); // will loop around 12 automatically
	} else { 
		date_temp.setFullYear(date_temp.getFullYear() + increment);
	}

	// 4/4 monitor 하드코딩
	//var morf = $("ul.monitor-or-forecast>li.active").find("a").attr('id');
	var morf = "monitor";
	
	if (flag_timestamp == 0 && increment == 1 && date_temp.valueOf() > final_date.valueOf()) {
	if(""+morf == "monitor") return;
	}
	else if (flag_timestamp == 1 && increment == -1 && date_temp.valueOf() < initial_date.valueOf()) return;

	// Update the time string
	$("#year_" + i_or_f).val(date_temp.getFullYear());
	$("#month_" + i_or_f).val(date_temp.getMonth() + 1);
	$("#day_" + i_or_f).val(date_temp.getDate());

	// If selecting spatial data, update the "estimated download size" display
	if("spatial" == $("ul.data-extraction li.active>a").attr('id'))
	Update_Spatial_Data_Display();
}