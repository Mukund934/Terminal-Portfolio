import { cleanup, render, RenderOptions } from "@testing-library/react";
import { ReactElement } from "react";
import { afterEach } from "vitest";
import { act } from "react-dom/test-utils";

afterEach(() => {
  cleanup();
});

const customRender = (ui: ReactElement, options?: RenderOptions) => {
  let rendered;
  act(() => {
    rendered = render(ui, {
      // Wrap providers if needed
      wrapper: ({ children }) => children,
      ...options,
    });
  });
  return rendered;
};

export * from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";
export { customRender as render };
