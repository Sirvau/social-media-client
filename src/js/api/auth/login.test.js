import { login } from "./login";
import { fetchMock, save } from "../../mocks/index.mocks.js";

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
    expect(save).toHaveBeenNthCalledWith(1, "token", JSON.stringify("token"));
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
