window.GeoComplete = React.createClass({
  
  render: function () {
    return(
      <div>
        <input className="form-control" id="geocomplete" type="text" name="address" placeholder="Address"></input>

        <div id="addressDetails" className="hide">
          <input name="lat" type="hidden" value="" />
          <input name="lng" type="hidden" value="" />
          <input name="locality" type="hidden" value="" />
          <input name="administrative_area_level_1_short" type="hidden" value="" />
        </div>
      </div>
    );
  },
});
