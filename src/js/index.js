// countdown
const main = document.querySelector('main')
const days = document.querySelector('.days')
const hour = document.querySelector('.hour')
const minute = document.querySelector('.minute')
const second = document.querySelector('.second')
const timeBlock = document.querySelectorAll('.time')
const titleBirthday = document.querySelector('.titleBirthday')
const cardMsgDetail = document.querySelector('.card-msg-detail')
const cardMsgParagraf = document.querySelectorAll('.card-msg-detail p')
const typingElement = document.querySelector('span#element')
const btnHidden = document.querySelector('.btn-notif .btnLink')
const audio = document.getElementsByTagName('audio')[0]
const gifImg = document.querySelector('.head-greating img')
const headGreating = document.querySelector('.head-greating')
const btnNotif = document.querySelector('.btn-notif')

// Function typing
function typing() {
    let typed = new Typed('#element', {
        strings: ['<i>For you</i>','Who have the initial <strong>RN</strong>','Who love watching Upin / Ipin','Who mix betawi and sumatra','Who have the beauty chocolate eyes'],
        typeSpeed: 30,
        fadeOut: true,
        loop: true
    });
    return typed
}

// Selection tahun
const currentYear = new Date().getFullYear();

// Waktu Ulang Tahun
const birthdayTime = new Date(`August 7 ${currentYear} 08:42:00`)


// Update Countdown Time
function updateCountdown() {
    const currentTime = new Date();
    const diff = birthdayTime - currentTime

    const d = Math.floor(diff / 1000 / 60 / 60 / 24)
    const h = Math.floor(diff / 1000 / 60 / 60) % 24
    const m = Math.floor(diff / 1000 / 60) % 60
    const s = Math.floor(diff / 1000) % 60

    // console.info(d,h,m,s)

    days.innerHTML = d < 1 ? 0 : d
    hour.innerHTML = h < 1 ? 0 : h
    minute.innerHTML = m < 1 ? 0 : m
    second.innerHTML = s < 1 ? 0 : s

    if (m == 0 && s <= 10) {
        second.style.fontSize = '10rem'
        timeBlock[0].style.display = 'none'
        timeBlock[1].style.display = 'none'
        timeBlock[2].style.display = 'none'
    } else if (m <= 0 && s <= 1) {
        showInTime() 
        setTimeout(() => {
        const end = Date.now() + 15 * 50;

        // go Buckeyes!
        const colors = ["#46c6dd", "#fa1ba4"];

        (function frame() {
        confetti({
            particleCount: 2,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: colors,
        });

        confetti({
            particleCount: 2,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: colors,
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
        })();
    }, 1000);
    }

}

function showInTime() {
    timeBlock.forEach(blockTimer => {
        blockTimer.style.display = 'none'
    });
    btnHidden.style.display = 'block'
    titleBirthday.innerHTML = 'HBD Raniii 🎉🥳'
    gifImg.setAttribute('src','./src/gif/gif-3.gif')
}

btnHidden.addEventListener('click', () => {
    cardMsgDetail.classList.add('show')
    btnNotif.style.display = 'none'
    cardMsgParagraf.forEach(element => {
        element.classList.add('popUp')
    });
    audio.play()
    headGreating.style.display = 'none'
    setTimeout(() => {
        const sectionVideo = document.querySelector('#video')
        sectionVideo.style.display = 'block'
        clearInterval(counting)
    }, 24610);
    setTimeout(() => {
        document.querySelector('main .nextPage').style.display = 'block'
    }, 24630);
})

const counting = setInterval(updateCountdown, 1000)

btnHidden.addEventListener('click', () => {
    setTimeout(typing(),3000)
})