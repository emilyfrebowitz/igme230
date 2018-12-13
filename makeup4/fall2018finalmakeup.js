src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"

/*naav menu toggle*/
$("nav div").click(function() {
    $(this).find(".submenu").slideToggle();
});

/*content loading*/
let selection = ("story0.txt") // sets default content to be displayed
$("#stories li").on('click', function () {
    $(this).id;
});
// $("#stories").val(selection); // changes menu option to the default
$("#story").load(selection); //retrieves only the default element
