var mask1 = $('#mask1 circle')[0];
var mask2 = $('#mask2 circle')[0];
$('.pic').mousemove(function (event) {
    event.preventDefault();
    var upX = event.clientX;
    var upY = event.clientY;
    console.log(upX, upY);
    mask1.setAttribute("cy", (upY - 5) + 'px');
    mask1.setAttribute("cx", (upX) + 'px');
    mask2.setAttribute("cy", (upY - 5) + 'px');
    mask2.setAttribute("cx", (upX) + 'px');
});