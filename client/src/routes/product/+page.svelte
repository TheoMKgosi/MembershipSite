<script>
	const card = [
		{
			image: 'https://placehold.co/200',
			title: 'Cheapest',
			items: [
				'Lasts for 10 minutes',
				'Can be only taken once a day',
				'Highly likely to get side effects'
			]
		},
		{
			image: 'https://placehold.co/200',
			title: 'Best deal',
			items: [
				'Lasts for 1 hour',
				'Can be only taken three time a day',
				'Less likey to get side effects'
			]
		},
		{
			image: 'https://placehold.co/200',
			title: 'Most value',
			items: ['Lasts for 12 hours', 'Can be taken as many times', 'NO SIDE EFFECTS']
		}
	];
	function getItem(i, index) {
		return card[i].items[index];
	}
</script>

<div class="sm:h-screen" >
	<h1 class="p-3 text-center text-3xl sm:text-5xl">The product</h1>
	<!-- card -->
	<div class="grid grid-cols-1 gap-5 p-6 sm:grid-cols-3 ">
		{#each card as item, i}
			<div class="rounded-md bg-slate-100 p-6 shadow-sm shadow-black sm:max-w-md ">
				<img src={item.image} alt={item.title} class="mx-auto p-3" />
				<h2 class="p-3 text-center text-xl font-semibold">{item.title}</h2>
				<ol class="p-3">
					<li class="list-disc">{getItem(i, 0)}</li>
					<li class="list-disc">{getItem(i, 1)}</li>
					<li class="list-disc">{getItem(i, 2)}</li>
				</ol>
				<button class="rounded-3xl bg-primary p-3 font-semibold text-slate-100">BUY NOW</button>
			</div>
		{/each}
	</div>
</div>
