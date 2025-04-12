import { env } from "@/env"

export default function ApiServer(path: string, init?: RequestInit) {
    const baseUrl = env.NEXT_PUBLIC_ROUTE_API
    const apiPrefix = env.NEXT_PUBLIC_ROUTE_API_PREFIX
    const url = new URL(apiPrefix.concat(path), baseUrl)

    return fetch(url, init)
}