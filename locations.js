// LOCATIONS

var rules = {
    "Donald J. Trump": "Joffrey",
    "Donald Trump": "Joffrey",
    "Trump": "Joffrey",

    "Hillary Rodham Clinton": "Catelyn Stark",
    "Hillary Clinton": "Catelyn Stark",
    "Hillary": "Catelyn Stark",
    "Clinton": "Catelyn Stark"
}

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

    /*
      var html = $("body").html();
      for (key in rules) {
      html = html.replace(key,rules[key])
      }
      $("body").html(html);

    */
