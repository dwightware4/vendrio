# Vendrio

[Link to Live App][heroku]

[heroku]: http://www.vendrio.xyz

## Minimum Viable Product

Vendrio is an online marketplace inspired by Craigslist. It is built using Ruby on Rails for the backend and React.js for the front end. Vendrio allows users to:

- [x] Create an account
- [x] Log in / Log out
- [x] Create, read, edit, and delete posts (classified ads)
- [x] Browse posts by category
- [x] Search posts by category and keywords
- [x] Create, read, edit, and delete images associated with posts


## Design Docs
* [View Wireframes][view]
* [DB schema][schema]

[view]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication, Post Model, and JSON API (0.5 days)

Phase 1 will implement user authentication to permit login, logout, and user account creation. I will store the passwords as a hashed digest using BCrypt, and will create a Dashboard page that logged in users will be directed to upon successfully logging in or creating a new account. I will then build a full JSON API for Posts.

[Details][phase-one]

### Phase 2: Flux Architecture and Post CRUD (1 day)

Phase 2 is focused on setting up Flux, the React Router, and the React view structure for the main application. After the basic Flux architecture has been set up, a Post store will be implemented and a set of actions corresponding to the needed CRUD functionality created. Once this is done, I will create React views for the Posts `RecentPosts` (shown on the User Dashboard view), `IndexItem` and `New`. At the end of Phase 2, Posts can be created, read, edited and destroyed in the browser.

[Details][phase-two]

### Phase 3: Categories and Searching (1 day)

Phase 3 adds organization to the Posts. Posts belong to a category, which has its own `Index` view. I will create a JSON API for Categories. Users can bring up posts in a separate `SearchIndex` view by searching for them by category.

[Details][phase-three]

### Phase 4: Image Upload and Google Maps API (2 days)

Phase 4 adds image upload functionality via Cloudinary's API, as well as a custom Google Map display for the category show component. Images may be uploaded and deleted, and all posts locations will be displayed automatically on the Google map. Clicking the Google Map Markers will direct the user to the show component for the corresponding post.

[Details][phase-four]

### Phase 5: Styling Cleanup and Seeding (1 day)

Phase 5 will involve styling the app using CSS and bootstrap, as well as building a seed file.

### To-Do
- [ ] Refactor code
- [ ] Add footer
- [ ] Add contact mechanism between sellers and buyers

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
