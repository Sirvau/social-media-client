import { login } from "./login";
import { fetchMock } from "../../mocks/index.mocks.js";
import { save } from "../../storage/index.js";

jest.mock("../../storage/index.js");

const profile = {
  name: "username",
  email: "example@noroff.no",
  password: "myPassword",
  avatar: "avatarURL",
};

global.fetch = fetchMock;

describe("login", () => {
  afterEach(() => {
    fetchMock.mockClear();
  });

  it("logs in and saves token", async () => {
    await login(profile);
    expect(save).toHaveBeenNthCalledWith(1, "token", "token");
  });

  it("Throws an error when response is not ok", async () => {
    const errorMessage = "Unauthorized";

    fetchMock.mockResolvedValueOnce({
      ok: false,
      statusText: errorMessage,
    });
    await expect(login(profile)).rejects.toThrow(errorMessage);
  });
});
