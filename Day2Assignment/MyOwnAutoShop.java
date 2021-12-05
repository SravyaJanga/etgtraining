package com.sonata;

public class MyOwnAutoShop {
	public static void main(String args[])
	{
		Car c1 = new Car(200,40000,"Yellow");
		Sedan s1 = new Sedan(500,90000,"Red",30);
		Ford f1 = new Ford(700,30000,"White",2021,45);
		Ford f2 = new Ford(200,80000,"Blue",2020,50);
		System.out.println("Car");
		c1.display();
		System.out.println("Sale Price of Car:"+c1.getSalePrice());
		System.out.println("Sedan");
		s1.display();
		System.out.println(s1.length);
		System.out.println("Sale Price of Sedan:"+s1.getSalePrice());
		System.out.println("Ford 1");
		f1.display();
		System.out.println(f1.year);
		System.out.println(f1.manufactureDiscount);
		System.out.println("Sale Price of Ford1:"+f1.getSalePrice());
		System.out.println("Ford 2");
		f2.display();
		System.out.println(f2.year);
		System.out.println(f2.manufactureDiscount);
		System.out.println("Sale Price of Ford2:"+f2.getSalePrice());
	}

	

}
