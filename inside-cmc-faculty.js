{
    console.info("Start process inside-cmc-faculty.js");

    function openedInPhysicalBrowser(networkDataStr) {
        console.info("inside-cmc-faculty.js: openedInPhysicalBrowser: Received networkData: " + networkDataStr);
        let networkDataProcessor = new NetworkDataProcessor(networkDataStr);
        let detectedWifiList = networkDataProcessor.getDetectedWifiList(cmcWifiNames);
        CmcChecker.detectedWifiList = detectedWifiList;
        CmcChecker.showDetectedWifiList(detectedWifiList);
        CmcChecker.showPhysicalBrowserCongratulation();
    }

    console.info("End process inside-cmc-faculty.js");
}