# Tailwind PDF Viewer

# Installation

```sh
npm i tailwind-pdf-viewer
```

# Usage

To use the component, first import `PDFViewer` into your app:

```js
import PDFViewer from "tailwind-pdf-viewer";
```

Import `tailwind-pdf-viewer/style.css` to apply styling

```js
import "tailwind-pdf-viewer/style.css";
```

`PDFViewer` takes one prop `pdfURL` which can be set to your PDF location (this can be an online PDF location as well as long as CORS is allowed)

```js
import PDFViewer from "tailwind-pdf-viewer";
import "tailwind-pdf-viewer/style.css";
import pdf from "./resume.pdf";

const App = () => {
  return <PDFViewer pdfURL={pdf} />;
};

export default App;
```
