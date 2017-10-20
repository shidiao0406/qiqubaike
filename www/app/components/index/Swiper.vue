<template>
	<div>
		<div class="swiper-container" ref="swiper-container">
		    <div class="swiper-wrapper">
		        <div class="swiper-slide" v-for="(item,index) in indexbanner"><img v-bind:src="item.imgUrl" alt=""> <p>{{item.title}}</p></div>
		    </div>
		</div>
	</div>
</template>

<script>

	export default {
		props : ["indexbanner"],
		mounted(){
			//设置轮播图盒子的高度
			this.setSwiperHeight();
			$(window).resize(()=>{
				this.setSwiperHeight();
			});
		},
		updated(){
		 	this.mySwiper = new Swiper ('.swiper-container', {
			    loop : true,
			    autoplay : 300
		  	})        
		},
		methods : {
			setSwiperHeight(){
				var $swiperContainer = $(this.$refs["swiper-container"]);
				$swiperContainer.css("height" , $swiperContainer.width() * 294 / 680);
			}
		}
	}
</script>