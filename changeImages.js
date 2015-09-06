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

/*
  var randGroup = [
  'http://i.imgur.com/Yy2G2kE.jpg',
  'http://i.imgur.com/POpSTjZ.jpg',
  'http://i.imgur.com/HedWlgz.jpg',
  'http://i.imgur.com/DBkLU6J.jpg',
  'http://i.imgur.com/7nqAQpO.jpg'
  ]*/

function randomFrom(arr){
    var randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
};



$('img').each(function() {
    var s = $(this).attr('src');
    for (character in slugToName) {
        if (s && s.indexOf(character) > -1) {
            var imgs = characterToImage[slugToName[character]];
            var randImg = randomFrom(imgs);

            $(this).attr('src',randImg);
            $(this).css('max-width','100%');
            
        }
    }
    // if nothing found then just change it
    
    var html = $(this).parent().html();
    if (html.indexOf('logo') == -1) {
        $(this).attr('src',randomFrom(randomImages));
        $(this).css('max-width','100%');
    }
});


$('a').each(function() {

    if ($(this).css('background-image') != 'none') {
        console.log($(this).css('background-image'));
        $(this).css('background-image','url('+randomFrom(randomImages)) + ')';
    }
    /*
      if ($(this).attr('background-image')) {
      console.log("yess");
      $(this).attr('background-image',randomFrom(randomImages));
      }*/
});