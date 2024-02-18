import { APP_ROUTES } from '../constants/app-routes'

export const checkIsPublicRoute = (path) => {
  const appPublicRoutes = Object.values(APP_ROUTES.public)
  return appPublicRoutes.includes(path)
}
