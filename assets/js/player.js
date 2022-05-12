$(documents).ready(function(){

    var $zik = $('#audio')[0];

    var $play = $('.play');
    var $pause = $('.pause');
    var $stop = $('.stop');

    $play.click( jouer );
    $pause.click( attente );
    $stop.click( arret );

    function jouer(){
        $zik.play();
    }
    function attente(){
        $zik.pause();
    }
    function arret(){
        $zik.pause();
        $zik.currentTime = 0;
    }

})