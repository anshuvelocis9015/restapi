import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm/LoginForm";
import UserProfile from "./components/Home/UserProfile";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import WorkSpace from "./components/WorkSpace/WorkSpace";
import SideFolder from "./components/SideFolder/SideFolder";
import SideFolderDetail from "./components/SideFolder/SideFolderDetail";
import WorkSpaceDetail from "./components/WorkSpace/WorkSpaceDetail";
import { MainPage } from "./components/SideFolder/MainPage";

const App = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<LoginForm />} />
                    {/* <ProtectedRoute path="/user-profile" element={<UserProfile />} /> */}
                    <Route path="/user-profile" element={<ProtectedRoute Component={UserProfile}/>} />
                    <Route path="/workspace" element={<WorkSpace />} />
                    <Route path="/workspace-details" element={<WorkSpaceDetail />} /> 
                    <Route path="/side-folder" element={<SideFolder />} />
                    <Route path="/sidefolder-details" element={<SideFolderDetail />} />                    
                    <Route path="/mainpage" element={<MainPage />} />                    
                    {/* <Route path="/workspace" element={<WorkSpace />} /> */}
                </Routes>
            </div>
        </Router>
    );
};

export default App;
