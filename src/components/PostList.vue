<script lang="ts">
import axios from "axios"
interface Post {
  id: number;
  title: string;
  completed: boolean;
}

export default{
    name: "PostList",
    data(){
        return{
            posts:[]  as Post[],
            //new code for add todo task for input
            newPostTitle: '', 
        }
    },
    methods:{
        getPost(){
            axios.get("https://jsonplaceholder.typicode.com/todos")
            .then((response)=>{
                console.log(response.data)
                this.posts =response.data
            })
            .catch((error)=>{
                console.error(error)
            }
            )
        },
        addPost() {
            const newPost: Post = {
                id: this.posts.length + 1,
                //nwe code for add todo task for input
                title: this.newPostTitle,
                completed: false,
            };
            this.posts.push(newPost);
            this.newPostTitle = '';
        },
        deletePost(postid:number){
            this.posts =this.posts.filter(post =>post.id !== postid)
        },
        ToogleTask(taskId:number){
           const task = this.posts.find(post => post.id ===taskId)
           if (task) {
            task.completed = !task.completed

           }
        }
    }

}

</script>

<template>
    <form  @submit.prevent="addPost()">
        <input type="text" v-model="newPostTitle">
        <button>Add</button> </form>
    <button @click="getPost()">Load Todo List</button>
    <div @click="ToogleTask(post.id)" v-for="post in posts" :key="post.id">
        <h3>{{post.id}}</h3>
        <h3>{{post.title}}</h3>
        <h3>{{post.completed}}</h3>
        <button @click="deletePost(post.id)">delete</button>
    </div>

    
</template>