<template>
  <form @submit.prevent="submitForm" class="contact-form">
    <input v-model="name" placeholder="Name" required />
    <input v-model="email" type="email" placeholder="Email" required />
    <textarea v-model="message" placeholder="Message" required></textarea>
    <button type="submit">Submit</button>
  </form>
</template>

<script>
import { EventBus } from '../event-bus.js';

export default {
  data() {
    return {
      name: '',
      email: '',
      message: ''
    };
  },
  methods: {
    submitForm() {
      const data = {
        name: this.name,
        email: this.email,
        message: this.message
      };
      EventBus.$emit('form-submitted', data);

      // Clear form
      this.name = '';
      this.email = '';
      this.message = '';
    }
  }
}
</script>

<style scoped>
.contact-form {
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  border: 2px solid #007BFF;
  border-radius: 8px;
  background-color: #f9faff;
  display: flex;
  flex-direction: column;
}

.contact-form input,
.contact-form textarea {
  font-size: 16px;
  padding: 10px;
  margin-bottom: 15px;
  border: 1.5px solid #007BFF;
  border-radius: 5px;
  transition: border-color 0.3s;
  resize: vertical;
}

.contact-form input:focus,
.contact-form textarea:focus {
  border-color: #0056b3;
  outline: none;
  background-color: #e6f0ff;
}

.contact-form button {
  background-color: #007BFF;
  color: white;
  font-size: 18px;
  padding: 12px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.contact-form button:hover {
  background-color: #0056b3;
}
</style>
