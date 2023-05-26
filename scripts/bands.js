import { getBands, getBookings, getBandMembers } from "./database.js"

const bands = getBands()
const bandMembers = getBandMembers()

export const bandList = () => {
    let html = "<ul>"

    for (const band of bands) {
        html += `<li data-type="bands" data-id="${band.id}" data-name="${band.name}" data-members="${band.members}" data-genre="${band.genre}" data-yearformed="${band.yearFormed}">${band.name}</li>`
    }

    html += "</ul>"

    return html
}


document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.dataset.type === "bands") {
            
            const bookings = getBookings()
            let venuesPlaying = []
            let bandpeople = []
            let answertext = ""
            for (const booking of bookings) {
                if (itemClicked.dataset.name === booking.bandName) {
                    venuesPlaying += booking.venueName
                }
            }
            
            for (const member of bandMembers) {
                if (parseInt(itemClicked.dataset.id) === member.bandId) {
                    bandpeople.push(member)
                }
            }

            for (const people of bandpeople) {
                answertext += `${people.firstName} ${people.lastName} - ${people.role}\n`
            }
            
            return window.alert(`${answertext}\nUpcoming Shows: ${itemClicked.dataset.name}\n${venuesPlaying} .`)
        }
    }
)