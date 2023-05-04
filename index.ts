const urlToFetch = "https://api.github.com/users/Maxim-Mazurok";
import { spawn } from "node:child_process";

console.log(spawn);

(async () => {
  const { default: fetch } = await import("node-fetch");
  await doTheFetching(fetch, "node-fetch", urlToFetch);

  const { got } = await import("got");
  await doTheFetching(got, "got", urlToFetch);
})();

const doTheFetching = async (
  fetcher: Function,
  fetcherName: string,
  url: string
) => {
  const data = await fetcher(url);
  console.log(`Fetched with ${fetcherName}: `, data.body);
};
