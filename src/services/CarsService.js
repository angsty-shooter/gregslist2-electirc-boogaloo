import { AppState } from '../AppState.js'
import { sandboxApi } from './AxiosService.js'

class CarsService {
  async getCars () {
    try {
      const res = await sandboxApi.get('cars')
      AppState.cars = res.data
    } catch (error) {
      console.error(error)
    }
  }

  async getCarId (id) {
    try {
      const res = await sandboxApi.get('cars/' + id)
      AppState.activeCar = res.data
    } catch (error) {
      console.error(error)
    }
  }

  async createCar (rawCar) {
    try {
      const res = await sandboxApi.post('cars', rawCar)
      AppState.cars.push(res.data)
      return res.data._id
    } catch (error) {
      console.error(error)
    }
  }

  // async bid

  async deleteCar (id) {
    try {
      await sandboxApi.delete(`cars/${id}`)
      this.getCars()
    } catch (error) {
      console.error(error)
    }
  }
}

export const carsService = new CarsService()
