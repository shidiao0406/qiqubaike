<template>
	<div>
		<header>
			<div class="headerbanner"></div>
			<nav> 
				<div class="inner">
					<ul>
						<li class="navitem" v-for="(item,index) in column" v-tap="{'name' : item.name}" v-bind:class="{'cur' : $router.history.current.name == item.name}"><span>{{item.title}}</span></li>
					</ul>
				</div>
			</nav>
		</header>
	 	<router-view>
	 	</router-view>
	</div>
</template>


<script>
	export default {
		data(){
			return{
				column : [
					{"name" : "index" 	, "title" : "首页"},
					{"name" : "video" 	, "title" : "视频"},
					{"name" : "duanzi" 	, "title" : "段子"},
					{"name" : "faxian" 	, "title" : "发现"},
					{"name" : "qqzl" 	, "title" : "奇趣专栏"}
				]
			}
		}
	}
</script>