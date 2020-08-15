const RestaurantController = require("./controllers/RestaurantController")


module.exports = (app) => {
    app.get("/restuarants", 
        RestaurantController.index )

    app.get("/restaurants/:restaurantsId", 
        RestaurantController.findRestuarant )

    app.post("/restaurant", 
        RestaurantController.createRestuarant )




}