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

export const objectToFormData = (obj) => {
  const formData = new FormData()
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key]
      if (value[0] instanceof File) {
        formData.append(key, value[0], value[0].name)
      } else {
        formData.append(key, value[0])
      }
    }
  }

  return formData
}
