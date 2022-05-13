let play = () => {
    const audio = document.querySelector('#audio');
    if(soundAmbiance.src== 'http://127.0.0.1:5000/assets/img/speakerOff.png' || soundambiance.src=='assets/img/speakerOff.png'){
        soundAmbiance.src = 'assets/img/volume.png';
        audio.volume = 1;
        audio.play();
    }else{
        soundAmbiance.src = 'assets/img/speakerOff.png';
        audio.pause();
        audio.currentTime = 0;
    
    }
}

let soundAmbiance = document.getElementById('soundAmbiance');
soundAmbiance.addEventListener('click', play);