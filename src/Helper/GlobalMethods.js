export const setTestId = (id) => {
  return Platform.OS === 'android' ?
    { accessibilityLabel: id } : { testID: id };
};