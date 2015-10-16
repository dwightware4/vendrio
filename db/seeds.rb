cat1 = Category.create(title: "Antiques")
cat2 = Category.create(title: "Appliances")
cat3 = Category.create(title: "Art")
cat4 = Category.create(title: "Barter")
cat5 = Category.create(title: "Bicycles")
cat6 = Category.create(title: "Boats")
cat7 = Category.create(title: "Books")
cat8 = Category.create(title: "Business")
cat9 = Category.create(title: "Cars")
cat10 = Category.create(title: "Cellphones")
cat11 = Category.create(title: "Clothing")
cat12 = Category.create(title: "Collectibles")
cat13 = Category.create(title: "Computers")
cat14 = Category.create(title: "Electronics")
cat15 = Category.create(title: "Free")
cat16 = Category.create(title: "Furniture")
cat17 = Category.create(title: "General")
cat18 = Category.create(title: "Household")
cat19 = Category.create(title: "Instruments")
cat20 = Category.create(title: "Jewelry")
cat21 = Category.create(title: "Materials")
cat22 = Category.create(title: "Motorcycles")
cat23 = Category.create(title: "Sporting")
cat24 = Category.create(title: "Tickets")
cat25 = Category.create(title: "Tools")
cat26 = Category.create(title: "Toys")
cat27 = Category.create(title: "Video Games")
cat28 = Category.create(title: "Wanted")

user1 = User.create(username: "Guest", password: "password")

Post.create(
  title: "Toyota Tacoma",
  description: "2012, fully loaded!",
  latitude: 37.781114,
  longitude: -122.411635,
  city: "San Francisco",
  price: 20000,
  user_id: user1.id,
  category_id: cat9.id
)

Post.create(
  title: "Laptop",
  description: "Macbook Air",
  images: '["http://lazerspizzasurfside.com/wp-content/uploads/2013/08/Photo-Image-Coming-Soon-Icon.jpg"]',
  latitude: 37.781114,
  longitude: -123.411635,
  city: "San Francisco",
  price: 700,
  user_id: user1.id,
  category_id: cat14.id
)

Post.create(
  title: "iPhone 6s",
  description: "Brand new",
  images: '["http://lazerspizzasurfside.com/wp-content/uploads/2013/08/Photo-Image-Coming-Soon-Icon.jpg"]',
  latitude: 37.781114,
  longitude: -123.411635,
  city: "San Francisco",
  state: "CA",
  price: 550,
  user_id: user1.id,
  category_id: cat14.id
)

Post.create(
  title: "Hammer",
  description: "Reliable and sturdy",
  images: '["http://lazerspizzasurfside.com/wp-content/uploads/2013/08/Photo-Image-Coming-Soon-Icon.jpg"]',
  latitude: 36.781114,
  longitude: -122.411635,
  city: "San Francisco",
  state: "CA",
  price: 10,
  user_id: user1.id,
  category_id: cat25.id
)

Post.create(
  title: "Power drill",
  description: "Never before used!",
  images: '["http://lazerspizzasurfside.com/wp-content/uploads/2013/08/Photo-Image-Coming-Soon-Icon.jpg"]',
  latitude: 36.781114,
  longitude: -122.411635,
  city: "San Francisco",
  state: "CA",
  price: 50,
  user_id: user1.id,
  category_id: cat25.id
)

Post.create(
  title: "Shop Vac",
  description: "Needs repair",
  images: '["http://lazerspizzasurfside.com/wp-content/uploads/2013/08/Photo-Image-Coming-Soon-Icon.jpg"]',
  latitude: 36.781114,
  longitude: -122.411635,
  city: "San Francisco",
  state: "CA",
  price: 5,
  user_id: user1.id,
  category_id: cat25.id
)

Post.create(
  title: "Riding Lawn Mower",
  description: "Old but works",
  images: '["http://lazerspizzasurfside.com/wp-content/uploads/2013/08/Photo-Image-Coming-Soon-Icon.jpg"]',
  latitude: 36.781114,
  longitude: -122.411635,
  city: "San Francisco",
  state: "CA",
  price: 150,
  user_id: user1.id,
  category_id: cat25.id
)

Post.create(
  title: "Fedora",
  description: "For hipsters",
  images: '["http://lazerspizzasurfside.com/wp-content/uploads/2013/08/Photo-Image-Coming-Soon-Icon.jpg"]',
  latitude: 36.781114,
  longitude: -122.411635,
  city: "Seattle",
  state: "WA",
  price: 700,
  user_id: user1.id,
  category_id: cat11.id
)

Post.create(
  title: "Bieber Tickets",
  description: "Free",
  images: '["http://lazerspizzasurfside.com/wp-content/uploads/2013/08/Photo-Image-Coming-Soon-Icon.jpg"]',
  latitude: 36.781114,
  longitude: -122.411635,
  city: "Denver",
  state: "CO",
  price: 0,
  user_id: user1.id,
  category_id: cat24.id
)

Post.create(
  title: "Tim Tebow Jersey",
  description: "Limited edition!",
  images: '["http://lazerspizzasurfside.com/wp-content/uploads/2013/08/Photo-Image-Coming-Soon-Icon.jpg"]',
  latitude: 36.781114,
  longitude: -122.411635,
  city: "Miami",
  state: "FL",
  price: 75,
  user_id: user1.id,
  category_id: cat11.id
)
