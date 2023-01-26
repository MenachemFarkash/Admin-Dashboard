import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
// import Team from "./scenes/team";
// import Invoices from "./scenes/invoices";
// import Contacts from "./scenes/contacts";
// import Bar from "./scenes/bar";
// import Form from "./scenes/form";
// import Line from "./scenes/line";
// import Pi from "./scenes/pie";
// import FAQ from "./scenes/faq";
// import Geography from "./scenes/geography";
// import Calendar from "./scenes/calendar";

function App() {
    const [theme, colorMode] = useMode();
    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className="app">
                    <Sidebar />
                    <main className="content">
                        <Topbar />
                        <Routes>
                            <Route path="/" element={<Dashboard />} />
                            {/* <route path="/team" element={<Team />} /> */}
                            {/* <route path="/contacts" element={<Contacts />} /> */}
                            {/* <route path="/invoices" element={<Invoices />} /> */}
                            {/* <route path="/form" element={<Form />} /> */}
                            {/* <route path="/bar" element={<Bar />} /> */}
                            {/* <route path="/pie" element={<Pie />} /> */}
                            {/* <route path="/line" element={<Line />} />/ */}
                            {/* <route path="/faq" element={<FAQ />} /> */}
                            {/* <route path="/geography" element={<Geography />} /> */}
                            {/* <route path="/calendar" element={<Calendar />} /> */}
                        </Routes>
                    </main>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;
