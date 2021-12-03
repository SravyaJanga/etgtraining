package com.sonata;

public class HighestDulpicateCount {
	public static void main(String args[]) {
		int count=0;
		int arr[]= {1,1,2,3,3,4,5,5};
		System.out.println("Orginal Array Elements: ");
		for(int i=0;i<arr.length;i++)
		{
			System.out.println(arr[i]+"");
		}
		System.out.println("\n");
		System.out.println("Duplicate present in Array Elements are: ");
		for(int a=0;a<arr.length;a++)
		{
			for(int b=a+1;b<arr.length;b++)
			{
				if(arr[a] == arr[b])
				{
					System.out.println(arr[b]+" ");
					count++;
				}
			}
		}
		System.out.println();
		System.out.println("Highest count of duplicates are "+count);
	}

}
