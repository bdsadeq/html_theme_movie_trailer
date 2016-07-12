# Movie Trailer HTM5 Single Page Template

###Main Menu
Simple Bootstrap Menu

![Preview Loading ...](http://image.sadequr.com/github/html_theme_movie_trailer/menu.png)



###Sliders
Carousel Slider

![Preview Loading ...](http://image.sadequr.com/github/html_theme_movie_trailer/slider.jpg)

To use the Carousel Slider you have to include the following in your page:

| File Name      | Description      |
| ---------------|------------------|
| jquery.min.js  |jQuery library.   |
| js/bootstrap.js|Bootstrap Carousel|



###Trailer
Enbedded Code
```php
    /***************************************************
                        Vimeo iFrame
    ***************************************************/
    <iframe src="http://player.vimeo.com/video/95995610" allowfullscreen></iframe>
```



###Contact Us
Just need to change email address in the file email.php.

![Preview Loading ...](http://image.sadequr.com/github/html_theme_movie_trailer/contact.png)



###Google Map Customization
Change longitude and latitude
```javascript
    /* ========================================================================= */
    /*	Google Map Customization
    /* ========================================================================= */
     
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
```



###Credits
Scripts:

* jQuery plugin
* Bootstrap
* Google Map API
* jQuery One Page Nav Plugin
* jQuery Easing
* jQuery CountTo
* WOW
* jQuery Nicescroll
* jQuery Parallax
* FitVids 1.1
* jQuery Appear

Icons:

* Font-Awesome



---
### Preview
![Preview Loading ...](http://image.sadequr.com/github/html_theme_movie_trailer/movie_trailer_template.jpg)



---
### Author
**Md. Sadequr Rahman**

Sr. Software Engineer (Team Leader)

Dream Door Soft Ltd.
