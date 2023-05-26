import { bandList } from "./bands.js"
import { bookingList } from "./bookings.js"
import { venueList } from "./venues.js"

const mainContainer = document.querySelector(".container")

const applicationHTML = `
<h1>Tour Some Sugar On Me</h1>

<article class="bookings">
    <h2>Bookings</h2>
    ${bookingList()}
</article>
<br>
<article class="details">
    <section class="detail--column list details__bands">
        <h2>Bands</h2>
        ${bandList()}
    </section>
    <section class="detail--column list details__venues">
        <h2>Venues</h2>
        ${venueList()}
    </section>
</article>

`

mainContainer.innerHTML = applicationHTML