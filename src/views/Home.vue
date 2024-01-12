<template>
  <div class="home-container">
    <div class="title-section">
      <!-- Profile Picture -->
      <div class="profile-picture-container">
        <img
          src="../../public/image/profile-pic.jpeg"
          alt="Tan Ping Cheun"
          class="profile-picture"
        />
        <h1>Tan Ping Cheun Personal Website</h1>
      </div>
    </div>
    <div class="content-section">
      <div class="photo-gallery">
        <transition name="fade" mode="out-in">
          <img
            :src="currentPhoto"
            :key="photoKey"
            alt="Photo of Tan Ping Cheun"
          />
        </transition>
        <div class="gallery-controls">
          <button @click="previousPhoto">Previous</button>
          <button @click="nextPhoto">Next</button>
        </div>
      </div>
      <div class="designation">
        <h2>Tan Ping Cheun</h2>
        <h3>Penangite 01</h3>
        <p>
          UTAR Student with Bachelor Degree of Information Systems (Hons)
          Business Information Systems from Penang. Birthdate 2001-03-08 and
          MBTI ENFJ-A.
        </p>
        <!-- Add more personal information or introduction here -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      photos: [
        "/image/personal-pic4.jpg",
        "/image/personal-pic5.jpg",
        "/image/personal-pic6.jpg",
        "/image/personal-pic7.jpg",
        "/image/personal-pic8.jpg",
        "/image/personal-pic9.jpg",
        "/image/personal-pic10.jpg",
        "/image/personal-pic11.jpg",
        "/image/personal-pic12.jpg",
      ],
      currentPhotoIndex: 0,
      photoKey: 0,
    };
  },
  computed: {
    currentPhoto() {
      return this.photos[this.currentPhotoIndex];
    },
  },
  methods: {
    nextPhoto() {
      this.currentPhotoIndex =
        (this.currentPhotoIndex + 1) % this.photos.length;
      this.photoKey++;
    },
    previousPhoto() {
      this.currentPhotoIndex =
        (this.currentPhotoIndex + this.photos.length - 1) % this.photos.length;
      this.photoKey--;
    },
  },
  mounted() {
    setInterval(() => {
      this.nextPhoto();
    }, 3000); // Change image every 3 seconds
  },
};
</script>

<style>
html,
body,
ul {
  margin: 0;
  padding: 0;
}
.home-container {
  text-align: center;
}

.profile-picture-container {
  position: absolute; /* Position the image absolutely within the title section */
  top: 60%; /* Place it at the bottom of the title section */
  left: 50%; /* Center it horizontally */
  transform: translate(
    -50%,
    -50%
  ); /* Offset by half the width and height to center */
  z-index: 4; /* Make sure it's above the title-section but below the navbar if needed */
}

.profile-picture {
  border-radius: 70%; /* Makes the image circular */
  width: 120px; /* Adjust size as needed */
  height: 120px; /* Adjust size as needed */
  object-fit: cover; /* Ensures the image covers the area */
  border: 3px solid white; /* Adds a border around the image */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5); /* Adds a shadow for better visibility */
}

.title-section {
  position: relative;
  height: 103vh;
  object-fit: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("../../public/image/bg1.jpg") center/cover no-repeat; /* Adjust the path as needed */
  background-color: rgba(0, 0, 0, 0.5);
  background-blend-mode: overlay;
}

.title-section h1 {
  font-size: 80px;
  color: #ffffff;
  font-family: "Cursive Font Name", cursive; /* Replace with your chosen font */
  font-style: italic;
}

.content-section {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 103vh;
  object-fit: cover;
  background: url("../../public/image/bg2.jpg") center/cover no-repeat; /* Adjust the path as needed */
  background-color: rgba(0, 0, 0, 0.5);
  background-blend-mode: overlay;
}

.photo-gallery {
  flex-basis: 50%; /* Take up half the width of its container */
  max-width: 50%; /* Same as flex-basis */
  position: relative;
}

.photo-gallery img {
  display: block;
  max-width: 100%;
  height: auto;
  aspect-ratio: 1 / 1; /* Makes the image a square */
  object-fit: cover; /* Ensures the image covers the area */
}

.photo-gallery img {
  transition: opacity 1s ease-in-out;
}

.gallery-controls {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
}

.gallery-controls button {
  background-color: #fff;
  border: 1px solid #333;
  padding: 10px 15px;
  margin: 0 10px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.gallery-controls button:hover {
  background-color: #ddd;
}

.designation {
  flex-basis: 50%; /* Take up the remaining width */
  padding-left: 50px; /* Spacing between photo and text */
}

.designation h2,
.designation h3,
.designation p {
  margin: 0;
  padding: 0.5em 0;
  font-family: "YourFontName", sans-serif;
  color: #ffffff;
}

.designation h2 {
  font-size: 2em;
}

.designation h3 {
  font-size: 1.5em;
}

.designation p {
  font-size: 1em;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
@media screen and (max-width: 768px) {
  .profile-picture-container {
    top: 50%; /* Adjust position for smaller screens */
  }

  .profile-picture {
    width: 80px; /* Smaller profile picture on small devices */
    height: 80px;
  }

  .title-section h1 {
    font-size: 40px; /* Smaller font size for the title */
  }

  .content-section {
    flex-direction: column; /* Stack elements vertically on smaller screens */
  }

  .photo-gallery,
  .designation {
    flex-basis: 100%; /* Full width for each section on small screens */
    max-width: 100%;
  }

  .designation {
    padding: 20px; /* Adjust padding for smaller screens */
  }
}

/* Ensure touch-friendly interactive elements */
.gallery-controls button {
  padding: 12px 20px; /* Larger buttons for touch devices */
}
</style>
