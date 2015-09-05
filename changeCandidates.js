// CHARACTERS
/*

$("body").contents().each(function () {
    if (this.nodeType === 3) {
        var text = $.trim($(this).text());
        
        for (key in rules) {
            console.log(key +"-> " + rules[key]);
            text = text.replace(key,rules[key]);
        }
        this.nodeValue = text;
    }
    if (this.nodeType === 1) {
        var text = $(this).html();
        for (key in rules) {
            text = text.replace(key,rules[key]);
        }
        $(this).html( text )
    }
    // To reduce calls just do


})
*/
var html = $("body").html();
for (candidate in candidates) {
    var re = new RegExp(candidate, 'g');
    html = html.replace(re,candidates[candidate])
}
$("body").html(html);
