<template>
    <div class="header">
        <div class="container">
            <div class="header__row">

                <router-link to="/" class="header__logo">
                    <i class="fab fa-dev"></i>
                </router-link>

                <div class="header__search">
                    <div class="search">
                        <input type="text" placeholder="Поиск">
                        <div class="search__cancel search__cancel--active">
                            <i class="fas fa-times-circle"></i>
                        </div>
                    </div>

                </div>

                <div class="header__links">
                    <router-link to="/create_Post" class="header__link">
                        CreatePost
                    </router-link>
                    <a href="#" class="header__link">
                        <i class="fas fa-user"></i>
                    </a>
                    <a href="#" class="header__link">
                        <i class="fas fa-paper-plane"></i>
                    </a>
                </div>

            </div>
        </div>
    </div>

</template>
<style>
.header{
    z-index: 99999;
}
</style>