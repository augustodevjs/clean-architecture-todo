import { render } from '@testing-library/react';

import ModulesTodo from './modules-todo';

describe('ModulesTodo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ModulesTodo />);
    expect(baseElement).toBeTruthy();
  });
});
