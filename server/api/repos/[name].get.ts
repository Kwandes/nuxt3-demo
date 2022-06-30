import { CompatibilityEvent } from "h3";
import type { ServerResponse } from "http";

export default async (event: CompatibilityEvent, res: ServerResponse) => {
  const data = await $fetch(
    `https://api.github.com/repos/kwandes/${event.context.params.name}`
  );

  res.writeHead(200, { "Content-Type": "application/json" });
  res.write(JSON.stringify(data));
  res.end();
};
