type Person = {
  firstName: string;
  lastName: string;
  email: string;
  department: string;
};

let People: Person[] = [];

const searchInput = document.getElementById("search") as HTMLInputElement;
const filterBySelect = document.getElementById("filterBy") as HTMLSelectElement;
const resultsTable = document.getElementById("results") as HTMLElement;

const renderPeople = (list: Person[]) => {
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

const filterPeople = (searchTerm: string, filterBy: string) => {
  const term = searchTerm.trim().toLowerCase();

  if (!term) {
    renderPeople(People);
    return;
  }

  const filtered = People.filter((person) => {
    if (filterBy === "all") {
      return Object.values(person).some(val =>
        val.toLowerCase().includes(term)
      );
    } else {
      return person[filterBy as keyof Person].toLowerCase().includes(term);
    }
  });

  renderPeople(filtered);
};

// Debounce and Throttle Functions
const debounce = <T extends (...args: any[]) => void>(func: T, delay: number): T => {
  let timeout: ReturnType<typeof setTimeout>;
  return ((...args: any[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  }) as T;
};

const throttle = <T extends (...args: any[]) => void>(func: T, limit: number): T => {
  let lastRun = 0;
  return ((...args: any[]) => {
    const now = Date.now();
    if (now - lastRun >= limit) {
      func(...args);
      lastRun = now;
    }
  }) as T;
};

const debounceFilter = debounce(filterPeople, 500);
const throttleFilter = throttle(filterPeople, 500);


// handle search function
const handleSearch = () => {
  const searchTerm = searchInput.value;
  const filterBy = filterBySelect.value;
  const mode = (document.querySelector('input[name="mode"]:checked') as HTMLInputElement)?.value;

  if (mode === "instant") {
    filterPeople(searchTerm, filterBy);
  } else if (mode === "debounce") {
    debounceFilter(searchTerm, filterBy);
  } else {
    throttleFilter(searchTerm, filterBy);
  }
};

// Add listeners
searchInput.addEventListener("input", handleSearch);
filterBySelect.addEventListener("change", handleSearch);

// Load data
fetch("Data_Table.json")
  .then((res) => res.json())
  .then((data: Person[]) => {
    People = data;
    renderPeople(People);
  })
  .catch((err) => console.error("Failed to fetch data:", err));
