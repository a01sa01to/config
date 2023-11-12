import { expect, test } from "@jest/globals";

import { setupLinter } from "./common";

test("can lint markdown", async () => {
  const { descriptor } = await setupLinter();
  expect(descriptor.availableExtensions).toContain(".md");
});
