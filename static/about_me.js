$(document).ready(function() {
    $("#aboutme_nav_link #soundcloud_nav_link #youtube_nav_link #contactme_nav_link").on("mousover", function() {
        $(this).css("text-decoration","line-through");
    }).on("mouseout", function() {
        $(this).css("text-decoration","none");
    });
});