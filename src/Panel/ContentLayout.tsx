import { ReactNode } from "react";

interface props {
    children: ReactNode
}

const ContentLayout: React.FC<props> = ({ children }) => {
    return (
        <div className="contentContainer">
            <div className="p-4 sm:ml-64">
                <div className="p-2 mt-14">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default ContentLayout;
