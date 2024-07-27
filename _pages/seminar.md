---
permalink: /seminar/
title: "Lab Seminar"
toc: true
#sidebar:
#  nav: "docs"
---
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>동적 게시판</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        .container {
            width: 100%;
            height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 10px;
        }
        .title {
            margin-right: 20px;
            flex-shrink: 0;
        }
        h2 {
            text-align: center;
            margin-bottom: 20px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 10px;
        }
        th, td {
            border: 1px solid #ddd;
            padding: 45px;  /* Increased padding for larger table cells */
            text-align: center;
            font-size: 1.15em
        }
        th {
            background-color: #f2f2f2;
        }
        tr:nth-child(even) {
            background-color: #f9f9f9;
        }
        tr:hover {
            background-color: #ddd;
        }
        .pagination {
            display: flex;
            justify-content: center;
        }
        .pagination a {
            margin: 0 5px;
            padding: 8px 16px;
            text-decoration: none;
            color: #333;
            border: 1px solid #ddd;
            border-radius: 4px;
        }
        .pagination a:hover {
            background-color: #ddd;
        }
        .pagination a.active {
            background-color: #4CAF50;
            color: white;
        }
    </style>
</head>
<body>

<div class="container">
    <h2>세미나 게시판</h2>
    <table>
        <thead>
            <tr>
                <th>번호</th>
                <th>제목</th>
                <th>발표자</th>
                <th>일자</th>
                <th>발표자료</th>
            </tr>
        </thead>
        <tbody id="table-body">
            <!-- 동적 데이터 로드 -->
        </tbody>
    </table>
    <div class="pagination" id="pagination">
        <!-- 동적 페이지네이션 로드 -->
    </div>
</div>

<script>
        // 샘플 데이터
        const data = [
            { 번호: 5, 제목: "Lecture Review - Spline", 발표자: "조민규 (Intern)", 일자: "2024-07-26", 자료: "https://publish.obsidian.md/oscar-cho/Study/Math/Spline/Spline"},
            { 번호: 4, 제목: "Lecture Review - Compression", 발표자: "강현구 (M.S)", 일자: "2024-07-19", 자료: "https://drive.google.com/file/d/1Jq1Tb-eGdGubQpnTDc4cjAMAbcHmVU9C/view?usp=sharing"},
            { 번호: 3, 제목: "Paper Review - Cross-Lingual Named Entity Recognition via Multi-View Contrastive Learning", 발표자: "최은서 (M.S)", 일자: "2024-06-28", 자료: "https://drive.google.com/file/d/1Hto-MsUGvFEEOHQPZjjq7Em36vIvfi6P/view?usp=sharing"},
            { 번호: 2, 제목: "Paper Review - SpeechGPT-Gen: Scaling Chain-of-Information Speech Generation", 발표자: "강현구 (M.S)", 일자: "2024-06-07", 자료: "https://drive.google.com/file/d/1lBxIV62_P-UmoMtRs82Jl9naFWS8SzTq/view?usp=sharing"},
            { 번호: 1, 제목: "Paper Review - SpeechGPT: Empowering Large Language Models with Intrinsic Cross-Modal Conversational Abilities", 발표자: "강현구 (M.S)", 일자: "2024-05-03", 자료: "https://drive.google.com/file/d/1BTbA3amwh7UgH90gJGP0MTPm2_Ma6fQz/view?usp=sharing"},
        ];

        const rowsPerPage = 4; // 페이지 당 표시할 행 수
        let currentPage = 1; // 현재 페이지

        function displayTable(page) {
            const tableBody = document.getElementById('table-body');
            tableBody.innerHTML = ''; // 테이블 내용 비우기

            const start = (page - 1) * rowsPerPage;
            const end = start + rowsPerPage;
            const paginatedData = data.slice(start, end);

            paginatedData.forEach(row => {
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td>${row.번호}</td>
                    <td>${row.제목}</td>
                    <td>${row.발표자}</td>
                    <td>${row.일자}</td>
                    <td><a href="${row.자료}" target="_blank">Link</a></td>
                `;
                tableBody.appendChild(tr);
            });
        }

        function displayPagination() {
            const pagination = document.getElementById('pagination');
            pagination.innerHTML = ''; // 페이지네이션 내용 비우기

            const pageCount = Math.ceil(data.length / rowsPerPage);

            for (let i = 1; i <= pageCount; i++) {
                const a = document.createElement('a');
                a.href = '#';
                a.innerText = i;
                if (i === currentPage) {
                    a.classList.add('active');
                }
                a.addEventListener('click', (e) => {
                    e.preventDefault();
                    currentPage = i;
                    displayTable(currentPage);
                    updatePagination();
                });
                pagination.appendChild(a);
            }
        }

        function updatePagination() {
            const links = document.querySelectorAll('.pagination a');
            links.forEach(link => {
                link.classList.remove('active');
                if (parseInt(link.innerText) === currentPage) {
                    link.classList.add('active');
                }
            });
        }

        // 초기 테이블과 페이지네이션 표시
        displayTable(currentPage);
        displayPagination();
    </script>
</body>
</html>
