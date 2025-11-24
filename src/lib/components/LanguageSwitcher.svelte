<script lang="ts">
  let currentLang = $state('en');
  
  function switchLanguage(lang: string) {
    currentLang = lang;
    // Paraglide integration would go here
    // For now, just store in localStorage
    localStorage.setItem('language', lang);
  }
</script>

<div class="flex gap-2">
  <button
    onclick={() => switchLanguage('en')}
    class={`px-4 py-2 rounded ${currentLang === 'en' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
  >
    English
  </button>
  <button
    onclick={() => switchLanguage('tl')}
    class={`px-4 py-2 rounded ${currentLang === 'tl' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
  >
    Tagalog
  </button>
</div>