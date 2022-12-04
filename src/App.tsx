import PDFViewer from "./lib";
import pdf from "./assets/resume.pdf";

function App() {
  return <PDFViewer pdfURL={pdf} />;
}

export default App;
