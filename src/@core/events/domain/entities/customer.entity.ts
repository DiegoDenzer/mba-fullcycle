import { AggregateRoot } from 'src/@core/common/domain/aggregate-root';
import Cpf from '../../../common/domain/value-objects/cpf.vo';
import Uuid from '../../../common/domain/value-objects/uuid.vo';

export class CustomerId extends Uuid {}

export type CustomerContructorProps = {
  id?: CustomerId | string;
  cpf: Cpf;
  name: string;
};

export class Customer extends AggregateRoot {
  id?: CustomerId;
  cpf: Cpf;
  name: string;

  constructor(props: CustomerContructorProps) {
    super();
    this.id =
      typeof props.id === 'string'
        ? new CustomerId(props.id)
        : (props.id ?? new CustomerId());
    this.cpf = props.cpf;
    this.name = props.name;
  }

  static create(command: { name: string; cpf: string }) {
    return new Customer({
      name: command.name,
      cpf: new Cpf(command.cpf),
    });
  }

  toJson() {
    return {
      id: this.id,
      cpf: this.cpf,
      name: this.name,
    };
  }
}
