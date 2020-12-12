import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';

const video = document.querySelector('video');
const playPauseButton = document.querySelector('#play-pause');
const muteUnmuteButton = document.querySelector('#mute-unmute')

const player = new MediaPlayer({ el: video, plugins: [
    // new AutoPlay()
]});
playPauseButton.onclick = () => player.playOrPause();
muteUnmuteButton.onclick = () => player.muteOrUnmute();