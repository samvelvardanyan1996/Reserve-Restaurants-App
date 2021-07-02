import { getFocusedRouteNameFromRoute, } from '@react-navigation/native';

const getHeaderTitle = (route, setName = null) => {
  if(setName !== null){
    return setName;
  }

  // If the focused route is not found, we need to assume it's the initial screen
  // This can happen during if there hasn't been any navigation inside the screen
  // In our case, it's "Feed" as that's the first screen inside the navigator  
  const routeName = getFocusedRouteNameFromRoute(route) ?? "Main";

  console.log("route", route);
  console.log("routeName", routeName);

  switch (routeName) {
    case 'Main':
      return 'Home1';
    case 'Home':
      return 'Home';
    case 'Stack':
      return 'Home';
    case 'Tables':
      return 'Tables';
    case 'Feed':
      return 'News feed';
    case 'Profile':
      return 'My profile';
    case 'Account':
      return 'My account';
    default:
      return "error";
  }
}

export default getHeaderTitle;