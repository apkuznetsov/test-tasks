<%@ page contentType="text/html;charset=UTF-8" %>
<%@ page import="static demo.app.WebApp.TASK_2_NAME" %>

<html>

<head>
    <title>Две задачки</title>

    <link rel="stylesheet" href="css/style.css">

    <script src="https://code.jquery.com/jquery-3.4.1.min.js" type="text/javascript"></script>
    <script src="js/task2.js" type="text/javascript"></script>
</head>

<body>

<h1 id="taskName"><%= TASK_2_NAME %></h1>

<div class="centered-div">
    <div class="list-container">
        <div class="list">
            <div class="list-item"><label for="number">Введите натуральное число:</label></div>
            <div class="list-item"><input type="number" id="number"/></div>
            <div class="list-item">
                <input type="button"
                       id="calcExpandedFormBtn"
                       value="Найти его расширенную форму"/>
            </div>
            <div class="list-item"><label id="expanded-form"></label></div>

            <div class="list-item">
                <input type="button"
                       id="saveInputBtn"
                       value="Сохранить ввод"/>
            </div>
        </div>
    </div>
</div>

</body>

</html>
