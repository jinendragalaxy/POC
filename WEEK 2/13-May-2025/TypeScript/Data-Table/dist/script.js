"use strict";
let People = [];
const searchInput = document.getElementById("search");
const filterBySelect = document.getElementById("filterBy");
const resultsTable = document.getElementById("results");
const renderPeople = (list) => {
    resultsTable.innerHTML = list.length
        ? list.map((person) => `
        <tr>
          <td>${person.firstName}</td>
          <td>${person.lastName}</td>
          <td>${person.email}</td>
          <td>${person.department}</td>
        </tr>
      `).join("")
        : `<tr><td colspan="4">No matches found</td></tr>`;
};
const filterPeople = (searchTerm, filterBy) => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) {
        renderPeople(People);
        return;
    }
    const filtered = People.filter((person) => {
        if (filterBy === "all") {
            return Object.values(person).some(val => val.toLowerCase().includes(term));
        }
        else {
            return person[filterBy].toLowerCase().includes(term);
        }
    });
    renderPeople(filtered);
};
// Debounce and Throttle Functions
const debounce = (func, delay) => {
    let timeout;
    return ((...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), delay);
    });
};
const throttle = (func, limit) => {
    let lastRun = 0;
    return ((...args) => {
        const now = Date.now();
        if (now - lastRun >= limit) {
            func(...args);
            lastRun = now;
        }
    });
};
const debounceFilter = debounce(filterPeople, 500);
const throttleFilter = throttle(filterPeople, 500);
const handleSearch = () => {
    var _a;
    const searchTerm = searchInput.value;
    const filterBy = filterBySelect.value;
    const mode = (_a = document.querySelector('input[name="mode"]:checked')) === null || _a === void 0 ? void 0 : _a.value;
    if (mode === "instant") {
        filterPeople(searchTerm, filterBy);
    }
    else if (mode === "debounce") {
        debounceFilter(searchTerm, filterBy);
    }
    else {
        throttleFilter(searchTerm, filterBy);
    }
};
// Add listeners
searchInput.addEventListener("input", handleSearch);
filterBySelect.addEventListener("change", handleSearch);
// Load data
fetch("Data_Table.json")
    .then((res) => res.json())
    .then((data) => {
    People = data;
    renderPeople(People);
})
    .catch((err) => console.error("Failed to fetch data:", err));
