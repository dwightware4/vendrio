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
cat18 = Category.create(title: "Hoverboards")
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
  title: "iPhone 7S",
  description: "From 2017! Totally retro!",
  images: '["http://blogs-images.forbes.com/gordonkelly/files/2014/10/2014-10-19-16.04.58-1940x1413.jpg"]',
  latitude: 37.781114,
  longitude: -122.411635,
  city: "San Francisco",
  price: 7000,
  user_id: user1.id,
  category_id: cat1.id
)

Post.create(
  title: "First-Gen Laser Gun",
  description: "One of the first models ever produced by Apple. It was pivotal in the fight against the alien invaders in 2046",
  images: '["http://hacknmod.com/wp-content/old/pics/6452-1.jpg"]',
  latitude: 37.781114,
  longitude: -123.411635,
  city: "San Francisco",
  price: 18000,
  user_id: user1.id,
  category_id: cat1.id
)

Post.create(
  title: "Teapot Holograph",
  description: "Designed by the American Civilization, this holograph displays what many believe to be the symbol of the final god in human history.",
  images: '["http://topholographicdisplays.com/wp-content/uploads/2014/09/holographic_projector_2_by_shogi-d3cacdx.png"]',
  latitude: 37.781114,
  longitude: -123.411635,
  city: "San Francisco",
  state: "CA",
  price: 1000000,
  user_id: user1.id,
  category_id: cat3.id
)

Post.create(
  title: "G4 Hoverboard",
  description: "Powerful and efficient, this hoverboard can travel up to 5,000 miles per charge, with a top speed of 30KPH",
  images: '["http://www.wired.com/wp-content/uploads/2015/06/lexus-hoverboard-ft.jpg"]',
  latitude: 36.781114,
  longitude: -122.411635,
  city: "San Francisco",
  state: "CA",
  price: 50000,
  user_id: user1.id,
  category_id: cat18.id
)

Post.create(
  title: "Time-Warp Pod",
  description: "This top of the line time-warp pod features short duration, dual-action time warps enabling short trips to the past and back. This pod is capable of traveling to 1350 and back safely with no modifications necessary.",
  images: '["http://www.tuvie.com/wp-content/uploads/cybersnail-futuristic-transportation1.jpg"]',
  latitude: 36.781114,
  longitude: -122.411635,
  city: "San Francisco",
  state: "CA",
  price: 50,
  user_id: user1.id,
  category_id: cat25.id
)

Post.create(
  title: "2089 Honda ZHZ19",
  description: "This frictionless drive motorcycle tops out at 297 KPH without any loss of power.",
  images: '["http://www.rnrassociates.com/wordpress/wp-content/uploads/2012/04/futuristic-frog-ebike-by-frog-design2.jpg"]',
  latitude: 36.781114,
  longitude: -122.411635,
  city: "San Francisco",
  state: "CA",
  price: 80000,
  user_id: user1.id,
  category_id: cat22.id
)

Post.create(
  title: "Oakley Sun-shields",
  description: "Be the most stylish person everywhere you go this summer with these brand new Oakly shields!",
  images: '["http://cdn.shopify.com/s/files/1/0193/6253/products/9153c.jpg?v=1435551201"]',
  latitude: 36.781114,
  longitude: -122.411635,
  city: "San Francisco",
  state: "CA",
  price: 4000,
  user_id: user1.id,
  category_id: cat25.id
)

Post.create(
  title: "Ikea Sofa",
  description: "Lightly used, 3D refurbished every 6 months since brand new.",
  images: '["http://thedesignhome.com/wp-content/uploads/2010/11/black-metal-modular-sofa-image.jpg"]',
  latitude: 36.781114,
  longitude: -122.411635,
  city: "Seattle",
  state: "WA",
  price: 2000,
  user_id: user1.id,
  category_id: cat16.id
)

Post.create(
  title: "Bieber Tickets",
  description: "Tickets to the throwback Bieber World Tour, featuring a holographically rendered Justin Bieber and along with a long list of other famous historical artists.",
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
  title: "2086 Peugeot Speedster",
  description: "Perfect condition, fully refurbished every 3 months or 10,000 miles.",
  images: '["http://www.ecofriend.com/wp-content/uploads/2012/07/peugeot_frame_concept_npfie.jpg"]',
  latitude: 36.781114,
  longitude: -122.411635,
  city: "Miami",
  state: "FL",
  price: 100000,
  user_id: user1.id,
  category_id: cat11.id
)

Post.create(
  title: "Dream Spa",
  description: "Brand new, never used! The Dream Spa is the best way to sleep the way you want and experience the dreams of your choice!",
  images: '["http://cdn2-b.examiner.com/sites/default/files/styles/image_content_width/hash/63/b7/63b7d1a79ce304891b8ba90774dc96e2.jpg?itok=PHSVIKoT"]',
  latitude: 36.781114,
  longitude: -122.411635,
  city: "Omaha",
  state: "NE",
  price: 3000,
  user_id: user1.id,
  category_id: cat23.id
)

Post.create(
  title: "Nike Shoes",
  description: "Brand new, limited",
  images: '["http://blog.gfk.com/wp-content/uploads/2015/06/B3.jpg"]',
  latitude: 36.781114,
  longitude: -122.411635,
  city: "New York",
  state: "NY",
  price: 1500,
  user_id: user1.id,
  category_id: cat11.id
)

Post.create(
  title: "2027 Classic iMove",
  description: "Great old iMove from the early days of autonomous cars.",
  images: '["http://im.rediff.com/money/2013/apr/26imove17.jpg"]',
  latitude: 36.781114,
  longitude: -122.411635,
  city: "Walnut Creek",
  state: "CA",
  price: 45000,
  user_id: user1.id,
  category_id: cat9.id
)

Post.create(
  title: "Elderly Care Robot",
  description: "This robot allows you to maintain a normal career while leaving mom or dad home during the day. This bot monitors your elderly relative nonstop and provides assistence performing basic tasks as well as ensuring that all medication, exercise, and meals are attended to as prescribed.",
  images: '["http://www.wired.com/images_blogs/underwire/2012/01/Robot_and_Frank_filmstill1.jpg"]',
  latitude: 36.781114,
  longitude: -122.411635,
  city: "Green Bay",
  state: "WI",
  price: 200000,
  user_id: user1.id,
  category_id: cat7.id
)

Post.create(
  title: "Meal Replacement Pills",
  description: "Pack of 500, each pill contains full daily nutritional stack for the average adult human.",
  images: '["https://itsinterestingdotcom.files.wordpress.com/2012/08/digital-capsule-medicine-normal5_43.jpg"]',
  latitude: 36.781114,
  longitude: -122.411635,
  city: "Green Bay",
  state: "WI",
  price: 2000,
  user_id: user1.id,
  category_id: cat14.id
)

Post.create(
  title: "X47 Sony Shower Unit",
  description: "Full massage mode, heat and cold therapy, built in Bose speakers.",
  images: '["http://www.trendir.com/archives/thalassor-aska-duo-steam-shower.jpg"]',
  latitude: 36.781114,
  longitude: -122.411635,
  city: "Papillion",
  state: "NE",
  price: 10000,
  user_id: user1.id,
  category_id: cat9.id
)

Post.create(
  title: "Noise Cancelling Sleep Pod",
  description: "Full noise cancelling, precision temperature control, dual adjustable resistance, fully filtered air supply.",
  images: '["http://decoholic.org/wp-content/uploads/2013/07/futuristic-bedroom-design-28.jpg"]',
  latitude: 36.781114,
  longitude: -122.411635,
  city: "San Diego",
  state: "CA",
  price: 30000,
  user_id: user1.id,
  category_id: cat16.id
)
