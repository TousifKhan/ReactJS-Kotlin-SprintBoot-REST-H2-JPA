package org.techzoo.repository

import org.springframework.data.jpa.repository.JpaRepository
import org.techzoo.domain.Todo
import java.util.stream.Stream

interface TodoRepository : JpaRepository<Todo, Long>  {
	fun findByName(name: String): Todo?
}