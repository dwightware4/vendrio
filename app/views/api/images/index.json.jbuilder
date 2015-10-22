json.products @posts do |post|
  json.title post.title
  json.description post.description
json.price number_with_delimiter(post.price)
  json.latitude post.latitude
  json.longitude post.longitude
  json.city post.city
  json.state post.state
  json.user_id post.user_id
  json.category_id post.category_id
  json.id post.id

  json.images post.images do |image|
    json.url image.url
    json.id image.id
    json.public_id image.public_id
  end
end
