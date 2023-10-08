import { Provider } from "react-redux";
import "./App.css"
import { createBrowserRouter,RouterProvider} from "react-router-dom";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/store";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";



const appRouter = createBrowserRouter([{
  path:"/",
  element:<Body />,
  children :[
{
  path:"/" , 
  element:<MainContainer /> ,
},
{
  path:"watch",
  element:<WatchPage />,
},
  ]
}])

function App() {
  return (
    <div className="">
     <Provider store={store}> 
     <Head />
      <RouterProvider router ={appRouter} />
     </Provider>
    </div>
  );
}

export default App;
