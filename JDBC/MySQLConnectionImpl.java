package com.tasksystem.dao.impl;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

import com.tasksystem.dao.MySQLConnection;
public class MySQLConnectionImpl implements MySQLConnection 
{
	public Connection getConnection() 
	{
		Connection con = null;
		try {
			Class.forName("com.mysql.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/taskmanager","root","admin@123");

		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return con;
	}

}
