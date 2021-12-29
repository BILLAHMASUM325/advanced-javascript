const students = [
    {id: 21, name: 'Omar Sunny'},
    {id: 31, name: 'Manna'},
    {id: 41, name: 'Sunny'},
    {id: 71, name: 'Deepjol'}
];

const names = students.map( s => s.name);
console.log(names)

const schoolName = [
    {id: '1', name: 'JUST'},
    {id: '2', name: 'NU'},
    {id: '3', name: 'JU'},

];
const finalArray = schoolName.map( x => x.name);
const finalId = schoolName.map(x => x.id);
const biggerId = schoolName.filter(x => x.id > 1);
console.log(finalArray);
console.log(finalId);
console.log(biggerId);