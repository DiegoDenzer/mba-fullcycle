import { ValueObject } from './value-object';
import crypto from 'crypto';
import { validate as uuidValidate } from 'uuid';
export class Uuid extends ValueObject<string> {
  constructor(id?: string) {
    super(id || crypto.randomUUID());
    this.validate();
  }

  private validate() {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-call
    const isValid = uuidValidate(this.value);
    if (!isValid) {
      throw new InvalidUuidError(this.value);
    }
  }
}

export class InvalidUuidError extends Error {
  constructor(message: string) {
    super(`Invalid UUID: ${message}`);
    this.name = 'InvalidUuidError';
  }
}

export default Uuid;
