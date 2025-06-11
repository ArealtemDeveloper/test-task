export default defineEventHandler(async (event) => {
  return await $fetch("https://dummyjson.com/users", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
});
