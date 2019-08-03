package springbootrestapi.dao;
//DAO Data Access Object
//Using the Employee Repository and Employee Model you enter data into the DB

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import springbootrestapi.model.Employees;
import springbootrestapi.repository.EmployeesRepository;

@Service
public class EmployeesDAO {
	
//first create the object Employee Repo
	@Autowired
	EmployeesRepository employeeRepo;
	
	// create an employee
	public Employees save(Employees emp) {
		return employeeRepo.save(emp);
	}
	
	//search all employees
	public List<Employees> findAll(){
		return employeeRepo.findAll();
	}
	//search 1 employee
	public Employees findById(int empId) {
		return employeeRepo.findById(empId).get();
	}
	// delete an employee
	public void delete(Employees emp) {
		employeeRepo.delete(emp);
	}
	
}
