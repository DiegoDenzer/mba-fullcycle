import { Customer } from '../customer.entity';

test('Deve criar um cliente com CPF válido', () => {
  const c = Customer.create({
    name: 'João da Silva',
    cpf: '12345678909',
  });
  expect(c).toBeInstanceOf(Customer);
  expect(c.id).toBeDefined();
});
