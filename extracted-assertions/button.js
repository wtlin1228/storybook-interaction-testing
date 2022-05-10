import { expect, userEvent, waitFor } from "../test-utils/testing-library";

export const assertButtonIsClicked = async ({ args, screen }) => {
  await userEvent.click(screen.getByRole("button", { name: "Button" }));
  await waitFor(() => expect(args.onClick).toHaveBeenCalledTimes(1));
};
