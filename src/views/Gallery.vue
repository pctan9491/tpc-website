<template>
  <div class="gallery-container">
    <h1 style="margin-top: 4rem; margin-bottom: 2rem">My Gallery</h1>
    <div class="gallery-grid">
      <div v-for="(image, index) in images" :key="index" class="gallery-item">
        <img :src="image.src" :alt="image.alt" class="gallery-image" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Gallery",
  data() {
    let sortedImages = [
      { src: "/image/personal-pic1.jpg", alt: "Description of image 1" },
      { src: "/image/personal-pic2.jpg", alt: "Description of image 2" },
      { src: "/image/personal-pic3.jpg", alt: "Description of image 3" },
      { src: "/image/personal-pic4.jpg", alt: "Description of image 4" },
      { src: "/image/personal-pic5.jpg", alt: "Description of image 5" },
      { src: "/image/personal-pic6.jpg", alt: "Description of image 6" },
      { src: "/image/personal-pic7.jpg", alt: "Description of image 7" },
      { src: "/image/personal-pic8.jpg", alt: "Description of image 8" },
      { src: "/image/personal-pic9.jpg", alt: "Description of image 9" },
      { src: "/image/personal-pic10.jpg", alt: "Description of image 10" },
      { src: "/image/personal-pic11.jpg", alt: "Description of image 11" },
      { src: "/image/personal-pic12.jpg", alt: "Description of image 12" },
      // ... other images
    ].sort((a, b) => {
      // Extracting numbers from filenames and sorting in descending order
      let aNum = parseInt(a.src.match(/\d+/)[0]);
      let bNum = parseInt(b.src.match(/\d+/)[0]);
      return bNum - aNum;
    });

    return {
      images: sortedImages,
    };
  },
};
</script>

<style>
.gallery-container {
  text-align: center;
  margin: auto;
  padding: 20px;
  background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.5) 0%,
      rgba(255, 255, 255, 0.5) 100%
    ),
    url("../../public/image/bg3.png") no-repeat center center;
  background-size: cover; /* Cover the entire container */
  background-position: center; /* Center the background image */
  background-repeat: no-repeat; /* Prevent the image from repeating */
}
.gallery-container h1 {
  color: #0b3b6d;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 15px;
  max-width: 1200px;
  margin: auto;
}

.gallery-item {
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.gallery-image {
  width: 200px; /* Adjust width as needed */
  height: 200px; /* Ensure height is the same as width for square shape */
  object-fit: cover; /* This will cover the area without stretching the image */
  overflow: hidden; /* Hide parts of the image that don't fit */
  display: block;
  margin: auto; /* Center align if within a container */
}

.gallery-image:hover {
  transform: scale(1.05);
}
</style>
