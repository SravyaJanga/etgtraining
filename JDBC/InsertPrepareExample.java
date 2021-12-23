package com.sonata.JDBCExample;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
public class InsertPrepareExample {
	public static void main(String[] args) {
		try {
			Class.forName("com.mysql.jdbc.Driver");
			Connection con = DriverManager.getConnection("jdbc:msql:??localhost:3306/");
			PreparedStatement ps = con.prepareStatement("insert into Employee values(?,?,?)");
			ps.setInt(1, 567);
			ps.setString(2, "sravya");
			ps.setDouble(3, 543.90);
			int a = ps.executeUpdate();
			System.out.println("The number of records updated are" + a);
			}catch(ClassNotFoundException e1) {System.out.println(e1);}
		catch(SQLException e2) {e2.printStackTrace();}
	}

}
