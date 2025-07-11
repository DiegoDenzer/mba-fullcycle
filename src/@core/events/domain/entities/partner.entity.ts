import Uuid from '../../../common/domain/value-objects/uuid.vo';
import { AggregateRoot } from '../../../common/domain/aggregate-root';

export class PartnerId extends Uuid {}

export type PartnerConstructorProps = {
  id?: PartnerId | string;
  name: string;
};

export class Partner extends AggregateRoot {
  id: PartnerId;
  name: string;
  constructor(props: PartnerConstructorProps) {
    super();
    this.id =
      typeof props.id === 'string'
        ? new PartnerId(props.id)
        : (props.id ?? new PartnerId());
    this.name = props.name;
  }

  static create(command: { name: string }) {
    return new Partner({
      name: command.name,
    });
  }

  toJson(): any {
    return {
      id: this.id.value,
      name: this.name,
    };
  }
}
