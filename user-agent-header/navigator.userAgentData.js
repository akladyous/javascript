// https://github.com/WICG/ua-client-hints#browser-and-os-specific-experiments

(async () => {
    const highEntropyValues = await window.navigator.userAgentData.getHighEntropyValues(
      ["platformVersion", "architecture", "bitness", "model", "uaFullVersion"]);
    const platform = highEntropyValues.platform;               // "macOS"
    const platformVersion = highEntropyValues.platformVersion; //"10_15_4"
    const architecture = highEntropyValues.architecture;       // "x86"
    const bitness = highEntropyValues.bitness;                 // "64"
    const model = highEntropyValues.model;                     // ""
    const uaFullVersion = highEntropyValues.uaFullVersion;     // "84.0.4113.0"
    
      console.log("platform : ", platform)
      console.log("platformVersion : ", platformVersion)
      console.log("architecture : ", architecture)
      console.log("bitness : ", bitness)
      console.log("model : ", model)
      console.log("uaFullVersion : ", uaFullVersion)
  })();