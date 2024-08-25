<script>
  import { onMount } from 'svelte';
  import { Directus } from '@directus/sdk';
  import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';

  const directus = new Directus('http://localhost:8055');
  let tasks = [];

  onMount(async () => {
    await fetchTasks();
  });

  async function fetchTasks() {
    try {
      const response = await directus.items('tasks').readByQuery({
        sort: ['due_date'],
      });
      tasks = response.data;
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  }

  async function deleteTask(id) {
    try {
      await directus.items('tasks').deleteOne(id);
      await fetchTasks();
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  }
</script>

<Table striped={true}>
  <TableHead>
    <TableHeadCell>Title</TableHeadCell>
    <TableHeadCell>Description</TableHeadCell>
    <TableHeadCell>Status</TableHeadCell>
    <TableHeadCell>Due Date</TableHeadCell>
    <TableHeadCell>Actions</TableHeadCell>
  </TableHead>
  <TableBody>
    {#each tasks as task}
      <TableBodyRow>
        <TableBodyCell>{task.title}</TableBodyCell>
        <TableBodyCell>{task.description}</TableBodyCell>
        <TableBodyCell>{task.status}</TableBodyCell>
        <TableBodyCell>{new Date(task.due_date).toLocaleDateString()}</TableBodyCell>
        <TableBodyCell>
          <button on:click={() => deleteTask(task.id)} class="text-red-500">Delete</button>
        </TableBodyCell>
      </TableBodyRow>
    {/each}
  </TableBody>
</Table>