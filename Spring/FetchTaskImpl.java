package com.springmvc.etg;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import com.springmvc.etg.model.User;



public class FetchTaskImpl implements FetchTaskInterface {

	@Override
	public boolean service(User username) {
		boolean st =false;
        try {
        	
            //loading drivers for mysql
            Class.forName("com.mysql.cj.jdbc.Driver");

            //creating connection with the database
            Connection con = (Connection) DriverManager.getConnection("jdbc:mysql://localhost:3306/emp","root","admin@123");
            PreparedStatement ps = (PreparedStatement) 
            con.prepareStatement("select username,ownerid from task where username=? ");
         
              

            ResultSet rs =(ResultSet) ps.executeQuery();
            st = rs.next();
            if( rs.getString("uname").equals(username))
    			    {
    			    return true;
    			    }else
    			    {
    			    return false;
    			    }
    	
            
        }
        catch(Exception e) {
            e.printStackTrace();
        }
        return st;  
	}

}
