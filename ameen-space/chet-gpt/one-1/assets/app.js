// Smooth scrolling for anchor links
$(document).ready(function() {
    $("a[href^='#']").on("click", function(event) {
        event.preventDefault();
        var target = this.hash;
        $("html, body").animate({
            scrollTop: $(target).offset().top
        }, 800);
    });
});
