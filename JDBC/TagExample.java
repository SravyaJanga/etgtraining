package com.sonata.SecondTest;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;

import com.sonata.SimpleTest.Calculator;

public class TagExample {
	
	@Tag("DEV")
    @Test
    void testCalcOne() 
    {
        
        Assertions.assertEquals( 4 , Calculator.add(2, 2));
    }   

}
