package com.sonata;

public class Triangle {
	public double Triangle(double base , double height)
	{
		return (base * height)/2;
	}
	public static void main(String[] args) 
	{

		Triangle ar = new Triangle();
		System.out.println("Area of Triangle : "+ar.Triangle(5, 7));

	}

}
