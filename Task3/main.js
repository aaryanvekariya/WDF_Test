const video = document.getElementById('video');
const playPauseBtn = document.getElementById('playPauseBtn');
const progressBar = document.getElementById('progressBar');
const muteBtn = document.getElementById('muteBtn');
const volumeControl = document.getElementById('volumeControl');
const playbackSpeed = document.getElementById('playbackSpeed');
const fullscreenBtn = document.getElementById('fullscreenBtn');

playPauseBtn.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playPauseBtn.textContent = 'Pause';
    } else {
        video.pause();
        playPauseBtn.textContent = 'Play';
    }
});

video.addEventListener('timeupdate', () => {
    const progress = (video.currentTime / video.duration) * 100;
    progressBar.value = progress;
});

progressBar.addEventListener('input', () => {
    const newTime = (progressBar.value / 100) * video.duration;
    video.currentTime = newTime;
});

muteBtn.addEventListener('click', () => {
    video.muted = !video.muted;
    muteBtn.textContent = video.muted ? 'Unmute' : 'Mute';
});

volumeControl.addEventListener('input', () => {
    video.volume = volumeControl.value / 100;
});

playbackSpeed.addEventListener('change', () => {
    video.playbackRate = parseFloat(playbackSpeed.value);
});

fullscreenBtn.addEventListener('click', () => {
    if (!document.fullscreenElement) {
        video.requestFullscreen().catch(err => {
            console.error(`Error attempting to enable full-screen mode: ${err.message}`);
        });
    } else {
        document.exitFullscreen();
    }
});