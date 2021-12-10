package com.sonata;
import java.util.ArrayList;
public class UserEmployee {
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		EmployeeImpl emp=new EmployeeImpl();
		
		//Adding new employee
		Employee e=new Employee();
		e.setEmpId(25678);
		e.setEmpName("Janga");
		e.setEmpSalary(450000);
		emp.addEmployee(e);
		
		//Adding new employee
		Employee e1=new Employee();
		e1.setEmpId(12345);
		e1.setEmpName("Sravya");
		e1.setEmpSalary(700000);
		emp.addEmployee(e1);
		
		
		emp.displayEmployees();
		
		//Removing employee
		emp.deleteEmployee(e);
		
		System.out.println("12345 employee is removed");
		emp.displayEmployees();
		
		//Employee year salary
		System.out.println(e1.getEmpName()+" year salary is: "+emp.yearSalary(e1));
	}

}
