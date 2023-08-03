<script setup lang="ts">
import { useTodo } from '../stores/todo';
import TodoList from './TodoList.vue';

const store = useTodo()

function addNewTask(){
    if (store.newTodoTitle.trim().length === 0){
        return
    }
    store.addTodo()
}

</script>

<template>
    <form class="text-center" @submit.prevent="addNewTask()">
        <input type="text" class="w-full rounded-lg" v-model="store.newTodoTitle" placeholder="Tarea Nueva">
        <button class="bg-white rounded-2xl shadow-lg text-indigo-700 ml-2 h-10 px-5 hover:bg-slate-300 mt-3 ">Agregar Tarea</button>

    </form>
    
    
</template>


