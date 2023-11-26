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
import com.example.demo.repository.ProductCartRepo;





@RestController
@CrossOrigin("http://localhost:3000")
public class ProductCartController {
	@Autowired
	private ProductCartRepo pcr;
	
	@PostMapping("/productcart")
		Product newProduct(@RequestBody Product newProduct)
		{
		return pcr.save(newProduct);
		}
	
	@GetMapping("/productcart")
	List<Product> getAllProducts()
	{
		return pcr.findAll();
	}
	
	@GetMapping("/productcart/{id}")
	Product getProductById(@PathVariable Long id)
	{
		return pcr.findById(id)
				.orElseThrow(()->new ProductNotFoundException(id));
	}
	
	@PutMapping("/productcart/{id}")
	Product updateProduct(@RequestBody Product newProduct, @PathVariable Long id)
	{
		return pcr.findById(id)
				.map(product ->{
					product.setProductname(newProduct.getProductname());
					product.setPrice(newProduct.getPrice());
					product.setQuantity(newProduct.getQuantity());
					return pcr.save(product);
					
				}).orElseThrow(()-> new ProductNotFoundException(id));
	}
	
	@DeleteMapping("/productcart/{id}")
	String deleteproduct(@PathVariable Long id) 
	{
		if (!pcr.existsById(id)) {
			throw new ProductNotFoundException(id);
		}
		pcr.deleteById(id);
		return "Product with id" + id + "has been deleted succesfully";
	}


}
