package com.example.demo.model;



import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;


//@Entity
//@Table

@Document(collection = "userinfo")
public class userinfo {
	@Id
	private String id;
	@Field
	private String name;
	@Field
	private String username;
	@Field
	private String password;
	@Field
	private String role;
	@Field
	private Date date;
	
	
	public userinfo() {
		// TODO Auto-generated constructor stub
	}
	
	
	
	public userinfo(String id, String name, String username, String password, String role, Date date) {
		super();
		this.id = id;
		this.name = name;
		this.username = username;
		this.password = password;
		this.role = role;
		this.date = date;
	}



	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	

	
	
	
	
	
	
	
	
	
	

}
