const RestaurantsController = require('./controllers/RestaurantsController')

module.exports = (app) => {


  app.get('/restuarants',
    RestaurantsController.index)

  app.get('/restuarants/:restuarantId',
    RestaurantsController.show)

  app.post('/postRestuarant',
    RestaurantsController.post)

  app.delete('/deleteRestuarant/:restuarantId',
    RestaurantsController.delete)


  app.post('/updateRestuarant/:restuarantId',
    RestaurantsController.update)


}
