package com.sonata.dao.impl;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

import com.sonata.Task;
import com.sonata.dao.TaskInterface;

public class TaskImpl implements TaskInterface {

	public boolean addTask(Task t) {
		SessionFactory factory= new Configuration().configure().buildSessionFactory();
		Session s1 = factory.openSession();
		s1.beginTransaction();
		s1.save(t);
		s1.getTransaction().commit();
		return true;
	}

	@Override
	public List<Task> getAllTasks() {
		SessionFactory factory= new Configuration().configure().buildSessionFactory();
		Session s1 = factory.openSession();
		Query q = s1.createQuery("from Task");
		List<Task> taskList = q.list();
		return taskList;
	}

	@Override
	public Task getTask(int taskid) {
		SessionFactory factory= new Configuration().configure().buildSessionFactory();
		Session s1 = factory.openSession();
		Query q = s1.createQuery("from Task where taskId = :tid");
		q.setParameter("tid", taskid);
		List<Task> taskList = q.list();
		return taskList.get(0);
	}

}
