<script lang="ts">
  import '../app.css';
  import FAB from '$lib/components/FAB.svelte';
  import { page } from '$app/stores';
  
  let { data, children } = $props();
</script>

<div class="min-h-screen bg-gray-50 pb-20">
  <header class="bg-blue-600 text-white p-4 sticky top-0 z-10">
    <h1 class="text-xl font-bold">Circle App</h1>
    {#if data.user}
      <p class="text-sm">Welcome, {data.user.name}</p>
    {/if}
  </header>
  
  <main class="container mx-auto px-4 py-6 max-w-7xl">
    {@render children()}
  </main>
  
  {#if data.user && $page.route.id !== '/menu'}
    <FAB />
  {/if}
</div>