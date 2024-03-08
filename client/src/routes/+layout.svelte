<script>
	import '../app.css';
	import logo from '$lib/logo-placeholder-image.png';
	let showMenu = false;
	function menu() {
		showMenu = !showMenu;
	}
</script>

<div class="bg-gradient-to-r from-green-500 to-green-600 h-auto">
<nav >
	<div class="md:flex md:justify-between">
		<div class="flex justify-between">
			<a href="/"> <img src={logo} alt="Logo" class="h-20" /></a>
        <button on:click={menu}>
			<svg
				class="h-auto w-20 p-3 md:hidden"
				aria-label="main"
				
				xmlns="http://www.w3.org/2000/svg"
				width="800px"
				height="800px"
				viewBox="0 0 24 24"
				fill="none"
			>
				<path
					d="M4 17H20M4 12H20M4 7H20"
					stroke="#000000"
					stroke-width="1.5"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
          </button>
		</div>
		<ul
			class="flex-col md:mt-0 md:flex md:flex-row md:items-center md:space-x-10 md:space-y-0 {showMenu
				? 'flex'
				: 'hidden'} p-5"
		>
			<li><a href="/" class="font-semibold hover:text-slate-300" on:click={menu}>HOME</a></li>
			<li><a href="/about" class="font-semibold hover:text-slate-300" on:click={menu}>ABOUT</a></li>
			<li>
				<a href="/product" class="font-semibold hover:text-slate-300" on:click={menu}>PRODUCT</a>
			</li>
			<li>
				<a href="/contact" class="font-semibold hover:text-slate-300" on:click={menu}>CONTACT</a>
			</li>
			<li>
				<button class=" rounded-md bg-blue-300 p-3 font-semibold hover:text-slate-300"
					>Subscribe now</button
				>
			</li>
		</ul>
	</div>
</nav>
<slot />
</div>
