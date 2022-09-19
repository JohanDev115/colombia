const modal = document.querySelector('.modal');
const buttons = document.querySelectorAll('.card__btn');
const closeButton = document.querySelector('#close-modal-btn');

function openModal() {
    modal.classList.remove('hidden');
}

function closeModal() {
    modal.classList.add('hidden');
}

for (let i = 0; i < buttons.length; i++) {
    buttons.item(i).addEventListener('click', openModal);
}

closeButton.addEventListener('click', closeModal);

window.onclick = (evt) => {
    if (evt.target.classList == "modal") {
        closeModal();
    }
}

