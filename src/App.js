import { Provider } from "react-redux";
import "./App.css"
import { createBrowserRouter,RouterProvider} from "react-router-dom";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/store";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import InputContainer from "./components/InputContainer";



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
{
  path:"result",
  element:<InputContainer />,
}


  ]
}])

function App() {
  return (
    <div className="p-0 m-0">
     <Provider store={store}> 
     <Head />
      <RouterProvider router ={appRouter} />
     </Provider>
    </div>
  );
}

export default App;
