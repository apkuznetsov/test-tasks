$(document).ready(function () {
    $("#calcExpandedFormBtn").click(function (event) {
        event.preventDefault();
        calcExpandedFormClick();
    });

    $("#saveInputBtn").click(function (event) {
        event.preventDefault();
        saveInputClick();
    });

    $("#uploadInputBtn").click(function (event) {
        event.preventDefault();
        uploadInputClick();
    });
});

function calcExpandedFormClick() {
    const number = {
        number: parseInt($("#number").val())
    }

    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: "api/get-expanded-form",
        data: JSON.stringify(number),
        dataType: 'json',
        success: function (response) {
            $('#expanded-form').text(response.answer);
        },
        error: function () {
            alert("error");
        }
    });
}

function saveInputClick() {
    const numberInput = {
        taskName: $("#taskName").text(),
        input: parseInt($("#number").val())
    }

    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: "api/jquery-save-number-input",
        data: JSON.stringify(numberInput),
        dataType: 'json',
        success: function (response) {
            window.location = 'api/jquery-download-number-input?' + response.answer
        },
        error: function () {
            alert("error");
        }
    });
}

function uploadInputClick() {
    const formData = new FormData();
    const files = $('#file')[0].files[0];
    formData.append('file', files);

    $.ajax({
        type: "POST",
        url: "api/upload-number-input",
        data: formData,
        contentType: false,
        processData: false,
        success: function (response) {
            $('#expanded-form').text("");
            $('#number').val(response.number)
        },
        error: function () {
            alert("error");
        }
    });
}