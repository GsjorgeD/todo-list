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
    <p>Todo FORM</p>
    <form  @submit.prevent="addNewTask()">
        <input type="text" v-model="store.newTodoTitle">
        <button>Add</button>

    </form>
    
    
</template>


