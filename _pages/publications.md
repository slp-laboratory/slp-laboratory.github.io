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

    /* ==========================================================================
       Publication List Typography Styles
       ========================================================================== */

    /* Style for the first authors (Bold + Underline) */
    .first-author {
      font-weight: bold;
      text-decoration: underline;
    }

    /* Style for the Principal Investigator / Professor (Navy Blue + Bold) */
    .pi-author {
      color: #0056b3; 
      font-weight: bold;
    }

    /* Adjust fine spacing for the corresponding author's superscript asterisk */
    .pub-authors sup {
      margin-left: 2px;
      font-weight: normal;
    }


    /* ==========================================================================
       Publication Legend Section Styles
       ========================================================================== */

    /* Container for the publication legend info */
    .pub-legend-container {
      margin: -10px 0 25px 5px;
      padding-left: 10px;
      border-left: 3px solid #0056b3; /* Accent line matching the PI color */
    }

    /* Typography for each legend line */
    .legend-line {
      margin: 4px 0;
      font-size: 0.92rem;
      color: #555;
      line-height: 1.4;
    }

    /* Highlight style for the asterisk in the legend */
    .legend-star {
      font-weight: bold;
      color: #0056b3;
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

  <div class="pub-legend-container">
    <p class="legend-line">Authors with <u><strong>underlined bold text</strong></u> represent the first authors of the publication.</p>
    <p class="legend-line">The superscript asterisk (<span class="legend-star">*</span>) indicates the corresponding author.</p>
  </div>

  <div class="pub-list">

    <div class="pub-item">
      <img class="pub-thumb" src="../assets/images/paper/sleep.PNG" alt="Mels-TTS">
      <div class="pub-info">
        <p class="pub-title">Sleep Sound Event Detection Powered by Learnable Multi-Resolution Adaptive Line Enhancer</p>
        <p class="pub-authors"><span class="first-author">Chanwoo Park</span> and <span class="pi-author">Chanwoo Kim</span><sup>*</sup></p>
        <p class="pub-venue">Proc. Interspeech, 2026.</p>
        <span style="color: red;">(The Long Paper Track) - acceptance rate under 30 % </span>
      </div>
    </div>

    <div class="pub-item">
      <img class="pub-thumb" src="../assets/images/paper/minhee.PNG" alt="Mels-TTS">
      <div class="pub-info">
        <p class="pub-title">From Masking to Merging: Rethinking SpecAugment for Efficient Audio Spectrogram Transformer</p>
        <p class="pub-authors"><span class="first-author">Minhee Park</span>, Hyowon Ahn, and <span class="pi-author">Chanwoo Kim</span><sup>*</sup></p>
        <p class="pub-venue">Proc. Interspeech, 2026.</p>
      </div>
    </div>

    <div class="pub-item">
      <img class="pub-thumb" src="../assets/images/paper/tvamsp.PNG" alt="Mels-TTS">
      <div class="pub-info">
        <p class="pub-title">Beyond Short Segments : Expanding Speaker Embeddings with Vector Archives</p>
        <p class="pub-authors"><span class="first-author">Hyunku Kang</span>, <span class="first-author">Minkyu Cho</span>, and <span class="pi-author">Chanwoo Kim</span><sup>*</sup></p>
        <p class="pub-venue">Proc. Interspeech, 2026.</p>
      </div>
    </div>

    <div class="pub-item">
      <img class="pub-thumb" src="../assets/images/paper/siser.PNG" alt="Mels-TTS">
      <div class="pub-info">
        <p class="pub-title">SISER : Speaker Invariant for Speech Emotion Recognition</p>
        <p class="pub-authors"><span class="first-author">Enseo Choi</span>, Hyunku Kang, and <span class="pi-author">Chanwoo Kim</span><sup>*</sup></p>
        <p class="pub-venue">Proc. Interspeech, 2026.</p>
      </div>
    </div>

    <div class="pub-item">
      <img class="pub-thumb" src="../assets/images/paper/sungmook.PNG" alt="Mels-TTS">
      <div class="pub-info">
        <p class="pub-title">Efficient Punctuation Restoration via Weighted Lookahead Scoring Method for Streaming ASR Systems</p>
        <p class="pub-authors"><span class="first-author">Sungmook Woo</span>, Hyunku Kang, and <span class="pi-author">Chanwoo Kim</span><sup>*</sup></p>
        <p class="pub-venue">Proc. IJCNN, 2026.</p>
      </div>
    </div>

    <div class="pub-item">
      <img class="pub-thumb" src="../assets/images/paper/doc-llm.PNG" alt="Mels-TTS">
      <div class="pub-info">
        <p class="pub-title">Enhancing Document-Level Machine Translation via filtered synthetic corpora and two-stage LLM adaptation</p>
        <p class="pub-authors"><span class="first-author">Ireh Kim</span>, Tesia Sker, and <span class="pi-author">Chanwoo Kim</span><sup>*</sup></p>
        <p class="pub-venue">Proc. ICASSP, 2026.</p>
      </div>
    </div>

    <div class="pub-item">
      <img class="pub-thumb" src="../assets/images/paper/controllable-energy.PNG" alt="Mels-TTS">
      <div class="pub-info">
        <p class="pub-title">Controllable Singing Voice Synthesis using Phoneme-Level Energy Sequence</p>
        <p class="pub-authors"><span class="first-author">Yerin Ryu</span>, Inseop Shin, and <span class="pi-author">Chanwoo Kim</span><sup>*</sup></p>
        <p class="pub-venue">Proc. ASRU, 2025.</p>
      </div>
    </div>

    <div class="pub-item">
      <img class="pub-thumb" src="../assets/images/paper/novelcot.PNG" alt="Mels-TTS">
      <div class="pub-info">
        <p class="pub-title">A Novel Chain-of-Thought Reasoning Approach for Alzheimer’s Disease Detection Using Large Language and Vision-Language Models</p>
        <p class="pub-authors"><span class="first-author">Chanwoo Park</span> and <span class="pi-author">Chanwoo Kim</span><sup>*</sup></p>
        <p class="pub-venue">
        IEEE Trans. Neural Systems and Rehabilitation Engineering Nov. 2025 (TNSRE)
        <span style="color: red;">(Top 2% in the JCR category of "Rehabilitation")</span>
        </p>
      </div>
    </div>

    <div class="pub-item">
      <img class="pub-thumb" src="../assets/images/paper/resoningbasedcot.PNG" alt="Mels-TTS">
      <div class="pub-info">
        <p class="pub-title">Reasoning-Based Approach with Chain-of-Thought for Alzheimer’s Detection Using Speech and Large Language Models</p>
        <p class="pub-authors"><span class="first-author">Chanwoo Park</span>, Anna Seo Gyoung Choi, Sunghye Cho and <span class="pi-author">Chanwoo Kim</span><sup>*</sup></p>
        <p class="pub-venue">Proc. Interspeech, 2025.</p>
      </div>
    </div>

    <div class="pub-item">
      <img class="pub-thumb" src="../assets/images/paper/wavumamba.PNG" alt="Mels-TTS">
      <div class="pub-info">
        <p class="pub-title">Wave-U-Mamba: An End-To-End Framework For High-Quality And Efficient Speech Super Resolution</p>
        <p class="pub-authors"><span class="first-author">Yongjoon Lee</span> and <span class="pi-author">Chanwoo Kim</span><sup>*</sup></p>
        <p class="pub-venue">Proc. ICASSP, 2025.</p>
      </div>
    </div>

    <div class="pub-item">
      <img class="pub-thumb" src="../assets/images/paper/melt-tts.PNG" alt="Mels-TTS">
      <div class="pub-info">
        <p class="pub-title">Mels-Tts: Multi-Emotion Multi-Lingual Multi-Speaker Text-To-Speech System Via Disentangled Style Tokens</p>
        <p class="pub-authors"><span class="first-author">Heejin Choi</span>, Jae-Sung Bae, Joun Yeop Lee, Seongkyu Mun, Jihwan Lee, Hoon-Young Cho, and <span class="pi-author">Chanwoo Kim</span><sup>*</sup></p>
        <p class="pub-venue">Proc. ICASSP, 2024.</p>
      </div>
    </div>

    <div class="pub-item">
      <img class="pub-thumb" src="../assets/images/paper/latent-filling.PNG" alt="Latent Filling">
      <div class="pub-info">
        <p class="pub-title">Latent Filling: Latent Space Data Augmentation for Zero-Shot Speech Synthesis</p>
        <p class="pub-authors"><span class="first-author">Jae-Sung Bae</span>, Joun Yeop Lee, Ji-Hyun Lee, Seongkyu Mun, Taehwa Kang, Hoon-Young Cho, and <span class="pi-author">Chanwoo Kim</span><sup>*</sup></p>
        <p class="pub-venue">Proc. ICASSP, 2024.</p>
      </div>
    </div>

    <div class="pub-item">
      <img class="pub-thumb" src="../assets/images/paper/tica.PNG" alt="Hierarchical Timbre-Cadence">
      <div class="pub-info">
        <p class="pub-title">Hierarchical Timbre-Cadence Speaker Encoder for Zero-shot Speech Synthesis</p>
        <p class="pub-authors"><span class="first-author">Joun Yeop Lee</span>, Jae-Sung Bae, Seongkyu Mun, Jihwan Lee, Ji-Hyun Lee, Hoon-Young Cho, and <span class="pi-author">Chanwoo Kim</span><sup>*</sup></p>
        <p class="pub-venue">Proc. INTERSPEECH, 2023.</p>
      </div>
    </div>

    <div class="pub-item">
      <img class="pub-thumb" src="../assets/images/paper/ssl-accent.PNG" alt="Self-Supervised Accent Learning">
      <div class="pub-info">
        <p class="pub-title">Self-Supervised Accent Learning for Under-Resourced Accents Using Native Language Data</p>
        <p class="pub-authors"><span class="first-author">Mehul Kumar</span>, Jiyeon Kim, Dhananjaya Gowda, Abhinav Garg, and <span class="pi-author">Chanwoo Kim</span><sup>*</sup></p>
        <p class="pub-venue">Proc. ICASSP, 2023.</p>
      </div>
    </div>

    <div class="pub-item">
      <img class="pub-thumb" src="../assets/images/paper/conformer.PNG" alt="Conformer On-Device">
      <div class="pub-info">
        <p class="pub-title">Conformer-Based on-Device Streaming Speech Recognition with KD Compression and Two-Pass Architecture</p>
        <p class="pub-authors"><span class="first-author">Jinhwan Park</span>, Sichen Jin, Junmo Park, Sungsoo Kim, Dhairya Sandhyana, Changheon Lee, Myoungji Han, Jungin Lee, Seokyeong Jung, Changwoo Han, and <span class="pi-author">Chanwoo Kim</span><sup>*</sup></p>
        <p class="pub-venue">Proc. SLT, 2022.</p>
      </div>
    </div>

    <div class="pub-item">
      <img class="pub-thumb" src="../assets/images/paper/macro.PNG" alt="Macro-Block Dropout">
      <div class="pub-info">
        <p class="pub-title">Macro-Block Dropout for Improved Regularization in Training End-to-End Speech Recognition Models</p>
        <p class="pub-authors"><span class="first-author pi-author">Chanwoo Kim</span>, Sathish Indurti, Jinhwan Park, and Wonyong Sung</p>
        <p class="pub-venue">Proc. SLT, 2022.</p>
      </div>
    </div>

  </div><!-- /.pub-list -->
</div><!-- /.page-wrapper -->
</body>

  

</html>
