ApiUtil = {
  fetchPosts: function() {
    $.ajax({
      url: 'api/posts',
      dataType: 'json',

      success: function(posts) {
        ApiActions.receivePosts(posts.products);
      }
    });
  },

  createPost: function(options) {
    $.ajax({
      url: 'api/posts',
      type: 'POST',
      dataType: 'json',
      data: options,

      success: function(posts) {
        ApiActions.receivePosts(posts.products);
      }
    });
  },

  deletePost: function(id) {
    $.ajax({
      url: 'api/posts/' + id,
      type: 'DELETE',
      dataType: 'json',
      data: id,

      success: function(posts) {
        ApiActions.receivePosts(posts.products);
      }
    });
  },

  editPost: function(id, options) {
    $.ajax({
      url: 'api/posts/' + id,
      type: 'PUT',
      dataType: 'json',
      data: options,

      success: function(posts) {
        ApiActions.receivePosts(posts.products);
      }
    });
  },

  deleteImage: function(imageId, publicId) {
    // $.ajax({
    //   url: 'https://888137241648288:IHxj7bmKmwCGPFLZNGe5gqVy81g@api.cloudinary.com/v1_1/vendrio/resources/image/upload?public_ids=' + publicId,
    //   type: 'DELETE',
    // });

    $.ajax({
      url: 'api/images/' + imageId,
      type: 'DELETE',
      dataType: 'json',
      data: imageId,

      success: function(posts) {
        ApiActions.receivePosts(posts.products);
      }
    });
  },

  fetchCategories: function() {
    $.ajax({
      url: 'api/categories',
      dataType: 'json',

      success: function(categories) {
        ApiActions.receiveCategories(categories);
      }
    });
  },

  signOut: function(e) {
    e.preventDefault();
    $.ajax({
      url: 'session',
      dataType: 'json',
      type: "DELETE",

      success: function(categories) {
        window.location.href = "";
      }
    });
  },
};
