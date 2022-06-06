// $(selector).action();
// there are 3 kinds of selectors

// 1.element selector
$('p').click(function(){
    $(this).hide();
})

// 2. id and class selector
$('#para1 ,.app').click(function(){
    $(this).hide();
})

$('#show').click(function(){
    $('p').show();
})

