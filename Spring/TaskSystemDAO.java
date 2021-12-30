package com.springmvc.etg.dao;

import java.sql.SQLException;

import com.springmvc.etg.model.Task;

public interface TaskSystemDAO {
	public boolean addTask(Task task) throws SQLException;
	public Task getTask(int taskid);

}
