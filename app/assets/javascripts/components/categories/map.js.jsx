var allMarkers = [];

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
    PostStore.addChangeListener(this._updateState);
    this.map = React.findDOMNode(this.refs.map);

    var mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 13
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

      var bounds = {northEast: northEast, southWest: southWest};
      FilterActions.changeBounds(bounds);
    }.bind(this));

    this.map.addListener('click', function(e) {
      var coords = {lat: e.latLng.J, lng: e.latLng.M};
      this.history.pushState(null, "/new", coords);
    }.bind(this));
  },

  clearMarkers: function() {
    for(var i = 0; i < allMarkers.length; i++){
      allMarkers[i].setMap(null);
      allMarkers.slice(i, 1);
    }
  },

  _updateState: function(){
    this.clearMarkers();
    var newPosts = PostStore.all();

    newPosts.forEach(function(post){
      var LatLng = {lat: post.lat, lng: post.lng};
      var marker = new google.maps.Marker({
        position: LatLng,
        map: this.map,
        title: post.title,
      });

      allMarkers.push(marker);
    }.bind(this));
  },
});