// IMAGES
var images = {
    misc: 'http://i.imgur.com/aXd8vwt.jpg',
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

$('img').each(function() {
    console.log($(this).attr('src'));
    /*
    for (character in images) {
        if (s.indexOf(character) > -1) {
            $(this).attr('src',images[character]);
            return;
        }
    }
    // if nothing found then just change it
    */
    $(this).attr('src',images.misc);
});
