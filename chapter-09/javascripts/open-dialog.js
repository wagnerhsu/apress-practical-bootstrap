$(document).ready(function() {
    $('#open-modal-button').on('click', function() {
        $('.modal').modal({
            backdrop: false,
            keyboard: true
        });
        return false;
    });
    $('#testButton').on('click',function() {
        $('#modelId01').modal('hide');
        alert('testButton');
    })
});
