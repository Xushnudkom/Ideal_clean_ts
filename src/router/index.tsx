import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
  } from "react-router-dom";  
  import App from "../App";
  
  import {
    Clients, Dashboard, RequireAuth, MainLayout, Orders, Services, SignIn, SignUp, Single, ProtectedRoute
  } from "@pages";
  
  const Index = () => {
    const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route index element={<SignUp />} />
            <Route path="/signin" element={<ProtectedRoute element={<SignIn />}/>}/>
            <Route path="/main/*" element={<RequireAuth element={<MainLayout />}/>}>
            <Route index element={<Dashboard />} />
            <Route path="orders" element={<Orders />}/>
            <Route path="clients" element={<Clients />}/>
            <Route path="services" element={<Services />}/>
            <Route path="single" element={<Single />}/>
            </Route>
        </Route>
      )
    );
    return <RouterProvider router={router} />;
  };
  export default Index;
  