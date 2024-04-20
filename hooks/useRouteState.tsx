import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import { useState } from 'react';

/**
 * Checks if the current route is active based on the provided parameters and route.
 * @param params - The parameters of the current route.
 * @param route - The route object to compare against.z
 * @returns A boolean indicating whether the route is active.
 */
const isRouteActive = (params: Params, route: Route, child: boolean) => {
  if (child) {
    const active = route.children?.some(
      (route) => params.slug === route.slug.current
    );
    if (active) return true;
  }
  return (
    params.slug === route.slug.current ||
    (!params.slug && route.slug.current === '/') ||
    (route.children &&
      route.children.some((child) => params.slug === child.slug.current))
  );
};

/**
 * Generates the class names for a route based on its active state and whether it is a child route.
 * @param isActive - A boolean indicating whether the route is active.
 * @param isChild - A boolean indicating whether the route is a child route.
 * @returns An array of class names for the route.
 */
const generateClassNames = (isActive: boolean, isChild: boolean) => {
  return [
    'flex justify-around align-middle text-slate-500 dark:text-slate-100 text-sm font-bold transition-colors p-1 py-2 xl:p-4 max-md:m-2 rounded-md w-max text-center',
    isChild ? 'text-center self-center m-1 p-1' : '',
    isActive
      ? 'bg-slate-400 dark:bg-slate-500 shadow-md scale-105'
      : 'hover:scale-105 hover:bg-slate-400 dark:hover:bg-slate-500',
  ];
};

/**
 * Custom hook that manages the state for a route.
 * @param params - The parameters of the current route.
 * @param route - The route object to compare against.
 * @param isChild - A boolean indicating whether the route is a child route.
 * @returns An object containing the class names, dropdown open state, and a function to set the dropdown open state.
 */
const useRouteState = (params: Params, route: Route, isChild = false) => {
  const [dropdownOpen, setDropdownOpen] = useState(true);
  const isActive = isRouteActive(params, route, false);
  const isChildActive = isRouteActive(params, route, true);
  const classes = generateClassNames(isChildActive!, isChild);

  return { classes, dropdownOpen, setDropdownOpen, isActive, isChildActive };
};

export default useRouteState;