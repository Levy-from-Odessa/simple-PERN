const {Restaurant} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      let restaurants = await Restaurant.findAll()
      res.send(restaurants)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to fetch the Restaurants'
      })
    }
  },
  async show (req, res) {
    try {
      console.log(req.params.restuarantId);
      const restaurant = await Restaurant.findById(req.params.restuarantId)
      res.send(restaurant)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to show the Restaurants'
      })
    }
  },
  async post (req, res) {
    try {
      const restaurant = await Restaurant.create(req.body)
      console.log(req.body)
      res.send(restaurant)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to create the Restaurant'
      })
    }
  },
  async update (req, res) {
    try {
      console.log(req.body);
      await Restaurant.update(req.body, {
        where: {
          id: req.params.restuarantId
        }
      })
      res.send(req.body)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to update the Restaurant'
      })
    }
  },
  async delete (req, res) {
    try {
      const restaurant = await Restaurant.findById(req.params.restuarantId)
      restaurant.destroy()
      console.log(req.params.restuarantId);
      
      res.send(restaurant)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to delete the Restaurant'
      })
    }
  }
}