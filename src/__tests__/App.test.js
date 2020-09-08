import React from "react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import {
  render,
  fireEvent,
  waitForElement,
  screen,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { URL } from "../App";
import App from "../App";

// https://stackoverflow.com/questions/53271193/typeerror-scrollintoview-is-not-a-function
window.HTMLElement.prototype.scrollIntoView = function () {};

describe("App", () => {
  test("no results flow", async () => {
    // setup server
    const server = setupServer(
      rest.get(URL, (req, res, ctx) => {
        return res(ctx.json({ Response: "False", Error: "Movie not found!" }));
      })
    );

    server.listen();

    // renders the app
    const utils = render(<App />);
    // looks for the searchbar via the placeholder test
    const input = utils.getByPlaceholderText(
      "Enter your movie title..."
    );
    // ensures that the value of the input is empty string on inital render
    expect(input).toHaveValue("");
    // types in string into searchbar
    fireEvent.change(input, { target: { value: "hire me shopify" } });
    // ensures that user's string is rendered onto the page
    expect(input.value).toBe("hire me shopify");

    // user clicks search button
    fireEvent.click(screen.getByTestId("searchBtn"));

    // user's search term is not found, then 'not found' message is shown
    await waitForElement(() =>
      utils.getByText("Sorry, but we couldn't find hire me shopify.")
    );
    const emptyMessage = utils.getByText(
      "Sorry, but we couldn't find hire me shopify."
    );
    expect(emptyMessage).toBeInTheDocument();

    server.resetHandlers();
    server.close();
  });

  test("results flow", async () => {
    // setup server
    const server = setupServer(
      rest.get(URL, (req, res, ctx) => {
        return res(
          ctx.json({
            Search: [
              {
                Poster:
                  "https://m.media-amazon.com/images/M/MV5BNDU4Mzc3NzE5NV5BMl5BanBnXkFtZTgwMzE1NzI1NzM@._V1_SX300.jpg",
                Title: "Pokémon Detective Pikachu",
                Type: "movie",
                Year: "2019",
                imdbID: "tt5884052",
              },
            ],
          })
        );
      })
    );

    server.listen();

    // renders the app
    const utils = render(<App />);
    // looks for the searchbar via the placeholder test
    const input = utils.getByPlaceholderText(
      "Enter your movie title..."
    );
    // ensures that the value of the input is empty string on inital render
    expect(input).toHaveValue("");
    // types in string into searchbar
    fireEvent.change(input, { target: { value: "Pokémon Detective Pikachu" } });
    // ensures that user's string is rendered onto the page
    expect(input.value).toBe("Pokémon Detective Pikachu");

    // user clicks search button
    fireEvent.click(screen.getByTestId("searchBtn"));

    // user's search term is found, then movie title, poster and year are shown
    await waitForElement(() => utils.getByText("Pokémon Detective Pikachu"));
    const movieResult = utils.getByText("Pokémon Detective Pikachu");
    expect(movieResult).toBeInTheDocument();

    server.resetHandlers();
    server.close();
  });
});
