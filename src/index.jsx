// import ReactDOM from "react-dom/client";
// import Root from "./root";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Root />);



import { ThemeProvider } from "./hooks/ThemeContext";
import { NotificationProvider } from "./hooks/NotificationContext";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ConfigProvider } from "./hooks/ConfigContext";

const WebGPT = ({
    brandName,
    brandDescription,
    brandLogo,
    header,
    footer,
    socials,
    themes,
    views
}) => {
    return (
        <ConfigProvider 
            brandName={brandName}
            brandDescription={brandDescription}
            brandLogo={brandLogo}
            header={header}
            footer={footer}
            socials={socials}
            views={views}
        >
            <ThemeProvider
                themes={themes}
            >
                <NotificationProvider>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </NotificationProvider>
            </ThemeProvider>
        </ConfigProvider>
    )
}

export default WebGPT;