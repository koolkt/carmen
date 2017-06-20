export default function () {
    const volButtonOn = document.getElementById('vol-on');
    const volButtonOff = document.getElementById('vol-off');

    if (volButtonOn) {
        volButtonOn.onclick = function (e) {
            document.getElementById('bgvid').muted = true;
            volButtonOn.style.display = 'none';
            volButtonOff.style.display = 'block';
        }
    }

    if (volButtonOff) {
        volButtonOff.onclick = function (e) {
            document.getElementById('bgvid').muted = false;
            volButtonOff.style.display = 'none';
            volButtonOn.style.display = 'block';
        }
    }
}
