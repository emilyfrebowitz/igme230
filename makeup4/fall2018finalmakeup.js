src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"

/*naav menu toggle*/
$("nav div").click(function() {
    $(this).find(".submenu").slideToggle();
});

/*content loading*/
let selection = ("story0.txt") // sets default content to be displayed
$("#stories").val(selection); // changes menu option to the default
$("#story").load(selection); //retrieves only the default element

$('li=[id]').change(function() {
    selection = $(this).attr();
    $("id").load(selection);
});


/*css changes*/

$("li=[id]").click(function() {
    $("#source").css("background", "id");
});

/*click counter*/
var clicks = 0;
$("#currentcount").text(clicks); //turns integer into string and displays
$("#increment").click(function(){
    clicks++;
    $("#currentcount").text(clicks);
});