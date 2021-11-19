import { act, render } from '@app/testing';

import { Routes } from '.';

describe('Routes', () => {
  test('should render routes', async () => {
    render(<Routes />);

    // https://github.com/callstack/react-native-testing-library/issues/398
    await act(Promise.resolve);
  });
});
