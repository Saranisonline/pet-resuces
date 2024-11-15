import { createBrowserRouter } from "react-router-dom";

import Home from "../../pages/home/Home";
import Login from "../../pages/login/Login";
import Register from "../../pages/register/Register";
import ErrorPage from "../../pages/errorpage/ErrorPage";
import MainLayout from "../../layouts/MainLayout";
import PetListing from "../../pages/petListing/PetListing";
import UserDashboard from "../../pages/userDashboard/UserDashboard";
import AddPetDashboard from "../../pages/addpet/AddPetDashboard";
import AdoptPet from "../../pages/petListing/petlistingComponent/AdoptPet";
import MyAddedPetsDashboard from "../../pages/userDashboard/myaddedpet/MyAddedPetsDashboard";
import AdoptionReqDashboard from "../../pages/userDashboard/AdoptionReqDashboard";
import CreateDonationCampaignDashboard from "../../pages/userDashboard/CreateDonationCampaignDashboard";
import DonationCampaign from "../../pages/donationCampaign/DonationCampaign";
import DonationCampaignDetails from "../../pages/donationCampaign/donationCampaignDetails/DonationCampaignDetails";
import MyDonationCampDashboard from "../../pages/donationCampaign/myDonationCamp/MyDonationCampDashboard";
import AllUsersDashboard from "../../pages/userDashboard/admin/alluser/AllUsersDashboard";
import AllPetsAdminDashboard from "../../pages/userDashboard/admin/allpets/AllPetsAdminDashboard";
import AllDonationCampAdminDashboard from "../../pages/userDashboard/admin/allDonationCamp/AllDonationCampAdminDashboard";
import UpdateDonationCampDashboard from "../../pages/userDashboard/updateDonationCampaign/UpdateDonationCampDashboard";
import MyDonationDashboard from "../../pages/userDashboard/myDonation/MyDonationDashboard";
import UpdatePetDashboard from "../../pages/userDashboard/myaddedpet/updatePets/UpdatePetDashboard";
import AllPetsByCategory from "../../pages/allPetsByCategory/AllPetsByCategory";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/petlisting",
        element: <PetListing />,
      },
      {
        path: "/categorized_pets/:cat",
        element: <AllPetsByCategory />,
        loader: ({ params }) =>
          fetch(`https://serversite-pet-adoption.vercel.app/petbycategory/${params.cat}`),
      },
      {
        path: "/adoptionreq",
        element: (
          <PrivateRoute>
            <AdoptionReqDashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "/donationcampaign",
        element: <DonationCampaign />,
      },
      {
        path: "/donationcampaigndetails/:id",
        element: (
          <PrivateRoute>
            <DonationCampaignDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://serversite-pet-adoption.vercel.app/adddonationcamp/${params.id}`),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/userdashboard",
        element: (
          <PrivateRoute>
            <UserDashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "/addpet",
        element: (
          <PrivateRoute>
            <AddPetDashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "/adoptpet/:id",
        element: (
          <PrivateRoute>
            <AdoptPet />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://serversite-pet-adoption.vercel.app/pets/${params.id}`),
      },
      {
        path: "/myaddedpets",
        element: (
          <PrivateRoute>
            <MyAddedPetsDashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "/createdonationcamp",
        element: (
          <PrivateRoute>
            <CreateDonationCampaignDashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "/mydonation",
        element: (
          <PrivateRoute>
            <MyDonationDashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "/updatedonationcamp/:donationCampaignId",
        element: (
          <PrivateRoute>
            <UpdateDonationCampDashboard />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://serversite-pet-adoption.vercel.app/adddonationcamp/${params.donationCampaignId}`),
      },
      {
        path: "/updatepet/:petId",
        element: (
          <PrivateRoute>
            <UpdatePetDashboard />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://serversite-pet-adoption.vercel.app/pets/${params.petId}`),
      },
      {
        path: "/mydonationcamp",
        element: (
          <PrivateRoute>
            <MyDonationCampDashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "/allusers",
        element: (
          <PrivateRoute>
            <AllUsersDashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "/allpetsadmin",
        element: (
          <PrivateRoute>
            <AllPetsAdminDashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "/alldonationcampadmin",
        element: (
          <PrivateRoute>
            <AllDonationCampAdminDashboard />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
