<template>
	<div class="indexcontent">
	  	<swiper v-bind:indexbanner="indexbanner"></swiper>

	  	<div class="inner_box_s">
	   		<index-top v-for="(item,index) in indexData.index_top" v-bind:data="item"></index-top>

	   		<info-box v-for="(item,index) in indexData.jingxuan" v-bind:data="item"></info-box>
			
			<div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
	   			<info-box v-for="(item,index) in waterfall" v-bind:data="item"></info-box>
			</div>
	   	</div>
	</div>
</template>


<script>
	import * as actiontypes from "../../store/actiontypes.js";
	import Swiper from "./Swiper.vue";
	import IndexTop from "./IndexTop.vue";
	import InfoBox from "./InfoBox.vue";
	var infiniteScroll =  require('vue-infinite-scroll');

	export default {
		data(){
			return {
				indexData : indexdata.indexData ,
				waterfall : []
			}
		},
		mounted(){
			//发送一条指令
			this.$store.dispatch(actiontypes.FETCHINITINDEXBANNER);

			
		},
		computed : {
			indexbanner(){
				return this.$store.state.index.indexbanner;
			}
		},
		components : {
			Swiper,
			IndexTop,
			InfoBox
		},
		directives : {
			infiniteScroll
		},
		methods : {
			loadMore(){
				var self = this;
				if(this.waterfall.length == 0){
					$.get("/api/waterfall?pos=" + this.indexData.jingxuan[this.indexData.jingxuan.length - 1]._pos , function(data){
						  
						 self.waterfall = self.waterfall.concat(data.results);
					});
				}else{
					$.get("/api/waterfall?pos=" + this.waterfall[this.waterfall.length - 1]._pos , function(data){
						  
						 self.waterfall = self.waterfall.concat(data.results);
					});
				}
			}
		}
	}
</script>