fetch("https://raw.githubusercontent.com/JohnEllefson/JohnEllefson.github.io/master/~Scoots/data/rental-info.json")
    .then((response) => response.json())
    .then((jsObject) => {

        const rentalsList = jsObject['rentals'];
        let rentalNum = 0;

        rentalsList.forEach(rental => {

            document.getElementById(`max-persons${rentalNum + 1}`).textContent = rental.maxPersons;
            document.getElementById(`reservation-half-day${rentalNum + 1}`).textContent = rental.reservation.halfDay;
            //document.getElementById(`reservation-full-day${rentalNum + 1}`).textContent = rental.reservation.fullDay;
            //document.getElementById(`walkIn-half-day${rentalNum + 1}`).textContent = rental.walkIn.halfDay;
            //document.getElementById(`walkIn-half-day${rentalNum + 1}`).textContent = rental.walkIn.fullDay;



            rentalNum++
        });
    });