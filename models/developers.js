const developers = [
    {
        id: 1001,
        name: 'John Wick',
        skill: 'Full-Stack Development',
    },
    {
        id: 1002,
        name: 'James Bond',
        skill: 'Front-End Development',
    },
    {
        id: 1003,
        name: 'Dwayne Johnson',
        skill: 'Back-End Development',
    }
];

module.exports = {
    getAll,
    getOne
}

function getOne(id) {
    id = parseInt(id);
    return developers.find(dev => dev.id === id);
}

function getAll() {
    return developers;   
}
