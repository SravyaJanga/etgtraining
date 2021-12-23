package com.sonata.Assum;

import org.junit.jupiter.api.Assumptions;
import org.junit.jupiter.api.Test;

public class AssumClass {
	@Test
    void testOnDev() 
    {
        System.setProperty("ENV", "DEV");
        Assumptions.assumeTrue("DEV".equals(System.getProperty("ENV")), AssumClass::message);
    }
      
    @Test
    void testOnProd() 
    {
        System.setProperty("ENV", "PROD");
        Assumptions.assumeFalse("PROD".equals(System.getProperty("ENV")));  
    }
      
    private static String message () {
        return "TEST Execution Failed :: ";
    }
}
