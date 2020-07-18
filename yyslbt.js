var li = $("li");
var img = $("img");
li.each(function(index, item) {
    $(item).mouseenter(function() {
        console.log($(this).index());
        // img.stop().fadeOut(300);
        // $(img[index]).stop().fadeIn(300);
    })
})