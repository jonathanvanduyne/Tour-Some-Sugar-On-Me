const database = {
    bands: [
        { id: 1, name: "The Wonky Bananas", members: 6, genre: "Kids Music", yearFormed: 2000 },
        { id: 2, name: "Paramore", members: 3, genre: "Alternative", yearFormed: 2004 },
        { id: 3, name: "Taylor Swift", members: 3, genre: "Pop", yearFormed: 2006 },
        { id: 4, name: "Justin Bieber", members: 2, genre: "Pop", yearFormed: 2009 },
        { id: 5, name: "Morgan Wallen", members: 4, genre: "Country", yearFormed: 2018 },
        { id: 6, name: "Skillet", members: 10, genre: "Rock", yearFormed: 1996 },
        { id: 7, name: "Machine Gun Kelly", members: 6, genre: "Pop", yearFormed: 2012 },
        { id: 8, name: "Ed Sheeran", members: 3, genre: "Pop", yearFormed: 2011 },
        { id: 9, name: "Florida Georgia Line", members: 2, genre: "Country", yearFormed: 2012 },
        { id: 10, name: "One Direction", members: 5, genre: "Pop", yearFormed: 2012 },
    ],
    bandMembers: [
        { id: 1, firstName: "Jordan", lastName: "Davis", yearBorn: 1990, role: "Lead Singer", bandId: 1 },
        { id: 2, firstName: "Peter", lastName: "Piper", yearBorn: 1992, role: "Lead Guitar", bandId: 1 },
        { id: 3, firstName: "Michael", lastName: "Jordan", yearBorn: 1993, role: "Bass", bandId: 1 },
        { id: 4, firstName: "Lebron", lastName: "James", yearBorn: 1980, role: "Basketball Player", bandId: 1 },
        { id: 5, firstName: "Stephen", lastName: "Curry", yearBorn: 1988, role: "3 Point Shooting BB Player", bandId: 1 },
        { id: 6, firstName: "Jesus", lastName: "Christ", yearBorn: 0, role: "Savior of the World", bandId: 1 },
        { id: 7, firstName: "Brian", lastName: "Cranston", yearBorn: 1971, role: "Breaking Bad", bandId: 2 },
        { id: 8, firstName: "Lucy", lastName: "Ball", yearBorn: 1800, role: "I Love Lucy", bandId: 2 },
        { id: 9, firstName: "Margot", lastName: "Robbie", yearBorn: 1991, role: "Beautiful Actress", bandId: 2 },
        { id: 10, firstName: "Leonardo", lastName: "Decaprio", yearBorn: 1977, role: "A-List Actor", bandId: 3 },
        { id: 11, firstName: "Robert", lastName: "Downey", yearBorn: 1969, role: "Iron Man", bandId: 3 },
        { id: 12, firstName: "Chris", lastName: "Evans", yearBorn: 1980, role: "Captain America", bandId: 3 },
        { id: 13, firstName: "Amelia", lastName: "Day", yearBorn: 1900, role: "Random Name I Made Up", bandId: 4 },
        { id: 14, firstName: "Chad", lastName: "Boswich", yearBorn: 1976, role: "Black Panther", bandId: 4 },

    ],
    venues: [
        { id: 1, name: "Radio City Music Hall", address: "1260 6th Ave, New York, NY 10020", squareFootage: 24000, maxOccupancy: 6013 },
        { id: 2, name: "Chicago Theater", address: "175 N State St, Chicago, IL 60601", squareFootage: 4500, maxOccupancy: 3600 },
        { id: 3, name: "Staples Center", address: "1111 S Figueroa St, Los Angeles, CA 90015", squareFootage: 950000, maxOccupancy: 20000 },
        { id: 4, name: "Lucas Oil Stadium", address: "500 S Capitol Ave, Indianapolis, IN 46225", squareFootage: 18000000, maxOccupancy: 70000 },
        { id: 5, name: "Sydney Opera House", address: "Bennelong Point, Sydney NSW 2000, Australia", squareFootage: 484376, maxOccupancy: 279 },
        { id: 6, name: "Taj Mahal", address: "Dharmapuri, Forest Colony, Tajganj, Agra, Uttar Pradesh 282001, India", squareFootage: 100000, maxOccupancy: 64000 },
        { id: 7, name: "Eiffel Tower", address: "Champ de Mars, 5 Av. Anatole France, 75007 Paris, France", squareFootage: 14485, maxOccupancy: 5000 },
        { id: 8, name: "Big Ben", address: "London SW1A 0AA, United Kingdom", squareFootage: 12640, maxOccupancy: 23 }
    ],
    bookings: [
        { id: 1, bandName: "Paramore", venueName: "Radio City Music Hall", datebooked: "12/25/2023" },
        { id: 2, bandName: "Machine Gun Kelly", venueName: "Staples Center", datebooked: "01/02/23" },
        { id: 3, bandName: "The Wonky Bananas", venueName: "Sydney Opera House", datebooked: "04/05/23" },
        { id: 4, bandName: "Justin Bieber", venueName: "Eiffel Tower", datebooked: "08/08/24" },
        { id: 5, bandName: "Ed Sheeran", venueName: "Taj Mahal", datebooked: "09/07/25" },
        { id: 6, bandName: "Florida Georgia Line", venueName: "Lucas Oil Stadium", datebooked: "05/22/99" },
        { id: 7, bandName: "Skillet", venueName: "Chicago Theater", datebooked: "03/07/27" },
        { id: 8, bandName: "One Direction", venueName: "Big Ben", datebooked: "06/09/28" },
        { id: 9, bandName: "Taylor Swift", venueName: "Big Ben", datebooked: "07/01/22" },
        { id: 10, bandName: "Morgan Wallen", venueName: "Big Ben", datebooked: "01/01/30" },
    ]
}

export const getBands = () => {
    return database.bands.map(bands => ({ ...bands }))
}

export const getVenues = () => {
    return database.venues.map(venues => ({ ...venues }))
}

export const getBookings = () => {
    return database.bookings.map(bookings => ({ ...bookings }))
}

export const getBandMembers = () => {
    return database.bandMembers.map(bandMembers => ({ ...bandMembers }))
}

