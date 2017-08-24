$("form").submit(function(){ 
    var fn = ($("#fn").val());
    var ln = ($("#ln").val());
    var desc = ($("#desc").val()); 
    $("body").append("<div class='card'><h1 class='front'>"+fn+" "+ln+"</h1><p class='front'>Click for description!</p><p class='back'>"+desc+"</p></div>");
    return false; 
})

$(document).on('click','.card',function(){
    $(this).children(".front").toggle();
    $(this).children(".back").toggle(); 
})
