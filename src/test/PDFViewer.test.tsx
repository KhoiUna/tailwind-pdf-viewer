import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import PDFViewer from "../components/PDFViewer";
import pdf from "./assets/resume.pdf";

describe("PDFViewer renders correctly", () => {
  test("PDFViewer renders without crashing", () => {
    render(<PDFViewer pdfURL={pdf} />);
    expect(screen).toMatchSnapshot();
  });
});
