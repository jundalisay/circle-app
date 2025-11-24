<script lang="ts">
  let { post } = $props();
</script>

<div class="bg-white p-4 rounded-lg shadow">
  <div class="flex items-start gap-3">
    <img src={post.user.avatar || 'https://api.dicebear.com/7.x/avataaars/svg?seed=default'} 
         alt={post.user.name} 
         class="w-12 h-12 rounded-full" />
    <div class="flex-1">
      <div class="font-semibold">{post.user.name}</div>
      <div class="text-sm text-gray-500">{new Date(post.dateCreated).toLocaleDateString()}</div>
      <p class="mt-2">{post.content}</p>
    </div>
  </div>
</div>