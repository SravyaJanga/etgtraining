package com.sonata;

public class Rectangle extends Shape{
	public double rectangle(double length, double width) 
	{
		return length * width;
	}

	public static void main(String[] args)
	{

		Rectangle  ar = new Rectangle ();
		System.out.println("Area of Rectangle is : "+ar.rectangle(2.7, 1.6));

	}

}
