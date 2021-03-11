<template>
  <div class="col-4">
    <router-link :to="{name: 'CarsDetails', params: {id: car._id}}">
      <div class="card car">
        <img class="card-img-top" :src="car.imgUrl" alt="car">
        <div class="card-body">
          <h4 class="card-title">{{car.make}} | {{car.model}}</h4>
          <p calss="card-text">{{car.year}} | ${{car.price}}</p>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'car',
  props: {
    car: Object
  },
  setup () {
    return {}
  },
  components: {}
}
</script>

<style scoped>
.car:hover {
  transform: translateY(-5px);
  box-shadow: 1px 3px 5px rgb(94, 94, 94);
  cursor: pointer
}
.car {
  transition: all .2s;
  color: black;
}
</style>
