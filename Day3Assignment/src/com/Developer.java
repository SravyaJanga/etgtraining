package com.sonata;

public class Developer extends Employees
{
	public Developer(int id, String name, double sal, String a) 
	{
		super(id,name,sal,a);		
	}
	public void salCal() {
		System.out.println("Developer Class");
	}

} 
