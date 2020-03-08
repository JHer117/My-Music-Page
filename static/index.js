$(document).ready(function(){

    $(".name_header").on("mouseover", function() {
        $(this).css("color", "#feeecd");
        $(this).css("text-decoration", "none");
    }).on("mouseout", function() {
          $(this).css("color", "rgb(226, 204, 108)");
          
    });

    $("#aboutme_nav_link #soundcloud_nav_link #youtube_nav_link").on("mousover", function() {
        $(this).css("text-decoration","line-through");
    }).on("mouseout", function() {
        $(this).css("text-decoration","none");
    });


});
