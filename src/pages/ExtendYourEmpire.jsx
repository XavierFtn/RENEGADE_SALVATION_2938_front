import Header from "../models/ModelsHeader";
import Footer from "../models/ModelsFooter";

function ExtendYourEmpire() {
  return (
    <div className="container-fluid">
      <Header />
      <h1>Expand your empire!</h1>
      <Cbuilding />
      <Buildings />
      <Footer />
    </div>
  );
}
export default ExtendYourEmpire;
