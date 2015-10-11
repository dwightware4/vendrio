# Phase 3: Categories and Search (2 days)

## Rails
### Models
* Category

### Controllers
* Api::CategoriesController (create, index, show)

### Views
* categories/index.json.jbuilder
* categories/show.json.jbuilder


## Flux
### Views (React Components)
* CategoriesIndex
  - CategoryIndexItem
* SearchIndex

### Stores
* Category

### Actions
* ApiActions.receiveAllCategories
* ApiActions.receiveSingleCategory

### ApiUtil
* ApiUtil.fetchAllCategories
* ApiUtil.fetchSingleCategory

## Gems/Libraries
