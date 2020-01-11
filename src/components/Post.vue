<template>
    <div class="post">
			<div class="post__header">

				<div class="post__user">
					<div class="user">
						<a href="#" class="user__avatar">
							<img :src="post.user.image" alt="">
						</a>
						<a href="#" class="user__name">
							{{post.user.name}} {{post.user.family}}
						</a>
					</div>
				</div>

				<div class="post__links">
					<a href="#" class="edit-link" @click.prevent="deletePost(post.id)">
						<i class="far fa-trash-alt"></i>
						Delete
					</a>
					<router-link :to="`/post/${post.id}/edit`" class="edit-link">
						<i class="fas fa-pencil-alt"></i>
						Edit
					</router-link>

				</div>
            </div>
<!-- ReWORK HERE -->
			<div class="post__img">
				<img :src="post.content.image" alt="Photo" v-if="post.content.image.length ===1">

                <div class="slider owl-theme" v-else>
                    <img v-for="image of post.content.image" :key="image"
                    :src="image" alt="Photo">

                </div>
			</div>

			<div class="post__data">

				<div class="post__description">
					{{post.content.description}}
				</div>

				<div class="post__hashtags">
					<a href="#" v-for="tag of post.content.tags" :key="tag">{{tag}}</a>
				</div>
			</div>

			<div class="post__comments">
				<Comment v-for="comment of post.comments" :key="comment.content" :comment = "comment"/>
			</div>

			<div class="post__comment-form">
				<div class="comment-form">
					<textarea class="comment-form__textarea" placeholder="Добавить комментарий"></textarea>
					<button disabled class="comment-form__button">Опубликовать</button>
				</div>
			</div>

		</div>
</template>
<script>
import Comment from './Comment.vue'
export default {
    props:['post'],
    components:{
        Comment
	},
	methods:{
		deletePost(id){
			this.$store.dispatch('deletePost', id)
		}
	}
}
</script>