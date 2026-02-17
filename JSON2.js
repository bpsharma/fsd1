let persons = [ {name: "Alice", age: 30, city: "New York" },
                {name: "Bob", age: 25, city: "Los Angeles" },   
                {name: "Charlie", age: 35, city: "Chicago" } 
            ];
console.log(persons[0].name);
console.log(persons[0].age);
console.log(persons[0].city);

persons.forEach(function(person) {
  console.log(person.name);
  console.log(person.age);
  console.log(person.city);
});

