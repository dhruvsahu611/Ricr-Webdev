import React, {useState} from "react";
import UserOverview from "../../components/userDashboard/userOverview";
import UserProfile from "../../components/userDashboard/UserProfile";
import UserOrders from "../../components/userDashboard/UserOrders";
import UserTransactions from "../../components/userDashboard/UserTransactions";
import UserHelpDesk from "../../components/userDashboard/UserHelpDesk";
import UserSideBar from "../../components/userDashboard/userSideBar";


const UserDashboard = ()=>{

    const [active, setActive] = useState('overview');

    return(
        <>
            <div className="w-full h-[90vh] flex">
                <div className="bg-blue-300 w-2/10">
                    <UserSideBar active={active} setActive={setActive}/>
                </div>
                <div className="border border-amber-700 w-8/10">
                    {active === 'overview' && <UserOverview/>}
                    {active === 'profile' && <UserProfile/>}
                    {active === 'orders' && <UserOrders/>}
                    {active === 'transactions' && <UserTransactions/>}
                    {active === 'helpdesk' && <UserHelpDesk/>}
                </div>
            </div>
        </>
    );
};

export default UserDashboard;