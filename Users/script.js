$("form").submit(function(){
    var fn = ($("#fn").val());
    var ln = ($("#ln").val());
    var email = ($("#email").val());
    var phone = ($("#phone").val());
    $("table").append("<tr><td>"+fn+"</td><td>"+ln+"</td><td>"+email+"</td><td>"+phone+"</td></tr>"); 
    return false; 
})

