$(document).ready(function () {
    $('#open-modal-button').on('click', function () {
        $('.modal').modal({
            backdrop: false,
            keyboard: true
        });
        return false;
    });
});
