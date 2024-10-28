import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./Components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Facilities from "./Components/Facilities";
import About from "./Components/About";
import ContactUs from "./Components/ContactUs";
import Pricing from "./Components/Pricing";
import { FaAngleUp } from "react-icons/fa6";

const App = () => {

    const scrollToUp = ()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return <div className="bg-[#FEFAE0] font-[poppins] relative">
        <Navbar />
        <Outlet />
        <Footer />
        <div onClick={scrollToUp} className="size-fit fixed right-5 bottom-5 bg-zinc-200 rounded-full text-3xl p-2 cursor-pointer">
            <FaAngleUp />
        </div>
    </div>
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Body />,
                children: [
                    {
                        path: "/pricing",
                        element: <Pricing />
                    }
                ]
            },
            {
                path: "/facilities",
                element: <Facilities />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact-form",
                element: <ContactUs />
            },
        ]
    },

])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);