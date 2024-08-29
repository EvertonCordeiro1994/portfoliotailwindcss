const $hamburger = $(".hamburger");
const $modal = $("#modal");
$hamburger.on("click", () =>{ 
    $hamburger.toggleClass("is-active"),
    $modal.toggleClass("hidden")

});


$(document).ready(function() {
    $('#modal').removeClass('-translate-x-full').addClass('translate-x-0');
});