// LOCATIONS

var rules = {
    "Donald Trump": "Joffrey",
    "Trump": "Joffrey",

    "Hillary Clinton": "Catelyn Stark",
    "Hillary": "Catelyn Stark",
    "Clinton": "Catelyn Stark"
}

var html = $("body").html();
for (key in rules) {
    html = html.replace(key,rules[key])
}
$("body").html(html);

