package com.springmvc.etg.task;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.springmvc.etg.model.TaskBean;



@Component
public class TaskImpl implements TaskInterface {
	@Autowired
	MySQLConnection  mySQLConnectionIm;
	public boolean addTask(TaskBean task) throws SQLException {
		
		boolean flag = false;
		//MySQLConnection con  =  new  MySQLConnectionIm();
		Connection c =  mySQLConnectionIm.getConnection();
		String sql = "insert into taskdeatils (taskid,taskname,description,status,notes) values(?,?,?,?,?)";
		PreparedStatement st = c.prepareStatement(sql);
		st.setInt(1, task.getTaskId());
		st.setString(2, task.getName());
		//st.setInt(3, task.getOwnerId());
		st.setString(3, task.getDescription());
		st.setString(4,task.getStatus());
		st.setString(5,task.getNotes());
		int r = st.executeUpdate();
		return true;
	}

	@Override
	public TaskBean getTask (int taskid) {
		Connection c = mySQLConnectionIm.getConnection();
		TaskBean task =new TaskBean();
		try {
		String sql ="select * from taskdeatils where taskid=?";
		PreparedStatement st = c.prepareStatement(sql);
		st.setInt(1,taskid);
		ResultSet rs= st.executeQuery();
		while (rs.next())
		{
		task.setTaskId(rs.getInt("taskid"));
		task.setName(rs.getString("taskname"));

		}
		c.close();
		}catch(Exception e) {
		e.printStackTrace();
		}

		return task;

	}
}
