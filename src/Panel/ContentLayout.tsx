import { ReactNode } from "react";

interface props {
    children: ReactNode
}

const ContentLayout: React.FC<props> = ({ children }) => {
    return (
        <div className="contentContainer">
            <div className="p-4 sm:ml-64">
                <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default ContentLayout;
