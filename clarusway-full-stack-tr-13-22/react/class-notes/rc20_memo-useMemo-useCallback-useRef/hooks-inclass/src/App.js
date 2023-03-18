import { useRef, useState } from "react";
import Header from "./components/Header";
import HeaderMemo from "./components/HeaderMemo";
import TaxComp from "./components/TaxComp";

function App() {
  const [count, setCount] = useState(0);
  const [user,setUser] = useState("anthony")
  const [taxDataState, setTaxDataState] = useState({ taxRate: 0.18, ship: 25 });//ilk oluşumda referansını tanımlıyor ve o referans sabit kalıyor

  const taxData = {taxRate:0.18,ship:25};//her render bellekteki refereansı değşiyor

  const taxData1 = useRef({ taxRate: 0.18, ship: 25 });
  console.log(taxData1)//hafızada referansı sabit ama kendisi değişebilir olan verileri tanımlamak istiyorsak
  
  return (
    <div className="container mt-2">
      <div>
        <Header />
      </div>
      <hr />
      <div className="">
        <p className="text-center">Count : {count}</p>
        <button
          className="btn btn-danger d-flex mx-auto"
          onClick={() => setCount(count + 1)}>
          Increment
        </button>
      </div>
      <button
        className="btn btn-danger d-flex mx-auto"
        onClick={() => setUser("sabata")}>
        Change User
      </button>
      <hr />
      {/* <HeaderMemo user={user} /> */}
      <HeaderMemo count={count} />
      <hr />
      {/* <TaxComp taxData={taxData} /> */}
      {/* <TaxComp taxData={taxDataState} /> */}
      <TaxComp taxData={taxData1} />
    </div>
  );
}

export default App;
