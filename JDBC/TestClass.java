package com.sonata.TestSuitExample;
import static org.junit.Assert.assertEquals;

import org.junit.Test;
public class TestClass {
	String message = "Sravya";	
	String message1 = "Sonata";
	   MessageClass messageUtil = new MessageClass(message);
	   
	   @Test
	   public void PrintMessage() {	
	      System.out.println("Inside testPrintMessage()");    
	      assertEquals(message, messageUtil.printMessage());     
	   }

}
