class Student

{

    constructor(name,email)

    {

        this.name=name;

        this.email=email;

    }

    greeting()

    {

        console.log(`My name is ${this.name} and  eamil is ${this.email}`)

    }

}

module.exports=Student
