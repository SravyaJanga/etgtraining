package com.sonata.dao;

import java.util.List;

import com.sonata.Task;

public interface TaskInterface {
	public boolean addTask(Task task);
	public List<Task> getAllTasks();
	public Task getTask(int taskid);
}
