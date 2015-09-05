var html = $("body").html();
for (keyword in keywords) {
    var re = new RegExp(keyword, 'g');
    html = html.replace(re,keywords[keyword])
}
$("body").html(html);
