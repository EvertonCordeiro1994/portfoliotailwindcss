const $hamburger = $(".hamburger");
const $modal = $("#modal");
const $span = $("span");

$hamburger.on("click", () =>{ 
    $hamburger.toggleClass("is-active"),
    $modal.toggleClass("hidden")

});

$span.on("click", () =>{ 
    $hamburger.toggleClass("is-active"),
    $modal.toggleClass("hidden")

});


$(document).ready(function() {
    $('#modal').removeClass('-translate-x-full').addClass('translate-x-0');
});