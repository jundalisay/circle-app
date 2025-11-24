<script lang="ts">
  import PostCard from '$lib/components/PostCard.svelte';
  
  let { data } = $props();
  let content = $state('');
  
  async function createPost() {
    await fetch('/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content })
    });
    
    content = '';
    window.location.reload();
  }
</script>

<div class="max-w-2xl mx-auto">
  <h2 class="text-2xl font-bold mb-6">Posts</h2>
  
  <div class="bg-white p-4 rounded-lg shadow mb-6">
    <textarea
      bind:value={content}
      placeholder="What's on your mind?"
      class="w-full border rounded p-3 mb-3"
      rows="3"
    ></textarea>
    <button
      onclick={createPost}
      class="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
    >
      Post
    </button>
  </div>
  
  <div class="space-y-4">
    {#each data.posts as post}
      <PostCard {post} />
    {/each}
  </div>
  
  <div class="flex justify-between mt-6">
    {#if data.page > 1}
      <a href="/posts?page={data.page - 1}" class="bg-gray-200 px-4 py-2 rounded">Previous</a>
    {:else}
      <div></div>
    {/if}
    
    {#if data.hasMore}
      <a href="/posts?page={data.page + 1}" class="bg-gray-200 px-4 py-2 rounded">Next</a>
    {/if}
  </div>
</div>