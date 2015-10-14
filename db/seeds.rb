Post.create(
  title: "First Test Post",
  description: "First test description",
  latitude: 37.781114,
  longitude: -122.411635,
  price: 10,
  user_id: 1,
  category_id: 1
)

Post.create(
  title: "Second Test Post",
  description: "Second test description",
  latitude: 37.781114,
  longitude: -123.411635,
  price: 10,
  user_id: 1,
  category_id: 1
)

Post.create(
  title: "Third Test Post",
  description: "Third test description",
  latitude: 36.781114,
  longitude: -122.411635,
  price: 10,
  user_id: 1,
  category_id: 1
)

User.create(
  username: "Guest",
  password: "password"
)
