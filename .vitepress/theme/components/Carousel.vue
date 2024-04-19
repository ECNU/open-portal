<template>
    <div class="carousel-wrapper">
        <swiper-container
            class="swiper-container-class"
            ref="mainSwiper"
            :pagination="{ clickable: true }"
            :style="{
                '--swiper-navigation-color': '#a41f35',
                '--swiper-pagination-color': '#a41f35',
            }"
            :autoplay="swiperOptions.autoplay"
            @init="init"
        >
            <swiper-slide v-for="item in carousel">
                <div>
                    <img class="img-fit" :src="withBase(item.imgUrl)" />
                    <div class="content-fit dark:bg-black dark:bg-opacity-35">
                        <div class="content-s pl-[5%] xl:pl-[20%]">
                            <div class="slide-title dark:text-white text-gray-800">
                                {{ item.title }}
                            </div>
                            <div class="slide-desc dark:text-white text-gray-800">
                                {{ item.description }}
                            </div>
                            <div
                                class="slide-btn text-white bg-primary-600"
                                @click="handleClick(item)"
                            >
                                {{ item.linkName }}
                            </div>
                        </div>
                    </div>
                </div>
            </swiper-slide>
        </swiper-container>
    </div>
</template>

<!-- 轮播组件 -->
<script setup lang="ts">
import { withBase } from "vitepress"
import carousel from "../../../static/carousel.json"
import { register } from "swiper/element/bundle"
import { onMounted } from "vue"
register() // 注册 swiper 组件

const swiperOptions = {
    autoplay: {
        delay: 5000,
        enabled: true,
        freeMode: true,
    },
}
const init = () => {
    console.log("1")
}
const handleClick = (row) => {
    const link = row.link
    if (link.startsWith("http")) {
        window.open(link)
    } else {
        window.location.href = withBase(link + ".html")
    }
}
</script>

<style scoped>
.carousel-wrapper {
    width: 100%;
    height: 400px;
    background-size: cover;
    background-image: withBase("");
}

.swiper-container-class {
    width: 100%;
    height: 400px;
}

.img-fit {
    background-size: cover;
    width: 100%;
    height: 400px;
}

.content-fit {
    width: 100%;
    height: 400px;
    position: relative;
    top: -400px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

.content-s {
    /* padding-left: 15%; */
    width: 100%;
    height: 100%;
    /* border: 1px solid rgb(32, 18, 125); */
}

.slide-title {
    margin-top: 85px;
    font-size: 48px;
    font-weight: 700;
}

.slide-desc {
    margin-top: 30px;
    width: 537px;
    height: 64px;
    line-height: 32px;
    font-size: 18px;
    font-weight: 400;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}

.slide-btn {
    margin-top: 80px;
    font-size: 14px;
    text-align: center;
    width: 120px;
    line-height: 36px;
    margin-right: 12px;
    cursor: pointer;
}
</style>
