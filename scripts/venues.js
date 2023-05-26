import { getVenues, getBookings } from "./database.js"

const venues = getVenues()

export const venueList = () => {
    let html = "<ul>"

    for (const venue of venues) {
        html += `<li data-type="venues" data-id="${venue.id}" data-name="${venue.name}" data-address="${venue.address}" data-squarefootage="${venue.squareFootage}" data-ymaxoccupancy="${venue.maxOccupancy}">${venue.name}</li>`
    }

    html += "</ul>"

    return html
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.dataset.type === "venues") {
            
            const bookings = getBookings()
            let bandsPlaying = []
            
            for (const booking of bookings) {
                if (itemClicked.dataset.name === booking.venueName) {
                    bandsPlaying.push(booking.bandName)
                }
            }
            return window.alert(`${itemClicked.dataset.name} has ${bandsPlaying} scheduled to perform.`)
        }
    }
)