import { APP_ROUTES } from '../constants/app-routes'

export const checkIsPublicRoute = (path) => {
  const appPublicRoutes = Object.values(APP_ROUTES.public)
  return appPublicRoutes.some((route) => {
    if (Array.isArray(route)) {
      return route.includes(path)
    }
    return route === path
  })
}
