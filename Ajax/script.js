/* -------------------------------------------------------------------------- */
/*                              Non jQury Method                              */
/* -------------------------------------------------------------------------- */
$('#fetchBtn').click(function buttonClickHandler() {
    // Intantiate and xhr object
    const xhr = new XMLHttpRequest();

    // Open the object
    xhr.open('get', 'https://dog.ceo/api/breeds/image/random', true);

    // What to do on progress
    xhr.onload = function () {
        console.log(xhr.response);
        var obj = JSON.parse(xhr.response);
        let imgUrl = obj.message;
        // console.log(imgUrl);
        $('#dog').attr("src", imgUrl);
    };

    // On error
    xhr.onerror = function(){
        console.log('Vanilla Request Failed');
    }

    xhr.send();
});

/* -------------------------------------------------------------------------- */
/*                                Using jQuery                                */
/* -------------------------------------------------------------------------- */

$('#fetchjQuery').click(function () {
    $.ajax({
        url: 'https://dog.ceo/api/breeds/image/random',
        method: 'GET',
        success: function (data) {
            let imgUrl = data.message;
            $('#dog').attr("src", imgUrl);
            console.log('Called By jQuery');
        }
    }).fail(function(){
        console.log('error jQuery');
    })
});

/* -------------------------------------------------------------------------- */
/*                              Using jQuery Get                              */
/* -------------------------------------------------------------------------- */
$('#fetchGet').click(function(){
    $.get('https://dog.ceo/api/breeds/image/random', function (data) {
        let imgUrl = data.message;
            $('#dog').attr("src", imgUrl);
            console.log('Called By jQuery Get');
    }).fail(function(xhr, textStatus, errThrown){
        console.log('Request Failed', xhr.status);
    });
});



