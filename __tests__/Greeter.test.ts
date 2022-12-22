import { Greeter } from '../src';

test('Greeter 测试用例', () => {
  expect(Greeter('Alice')).toBe('Hello Alice')
})