const magicians = ['Brown Darren', 'John Carter', 'Charles Joseph', 'John Henry'];

function show_magicians(magicians) {
  for (let i = 0; i < magicians.length; i++) {
    console.log(magicians[i]);
  }
}

function make_great(magicians) {
  const great_magicians= [];

  for (let i = 0; i < magicians.length; i++) {
    const great_magician = `The great ${magicians[i]}`;
    great_magicians.push(great_magician);
  }

  return great_magicians;
}

const great_magicians = make_great([...magicians]); // Make a copy of the array
show_magicians(magicians);
console.log("\n");
show_magicians(great_magicians);
console.log("\nOriginal Array");
show_magicians(magicians);
