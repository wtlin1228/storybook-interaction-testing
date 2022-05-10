import React from "react";
import { render, screen } from "@testing-library/react";

import { Button } from "./Button";
import { assertButtonIsClicked } from "../extracted-assertions/button";

describe("Button", () => {
  it("triggers the onClick callback when it's clicked", async () => {
    const props = {
      label: "Button",
      onClick: jest.fn(),
    };

    render(<Button {...props} />);

    await assertButtonIsClicked({ args: props, screen });
  });
});
