import { type NextRequest, NextResponse } from 'next/server'

export async function middleware(request: NextRequest) {
    const token = request.cookies.get('token')?.value
    const authentication =
        token !== undefined && token.length >= 49 && token.length <= 53

    if (
        !authentication &&
        (request.nextUrl.pathname.endsWith('/task') ||
            request.nextUrl.pathname.endsWith('/editar') ||
            request.nextUrl.pathname.endsWith('/profile') ||
            request.nextUrl.pathname.endsWith('/update') ||
            request.nextUrl.pathname.endsWith('/dashboard'))
    ) {
        return NextResponse.redirect(new URL('/', request.url))
    }

    if (
        authentication &&
        (request.nextUrl.pathname.endsWith('/') ||
            request.nextUrl.pathname.endsWith('/register'))
    ) {
        return NextResponse.redirect(new URL('/dashboard', request.url))
    }

    return NextResponse.next()
}