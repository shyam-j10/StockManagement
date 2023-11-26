package com.example.demo.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.exception.UserNotFoundException;
import com.example.demo.model.Admin;
import com.example.demo.repository.AdminRepo;
@RestController

@CrossOrigin("http://localhost:3000")
public class AdminController {
	@Autowired
	private AdminRepo ar;
	
	@PostMapping("/admin")
	Admin newAdmin(@RequestBody Admin newAdmin) 
	{
		return ar.save(newAdmin);
	}
	
	@GetMapping("/admins")
	List<Admin> getAllAdmin()
	{
		return ar.findAll();
	}
	
	@GetMapping("/admin/{id}")
	Admin getAdminById(@PathVariable Long id) 
	{
		return ar.findById(id)
		.orElseThrow(()->new UserNotFoundException(id)); //handling exception if user not found	
	}
	
	@PutMapping("/admin/{id}")
	Admin updateAdmin(@RequestBody Admin newAdmin, @PathVariable Long id) 
	{
		return ar.findById(id)
				.map(admin ->{
					admin.setEmail(newAdmin.getEmail());
					admin.setName(newAdmin.getName());
					admin.setPassword(newAdmin.getPassword());
					return ar.save(admin);
				}).orElseThrow(()-> new UserNotFoundException(id));
	}
	
	@DeleteMapping("/admin/{id}")
	String deleteAdmin(@PathVariable Long id)
	{
		if(!ar.existsById(id)) {
			throw new UserNotFoundException(id);
		}
		ar.deleteById(id);
		return "Admin with" + id + "Deleted Sucessfully";
	}

}
