<script lang="ts">
  import { goto } from '$app/navigation';
  let { product } = $props();
</script>

<button
  onclick={() => goto(`/products/${product.id}`)}
  class="bg-white rounded-lg shadow hover:shadow-lg transition text-left w-full"
>
  {#if product.photo1}
    <img src={product.photo1} alt={product.name} class="w-full h-48 object-cover rounded-t-lg" />
  {/if}
  <div class="p-4">
    <h3 class="font-bold text-lg">{product.name}</h3>
    <p class="text-sm text-gray-600 mt-1">{product.headline || ''}</p>
    <div class="mt-2 flex justify-between items-center">
      <span class="text-blue-600 font-semibold">{product.points} pts</span>
      <span class="text-sm text-gray-500">{product.measure}</span>
    </div>
  </div>
</button>

