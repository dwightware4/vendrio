# Vendrio

[Heroku link][heroku]

[heroku]: http://www.vendrio.it

## Minimum Viable Product

Vendrio is an online marketplace inspired in part by Craigslist and in part by Reddit. It is built using Ruby on Rails for the backend and React.js for the front end. Vendrio allows users to:

<!-- This is a Markdown checklist. Use it to keep track of your progress! -->

- [ ] Create an account
- [ ] Log in / Log out
- [ ] Create, read, edit, and delete classified ads
- [ ] Browse ads by category and location
- [ ] Upvote ads that are high quality/well priced/etc
- [ ] Downvote ads that are poor quality/overpriced/etc

## Design Docs
* [View Wireframes][view]
* [DB schema][schema]

[view]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication, Ad Model, and JSON API (1.5 days)

In Phase 1, I will begin by implementing user signup and authentication (using BCrypt). There will be a basic landing page after signup that will hold the container for the application's root React component. Before building out the front end, I will begin by setting up a full JSON API for Ads.

[Details][phase-one]

### Phase 2: Flux Architecture and Ad CRUD (2.5 days)

Phase 2 is focused on setting up Flux, the React Router, and the React view structure for the main application. After the basic Flux architecture has been set up, an Ad store will be implemented and a set of actions corresponding to the needed CRUD functionality created. Once this is done, I will create React views for the Ads `Index`, `IndexItem` and `Form`. At the end of Phase 2, Ads can be created, read, edited and destroyed in the browser. Ads should save to the database when the form loses focus or is left idle after editing.

[Details][phase-two]

### Phase 3: Categories and Locations (2 days)

Phase 3 adds organization to the Ads. Ads belong to a category, which has its own `Index` view. Create JSON API for Categories. Ads can also now be tagged with a location. Users can bring up ads in a separate `SearchIndex` view by searching for their locations.

[Details][phase-three]


### Phase 4: Voting and Internal Ranking (2 days)

Phase 4 adds voting functionality and ad ranking. I will implement a feature that allows users to upvote or downvote ads, and a ranking system that will rank ads within a category based on karma count.

[Details][phase-four]

### Phase 5: Styling Cleanup and Seeding (1 day)

Phase 5 will involve styling the app using CSS and seeding the databse.

### Bonus Features (TBD)
- [ ] Add a time-based karma decay algorithm

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
