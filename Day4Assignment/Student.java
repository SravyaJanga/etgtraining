package com.sonata;
import java.util.ArrayList;
import java.util.List;
public class Student {
	String name; 
	   int marks;  
	   public String getName() {
	      return name; 
	   } 
	   public int getMarks() { 
	      return marks; 
	   } 
	   Student(String n, int m){ 
	      name = n; 
	      marks = m;
	   } 
	   @Override public String toString() {     
	      return ("Student["+"Name:"+this.getName()+ " Marks: "+ this.getMarks() + "]"); 
	   }
	public static void main(String[] args) {
	      List<Student> studentlist = new ArrayList<Student>();
	      studentlist.add(new Student("Jonh", 22)); 
	      studentlist.add(new Student("Steve", 19)); 
	      studentlist.add(new Student("Kevin", 23)); 
	      studentlist.add(new Student("Rocky", 20)); 
	      studentlist.add(new Student("Lucky", 18));       
	      studentlist.sort((Student s1, Student s2)->s1.getMarks()-s2.getMarks()); 
	      studentlist.forEach((s)->System.out.println(s)); 
	   }
	}
	