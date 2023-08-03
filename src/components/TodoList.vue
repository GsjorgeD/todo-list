<script setup lang="ts">
import { useTodo } from '@/stores/todo';
const store = useTodo()
</script>

<template>
    <ul>
        
        <button @click="store.getTodo()" class="bg-white rounded-2xl shadow-lg text-indigo-700 h-10 px-5 hover:bg-slate-300 mt-3 w-full mb-3">Cargar Lista De Tareas</button>
        
        <div @click="store.markTodo(todo.id)" v-for="todo in store.todos" :key="todo.id" >
            <li class="w-full cursor-pointer rounded-lg text-center bg-indigo-700 mb-5 h-16 px-5 mt-2" 
            :class="{ 'text-white border-4 border-green-500/50 ': todo.completed,'bg-white': !todo.completed }">
                {{todo.title}}
                <button class="bg-white rounded shadow-lg text-indigo-700 ml-2 hover:bg-red-700 hover:text-white mt-3 mr-2" @click="store.deleteTodo(todo.id)">Eliminar</button>
            </li>
            
         </div>
        
    </ul>
  
    
</template>


