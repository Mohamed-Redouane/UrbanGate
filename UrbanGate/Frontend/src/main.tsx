// REFERENCES
// [1] React Documentation: https://react.dev/learn

import React from 'react' // [1]
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider,} from "react-router-dom"; // https://reactrouter.com/en/main/start/tutorial
import AboutPage from './assets/Components/_About/AboutPage.tsx';
import Header from './assets/Components/Header.tsx' 
import Footer from'./assets/Components/Footer.tsx'
import Houses from './assets/Components/_Houses/Houses.tsx'
import PropertyPageDetail from './assets/Components/_Houses/PropertyPageDetail.tsx'
import AccountsPage from './assets/Components/_Account/AccountsPage.tsx';
import "bootstrap/dist/css/bootstrap.min.css"
import RequestVisitButton from './assets/Components/_Houses/RequestVisitButton.tsx';
import Broker from './assets/Components/_Broker/Broker.tsx'
import CreateProperty from './assets/Components/_Broker/CreateProperty.tsx'
import ManageProperties from './assets/Components/_Broker/ManageProperties.tsx'
import CreateBroker from './assets/Components/_Broker/CreateBroker.tsx'
import ManageBrokers from './assets/Components/_Broker/ManageBrokers.tsx'
import BrokerDetail from './assets/Components/_Broker/BrokerDetail.tsx'
import DeleteProperties from './assets/Components/_Broker/DeleteProperties.tsx'
import ManageVisitRequests from './assets/Components/_Broker/ManageVisitRequests.tsx';
import EditProperties from './assets/Components/_Broker/EditProperties.tsx';

//https://reactrouter.com/en/main/start/tutorial
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import ManageOffersRequests from './assets/Components/_Offers/ManageOffersRequests.tsx';
import AcceptVisitRequest from './assets/Components/_Broker/AcceptVisitRequest.tsx';
import RejectVisitRequest from './assets/Components/_Broker/RejectVisitRequest.tsx';
import AcceptOfferRequest from './assets/Components/_Offers/AcceptOffersRequests.tsx';
import RejectOfferRequest from './assets/Components/_Offers/RejectOffersRequests.tsx';
//https://reactrouter.com/en/main/start/tutorial
const router = createBrowserRouter([
{path: "/", element: <AboutPage/>,}, //[2], it associates a URL path with a component
{path: "/houses", element: <Houses/>},
{path: "/houses/propertypagedetail/:_id", element: <PropertyPageDetail/>}, 
{path: "/houses/propertypagedetail/:userID", element: <PropertyPageDetail/>}, 
{path: "/accounts", element: <AccountsPage/>},
{path: "/house/propertydetail", element:<RequestVisitButton/>},
{path: "/broker", element:<Broker/>},
{path: "/broker/CreateProperty", element:<CreateProperty/>},
{path: "/broker/ManageProperties", element:<ManageProperties/>},
{path: "/broker/CreateBroker", element:<CreateBroker/>},
{path: "/broker/ManageBrokers", element:<ManageBrokers/>},
{path: "/broker/BrokerDetail/:_id", element:<BrokerDetail/>},
{path: "/broker/ManageProperties/DeleteProperties/:_id", element:<DeleteProperties/>}, //https://blog.stackademic.com/practical-steps-on-how-to-apply-the-useparams-hook-of-react-router-5cd43a2106b2
{path: "/broker/manageVisitRequests/:brokerId", element:<ManageVisitRequests/>},
{path: "/broker/ManageProperties/EditProperties/:_id", element:<EditProperties/>},
{path: "/ManageOffersRequests", element:<ManageOffersRequests/>},
{path: "/ManageOffersRequests/AcceptOfferRequest/:offerId", element:<AcceptOfferRequest/>},
{path: "/ManageOffersRequests/RejectOfferRequest/:offerId", element:<RejectOfferRequest/>},
{path: "/broker/manageVisitRequests/AcceptVisitRequest/:visitRequestId", element:<AcceptVisitRequest/>},
{path: "/broker/manageVisitRequests/RejectVisitRequest/:visitRequestId", element:<RejectVisitRequest/>},
])

//https://reactrouter.com/en/main/start/tutorial
ReactDOM.createRoot(document.getElementById('root')!).render(
<React.StrictMode>
  <ToastContainer />  
    <Header/>
   <RouterProvider router = {router}/>
    <Footer/>
  </React.StrictMode>
)
