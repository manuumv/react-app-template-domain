import { ReduxState } from 'core/model/reduxState';
import { CountState } from 'model/countState';
import { countInitialState } from '../reducer/count.reducer';
import { selectCountState } from './count.selectors';

describe('Count selectors', () => {
  it('should return the expected count state', () => {
    // Arrange
    const rootState = { count: countInitialState } as ReduxState;
    const expectedResult: CountState = countInitialState;

    // Act
    const result = selectCountState(rootState);

    // Assert
    expect(result).toEqual(expectedResult);
  });
});
