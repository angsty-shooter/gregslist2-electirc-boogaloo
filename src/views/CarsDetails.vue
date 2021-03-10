
<template>
  <div class="cars-details">
    <h1>Welcome to the details page</h1>
    {{ state.car }}
    <button type="button" class="btn btn-outline-danger" @click="deleteCar">
      Delete Car
    </button>

    <form class="form-inline" onsubmit="app.carsController.createCar(event)">
      <div class="form-group">
        <input
          type="text"
          name="make"
          id="make"
          class="form-control"
          placeholder="Make"
          aria-describedby="helpId"
          v-model="state.car.make"
        />
      </div>
      <div class="form-group">
        <input
          type="text"
          name="model"
          id="model"
          class="form-control"
          placeholder="Model"
          aria-describedby="helpId"
          v-model="state.car.model"
        />
      </div>
      <div class="form-group">
        <input
          type="number"
          name="year"
          id="year"
          class="form-control"
          placeholder="Year"
          aria-describedby="helpId"
          v-model="state.car.year"
        />
      </div>
      <div class="form-group">
        <input
          type="number"
          name="price"
          id="price"
          class="form-control"
          placeholder="Price"
          aria-describedby="helpId"
          v-model="state.car.price"
        />
      </div>
      <div class="form-group">
        <input
          type="text"
          name="description"
          id="description"
          class="form-control"
          placeholder="Description"
          aria-describedby="helpId"
          v-model="state.car.description"
        />
      </div>
      <div class="form-group">
        <input
          type="text"
          name="imgUrl"
          id="imgUrl"
          class="form-control"
          placeholder="ImgUrl"
          aria-describedby="helpId"
          v-model="state.car.imgUrl"
        />
      </div>
      <button class="btn btn-info" type="submit">Create</button>
    </form>
  </div>
</template>

<script>
import { onMounted, reactive, computed } from 'vue'
import { onBeforeRouteLeave, useRoute, useRouter } from 'vue-router'
import { carsService } from '../services/CarsService'
import { AppState } from '../Appstate'
export default {
  name: 'CarsDetails',
  setup () {
    const route = useRoute()
    const router = useRouter()
    const state = reactive({
      car: computed(() => AppState.activeCar)
    })
    onMounted(() => {
      carsService.getCar(route.params.id)
    })
    onBeforeRouteLeave((to, from, next) => {
      if (window.confirm('You sure bro?')) {
        AppState.activeCar = {}
        next()
      }
    })
    return {
      route,
      state,
      async deleteCar () {
        await carsService.deleteCar(state.car._id)
        router.push({ name: 'Cars' })
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
</style>
