<script lang="ts">
  import { goto } from '$app/navigation';
  import LanguageSwitcher from '$lib/components/LanguageSwitcher.svelte';
  
  const menuItems = [
    { name: 'Posts', route: '/posts', icon: '📝' },
    { name: 'Products', route: '/products', icon: '📦' },
    { name: 'Services', route: '/services', icon: '🛠️' },
    { name: 'Points', route: '/points', icon: '💰' },
    { name: 'Shops', route: '/shops', icon: '🏪' },
    { name: 'Profile', route: '/profile', icon: '👤' }
  ];
</script>

<div class="max-w-2xl mx-auto">
  <h2 class="text-3xl font-bold mb-6 text-center">Menu</h2>
  
  <div class="mb-6 flex justify-center">
    <LanguageSwitcher />
  </div>
  
  <div class="grid grid-cols-2 gap-4">
    {#each menuItems as item}
      <button
        onclick={() => goto(item.route)}
        class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-center"
      >
        <div class="text-4xl mb-2">{item.icon}</div>
        <div class="font-semibold">{item.name}</div>
      </button>
    {/each}
  </div>
  
  <button
    onclick={() => goto('/posts')}
    class="mt-6 w-full bg-gray-200 py-3 rounded font-semibold hover:bg-gray-300"
  >
    Back to Home
  </button>
</div>