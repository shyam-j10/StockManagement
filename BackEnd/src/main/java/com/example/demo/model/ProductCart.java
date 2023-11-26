package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class ProductCart {
	@Id
	@GeneratedValue
	private long productid;
	private String productname;
	private long price;
	private long quantity;
	public ProductCart() {
		super();
		// TODO Auto-generated constructor stub
	}
	public ProductCart(long productid, String productname, long price, long quantity) {
		super();
		this.productid = productid;
		this.productname = productname;
		this.price = price;
		this.quantity = quantity;
	}
	public long getProductid() {
		return productid;
	}
	public void setProductid(long productid) {
		this.productid = productid;
	}
	public String getProductname() {
		return productname;
	}
	public void setProductname(String productname) {
		this.productname = productname;
	}
	public long getPrice() {
		return price;
	}
	public void setPrice(long price) {
		this.price = price;
	}
	public long getQuantity() {
		return quantity;
	}
	public void setQuantity(long quantity) {
		this.quantity = quantity;
	}
	

}
