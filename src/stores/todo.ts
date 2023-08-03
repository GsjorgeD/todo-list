import { defineStore } from 'pinia'
import axios from 'axios'

interface Todo{
    id:number,
    title:string,
    completed:boolean
}

export const useTodo = defineStore("todo", {
    state: ()=>{     
       return{        
            todos:[]  as Todo[],
            newTodoTitle: " ",            
       }
    },
    actions:{
        getTodo(){
            axios.get("https://jsonplaceholder.typicode.com/todos")
            .then((response)=>{
                console.log(response.data)
                this.todos =response.data
            })
            .catch((error)=>{
                console.error(error)
            }
            )
        },

        addTodo(){const newPost: Todo = {
            id: this.todos.length + 1,
            title: this.newTodoTitle,
            completed: false,
        };
        this.todos.push(newPost);
        this.newTodoTitle = " ";
        },

        deleteTodo(todoId:Number){
            this.todos = this.todos.filter(todo => todo.id !== todoId)
        },
        
        markTodo(todoId:number){
          const task =  this.todos.find(todo => todo.id === todoId)
          if(task){
            task.completed = !task.completed
          }
        }

    }

})