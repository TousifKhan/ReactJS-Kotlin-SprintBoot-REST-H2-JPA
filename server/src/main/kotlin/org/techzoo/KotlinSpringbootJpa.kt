package org.techzoo

import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication

@SpringBootApplication
class KotlinSpringbootJpa 

fun main(args: Array<String>){
	SpringApplication.run(KotlinSpringbootJpa::class.java, *args)
}
