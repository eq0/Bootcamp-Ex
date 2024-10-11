import { useAuth } from "#imports"

export default defineNuxtRouteMiddleware(() => {
    const { isAuth, checkAuth } = useAuth()
    
    checkAuth();

    if (isAuth.value) {
        return navigateTo("/")
    }
})