import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {routes} from "./routes/routes.ts";
import {Suspense} from "react";
import {Login, SignUp} from "./pages";
import {PrivateRoute} from "./routes/PrivateRoutes.tsx";
import {AuthContextProvider} from "./context/authContext.tsx";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
        <Router>
            <AuthContextProvider>
                <Routes>
                    {
                        routes.map(({ path, Component}) => (
                            <Route key={path} path="/" element={<PrivateRoute />}>
                                <Route
                                    path={path}
                                    element={<Component />}
                                />
                            </Route>
                        ))
                    }
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                </Routes>
            </AuthContextProvider>
        </Router>
    </Suspense>
  )
}

export default App
