
/*
var html = $("body").html();
$("body").contents().each(function () {
    if (this.nodeType === 3) {
        var text = $.trim($(this).text());
        
        console.log(text.match(/"((?:\\.|[^"\\])*)"/g));
        
        this.nodeValue = text;
    }
    if (this.nodeType === 1) {
        var text = $(this).html();

        console.log(text.match(/"((?:\\.|[^"\\])*)"/g));
        
        $(this).html( text );
    }
    // To reduce calls just do


})

$("body").html(html);*/


$('p').each(function() {
    var text = $(this).text();
    var match = text.match(/“([^]*)”/);
    if (match) {
        text = text.replace(/“([^]*)”/g,'"' + randomFrom(quotes.pc) + '"');
        console.log(match);
        $(this).text(text);
    }
    
//(/“(?:\\.|[^"\\])*”/);
//   (/"|“((?:\\.|[^"\\])*)"\”/);

/*
    if (match) {
        console.log(match);
        text.replace(match,randomFrom(quotes.pc));
        $(this).text(text);
    }*/
});
