package com.sonata.Assum;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertAll;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;

public class AssertionDemo {
	Person person = new Person("Jane", "Deo");
	Calculator c1  =new Calculator();
	
	@Test
    void groupedAssertions() {
        
        assertAll("person",
            () -> assertEquals("Jane", person.getFirstName()),// ()->logic
            () -> assertEquals("Deo", person.getLastName())
        );
    }
	
	//@Disabled
	@Test
    void dependentAssertions() {
        // Within a code block, if an assertion fails the
        // subsequent code in the same block will be skipped.
        assertAll("properties",
            () -> {
                String firstName = person.getFirstName();
                assertNotNull(firstName);

                // Executed only if the previous assertion is valid.
                assertAll("first name",
                    () -> assertTrue(firstName.startsWith("J")),
                    () -> assertTrue(firstName.endsWith("e"))
                );
            },
            () -> {
                // Grouped assertion, so processed independently
                // of results of first name assertions.
                String lastName = person.getLastName();
                assertNotNull(lastName);

                // Executed only if the previous assertion is valid.
                assertAll("last name",
                    () -> assertTrue(lastName.startsWith("D")),
                    () -> assertTrue(lastName.endsWith("o"))
                );
            }
        );
    }
	
	
	@Test
   public void exceptionTesting() {
        Exception exception = assertThrows(ArithmeticException.class, () ->
            c1.div(1, 0));
        assertEquals("/ by zero", exception.getMessage());
    }

}











