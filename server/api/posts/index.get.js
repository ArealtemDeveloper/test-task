export default defineEventHandler(async (event) => {
  const userId = getQuery(event).userId;
  return await $fetch(`https://dummyjson.com/posts/user/${userId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
});
