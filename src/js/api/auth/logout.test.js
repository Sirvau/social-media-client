import { logout } from "./logout.js";
import { remove } from "../../storage/index.js";

jest.mock("../../storage/index.js");

describe("logout", () => {
  it("logs out and removes token", () => {
    logout();

    expect(remove).toHaveBeenCalledWith("token");
  });
});
