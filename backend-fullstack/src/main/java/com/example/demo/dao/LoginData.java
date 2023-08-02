package com.example.demo.dao;

import java.util.Optional;


import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

//import com.example.demo.model.UserInformation;
import com.example.demo.model.userinfo;


public interface LoginData extends MongoRepository<userinfo, String>{
	
	Optional<userinfo> findByUsername(String username);

}