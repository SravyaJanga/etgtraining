package com.sonata;

public class ProdClass {
	int proId;
	String proName;
	static double proPrice;
	ProdClass(int id,String name,double price){
		this.proId=id;
		this.proName=name;
		this.proPrice=price;
	}
	public double Totalbill(double GST) {
		double total=this.proPrice*GST;
		return total;
	}
	public void display() {
		System.out.println(proId);
		System.out.println(proName);
		System.out.println(proPrice);
	}
	public static void main(String args[]) {
		ProdClass p1=new ProdClass(16,"Car",150000);
		p1.display();
		double a=p1.Totalbill(0.08);
		System.out.println("TAX:"+a);
		double b=a+proPrice;
		System.out.println("Total bill with tax:"+b);
	}

}
