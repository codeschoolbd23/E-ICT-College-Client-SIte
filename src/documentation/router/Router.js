import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../main/Main";
import Home from "../home/Home";
import F404 from "./F404";
import Cprogram from "../pages/chapter5/cprogram/Cprogram";
import CollegeLayout from "../shared/npc/CollegeLayout";
import CLayout from "../pages/chapter5/cprogram/CLayout";
import CHome from "../pages/chapter5/cprogram/CHome";
import Error from "./Error";
import Gallery from "../shared/npc/Gallery";
import AlProgram from "../pages/chapter5/Algorithm/AlProgram";
import AlHome from "../pages/chapter5/Algorithm/AlHome";
import AlLayout from "../pages/chapter5/Algorithm/AlLayout";
import FlLayout from "../pages/chapter5/flowchart/FlLayout";
import FlHome from "../pages/chapter5/flowchart/FlHome";
import FlProgram from "../pages/chapter5/flowchart/FlProgram";
import HtLayout from "../pages/chapter4/html/HtLayout";
import HtHome from "../pages/chapter4/html/HtHome";
import HtProgram from "../pages/chapter4/html/HtProgram";
import CSSLayout from "../pages/chapter4/css/CSSLayout";
import CSSHome from "../pages/chapter4/css/CSSHome";
import CSSProgram from "../pages/chapter4/css/CSSProgram";
import Webdesign from "../pages/chapter4/Webdesign";
import WebHome from "../pages/chapter4/WebHome";
import Programming from "../pages/chapter5/Programming";
import ProgramHome from "../pages/chapter5/ProgramHome";
import DataLayout from "../pages/chapter6/DataLayout";
import DataHome from "../pages/chapter6/DataHome";
import DataProgram from "../pages/chapter6/DataProgram";
import NumberSystem from "../pages/chapter3/NumberSystem";
import NumberHome from "../pages/chapter3/NumberHome";
import NumHome from "../pages/chapter3/part1/Numhome";
import NumProgram from "../pages/chapter3/part1/NumProgram";
import LogicLayout from "../pages/chapter3/part2/LogicLayout";
import LogicHome from "../pages/chapter3/part2/LogicHome";
import LogicProgram from "../pages/chapter3/part2/LogicProgram";
import NumLayout from "../pages/chapter3/part1/NumLayout";
import ComLayout from "../pages/chapter2/ComLayout";
import ComHome from "../pages/chapter2/ComHome";
import ComProgram from "../pages/chapter2/ComProgram";
import InfoLayout from "../pages/chapter1/InfoLayout";
import InfoHome from "../pages/chapter1/InfoHome";
import InfoProgram from "../pages/chapter1/InfoProgram";
import ProfileLayout from "../profile/ProfileLayout";
import ProfileHome from "../profile/ProfileHome";
import About from "../utilities/About";
import Blog from "../utilities/Blog";
import Contact from "../utilities/Contact";
import Learn from "../utilities/Learn";
import FreeResorces from "../utilities/FreeResorces";
import Services from "../utilities/Services";
import Developer from "../utilities/Developer";
import Organization from "../utilities/Organization";
import Teacher from "../utilities/Teacher";
import Ask from "../utilities/Ask";
import Story from "../utilities/Story";
import Pdf from "../utilities/Pdf";
import School from "../utilities/School";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <Error></Error>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader: () => fetch(`https://college-server-five.vercel.app`),
        },
      ],
    },
    {
      path: "/information",
      element: <InfoLayout></InfoLayout>,
      loader: () => fetch(`https://college-server-five.vercel.app/info`),
      children: [
        {
          path: "/information",
          element: <InfoHome></InfoHome>,
          loader: () => fetch(`https://college-server-five.vercel.app/info`),
        },
        {
          path: "/information/:id",
          element: <InfoProgram></InfoProgram>,
          loader: async ({ params }) =>
            await fetch(
              `https://college-server-five.vercel.app/info/${params.id}`
            ),
        },
      ],
    },
    {
      path: "/communication",
      element: <ComLayout></ComLayout>,
      loader: () => fetch(`https://college-server-five.vercel.app/com`),
      children: [
        {
          path: "/communication",
          element: <ComHome></ComHome>,
          loader: () => fetch(`https://college-server-five.vercel.app/com`),
        },
        {
          path: "/communication/:id",
          element: <ComProgram></ComProgram>,
          loader: async ({ params }) =>
            await fetch(
              `https://college-server-five.vercel.app/com/${params.id}`
            ),
        },
      ],
    },
    {
      path: "/numberSystem",
      element: <NumberSystem></NumberSystem>,
      loader: () => fetch(`https://college-server-five.vercel.app/number`),
      children: [
        {
          path: "/numberSystem",
          element: <NumberHome></NumberHome>,
          loader: () => fetch(`https://college-server-five.vercel.app/number`),
        },
        {
          path: "/numberSystem/number",
          element: <NumLayout></NumLayout>,
          loader: () => fetch(`https://college-server-five.vercel.app/number`),
          children: [
            {
              path: "/numberSystem/number",
              element: <NumHome></NumHome>,
              loader: () =>
                fetch(`https://college-server-five.vercel.app/number`),
            },
            {
              path: "/numberSystem/number/:id",
              element: <NumProgram></NumProgram>,
              loader: async ({ params }) =>
                await fetch(
                  `https://college-server-five.vercel.app/number/${params.id}`
                ),
            },
          ],
        },

        {
          path: "/numberSystem/logicgate",
          element: <LogicLayout></LogicLayout>,
          loader: () =>
            fetch(`https://college-server-five.vercel.app/logicgate`),
          children: [
            {
              path: "/numberSystem/logicgate",
              element: <LogicHome></LogicHome>,
              loader: () =>
                fetch(`https://college-server-five.vercel.app/logicgate`),
            },
            {
              path: "/numberSystem/logicgate/:id",
              element: <LogicProgram></LogicProgram>,
              loader: async ({ params }) =>
                await fetch(
                  `https://college-server-five.vercel.app/logicgate/${params.id}`
                ),
            },
          ],
        },
      ],
    },
    {
      path: "/web",
      element: <Webdesign></Webdesign>,
      loader: () => fetch(`https://college-server-five.vercel.app`),
      children: [
        {
          path: "/web",
          element: <WebHome></WebHome>,
          loader: () => fetch(`https://college-server-five.vercel.app`),
        },
        {
          path: "/web/html",
          element: <HtLayout></HtLayout>,
          loader: () => fetch(`https://college-server-five.vercel.app/html`),
          children: [
            {
              path: "/web/html",
              element: <HtHome></HtHome>,
              loader: () =>
                fetch(`https://college-server-five.vercel.app/html`),
            },
            {
              path: "/web/html/:id",
              element: <HtProgram></HtProgram>,
              loader: async ({ params }) =>
                await fetch(
                  `https://college-server-five.vercel.app/html/${params.id}`
                ),
            },
          ],
        },

        {
          path: "/web/css",
          element: <CSSLayout></CSSLayout>,
          loader: () => fetch(`https://college-server-five.vercel.app/css`),
          children: [
            {
              path: "/web/css",
              element: <CSSHome></CSSHome>,
              loader: () => fetch(`https://college-server-five.vercel.app/css`),
            },
            {
              path: "/web/css/:id",
              element: <CSSProgram></CSSProgram>,
              loader: async ({ params }) =>
                await fetch(
                  `https://college-server-five.vercel.app/css/${params.id}`
                ),
            },
          ],
        },
      ],
    },
    {
      path: "/c",
      element: <Programming></Programming>,
      children: [
        {
          path: "/c",
          element: <ProgramHome></ProgramHome>,
        },
        {
          path: "/c/program",
          element: <CLayout></CLayout>,
          loader: () => fetch(`https://college-server-five.vercel.app/c`),
          children: [
            {
              path: "/c/program",
              element: <CHome></CHome>,
              loader: () => fetch(`https://college-server-five.vercel.app/c`),
            },
            {
              path: "/c/program/:id",
              element: <Cprogram></Cprogram>,
              loader: async ({ params }) =>
                await fetch(
                  `https://college-server-five.vercel.app/c/${params.id}`
                ),
            },
          ],
        },
        {
          path: "/c/algorithm",
          element: <AlLayout></AlLayout>,
          loader: () =>
            fetch(`https://college-server-five.vercel.app/algorithm`),
          children: [
            {
              path: "/c/algorithm",
              element: <AlHome></AlHome>,
              loader: () =>
                fetch(`https://college-server-five.vercel.app/algorithm`),
            },
            {
              path: "/c/algorithm/:id",
              element: <AlProgram></AlProgram>,
              loader: async ({ params }) =>
                await fetch(
                  `https://college-server-five.vercel.app/algorithm/${params.id}`
                ),
            },
          ],
        },
        {
          path: "/c/flowchart",
          element: <FlLayout></FlLayout>,
          loader: () =>
            fetch(`https://college-server-five.vercel.app/flowchart`),
          children: [
            {
              path: "/c/flowchart",
              element: <FlHome></FlHome>,
              loader: () =>
                fetch(`https://college-server-five.vercel.app/flowchart`),
            },
            {
              path: "/c/flowchart/:id",
              element: <FlProgram></FlProgram>,
              loader: async ({ params }) =>
                await fetch(
                  `https://college-server-five.vercel.app/flowchart/${params.id}`
                ),
            },
          ],
        },
      ],
    },
    {
      path: "/database",
      element: <DataLayout></DataLayout>,
      loader: () => fetch(`https://college-server-five.vercel.app/database`),
      children: [
        {
          path: "/database",
          element: <DataHome></DataHome>,
          loader: () =>
            fetch(`https://college-server-five.vercel.app/database`),
        },
        {
          path: "/database/:id",
          element: <DataProgram></DataProgram>,
          loader: async ({ params }) =>
            await fetch(
              `https://college-server-five.vercel.app/database/${params.id}`
            ),
        },
      ],
    },
    {
      path: "/college",
      element: <CollegeLayout></CollegeLayout>,
      children: [
        {
          path: "/college",
          element: <Gallery></Gallery>,
        },
      ],
    },
    {
      path: "/user",
      element: <ProfileLayout></ProfileLayout>,
      children: [
        {
          path: "/user",
          element: <ProfileHome></ProfileHome>,
        },
      ],
    },
    /*#########################################
Utilities router section start
###########################################*/
    {
      path: "/about",
      element: <About></About>,
    },
    {
      path: "/blog",
      element: <Blog></Blog>,
    },
    {
      path: "/contact",
      element: <Contact></Contact>,
    },
    {
      path: "/learn",
      element: <Learn></Learn>,
    },
    {
      path: "/resorces",
      element: <FreeResorces></FreeResorces>,
    },
    {
      path: "/service",
      element: <Services></Services>,
    },
    {
      path: "/developer",
      element: <Developer></Developer>,
    },
    {
      path: "/organization",
      element: <Organization></Organization>,
    },
    {
      path: "/teacher",
      element: <Teacher></Teacher>,
    },
    {
      path: "/ask",
      element: <Ask></Ask>,
    },
    {
      path: "/story",
      element: <Story></Story>,
    },
    {
      path: "/pdf",
      element: <Pdf></Pdf>,
    
    },
    {
      path: "/school",
      element: <School></School>,
    },
    /*#########################################
Utilities router section end
###########################################*/
    {
      path: "/*",
      element: <F404></F404>,
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
};

export default Router;
