user1 = User.create(username: "user1", password: "password1", email: "dummy@example.com", f_name: "Dummy", l_name: "User")
user2 = User.create(username: "Guest", password: "password", email: "guest@example.com", f_name: "Guest", l_name: "User")

cat1 = Category.create(title: "Appliances")
cat2 = Category.create(title: "Art")
cat3 = Category.create(title: "Boats")
cat4 = Category.create(title: "Cars")
cat5 = Category.create(title: "Cellphones")
cat6 = Category.create(title: "Clothing")
cat7 = Category.create(title: "Collectibles")
cat8 = Category.create(title: "Electronics")
cat9 = Category.create(title: "Free")
cat10 = Category.create(title: "Furniture")
cat11 = Category.create(title: "General")
cat12 = Category.create(title: "Hoverboards")
cat13 = Category.create(title: "Instruments")
cat14 = Category.create(title: "Jewelry")
cat15 = Category.create(title: "Materials")
cat16 = Category.create(title: "Motorcycles")
cat17 = Category.create(title: "Robots")
cat18 = Category.create(title: "Tickets")
cat19 = Category.create(title: "Tools")
cat20 = Category.create(title: "Video Games")

post1 = Post.create(
  title: "iPhone 11S",
  description: "Brand new, never used!",
  longitude: rand(-122.501417..-122.387679),
  latitude: rand(37.648519..37.788092),
  city: "San Francisco",
  state: "CA",
  price: 700,
  user_id: user1.id,
  category_id: cat5.id
)

post2 = Post.create(
  title: "First-Gen Laser Gun",
  description: "One of the first models ever produced by Apple. It was pivotal in the fight against the alien invaders in 2046",
  longitude: rand(-122.501417..-122.387679),
  latitude: rand(37.648519..37.788092),
  city: "San Francisco",
  state: "CA",
  price: 4000,
  user_id: user1.id,
  category_id: cat7.id
)

post3 = Post.create(
  title: "Teapot Holograph",
  description: "Designed by the American Civilization, this holograph displays what many believe to be the symbol of the final god in human history.",
  longitude: rand(-122.501417..-122.387679),
  latitude: rand(37.648519..37.788092),
  city: "San Francisco",
  state: "CA",
  price: 125,
  user_id: user1.id,
  category_id: cat7.id
)

post4 = Post.create(
  title: "G4 Hoverboard",
  description: "Powerful and efficient, this hoverboard can travel up to 5,000 miles per charge, with a top speed of 30KPH",
  longitude: rand(-122.501417..-122.387679),
  latitude: rand(37.648519..37.788092),
  city: "San Francisco",
  state: "CA",
  price: 17000,
  user_id: user1.id,
  category_id: cat12.id
)

post5 = Post.create(
  title: "Time-Warp Pod",
  description: "This top of the line time-warp pod features short duration, dual-action time warps enabling short trips to the past and back. This pod is capable of traveling to 1350 and back safely with no modifications necessary.",
  longitude: rand(-122.501417..-122.387679),
  latitude: rand(37.648519..37.788092),
  city: "San Francisco",
  state: "CA",
  price: 40000,
  user_id: user1.id,
  category_id: cat8.id
)

post6 = Post.create(
  title: "2048 Honda ZHZ19",
  description: "This frictionless drive motorcycle tops out at 297 KPH without any loss of power.",
  longitude: rand(-122.501417..-122.387679),
  latitude: rand(37.648519..37.788092),
  city: "San Francisco",
  state: "CA",
  price: 29000,
  user_id: user1.id,
  category_id: cat16.id
)

post7 = Post.create(
  title: "Oakley Sun-shields",
  description: "Be the most stylish person everywhere you go this summer with these brand new Oakly shields!",
  longitude: rand(-122.501417..-122.387679),
  latitude: rand(37.648519..37.788092),
  city: "San Francisco",
  state: "CA",
  price: 175,
  user_id: user1.id,
  category_id: cat6.id
)

post8 = Post.create(
  title: "Ikea Sofa",
  description: "Lightly used, 3D refurbished every 6 months since brand new.",
  longitude: rand(-122.501417..-122.387679),
  latitude: rand(37.648519..37.788092),
  city: "San Francisco",
  state: "CA",
  price: 2000,
  user_id: user1.id,
  category_id: cat10.id
)

post9 = Post.create(
  title: "Coffee Pot",
  description: "Used Black and Decker coffee pot. Perfect condition, works great!",
  longitude: rand(-122.501417..-122.387679),
  latitude: rand(37.648519..37.788092),
  city: "San Francisco",
  state: "CA",
  price: 60,
  user_id: user1.id,
  category_id: cat18.id
)

post10 = Post.create(
  title: "2056 Audi AX7",
  description: "Perfect condition, fully refurbished every 3 months or 10,000 miles.",
  longitude: rand(-122.501417..-122.387679),
  latitude: rand(37.648519..37.788092),
  city: "San Francisco",
  state: "CA",
  price: 100000,
  user_id: user1.id,
  category_id: cat4.id
)

post11 = Post.create(
  title: "Dream Spa",
  description: "Brand new, never used! The Dream Spa is the best way to sleep the way you want and experience the dreams of your choice!",
  longitude: rand(-122.501417..-122.387679),
  latitude: rand(37.648519..37.788092),
  city: "San Francisco",
  state: "CA",
  price: 1500,
  user_id: user1.id,
  category_id: cat1.id
)

post12 = Post.create(
  title: "Nike Shoes",
  description: "Brand new, limited",
  longitude: rand(-122.501417..-122.387679),
  latitude: rand(37.648519..37.788092),
  city: "San Francisco",
  state: "CA",
  price: 195,
  user_id: user1.id,
  category_id: cat6.id
)

post13 = Post.create(
  title: "2029 Classic Apple iMove",
  description: "Great old iMove from the early days of autonomous cars.",
  longitude: rand(-122.501417..-122.387679),
  latitude: rand(37.648519..37.788092),
  city: "San Francisco",
  state: "CA",
  price: 45000,
  user_id: user1.id,
  category_id: cat4.id
)

post14 = Post.create(
  title: "Elderly Care Robot",
  description: "This robot allows you to maintain a normal career while leaving mom or dad home during the day. This bot monitors your elderly relative nonstop and provides assistence performing basic tasks as well as ensuring that all medication, exercise, and meals are attended to as prescribed.",
  longitude: rand(-122.501417..-122.387679),
  latitude: rand(37.648519..37.788092),
  city: "San Francisco",
  state: "CA",
  price: 200000,
  user_id: user1.id,
  category_id: cat17.id
)

post15 = Post.create(
  title: "Meal Replacement Pills",
  description: "Pack of 500, each pill contains full daily nutritional stack for the average adult human.",
  longitude: rand(-122.501417..-122.387679),
  latitude: rand(37.648519..37.788092),
  city: "San Francisco",
  state: "CA",
  price: 2000,
  user_id: user1.id,
  category_id: cat11.id
)

post16 = Post.create(
  title: "X47 Sony Shower Unit",
  description: "Full massage mode, heat and cold therapy, built in Bose speakers.",
  longitude: rand(-122.501417..-122.387679),
  latitude: rand(37.648519..37.788092),
  city: "San Francisco",
  state: "CA",
  price: 2975,
  user_id: user1.id,
  category_id: cat1.id
)

post17 = Post.create(
  title: "Noise Cancelling Sleep Pod",
  description: "Full noise cancelling, precision temperature control, dual adjustable resistance, fully filtered air supply.",
  longitude: rand(-122.501417..-122.387679),
  latitude: rand(37.648519..37.788092),
  city: "San Francisco",
  state: "CA",
  price: 30000,
  user_id: user1.id,
  category_id: cat10.id
)

post18 = Post.create(
  title: "2058 Chevy Camaro",
  description: "Beautiful condition. Fully loaded, low miles, folds up for easy storage.",
  longitude: rand(-122.501417..-122.387679),
  latitude: rand(37.648519..37.788092),
  city: "San Francisco",
  state: "CA",
  price: 85000,
  user_id: user1.id,
  category_id: cat4.id
)

post19 = Post.create(
  title: "Weather proof hoodie",
  description: "Barely worn, size large.",
  longitude: rand(-122.501417..-122.387679),
  latitude: rand(37.648519..37.788092),
  city: "San Francisco",
  state: "CA",
  price: 75,
  user_id: user1.id,
  category_id: cat6.id
)

post20 = Post.create(
  title: "Color-shifting heels",
  description: "Brand new, changes color every 24 hours.",
  longitude: rand(-122.501417..-122.387679),
  latitude: rand(37.648519..37.788092),
  city: "San Francisco",
  state: "CA",
  price: 250,
  user_id: user1.id,
  category_id: cat6.id
)

post21 = Post.create(
  title: "Sweet hat",
  description: "Look so cool, such wow!",
  longitude: rand(-122.501417..-122.387679),
  latitude: rand(37.648519..37.788092),
  city: "San Francisco",
  state: "CA",
  price: 1000000,
  user_id: user1.id,
  category_id: cat6.id
)

post22 = Post.create(
  title: "Glow in the dark running shoes",
  description: "Brand new, mens size 10.",
  longitude: rand(-122.501417..-122.387679),
  latitude: rand(37.648519..37.788092),
  city: "San Francisco",
  state: "CA",
  price: 125,
  user_id: user1.id,
  category_id: cat6.id
)

post23 = Post.create(
  title: "Modern pants",
  description: "What the kids wear these days",
  longitude: rand(-122.501417..-122.387679),
  latitude: rand(37.648519..37.788092),
  city: "San Francisco",
  state: "CA",
  price: 79,
  user_id: user1.id,
  category_id: cat6.id
)

post24 = Post.create(
  title: "Washer and Dryer",
  description: "Used, in decent shape.",
  longitude: rand(-122.501417..-122.387679),
  latitude: rand(37.648519..37.788092),
  city: "San Francisco",
  state: "CA",
  price: 750,
  user_id: user1.id,
  category_id: cat1.id
)

post25 = Post.create(
  title: "2 Slice Toaster",
  description: "Brand new, great model!",
  longitude: rand(-122.501417..-122.387679),
  latitude: rand(37.648519..37.788092),
  city: "San Francisco",
  state: "CA",
  price: 200,
  user_id: user1.id,
  category_id: cat1.id
)

Image.create(url: "v1446621448/iphon2_dw8m0p.jpg", post_id: post1.id)
Image.create(url: "v1446621448/iphone1_bohqhl.jpg", post_id: post1.id)

Image.create(url: "v1446621266/lasergun3_igbhgu.jpg", post_id: post2.id)
Image.create(url: "v1446621266/lasergun2_qzegtv.jpg", post_id: post2.id)
Image.create(url: "v1446621266/lasergun1_nmmzqc.jpg", post_id: post2.id)

Image.create(url: "v1445291503/teapot_vpl0zi.png", post_id: post3.id)
Image.create(url: "v1446621147/hologram2_jjn1mt.jpg", post_id: post3.id)

Image.create(url: "v1446621033/hoverboard3_kz7d1h.jpg", post_id: post4.id)
Image.create(url: "v1446621034/hoverboard2_x58mpi.jpg", post_id: post4.id)
Image.create(url: "v1445291500/hoverboard_oncb4d.jpg", post_id: post4.id)

Image.create(url: "v1446620934/pod2_xbrqdm.jpg", post_id: post5.id)
Image.create(url: "v1446620934/pod1_bpvw6g.jpg", post_id: post5.id)

Image.create(url: "v1446620771/motorcycle2_w4hojx.jpg", post_id: post6.id)
Image.create(url: "v1446620771/motorcycle1_nlxwi2.jpg", post_id: post6.id)

Image.create(url: "v1446620370/glasses2_bd8vyv.jpg", post_id: post7.id)
Image.create(url: "v1446620371/glasses3_oh49bb.jpg", post_id: post7.id)
Image.create(url: "v1446620375/glasses1_gfljag.jpg", post_id: post7.id)

Image.create(url: "v1446620257/couch2_dqwan5.jpg", post_id: post8.id)
Image.create(url: "v1446620257/couch1_xv3z5a.jpg", post_id: post8.id)

Image.create(url: "v1446621822/coffeepot_odt1ou.jpg", post_id: post9.id)
Image.create(url: "v1446621822/coffeepot2_v0sgdl.jpg", post_id: post9.id)

Image.create(url: "v1446619973/audi1_gnsua6.jpg", post_id: post10.id)
Image.create(url: "v1446619974/audi3_nsxpm5.jpg", post_id: post10.id)
Image.create(url: "v1446619973/audi2_lt1sre.jpg", post_id: post10.id)

Image.create(url: "v1446619770/dreamspa2_kpgybm.jpg", post_id: post11.id)
Image.create(url: "v1445291818/dream_spa_p58um7.jpg", post_id: post11.id)
Image.create(url: "v1446619771/dreamspa1_ubgzqt.jpg", post_id: post11.id)

Image.create(url: "v1445291499/nikes_pfkqw6.jpg", post_id: post12.id)
Image.create(url: "v1446619510/nikes3_trfwgz.jpg", post_id: post12.id)
Image.create(url: "v1446619511/nikes2_vkf6hg.jpg", post_id: post12.id)

Image.create(url: "v1446619355/imove3_odvuh5.jpg", post_id: post13.id)
Image.create(url: "v1446619355/imove2_forkhw.jpg", post_id: post13.id)

Image.create(url: "v1445291499/robot_f3bq71.jpg", post_id: post14.id)
Image.create(url: "v1446619179/robot2_hu3dn9.jpg", post_id: post14.id)
Image.create(url: "v1446619179/robot3_zxptpw.jpg", post_id: post14.id)

Image.create(url: "v1445291500/pills_nnvwdl.jpg", post_id: post15.id)
Image.create(url: "v1446619019/pills2_pfc6ck.jpg", post_id: post15.id)
Image.create(url: "v1446619018/pills3_sbcrbo.jpg", post_id: post15.id)

Image.create(url: "v1446618836/shower2_itgqut.jpg", post_id: post16.id)
Image.create(url: "v1446618837/shower1_gyyzpi.jpg", post_id: post16.id)
Image.create(url: "v1446618836/shower3_zq6daf.jpg", post_id: post16.id)

Image.create(url: "v1446618044/sleeppod1_g6cjlm.jpg", post_id: post17.id)
Image.create(url: "v1446618044/sleeppod3_f7ixwy.jpg", post_id: post17.id)
Image.create(url: "v1446618044/sleeppod2_apt5oa.jpg", post_id: post17.id)

Image.create(url: "v1446622117/camaro1_bkpyrl.jpg", post_id: post18.id)
Image.create(url: "v1446622117/camara3_d4vrh5.jpg", post_id: post18.id)
Image.create(url: "v1446622117/camaro_2_fuekgx.jpg", post_id: post18.id)

Image.create(url: "v1446622361/hoodie_fnpqxc.jpg", post_id: post19.id)
Image.create(url: "v1446622361/hoodie2_ia1euh.jpg", post_id: post19.id)

Image.create(url: "v1446622541/heels1_ppwrre.jpg", post_id: post20.id)
Image.create(url: "v1446622541/heels2_jdgv7h.jpg", post_id: post20.id)

Image.create(url: "v1446622596/hat_ajbymw.jpg", post_id: post21.id)

Image.create(url: "v1446622877/shoes2_shq4xn.jpg", post_id: post22.id)
Image.create(url: "v1446622877/shoes3_y9ooqu.jpg", post_id: post22.id)
Image.create(url: "v1446622877/shoes1_d3fzf9.jpg", post_id: post22.id)

Image.create(url: "v1446622979/pants2_sqzejs.jpg", post_id: post23.id)
Image.create(url: "v1446622979/pants1_etwdtl.jpg", post_id: post23.id)

Image.create(url: "v1446623139/washer2_mkfmlk.jpg", post_id: post24.id)
Image.create(url: "v1446623139/washer1_utyvw2.jpg", post_id: post24.id)

Image.create(url: "v1446623579/toaster1_uhrjti.jpg", post_id: post25.id)
Image.create(url: "v1446623579/toaster2_vmxohr.jpg", post_id: post25.id)
