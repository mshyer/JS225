// A shelter keeps track of owners and their adoptions
// The shelter adopt method adds an owner to a list of owners if not present
//   also adds the adoption info as an array (animal type, animal name)
//   The owner OBJECT then adds the array to its list of animals
//
// The shelter printAdoptions method 
//   iterates through the owners
//   Lists out info for each pet in the pets property

const Shelter = {
  init() {
    this.owners = [];
    return this;
  },

  adopt(ownerObj, petObj) {
    if (!this.owners.includes(ownerObj)) {
      this.owners.push(ownerObj);
      ownerObj.adoptPet(petObj);
    } else {
      ownerObj.adoptPet(petObj);
    }
  },

  printAdoptions() {
    this.owners.forEach(owner => {
      console.log(owner.name + ' has adopted the following pets: ');
      owner.printPets();
    });
  },
};

const Owner = {
  init(name) {
    this.name = name;
    this.pets = [];
    return this;
  },

  adoptPet(petObj) {
    if (!this.pets.includes(petObj)) {
      this.pets.push(petObj);
    }
  },

  printPets() {
    this.pets.forEach(pet => {
      console.log(`a ${pet.type} named ${pet.name}`);
    });
  },

  numberOfPets() {
    console.log(`${this.name} has ${this.pets.length} adopted pets.`);
  },
};

const Pet = {
  init(type, name) {
    this.type = type;
    this.name = name;
    return this;
  }
};

let butterscotch = Object.create(Pet).init('cat', 'Butterscotch');
let phanson = Object.create(Owner).init('P Hanson');
let shelter = Object.create(Shelter).init();

shelter.adopt(phanson, butterscotch);
shelter.printAdoptions();
phanson.numberOfPets();
