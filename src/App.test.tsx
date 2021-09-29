import {render, screen} from "@testing-library/react";
import App from "./App";

test("renders seed lab link", () => {
    render(<App />);
    const linkElement = screen.getByText(
        /we build software for the future of finance/i
    );
    expect(linkElement).toBeInTheDocument();
});
