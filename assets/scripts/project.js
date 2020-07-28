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

                // Pushes the data into the object Class Constructor created array
                let videoDevice = _videos.push(new VideoDevice(parseInt(replacementCost), supplier, serialNumber, disable, selectedRes, selectedType));
                window.alert('Video device created succesfully!');

                clearDeviceInput('video'); // Clear inputs accordingly 

                document.getElementById('videoSupplierName').focus(); // Directs Focus to the first field

                /* console. table() allows to display data in the console in a nice tabular format. 
                It comes in very handy when having to visualize complex arrays or objects */
                console.table(_videos); // Console the array to see the values

            }
        }


        // new hard disk device
        else if (deviceType == 'hardDisk') {
            if (validateForm('hardDisk')) {
                let supplier = document.getElementById('hdSupplierName').value;
                let serialNumber = document.getElementById('hdSerialNumber').value;
                let replacementCost = document.getElementById('hdRepCost').value;
                let size = document.getElementById('hdSize');
                let selectedSize = size.options[size.selectedIndex].value;
                let transferRate = document.getElementById('hdTransferRate').value;
                let platterSize = document.getElementById('hdPlatterSize');
                let selectedPlatterSize = platterSize.options[platterSize.selectedIndex].value;
                let numberPlatters = document.getElementById('hdNumberPlatters').value;
                let disable = document.getElementById('hdDisable').checked;

                if (disable === true) {
                    disable = 0;
                } else {
                    disable = 1;
                }

                //Push the data into the object array 
                let hardDiskDevice = _hardDisks.push(new HardDisk(parseInt(replacementCost), supplier, serialNumber, disable, selectedSize, transferRate, selectedPlatterSize, numberPlatters));

                clearDeviceInput('hardDisk'); // Clear inputs

                document.getElementById('hdSupplierName').focus(); // Focus to the first field again

                console.table(_hardDisks); // Console the array
            }
        }



        // new ssd device
        else if (deviceType == 'ssd') {
            if (validateForm('ssd')) {
                let supplier = document.getElementById('ssdSupplierName').value;
                let serialNumber = document.getElementById('ssdSerialNumber').value;
                let replacementCost = document.getElementById('ssdRepCost').value;
                let size = document.getElementById('ssdSize');
                let selectedSize = size.options[size.selectedIndex].value;
                let transferRate = document.getElementById('ssdTransferRate').value;
                let type = document.getElementById('ssdType');
                let selectedType = type.options[type.selectedIndex].value;
                let wearLeveling = document.getElementById('ssdWearLeveling').value;
                let disable = document.getElementById('ssdDisable').checked;

                if (disable === true) {
                    disable = 0;
                } else {
                    disable = 1;
                }

                let hardDiskDevice = _ssds.push(new SSD(parseInt(replacementCost), supplier, serialNumber, disable, selectedSize, transferRate, selectedType, wearLeveling)); //Push the data into the object array
                window.alert("SSD device created succesfully!");

                clearDeviceInput('ssd'); //Clear inputs

                document.getElementById('ssdSupplierName').focus(); //Focus to the first field

                console.table(_ssds); //Console the array
            }
        }


    } // End of the function createDevices() closing bracket