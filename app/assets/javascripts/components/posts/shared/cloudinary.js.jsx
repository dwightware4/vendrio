var imageUrls = [];

window.Cloudinary = React.createClass({
  render: function () {
    return(
      <div>
        <button name="photo" id="upload_widget_opener" />
      </div>
    );
  },

  componentDidMount: function() {
    $('#upload_widget_opener').cloudinary_upload_widget(
      {
        cloud_name: 'vendrio',
        upload_preset: 'isuzt2ap',
        cropping: 'server', 'folder': 'user_photos'
      },
      function(error, result) { this.setImageUrl(error, result); }.bind(this));
  },

  setImageUrl: function(error, result) {
      imageUrls.push(result[0].path);
  },
});
