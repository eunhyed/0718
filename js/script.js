$(document).ready(function(){

    $("header button").click(function(){
        $("nav").stop().slideToggle(500, function(){
            if( $("nav").css("display")=="block"){
                $("header button").text("X");
            }
            else{
                $("header button").html("&#x2630;");
            }
        });
    });

    $("nav a").click(function(){
        $("nav").stop().slideUp();
        $("header button").html("&#x2630");
    });
});