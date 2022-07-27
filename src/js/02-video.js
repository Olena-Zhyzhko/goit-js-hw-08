import Player from '@vimeo/player';
import { throttle } from 'lodash';

const iframe = document.querySelector('#vimeo-player');
const iframePlayer = new Player(iframe);

updauteTime();

iframePlayer.on('timeupdate', throttle(saveTime, 1000));


function saveTime(currentTime) {
    const { seconds, duration } = currentTime;
    // Цей if написаний для того, щоб по закінченню відео і оновленню сторінки скидався час на початок відео
    if (seconds === duration) { 
        localStorage.setItem("videoplayer-current-time", "0")
        iframePlayer.off('timeupdate');
        console.log("видео Закончилось");
        return;
    }
    console.log(seconds);
    localStorage.setItem("videoplayer-current-time", seconds);
};


function updauteTime() {
    iframePlayer.setCurrentTime(localStorage.getItem("videoplayer-current-time"));
}

// console.log(iframePlayer);

