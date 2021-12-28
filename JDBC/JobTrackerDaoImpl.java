package com.sonata.jobtracker.dao.impl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.List;

import com.sonata.jobtracker.model.Task;

public class JobTrackerDaoImpl 
{
	public boolean addTask(Task task) throws SQLException
	{
		boolean added = false;
		Connection conn = new MyConnectionImpl().connectToMySQL();
		String sql = "INSERT INTO Task (taskId,ownerid,name) VALUES(?,?,?)";
		PreparedStatement pst = conn.prepareStatement(sql);
		pst.setInt(1, task.getTaskId());
		pst.setInt(2, task.getOwnerId());
		pst.setString(3, task.getName());
		int r = pst.executeUpdate(); // insert, delete, update
		pst.close();
		conn.close();
		if (r > 0)
		added = true;
		return added;
		}

	public int save(Task t1) {
		// TODO Auto-generated method stub
		return 0;
	}

	public List<Task> getData() {
		// TODO Auto-generated method stub
		return null;
	}
}