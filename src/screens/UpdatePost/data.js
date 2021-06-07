const brandSuccess = require("../../theme/variables/commonColor").brandSuccess;
const brandDanger = require("../../theme/variables/commonColor").brandDanger;
const brandWarning = require("../../theme/variables/commonColor").brandWarning;
const brandInfo = require("../../theme/variables/commonColor").brandInfo;
import localizedStrings from '../../Helper/LocalisedString'

const data = [
  {
    icon: require('./../../../assets/images/camera.png'),
    iconColor: brandSuccess,
    text: `${localizedStrings.updateStatus.photoVideo}`
  },
  {
    icon: require('./../../../assets/images/ic_video.png'),
    iconColor: brandDanger,
    text: `${localizedStrings.updateStatus.goLive}`
  },
  {
    icon: require('./../../../assets/images/ic_location_pin.png'),
    iconColor: "#008b8b",
    text: `${localizedStrings.updateStatus.checkIn}`
  },
  {
    icon: require('./../../../assets/images/ic_emoji.png'),
    iconColor: brandWarning,
    text: `${localizedStrings.updateStatus.feelingActivity}`
  },
  {
    icon: require('./../../../assets/images/add_tag.png'),
    iconColor: brandInfo,
    text: `${localizedStrings.updateStatus.tagFriends}`
  }
];

module.exports = data;
