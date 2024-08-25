<script>
  import { Router, Route, Link } from "svelte-routing";
  import Home from "./routes/Home.svelte";
  import Tasks from "./routes/Tasks.svelte";
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';

  export let url = "";
</script>

<Router {url}>
  <Navbar let:hidden let:toggle>
    <NavBrand href="/">
      <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Task Manager</span>
    </NavBrand>
    <NavHamburger on:click={toggle} />
    <NavUl {hidden}>
      <NavLi><Link to="/">Home</Link></NavLi>
      <NavLi><Link to="/tasks">Tasks</Link></NavLi>
    </NavUl>
  </Navbar>

  <main>
    <Route path="/"><Home /></Route>
    <Route path="/tasks"><Tasks /></Route>
  </main>
</Router>