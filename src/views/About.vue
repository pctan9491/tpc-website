<template>
  <div class="about-page">
    <!-- Sidebar -->
    <aside class="sidebar">
      <img
        src="../../public/image/profile-pic.jpeg"
        alt="Profile"
        class="profile-image"
      />
      <nav class="sidebar-nav">
        <a href="#about-section">About</a>
        <a href="#experience-section">Work Experience(s)</a>
        <a href="#education-section">Education(s)</a>
        <a href="#project-section">Project(s)</a>
        <a href="#skill-section">Skill(s)</a>
        <a href="#cert-section">Cert(s)</a>
        <!-- Add other navigation links as necessary -->
      </nav>
    </aside>

    <!-- Main Content -->
    <div class="main-content">
      <!-- About Section -->
      <section id="about-section" class="content-section-about">
        <h1 class="section-heading">About</h1>
        <p>
          Recently UTAR graduate soon with a Bachelor Degree of Information
          Systems (Hons) Business Information Systems and TARUMT graduate with a
          Diploma of Internet Technology, seeking a challenging entry-level
          position in IT related job. Proficient in Python, Java, React Native,
          Tableau, R, C programming and ASP.NET. Have a strong communication,
          teamwork and problem-solving skills. Eager to leverage my knowledge
          and academic foundation to contribute to a dynamic team environment.
        </p>
      </section>

      <!-- Experience Section -->
      <section id="experience-section" class="content-section-about">
        <h1 class="section-heading">Work Experience(s)</h1>
        <div class="experience-details">
          <!-- Company A -->
          <h2>TBS Solution Sdn Bhd</h2>
          <p>October 2020 - January 2021</p>
          <p>
            As a software tester, I need to run and test the vehicle exam
            automation system in physically and run though many times to find
            out the errors and bugs.
          </p>
          <!-- Company B -->
          <h2>Dynamike Enterprise</h2>
          <p>October 2022 - January 2023</p>
          <p>
            Based on the customer requirement to modified the system to satisfy
            the their needs. The language use in front-end site are Vue.js,
            back-end site is Java, database using is pgAdmin.
          </p>
        </div>
      </section>
      <!-- Education Section -->
      <section id="education-section" class="education-section">
        <h1 class="section-heading" id="education-section-heading">
          Education(s)
        </h1>
        <div class="education-card">
          <h2>TARUMT</h2>
          <p>Penang, Malaysia</p>
          <p><strong>Degree:</strong> Diploma in Internet Technology</p>
          <p><strong>CGPA:</strong> 3.6/4.0</p>
          <h3>Relevant Courseworks:</h3>
          <ul>
            <li>Database Development and Application</li>
            <li>Object Oriented Programming Techniques</li>
            <li>System Analysis and Design</li>
            <li>Web Systems and Technologies</li>
            <li>Web Application Programming</li>
          </ul>
        </div>

        <div class="education-card">
          <h2>UTAR</h2>
          <p>Kampar, Perak</p>
          <p>
            <strong>Degree:</strong> Bachelor of Information Systems (Hons)
            Business Information Systems
          </p>
          <p><strong>CGPA:</strong> 3.4/4.0</p>
          <h3>Relevant Courseworks:</h3>
          <ul>
            <li>Mobile Application and Development</li>
            <li>Data Mining Techniques</li>
            <li>Information Technology Project Management</li>
            <li>Mini Project (React Native)</li>
            <li>Business Systems</li>
          </ul>
        </div>
      </section>
      <!--Project Section-->
      <section id="project-section" class="content-section-about">
        <h1 class="section-heading">Project(s)</h1>
        <div class="experience-details">
          <!-- Company A -->
          <h3>- UTAR Campus Mobile App</h3>
          <h3>- Taxi Fare Price Prediction</h3>
          <h3>- Hospital Management System</h3>
          <h3>- Personal Management Application (My Diary Function)</h3>
        </div>
      </section>
      <!--Skill Section-->
      <section id="skill-section" class="content-section-about">
        <h1 class="section-heading">Skill(s)</h1>
        <div class="experience-details">
          <!-- Company A -->
          <h3>- Language (Python, Java, C, ASP.NET C#, Php)</h3>
          <h3>
            - Web and Application Development (React Native, Vue.js, JavaScript,
            Android)
          </h3>
          <h3>- Database Management (SQL, PostgreSQL, MongoDB)</h3>
          <h3>- Data Analysis (Tableau, R, Google Sheet)</h3>
          <h3>- Data Mining Technique (using Python)</h3>
          <h3>- Communication with English, Mandarin, Malay</h3>
          <h3>- Teamwork</h3>
          <h3>- Problem Solving</h3>
          <h3>- Attention to details</h3>
        </div>
      </section>
      <!--Cert Section-->
      <section id="cert-section" class="content-section-about">
        <h1 class="section-heading">Cert(s)</h1>
        <div class="experience-details">
          <!-- Company A -->
          <h3>- Google Data Analytics Specialization</h3>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  // Add your Vue component data, methods, etc. here if needed
};
</script>

<style>
/* Ensure the root elements take up 100% of the height */
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: "Lato", sans-serif;
}

/* Make the sidebar fixed and full height */
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 250px; /* Adjust width as needed */
  background: #f0f0f0; /* Sidebar color */
  overflow-y: auto; /* Enable scrolling if content is long */
  z-index: 100; /* Above other content */
  transition: transform 0.3s ease-in-out; /* Smooth transition for sidebar toggle */
}

/* Style your profile image */
.profile-image {
  width: 150px; /* Adjust size as needed */
  height: 150px; /* Adjust size as needed */
  border-radius: 50%;
  margin: 20px auto; /* Center the image in the sidebar */
}

/* Style your navigation links */
.sidebar-nav a {
  font-family: "Lato", sans-serif;
  display: block;
  padding: 10px 20px;
  color: #333;
  text-decoration: none;
}

.sidebar-nav a:hover {
  background: #ddd;
}

/* Set the main content area to the right of the sidebar and take up the remaining space */
.main-content {
  margin-left: 250px; /* Equal to the width of the sidebar */
  overflow-y: auto;
  height: 100vh;
  transition: margin-left 0.3s ease-in-out; /* Smooth transition for content area when sidebar toggles */
}

/* Make each section fill the viewport */
.content-section-about {
  height: 100vh; /* 100% of the viewport height */
  display: flex;
  flex-direction: column; /* Stack children vertically */
  justify-content: center; /* Center children vertically */
  align-items: center; /* Center children horizontally */
  text-align: center;
  padding: 50px; /* Add some padding */
}

.content-section-about p {
  font-size: 1rem; /* Adjust to your preference */
  line-height: 1.6; /* Increases readability */
  text-align: justify; /* Aligns text on both left and right edges */
  color: #333333; /* Dark grey for better contrast, adjust as needed */
  letter-spacing: 0.5px; /* Slightly increase spacing between letters */
  padding: 10px; /* Add padding around the text */
  margin: 10px 0; /* Add some space above and below the paragraph */
}

/* Style the heading of each section */
.section-heading {
  font-family: "Montserrat", sans-serif;
  font-weight: 900;
  font-size: 3em; /* Large text size */
  margin-bottom: 0.5em; /* Space below the heading */
}

/* Experience section styling for more white space and better readability */
.experience-details {
  background: rgba(255, 255, 255, 0.85); /* Semi-transparent white background */
  padding: 20px; /* Padding inside each experience detail box */
  margin-bottom: 30px; /* Margin between each experience detail box */
  border-radius: 5px; /* Rounded corners for the boxes */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
}
.experience-description {
  text-align: justify; /* Justify text for a clean look */
  line-height: 1.6; /* Increase line height for improved readability */
}
/* Improve the interactivity and visual appeal of the text */
.sidebar-nav a,
.section-heading,
.company-name,
.experience-details p {
  transition: all 0.3s ease; /* Smooth transition for hover effects */
}

/* Sidebar navigation links */
.sidebar-nav a:hover {
  background-color: #e0e0e0; /* Change background color on hover */
  color: #007bff; /* Change text color on hover */
  transform: scale(1.05); /* Slightly increase size on hover */
}
.sidebar-nav a:hover,
.company-name:hover {
  font-weight: 700; /* Bold on hover for emphasis */
  /* ... other styles ... */
}

/* Main content section headings */
.section-heading {
  color: #0b3b6d; /* Use a brand color for headings */
  text-transform: uppercase; /* UPPERCASE text for headings */
  letter-spacing: 1px; /* Add spacing between letters */
}

/* Company names in the experience section */
.company-name {
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 1.8rem; /* Larger font size for company names */
  color: #333; /* Dark color for text */
  margin-top: 0; /* No top margin for company name */
  margin-bottom: 10px; /* Space below the company name */
}
.experience-timeframe {
  margin-bottom: 10px; /* Space below the timeframe */
}

/* Experience details paragraph */
.experience-details p {
  font-family: "Lato", sans-serif;
  font-weight: 400;
  text-align: left; /* Align text to the left */
  margin-left: 20px; /* Indent paragraphs for better readability */
}

/* Specific styles for company name */
.company-name:hover {
  color: #0056b3; /* Darker blue color on hover */
  text-decoration: underline; /* Underline text on hover */
}

/* Timeframe for experience details */
.experience-details .timeframe {
  color: #555; /* Lighter color for less emphasis */
  font-style: italic; /* Italicize the timeframe */
}

/* Description of experience */
.experience-details .description {
  font-size: 1rem; /* Standard font size for descriptions */
  line-height: 1.5; /* Increase line height for readability */
}

/* Align the titles to the left */
.content-section-about .section-heading {
  align-self: flex-start; /* Align to the start of the flex container */
  text-align: left; /* Align text to the left */
}

/* Adjust the layout for the 'About' and 'Experience' content */
.content-section-about {
  padding: 50px; /* Consistent padding */
  align-items: flex-start; /* Align content to the start of the flex container */
}

/* About Section Background */
#about-section {
  background: url("../../public/image/bg1.jpg") no-repeat center center;
  background-size: cover;
}

/* Experience Section Background */
#experience-section {
  background: url("../../public/image/bg2.jpg") no-repeat center center;
  background-size: cover;
}

/* Use a gradient as an alternative or addition to an image */
#about-section {
  background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.7) 0%,
      rgba(255, 255, 255, 0.7) 100%
    ),
    url("../../public/image/bg1.jpg") no-repeat center center;
  background-size: cover;
}

#experience-section {
  background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.7) 0%,
      rgba(255, 255, 255, 0.7) 100%
    ),
    url("../../public/image/bg2.jpg") no-repeat center center;
  background-size: cover;
}
#education-section {
  background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.7) 0%,
      rgba(255, 255, 255, 0.7) 100%
    ),
    url("../../public/image/bg1.jpg") no-repeat center center;
  background-size: cover;
}
#project-section {
  background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.7) 0%,
      rgba(255, 255, 255, 0.7) 100%
    ),
    url("../../public/image/bg2.jpg") no-repeat center center;
  background-size: cover;
}
#skill-section {
  background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.7) 0%,
      rgba(255, 255, 255, 0.7) 100%
    ),
    url("../../public/image/bg1.jpg") no-repeat center center;
  background-size: cover;
}
#cert-section {
  background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.7) 0%,
      rgba(255, 255, 255, 0.7) 100%
    ),
    url("../../public/image/bg2.jpg") no-repeat center center;
  background-size: cover;
}
.education-section {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
  background: #f5f5f5;
  align-items: flex-start;
}

.education-card {
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 15px;
  width: 48%; /* Adjust the width to fit two cards in the row */
  margin-bottom: 20px; /* Provide some space between the cards */
}

.education-card h2 {
  font-size: 1.25rem;
  color: #333;
  margin-bottom: 0.5rem;
}

.education-card p {
  font-size: 1rem;
  margin-bottom: 0.25rem;
}

.education-card h3 {
  font-size: 1.25rem;
  color: #333;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
}

.education-card ul {
  list-style-type: none;
  padding-left: 20px;
}

.education-card li:before {
  content: "•";
  margin-right: 5px;
  color: #007bff;
}

@media (max-width: 768px) {
  .education-card {
    width: 100%;
  }
}

/* Adjust the font size for mobile responsiveness */
@media (max-width: 768px) {
  .section-heading {
    font-size: 2em; /* Smaller size on mobile devices */
  }
  .company-name {
    font-size: 1.5rem; /* Adjust company name size on mobile */
  }
  /* ... other responsive adjustments ... */
}
/* Ensure the .experience-details divs are not too wide on larger screens for better readability */
@media (min-width: 992px) {
  .experience-details {
    max-width: 60%; /* Maximum width of the text boxes */
    margin-left: auto; /* Center the boxes horizontally */
    margin-right: auto; /* Center the boxes horizontally */
  }
}
/* Add a media query for smaller screens where flex-direction becomes column */
@media (max-width: 768px) {
  .education-section {
    flex-direction: column;
  }

  .education-card {
    width: 100%; /* Each card takes full width on smaller screens */
    margin-bottom: 20px; /* Provide some space between the cards */
  }
}
@media screen and (max-width: 992px) {
  /* Sidebar */
  .sidebar {
    transform: translateX(-250px); /* Hide sidebar off-screen to the left */
  }

  /* Main Content */
  .main-content {
    margin-left: 0; /* Expand content to full width */
  }
}

@media screen and (max-width: 768px) {
  /* Content Section */
  .content-section-about {
    padding: 20px; /* Adjust padding on smaller screens */
    height: auto; /* Allow each section to grow as needed */
  }

  /* Education Card */
  .education-card {
    width: 100%; /* Full width for better readability */
  }
}
/* Adjustments for mobile and smaller devices */
@media (max-width: 768px) {
  /* Collapse the sidebar into a top bar */
  .sidebar {
    width: 100%;
    height: auto;
    position: static; /* Let the sidebar flow in the document flow */
  }

  /* Adjust profile image size for small screens */
  .profile-image {
    width: 100px;
    height: 100px;
  }

  /* Adjust the main content layout */
  .main-content {
    margin-left: 0; /* Reset left margin since sidebar is no longer fixed */
    padding-top: 20px; /* Add padding to ensure content doesn't overlap with the sidebar */
  }

  /* Adjust content section for smaller screens */
  .content-section-about {
    height: auto; /* Let each section grow as much as needed */
    padding: 20px; /* Adjust padding to better fit small screens */
  }

  /* Make section headings smaller */
  .section-heading {
    font-size: 2em; /* Adjust font size for smaller screens */
  }

  /* Adjust layout of experience and education cards for small screens */
  .experience-details,
  .education-card {
    width: 100%; /* Full width on smaller screens */
    box-shadow: none; /* Optionally remove shadows to fit a flat design */
  }

  /* Stack education cards vertically */
  .education-section {
    flex-direction: column;
  }
}

/* Further adjustments for very small screens */
@media (max-width: 480px) {
  /* Make sidebar navigation a dropdown or a collapsible menu */
  .sidebar-nav a {
    display: inline-block; /* Adjust display to inline for a horizontal layout */
    margin: 0; /* Remove margins */
    padding: 8px; /* Reduce padding */
    font-size: 0.9em; /* Make text smaller to fit more items */
  }

  /* Adjust font sizes for readability on very small screens */
  .section-heading {
    font-size: 1.5em;
  }

  /* Any other specific adjustments for very small screens can be added here */
}
</style>
