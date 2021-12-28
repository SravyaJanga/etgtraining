package com.sonata.JDBCExample;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
public class SimpleJDBCExample {
	public static void main(String[] args) {
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/Emp","root","admin@123");
			Statement st = con.createStatement();
			ResultSet rs = st.executeQuery("select * from emp");
			
			while(rs.next()) {
				System.out.println(rs.getInt(1));
				System.out.println(rs.getString(2));
				
			}
		}catch(Exception e) {System.out.println(e);}
	}

}
