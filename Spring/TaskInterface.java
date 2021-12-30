package com.springmvc.etg.task;

import java.sql.SQLException;

import com.springmvc.etg.model.TaskBean;




public interface TaskInterface {
	public boolean addTask(TaskBean task) throws SQLException;
	public TaskBean getTask(int taskid);
	



	
}
