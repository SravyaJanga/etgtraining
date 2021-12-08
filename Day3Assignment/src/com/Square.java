package com.sonata;

public class Square {
	public double square(double length)
	{
		return length * length;
	}

	public static void main(String[] args)
	{

		Square ar = new Square();
		System.out.println("Area of square : "+ar.square(5));

	}

}
