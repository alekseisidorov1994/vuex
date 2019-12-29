<template>
    <div class="container">

        <div class="post">
            <div class="post__header">
                <div class="post__user">
                    <div class="user">
                        <a href="#" class="user__avatar">
                            <img :src="post2.user.image" alt="">
                        </a>
                        <a href="#" class="user__name">
                            {{post2.user.name}} {{post2.user.family}}
                        </a>
                    </div>
                </div>
                <div class="post__links">
                </div>
            </div>

            <div class="post__img">
                <img :src="post.content.image" alt="Photo">
            </div>

            <div class="post__edit">
                <div class="post__edit-name">Описание:</div>
                <div class="post__edit-textarea-wrapper">
                    <textarea
                        class="post__edit-textarea">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus fugiat, aliquam! In fugit id sint, nam repellendus possimus sit itaque aspernatur modi facere earum mollitia veritatis officia quo iste nisi.</textarea>
                </div>
            </div>

            <div class="post__edit">
                <div class="post__edit-name">Хэштеги:</div>
                <div class="post__edit-textarea-wrapper">
                    <textarea class="post__edit-textarea">#forest #travel #journey #holiday</textarea>
                </div>
            </div>

            <div class="post__buttons">
                <button class="btn btn--save">Сохранить</button>
                <button class="btn btn--cancel">Отмена</button>
            </div>
        </div>

    </div>
</template>


<script>
    export default {
        name: 'edit',
        computed:{
            postId(){
                return parseInt(this.$route.params.id)
            },
            post(){
                return this.$store.state.posts.filter(x=>x.id==this.postId)[0]
            }
        },
        created(){
            this.$store.dispatch('getPostById', this.postId).then(x=>this.post2 = x)
        },
        data(){
            return{
                post2: null
            }
        }

    }
</script>