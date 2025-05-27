import { z } from 'zod';

export const bodyContactSchema = z.object({
  nome: z
    .string({ required_error: 'O nome é obrigatório' })
    .refine((val) => {
      const palavras = val.trim().split(/\s+/);
      return palavras.length >= 2 && palavras.every(p => p.length >= 3);
    }, {
      message: 'O nome deve conter pelo menos duas palavras, cada uma com no mínimo 3 letras',
    }),

  telefone: z
    .string({ required_error: 'O telefone é obrigatório' })
    .regex(/^\d+$/, { message: 'O telefone deve conter apenas números' })
    .min(9, { message: 'O telefone deve ter no mínimo 9 dígitos' }),
});

export const paramContactSchema = z.object({
  id: z
    .string({ required_error: 'O ID é obrigatório' })
    .uuid({ message: 'O ID precisa estar no formato UUID' }),
});