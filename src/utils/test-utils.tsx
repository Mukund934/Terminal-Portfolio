import { cleanup, render, RenderOptions } from "@testing-library/react";
import { ReactElement } from "react";
import { afterEach } from "vitest";

afterEach(() => {
  cleanup();
});

const customRender = (ui: ReactElement, options?: RenderOptions) => {
  // Remove act() wrapper to simplify and let the Testing Library handle it
  return render(ui, {
    wrapper: ({ children }) => <>{children}</>,
    ...options,
  });
};

export * from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";
export { customRender as render };
