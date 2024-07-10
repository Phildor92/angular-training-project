import { OptionalPipe } from './optional.pipe';

describe('OptionalPipe', () => {
  let pipe: OptionalPipe;

  beforeEach(() => {
    pipe = new OptionalPipe();
  })

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should display present values', () => {
    const result = pipe.transform('Hello');
    expect(result).toBe('Hello');
  })

  it('should display - when no value or argument present', () => {
    const result = pipe.transform(null);
    expect(result).toBe('-');
  })

  it('should display argument when no value present', () => {
    const result = pipe.transform(null, 'argument');
    expect(result).toBe('argument');
  })
});
