import { UniquePazientePipe } from './unique-paziente.pipe';

describe('UniquePazientePipe', () => {
  it('create an instance', () => {
    const pipe = new UniquePazientePipe();
    expect(pipe).toBeTruthy();
  });
});
