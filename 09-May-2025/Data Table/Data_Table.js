let People = [];

const searchInput = document.getElementById("search");
const resultsTable = document.getElementById("results");

const renderPeople = (list) => {
  try {
    resultsTable.innerHTML =
      list
        .map(
          (person) => `
            <tr>
                <td>${person.firstName}</td>
                <td>${person.lastName}</td>
                <td>${person.email}</td>
                <td>${person.department}</td>
            </tr>
        `
        )
        .join("") || '<tr><td colspan="4">No matches found</td></tr>';
  } catch (error) {
    console.error("Error rendering table:", error);
  }
};

const filterPeople = (searchTerm) => {
  try {
    if (!searchTerm) {
      return renderPeople(People);
    }
    const filtered = People.filter((p) =>
      Object.values(p).some((value) =>
        value.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    renderPeople(filtered);
  } catch (error) {
    console.error("Error filtering people:", error);
  }
};

const debounce = (func, delay) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };
};

const throttle = (func, limit) => {
  let lastRun = 0;
  return (...args) => {
    const now = Date.now();
    if (now - lastRun >= limit) {
      func(...args);
      lastRun = now;
    }
  };
};

const debounceFilter = debounce(filterPeople, 500);
const throttleFilter = throttle(filterPeople, 500);

searchInput.addEventListener("input", (e) => {
  const searchTerm = e.target.value;
  const mode = document.querySelector('input[name="mode"]:checked').value;

  if (mode === "instant") {
    filterPeople(searchTerm);
  } else if (mode === "debounce") {
    debounceFilter(searchTerm);
  } else {
    throttleFilter(searchTerm);
  }
});

fetch('Data_Table.json')
  .then(res => res.json())
  .then(data => {
    People = data;
    renderPeople(People);
  })
  .catch(err => console.error("Failed to fetch data:", err));