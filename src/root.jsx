
import { ThemeProvider } from "./hooks/ThemeContext";
import { NotificationProvider } from "./hooks/NotificationContext";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const Root = () => {
    return (
        <ThemeProvider>
            <NotificationProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </NotificationProvider>
        </ThemeProvider>
    )
}

export default Root;