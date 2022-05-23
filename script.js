//set variables
const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

let ticketPrice = +movieSelect.value;

// console.log(typeof ticketPrice);


//update total count
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    //copy selected seat into a array
    const seatsIndex = [...selectedSeats].map((seat)=>[...seats].indexOf(seat));
    console.log(seatsIndex);
    //map throup a array
    // retrun a new array indexes
    
    const selectedSeatsCount = selectedSeats.length;
    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
    
}
//movie select event
movieSelect.addEventListener('change', e=>{
    ticketPrice = +e.target.value;
    updateSelectedCount();
});
// seat select event
container.addEventListener('click', (e) =>{
    // console.log(e.target);
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        // e.target.classList.toggle / e.target.classList.remove / e.target.classList.add
        e.target.classList.toggle('selected');
        updateSelectedCount();
    }
});