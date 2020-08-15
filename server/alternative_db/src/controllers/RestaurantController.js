const db = require("../db")


module.exports = {
    async index(req, res) {
        try{
            const results = await db.query("select * from restaurants");
            console.log(results, '------')
            res.send({restaurant})
        } catch{
            res.status(404).send({
                error: 'no more restaurants'
            })
        }
    },
    async findRestuarant(req, res) {
        try{
            const {params} = req
            console.log(params)
        } catch{
            res.status(404).send({
                error: 'no more restaurants'
            })
        }
    },

    async createRestuarant(req, res) {
        try{
            const {params} = req
            console.log(params)
        } catch{
            res.status(404).send({
                error: 'no more restaurants'
            })
        }
    },
}