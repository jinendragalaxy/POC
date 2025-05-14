<template>
    <div class="lifecycle-demo">
      <h2>Lifecycle Hooks Demo</h2>
      <p>Check console for lifecycle hook logs</p>
      <div v-if="products.length">
        <h3>Products from API:</h3>
        <ul>
          <li v-for="product in products" :key="product.id">
            {{ product.title }} - ${{ product.price }}
          </li>
        </ul>
      </div>
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
        products: []
      }
    },
    beforeCreate() {
      console.log('beforeCreate: Component initialization begins')
    },
    created() {
      console.log('created: Component is created, data is reactive')
      this.fetchProducts()
    },
    beforeMount() {
      console.log('beforeMount: Template compilation completed, before DOM insertion')
    },
    mounted() {
      console.log('mounted: Component is mounted to DOM')
    },
    beforeUpdate() {
      console.log('beforeUpdate: Before DOM re-render')
    },
    updated() {
      console.log('updated: After DOM re-render')
    },
    beforeDestroy() {
      console.log('beforeDestroy: Before component destruction')
    },
    destroyed() {
      console.log('destroyed: Component is destroyed')
    },
    methods: {
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