fetch("https://raw.githubusercontent.com/JohnEllefson/JohnEllefson.github.io/master/~Scoots/data/rental-info.json")
    .then((response) => response.json())
    .then((jsObject) => {


        //document.getElementById(`max-persons${1}`).textContent = 10;
        
        //const rentalsList = jsonObject['rentals'];
        let rentalNum = 0;




        document.getElementById(`max-persons${1}`).textContent = rentals[0].maxPersons;






        //rentalsList.forEach(vehical => {
            
        //rentalsList.filter(rental => (rental.name == 'hondaMetro')).forEach(rental => {

        //document.getElementById(`max-persons${1}`).textContent = maxPersons;
        //document.getElementById(`reservation-half-day${rentalNum}`).textContent = vehical.reservation.halfDay;
        //document.getElementById(`reservation-full-day${rentalNum}`).textContent = vehical.reservation.fullDay;
        //document.getElementById(`walkIn-half-day${rentalNum}`).textContent = vehical.walkIn.halfDay;
        //document.getElementById(`walkIn-half-day${rentalNum}`).textContent = vehical.walkIn.fullDay;



        rentalNum++
    //});
});