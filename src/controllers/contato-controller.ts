import { Request, Response } from "express";
import { contatoService } from "../services/contato-service";

export const contatoController = {
  async getContacts(req: Request, res: Response) {
    try {
      const contacts = await contatoService.getContacts();
      
      res.status(200).json(contacts);
      
    } catch (error) {
      console.error("Erro ao listar contatos:", error);
      res.status(500).json({ message: "Erro interno do servidor" });
    }
  },

  async postContact(req: Request, res: Response) {
    try {
      const { nome, telefone } = req.body;
      const contact = await contatoService.postContact(nome, telefone);

      res.status(201).json(contact);

    } catch (error) {
      console.error("Erro ao criar contato:", error);
      res.status(500).json({ message: "Erro interno do servidor" });
    }
  },

  async updateContact(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { nome, telefone } = req.body;

      const updated = await contatoService.updateContact(id, nome, telefone);
      res.status(200).json(updated);

    } catch (error) {
      console.error("Erro ao atualizar contato:", error);
      res.status(500).json({ message: "Erro interno do servidor" });
    }
  },

  async deleteContact(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await contatoService.deleteContact(id);

      res.status(204).send();

    } catch (error) {
      console.error("Erro ao deletar contato:", error);
      res.status(500).json({ message: "Erro interno do servidor" });
    }
  }
};
