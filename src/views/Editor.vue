<template>
    <div class="container">
       
        <div class="post" v-if="post">
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
                </div>
            </div>

           <div class="post__img">
				<img :src="post.content.image" alt="Photo" v-if="post.content.image.length ===1">

                <div class="slider owl-theme" v-else>
                    <img v-for="image of post.content.image" :key="image"
                    :src="image" alt="Photo">

                </div>
			</div>

            <div class="post__edit">
                <div class="post__edit-name">Описание:</div>
                <div class="post__edit-textarea-wrapper">
                    <textarea class="post__edit-textarea" placeholder="Описание..." ref="areaDescr"
                        v-model="editPost.description">
                    </textarea>
                </div>
            </div>

            <div class="post__edit">
                <div class="post__edit-name">Хэштеги:</div>
                <div class="post__edit-textarea-wrapper">
                    <textarea class="post__edit-textarea" placeholder="Хэштеги..." ref="areaTag"
                        v-model="editPost.tags"
                    >
                    </textarea>
                </div>
            </div>

            <div class="post__buttons">
                <button class="btn btn--save" @click="Onclick()">Сохранить</button>
                <button class="btn btn--cancel" @click="$router.push(`/wall`)">Отмена</button>
            </div>
        </div>

    </div>
</template>


<script>
    export default {
        name: 'edit',
        data(){
            return{
                post: null,
                editPost:{
                    description:'',
                    tags: '',
                    
                    
                }

            }
        },
        created(){
            this.$store.dispatch('getPostById', this.postId).then(x=>this.post = x)

            
           
        },
        computed:{
            postId(){
                return parseInt(this.$route.params.id)
            },
        },
        methods:{
            Onclick(){
                const image = ''
                const description = this.editPost.description
                const tags = this.editPost.tags.trim().replace(/,+/g,' ').replace(/#\s+/g,'#').replace(/#+/g,'#').split(" ").filter(x=>x.includes('#'))
                let edit = {
                    description,
                    tags,
                    image,
                }
               


            this.$store.dispatch('updatePost',[edit , this.postId])
            this.$refs.areaDescr.value = '',
            this.$refs.areaTag.value = ''
            this.$router.push('/wall')
            },
            
        },
        

       
        
    }
</script>