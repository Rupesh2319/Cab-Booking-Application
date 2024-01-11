package com.CabAplication.Rupesh;

import com.CabAplication.Rupesh.Entity.User;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication
public class RupeshApplication {


	public static void main(String[] args) {
		SpringApplication.run(RupeshApplication.class, args);
	}

//	@Override
//	public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors) {
//		config.exposeIdsFor(User.class);
//	}


//	@Bean
//	public WebConfig corsConfigurer() {
//		return new WebConfig();
//	}

}
