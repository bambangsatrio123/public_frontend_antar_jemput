import { render, screen, getByTestId } from "@testing-library/react";
import Dashboard from "./component/Dashboard/Dashboard";
import TransactionNew from "./component/Transaction/TransactionNew";

//  Masih Error

// test("renders teks", () => {
//   render(<Dashboard />);
//   const linkElement = screen.getByText("Halo, Customer !");
//   expect(linkElement).toBeInTheDocument();
// });

// describe("Check containt on Dashboard", () => {
//   test("checking Card", () => {
//     render(<Dashboard />);

//     const checkCard = getByTestId("checkCard");
//     const checkRow = getByTestId("checkRow");

//     expect(checkCard).toContainElement(checkRow);
//   });
// });

// describe("Check container on Dashboard", () => {
//   test("checking container", () => {
//     render(<Dashboard />);

//     const dashboardContainer = getByTestId("dashboardContainer");

//     expect(dashboardContainer).toHaveClass("container",{ exact: true});
//   });
// });

// describe("Check have text content", () => {
//   test("checking context content", () => {
//     render(<Dashboard />);

//     const element = getByTestId("text-content");

//     expect(element).toHaveTextContent("transaksi");
//   });
// });

// describe("Check have value input", () => {
//   test("checking value input", () => {
//     render(<TransactionNew />);

//     const numberInput = getByTestId("input-number");

//     expect(numberInput).toHaveValue(10);
//   });
// });