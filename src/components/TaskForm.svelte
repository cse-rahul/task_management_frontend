<script>
  import { Directus } from '@directus/sdk';
  import { Button, Input, Label, Textarea } from 'flowbite-svelte';

  const directus = new Directus('http://localhost:8055');

  let title = '';
  let description = '';
  let status = 'To Do';
  let dueDate = '';

  async function addTask() {
    try {
      await directus.items('tasks').createOne({
        title,
        description,
        status,
        due_date: dueDate,
      });
      title = '';
      description = '';
      status = 'To Do';
      dueDate = '';
      // Trigger a re-fetch of tasks in the TaskList component
      // You may want to use a store or event dispatcher to communicate between components
    } catch (error) {
      console.error('Error adding task:', error);
    }
  }
</script>

<form on:submit|preventDefault={addTask} class="space-y-4">
  <div>
    <Label for="title" class="mb-2">Title</Label>
    <Input type="text" id="title" bind:value={title} required />
  </div>
  <div>
    <Label for="description" class="mb-2">Description</Label>
    <Textarea id="description" bind:value={description} />
  </div>
  <div>
    <Label for="status" class="mb-2">Status</Label>
    <Input type="text" id="status" bind:value={status} />
  </div>
  <div>
    <Label for="dueDate" class="mb-2">Due Date</Label>
    <Input type="date" id="dueDate" bind:value={dueDate} required />
  </div>
  <Button type="submit">Add Task</Button>
</form>