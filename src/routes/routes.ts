import { lazy, LazyExoticComponent } from "react";

type JsxElement = () => JSX.Element;

interface Route {
  to?: string;
  path: string;
  name?: string;
  Component: LazyExoticComponent<JsxElement> | JsxElement;
  protectedRoute: boolean;
}

const bioLazy = lazy(() => import("@/pages/Bio/Bio"));
const editProfileLazy = lazy(() => import("@/pages/profile/Edit"));

export const routes: Route[] = [
  {
    to: "/",
    path: "/",
    name: "My Links",
    Component: bioLazy,
    protectedRoute: true,
  },
  {
    to: "/bio",
    path: "/bio",
    name: "My Links",
    Component: bioLazy,
    protectedRoute: true,
  },
  {
    path: "/edit/:id",
    Component: editProfileLazy,
    protectedRoute: true,
  },
];
