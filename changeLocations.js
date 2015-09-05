// LOCATIONS
// todo extract
function randomFrom(arr){
    var randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}


console.log('FUUUCK');
var html = $("body").html();
for (var i =0; i < topCities.length; i++) {
    var city = topCities[i];
    console.log(city);
    var re = new RegExp(city, 'g');
    var randCastle = randomFrom(castles);
    html = html.replace(re,randCastle);
}
$("body").html(html);
