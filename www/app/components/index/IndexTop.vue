<template>
	<div class="it_box">
 
		<div class="changwen-wrap">
			<img v-bind:src="data.imgUrl" class="pic">

			<div class="titleanddescription">
				<div class="title">
					{{data.title}}
				</div>
				<div class="description">{{data.desc}}</div>
			</div>
		</div>

		<div class="btnsbox">
			<div class="inner">
				<a>
					<em class="biaotai"></em>
					<b>{{data._incrs.ai + data._incrs.diao + data._incrs.jian + data._incrs.keng}}</b>
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
	export default {
		props : ["data"]
	}
</script>