jQuery(function ($) {
    "use strict";

    window.onload = function () {
        document.getElementById('loading-mask').style.display = 'none';
    }

    /* ========================================================================= */
    /*   Contact Form Validating
     /* ========================================================================= */
    $('#contact-submit').click(function (e) {

        //stop the form from being submitted
        e.preventDefault();

        /* declare the variables, var error is the variable that we use on the end
         to determine if there was an error or not */
        var error = false;
        var name = $('#name').val();
        var email = $('#email').val();
        var subject = $('#subject').val();
        var message = $('#message').val();

        /* in the next section we do the checking by using VARIABLE.length
         where VARIABLE is the variable we are checking (like name, email),
         length is a JavaScript function to get the number of characters.
         And as you can see if the num of characters is 0 we set the error
         variable to true and show the name_error div with the fadeIn effect. 
         if it's not 0 then we fadeOut the div( that's if the div is shown and
         the error is fixed it fadesOut. 
         
         The only difference from these checks is the email checking, we have
         email.indexOf('@') which checks if there is @ in the email input field.
         This JavaScript function will return -1 if no occurrence have been found.*/
        if (name.length == 0) {
            var error = true;
            $('#name').css("border-color", "#D8000C");
        } else {
            $('#name').css("border-color", "#666");
        }
        if (email.length == 0 || email.indexOf('@') == '-1') {
            var error = true;
            $('#email').css("border-color", "#D8000C");
        } else {
            $('#email').css("border-color", "#666");
        }
        if (subject.length == 0) {
            var error = true;
            $('#subject').css("border-color", "#D8000C");
        } else {
            $('#subject').css("border-color", "#666");
        }
        if (message.length == 0) {
            var error = true;
            $('#message').css("border-color", "#D8000C");
        } else {
            $('#message').css("border-color", "#666");
        }

        //now when the validation is done we check if the error variable is false (no errors)
        if (error == false) {
            //disable the submit button to avoid spamming
            //and change the button text to Sending...
            $('#contact-submit').attr({
                'disabled': 'false',
                'value': 'Sending...'
            });

            /* using the jquery's post(ajax) function and a lifesaver
             function serialize() which gets all the data from the form
             we submit it to send_email.php */
            $.post("email.php", $("#contact-form").serialize(), function (result) {
                //and after the ajax request ends we check the text returned
                if (result == 'ok') {
                    //if the mail is sent remove the submit paragraph
                    $('#cf-submit').remove();
                    //and show the mail success div with fadeIn
                    $('#mail-success').fadeIn(500);
                } else {
                    //show the mail failed div
                    $('#mail-fail').fadeIn(500);
                    //re enable the submit button by removing attribute disabled and change the text back to Send The Message
                    $('#contact-submit').removeAttr('disabled').attr('value', 'Send The Message');
                }
            });
        }
    });


    /* ========================================================================= */
    /*	Google Map Customization
     /* =========================================================================  */

    function initialize() {

        var myLatLng = new google.maps.LatLng(23.709202, 90.449377);

        var roadAtlasStyles = [{
                "featureType": "landscape",
                "elementType": "geometry.fill",
                "stylers": [{
                        "color": "#2F3238"
                    }]
            }, {
                "elementType": "labels.text.fill",
                "stylers": [{
                        "color": "#FBBE14"
                    }]
            }, {
                "elementType": "labels.text.stroke",
                "stylers": [{
                        "visibility": "off"
                    }]
            }, {
                "featureType": "road",
                "elementType": "geometry.fill",
                "stylers": [{
                        "color": "#50525f"
                    }]
            }, {
                "featureType": "road",
                "elementType": "geometry.stroke",
                "stylers": [{
                        "visibility": "on"
                    }, {
                        "color": "#808080"
                    }]
            }, {
                "featureType": "poi",
                "elementType": "labels",
                "stylers": [{
                        "visibility": "off"
                    }]
            }, {
                "featureType": "transit",
                "elementType": "labels.icon",
                "stylers": [{
                        "visibility": "off"
                    }]
            }, {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [{
                        "color": "#808080"
                    }]
            }, {
                "featureType": "water",
                "elementType": "geometry.fill",
                "stylers": [{
                        "color": "#3071a7"
                    }, {
                        "saturation": -65
                    }]
            }, {
                "featureType": "road",
                "elementType": "labels.icon",
                "stylers": [{
                        "visibility": "off"
                    }]
            }, {
                "featureType": "landscape",
                "elementType": "geometry.stroke",
                "stylers": [{
                        "color": "#bbbbbb"
                    }]
            }];

        var mapOptions = {
            zoom: 14,
            center: myLatLng,
            disableDefaultUI: true,
            scrollwheel: false,
            navigationControl: false,
            mapTypeControl: false,
            scaleControl: false,
            draggable: false,
            mapTypeControlOptions: {
                mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'roadatlas']
            }
        };

        var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);


        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: '',
        });


        google.maps.event.addListener(marker, 'click', function () {
            infowindow.open(map, marker);
        });

        var styledMapOptions = {
            name: 'US Road Atlas'
        };

        var usRoadMapType = new google.maps.StyledMapType(
                roadAtlasStyles, styledMapOptions);

        map.mapTypes.set('roadatlas', usRoadMapType);
        map.setMapTypeId('roadatlas');
    }

    google.maps.event.addDomListener(window, "load", initialize);


    /* ========================================================================= */
    /*	Scroll Up / Back to top
     /* ========================================================================= */

    $(window).scroll(function () {
        if ($(window).scrollTop() > 400) {
            $("#scrollUp").fadeIn(200);
        } else {
            $("#scrollUp").fadeOut(200);
        }
    });

    $('#scrollUp').click(function () {
        $('html, body').stop().animate({
            scrollTop: 0
        }, 1500, 'easeInOutExpo');
    });

    /* ========================================================================= */
    /*	Menu item highlighting
     /* ========================================================================= */

    $('#nav').onePageNav({
        currentClass: 'active',
        changeHash: false,
        scrollSpeed: 1500,
        scrollThreshold: 0.5,
        filter: '',
        easing: 'easeInOutExpo'
    });

    /* ========================================================================= */
    /*	Nice Scroll - Custom Scrollbar
     /* ========================================================================= */

    var nice = $("html").niceScroll({
        cursorborderradius: 0,
        cursorwidth: "8px",
        cursorfixedheight: 150,
        cursorcolor: "#FBBE14",
        zindex: 9999,
        cursorborder: 0,
    });

    /* =========================================================================== */
    /*	FitVids js
     /* =========================================================================== */

    $(".media-wrapper").fitVids();

    /* ========================================================================= */
    /*	Timer count
     /* ========================================================================= */

    (function () {
        var count = {
            initialized: false,
            initialize: function () {
                if (this.initialized)
                    return;
                this.initialized = true;
                this.build();
            },
            build: function () {
                this.animations();
            },
            animations: function () {
                // Count To
                $(".counters-item [data-to]").each(function () {
                    var $this = $(this);
                    $this.appear(function () {
                        $this.countTo({});
                    }, {
                        accX: 0,
                        accY: -150
                    });
                });
            },
        };
        count.initialize();
    })();


});

wow = new WOW({
    animateClass: 'animated',
    offset: 120
});
wow.init();

/* ========================================================================= */
/*	Parallax Sections
 /* ========================================================================= */


"use strict";

function parallaxInit() {
    $('#rating').parallax("50%", 0.3);
    $('#critics').parallax("50%", 0.3);
    $('#contact').parallax("50%", 0.3);
}

$(window).bind("load", function () {
    parallaxInit()
});
