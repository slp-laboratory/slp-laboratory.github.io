---
permalink: /publications/
title: "Publications"
toc: true
---

<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Publications</title>
<style>
  body {
    font-family: 'Georgia', serif;
    margin: 0;
    padding: 0;
    background-color: #ffffff;
    color: #222;
  }

  .page-wrapper {
    max-width: 1500px;
    margin: 0 auto;
    padding: 40px 24px 80px;
  }

  /* ── Section heading ── */
  .section-title {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 32px;
    color: #111;
  }
  .section-title a {
    color: #2563eb;
    text-decoration: underline;
  }
  .section-title a:hover {
    color: #1d4ed8;
  }

  /* ── Publication list ── */
  .pub-list {
    display: flex;
    flex-direction: column;
    gap: 36px;
  }

  .pub-item {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 28px;
    background: transparent;
  }

  /* ── Thumbnail ── */
  .pub-thumb {
    flex: 0 0 220px;
    width: 220px;
    height: 150px;
    border-radius: 6px;
    object-fit: cover;
    border: 1px solid #d1d5db;
    background: #e5e7eb;
  }

  /* ── Text block ── */
  .pub-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .pub-title {
    font-size: 17px;
    font-weight: 700;
    color: #111;
    line-height: 1.45;
    margin: 0 0 4px;
  }
  .pub-title a {
    color: #1a1a1a;
    text-decoration: underline;
    text-decoration-color: #93c5fd;
  }
  .pub-title a:hover {
    color: #2563eb;
  }

  .pub-authors {
    font-size: 14px;
    color: #374151;
    line-height: 1.5;
    margin: 0;
  }
  /* Bold lab members */
  .pub-authors b {
    font-weight: 700;
    color: #111;
  }

  .pub-venue {
    font-size: 14px;
    font-style: italic;
    color: #555;
    margin: 2px 0 0;
  }

  /* ── Divider between entries ── */
  .pub-item + .pub-item {
    padding-top: 36px;
    border-top: 1px solid #d1d5db;
  }

  /* ── Full list & patents sections ── */
  .section-block {
    margin-top: 60px;
  }
  .section-block h1 {
    font-size: 22px;
    font-weight: 700;
    border-bottom: 2px solid #cbd5e1;
    padding-bottom: 8px;
    margin-bottom: 16px;
  }
  .section-block p {
    font-size: 14px;
    color: #444;
  }
  .section-block a {
    color: #2563eb;
  }

  /* ── Responsive ── */
  @media (max-width: 640px) {
    .pub-item {
      flex-direction: column;
    }
    .pub-thumb {
      width: 100%;
      flex: none;
    }
  }
</style>
</head>
<body>
<div class="page-wrapper">

  <!-- ── Highlights / Recent Publications ── -->
    <h1 class="section-title">
      Recent Publications
      <span class="sub-link">
        (<a href="https://scholar.google.com/citations?user=pJoZXxYAAAAJ&hl=en&oi=ao"
        >Refer to this Google Scholar Page for the Full List of Publications</a>)
      </span>
    </h1>
  <div class="pub-list">

    <div class="pub-item">
      <img class="pub-thumb" src="../assets/images/paper/doc-llm.PNG" alt="Mels-TTS">
      <div class="pub-info">
        <p class="pub-title">Enhancing Document-Level Machine Translation via filtered synthetic corpora and two-stage LLM adaptation</p>
        <p class="pub-authors"><b>Ireh Kim</b>, <b>Tesia Sker</b>, and <b>Chanwoo Kim</b></p>
        <p class="pub-venue">Proc. ICASSP, 2026.</p>
      </div>
    </div>

    <div class="pub-item">
      <img class="pub-thumb" src="../assets/images/paper/controllable-energy.PNG" alt="Mels-TTS">
      <div class="pub-info">
        <p class="pub-title">Controllable Singing Voice Synthesis using Phoneme-Level Energy Sequence</p>
        <p class="pub-authors"><b>Yerin Ryu</b>, <b>Inseop Shin</b>, and <b>Chanwoo Kim</b></p>
        <p class="pub-venue">Proc. ASRU, 2025.</p>
      </div>
    </div>

    <div class="pub-item">
      <img class="pub-thumb" src="../assets/images/paper/novelcot.PNG" alt="Mels-TTS">
      <div class="pub-info">
        <p class="pub-title">A Novel Chain-of-Thought Reasoning Approach for Alzheimer’s Disease Detection Using Large Language and Vision-Language Models</p>
        <p class="pub-authors"><b>Chanwoo Park</b> and <b>Chanwoo Kim</b></p>
        <p class="pub-venue">
        <span style="color: red;">(Top 2% in the JCR category of "Rehabilitation")</span>
        </p>
      </div>
    </div>

    <div class="pub-item">
      <img class="pub-thumb" src="../assets/images/paper/resoningbasedcot.PNG" alt="Mels-TTS">
      <div class="pub-info">
        <p class="pub-title">Reasoning-Based Approach with Chain-of-Thought for Alzheimer’s Detection Using Speech and Large Language Models</p>
        <p class="pub-authors"><b>Chanwoo Park</b>, Anna Seo Gyoung Choi, Sunghye Cho and <b>Chanwoo Kim</b></p>
        <p class="pub-venue">Proc. Interspeech, 2025.</p>
      </div>
    </div>

    <div class="pub-item">
      <img class="pub-thumb" src="../assets/images/paper/wavumamba.PNG" alt="Mels-TTS">
      <div class="pub-info">
        <p class="pub-title">Wave-U-Mamba: An End-To-End Framework For High-Quality And Efficient Speech Super Resolution</p>
        <p class="pub-authors">Yongjoon Lee, and <b>Chanwoo Kim</b></p>
        <p class="pub-venue">Proc. ICASSP, 2025.</p>
      </div>
    </div>

    <div class="pub-item">
      <img class="pub-thumb" src="../assets/images/paper/melt-tts.PNG" alt="Mels-TTS">
      <div class="pub-info">
        <p class="pub-title">Mels-Tts: Multi-Emotion Multi-Lingual Multi-Speaker Text-To-Speech System Via Disentangled Style Tokens</p>
        <p class="pub-authors">Heejin Choi, Jae-Sung Bae, Joun Yeop Lee, Seongkyu Mun, Jihwan Lee, Hoon-Young Cho, <b>Chanwoo Kim</b></p>
        <p class="pub-venue">Proc. ICASSP, 2024.</p>
      </div>
    </div>

    <div class="pub-item">
      <img class="pub-thumb" src="../assets/images/paper/latent-filling.PNG" alt="Latent Filling">
      <div class="pub-info">
        <p class="pub-title">Latent Filling: Latent Space Data Augmentation for Zero-Shot Speech Synthesis</p>
        <p class="pub-authors">Jae-Sung Bae, Joun Yeop Lee, Ji-Hyun Lee, Seongkyu Mun, Taehwa Kang, Hoon-Young Cho, <b>Chanwoo Kim</b></p>
        <p class="pub-venue">Proc. ICASSP, 2024.</p>
      </div>
    </div>

    <div class="pub-item">
      <img class="pub-thumb" src="../assets/images/paper/tica.PNG" alt="Hierarchical Timbre-Cadence">
      <div class="pub-info">
        <p class="pub-title">Hierarchical Timbre-Cadence Speaker Encoder for Zero-shot Speech Synthesis</p>
        <p class="pub-authors">Joun Yeop Lee, Jae-Sung Bae, Seongkyu Mun, Jihwan Lee, Ji-Hyun Lee, Hoon-Young Cho, <b>Chanwoo Kim</b></p>
        <p class="pub-venue">Proc. INTERSPEECH, 2023.</p>
      </div>
    </div>

    <div class="pub-item">
      <img class="pub-thumb" src="../assets/images/paper/ssl-accent.PNG" alt="Self-Supervised Accent Learning">
      <div class="pub-info">
        <p class="pub-title">Self-Supervised Accent Learning for Under-Resourced Accents Using Native Language Data</p>
        <p class="pub-authors">Mehul Kumar, Jiyeon Kim, Dhananjaya Gowda, Abhinav Garg, <b>Chanwoo Kim</b></p>
        <p class="pub-venue">Proc. ICASSP, 2023.</p>
      </div>
    </div>

    <div class="pub-item">
      <img class="pub-thumb" src="../assets/images/paper/conformer.PNG" alt="Conformer On-Device">
      <div class="pub-info">
        <p class="pub-title">Conformer-Based on-Device Streaming Speech Recognition with KD Compression and Two-Pass Architecture</p>
        <p class="pub-authors">Jinhwan Park, Sichen Jin, Junmo Park, Sungsoo Kim, Dhairya Sandhyana, Changheon Lee, Myoungji Han, Jungin Lee, Seokyeong Jung, Changwoo Han, <b>Chanwoo Kim</b></p>
        <p class="pub-venue">Proc. SLT, 2022.</p>
      </div>
    </div>

    <div class="pub-item">
      <img class="pub-thumb" src="../assets/images/paper/macro.PNG" alt="Macro-Block Dropout">
      <div class="pub-info">
        <p class="pub-title">Macro-Block Dropout for Improved Regularization in Training End-to-End Speech Recognition Models</p>
        <p class="pub-authors"><b>Chanwoo Kim</b>, Sathish Indurti, Jinhwan Park, Wonyong Sung</p>
        <p class="pub-venue">Proc. SLT, 2022.</p>
      </div>
    </div>

  </div><!-- /.pub-list -->

</div><!-- /.page-wrapper -->
</body>
</html>
