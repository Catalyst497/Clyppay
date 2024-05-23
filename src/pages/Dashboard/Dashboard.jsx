// import SignupParent from "@/components/custom/signup/SignupParent"
// import LoginForm from "@/components/custom/login/LoginForm"
// import ForgotParent from "@/components/custom/forgot/ForgotParent"
// import ResetForm from "@/components/custom/reset/ResetForm"
import Sidebar from "@/components/custom/Sidebar"
import Clyphub from "../Clyphub"
import HomeTab from "./HomeTab"
import StatisticsTab from "./StatisticsTab"

export default function Dashboard() {
    return (
        <div style={{ display: "flex" }}>
            <Sidebar />
            <div style={{ marginLeft: "200px", padding: "20px" }}>
                <Routes>
                    <Route path="/" element={<HomeTab />} /> 
                    <Route path="home" element={<HomeTab />} />
                    <Route path="statistics" element={<StatisticsTab />} />
                    <Route path="clyphub" element={<Clyphub />} />
                </Routes>
                <Outlet />
            </div>
        </div>
    )
}

{
    /* <SignupParent />
<LoginForm />
<ForgotParent />
<ResetForm /> */
}

//  const Dashboard = () => {
//      return (

//      );
