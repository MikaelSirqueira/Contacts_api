import { contatoRepository } from "../repositories/contato-repository";

export const contatoService = { 
  async getContacts() {
    return contatoRepository.getAll();
  },

  async postContact(nome: string, telefone: string) {
    const existsContact = await contatoRepository.getByPhoneNumber(telefone);
    if (existsContact) {
      throw new Error("Telefone já cadastrado.");
    }

    const createdContact = contatoRepository.post(nome, telefone);
    return createdContact;
  },

  async updateContact(id: string, nome: string, telefone: string) {
    const existsContact = await contatoRepository.getById(id);
    if (!existsContact) {
      throw new Error("Contato não encontrado.");
    }

    return contatoRepository.update(id, nome, telefone);
  },

  async deleteContact(id: string) {
    const existsContact = await contatoRepository.getById(id);
    if (!existsContact) {
      throw new Error("Contato não encontrado.");
    }
    
    return contatoRepository.delete(id);
  },
};
