export default function () {
    const videoElem = document.getElementById('bgvid');
    const volButtonOn = document.getElementById('vol-on');
    const volButtonOff = document.getElementById('vol-off');
    const videoContainer = document.getElementById('home-video-m-container');
    if(videoElem) {
        if (volButtonOn) {
            volButtonOn.onclick = function (e) {
                videoElem.muted = true;
                volButtonOn.style.display = 'none';
                volButtonOff.style.display = 'block';
            }
        }

        if (volButtonOff) {
            volButtonOff.onclick = function (e) {
                videoElem.muted = false;
                volButtonOff.style.display = 'none';
                volButtonOn.style.display = 'block';
            }
        }
    }
}
