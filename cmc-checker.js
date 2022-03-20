/**
 * class CmcChecker
 */
const CmcChecker = {

    detectedWifiList: null,

    isDeviceInside: function (networkData) {
        let networkDataProcessor = new NetworkDataProcessor(networkData);
        if (networkDataProcessor.detectsAnyOfWifi(cmcWifiNames)) {
            let detectedWifiList = networkDataProcessor.getDetectedWifiList(cmcWifiNames);
            this.detectedWifiList = detectedWifiList;
            // console.info("CmcChecker.isDeviceInside: The device is on CMC territory. Detected next CMC Wi-Fi networks: " + detectedWifiList);
            return true;
        }
        console.info("CmcChecker.isDeviceInside: No CMC network is detected. Means the device is NOT on CMC territory.");
        return false;
    },

    showDetectedWifiList: function(detectedWifiList) {
        // console.info("CmcChecker.showDetectedWifiList: Detected next CMC Wi-Fi networks: " + detectedWifiList);
        document.getElementById("detectedWifiList").innerText = detectedNextWifiListMessage + detectedWifiList;
    },

    showPhysicalBrowserCongratulation: function () {
        document.getElementById("physicalBrowserCongratulation").innerText = physicalBrowserCongratulation;
    },

    moveToInsideCmcFacultyPage: function() {
        console.info("CmcChecker.moveToInsideCmcFacultyPage: Redirection to faculty-cmc-checker/inside-cmc-faculty.html");
        location.replace("/faculty-cmc-checker/inside-cmc-faculty.html");
        console.info("CmcChecker.moveToInsideCmcFacultyPage: Redirection is finished");
    }

};