<template>
	<div class="container mt-6">
		<p>Lista de usuarios</p>
		<ul class="list-group">
			<router-link tag="li" :to="{ name: 'infoUsuario', params: {id: user.id}}" class="list-group-item" v-for="user in users" :key="user.id" >{{user.name}}</router-link>
		</ul>
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	data(){
		return {
			users: {}
		};
	},
	created(){
		this.$http.get('https://jsonplaceholder.typicode.com/users')
			.then(res => res.json())
			.then(userJson => {
				this.users = userJson;
		});
	}
}
</script>

<style>

</style>
