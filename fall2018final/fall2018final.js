src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"

//can only be a div or class of div!! needs to be a parent of what is being called, not a sibling
$("nav div").click(function() {
    $(this).find(".items").slideToggle();
});


let selection = ("article0.txt"); //sets default content that will be displayed
$("form").val(selection); // changes menu option to the default
$("article").load(selection); //retrieves only the default element


$('input[type=radio][name=article]').change(function() {
    selection = $(this).val();
    $("article").load(selection);
});

var clicks = 0;
$("#count").text(clicks); //turns integer into string and displays

$("#clickme").click(function(){
    clicks++;
    $("#count").text(clicks);
});
