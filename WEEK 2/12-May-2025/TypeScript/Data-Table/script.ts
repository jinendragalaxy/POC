type Person = {
    firstName: string;
    lastName: string;
    email: string;
    department: string;
  };
  
  let People: Person[] = [];
  
  const searchInput = document.getElementById("search") as HTMLInputElement;
  const resultsTable = document.getElementById("results") as HTMLElement;
  
  const renderPeople = (list: Person[]) => {
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
  
  const filterPeople = (searchTerm: string) => {
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
  
  searchInput.addEventListener("input", (e: Event) => {
    const target = e.target as HTMLInputElement;
    const searchTerm = target.value;
    const mode = (document.querySelector('input[name="mode"]:checked') as HTMLInputElement)?.value;
  
    if (mode === "instant") {
      filterPeople(searchTerm);
    } else if (mode === "debounce") {
      debounceFilter(searchTerm);
    } else {
      throttleFilter(searchTerm);
    }
  });
  
  fetch("Data_Table.json")
    .then((res) => res.json())
    .then((data: Person[]) => {
      People = data;
      renderPeople(People);
    })
    .catch((err) => console.error("Failed to fetch data:", err));
  