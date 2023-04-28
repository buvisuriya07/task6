function main() {
  class Person {
    constructor(firstName, lastName, age, email) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.email = email;
    }

    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    }

    getAge() {
      return this.age;
    }

    getEmail() {
      return this.email;
    }

    setFirstName(firstName) {
      this.firstName = firstName;
    }

    setLastName(lastName) {
      this.lastName = lastName;
    }

    setAge(age) {
      this.age = age;
    }

    setEmail(email) {
      this.email = email;
    }
  }

  const john = new Person('John', 'Doe', 30, 'john.doe@example.com');
  console.log(john.getFullName()); // Output: John Doe
  console.log(john.getAge()); // Output: 30
  console.log(john.getEmail()); // Output: john.doe@example.com

  john.setAge(31);
  console.log(john.getAge()); // Output: 31

  john.setEmail('johndoe@example.com');
  console.log(john.getEmail()); // Output: johndoe@example.com
}

main(); // Call the main function to execute the program
