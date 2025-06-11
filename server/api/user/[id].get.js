export default defineEventHandler(async (event) => {
   const id = getRouterParam(event, 'id');

  return await $fetch(`https://dummyjson.com/users/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
});