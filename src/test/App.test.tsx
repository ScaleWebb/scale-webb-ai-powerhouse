import { act } from "react";
import { createRoot } from "react-dom/client";
import { afterEach, describe, expect, it } from "vitest";
import Index from "@/pages/Index";

const container = document.createElement("div");
document.body.appendChild(container);
const root = createRoot(container);

afterEach(() => {
  container.replaceChildren();
});

describe("Scale Webb homepage", () => {
  it("renders the institutional narrative and primary contact action", async () => {
    await act(async () => root.render(<Index />));

    expect(container.textContent).toContain("We build enduring");
    expect(container.textContent).toContain("Investment thesis");
    expect(container.textContent).toContain("Operating platform");
    expect(container.querySelector('a[href="mailto:primary@scalewebb.com"]')).not.toBeNull();
  });
});
