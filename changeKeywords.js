/*
var html = $("body").html();
for (keyword in keywords) {
    var re = new RegExp(keyword, 'g');
    html = html.replace(re,keywords[keyword])
}
$("body").html(html);

*/


$("body").contents().each(function () {
    if (this.nodeType === 3) {
        var text = $.trim($(this).text());
        
        for (keyword in keywords) {
            var re = new RegExp(keyword +' ', 'g');
            text = text.replace(re,keywords[keyword] + ' ');
        }

        this.nodeValue = text;
    }
    if (this.nodeType === 1) {
        var text = $(this).html();
        for (keyword in keywords) {
            var re = new RegExp(keyword +' ', 'g');
            text = text.replace(re,keywords[keyword] + ' ');
        }
        $(this).html( text )
    }
    // To reduce calls just do
});
