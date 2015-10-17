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
  images: '["http://www.bestcarsnews.com/wp-content/uploads/2012/01/2012-Toyota-Tacoma-picture.jpg"]',
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
  images: '["http://www8.pcmag.com/media/images/297548-apple-macbook-air-11-inch-mid-2012.jpg"]',
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
  images: '["http://blogs-images.forbes.com/gordonkelly/files/2014/10/2014-10-19-16.04.58-1940x1413.jpg"]',
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
  images: '["https://upload.wikimedia.org/wikipedia/en/e/e1/StephensCabinPorch_Hammer.jpg"]',
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
  images: '["http://ecx.images-amazon.com/images/I/71uHcxJd2oL._SL1500_.jpg"]',
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
  images: '["https://coolhardware.files.wordpress.com/2010/11/shop-vac-small-2301885_a_v4.jpg"]',
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
  images: '["http://www.ridinglawnmowershq.com/wp-content/uploads/2014/03/poulan-42-inch-riding-lawn-mower.jpg"]',
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
  images: '["http://www.newyorkhatco.com/sites/default/files/5325_0.png"]',
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
  images: '["http://i486.photobucket.com/albums/rr225/micquek/ConcertTicket.jpg"]',
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
  images: '["http://i.ebayimg.com/00/s/MTIwMFgxNjAw/$(KGrHqV,!ksE7!QbvBtPBO5Vu66cww~~60_35.JPG"]',
  latitude: 36.781114,
  longitude: -122.411635,
  city: "Miami",
  state: "FL",
  price: 75,
  user_id: user1.id,
  category_id: cat11.id
)

Post.create(
  title: "Baseball Glove",
  description: "Worn in",
  images: '["http://www.howtocleananything.com/wp-content/uploads/2010/07/baseballglove1.jpg"]',
  latitude: 36.781114,
  longitude: -122.411635,
  city: "Omaha",
  state: "NE",
  price: 20,
  user_id: user1.id,
  category_id: cat23.id
)

Post.create(
  title: "2003 CBR 600RR",
  description: "Awesome bike!",
  images: '["http://imganuncios.mitula.net/2003_honda_cbr_600rr_7100miles_1_owner_1800u_d_5330055421804006395.jpg"]',
  latitude: 36.781114,
  longitude: -122.411635,
  city: "Walnut Creek",
  state: "CA",
  price: 3600,
  user_id: user1.id,
  category_id: cat22.id
)

Post.create(
  title: "Book collection",
  description: "Many titles",
  images: '["http://cdn.mhpbooks.com/uploads/2015/06/books.jpg"]',
  latitude: 36.781114,
  longitude: -122.411635,
  city: "Green Bay",
  state: "WI",
  price: 50,
  user_id: user1.id,
  category_id: cat7.id
)

Post.create(
  title: "50\" LCD TV",
  description: "Like new",
  images: '["http://flatscreenexpert.com/wp-content/uploads/2013/11/flat_screen_lcd.jpg"]',
  latitude: 36.781114,
  longitude: -122.411635,
  city: "Green Bay",
  state: "WI",
  price: 18,
  user_id: user1.id,
  category_id: cat14.id
)

Post.create(
  title: "2006 BMW 530i",
  description: "Beautiful car",
  images: '["http://photos3.automanager.com/020199/a58dc260abf3d24f8ad1ccc132999946/10533ce781_640.jpg"]',
  latitude: 36.781114,
  longitude: -122.411635,
  city: "Papillion",
  state: "NE",
  price: 10000,
  user_id: user1.id,
  category_id: cat9.id
)

Post.create(
  title: "Nike Shoes",
  description: "Brand new, limited",
  images: '["https://s3.amazonaws.com/rapgenius/filepicker%2F5jTDmubSTnCREE8BIe5w_nike_shoes.jpg"]',
  latitude: 36.781114,
  longitude: -122.411635,
  city: "New York",
  state: "NY",
  price: 150,
  user_id: user1.id,
  category_id: cat11.id
)

Post.create(
  title: "Old painting",
  description: "Unknown origin, really cool",
  images: '["http://webneel.com/daily/sites/default/files/images/daily/02-2013/14-portrait-of-leopold-prince-old-painting.jpg"]',
  latitude: 36.781114,
  longitude: -122.411635,
  city: "San Diego",
  state: "CA",
  price: 5000,
  user_id: user1.id,
  category_id: cat1.id
)
