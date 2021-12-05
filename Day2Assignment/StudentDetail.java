package com.sonata;

public class StudentDetail {
	int stdId;
	String stdName;
	int stdClass;
	StudentDetail(int a, String b, int c){
		this.stdId=a;
		this.stdName=b;
		this.stdClass=c;
}
	public void display() {
		System.out.println(stdId);
		System.out.println(stdName);
		System.out.println(stdClass);
	}
	public static void main(String args[])
	{
		StudentDetail s=new StudentDetail(15,"efgh",7);
		s.display();
		StudentDetail s1=new StudentDetail(11,"lmno",4);
		s1.display();
	}

}
