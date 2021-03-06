var allMarkers = [];
var bounds = [];

window.Map = React.createClass({
  mixins: [ReactRouter.History],

  render: function() {
    return(
      <div className="map-container" ref="map">
        <div id="map" ref="map"></div>
      </div>
    );
  },

  componentDidMount: function(){
    FilterParamsStore.addChangeListener(this._updateState);

    this.map = React.findDOMNode(this.refs.map);

    var mapOptions = {
      center: {lat: 37.728873, lng: -122.441759},
      zoom: 12,
      styles: mapStyle,
      disableDefaultUI: true,
    };

    this.map = new google.maps.Map(this.map, mapOptions);

    this.map.addListener('idle', function() {
      var mapBounds = this.map.getBounds();
      var northEast = {
        lat: mapBounds.getNorthEast().lat(),
        lng: mapBounds.getNorthEast().lng()
      };
      var southWest = {
        lat: mapBounds.getSouthWest().lat(),
        lng: mapBounds.getSouthWest().lng()
      };

      bounds = {northEast: northEast, southWest: southWest};
      FilterActions.changeBounds(bounds);
    }.bind(this));
  },

  clearMarkers: function() {
    for(var i = 0; i < allMarkers.length; i++){
      allMarkers[i].setMap(null);
    }
    allMarkers = [];
  },

  _updateState: function(){
    this.clearMarkers();
    var newPosts = PostStore.byBoundsAndCategory(bounds, catId);
    newPosts.forEach(function(post){
      var LatLng = {lat: post.latitude, lng: post.longitude};

      var marker = new google.maps.Marker({
        position: LatLng,
        map: this.map,
        id: post.id,
        animation: null,
        icon: 'https://res.cloudinary.com/'+window.cloudinary_name+'/image/upload/v1445539438/qr-code_ct9etm.png',
      });

      var infowindow = new google.maps.InfoWindow({
        content: "<div id='marker-info'>" + post.title + "</div>",
        disableAutoPan: true
      });

      marker.addListener('mouseover', function() {
        infowindow.open(marker.map, marker);
      }.bind(this));

      marker.addListener('mouseout', function() {
        infowindow.close(marker.map, marker);
      }.bind(this));

      marker.addListener('click', function() {
        this.history.pushState(null, '/post/' + post.id);
      }.bind(this));

      allMarkers.push(marker);
    }.bind(this));
  },
});

var mapStyle = [
  {"featureType": "all", "elementType": "labels.text.fill", "stylers": [{"color": "#ffffff"}]},
  {"featureType": "all", "elementType": "labels.text.stroke", "stylers": [{"color": "#000000"}, {"lightness": 13}]},
  {"featureType": "administrative", "elementType": "geometry.fill", "stylers": [{"color": "#000000"}]},
  {"featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{"color": "#144b53"}, {"lightness": 14}, {"weight": 1.4}]},
  {"featureType": "landscape", "elementType": "all", "stylers": [{"color": "#08304b"}]},
  {"featureType": "poi", "elementType": "geometry", "stylers": [{"color": "#0c4152"}, {"lightness": 5}]},
  {"featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{"color": "#000000"}]},
  {"featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{"color": "#0b434f"}, {"lightness": 25}]},
  {"featureType": "road.arterial", "elementType": "geometry.fill", "stylers": [{"color": "#000000"}]},
  {"featureType": "road.arterial", "elementType": "geometry.stroke", "stylers": [{"color": "#0b3d51"}, {"lightness": 16}]},
  {"featureType": "road.local", "elementType": "geometry", "stylers": [{"color": "#000000"}]},
  {"featureType": "transit", "elementType": "all", "stylers": [{"color": "#146474"}]},
  {"featureType": "water", "elementType": "all", "stylers": [{"color": "#021019"}]}
];
