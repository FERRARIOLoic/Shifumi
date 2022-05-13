// Function of music player
let play = () => {
    const audio = document.querySelector("#audio");
    if (soundAmbiance.src == 'http://127.0.0.1:5500/assets/img/speakerOff.png' || soundAmbiance.src == 'assets/img/speakerOff.png') {
        soundAmbiance.src = 'assets/img/speakerOn.png';
        audio.volume = 1; // 0.5 = 50% 1 = 100%
        audio.play();
    } else {
        soundAmbiance.src = 'assets/img/speakerOff.png';
        audio.pause();
        audio.currentTime = 0;
    }
}


let playHyena = () => {
    const audio = document.querySelector("#hyena");
    if (soundAmbiance.src == 'http://127.0.0.1:5500/assets/img/speakerOff.png' || soundAmbiance.src == 'assets/img/speakerOff.png') {
        //   intervalId = setInterval(doLoop, loopTime);
        audio.volume = 1; // 0.5 = 50% 1 = 100%
        audio.play();
        audio.loop = true;
    } else {
        audio.pause();
        audio.currentTime = 0;
        audio.loop = false;
    }
}

// Set audio or not when the user click on the sound button
let soundAmbiance = document.getElementById('soundAmbiance');
soundAmbiance.addEventListener('click', play);

let laughtHyena = document.getElementById('jokeMode');
laughtHyena.addEventListener('click', playHyena);