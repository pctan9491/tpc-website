<template>
  <head>
    <!-- ... other links and scripts ... -->
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
      rel="stylesheet"
    />
  </head>

  <div class="contact-page">
    <h1 class="contact-heading">Contact Me</h1>
    <div class="contact-icons">
      <!-- LinkedIn Icon -->
      <a
        href="https://www.linkedin.com/in/tan-ping-cheun-0a88ba148/"
        target="_blank"
        class="icon-link"
      >
        <i class="fab fa-linkedin"></i>
      </a>
      <!-- GitHub Icon -->
      <a href="https://github.com/pctan9491" target="_blank" class="icon-link">
        <i class="fab fa-github"></i>
      </a>
      <!-- Instagram Icon -->
      <a
        href="https://www.instagram.com/pctan9491/"
        target="_blank"
        class="icon-link"
      >
        <i class="fab fa-instagram"></i>
      </a>
      <!-- Facebook Icon -->
      <a
        href="https://www.facebook.com/profile.php?id=100007523895074"
        target="_blank"
        class="icon-link facebook"
      >
        <i class="fab fa-facebook-square"></i>
      </a>
      <!-- Email Icon -->
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=pctan9491@gmail.com"
        target="_blank"
        class="icon-link email"
      >
        <i class="fas fa-envelope"></i>
      </a>
      <!-- Phone Icon -->
      <a
        href="javascript:void(0)"
        @click="showPhoneNumber"
        class="icon-link phone"
      >
        <i class="fas fa-phone"></i>
        <div v-if="phoneNumberVisible" class="phone-number-box">
          +60199130949
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      phoneNumberVisible: false,
    };
  },
  methods: {
    showPhoneNumber() {
      this.phoneNumberVisible = !this.phoneNumberVisible;
    },
  },

  // Your component data and methods here
};
</script>

<style scoped>
.contact-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.5) 0%,
      rgba(255, 255, 255, 0.5) 100%
    ),
    url("../../public/image/bg3.png") no-repeat center center;
  color: #333;
  text-align: center;
}

.contact-heading {
  font-size: 2em;
  margin-bottom: 1em;
  margin-top: 1em;
  color: #0b3b6d;
}

.contact-icons {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
}

.icon-link {
  color: #333; /* Default icon color */
  font-size: 3em; /* Icon size */
  transition: transform 0.3s ease, color 0.3s ease;
}

.icon-link:hover {
  transform: scale(1.1); /* Enlarge icons on hover */
}

.linkedin:hover {
  color: #0077b5;
}

.github:hover {
  color: #333;
}

.instagram:hover {
  color: #e1306c;
}

.facebook:hover {
  color: #3b5998;
}

.email:hover {
  color: #d44638;
}

.phone:hover {
  color: #34b7f1;
}

.phone-number-box {
  /* ... other styles remain unchanged ... */
  top: 100%; /* Position below the phone icon */
  left: 50%; /* Start at the center of the phone icon */
  transform: translateX(-50%); /* Center it correctly */
  /* ... other styles remain unchanged ... */
}

.phone-number-box:after {
  content: "";
  position: absolute;
  top: -20px; /* Arrow just above the tooltip box */
  left: 50%;
  margin-left: -10px; /* Center the arrow */
  border-width: 10px;
  border-style: solid;
  border-color: #fff transparent transparent transparent;
  /* ... other styles remain unchanged ... */
}

.icon-link.phone:focus .phone-number-box,
.icon-link.phone:focus-within .phone-number-box,
.phone-number-box:hover {
  visibility: visible;
  opacity: 1;
}

@media (max-width: 768px) {
  .contact-icons {
    flex-direction: column;
  }

  .icon-link {
    margin-bottom: 20px;
  }
}
</style>
