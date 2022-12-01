import {defineNuxtRouteMiddleware} from "#imports";

export default defineNuxtRouteMiddleware((to, from)=> {
    // console.log("headers middleware", to , from)
    // res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
    // res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
    // if (to.params.id === '1') {
    //     return abortNavigation()
    // }
    // return navigateTo('/')
})
