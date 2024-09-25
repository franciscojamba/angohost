import { z } from 'zod'

const LoginFormSchema = z.object({
    email: z.string().min(1).regex(/^^[a-zA-Z0-9._%+-]+@angohost\.ao$/, 'Insira um email válido!'),
    senha: z.string().min(1)
})

type LoginFormType = z.infer<typeof LoginFormSchema>

export default LoginFormSchema;
export type { LoginFormType }