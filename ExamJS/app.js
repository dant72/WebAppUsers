$(document).ready(function() {
    $('.ap1').click(function(){ 
          /*     $.ajax({
            type: 'GET',
            url: 'http://localhost:5219/User/GetAll',
            dataType: 'json',
            success: function (data) {
                alert(JSON.stringify(data));
            }
        })*/
        $.getJSON("http://localhost:5219/User/GetAll")
        .done(function(data) {
            alert(JSON.stringify(data));
          })
        });
;
    });