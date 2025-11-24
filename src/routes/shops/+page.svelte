<script lang="ts">
  import { goto } from '$app/navigation';
  let { data } = $props();
  let searchTerm = $state('');
  
  $effect(() => {
    // Filter logic would go here
  });
</script>

<div class="max-w-6xl mx-auto">
  <h2 class="text-2xl font-bold mb-6">Shops</h2>
  
  <input
    bind:value={searchTerm}
    placeholder="Search by name or location..."
    class="w-full border rounded px-4 py-2 mb-6"
  />
  
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {#each data.shops as shop}
      <button
        onclick={() => goto(`/shops/${shop.id}`)}
        class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-left"
      >
        <div class="flex items-center gap-4 mb-4">
          <img src={shop.avatar || 'https://api.dicebear.com/7.x/avataaars/svg?seed=shop'} 
               alt={shop.name} 
               class="w-16 h-16 rounded-full" />
          <div>
            <h3 class="font-bold text-lg">{shop.name}</h3>
            <p class="text-sm text-gray-500">{shop.location || 'No location'}</p>
          </div>
        </div>
        <div class="flex justify-between text-sm">
          <span>{shop.productCount} products</span>
          <span>{shop.serviceCount} services</span>
        </div>
        <div class="mt-2 text-sm">
          <span class="text-green-600">Credit Ratio: {shop.creditRatio.toFixed(2)}</span>
        </div>
      </button>
    {/each}
  </div>
</div>