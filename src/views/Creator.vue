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
                <div class="slider owl-theme">
                    <img v-for="image of newPost.image" :key="image"
                    :src="image" alt="Photo">

                </div>
                
                

			</div>
            <div class="post__edit">
                <div class="post__edit-name">Добавить фото</div>
                <textarea class="post__edit-textarea" placeholder="Фото..." ref="areaPhoto" required
                :value="newPost.image" @change="enterPoint()"
                       >
                </textarea>
                <div class="content-clear" @click="clearPlace()" v-if="newPost.image.length">&#10006;</div>
            </div>

            <div class="post__edit">
                <div class="post__edit-name">Описание:</div>
                <div class="post__edit-textarea-wrapper">
                    <textarea class="post__edit-textarea" placeholder="Описание..." ref="areaDescr" v-model="newPost.description"
                       >
                    </textarea>
                </div>
            </div>

            <div class="post__edit">
                <div class="post__edit-name">Хэштеги:</div>
                <div class="post__edit-textarea-wrapper">
                    <textarea class="post__edit-textarea" placeholder="Хэштеги..." ref="areaTag" v-model="newPost.tags"
                        
                    >
                    </textarea>
                </div>
            </div>

            <div class="post__buttons">
                <button class="btn btn--save" @click="submitPost()" type="submit">Сохранить</button>
                <button class="btn btn--cancel" @click="$router.push(`/wall`)">Отмена</button>
            </div>
        </div>

    </div>
</template>


<script>
    export default {
        name: 'creator',
        data(){
            return{
                post: null,
                newPost:{ 
                    image:[],
                    description: '',
                    tags: []

                },
            }
        },
        created(){
            // заглушка для добавлении имени пользователя и аватарки
            this.post = this.$store.state.posts[0]
        },
        methods:{
            async enterPoint(){
                await this.newPost.image.push(this.$refs.areaPhoto.value)
                if(this.newPost.image.length){
                    this.$refs.areaPhoto.placeholder = `Добавлено: ${this.newPost.image}`
                }
                this.$refs.areaPhoto.value = ''
            },
            clearPlace(){
                this.newPost.image = [];
                this.$refs.areaPhoto.placeholder = "Фото..."
            },
            async submitPost(){
                if(this.newPost.tags.length){
                    this.newPost.tags =  await this.newPost.tags.trim().replace(/,+/g,' ').replace(/#\s+/g,'#').replace(/#+/g,'#').split(" ").filter(x=>x.includes('#'))
                }
                if(this.newPost.image.length){
                    this.$store.dispatch('addNewPost', this.newPost)
                    this.$refs.areaPhoto.value = '',
                    this.$refs.areaDescr.value = '',
                    this.$refs.areaTag.value = ''
                    this.$router.push('/wall')
                }
                console.log(this.newPost);
                
                
               
            }

        }
        
    }
</script>

<style scoped>
.post__edit{
    position: relative;
   
}
textarea{
    border: 1px solid #38B95C;
    outline: none;
}

.content-clear{
    display: block;
    position: absolute;
    right: 10px;
    top: 0;
    cursor: pointer;
    color: red;
    user-select: none;
    
    
}
.content-clear:active{
    color: black;
}


</style>