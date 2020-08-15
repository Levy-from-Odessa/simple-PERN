import Api from './Api'

export default {
    restuarants () {
      return Api().get('restuarants')
    },
    postRestuarant (creditals) {
      return Api().post('postRestuarant', creditals)
    },
    deleteRestuarant (restaurantId) {
      return Api().delete(`deleteRestuarant/${restaurantId}`)
    },
    findRestuarant (restaurantId) {
      return Api().get(`restuarants/${restaurantId}`)
    },
    updateRestuarant(restuarant, id) {
        return Api().post(`/updateRestuarant/${id}`, restuarant)
    }
}