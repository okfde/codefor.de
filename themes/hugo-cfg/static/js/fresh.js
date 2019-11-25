$(document).ready(function(){

    //Navbar shadow when scrolling
    $(window).scroll(function() {
        if($(window).scrollTop() > 50) {
            $(".navbar").removeClass('no-shadow');
        } else{
            $(".navbar").addClass('no-shadow');
        }
    });

    //reveal elements on scroll so animations trigger the right way
    var $window           = $(window),
        win_height_padded = $window.height() * 1.1;

    $window.on('scroll', revealOnScroll);

    function revealOnScroll() {
        var scrolled = $window.scrollTop();
        $(".revealOnScroll:not(.animated)").each(function () {
            var $this     = $(this),
                offsetTop = $this.offset().top;

            if (scrolled + win_height_padded > offsetTop) {
                if ($this.data('timeout')) {
                    window.setTimeout(function(){
                        $this.addClass('animated ' + $this.data('animation'));
                    }, parseInt($this.data('timeout'),10));
                } else {
                    $this.addClass('animated ' + $this.data('animation'));
                }
            }
        });
    }

    // Back to Top button behaviour
    var pxShow = 600;
    var scrollSpeed = 500;
    $(window).scroll(function() {
        if ($(window).scrollTop() >= pxShow) {
            $("#backtotop").addClass('visible');
        } else {
            $("#backtotop").removeClass('visible');
        }
    });
    $('#backtotop a').on('click', function() {
        $('html, body').animate({
            scrollTop: 0
        }, scrollSpeed);
        return false;
    });

    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything and ignore navbar menu
        .not('[href="#"]')
        .not('[href="#0"]')
        .not('[href="#menu"]')
        .click(function(event) {
        // On-page links
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 550, function() {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    }
                });
            }
        }
    });
});
