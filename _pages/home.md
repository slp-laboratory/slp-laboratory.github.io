---
permalink: /home/
toc: true
layout: home
author_profile: false
# sidebar:
#   nav: "docs"
---

<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Research Areas</title>
<style>
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
  }
  .header-container {
    position: relative;
    text-align: center;
    color: white;
  }
  .header-image {
    width: 100%;
    height: auto;
    margin-bottom: 50px;
    display: block;
  }
  .header-text {
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 51px;
    font-weight: bold;
    white-space: nowrap;
  }
  .sub-header-text {
    position: absolute;
    top: 54%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 45px;
    font-weight: bold;
    white-space: nowrap;
  }
  .container {
    max-width: 1200px;
    margin: auto;
    padding: 20px;
    text-align: center;
  }
  .contatiner h1 {
    font-size: 24px;
    color: #333;
  }
  .research-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-top: 20px;
  }
  .research-card {
    background-color: white;
    border: 1px solid #ddd;
    padding: 10px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }
  .research-card h2 {
    font-size: 18px;
    color: #333;
  }
  .research-card img {
    width: 100%;
    height: 170px;
    object-fit: cover;
    border-radius: 5px;
    margin-bottom: 10px;
  }
  .research-card p {
    font-size: 14px;
    color: #666;
    text-align: left;
  }
</style>
</head>
<body>
<div class="header-container">
<img class="header-image" src="../assets/images/research_area/genspeech.PNG" alt="Header Image">
<div class="header-text">Welcome!!</div>
<div class="sub-header-text">Speech and Language Processing Lab</div>
</div>
<div class="container">
  <h1>Research Areas</h1>
  <div class="research-grid">
    <div class="research-card">
      <img src="../assets/images/research_area/genspeech.PNG" alt="Big Data Analysis">
      <h2>Generative Speech/Language Model</h2>
      <p>Our team aims to develop AI systems that understand and generate human-like speech and text, improving automated communication and exploring applications in assistive technologies and customer service.</p>
    </div>
    <div class="research-card">
      <img src="../assets/images/research_area/compression.PNG" alt="Brain Disease Diagnosis">
      <h2>Model Compression & Optimization</h2>
      <p>Our team aims to enhance deep learning models through compression and optimization techniques, reducing size and computational needs for use in resource-limited settings.</p>
    </div>
    <div class="research-card">
      <img src="../assets/images/research_area/multimodal.PNG" alt="Brain-Computer Interface">
      <h2>Multimodal Processing</h2>
      <p>Our team aims to enhance Multimodal Processing by developing systems that combine and interpret visual, auditory, and textual data to improve interaction and decision-making.</p>
    </div>
    <div class="research-card">
      <img src="../assets/images/research_area/speech.PNG" alt="Brain-Computer Interface">
      <h2>Speech Recognition/Synthesis</h2>
      <p>Our team is focused on advancing Speech Recognition and Synthesis to enhance human-machine interactions. We aim to develop systems that accurately understand and generate speech across various languages and dialects.</p>
    </div>
    <div class="research-card">
      <img src="../assets/images/research_area/nlu.PNG" alt="Brain-Computer Interface">
      <h2>Natural Language Understanding</h2>
      <p>Our team focuses on enhancing Natural Language Understanding to better interpret human language. We aim to develop AI that comprehends context and nuanced meanings, enabling more accurate interactions.</p>
    </div>
    <!-- More cards can be added similarly -->
  </div>
</div>
</body>
</html>
