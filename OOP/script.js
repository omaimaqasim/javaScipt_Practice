// ✅ Example of Object — Like filling a form
let obj = {
  a: 11,
  b: "zeynen"
};
console.log(obj); // Output: { a: 11, b: 'zeynen' }


// ✅ Example of Prototype Inheritance
let animals = {
  eats: true
};

let rabits = {
  jumps: true
};

// Inherit properties from animals
rabits.__proto__ = animals;

console.log(rabits.eats); // true (inherited from animals)


// ✅ Class: A template to create multiple objects (like form template)
class Animal {
  constructor(name) {
    // this keyword assigns values to the object being created
    this.name = name;
    console.log("🐾 Animal object is created...");
  }

  eats() {
    console.log("🍽️ Eating...");
  }

  jumps() {
    console.log("🐇 Jumping...");
  }
}


// ✅ Inheritance using `extends`: lion inherits from Animal
class Lion extends Animal {
  constructor(name) {
    super(name); // Calls the parent (Animal) constructor
    console.log("🦁 Lion object is created...");
  }

  eats() {
    // Call parent eats method
    super.eats();
    console.log("🦁 Roaring while eating...");
  }
}


// ✅ Creating objects using the class (like filling the form)
let a = new Animal("Bunny");
console.log(a);
a.eats();
a.jumps();

console.log("----------------");

let l = new Lion("Shera");
console.log(l);
l.eats();
l.jumps();

/*
🧱 1. Class
- A blueprint to create objects.
- Example: class Animal { ... }

🧍‍♂️ 2. Object
- An instance of a class.
- Created using `new`: let a = new Animal("Bunny");

🔁 3. Constructor
- Special function that runs when an object is created.
- Used to assign values (this.name = name)

🔄 4. Inheritance (extends)
- One class inherits properties and methods from another.
- Example: class Lion extends Animal

📞 5. super()
- Calls the constructor or method of the parent class.

🌳 6. Prototype Inheritance
- Objects can inherit from other objects.
- Example: rabits.__proto__ = animals;

🧠 Benefit of OOP:
- Code reuse (Inheritance)
- Organized structure (Classes & Objects)
- Easy to manage and scale
*/
