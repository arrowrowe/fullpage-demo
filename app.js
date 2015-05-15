$(document).ready(function () {
    var fullPageSlideIndex = 1;
    $('#fullpage').show().fullpage({
        controlArrows: false,
        loopHorizontal: false,
        onSlideLeave: function (anchorLink, index, slideIndex, direction) {
            fullPageSlideIndex = slideIndex + (direction === 'left' ? -1 : 1);
        },
        onLeave: function (index, nextIndex, direction) {
            $.fn.fullpage.silentMoveTo(nextIndex, fullPageSlideIndex);
        }
    });
});
