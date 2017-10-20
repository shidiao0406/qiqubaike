

<template>
	<div class="gifloader">
		<div class="gifbox" ref="gifbox">
			<img v-bind:src="data.wifi_img_url" alt="">
			<div class="gifbtn"></div>
		</div>
		
	</div>
</template>

<script>
	export default {
		props : ["data"],
		mounted(){
			var self = this;
			$(this.$refs.gifbox).bind("touchstart",function(){
				var img = new Image();
				img.src = self.data.origin_img_url.origin_pic_url;
				$(img).bind("load",function(){
					$(self.$refs.gifbox).empty().append($(this));
				});
			});
		}
	}
</script>