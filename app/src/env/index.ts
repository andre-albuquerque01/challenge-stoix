import { z } from "zod"

const envSchema = z.object({
    NEXT_PUBLIC_ROUTE_API: z.coerce.string().default('http://localhost'),
    NEXT_PUBLIC_ROUTE_API_PREFIX: z.coerce.string().default('/api/v1'),
})

const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
    console.error("❌ Invalid environment variables", _env.error.format())
    throw new Error('❌ Invalid environment variables')
}

export const env = _env.data