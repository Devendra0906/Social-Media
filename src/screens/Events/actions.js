export function didUpdateEventIcon(icon: any) {
  return {
    type: "SELECT_EVENT_ICON",
    icon: icon
  };
}

export function didUpdateEventName(name: String) {
  return {
    type: "UPDATE_EVENT_NAME",
    name: name
  };
}

export function didUpdateEventDescription(description: String) {
  return {
    type: "UPDATE_EVENT_DESCRIPTION",
    description: description
  };
}

export function didUpdateEventLocation(location: String) {
  return {
    type: "UPDATE_EVENT_LOCATION",
    name: location
  };
}

export function didUpdateEventStartDate(startDate: String) {
  return {
    type: "UPDATE_EVENT_START_DATE",
    name: startDate
  };
}

export function didUpdateEventStartTime(startTime: String) {
  return {
    type: "UPDATE_EVENT_START_TIME",
    name: startTime
  };
}

export function didUpdateEventEndDate(endDate: String) {
  return {
    type: "UPDATE_EVENT_END_DATE",
    name: startTime
  };
}

export function didUpdateEventEndTime(endTime: String) {
  return {
    type: "UPDATE_EVENT_END_TIME",
    name: startTime
  };
}

export function canInviteCoWorkers(canInvite: Boolean) {
  return {
    type: "CAN_INVITE_COWORKERS",
    canInvite: canInvite
  };
}

export function resetEventData() {
  return {
    type: "RESET_EVENT",
  };
}