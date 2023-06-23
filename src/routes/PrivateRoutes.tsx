import { Navigate } from "react-router-dom";
import { useAuth } from "@/context/index";
import { Loading } from "@/components/ui/loading";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const PrivateRoute = ({ children }) => {
  const { loading, session } = useAuth();

  if (loading) return <Loading />;
  if (!session) return <Navigate to="/login" />;

  return children;
};
