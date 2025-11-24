<script lang="ts">
  import ProductCard from '$lib/components/ProductCard.svelte';
  import ServiceCard from '$lib/components/ServiceCard.svelte';
  
  let { data } = $props();
</script>

<div class="max-w-6xl mx-auto">
  <div class="bg-white p-6 rounded-lg shadow mb-6">
    <div class="flex items-center gap-4">
      <img src={data.user.avatar || 'https://api.dicebear.com/7.x/avataaars/svg?seed=default'} 
           alt={data.user.name} 
           class="w-24 h-24 rounded-full" />
      <div>
        <h2 class="text-2xl font-bold">{data.user.name}</h2>
        <p class="text-gray-600">@{data.user.codename}</p>
        {#if data.user.location}
          <p class="text-sm text-gray-500">{data.user.location}</p>
        {/if}
      </div>
    </div>
  </div>
  
  <div class="mb-6">
    <h3 class="text-xl font-bold mb-4">My Products</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each data.products as product}
        <ProductCard {product} />
      {/each}
    </div>
  </div>
  
  <div>
    <h3 class="text-xl font-bold mb-4">My Services</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each data.services as service}
        <ServiceCard {service} />
      {/each}
    </div>
  </div>
</div>