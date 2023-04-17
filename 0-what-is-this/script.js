// console.log(this)

const user = {
	name: "Florian",
	greet(someone) {
		console.log(user)
		console.log(`Hello my name is: ${user.name}, nice to meet you ${someone}`)
	},
}
const secondUser = {
	name: "Bob",
	age: 20,
	favoritePet: "bird",
	afunction: function () {},
	lvlUp() {
		console.log(this)
		setInterval(() => {
			this.age++
			console.log(`${this.name} is now ${this.age}`)
			console.log(this)
		}, 1000)
	},
	changePet(newFavouritePet) {
		const noCatAllowed = () => {
			console.log("You cannot have a cat, but a dog.")
			console.log(this)
			this.favoritePet = "dog"
		}
		if (newFavouritePet === "cat") {
			return noCatAllowed()
		}
		this.favoritePet = newFavouritePet
	},
}

// secondUser.lvlUp()
secondUser.changePet("cat")
console.log(secondUser)

/**
 * const user = {
	name: "Florian",
	greet(someone) {
		console.log(user)
		console.log(`Hello my name is: ${user.name}, nice to meet you ${someone}`)
	},
}
 */

function person(name, age) {
	// With the new keyword
	// We automatically create a this object
	// const this = {}
	// and return it at the end of the function
	this.name = name
	this.age = age
}

// syntactic sugar
let num = 5
num = num + 1
num += 1

const myself = new person("Florian", 33)
const antoine = new person("Antoine", 34)
const toheeb = new person("Toheeb", 34)
console.log(myself, antoine, toheeb)
