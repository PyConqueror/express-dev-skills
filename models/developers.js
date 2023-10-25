const developers = [
    {
        id: 1001,
        name: 'John Wick',
        skills: ['Full-Stack Development','Machine Learning'],
    },
    {
        id: 1002,
        name: 'James Bond',
        skills: ['Front-End Development','Data Science'],
    },
    {
        id: 1003,
        name: 'Dwayne Johnson',
        skills: ['Back-End Development','App Development'],
    }
];

module.exports = {    
    getAll,
    getOne,
    create,
    delete : deleteOne
}

function getOne(id) {
    id = parseInt(id);
    return developers.find(dev => dev.id === id);
}

function getAll() {
    return developers;   
}

function create(id, skill) {
    const developer = developers.find(dev => dev.id === parseInt(id));
    if (developer) {
        developer.skills.push(skill)
        console.log(developer.skills)
    } 
}

function deleteOne(id, skill) {
    const developer = developers.find(dev => dev.id === parseInt(id));
    if (developer) {
        const index = developer.skills.indexOf(skill);
        developer.skills.splice(index, 1);
    }
}
