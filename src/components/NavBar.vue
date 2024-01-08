<template>
  <nav class="navbar">
    <ul class="nav-list">
      <li class="nav-item">
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/about" class="nav-link">About Me</router-link>
        <router-link to="/resume" class="nav-link">Resume</router-link>
        <router-link to="/gallery" class="nav-link">Gallery</router-link>
        <router-link to="/contact" class="nav-link">Contact Me</router-link>
      </li>
      <!-- Add other navigation links here -->
      <!-- Example: -->
      <!-- <li class="nav-item"><router-link to="/about" class="nav-link">About</router-link></li> -->
      <!-- <li class="nav-item"><router-link to="/portfolio" class="nav-link">Portfolio</router-link></li> -->
      <!-- <li class="nav-item"><router-link to="/contact" class="nav-link">Contact</router-link></li> -->
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style>
/* Reset default padding and margin to remove any unwanted space */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box; /* Ensures padding doesn't affect the total width of elements */
}

/* Styling the navbar */
.navbar {
  background-color: rgba(
    51,
    51,
    51,
    0.534
  ); /* Or any color that fits your design */
  color: white;
  display: flex;
  justify-content: center; /* Center items horizontally */
  align-items: center; /* Center items vertically */
  padding: 1rem 0; /* Add some padding at the top and bottom of the navbar */
  position: fixed; /* Fix the navbar to the top of the page */
  width: 100%; /* Full width */
  top: 0;
  z-index: 1000; /* Ensure it's above other items */
}

.nav-list {
  list-style-type: none;
  display: flex;
  padding-left: 0; /* Removes default padding */
}

.nav-item {
  margin: 0 15px; /* Adds horizontal margin between navigation items */
}

.nav-link {
  color: white;
  text-decoration: none;
  font-size: 1rem;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif; /* Change to a common, clean-looking font */
  transition: color 0.3s ease-in-out;
  padding: 0.5rem; /* Adds padding around the links for better clickability */
}

.nav-link:hover {
  color: #04aa6d; /* Change color on hover */
}

/* Responsive design for smaller screens */
@media (max-width: 768px) {
  .nav-list {
    flex-direction: column;
    align-items: center;
  }

  .nav-item {
    margin: 0.5rem 0; /* Larger spacing for vertical layout */
  }
}
</style>
