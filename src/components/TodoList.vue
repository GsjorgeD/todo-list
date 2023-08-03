<script setup lang="ts">
import { useTodo } from '@/stores/todo';
const store = useTodo()
</script>

<template>
    <ul>
        
        <button @click="store.getTodo()">Load Todo List</button>
        
        <div @click="store.markTodo(todo.id)" v-for="todo in store.todos" :key="todo.id">
            <li>
                {{todo.title}} -- {{todo.completed}}
                    <button @click="store.deleteTodo(todo.id)">delete</button>
            </li>
         </div>
        
    </ul>
  
    
</template>


