<script setup lang="ts">
import {ref} from 'vue'
const task = ref("")
import { useTodo } from '../stores/todo';
import TodoList from './TodoList.vue';


const store = useTodo()

function addNewTask(){
    if (task.value.trim().length === 0){
        return
    }
    store.addTodo()
    task.value =""

}

</script>

<template>
    <p>Todo FORM</p>
    <form  @submit.prevent="addNewTask()">
        <input type="text" v-model="task">
        <button>Add</button>

    </form>
    
    
</template>


