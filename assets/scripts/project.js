//===========================================
//  GLOBALS
//===========================================

let _videos = [];
let _hardDisks = [];
let _ssds = [];
let _actualVideo = 0;
let _nextVideo = 0;
let _actualHardDisk = 0;
let _nextHardDisk = 0;
let _actualSSD = 0;
let _nextSSD = 0;


//===========================================
//  FUNCTIONS
//===========================================

/*
  CREATEDEVICES()
  This functions receives the type of device as parameter then gets the document element values and pushes it to the object array
*/

let createDevices = (deviceType) => {
    // new video device
    if (deviceType == 'video') {
        // And if validateForm equals true for the video
        if (validateForm('video')) {
            // targeting the DOM elements
            let supplier = document.getElementById('videoSupplierName').value;
            let serialNumber = document.getElementById('videoSerialNumber').value;
            let replacementCost = document.getElementById('videoRepCost').value;
            let resolution = document.getElementById('videoResolution');
            let selectedRes = resolution.options[resolution.selectedIndex].value;
            let type = document.getElementById('videoType');
            let selectedType = type.options[type.selectedIndex].value;
            let disable = document.getElementById('videoDisable').checked;

            // validation for the disable checkbox whether it's been checked
            if (disable === true) {
                disable = 0;
            } else {
                disable = 1;
            }






        }






    }

}