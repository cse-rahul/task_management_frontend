<script>
  import Login from "../components/Login.svelte";
  import { Button } from 'flowbite-svelte';
  import { navigate } from "svelte-routing";

  let isLoggedIn = false;

  function handleLogin(event) {
    isLoggedIn = event.detail.success;
    if (isLoggedIn) {
      navigate("/tasks");
    }
  }

  function handleLogout() {
    isLoggedIn = false;
    // Implement logout logic here
  }
</script>

<h1 class="text-3xl font-bold mb-4">Welcome to Task Manager</h1>

{#if !isLoggedIn}
  <Login on:login={handleLogin} />
{:else}
  <Button on:click={handleLogout}>Logout</Button>
{/if}