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
const nextPage = document.querySelector('.nextPage')
const sectionVideo = document.querySelector('#video')
const footer = document.querySelector('footer')

// Function typing
function typing() {
    let typed = new Typed('#element', {
        strings: ['<i>Dear, Raniah Nurfadilah...</i>','<i>Hari ini, 13 Agustus, hari lahir kamu.</i>','<i>Bayangin deh, rasanya kayak baru lahir kemaren ga sih 🤔',' <i>Dan sekarang.., <strong>menginjak dewasa hahaha...</strong></i>','btw sekarang udah 20 tahun, kan ?<i/>','<i>Maaf yaa Raan...., basa basinya emang garing hehe...</i>','<i>maklum, emang kadang, aku mah jarinya lebih pinter ngomong daripada mulut, payah emang.. 😓<i/>','<i>Semoga ini ga ngurangin khidmatnya ucapin langsung ya..</i>','Ran...','<i>Terus sehat dan panjang umur yaa..<i/>','<i>Makasih banyak udah jadi orang yang menginspirasi.</i>','<i>Makasih udah jadi pribadi yang kuat,</i>','<i>Makasih udah jadi pribadi, yang mandiri<i/>','<i>Ran.., kamu hebat..</i>','<i>Makasih, cuma itu yang bisa aku sampein</i>','<i>Aku pengen apresiasi Rani, buat perjuangannya sampai di titik ini.</i>','<i>Ran..., boleh ya nitip pesen..</i>', '<i>Ran..., kedepan, kita ga pernah tau soal sesuatu itu mudah atau susah sampai kita ngalamin, hadepin ketakutan itu sendiri</i>','<i>Nanti kita akan sadar kalo jalan yang kita ambil itu luar biasa indah.</i>','<i>Setiap keputusan yang kita ambil nanti, pasti diluar ekspektasi</i>','<i>Tapi Allah, selalu ngerencanain semuanya sesuai bagian dan waktunya ran..</i>','<i>Ran.., Mencapai sesuatu juga ga gampang, tapi bukan berarti mustahil.</i>','<i>Suatu saat kita juga pasti ngalamin gagal, itu bukan "What if" tapi "When ?"</i>','<i>Dan orang yang kuat, pasti nerima keadaan apapun mau baik ataupun buruk</i>','<i>Jadi.., terus semangat ya cantikkkkkk, Good luck with your process</i>','Life isn\'t easy','Trust to Allah, the one and only', 'Stay stronger, braver, hopeful heart, graceful and cool 😎','Sekali lagi....','Selamat ulang tahun ya, Raniah...'],
        typeSpeed: 40,
        fadeOut: true,
        // loop: true,
        backDelay: 3000,
        showCursor: false,
        smartBackspace: true
    });
    return typed
}

// Selection tahun
const currentYear = new Date().getFullYear();

// Waktu Ulang Tahun
const birthdayTime = new Date(`August 11 ${currentYear} 22:14:00`)


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
        footer.style.display = 'block'
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
    titleBirthday.innerHTML = `Happy Level Up \n Raniah Nurfadilah \n 🎉🎉🥳🎉🎉`
    gifImg.setAttribute('src','./src/gif/gif-3.gif')
}


btnHidden.addEventListener('click', () => {
    audio.play()
    audio.volume = 0.5
    cardMsgDetail.classList.add('show')
    btnNotif.style.display = 'none'
    cardMsgParagraf.forEach(element => {
        element.classList.add('popUp')
    });
    headGreating.style.display = 'none'
    setTimeout(() => {
        const sectionVideo = document.querySelector('#video')
        sectionVideo.style.display = 'block'
        clearInterval(counting)
    }, 24610);
    setTimeout(() => {
        nextPage.style.display = 'block'
        sectionVideo.style.display = 'block'
        footer.style.display = 'block'
    }, 24630);
})

const counting = setInterval(updateCountdown, 1000)

nextPage.addEventListener('click', () => {
    setTimeout(typing(),5000)
})
