<script>
	const card = [
		{ image: 'https://placehold.co/200', title: 'Cheapest', items: ["Cheap","Cheap","Cheap"] },
		{ image: 'https://placehold.co/200', title: 'Best deal', items: ["best","beset","Best"] },
    { image:'https://placehold.co/200' , title: 'Most value', items: ["value","value","value"] }
	];
  function getItem(i,index){
    return card[i].items[index]
  }
</script>

<h1 class="p-3 text-center text-3xl sm:text-5xl">The product</h1>
<!-- card -->
<div class="grid grid-cols-1 sm:grid-cols-3 p-6 gap-5 ">
	{#each card as item,i}
    <div class="p-6 shadow-sm shadow-black">
		<img src={item.image} alt={item.title} class="p-3 mx-auto"/>
		<h2 class="text-center text-xl font-semibold p-3">{item.title}</h2>
		<ol class="p-3">
			<li>{getItem(i,0)}</li>
			<li>{getItem(i,1)}</li>
			<li>{getItem(i,2)}</li>
		</ol>
      <button class="p-3 bg-primary rounded-3xl">BUY NOW</button>
  </div>
	{/each}
</div>
