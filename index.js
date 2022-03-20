{
    console.info("Start process index.js");

    function openedInPhysicalBrowser(networkDataStr) {
        console.info("index.js: openedInPhysicalBrowser: Received networkData: " + networkDataStr);
        if (CmcChecker.isDeviceInside(networkDataStr)) {
            CmcChecker.moveToInsideCmcFacultyPage();
        }
        CmcChecker.showPhysicalBrowserCongratulation();
    }

    console.info("End process index.js");
}