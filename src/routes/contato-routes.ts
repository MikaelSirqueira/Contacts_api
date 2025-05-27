import { Router, RequestHandler } from 'express';
import { contatoController } from '../controllers/contato-controller';
import { validate } from '../middleware/validate';
import { bodyContactSchema, paramContactSchema } from '../schemas/contacts-schemas';

const router = Router();

router.get('/contatos', contatoController.getContacts as unknown as RequestHandler);

router.post("/contatos", validate(bodyContactSchema, "body"), contatoController.postContact as unknown as RequestHandler);

router.patch(
  "/contatos/:id",
  validate(paramContactSchema, "params"),
  validate(bodyContactSchema, "body"),
  contatoController.updateContact as unknown as RequestHandler
);

router.delete("/contatos/:id", validate(paramContactSchema, "params"), contatoController.deleteContact as unknown as RequestHandler);

export default router; 