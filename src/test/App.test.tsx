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

    expect(container.textContent).toContain("We build and operate");
    expect(container.textContent).toContain("Our Companies");
    expect(container.textContent).toContain("The centralized technological core");
    expect(container.textContent).toContain("ScaleWebb Services");
    expect(container.querySelector('a[href="https://www.axenplatform.com"][target="_blank"][rel="noopener noreferrer"]')).not.toBeNull();
    expect(container.querySelector('a[href="https://www.faldeatelier.com"][target="_blank"][rel="noopener noreferrer"]')).not.toBeNull();
    expect(container.querySelector('a[href="tel:+393453279011"]')).not.toBeNull();
    expect(container.querySelector('a[href="mailto:service@scalewebb.com"]')).not.toBeNull();
  });
});
