# Vendrio

[Link to Live App][heroku]

[heroku]: http://www.vendrio.it

## Minimum Viable Product

Vendrio is an online marketplace inspired in part by Craigslist and in part by Reddit. It is built using Ruby on Rails for the backend and React.js for the front end. Vendrio allows users to:

<!-- This is a Markdown checklist. Use it to keep track of your progress! -->

- [ ] Create an account
- [ ] Log in / Log out
- [ ] Create, read, edit, and delete posts (classified ads)
- [ ] Browse posts by category and location
- [ ] Upvote posts that are high quality/well priced/etc
- [ ] Downvote posts that are poor quality/overpriced/etc

## Design Docs
* [View Wireframes][view]
* [DB schema][schema]

[view]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication, Post Model, and JSON API (1.5 days)

In Phase 1 I will implement user authentication to permit login, logout, and user account creation. I will store the passwords as a hashed digest using BCrypt, and will create a Dashboard page that logged in users will be direct to upon successfully logging in or creating a new account.I will then build a full JSON API for Posts.

[Details][phase-one]

### Phase 2: Flux Architecture and Post CRUD (2.5 days)

Phase 2 is focused on setting up Flux, the React Router, and the React view structure for the main application. After the basic Flux architecture has been set up, a Post store will be implemented and a set of actions corresponding to the needed CRUD functionality created. Once this is done, I will create React views for the Posts `Index` (shown on the User Dashboard page), `IndexItem` and `Form`. At the end of Phase 2, Posts can be created, read, edited and destroyed in the browser.

[Details][phase-two]

### Phase 3: Categories and Searching (2 days)

Phase 3 adds organization to the Posts. Posts belong to a category, which has its own `Index` view. I will create a JSON API for Categories. Users can bring up posts in a separate `SearchIndex` view by searching for them by location and/or category.

[Details][phase-three]

### Phase 4: Voting and Internal Ranking (2 days)

Phase 4 adds voting functionality and post ranking. I will implement a feature that allows users to upvote or downvote posts. I will then update the Category Index to display posts in descending order of Karma count.

[Details][phase-four]

### Phase 5: Styling Cleanup and Seeding (1 day)

Phase 5 will involve styling the app using CSS and seeding the database.

### Bonus Features (TBD)
- [ ] Add a time-based karma decay algorithm

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
