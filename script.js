//complete this code
class Animal {
	constructor(species){
		this.species=species;
	}
	getspecies(){
		this.species;
	}
	makesound(){
		console.log("The " + this.species + " makes a sound");
	}
}

class Dog extends Animal {
	bark(){
		console.log("woff");
	}
}

class Cat extends Animal {
	purr(){
		console.log("purr");
	}
}
const cat=new Cat("cat");
cat.makesound();
cat.purr();

const dog=new Dog("dog");
dog.makesound();
dog.bark();
// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
