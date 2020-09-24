export const deviceChecker = userAgent => {
  // Simple UA string search
  const find = needle => {
    return new RegExp(needle, "i").test(userAgent);
  };

  const findSimple = needle => {
    return userAgent.indexOf(needle) !== -1;
  };

  let device;
  let platform;

  const platforms = [
    "(mobile;",
    "(tablet;",
    "windows",
    "blackberry",
    "bb10",
    "rim",
    "android",
    "iphone",
    "ipod",
    "ipad",
    "meego",
    "googletv",
    "viera",
    "smarttv",
    "internet.tv",
    "netcast",
    "nettv",
    "appletv",
    "boxee",
    "kylo",
    "roku",
    "dlnadoc",
    "pov_tv",
    "hbbtv",
    "ce-html",
  ];

  for (let i = 0; i < platforms.length; i++) {
    if (i <= 1) {
      if (findSimple(platforms[i])) {
        platform = findSimple("; rv:") ? "FXOS" : "DESKTOP";
        break;
      }
    } else if (find(platforms[i])) {
      platform = platforms[i];
      break;
    }
  }

  switch (platform) {
    case "FXOS":
      device = find("mobile") ? "FXOS_PHONE" : find("tablet") ? "FXOS_TABLET" : "DESKTOP";
      break;
    case "windows":
      device = find("phone") ? "WINDOWS_PHONE" : find("touch") ? "WINDOWS_TABLET" : "DESKTOP";
      break;
    case "android":
      device = find("mobile") ? "ANDROID_PHONE" : "ANDROID_TABLET";
      break;
    case "blackberry":
    case "bb10":
    case "rim":
      device = find("tablet") ? "BLACKBERRY_TABLET" : "BLACKBERRY_PHONE";
      break;
    case "ipad":
      device = "I_PAD";
      break;
    case "iphone":
      device = "I_PHONE";
      break;
    case "ipod":
      device = "I_POD";
      break;
    case "googletv":
      device = "GOOGLE_TV";
      break;
    case "viera":
      device = "VIERA";
      break;
    case "smarttv":
      device = "SMART_TV";
      break;
    case "internet.tv":
      device = "INTERNET_TV";
      break;
    case "netcast":
      device = "NET_CAST";
      break;
    case "nettv":
      device = "NET_TV";
      break;
    case "appletv":
      device = "APPLE_TV";
      break;
    case "boxee":
      device = "BOXEE";
      break;
    case "kylo":
      device = "KYLO";
      break;
    case "roku":
      device = "ROKU";
      break;
    case "dlnadoc":
      device = "DLNA_DOC";
      break;
    case "pov_tv":
      device = "POV_TV";
      break;
    case "hbbtv":
      device = "HBB_TV";
      break;
    case "html":
      device = "CE_HTML";
      break;
    default:
      device = "DESKTOP";
      break;
  }

  return device;
};

console.log("ТестовыйТест")
