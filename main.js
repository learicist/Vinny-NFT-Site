console.log("First Load of Page");

$(document).ready(function () {

    $('#titleLogo').on('click', function () {
        location.reload();
    });


    $('#home').on('click', function () {
        $('#pageOne').removeClass('hidden');
        $('#buildPage').addClass('hidden');
    });

    $('#constBtn').on('click', function () {
        $('#pageOne').addClass('hidden');
        $('#buildPage').removeClass('hidden');
    });
});