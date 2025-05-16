<template>
  <div>
    <info-page />
    <contact-page />
  </div>
</template>

<script>
import InfoPage from './views/InfoPage.vue';
import ContactPage from './views/ContactPage.vue';

export default {
  components: {
    InfoPage,
    ContactPage
  }
}
</script>
