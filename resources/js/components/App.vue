<template>
   <div>
      <h1>Postingan</h1>
      <input v-model="title" placeholder="Judul" />
      <textarea v-model="content" placeholder="Konten"></textarea>
      <input type="file" @change="e => image = e.target.files[0]" />
      <button @click="createPost">Tambah</button>

      <ul>
         <li v-for="post in posts" :key="post.id">
            <h2>{{ post.title }}</h2>
            <p>{{ post.content }}</p>
            <img v-if="post.image" :src="'/storage/' + post.image" width="200" />
         </li>
      </ul>
   </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const posts = ref([])
const title = ref('')
const content = ref('')
const image = ref(null)

const fetchPosts = async () => {
   const res = await axios.get('/api/posts')
   posts.value = res.data
}

const createPost = async () => {
   const form = new FormData()
   form.append('title', title.value)
   form.append('content', content.value)
   if (image.value) form.append('image', image.value)

   await axios.post('/api/posts', form)
   fetchPosts()
   title.value = content.value = ''
   image.value = null
}

onMounted(fetchPosts)
</script>