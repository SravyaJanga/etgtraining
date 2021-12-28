package com.sonata.SecondTest;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;

import com.sonata.SimpleTest.Calculator;

public class TagExample2 {
	
	@Tag("PROD")    
    @Test
    void testCalcThree() {
    	Assertions.assertEquals( 8 , Calculator.add(4, 4));
    	
    }

}
