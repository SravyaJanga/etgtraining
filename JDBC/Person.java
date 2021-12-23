package com.sonata.Assum;

public class Person {
  String firstName;
  String lastName;
  
  Person(String f , String l){
	  this.firstName= f;
	  this.lastName = l;
  }
public String getFirstName() {
	return firstName;
}
public void setFirstName(String firstName) {
	this.firstName = firstName;
}
public String getLastName() {
	return lastName;
}
public void setLastName(String lastName) {
	this.lastName = lastName;
}
  
}
