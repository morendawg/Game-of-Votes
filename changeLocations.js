// LOCATIONS
// todo extract
function randomFrom(arr){
    var randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

// City -> GoT castle
// State -> GoT city

for (var i =0; i < topCities.length; i++) {
    var city = topCities[i];
    var re = new RegExp(city, 'g');
    var randCastle = randomFrom(castles);
    html = html.replace(re,randCastle);
}
for (var i =0; i < states.length; i++) {
    var state = states[i];
    var re = new RegExp(state, 'g');
    var randCity = randomFrom(cities);
    html = html.replace(re,randCity);
}
$("body").html(html);
