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

import com.example.demo.exception.ProductNotFoundException;
import com.example.demo.model.Product;
import com.example.demo.repository.ProductRepo;


@RestController
@CrossOrigin("http://localhost:3000")
public class ProductController {
	@Autowired
	private ProductRepo pr;
	
	@PostMapping("/product")
		Product newProduct(@RequestBody Product newProduct)
		{
		return pr.save(newProduct);
		}
	
	@GetMapping("/products")
	List<Product> getAllProducts()
	{
		return pr.findAll();
	}
	
	@GetMapping("/product/{id}")
	Product getProductById(@PathVariable Long id)
	{
		return pr.findById(id)
				.orElseThrow(()->new ProductNotFoundException(id));
	}
	
	@PutMapping("/product/{id}")
	Product updateProduct(@RequestBody Product newProduct, @PathVariable Long id)
	{
		return pr.findById(id)
				.map(product ->{
					product.setProductname(newProduct.getProductname());
					product.setPrice(newProduct.getPrice());
					product.setQuantity(newProduct.getQuantity());
					return pr.save(product);
					
				}).orElseThrow(()-> new ProductNotFoundException(id));
	}
	
	@DeleteMapping("/product/{id}")
	String deleteproduct(@PathVariable Long id) 
	{
		if (!pr.existsById(id)) {
			throw new ProductNotFoundException(id);
		}
		pr.deleteById(id);
		return "Product with id" + id + "has been deleted succesfully";
	}


}
