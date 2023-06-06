import {Navigate, Route, Routes} from "react-router-dom";
import {routes} from "./routes/routes.ts";
import {PrivateRoute} from "./routes/PrivateRoutes.tsx";
import { Login, SignUp } from "./pages/index.ts";
import { useAuth } from "./context";
import { SideBar } from "./components";

const App = () => {
    const { auth } = useAuth();

    return (
        <div className="h-screen flex flex-col lg:flex-row">
            {auth && <SideBar />}

            <Routes>
                <Route
                    path="*"
                    element={<>404 Not found</>}
                />
                <Route
                    path="/login"
                    element={
                        auth ?
                        <Navigate to="/bio" /> :
                        <Login />
                    }
                />
                <Route
                    path="/signup"
                    element={
                        auth ?
                        <Navigate to="/bio" /> :
                        <SignUp />
                    }
                />
                {routes.map(({ path, Component}) => (
                    <Route
                        key={path}
                        path={path}
                        element={
                            <PrivateRoute>
                                <Component />
                            </PrivateRoute>
                        }
                    />
                ))}
            </Routes>
        </div>
    )
}

export default App
