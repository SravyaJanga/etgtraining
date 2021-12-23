package com.sonata.TestSuitExample;
import static org.junit.Assert.assertEquals;

import org.junit.Test;
public class TestClass2 {
	String message = "Sravya";	
	   MessageClass messageUtil = new MessageClass(message);
	 
	   @Test
	   public void testSalutationMessage() {
	      System.out.println("Inside testSalutationMessage()");
	      message =  "Hi!" + "Sravya";
	      assertEquals(message,messageUtil.salutationMessage());
	   }

}
