const SIMULATED_DELAY = 100;

export function simulateAsync<T>(response: T): Promise<T> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(response);
    }, SIMULATED_DELAY);
  });
}
