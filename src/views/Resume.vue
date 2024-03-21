<template>
  <div class="resume-page">
    <div class="resume-content">
      <h1 class="resume-title">Resume</h1>
      <p class="resume-intro">
        Discover my professional background and skill set. Click to get my
        detailed resume.
      </p>
      <button @click="downloadResume" class="resume-download-btn">
        <span class="btn-text">Download</span>
        <span class="btn-icon">
          <i class="fas fa-file-download"></i>
        </span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Resume",
  methods: {
    downloadResume() {
      // The 'public' folder is at the root of your web server and 'TanPingCheun_resume.pdf' is directly inside 'public'
      const resumePath = "TanPingCheun_resume.pdf"; // No need for '../../'
      window.location.href = resumePath;
    },
  },
};
</script>

<style>
.resume-page {
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

.resume-content {
  display: flex;
  flex-direction: column;
  align-items: center; /* Centers children horizontally in a flex column */
  justify-content: center; /* Centers children vertically */
  margin: 20px;
  padding: 40px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.resume-content:hover {
  transform: translateY(-5px);
}

.resume-title {
  font-size: 2rem;
  color: #007bff;
  margin-bottom: 1rem;
}

.resume-intro {
  margin-bottom: 2rem;
}

.resume-download-btn {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  outline: none;
  transition: background-color 0.3s ease;
}

.resume-download-btn:hover,
.resume-download-btn:focus {
  background-color: #0056b3;
}

.btn-text {
  display: block;
}

.btn-icon {
  display: flex;
  align-items: center;
}

@media (max-width: 768px) {
  .resume-content {
    padding: 20px;
  }

  .resume-title {
    font-size: 1.5rem;
  }

  .resume-download-btn {
    padding: 8px 16px;
    font-size: 0.9rem;
  }
}
</style>
