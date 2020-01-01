<template>
	<div>
		<nav aria-label="...">
			<ul class="pagination justify-content-center">
				<li v-if="page - 1 > 0" class="page-item">
					<a @click="change(page-1)" class="page-link" href="#">Previous</a>
				</li>

				<li v-else class="page-item disabled">
					<a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
				</li>
				<li v-if="page > 2" class="page-item"><a @click="change(1)" class="page-link" href="#">1</a></li>
				<li v-if="page > 3" class="page-item disabled"><a class="page-link" href="#" tabindex="-1" aria-disabled="true">...</a></li>

				<li v-if="page + 1 > maxPage && page - 2 > 0" class="page-item"><a @click="change(page-2)" class="page-link" href="#">{{page-2}}</a></li>
				<li v-if="page - 1 > 0" class="page-item"><a @click="change(page-1)" class="page-link" href="#">{{page-1}}</a></li>
				<li class="page-item active" aria-current="page">
					<a class="page-link" tabindex="-1" aria-disabled="true" href="#">{{page}} <span class="sr-only">(current)</span></a>
				</li>
				<li v-if="page + 1 <= maxPage" class="page-item"><a @click="change(page+1)" class="page-link" href="#">{{page+1}}</a></li>
				<li v-if="page === 1 && page + 2 <= maxPage" class="page-item"><a @click="change(page+2)" class="page-link" href="#">{{page+2}}</a></li>

				<li v-if="page + 3 <= maxPage" class="page-item disabled"><a class="page-link" href="#" tabindex="-1" aria-disabled="true">...</a></li>
				<li v-if="page + 2 <= maxPage" class="page-item"><a @click="change(maxPage)" class="page-link" href="#">{{maxPage}}</a></li>

				<li v-if="page + 1 <= maxPage" class="page-item">
					<a @click="change(page+1)" class="page-link" href="#">Next</a>
				</li>
				<li v-else class="page-item disabled">
					<a class="page-link" href="#" tabindex="-1" aria-disabled="true">Next</a>
				</li>
			</ul>
		</nav>
	</div>
</template>

<script>
	export default {
		name: "Index",
		props: {
			page: Number,
			maxPage: Number
		},
		methods: {
			change(index) {
				this.$emit("pageChange", index);
			}
		}
	}
</script>
