export function didUpdateCardType(cardType) {
  return {
    type: 'CARD_TYPE',
    cardType: cardType,
  };
}

export function didUpdateCardReason(reason) {
  return {
    type: 'CARD_REASON',
    reason: reason,
  };
}

export function didUpdateCardOption1(option) {
  return {
    type: 'CARD_OPTION_1',
    option1: option,
  };
}

export function didUpdateCardOption2(option) {
  return {
    type: 'CARD_OPTION_2',
    option2: option,
  };
}

export function didUpdateCardDescription(description) {
  return {
    type: 'CARD_DESCRIPTION',
    description: description,
  };
}

export function didUpdateSelectedGroups(group) {
  return {
    type: 'UPDATE_SELECTED_GROUPS',
    group: group,
  };
}
