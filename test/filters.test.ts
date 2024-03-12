import { invoices } from "../src/api/invoices";
import { createFilters } from "../src/filters";

describe("invoices", () => {
  it("15 invoices", () => {
    expect(invoices.length).toEqual(15);
  });
});

describe("filters", () => {
  it("createFilters ", () => {
    expect(createFilters()).toEqual([]);
  });
});
