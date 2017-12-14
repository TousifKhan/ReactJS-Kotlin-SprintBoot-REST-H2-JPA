package org.techzoo.web

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PutMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import org.techzoo.domain.Todo
import org.techzoo.repository.TodoRepository
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.DeleteMapping

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