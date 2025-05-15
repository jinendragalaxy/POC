<template>
    <div class="lifecycle-demo">
      <h2>Lifecycle Hooks Demo</h2>
      <p>Check console for lifecycle hook logs</p>
      <!-- IF PRODUCTS ARE AVAIBLE THAN IT SHOWS THEM -->
      <div v-if="products.length">
        <h3>Products from API:</h3>
        <ul>
          <!-- LISTING OF ITEMS -->
          <li v-for="product in products" :key="product.id">
            {{ product.title }} - ${{ product.price }}
          </li>
        </ul>
      </div>
      <!-- OTHERWISE ELSE CONDTION -->
      <div v-else>
        <p>Loading products...</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LifecycleDemo',
    data() {
      return {
        // PRODUCT LIST STORE HERE
        products: []  
      }
    },
    // CALLED BEFORE CREATING THE COMPONENT
    beforeCreate() {
      console.log('beforeCreate: Component initialization begins')
    },
    // CALLED AFTER CREATING THE COMPONENT
    created() {
      console.log('created: Component is created, data is reactive')
      this.fetchProducts()
    },
    // CALEED BEFORE MOUNTING IN THE DOM
    beforeMount() {
      console.log('beforeMount: Template compilation completed, before DOM insertion')
    },
    // CALLED AFTER MOUNTING IN THE DOM
    mounted() {
      console.log('mounted: Component is mounted to DOM')
    },
    // CALLED BEFORE UPDATING DOM
    beforeUpdate() {
      console.log('beforeUpdate: Before DOM re-render')
    },
    // CALLED AFTER UPDATING DOM
    updated() {
      console.log('updated: After DOM re-render')
    },
    // CALLED BEFORE DESTROYING COMPONENT
    beforeDestroy() {
      console.log('beforeDestroy: Before component destruction')
    },
    // CALLED AFTER THE COMPONENT IS DESTROYED
    destroyed() {
      console.log('destroyed: Component is destroyed')
    },
    methods: {
      // FETCHING PRODUCTS FROM ASYNC AWAIT
      async fetchProducts() {
        try {
          const response = await fetch('https://dummyjson.com/products')
          const data = await response.json()
          this.products = data.products.slice(0, 5) // Take first 5 products
          console.log('Products fetched successfully')
        } catch (error) {
          console.error('Error fetching products:', error)
        }
      }
    }
  }
  </script>