<template>
  <div>
    <info-page />
    <contact-page />
  </div>
</template>

<script>
import InfoPage from '../src/views/InfoPage.vue';
import ContactPage from '../src/views/ContactPage.vue';

export default {
  components: {
    InfoPage,
    ContactPage
  }
}
</script>
