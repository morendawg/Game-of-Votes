// IMAGES
var slugToName = {
    clinton: 'Cersei Lannister',
    sanders: 'The High Sparrow',
    trump: 'Joffrey Baratheon',
    carson: 'Petyr Baelish',
    bush: 'Stannis Baratheon',
    cruz: 'Ramsay Bolton',
    rubio: 'Samwell Tarly',
    walker: 'Ser Davos',
    fiorina: 'Ygritte the Wildling',
    huckabee: 'Sandor Clegane',
    kasich: 'Grey Worm',
    christie: 'Robert Baratheon',
    paul: 'Theon Greyjoy',
    perry: 'Ellaria Sand',
    santorum: 'Hodor',
    jindal: 'Sansa Stark',
    pataki: 'Jojen Reed'
};

var randGroup = [
    'http://i.imgur.com/Yy2G2kE.jpg',
    'http://i.imgur.com/POpSTjZ.jpg',
    'http://i.imgur.com/HedWlgz.jpg',
    'http://i.imgur.com/DBkLU6J.jpg',
    'http://i.imgur.com/7nqAQpO.jpg'

]

function randomFrom(arr){
    var randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

$('img').each(function() {
    var s = $(this).attr('src');
    for (character in slugToName) {
        if (s.indexOf(character) > -1) {
            console.log('MATCH on ' + character);
            console.log(slugToName[character]);
            console.log(characterToImage[slugToName[character]]);
            var imgs = characterToImage[slugToName[character]];
            console.log(imgs);
            var randImg = randomFrom(imgs);

            $(this).attr('src',randImg); //randomFrom(randGroup)
            $(this).css('max-width','100%');
            $(this).css('max-width','100%');
            
            //$(this).attr('src',images[character]);
        }
    }
    // if nothing found then just change it
    
    /*$(this).attr('src',images.misc);*/
});



//$('img').each(function() {if ($(this).attr('src').indexOf('clinton') > -1) { return 'fuck'} });
