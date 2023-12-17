$(document).ready(function() {
    $('#proxySiteForm').submit(function(e) {
        e.preventDefault();
        var siteUrl = $('#siteUrl').val();
        $('#proxyResult').show();
        $('#proxyFrame').attr('src', 'https://cors-anywhere.herokuapp.com/' + siteUrl);
    });
});var x = new XMLHttpRequest();
x.open('GET', 'https://cors-anywhere.herokuapp.com/http://www.thecapitoltheatre.com/files/2016/01/squirrel1.jpg');
//x.setRequestHeader('x-requested-with', 'XMLHTTPREQUEST');x.responseType = 'blob';
x.onload = function () {..........};
x.onerror = function () {........}
