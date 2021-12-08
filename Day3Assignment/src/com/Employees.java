package com.sonata;

public class Employees extends MyOwnException implements MyInterface{
	int  empId;
	String empName;
	double empSal;

	public Employees(int id, String name, double sal, String a) 
	{
		super(a);
		this.empId = id;
		this.empName = name;
		this.empSal = sal;

	}

	public void display() {
		System.out.println("Employee Id is : "+empId);
		System.out.println("Employee Name : "+empName);
		System.out.println("Employee Salary : "+empSal);
	}


	@Override
	public void saCal() throws MyOwnException 
	{

		double yearlySal = empSal * 15;

			if(yearlySal < 350000)
			{
				throw new MyOwnException(" lessthgan 1 lakh");
			}else 
			{
				System.out.println("gretherthan 1 lakh");
			}

	}
	public static void main(String[] args) throws MyOwnException 
	{
		Employees emp = new Employees(45678, "abcdef", 275690 , "dfgdfg");
		emp.display();
		emp.saCal();

	}

} 