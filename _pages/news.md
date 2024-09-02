---
permalink: /news/
title: "News"
toc: true
layout: home
#sidebar:
#  nav: "docs"
---
<!-- Under construction.

## History
 - Two masters students joined the Lab (2024/3).
 - Speech and Langauge Processing Lab. was created in March 2024 at Korea University (2024/3). -->

 <html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>News</title>
<style>
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
  }
  .container {
    max-width: 1200px;
    margin: auto;
    padding: 20px;
  }
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
  }
  .project-card {
    background-color: white;
    border: 1px solid #ddd;
    padding: 10px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    display: grid;
    grid-template-rows: auto 1fr auto;
    gap: 10px;
  }
  .project-card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 5px;
    grid-row: 1;
  }
  .project-card h2 {
    font-size: 18px;
    color: #333;
    margin-top: 10px;
  }
  .project-card p {
    font-size: 16px;
    color: #666;
    line-height: 1.4;
    margin-top: 20px;
    font-weight: bold;
    grid-row: 2;
  }
  .blue-text {
    color: blue;
  }
  .project-card hr {
  grid-row: 3;
  width: 100%;
  margin: 0;
  }
  .project-card p:last-child {
  grid-row: 4;
  align-self: end;
  }
</style>
</head>
<body>
<div class="container">
  <div class="projects-grid">
    <div class="project-card">
      <img src="../assets/images/slp_lab_logo.png" alt="Project 3">
      <p>One Ph.D and two masters joined the Lab</p><hr>
      <p>2024.09.01</p>
    </div>   
    <div class="project-card">
      <img src="../assets/images/mail.PNG" alt="Project 1">
      <p>Two masters joined the Lab</p><hr>
      <p>2024.03.02</p>
    </div>
    <div class="project-card">
      <img src="../assets/images/slp_lab_logo.png" alt="Project 2">
      <p>Speech and Langauge Processing Lab. was created in March 2024 at Korea University</p><hr>
      <p>2024.03.02</p>
    </div>
    <!-- More cards can be added here -->
  </div>
</div>
</body>
</html>
