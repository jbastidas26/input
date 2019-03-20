//create a click handler for the Post button.

$("button").click(function() {
var massege = $("input").val();
var input = $(".class").val();
$("input").val("");
$(".comments").append("<div class='row'><div class='avatar odie'></div><div class='comment'>"+massege+"</div></div");

});


// header toggles brands when clicked :)
var header = $(".header");
header.click(function () {
    header.toggleClass("instagram");
    var brand = header.text();
    header.text(brand === "Instagram" ? "Facebook" : "Instagram");
});