package com.sonata.TestSuite;

import org.junit.platform.runner.JUnitPlatform;
import org.junit.platform.suite.api.SelectClasses;
import org.junit.platform.suite.api.SelectPackages;
import org.junit.runner.RunWith;

import com.sonata.Assum.AssertionDemo;

@RunWith(JUnitPlatform.class)
@SelectClasses({AssertionDemo.class})
public class TestSuiteExample {

}
