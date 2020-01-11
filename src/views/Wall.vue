<template>
    <div class="container">
        <post v-for="post of this.posts"
            :key="post.id"
            :post = post
        ></post>
    </div>
</template>

<script>
import Post from '@/components/Post.vue'
export default {
    name: 'wall',
    components:{
        post:Post
    },
    computed:{
        posts(){
            return this.$store.state.posts
        }
    }

}
</script>