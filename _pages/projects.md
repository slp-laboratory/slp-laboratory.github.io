---
permalink: /projects/
title: "OKR"
toc: true
---

<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Projects Overview</title>
<style>
  body {
    font-family: 'Georgia', serif;
    margin: 0;
    padding: 0;
    background-color: #ffffff;
    color: #222;
  }

  .page-wrapper {
    max-width: 1600px;
    margin: 0 auto;
    padding: 40px 24px 80px;
  }

  /* ── OKR Table ── */
  .section-block {
    margin-bottom: 48px;
  }
  .section-block h1 {
    font-size: 22px;
    font-weight: 700;
    border-bottom: 2px solid #cbd5e1;
    padding-bottom: 8px;
    margin-bottom: 16px;
  }

  .okr-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 14px;
    margin-bottom: 8px;
  }
  .okr-table th, .okr-table td {
    border: 1px solid #d1d5db;
    padding: 10px 14px;
    text-align: left;
  }
  .okr-table th {
    background-color: #f3f4f6;
    font-weight: 700;
    color: #111;
  }
  .okr-table a {
    color: #2563eb;
    text-decoration: none;
  }
  .okr-table a:hover {
    text-decoration: underline;
  }

  /* ── Section title ── */
  .section-title {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 32px;
    color: #111;
  }

  /* ── Project list ── */
  .proj-list {
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .proj-item {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 28px;
    padding: 36px 0;
    border-bottom: 1px solid #d1d5db;
  }
  .proj-item:first-child {
    border-top: 1px solid #d1d5db;
  }

  /* ── Thumbnail ── */
  .proj-thumb {
    flex: 0 0 220px;
    width: 220px;
    height: 150px;
    border-radius: 6px;
    object-fit: cover;
    border: 1px solid #d1d5db;
    background: #e5e7eb;
  }

  /* ── Text block ── */
  .proj-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .proj-tag {
    font-size: 13px;
    font-weight: 700;
    color: #2563eb;
  }

  .proj-title {
    font-size: 17px;
    font-weight: 700;
    color: #111;
    line-height: 1.45;
    margin: 0;
  }

  .proj-pm {
    font-size: 14px;
    color: #374151;
    margin: 0;
  }
  .proj-pm b {
    font-weight: 700;
    color: #111;
  }

  .proj-period {
    font-size: 14px;
    font-style: italic;
    color: #555;
    margin: 4px 0 0;
  }

  /* ── Responsive ── */
  @media (max-width: 640px) {
    .proj-item {
      flex-direction: column;
    }
    .proj-thumb {
      width: 100%;
      flex: none;
    }
  }
</style>
</head>
<body>
<div class="page-wrapper">

  <!-- ── Projects ── -->
  <h1 class="section-title">Projects</h1>

  <div class="proj-list">
  
    <div class="proj-item">
      <img class="proj-thumb" src="../assets/images/projects/iscream.png" alt="Project 1">
      <div class="proj-info">
        <p class="proj-title">ISM 영어 독서 플랫폼 AI 음성 및 감정 분석 개발</p>
        <p class="proj-tag">아이스크림 미디어</p>
        <p class="proj-period">2026.02.01 – 2026.7.31</p>
      </div>
    </div>

    <div class="proj-item">
      <img class="proj-thumb" src="../assets/images/projects/ssiat.png" alt="Project 1">
      <div class="proj-info">
        <p class="proj-title">극소량 파인튜닝을 통해 LLM으로부터 구현하는 범용 생성형 음성 모델</p>
        <p class="proj-tag">NRF</p>
        <p class="proj-period">2025.09.01 – 2026.08.31</p>
      </div>
    </div>

    <div class="proj-item">
      <img class="proj-thumb" src="../assets/images/projects/etrisdx.png" alt="Project 1">
      <div class="proj-info">
        <p class="proj-title">SDx 지능형 서비스의 최적 실행을 위한 생성형AI 지원 시스템SW 프레임워크 기술개발</p>
        <p class="proj-tag">IITP</p>
        <p class="proj-period">2025.07.01 – 2028.12.31</p>
      </div>
    </div>

    <div class="proj-item">
      <img class="proj-thumb" src="../assets/images/projects/912_tipa.png" alt="Project 1">
      <div class="proj-info">
        <p class="proj-title">LLM 기반의 민감 정보 탐지를 통해 정보 유출 방지를 위한 알고리즘 개발</p>
        <p class="proj-tag">TIPA</p>
        <p class="proj-period">2025.05.01 – 2025.12.31</p>
      </div>
    </div>

    <div class="proj-item">
      <img class="proj-thumb" src="../assets/images/projects/starfellowship.PNG" alt="Project 3">
      <div class="proj-info">
        <p class="proj-title">AI Star Fellowship, 사회적 가치 정렬을 내재한 체화된 온디바이스 에이전트</p>
        <p class="proj-tag">IITP</p>
        <p class="proj-period">2025.04.01 – 2030.12.31</p>
      </div>
    </div>

    <div class="proj-item">
      <img class="proj-thumb" src="../assets/images/projects/Diarization.PNG" alt="Project 2">
      <div class="proj-info">
        <p class="proj-title">Speaker Verification & Diarization</p>
        <p class="proj-tag">LLSOLLU</p>
        <p class="proj-period">2024.09.02 – 2025.08.31</p>
      </div>
    </div>

    <div class="proj-item">
      <img class="proj-thumb" src="../assets/images/projects/agi.png" alt="Project 4">
      <div class="proj-info">
        <p class="proj-title">ITRC, 자가 인지 및 학습 기반 범용 인공지능 기술 개발</p>
        <p class="proj-tag">IITP</p>
        <p class="proj-period">2024.07.01 – 2025.12.31</p>
      </div>
    </div>

    <div class="proj-item">
      <img class="proj-thumb" src="../assets/images/projects/ey.png" alt="Project 5">
      <div class="proj-info">
        <p class="proj-title">LLM을 활용한 Multi Intent Detection</p>
        <p class="proj-tag">EY 한영회계법인</p>
        <p class="proj-period">2024.01.01 – 2024.02.28</p>
      </div>
    </div>

    <div class="proj-item">
      <img class="proj-thumb" src="../assets/images/projects/koreaai.png" alt="Project 6">
      <div class="proj-info">
        <p class="proj-title">인공지능 대학원 지원 사업</p>
        <p class="proj-tag">IITP</p>
        <p class="proj-period">2024.03.01 – 2026.12.31</p>
      </div>
    </div>

    <div class="proj-item">
      <img class="proj-thumb" src="../assets/images/projects/9-1-2_DidimDol.png" alt="Project 7">
      <div class="proj-info">
        <p class="proj-title">Real-time Adversarial Speech Generation</p>
        <p class="proj-tag">NRF, 9-1-2</p>
        <p class="proj-period">2024.10.01 – 2025.01.31</p>
      </div>
    </div>

  </div><!-- /.proj-list -->

</div><!-- /.page-wrapper -->
</body>
</html>
