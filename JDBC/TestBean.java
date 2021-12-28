package com.sonata.Main;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import com.sonata.DaoImpl.EmpDAOImpl;
import com.sonata.Model.Employee;
public class TestBean {
	public static void main(String[] args) throws SQLException{
		Employee e1 = new Employee();
		e1.setEmpId(12);
		e1.setEmpName("xxx");
		e1.setEmpSal(2345.98);
		
		EmpDAOImpl dao = new EmpDAOImpl();
		int row = dao.save(e1);
		System.out.println(row);
		List<Employee> list = dao.getData();
		for(Employee e :list) {
			System.out.println(e.getEmpId());
			System.out.print(e.getEmpName());
			System.out.println(e.getEmpSal());
		}
		
	}

}
