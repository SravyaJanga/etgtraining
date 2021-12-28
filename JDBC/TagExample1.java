package com.sonata.SecondTest;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;

import com.sonata.SimpleTest.Calculator;

public class TagExample1 {
	
	 
    @Tag("PROD")
    
    @Test
    void testCalcTwo() 
    {
        
        Assertions.assertEquals( 6 , Calculator.add(2, 4));
    }
    
        

}
