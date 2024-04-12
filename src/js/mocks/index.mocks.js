import { profile } from "../api/auth/login.test";

export const fetchMock = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ accessToken: "token", profile }),
    ok: true,
    statusCode: 200,
  }),
);

export const save = jest.fn();
global.localStorage = {
  setItem: save,
};
