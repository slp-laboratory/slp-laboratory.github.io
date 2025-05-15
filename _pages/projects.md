---
permalink: /projects/
title: "OKR"
toc: true
#sidebar:
#  nav: "docs"
---
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Projects Overview</title>
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
    font-size: 20px;
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
  .okr-table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
    font-size: 20px;
  }
  .okr-table th, .okr-table td {
    border: 1px solid #ddd;
    padding: 12px;
    text-align: left;
  }
  .okr-table th {
    background-color: #f4f4f4;
    font-weight: bold;
  }
  .okr-table a {
    color: blue;
    text-decoration: none;
  }
  .okr-table a:hover {
    text-decoration: underline;
  }
</style>
</head>
<body>
<div class="container">
  <!-- OKR Table -->
  <table class="okr-table">
    <tr>
      <th>OKR</th>
      <th>Link</th>
    </tr>
    <tr>
      <td>4Q 2024</td>
      <td><a href="https://docs.google.com/spreadsheets/d/1U2NOStfZAYv_JFSqhG1v_Di8rl1TE101bqefWPKfuiI/edit?gid=1476668900#gid=1476668900" target="_blank">4Q 2024</a></td>
    </tr>
    <tr>
      <td>1Q 2025</td>
      <td><a href="https://docs.google.com/spreadsheets/d/1U2NOStfZAYv_JFSqhG1v_Di8rl1TE101bqefWPKfuiI/edit?gid=1476668900#gid=1476668900" target="_blank">Not Updated</a></td>
    </tr>
    <!-- OKR 행 추가 -->
  </table><br>
  <h1>Projects</h1>
  <div class="projects-grid">
    <div class="project-card">
      <img src="../assets/images/projects/Diarization.PNG" alt="Project 2">
      <p>
        <span class="blue-text">(LLSOLLU)</span> Speaker Verification & Diarization<br><br>
        <span class="blue-text">(PM)</span> Hyunku Kang
      </p><hr>
      <p>2024.09.02 - 2025.08.31</p>
    </div>
    <div class="project-card">
      <img src="../assets/images/projects/9-1-2_DidimDol.png" alt="Project 2">
      <p>
        <span class="blue-text">(9-1-2)</span> Real-time Adversarial Speech Generation <br><br>
        <span class="blue-text">(PM)</span> TBD
      </p><hr>
      <p>2024.10.01 - 2025.09.30</p>
    </div>
    <!-- 프로젝트 카드 추가 -->
  </div>
</div>
</body>
</html>

