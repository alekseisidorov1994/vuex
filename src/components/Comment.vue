<template>
    <div class="post-comment">
        <a href="#" class="post-comment__avatar">
            <img :src="comment.user.image" alt="">
        </a>
        <div class="post-comment__text">
            <a href="#" class="post-comment__name">{{comment.user.name}} {{comment.user.family}}</a>
            {{comment.content}}
        </div>
    </div>
</template>
<script>
export default {
    name:'comment',
    props:['comment']
    
}
</script>