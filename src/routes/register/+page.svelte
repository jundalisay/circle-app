<script lang="ts">
  import { goto } from '$app/navigation';
  
  let name = $state('');
  let codename = $state('');
  let pin = $state('');
  let pinConfirm = $state('');
  let password = $state('');
  let passwordConfirm = $state('');
  let avatar = $state('');
  let gender = $state('');
  let dateOfBirth = $state('');
  let email = $state('');
  let phone = $state('');
  let location = $state('');
  let error = $state('');
  
  async function handleSubmit() {
    error = '';
    
    if (pin !== pinConfirm) {
      error = 'PINs do not match';
      return;
    }
    
    if (password !== passwordConfirm) {
      error = 'Passwords do not match';
      return;
    }
    
    const response = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name, codename, pin, password, avatar,
        gender, dateOfBirth, email, phone, location
      })
    });
    
    if (response.ok) {
      goto('/login');
    } else {
      const data = await response.json();
      error = data.message || 'Registration failed';
    }
  }
</script>

<div class="max-w-md mx-auto bg-white p-6 rounded-lg shadow">
  <h2 class="text-2xl font-bold mb-6">Register</h2>
  
  {#if error}
    <div class="bg-red-100 text-red-700 p-3 rounded mb-4">{error}</div>
  {/if}
  
  <form onsubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
    <div class="space-y-4">
      <div>
        <label class="block text-sm font-medium mb-1">Name *</label>
        <input bind:value={name} required class="w-full border rounded px-3 py-2" />
      </div>
      
      <div>
        <label class="block text-sm font-medium mb-1">Codename *</label>
        <input bind:value={codename} required class="w-full border rounded px-3 py-2" />
      </div>
      
      <div>
        <label class="block text-sm font-medium mb-1">PIN *</label>
        <input bind:value={pin} type="password" required class="w-full border rounded px-3 py-2" />
      </div>
      
      <div>
        <label class="block text-sm font-medium mb-1">Confirm PIN *</label>
        <input bind:value={pinConfirm} type="password" required class="w-full border rounded px-3 py-2" />
      </div>
      
      <div>
        <label class="block text-sm font-medium mb-1">Password *</label>
        <input bind:value={password} type="password" required class="w-full border rounded px-3 py-2" />
      </div>
      
      <div>
        <label class="block text-sm font-medium mb-1">Confirm Password *</label>
        <input bind:value={passwordConfirm} type="password" required class="w-full border rounded px-3 py-2" />
      </div>
      
      <div>
        <label class="block text-sm font-medium mb-1">Avatar URL</label>
        <input bind:value={avatar} type="url" class="w-full border rounded px-3 py-2" />
      </div>
      
      <div>
        <label class="block text-sm font-medium mb-1">Gender</label>
        <select bind:value={gender} class="w-full border rounded px-3 py-2">
          <option value="">Select...</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      
      <div>
        <label class="block text-sm font-medium mb-1">Date of Birth</label>
        <input bind:value={dateOfBirth} type="date" class="w-full border rounded px-3 py-2" />
      </div>
      
      <div>
        <label class="block text-sm font-medium mb-1">Email</label>
        <input bind:value={email} type="email" class="w-full border rounded px-3 py-2" />
      </div>
      
      <div>
        <label class="block text-sm font-medium mb-1">Phone</label>
        <input bind:value={phone} type="tel" class="w-full border rounded px-3 py-2" />
      </div>
      
      <div>
        <label class="block text-sm font-medium mb-1">Location</label>
        <input bind:value={location} class="w-full border rounded px-3 py-2" />
      </div>
      
      <button type="submit" class="w-full bg-blue-600 text-white py-3 rounded font-semibold hover:bg-blue-700">
        Register
      </button>
    </div>
  </form>
</div>