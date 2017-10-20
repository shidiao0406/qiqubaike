<template>
	<div class="jpgloader" ref="jpgloader">
		<div class="loading"></div>
	</div>
</template>

<script>
	export default {
		props : ["data"],
		mounted(){
			var self = this;
	 

			var img = new Image();
			img.src = this.data.origin_img_url.origin_pic_url;
			$(img).bind("load",function(){
				$(self.$refs.jpgloader).find(".loading").hide();
				$(self.$refs.jpgloader).append($(this));
			})
		}
	}
</script>