
import common from './peopletofollowReducer';

test('returns default initial state of `false` when no action is passed', () => {
  const newState = common(undefined, {});
  expect(newState.coworkers).toEqual([]);
});
test('returns state of true upon receiving an action of type LOAD_COWORKERS', () => {
  const newState = common(undefined, { type: "LOAD_COWORKERS" });
  expect(newState.coworkers).toEqual(undefined);
});