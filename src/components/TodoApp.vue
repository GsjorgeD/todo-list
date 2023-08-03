<script setup lang="ts">
import TodoList from './TodoList.vue';
import TodoForm from './TodoForm.vue';
</script>

<template>
    <div class="bg-indigo-700 p-10 rounded-3xl shadow-lg">
        <h1 class="text-4xl text-white text-center font-bold mb-8">APP DE LISTA DE TAREAS</h1>
         <TodoForm></TodoForm>
    </div>
    
    <TodoList></TodoList>
</template>


