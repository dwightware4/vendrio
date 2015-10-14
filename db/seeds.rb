cat1 = Category.create(title: "Cars & Trucks")
cat2 = Category.create(title: "Electronics")
cat3 = Category.create(title: "Tools")

user1 = User.create(username: "Guest", password: "password")

Post.create(
  title: "Toyota Tacoma",
  description: "2012, fully loaded!",
  latitude: 37.781114,
  longitude: -122.411635,
  price: 20000,
  user_id: user1.id,
  category_id: cat1.id
)

Post.create(
  title: "Laptop",
  description: "Macbook Air",
  latitude: 37.781114,
  longitude: -123.411635,
  price: 700,
  user_id: user1.id,
  category_id: cat2.id
)

Post.create(
  title: "iPhone 6s",
  description: "Brand new",
  latitude: 37.781114,
  longitude: -123.411635,
  price: 550,
  user_id: user1.id,
  category_id: cat2.id
)

Post.create(
  title: "Hammer",
  description: "Reliable and sturdy",
  latitude: 36.781114,
  longitude: -122.411635,
  price: 10,
  user_id: user1.id,
  category_id: cat3.id
)

Post.create(
  title: "Power drill",
  description: "Never before used!",
  latitude: 36.781114,
  longitude: -122.411635,
  price: 50,
  user_id: user1.id,
  category_id: cat3.id
)

Post.create(
  title: "Shop Vac",
  description: "Needs repair",
  latitude: 36.781114,
  longitude: -122.411635,
  price: 5,
  user_id: user1.id,
  category_id: cat3.id
)
