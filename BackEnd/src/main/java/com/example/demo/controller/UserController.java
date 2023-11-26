package com.example.demo.controller;
import java.util.*;
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
import com.example.demo.model.User;
import com.example.demo.repository.UserRepo;


@RestController

@CrossOrigin("http://localhost:3000")

public class UserController {
	@Autowired
	private UserRepo ur;
	
	@PostMapping("/user")
	User newUser(@RequestBody User newUser) 
	{
		return ur.save(newUser);
	}
	
	@GetMapping("/users")
	List<User> getAllUsers()
	{
		return ur.findAll();
	}
	
	@GetMapping("/user/{id}")
	User getUserById(@PathVariable Long id) 
	{
		return ur.findById(id)
		.orElseThrow(()->new UserNotFoundException(id)); //handling exception if user not found
		
	}
	
	@PutMapping("/user/{id}")
	User updateUser(@RequestBody User newUser, @PathVariable Long id) 
	{
		return ur.findById(id)
				.map(user ->{
					user.setUsername(newUser.getUsername());
					user.setName(newUser.getName());
					user.setEmail(newUser.getEmail());
					user.setPassword(newUser.getPassword());
					return ur.save(user);
				}).orElseThrow(()-> new UserNotFoundException(id));
	}
	
	@DeleteMapping("/user/{id}")
	String deleteUser(@PathVariable Long id) 
	{
		if(!ur.existsById(id)) {
			throw new UserNotFoundException(id);
			
		}
		ur.deleteById(id);
		return "User With id" + id + "has been deleted succesfully";
	}


}
