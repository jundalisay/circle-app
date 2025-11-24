<script lang="ts">
  import { goto } from '$app/navigation';
  let { service } = $props();
</script>

<button
  onclick={() => goto(`/services/${service.id}`)}
  class="bg-white rounded-lg shadow hover:shadow-lg transition text-left w-full"
>
  {#if service.photo1}
    <img src={service.photo1} alt={service.name} class="w-full h-48 object-cover rounded-t-lg" />
  {/if}
  <div class="p-4">
    <h3 class="font-bold text-lg">{service.name}</h3>
    <p class="text-sm text-gray-600 mt-1">{service.headline || ''}</p>
    <div class="mt-2 flex justify-between items-center">
      <span class="text-blue-600 font-semibold">{service.points} pts</span>
      <span class="text-sm text-gray-500">{service.measure}</span>
    </div>
  </div>
</button>