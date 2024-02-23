<script>
import "../app.css";
  import logo from "$lib/logo-placeholder-image.png"
let showMenu = false
function menu(){
  showMenu = !showMenu
}
</script>
<nav class="bg-gradient-to-r from-green-400 to-green-500">
  <div class="md:flex md:justify-between">
    <div class="flex justify-between">
  <img src={logo} alt="Logo" class="h-20 " />
 <svg class="md:hidden w-20 h-auto p-3 " on:click={menu} xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" fill="none">
<path d="M4 17H20M4 12H20M4 7H20" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
      </div>
    <ul class="flex-col  md:flex md:flex-row md:items-center md:space-x-10 md:space-y-0 md:mt-0  {showMenu ? 'flex' : 'hidden' } p-5">
  <li><a href="/" class="font-semibold hover:text-slate-300">HOME</a></li>
    <li><a href="/about" class="font-semibold hover:text-slate-300">ABOUT</a></li>
    <li><a href="/product" class="font-semibold hover:text-slate-300">PRODUCT</a></li>
    <li><a href="/contact" class="font-semibold hover:text-slate-300">CONTACT</a></li>
    <li><button class="{!showMenu ? '' : 'hidden'} p-3 bg-blue-300 rounded-md font-semibold hover:text-slate-300">Subscribe now</button></li>
      </ul>
    </div>
</nav>


<slot />
