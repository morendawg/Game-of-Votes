// CHARACTERS

var candidates = {
	"Barack Obama": "Jon Snow",
	"Obama": "Jon Snow",
	"Jeb Bush": "Stannis Baratheon",
	"Bush": "Stannis",
	"Hillary Rodham Clinton": "Cersei Lannister",
	"Hillary Clinton": "Cersei Lannister",
	"Hillary": "Cersei",
	"Clinton": "Cersei",	
	"Ben Carson": "Petyr Baelish",
	"Carson": "Baelish",
	"Bernie Sanders": "The High Sparrow",
	"Sanders": "The High Sparrow",
	"Bernie": "The High Sparrow",
	"The Bern": "The Hish Sparrow",
	"Chris Christie": "Robert Baratheon",
	"Christie": "Robery Baratheon",
	"Ted Cruz": "Ramsay Bolton",
	"Cruz": "Ramsay",
	"Jim Webb": "Eddard Stark",
	"Webb": "Eddard",
	"Carly Fiorina": "Ygritte the Wildling",
	"Fiorina": "Ygritte",
	"Joseph R. Biden Jr.": "Jorah Mormont",
	"Joe Biden": "Jorah Mormont",
	"Biden": "Jorah",
	"Lindsey Graham": "Lord Varys",
	"Graham": "Varys",	
	"Rick Santorum": "Hodor",
	"Santorum": "Hodor",
	"Lincoln Chafee": "Bronn",
	"Chafee": "Bronn",
	"Martin O’Malley": "Oberyn Martell",
	"O’Malley": "Oberyn",
	"Jim Gilmore": "Podrick Payne",
	"Gilmore": "Podrick",
	"Donald Trump": "Joffrey Baratheon",
	"Trump": "Joffrey",	
	"Marco Rubio": "Samwell Tarly",
	"Rubio": "Tarly",	
	"Mitt Romney": "Maester Aemon",
	"Romney": "Maester Aemon",
	"Mike Huckabee": "Sandor Clegane",
	"Huckabee": "The Hound",
	"Bobby Jindal": "Sansa Stark",
	"Jindal": "Sansa",
	"John Kasich": "Grey Worm",
	"Kasich": "Grey Worm",
	"George Pataki": "Jojen Reed",
	"Pataki": "Jojen",
	"Rand Paul": "Theon Greyjoy",
	"Paul": "Theon",
	"Rick Perry": "Ellaria Sand",
	"Perry": "Ellaria",
	"Scott Walker": "Ser Davos",
	"Walker": "Ser Davos"
	
}

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
console.log(html);
for (candidate in candidates) {
    var re = new RegExp(candidate, 'g');
    html = html.replace(re,candidates[candidate])
}
$("body").html(html);
