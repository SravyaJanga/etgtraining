package com.sonata;

import java.util.List;

import com.sonata.dao.impl.TaskImpl;

public class Main {

	public static void main(String[] args) {
		TaskImpl ti = new TaskImpl();
		//Task t = new Task();
		//t.setTaskId(513);
		//t.setName("New Task513");
		//t.setDescription("Task Desc513");
		//ti.addTask(t);
		//List<Task> list = ti.getAllTasks();
		//java.util.Iterator<Task> it = list.iterator();
		//while(it.hasNext()) {
		//	System.out.print(it.next().getName());
		//}
		Task t = ti.getTask(511);;
		System.out.println(t.getName());

	}

}
