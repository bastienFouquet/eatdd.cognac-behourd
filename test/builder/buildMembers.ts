import {Person} from '../../src/classes/Person';

function randomWeight(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function randomYearRegistration(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export function buildingMembers(number: number, minWeight: number, maxWeight: number,
                                minRegistration: number, maxRegistration: number) {
  const persons = [];
  for (let i = 0; i < number; i++) {
    const person = new Person({
      firstname: 'foo',
      lastname: 'bar',
      weight: randomWeight(minWeight, maxWeight),
      weapon: 'Hallebarde',
      yearRegistration: randomYearRegistration(minRegistration, maxRegistration)
    });
    persons.push(person);
  }
  return persons;
}
