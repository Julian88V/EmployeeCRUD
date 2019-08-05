package springbootrestapi.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import springbootrestapi.dao.EmployeesDAO;
import springbootrestapi.model.Employees;

//Controller used to Access the DAO
//This is where all the URLs are and the Postman is used to call these APIs
@RestController
@RequestMapping("/company")
@CrossOrigin(origins="*", allowedHeaders= "*" )
public class EmployeesController {
//Create DAO object
	@Autowired
	EmployeesDAO empDAO;
	
	//save hero to DB
	@PostMapping("/employees")
	public Employees createEmployees(@Valid @RequestBody Employees emp) {
		return empDAO.save(emp);
	}
	
	@GetMapping("/employees")
	public List<Employees> getAllEmployees() {
		return empDAO.findAll();
	}
	
	@GetMapping("/employees/{id}")
	public ResponseEntity<Employees> getEmployeesById(@PathVariable(value="id") int empId){
		Employees emp = empDAO.findById(empId);
		
		if(emp == null) {
			return ResponseEntity.notFound().build();
		}
		return ResponseEntity.ok().body(emp);
	}
	
	//@CrossOrigin(origins = "http://localhost:8080")
	@PutMapping("/employees/{id}")
	public ResponseEntity<Employees> updateHeroesById(@PathVariable(value="id") int empId, @RequestBody Employees empDetails){
		
		Employees emp = empDAO.findById(empId);
		
			if(emp == null) {
				return ResponseEntity.notFound().build();
			}
			emp.setName(empDetails.getName());
			emp.setDesignation(empDetails.getDesignation());
			emp.setExpertise(empDetails.getExpertise());
			
			Employees updatedEmployees = empDAO.save(emp);
			return ResponseEntity.ok().body(updatedEmployees);
	}
	
	@DeleteMapping("/employees/{id}")
	public ResponseEntity<Employees> deleteHeroesById(@PathVariable(value="id") int empId){
		Employees emp = empDAO.findById(empId);
		if(emp == null) {
			return ResponseEntity.notFound().build();
		}
		empDAO.delete(emp);
		
		return ResponseEntity.ok().build();
		
	}
	
	
}
