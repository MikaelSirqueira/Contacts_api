import { prisma } from "../lib/prisma";

export const contatoRepository = {
  async getAll() {
    return prisma.contato.findMany();
  },

  async post(nome: string, telefone: string) {
    return prisma.contato.create({
      data: { nome, telefone },
    });
  },  
  
  async update(id: string, nome: string, telefone: string) {
    return prisma.contato.update({
      where: { id },
      data: { nome, telefone },
    });
  },

  async getById(id: string) {
    return prisma.contato.findUnique({
      where: { id },
    });
  },

  async getByPhoneNumber(telefone: string) {
    return prisma.contato.findFirst({
      where: { telefone },
    });
  },

  async delete(id: string) {
    return prisma.contato.delete({
      where: { id },
    });
  },

  
};
