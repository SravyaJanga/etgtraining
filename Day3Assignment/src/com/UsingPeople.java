package com.sonata;

public class UsingPeople {
	public static void main(String[] args)
	{
		TechnicalEmployee T = new TechnicalEmployee(98732, "John", "Johnson", 800000, 10);

		Staff S = new Staff(12345, "abcde", "fghjk", 4500000, 5);

		T.display();
		System.out.println("Technical Employee Sal is : "+T.calculateSal());
		System.out.println("\n");
		S.display();
		System.out.println("Staff Sal is : "+S.calculateSal());

	}

}
