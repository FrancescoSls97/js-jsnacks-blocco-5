const people = [
  { name: "Paolo", age: 35 },
  { name: "Giulia", age: 24 },
  { name: "Marco", age: 67 },
];

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'

const peoplesName = [];
people.forEach((name, i, arr) => {
  peoplesName.push(name);
});
console.log(peoplesName);
