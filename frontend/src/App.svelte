<script>
  import { onMount } from "svelte";
  import { Button, Input, Label, Table } from "flowbite-svelte";
  import {
    login,
    logout,
    getTasks,
    createTask,
    deleteTask,
  } from "./lib/directus";

  let tasks = [];
  let isLoggedIn = false;
  let email = "";
  let password = "";
  let newTask = { title: "", description: "", status: "Pending", due_date: "" };

  onMount(async () => {
    isLoggedIn = await checkLoginStatus();
    if (isLoggedIn) {
      await loadTasks();
    }
  });

  async function checkLoginStatus() {
    // Implement logic to check if user is logged in
    // This might involve checking for a token in localStorage or making a request to Directus
    return false; // For now, always return false
  }

  async function handleLogin() {
    try {
      await login(email, password);
      isLoggedIn = true;
      await loadTasks();
    } catch (error) {
      console.error("Login failed:", error);
    }
  }

  async function handleLogout() {
    await logout();
    isLoggedIn = false;
    tasks = [];
  }

  async function loadTasks() {
    const { data } = await getTasks();
    tasks = data;
  }

  async function handleCreateTask() {
    await createTask(newTask);
    await loadTasks();
    newTask = { title: "", description: "", status: "Pending", due_date: "" };
  }

  async function handleDeleteTask(id) {
    await deleteTask(id);
    await loadTasks();
  }
</script>

<main>
  {#if !isLoggedIn}
    <div class="login-form">
      <h2>Login</h2>
      <Label for="email">Email</Label>
      <Input type="email" id="email" bind:value={email} />
      <Label for="password">Password</Label>
      <Input type="password" id="password" bind:value={password} />
      <Button on:click={handleLogin}>Log In</Button>
    </div>
  {:else}
    <h1>Task Management</h1>
    <Button on:click={handleLogout}>Log Out</Button>

    <div class="task-form">
      <h2>Add New Task</h2>
      <Label for="title">Title</Label>
      <Input id="title" bind:value={newTask.title} />
      <Label for="description">Description</Label>
      <Input id="description" bind:value={newTask.description} />
      <Label for="status">Status</Label>
      <Input id="status" bind:value={newTask.status} />
      <Label for="due_date">Due Date</Label>
      <Input type="date" id="due_date" bind:value={newTask.due_date} />
      <Button on:click={handleCreateTask}>Add Task</Button>
    </div>

    <div class="task-list">
      <h2>Task List</h2>
      <Table>
        <Table.Head>
          <Table.HeadCell>Title</Table.HeadCell>
          <Table.HeadCell>Description</Table.HeadCell>
          <Table.HeadCell>Status</Table.HeadCell>
          <Table.HeadCell>Due Date</Table.HeadCell>
          <Table.HeadCell>Action</Table.HeadCell>
        </Table.Head>
        <Table.Body>
          {#each tasks as task}
            <Table.Row>
              <Table.Cell>{task.title}</Table.Cell>
              <Table.Cell>{task.description}</Table.Cell>
              <Table.Cell>{task.status}</Table.Cell>
              <Table.Cell
                >{new Date(task.due_date).toLocaleDateString()}</Table.Cell
              >
              <Table.Cell>
                <Button color="red" on:click={() => handleDeleteTask(task.id)}
                  >Delete</Button
                >
              </Table.Cell>
            </Table.Row>
          {/each}
        </Table.Body>
      </Table>
    </div>
  {/if}
</main>

<style>
  main {
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
