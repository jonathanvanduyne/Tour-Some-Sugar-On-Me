import { getBookings, getBands } from "./database.js"

const bookings = getBookings()

export const bookingList = () => {
    let html = "<ul>"

    for (const booking of bookings) {
        html += `<li data-type="bookings" data-id="${booking.id}" data-band="${booking.bandName}" data-venue="${booking.venueName}" data-datebooked="${booking.datebooked}">${booking.bandName} is playing at ${booking.venueName} on ${booking.datebooked}</li>`
    }

    html += "</ul>"

    return html
}



document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.dataset.type === "bookings") {
            let bandObject = { name: "placeholder name" }

            const bands = getBands()
            for (const band of bands) {
                if (itemClicked.dataset.band === band.name) {
                    bandObject = band
                }
            }
            return window.alert(`Band Name - ${bandObject.name}\nNumber of Band Members - ${bandObject.members}\nGenre - ${bandObject.genre}\nYear Formed - ${bandObject.yearFormed}`)
        }
    }
)