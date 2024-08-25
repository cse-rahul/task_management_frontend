import { Directus } from "@directus/sdk";
import { createDirectus, authentication } from "@directus/sdk";

const directus = new Directus("http://localhost:8055");

export async function login(email, password) {
  return await directus.auth.login({ email, password });
}

export async function logout() {
  return await directus.auth.logout();
}

export async function getTasks() {
  return await directus.items("tasks").readByQuery();
}

export async function createTask(task) {
  return await directus.items("tasks").createOne(task);
}

export async function deleteTask(id) {
  return await directus.items("tasks").deleteOne(id);
}

export default directus;
