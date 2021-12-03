package com.sonata;

public class ReplaceVowles {
	public static void main(String args[]) {
		String s ="This is a Java Program";
		String str=s;
		for(int i=0;i<str.length();i++)
		{
			char c=str.charAt(i);
			if((c == 'A')||(c == 'a')||(c == 'E')||(c == 'e')||(c == 'I')||(c == 'i')||(c == 'O')||(c == 'o')||(c == 'U')||(c == 'u'))
			{
				String front = str.substring(0, i);
				String back = str.substring(i + 1);
				str = front + "$" + back;
			}
		}
		System.out.println("Before Coversation String: "+s);
		System.out.println();
		System.out.println("After Coversation String: "+str);
		
	}

}
