import {lazy, LazyExoticComponent} from "react";

type JsxElement = () => JSX.Element;

interface Route {
	to: string;
	path: string;
	name: string;
	Component: LazyExoticComponent<JsxElement> | JsxElement;
}

const dashboardLazy = lazy(() => import('../pages/dashboard/Dashboard'));

export const routes: Route[] = [
	{
		to: '/dashboard',
		path: '/dashboard',
		name: 'Dashboard',
		Component: dashboardLazy,
	}
];