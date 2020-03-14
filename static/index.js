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
    

    $("#contact_btn").click(function (event) {
        // event.preventDefault();

        const name = $("#name").val();
        const phone = $("#phone").val();
        const email = $("#email").val();
        const message = $("#message").val();
        var status = $("#status");
        status.empty();

        
        if(name.length < 2) {
            event.preventDefault();
            status.append("<h5>Error: </h5>")
            status.append("<h6>Please Enter your name!</h6>")
        }
        
        if(email.length > 5 && email.includes("@") && email.includes(".")) {
            status.append("")
        } else {
            event.preventDefault();
            status.append("<h5>Error: </h5>")
            status.append("<div><h6>Invalid Email!</h6></div>")
        }

        if(message.length < 2) {
            event.preventDefault();
            status.append("<h5>Error: </h5>")
            status.append("<div><h6>At least say Hi!</h6></div>")
        }



    });


    

});
