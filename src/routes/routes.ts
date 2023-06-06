import {lazy, LazyExoticComponent} from "react";

type JsxElement = () => JSX.Element;

interface Route {
	to: string;
	path: string;
	name: string;
	Component: LazyExoticComponent<JsxElement> | JsxElement;
	protectedRoute: boolean;
}

const bioLazy = lazy(() => import('../pages/dashboard/Bio/Bio'));

export const routes: Route[] = [
	{
		to: '/',
		path: '/',
		name: 'My Links',
		Component: bioLazy,
		protectedRoute: true,
	},
	{
		to: '/bio',
		path: '/bio',
		name: 'My Links',
		Component: bioLazy,
		protectedRoute: true,
	},
];