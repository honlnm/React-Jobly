import React from "react";
import { render } from "@testing-library/react";
import JobCards from "./JobCardList";

it("renders without crashing", function () {
    render(<JobCards />);
});

it("matches snapshot with no jobs", function () {
    const { asFragment } = render(<JobCards />);
    expect(asFragment()).toMatchSnapshot();
});