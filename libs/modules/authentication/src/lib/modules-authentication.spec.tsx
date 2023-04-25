import { render } from '@testing-library/react';

import ModulesAuthentication from './modules-authentication';

describe('ModulesAuthentication', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ModulesAuthentication />);
    expect(baseElement).toBeTruthy();
  });
});
