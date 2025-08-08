import { BrowserRouter, Route, Routes, } from "react-router-dom";
import Scrolltotop from "./Scrolltop";
import Main from "../core/main/Main";
import Homepage from "../components/Homepage";
import Aboutpage from "../components/Aboutpage";
import Scopepage from "../components/Scopepage";
import Editorialpage from "../components/Editorialpage";
import Organizingpage from "../components/Organizingpage";
import Conferencetrackspage from "../components/Conferencetrackspage";
import Datesandbankpage from "../components/Datesandbankpage";
import Contactuspage from "../components/Contactuspage";
import Papersubmissionpage from "../components/Papersubmissionpage";



export default function Approuter() {
  return (
    <BrowserRouter>
      <Scrolltotop />
      <Routes>
        <Route element={<Main />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/scope" element={<Scopepage />} />
          <Route path="/editorial-board" element={<Editorialpage />} />
          <Route path="/organizing-committee" element={<Organizingpage />} />
          <Route path="/conference-tracks" element={<Conferencetrackspage />} />
          <Route path="/key-dates" element={<Datesandbankpage />} />
          <Route path="/contact-us" element={<Contactuspage/>} />
          <Route path="/paper-submission" element={<Papersubmissionpage/>} />

        </Route>
      </Routes>

    </BrowserRouter>
  );
}