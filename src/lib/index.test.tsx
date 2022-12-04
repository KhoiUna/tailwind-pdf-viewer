import renderer from "react-test-renderer";
import { describe, expect, test } from "vitest";
import PDFViewer from "./index";
import pdf from "./assets/resume.pdf";
import React from "react";

describe("PDFViewer", () => {
  test("PDFViewer component renders correctly", () => {
    const component = renderer.create(<PDFViewer pdfURL={pdf} />);

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
