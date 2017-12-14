# ReactJS Kotlin SprintBoot REST H2 JPA

My first Kotlin SpringBoot starter project which use ReactJS as a UI. It also include H2 in-memory database with JPA.

## Features
* Use ReactJS as a front-end UI library
* Uses Kotlin (instead of Java) with latest SpringBoot version.
* Support H2 in-memory database to CRUD Todo kotlin data class with Sprig Data JPA.
* Use Gradle instead of Maven

## Quick start

### Adding Gradle dependency
Add the Gradle dependency below to your Spring Boot application build.gradle file.<br>

``` xml
dependencies {
	compile('org.springframework.boot:spring-boot-starter-data-jpa')
	compile('org.springframework.boot:spring-boot-starter-web')
	compile("org.jetbrains.kotlin:kotlin-stdlib-jre8")
	compile("org.jetbrains.kotlin:kotlin-reflect")
	runtime('com.h2database:h2')
	testCompile('org.springframework.boot:spring-boot-starter-test')
}
```

### SpringBoot main method

``` java
package org.techzoo

import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication

@SpringBootApplication
class KotlinSpringbootJpa 

fun main(args: Array<String>){
	SpringApplication.run(KotlinSpringbootJpa::class.java, *args)
}

```

### ToDo entity class (ie Kotlin data class with @Entity)
A data class is a class in Kotlin created to encapsulate all of the setters/getters/hashCode()/equals()/toString() functionality in a succinct manner.

``` java
package org.techzoo.domain

import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id
import javax.persistence.Table

@Entity
@Table(name = "todos")
data class Todo(var name: String = "", var isDone: Boolean = false) {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	var id: Long? = null

}
```

### Spring Rest Controller


``` java
@RestController
@RequestMapping("/api")
@CrossOrigin
class TodoController(private val repository: TodoRepository) {

	@GetMapping("/")
	fun findAll() = repository.findAll()
	
	@GetMapping("/{name}")
	fun findTaskByName(@PathVariable name: String) = repository.findByName(name)
	
	@PutMapping("/")
	fun addTask(@RequestBody task: Todo): List<Todo> {
		repository.save(task)
		return repository.findAll()
	}
	
	@DeleteMapping("/{id}")
	fun deleteTask(@PathVariable id: Long): List<Todo> {
		repository.deleteById(id)
		return repository.findAll()
	}
	
}
```


## Projects

This project contains Front ent part which need Node.js and it run on 8099 port. See package.json for more details. Following commands can be used to run the project.

  - **gradle build**: compile and build spring kotlin project.
  - **gradle bootRun**: Will run SpringBoot on port 9090
  - **nmp run webpack**: It will compile and bundle all js files into build/app.build.js
  - **npm run dev**: This will run webpack-dev-server on port 8099



## Contributing
You are very welcome to contribute to this Spring Boot starter!.

## Contacting us
To contact me, please send an email to tousifkhan510@gmail.com or visit www.techzoo.org

## License
This project is licensed under the [Apache 2 License](License.html).