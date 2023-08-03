import { defineStore } from 'pinia'
import axios from 'axios'
const api = "https://jsonplaceholder.typicode.com/todos"

interface Itodo{
    userId?: number,
    id?:number,
    title:string,
    completed?:boolean
}
interface Istate{
    todo:Itodo,
    todoList:Itodo[],
  
}

export const useTodo = defineStore("todo", {
    state: ():Istate=>{
        
       return{
        todo:{
            id:0,
            title:"",
            completed: false
           
        },
        todoList: []
       }
    },
    actions:{
        async addTodo(task:Itodo){
            try {
                await axios({
                    url:api,
                    method:"POST",
                    data: {
                        title:task.title,
                    }
                })
                
            } catch (error) {
                
            }
          
        }

    }

})