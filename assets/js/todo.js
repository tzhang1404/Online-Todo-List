
//check off todos with a crossing or turn it back on
//has to listen on ul because new li will be created
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//deleting the task
//listen on ul because of same reason above
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(400, function(){
		//only executed after the fadeout is completed;
		$(this).remove(); //this $this is the li, not the span
	});
	event.stopPropagation();//this will prevent event bubbling
});

//logging new todos
$("input").on("keypress", function(event){

	//check if it is a enter key
	if(event.which === 13){
		//enter pressed
		var newTask = $(this).val();
		if(newTask.length > 0){
			var newHTML = "<li><span><i class='fas fa-trash-alt'></i></span>" + newTask + "</li>";
			$("ul").append(newHTML);
			$(this).val(""); //clear the input field
		}
	}

});

