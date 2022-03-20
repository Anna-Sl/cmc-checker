/**
 * class NetworkDataProcessor
 */
function NetworkDataProcessor(networkDataStr) {
    if (networkDataStr == null) {
        throw "NetworkDataProcessor.initialize: networkData is null";
    }
    // console.info("NetworkDataProcessor.initialize: networkData is " + networkDataStr)

    this.networkData = JSON.parse(networkDataStr);
    this.wifiDataArray = this.networkData.wifiDataArray;

    this.detectsWifi = function (wifiName) {
        for (const wifiData of this.wifiDataArray) {
            let _wifiName_ = wifiData.SSID;
            if (wifiName === _wifiName_) {
                return true;
            }
        }
        return false;
    };

    this.detectsAnyOfWifi = function (wifiNames) {
        for (const wifiData of this.wifiDataArray) {
            let wifiName = wifiData.SSID;
            if (wifiNames.includes(wifiName)) {
                return true;
            }
        }
        return false;
    };

    this.getDetectedWifiList = function (wifiNames) {
        let detectedWifiList = [];
        for (const wifiData of this.wifiDataArray) {
            let wifiName = wifiData.SSID;
            if (wifiNames.includes(wifiName)) {
                detectedWifiList.push(wifiName);
            }
        }
        return detectedWifiList;
    };

}