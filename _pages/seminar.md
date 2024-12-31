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
            margin-bottom: 5px;
        }
        table {
            display: table;
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
    <a href="https://docs.google.com/spreadsheets/d/185NpCONNMIqbyIvxQU0irysh03vPG_l-aXJYuZb7Kuo/edit?usp=sharing" style="float: right; font-size: 20px;">Detailed Schedule</a>
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
        </tbody>
    </table>
    <div class="pagination" id="pagination">
    </div>
</div>

<script>
        var jsonp = function(url)
        {
            var script = window.document.createElement('script');
            script.async = true;
            script.src = url;
            script.onerror = function()
            {
                alert('Can not access JSONP file.')
            };
            var done = false;
            script.onload = script.onreadystatechange = function()
            {
                if (!done && (!this.readyState || this.readyState === 'loaded' || this.readyState === 'complete'))
                {
                    done = true;
                    script.onload = script.onreadystatechange = null;
                    if (script.parentNode)
                    {
                        return script.parentNode.removeChild(script);
                    }
                }
            };
            window.document.getElementsByTagName('head')[0].appendChild(script);
        };
        
        // Example
        
        var my_callback = function(data)
        {
            var values = [];
            var num = 1;
            var rows = data.table.rows;
            for(var key in rows)
            {
                if (rows[key].c[2].v == 'Completed')
                {
                    if (rows[key].c[5].v != 'Private')
                    {
                        if (!rows[key].c[1]) {var title = 'None'}
                        else {var title = rows[key].c[1].v}

                        if (!rows[key].c[3]) {var presentor = 'None'}
                        else {var presentor = rows[key].c[3].v}

                        if (!rows[key].c[4]) {var position = 'None'}
                        else {var position = rows[key].c[4].v}

                        if (!rows[key].c[6]) {var date = 'None'}
                        else {var date = rows[key].c[6].f}

                        if (!rows[key].c[7]) {var link = 'None'}
                        else {var link = rows[key].c[7].v}
                        
                        values.push(
                            { 
                            '번호': rows.length - num, 
                             '제목': title, 
                             '발표자': "${presentor} (${position})", 
                            '일자': date, 
                            '자료': link,
                            }
                        );
                        num++;
                    }
                }
            }
            return values;
        }
    
        var query = function (sql, callback) {
            var url = 'https://spreadsheets.google.com/a/google.com/tq?',
                params = {
                    key: '185NpCONNMIqbyIvxQU0irysh03vPG_l-aXJYuZb7Kuo',
                    tq: encodeURIComponent(sql),
                    tqx: 'responseHandler:' + callback
                },
                qs = [];
            for (var key in params) {
                qs.push(key + '=' + params[key]);
            }
            url += qs.join('&');
            return jsonp(url);
        }
    
        var data = query('select *', 'my_callback');
        console.log(data)
        console.log(typeof(data))
    
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
