$(document).ready(function(){

    $(".name_header").on("mouseover", function() {
        $(this).css("color", "#feeecd");
        $(this).css("text-decoration", "none");
    }).on("mouseout", function() {
          $(this).css("color", "rgb(226, 204, 108)");
          
    });

    $("#aboutme_nav_link #soundcloud_nav_link #youtube_nav_link #contactme_nav_link").on("mousover", function() {
        $(this).css("text-decoration","line-through");
    }).on("mouseout", function() {
        $(this).css("text-decoration","none");
    });

    
    
    document.querySelectorAll('a[href^="#contact"]').forEach($anchor => {
        $anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth',
                block: 'start' //scroll to top of the target element
            });
        });
    });
    
    document.querySelectorAll('a[href^="#up_top"]').forEach($anchor => {
        $anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
    
    

});
