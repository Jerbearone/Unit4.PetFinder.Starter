// database of pets, pets breed, pet age, owners name , telephone numbers, and appointments
const pets = [
    {
        id: 1,
        name: 'Fido',
        breed: 'Labrador',
        age: 3,
        owner: 'John',
        ownerurl: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/1200px-SpongeBob_SquarePants_character.svg.png",
        telephone: '555-555-5555',
        peturl:"https://i0.wp.com/theverybesttop10.com/wp-content/uploads/2018/04/Ten-of-the-Funniest-Labrador-Retrievers-You-Will-Ever-See-10.jpg?resize=600%2C464&ssl=1",
        appointments: [

            {
                date: '01/01/2020',
                time: '10:00',
                reason: 'checkup'
            },
        ]
    },
    {
        id: 2,
        name: 'Spot',
        breed: 'Poodle',
        age: 2,
        owner: 'Jane',
        telephone: '555-555-5555',
        ownerurl:"https://w7.pngwing.com/pngs/503/1/png-transparent-patrick-star-patrick-star-saint-patrick-s-day-paddy-holidays-fictional-character-saint-patricks-day.png",
        peturl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpoV2NCuEQI_irPoOabUYTuCLQ6Sv3HHA8tbdW3qUoNBGqFTf9EB2in2Oil-Kj4pNMDqY&usqp=CAU",
        appointments: [
            {
                date: '01/01/2020',
                time: '10:00',
                reason: 'checkup'
            },

        ]
    },
    {
        id: 3,
        name: 'Rover',
        breed: 'Pitbull',
        age: 1,
        owner: 'John',
        ownerurl:"https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/Squidward_Tentacles.svg/1200px-Squidward_Tentacles.svg.png",
        telephone: '555-555-5555',
        peturl:"https://i.ytimg.com/vi/AQ7pxuXhL64/maxresdefault.jpg",
        appointments: [
            {
                date: '01/01/2020',
                time: '10:00',
                reason: 'checkup'
            },
            {
                date: '01/01/2020',
                time: '10:00',
                reason: 'checkup'
            }
        ]
    }
];

module.exports = pets;