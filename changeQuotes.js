var changeQuotes = function() {
    $('p').each(function() {
        var text = $(this).text();
        var match = text.match(/“([^]*)”/);
        if (match) {
            text = text.replace(/“([^]*)”/g,'"' + randomFrom(quotes) + '"');
            $(this).text(text);
        }
    });
}
