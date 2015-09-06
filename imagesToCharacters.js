// IMAGES
var images = {
    clinton: '',
    trump: '',
    carson: '',
    bush: '',
    cruz: '',
    rubio: '',
    walker: '',
    fiorina: '',
    huckabee: '',
    kasich: '',
    christie: '',
    paul: '',
    perry: '',
    santorum: '',
    jindal: '',
    pataki: ''
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
    for (character in images) {
        if (s.indexOf(character) > -1) {
            //console.log('YEYEFHJADKJFHDK ' + character);
            $(this).attr('src',randomFrom(randGroup));
            $(this).style('max-width','100%');
            $(this).style('max-width','100%');
            
            //$(this).attr('src',images[character]);
            return;
        }
    }
    // if nothing found then just change it
    
    /*$(this).attr('src',images.misc);*/
});



//$('img').each(function() {if ($(this).attr('src').indexOf('clinton') > -1) { return 'fuck'} });
