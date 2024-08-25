<script>
  import { createEventDispatcher } from 'svelte';
  import { Directus } from '@directus/sdk';
  import { Button, Input, Label } from 'flowbite-svelte';

  const dispatch = createEventDispatcher();
  const directus = new Directus('http://localhost:8055');

  let email = '';
  let password = '';

  async function login() {
    try {
      await directus.auth.login({ email, password });
      dispatch('login', { success: true });
    } catch (error) {
      console.error('Login failed:', error);
      dispatch('login', { success: false });
    }
  }
</script>

<form on:submit|preventDefault={login} class="space-y-4">
  <div>
    <Label for="email" class="mb-2">Email</Label>
    <Input type="email" id="email" bind:value={email} required />
  </div>
  <div>
    <Label for="password" class="mb-2">Password</Label>
    <Input type="password" id="password" bind:value={password} required />
  </div>
  <Button type="submit">Login</Button>
</form>