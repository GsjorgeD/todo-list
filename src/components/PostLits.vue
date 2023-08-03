<script lang="ts">
import axios from "axios"
import Vue from 'vue';
interface Post {
  id: number;
  title: string;
}

export default{
    name: "PostList",
    data(){
        return{
            posts:[]  as Post[],
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
                title: 'New Post',
            };
            this.posts.push(newPost);
  },
    }

}

</script>

<template>
    <form  @submit.prevent="addPost()">
        <input type="text">
        <button>Add</button> </form>
    <button @click="getPost()">Load Todo List</button>
    <div v-for="post in posts" :key="post.id">
        <h3>{{post.id}}</h3>
        <h3>{{post.title}}</h3>
    </div>

    
</template>