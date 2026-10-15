const add = (a) => {
  return (b) => {
    return a + b;
  };
};

const value = add(10)(20); // 30

// Use Case
const fetchHelper = (baseUrl) => {
  return (endpoint) => {
    return (options = {}) => {
      return fetch(`${baseUrl}${endpoint}`, options);
    };
  };
};

// Usage examples:
const apiClient = fetchHelper("https://jsonplaceholder.typicode.com");
const userEndpoint = apiClient("/users");

// GET request
userEndpoint()
  .then((response) => response.json())
  .then((data) => console.log(data));

// POST request
userEndpoint({
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name: "John", email: "john@example.com" }),
})
  .then((response) => response.json())
  .then((data) => console.log(data));

// Or chain it all together
fetchHelper("https://api.github.com")("/users")({
  headers: { "Accept": "application/json" },
})
  .then((response) => response.json())
  .then((data) => console.log(data));
