<template>
	<div class="infobox">

		 <img v-bind:src="data.avatar" class="avatar">
		<span class="user_name">{{data.user_name}}</span>
		{{data.content}}

		<div v-for="(item,index) in data.media_data">
			<jpg-loader v-if="item.format.toLowerCase()=='jpeg'" v-bind:data="item"></jpg-loader>
			<gif-loader v-if="item.format.toLowerCase()=='gif'" v-bind:data="item"></gif-loader>
		</div> 
 
		<div class="btnsbox">
			<div class="inner">
				<a>
					<em class="biaotai"></em>
					<b>{{data._incrs.like }}</b>
				</a>
				<a>
					<em class="comment"></em>
					<b>{{data.comment_total}}</b>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
	import GifLoader from "./GifLoader.vue";
	import JpgLoader from "./JpgLoader.vue";
	export default {
		props : ["data"],
		components : {
			JpgLoader,
			GifLoader
		}
	}
</script>