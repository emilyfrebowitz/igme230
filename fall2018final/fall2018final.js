$(document).ready(function() {
    $(".items").hide()
});

$(".menu").click(function() {
    $(this).find(".items").slideToggle();
        
});

// let selection = ("article0.txt")
// //$("#choose-content").val(selection); // changes menu option to the default
// $("article").load(selection); //retrieves only the default element


// $('input[type=radio][name=article]').change(function() {
//     if (this.value == 'article1.txt) {
//         alert("article1.txt");
//     }
//     else if (this.value == 'article2.txt') {
//         alert("article2.txt");
//     }
// });

