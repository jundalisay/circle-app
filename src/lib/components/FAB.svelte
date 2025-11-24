<script lang="ts">
  import { goto } from '$app/navigation';
</script>

<button 
  onclick={() => goto('/menu')}
  class="fixed bottom-6 right-6 w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 flex items-center justify-center text-2xl z-50"
>
  ☰
</button>