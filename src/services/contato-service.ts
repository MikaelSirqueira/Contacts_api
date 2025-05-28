import { contatoRepository } from "../repositories/contato-repository";

export const contatoService = { 
  async getContacts() {
    return contatoRepository.getAll();
  },

  async validateContact(id?: string, telefone?: string) {
    if (id) {
      const existsContact = await contatoRepository.getById(id);
      if (!existsContact) {
        throw new Error("Contato não encontrado.");
      }
    }

    if (telefone) {
      const existsPhoneNumber = await contatoRepository.getByPhoneNumber(telefone);
      if (existsPhoneNumber) {
        throw new Error("Telefone já cadastrado.");
      }
    }
  },

  async postContact(nome: string, telefone: string) {
    await this.validateContact(undefined, telefone);
    return contatoRepository.post(nome, telefone);
  },

  async updateContact(id: string, nome: string, telefone: string) {
    await this.validateContact(id, telefone);
    return contatoRepository.update(id, nome, telefone);
  },

  async deleteContact(id: string) {
    await this.validateContact(id);
    return contatoRepository.delete(id);
  },
};
