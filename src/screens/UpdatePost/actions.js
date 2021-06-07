export function didChangePostDescription(description: String) {
  return {
    type: "DESCRIPTION_CHANGED",
    description: description
  };
}

export function didSelectPostImage(image: String) {
  return {
    type: "IMAGE_SELECTED",
    image: image
  };
}

export function didSelectLocation(location: String) {
  return {
    type: "LOCATION_SELECTED",
    location: location
  };
}

export function didUpdateTagUsers(users: any) {
  return {
    type: "UPDATE_TAG_USERS",
    user: users
  };
}

export function didResetPost() {
  return {
    type: "RESET_GROUP"
  }
}