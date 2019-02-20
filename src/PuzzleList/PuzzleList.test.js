import React from "react";
import { render, cleanup, waitForElement } from 'test-utils';
import PuzzleList from "./PuzzleList";
afterEach(cleanup)

it("should render correctly", () => {
  const { container } = render(<PuzzleList />);
  expect(container).toMatchSnapshot();
});

it("should show Loading... and then render AUDIOFILE", async () => {
  const { debug, getByText } = render(<PuzzleList />);
  debug();
  expect(getByText("Loading...")).toBeTruthy();
  await waitForElement(() => getByText('AUDIOFILE'));
});