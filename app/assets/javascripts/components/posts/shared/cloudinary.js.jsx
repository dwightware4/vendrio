var imageUrls = [];
var test = [];

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
        cloud_name: window.cloudinary_name,
        upload_preset: window.cloudinary_preset,
        cropping: 'server', 'folder': 'user_photos',
        theme: 'minimal',
      },
      function(error, result) { this.setImageUrl(error, result); }.bind(this));
  },

  setImageUrl: function(error, result) {
      imageUrls.push(result[0].path);
      test.push(result[0].public_id);
  },
});
