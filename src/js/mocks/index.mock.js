import { headers } from "../api/headers";
import * as storage from "../storage/index.js";

//Fetch mocks
export const mockFetchSuccess = jest.fn().mockResolvedValue({
  ok: true,
  json: jest.fn().mockResolvedValue({
    headers: headers("application/json"),
  }),
});

export const mockFetchFailure = jest.fn().mockResolvedValue({
  ok: false,
  json: jest.fn().mockResolvedValue({
    headers: headers("application/json"),
  }),
});

//Local storage mocks
export const mockLocalStorage = {
  setItem: jest.fn(),
  getItem: jest.fn(),
  clear: jest.fn(),
  removeItem: jest.fn(),
};

//Save and remove
export const mockSave = jest.fn(storage.save);
export const mockRemove = jest.fn(storage.remove);
