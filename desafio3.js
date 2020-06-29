const modalOverlay = document.querySelector('.modal-overlay');
const modal = document.querySelector('modal')
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener("click", function() {
        const cursoId = card.getAttribute("id")
        modalOverlay.classList.add('active')
        modalOverlay.querySelector("iframe").src = `https://rocketseat.com.br/${cursoId}`

    })
}

const closeModal = document.querySelector(".close-modal").addEventListener("click", function() {
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector("iframe").src = ""
})

/*const closeModal = document.querySelector(".maximize-modal").addEventListener("click", function() {
    modal.classList.contais('maximize')
})*/





