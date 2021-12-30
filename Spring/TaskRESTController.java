package com.springmvc.etg.controller;

import java.sql.SQLException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import com.springmvc.etg.model.TaskBean;

import com.springmvc.etg.task.TaskInterface;

@RestController
public class TaskRESTController 
{
	@Autowired
	TaskInterface taskImpl; 
	
	@PostMapping("/restaddtask")
	public void addTask (@RequestBody TaskBean task) throws SQLException{
		 taskImpl.addTask(task);
		}
	
	
	@GetMapping("/restgettask/{taskid}")
	public TaskBean getTask(@PathVariable int taskid) throws SQLException{
		return taskImpl.getTask(taskid);
		}
	
}
