$(document).ready(function(){

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



    $("#gallery").magnificPopup({
        delegate: "a",
        type: "image",
        gallery:{
            enabled:true
        }
    });

});