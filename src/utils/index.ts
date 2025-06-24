/**
 * Simulates an asynchronous API call by waiting for 500 milliseconds before returning the provided value.
 *
 * @typeParam T - The type of the value to return.
 * @param o - Optional value to be returned after the simulated delay.
 * @returns A promise that resolves to the provided value after a 500ms delay.
 */
export const apiCall = async <T>(o?: T) => {
  await new Promise((res) => setTimeout(res, 500));
  return o;
};
