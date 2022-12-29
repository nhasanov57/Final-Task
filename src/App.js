import { Header, Main, CreateItem } from "./companents";
import { Routes, Route } from "react-router-dom";
import {AnimatePresence} from 'framer-motion';

function App() {
  return (
    <AnimatePresence exitBeforeEnter>
       <div className="w-screen h-auto flex flex-col">
      <Header />
      <main className="mt-14 md:mt-20 px-4 md:px-16  py-8  w-full">
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/createItem" element={<CreateItem />}></Route>
        </Routes>
      </main>
    </div>
    </AnimatePresence>
   
  );
}

export default App;
