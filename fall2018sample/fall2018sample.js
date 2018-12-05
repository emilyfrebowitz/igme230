/*AJAX CONTENT LOADING*/

let selection = ("content1.txt") // sets default content to be displayed
$("#choose-content").val(selection); // changes menu option to the default
$("#content").load(selection); //retrieves only the default element

/*when the content selection is changed
change the value of the selection and load that content*/

$("#choose-content").change(function() {
    selection = $(this).val();
    $("#content").load(selection);
});


/* CONTENT MENU FUNCTION
when a menubox is clicked, finds the submenu
for the selected and toggles it's display on and off*/
$(document).ready(function() {
    $(".submenu").hide()
});

$(".menubox").click(function() {
    $(this).find(".submenu").slideToggle();
    /*slideToggle() - toggle function w slide animation*/
})