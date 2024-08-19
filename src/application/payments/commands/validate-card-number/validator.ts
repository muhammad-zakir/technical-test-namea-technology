import { ValidationException } from '@application/common/exceptions';
import { ZodError, z } from 'zod';

import { validateCardNumberCommand } from './command';

export async function validate(command: validateCardNumberCommand) {
  try {
    const schema: z.ZodType<validateCardNumberCommand> = z.object({
      cardNumber: z.string()
    });

    await schema.parseAsync(command);
  } catch (error) {
    throw new ValidationException(error as ZodError);
  }
}
