package com.sonata;

public class TShirt {
	String color;
	String material;
	String design;
	String size;
	public TShirt(String c, String m, String d, String s) {
		this.color=c;
		this.material=m;
		this.design=d;
		this.size=s;
	}
	public void small() {
		System.out.println("This is small size");
	}
	public void large() {
		System.out.println("This is large size");
	}
	public void xtraLarge() {
		System.out.println("This is xtraLarge size");
	}
	public void display() {
		System.out.println(color);
		System.out.println(material);
		System.out.println(design);
		System.out.println(size);
	}
	public static void main(String args[]) {
		TShirt t1=new TShirt("pink","cotton","checks","small");
		t1.display();
		TShirt t2=new TShirt("black","cotton","plane","large");
		t2.display();
		TShirt t3=new TShirt("yellow","cotton","multicolor","xtraLarge");
		t3.display();
	}

}
