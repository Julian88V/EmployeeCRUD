package springbootrestapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import springbootrestapi.model.Employees;

public interface EmployeesRepository extends JpaRepository<Employees, Integer> {

}
