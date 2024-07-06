import "../assets/css/style.css";
import "../assets/css/bootstrap.min.css";
import "../assets/css/feather.css";
import "../assets/css/bootstrap.css"


import Header from "../components/Header";
export const metadeta = {
  title: "Soutien Psychologique",
  description:
    "Evaluer votre état psychologique pour votre bien être",
};
const Rootlayout = ({ children }) => {
  return (
    <html>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
};
export default Rootlayout;
