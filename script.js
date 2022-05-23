//set variables
const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

const ticketPrice = +movieSelect.value;

// console.log(typeof ticketPrice);

function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const selectedSeatsCount = selectedSeats.length;
    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
    console.log(selectedSeatsCount);
}

container.addEventListener('click', (e) =>{
    // console.log(e.target);
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        // e.target.classList.toggle / e.target.classList.remove / e.target.classList.add
        e.target.classList.toggle('selected');
        updateSelectedCount();
    }
});