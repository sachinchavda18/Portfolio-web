// import { backendUrl } from "./config";
require("dotenv").config();

export const makePOSTRequest = async (route, body) => {
  const response = await fetch(process.env.BACKEND_URL + route, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const formattedResponse = await response.json();
  return formattedResponse;
};

export const makeGETRequest = async (route) => {
  const response = await fetch(process.env.BACKEND_URL + route, {
    method: "GET",
    headers: { "Content-Type": "application/json"
  },
  });
  const formattedResponse = await response.json();
  return formattedResponse;
};
