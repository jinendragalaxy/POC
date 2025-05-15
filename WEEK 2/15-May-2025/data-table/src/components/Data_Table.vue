<template>
    <div class="container">
      <h2>Search People</h2>
  
      <!-- Filters & Input -->
      <div class="controls">
        <select v-model="filterBy" class="custom-select">
          <option value="all">All Columns</option>
          <option value="firstName">First Name</option>
          <option value="lastName">Last Name</option>
          <option value="email">Email</option>
          <option value="department">Department</option>
        </select>
  
        <input
          type="text"
          v-model="searchTerm"
          class="custom-input"
          placeholder="Search..."
        />
      </div>
  
      <!-- Radio buttons for mode -->
      <div class="modes">
        <label><input type="radio" value="instant" v-model="mode" /> Instant</label>
        <label><input type="radio" value="debounce" v-model="mode" /> Debounce</label>
        <label><input type="radio" value="throttle" v-model="mode" /> Throttle</label>
      </div>
  
      <!-- Table -->
      <table class="custom-table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="filteredPeople.length === 0">
            <td colspan="4">No matches found</td>
          </tr>
          <tr v-for="person in filteredPeople" :key="person.email">
            <td>{{ person.firstName }}</td>
            <td>{{ person.lastName }}</td>
            <td>{{ person.email }}</td>
            <td>{{ person.department }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        People: [],
        searchTerm: "",
        filterBy: "all",
        mode: "instant",
        filteredPeople: [],
        debounceTimeout: null,
        lastThrottleTime: 0,
      };
    },
    watch: {
      // Watch these fields and apply filter accordingly based on mode
      searchTerm() {
        this.applyFilter();
      },
      filterBy() {
        this.applyFilter();
      },
      mode() {
        this.applyFilter();
      },
    },
    methods: {
      applyFilter() {
        if (this.mode === "instant") {
          this.filterPeople();
        } else if (this.mode === "debounce") {
          this.debounceFilter();
        } else if (this.mode === "throttle") {
          this.throttleFilter();
        }
      },
  
      filterPeople() {
        const term = this.searchTerm.trim().toLowerCase();
  
        if (!term) {
          this.filteredPeople = this.People;
          return;
        }
  
        this.filteredPeople = this.People.filter((person) => {
          if (this.filterBy === "all") {
            return Object.values(person).some((val) =>
              val.toLowerCase().includes(term)
            );
          } else {
            return person[this.filterBy].toLowerCase().includes(term);
          }
        });
      },
  
      debounceFilter() {
        clearTimeout(this.debounceTimeout);
        this.debounceTimeout = setTimeout(() => {
          this.filterPeople();
        }, 500); // 500ms debounce delay
      },
  
      throttleFilter() {
        const now = Date.now();
        if (now - this.lastThrottleTime >= 500) {
          this.filterPeople();
          this.lastThrottleTime = now;
        }
        // else ignore calls within 500ms
      },
  
      fetchPeople() {
        fetch("./Data_Table.json")
          .then((res) => res.json())
          .then((data) => {
            this.People = data;
            this.filteredPeople = data;
          })
          .catch((err) => console.error("Failed to fetch data:", err));
      },
    },
    mounted() {
      this.fetchPeople();
    },
  };
  </script>
  
  <style scoped>
  @import './styles.css'
  </style>
  