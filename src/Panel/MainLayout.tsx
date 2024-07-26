import React from "react";
import ContentLayout from "./ContentLayout";
import SideBarLayout from "./SideBarLayout";
import TopbarLayout from "./TopbarLayout";
import AppRoutes from "../routes/AppRoutes";

const MainLayout: React.FC = () => {
    return (
        <>
            <TopbarLayout />
            <SideBarLayout />
            <ContentLayout>
                <AppRoutes />
            </ContentLayout>
        </>
    )
}

export default MainLayout;
