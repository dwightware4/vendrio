json.products @posts do |post|
  json.title post.title
  json.description post.description
  json.price post.price
  json.latitude post.latitude
  json.longitude post.longitude
  json.city post.city
  json.state post.state
  json.user_id post.user_id
  json.category_id post.category_id
  json.id post.id

  post.images.each do |image|
    json.image image.url
  end
end
