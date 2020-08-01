
    var map;
    var defult = new google.maps.LatLng(50.8452321, 4.3577968, 17.29);
    var mapCoordinates = new google.maps.LatLng(50.8452321, 4.3577968, 17.29);


    var markers = [];
    var image = new google.maps.MarkerImage(
      'assets/img/map-marker.png',
      new google.maps.Size(84, 70),
      new google.maps.Point(0, 0),
      new google.maps.Point(60, 60)
    );

    function addMarker() {
      markers.push(new google.maps.Marker({
        position: defult,
        raiseOnDrag: false,
        icon: image,
        map: map,
        draggable: false
      }));

    }

    function initialize() {
      var mapOptions = {
        backgroundColor: "#ffffff",
        zoom: 15,
        disableDefaultUI: true,
        center: mapCoordinates,
        zoomControl: false,
        scaleControl: false,
        scrollwheel: false,
        disableDoubleClickZoom: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: [{
            "featureType": "landscape.natural",
            "elementType": "geometry.fill",
            "stylers": [{
              "color": "#ffffff"
            }]
          }, {
            "featureType": "landscape.man_made",
            "stylers": [{
              "color": "#ffffff"
            }, {
              "visibility": "off"
            }]
          }, {
            "featureType": "water",
            "stylers": [{
              "color": "#80C8E5"
            }, {
              "saturation": 0
            }]
          }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
              "color": "#999999"
            }]
          }, {
            "elementType": "labels.text.stroke",
            "stylers": [{
              "visibility": "off"
            }]
          }, {
            "elementType": "labels.text",
            "stylers": [{
              "color": "#333333"
            }]
          }

          , {
            "featureType": "road.local",
            "stylers": [{
              "color": "#dedede"
            }]
          }, {
            "featureType": "road.local",
            "elementType": "labels.text",
            "stylers": [{
              "color": "#666666"
            }]
          }, {
            "featureType": "transit.station.bus",
            "stylers": [{
              "saturation": -57
            }]
          }, {
            "featureType": "road.highway",
            "elementType": "labels.icon",
            "stylers": [{
              "visibility": "off"
            }]
          }, {
            "featureType": "poi",
            "stylers": [{
              "visibility": "off"
            }]
          }

        ]

      };
      map = new google.maps.Map(document.getElementById('google-map'), mapOptions);
      addMarker();

    }
    google.maps.event.addDomListener(window, 'load', initialize);
