class Person {
	constructor(name, age) {
		this.name = name
		this.age = age
		this.isAHacker = true
	}
	birthdayTime(aPresent) {
		this.age++
		this.present = aPresent
	}
}

const flo = new Person("Florian", 33)
const hugo = new Person("Hugo", 30)

console.log(flo, hugo)

console.log("No birthday yet:", flo.present, flo.age)

flo.birthdayTime("Cat")
console.log(flo.present, flo.age)

class Hero {
	constructor(identity, secretIdentity, strength = 5) {
		this.identity = identity
		this.secretIdentity = secretIdentity
		this.isEvil = false
		this.hp = 100
		this.strength = strength
	}

	greet() {
		if (Math.random() > 0.5) {
			return `Hey, i am ${this.identity}`
		} else {
			return this.secretGreet()
		}
	}

	secretGreet() {
		this.isEvil = true
		return `Secret identity revealed: ${this.secretIdentity}`
	}

	attack(someone) {
		someone.takeDamage(this.strength)
	}

	takeDamage(amount) {
		const maxDamage = amount > 20 ? 20 : amount
		// let maximumDamage
		// if (amount > 20) {
		//   maximumDamage = 20
		// } else {
		//   maximumDamage = amount
		// }
		this.hp -= maxDamage
		console.log(
			`${this.identity} speaking, I took ${maxDamage}, the attack was: ${amount}`
		)
	}

	doSomething() {
		if (this.isEvil) {
			console.log("Destroy a building")
		} else {
			console.log("save someone")
		}
	}
}

const spiderman = new Hero("Spiderman", "Peter Parker")
const superman = new Hero("Superman", "Clark Kent", 100)

console.log(spiderman.greet())
spiderman.doSomething()
spiderman.takeDamage(10)
spiderman.takeDamage(60)
console.log(spiderman.hp)

superman.attack(spiderman)
spiderman.attack(superman)

console.log(spiderman.strength, superman.strength)
