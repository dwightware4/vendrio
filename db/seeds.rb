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
cat23 = Category.create(title: "Robots")
cat24 = Category.create(title: "Sporting")
cat25 = Category.create(title: "Tickets")
cat26 = Category.create(title: "Tools")
cat27 = Category.create(title: "Video Games")
cat28 = Category.create(title: "Wanted")

user1 = User.create(username: "Guest", password: "password")

post1 = Post.create(
  title: "iPhone 7S",
  description: "From 2017! Totally retro!",
  latitude: (37.8 + (rand * 0.1)),
  longitude: (-122.39 + (rand * 0.1)),
  city: "San Francisco",
  price: 7000,
  user_id: user1.id,
  category_id: cat10.id
)

post2 = Post.create(
  title: "First-Gen Laser Gun",
  description: "One of the first models ever produced by Apple. It was pivotal in the fight against the alien invaders in 2046",
  latitude: (37.8 + (rand * 0.1)),
  longitude: (-122.39 + (rand * 0.1)),
  city: "San Francisco",
  price: 18000,
  user_id: user1.id,
  category_id: cat12.id
)

post3 = Post.create(
  title: "Teapot Holograph",
  description: "Designed by the American Civilization, this holograph displays what many believe to be the symbol of the final god in human history.",
  latitude: (37.8 + (rand * 0.1)),
  longitude: (-122.39 + (rand * 0.1)),
  city: "San Francisco",
  state: "CA",
  price: 1000000,
  user_id: user1.id,
  category_id: cat12.id
)

post4 = Post.create(
  title: "G4 Hoverboard",
  description: "Powerful and efficient, this hoverboard can travel up to 5,000 miles per charge, with a top speed of 30KPH",
  latitude: (37.8 + (rand * 0.1)),
  longitude: (-122.39 + (rand * 0.1)),
  city: "San Francisco",
  state: "CA",
  price: 50000,
  user_id: user1.id,
  category_id: cat18.id
)

post5 = Post.create(
  title: "Time-Warp Pod",
  description: "This top of the line time-warp pod features short duration, dual-action time warps enabling short trips to the past and back. This pod is capable of traveling to 1350 and back safely with no modifications necessary.",
  latitude: (37.8 + (rand * 0.1)),
  longitude: (-122.39 + (rand * 0.1)),
  city: "San Francisco",
  state: "CA",
  price: 50,
  user_id: user1.id,
  category_id: cat14.id
)

post6 = Post.create(
  title: "2089 Honda ZHZ19",
  description: "This frictionless drive motorcycle tops out at 297 KPH without any loss of power.",
  latitude: (37.8 + (rand * 0.1)),
  longitude: (-122.39 + (rand * 0.1)),
  city: "San Francisco",
  state: "CA",
  price: 80000,
  user_id: user1.id,
  category_id: cat22.id
)

post7 = Post.create(
  title: "Oakley Sun-shields",
  description: "Be the most stylish person everywhere you go this summer with these brand new Oakly shields!",
  latitude: (37.8 + (rand * 0.1)),
  longitude: (-122.39 + (rand * 0.1)),
  city: "San Francisco",
  state: "CA",
  price: 4000,
  user_id: user1.id,
  category_id: cat11.id
)

post8 = Post.create(
  title: "Ikea Sofa",
  description: "Lightly used, 3D refurbished every 6 months since brand new.",
  latitude: (37.8 + (rand * 0.1)),
  longitude: (-122.39 + (rand * 0.1)),
  city: "Seattle",
  state: "WA",
  price: 2000,
  user_id: user1.id,
  category_id: cat16.id
)

post9 = Post.create(
  title: "Bieber Tickets",
  description: "Tickets to the throwback Bieber World Tour, featuring a holographically rendered Justin Bieber and along with a long list of other famous historical artists.",
  latitude: (37.8 + (rand * 0.1)),
  longitude: (-122.39 + (rand * 0.1)),
  city: "Denver",
  state: "CO",
  price: 0,
  user_id: user1.id,
  category_id: cat24.id
)

post10 = Post.create(
  title: "2086 Peugeot Speedster",
  description: "Perfect condition, fully refurbished every 3 months or 10,000 miles.",
  latitude: (37.8 + (rand * 0.1)),
  longitude: (-122.39 + (rand * 0.1)),
  city: "Miami",
  state: "FL",
  price: 100000,
  user_id: user1.id,
  category_id: cat9.id
)

post11 = Post.create(
  title: "Dream Spa",
  description: "Brand new, never used! The Dream Spa is the best way to sleep the way you want and experience the dreams of your choice!",
  latitude: (37.8 + (rand * 0.1)),
  longitude: (-122.39 + (rand * 0.1)),
  city: "Omaha",
  state: "NE",
  price: 3000,
  user_id: user1.id,
  category_id: cat14.id
)

post12 = Post.create(
  title: "Nike Shoes",
  description: "Brand new, limited",
  latitude: (37.8 + (rand * 0.1)),
  longitude: (-122.39 + (rand * 0.1)),
  city: "New York",
  state: "NY",
  price: 1500,
  user_id: user1.id,
  category_id: cat11.id
)

post13 = Post.create(
  title: "2027 Classic iMove",
  description: "Great old iMove from the early days of autonomous cars.",
  latitude: (37.8 + (rand * 0.1)),
  longitude: (-122.39 + (rand * 0.1)),
  city: "Walnut Creek",
  state: "CA",
  price: 45000,
  user_id: user1.id,
  category_id: cat9.id
)

post14 = Post.create(
  title: "Elderly Care Robot",
  description: "This robot allows you to maintain a normal career while leaving mom or dad home during the day. This bot monitors your elderly relative nonstop and provides assistence performing basic tasks as well as ensuring that all medication, exercise, and meals are attended to as prescribed.",
  latitude: (37.8 + (rand * 0.1)),
  longitude: (-122.39 + (rand * 0.1)),
  city: "Green Bay",
  state: "WI",
  price: 200000,
  user_id: user1.id,
  category_id: cat23.id
)

post15 = Post.create(
  title: "Meal Replacement Pills",
  description: "Pack of 500, each pill contains full daily nutritional stack for the average adult human.",
  latitude: (37.8 + (rand * 0.1)),
  longitude: (-122.39 + (rand * 0.1)),
  city: "Green Bay",
  state: "WI",
  price: 2000,
  user_id: user1.id,
  category_id: cat17.id
)

post16 = Post.create(
  title: "X47 Sony Shower Unit",
  description: "Full massage mode, heat and cold therapy, built in Bose speakers.",
  latitude: (37.8 + (rand * 0.1)),
  longitude: (-122.39 + (rand * 0.1)),
  city: "Papillion",
  state: "NE",
  price: 10000,
  user_id: user1.id,
  category_id: cat16.id
)

post17 = Post.create(
  title: "Noise Cancelling Sleep Pod",
  description: "Full noise cancelling, precision temperature control, dual adjustable resistance, fully filtered air supply.",
  latitude: (37.8 + (rand * 0.1)),
  longitude: (-122.39 + (rand * 0.1)),
  city: "San Diego",
  state: "CA",
  price: 30000,
  user_id: user1.id,
  category_id: cat16.id
)

img1 = Image.create(
  url: "v1445291504/iphone_yj4d6n.jpg",
  post_id: post1.id,
)

img2 = Image.create(
  url: "v1445291498/laser_gun_qvswk3.jpg",
  post_id: post2.id,
)

img3 = Image.create(
  url: "v1445291503/teapot_vpl0zi.png",
  post_id: post3.id,
)

img4 = Image.create(
  url: "v1445291500/hoverboard_oncb4d.jpg",
  post_id: post4.id,
)

img5 = Image.create(
  url: "v1445291500/time_machine_brfnsl.jpg",
  post_id: post5.id,
)

img6 = Image.create(
  url: "v1445291499/motorcycle_ancrnk.jpg",
  post_id: post6.id,
)

img7 = Image.create(
  url: "v1445291502/shades_xvdou2.jpg",
  post_id: post7.id,
)

img8 = Image.create(
  url: "v1445291817/couch_tesepc.jpg",
  post_id: post8.id,
)

img9 = Image.create(
  url: "v1445291500/tickets_tppqih.jpg",
  post_id: post9.id,
)

img10 = Image.create(
  url: "v1445291499/peugeot_tkelzv.jpg",
  post_id: post10.id,
)

img11 = Image.create(
  url: "v1445291818/dream_spa_p58um7.jpg",
  post_id: post11.id,
)

img12 = Image.create(
  url: "v1445291499/nikes_pfkqw6.jpg",
  post_id: post12.id,
)

img13 = Image.create(
  url: "v1445291499/imove_ak1mki.jpg",
  post_id: post13.id,
)

img14 = Image.create(
  url: "v1445291499/robot_f3bq71.jpg",
  post_id: post14.id,
)

img15 = Image.create(
  url: "v1445291500/pills_nnvwdl.jpg",
  post_id: post15.id,
)

img16 = Image.create(
  url: "v1445291500/shower_ebzih8.jpg",
  post_id: post16.id,
)

img17 = Image.create(
  url: "v1445291818/bed_s8mvco.jpg",
  post_id: post17.id,
)
