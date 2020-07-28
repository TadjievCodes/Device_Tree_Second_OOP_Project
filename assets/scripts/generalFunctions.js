//===========================================
//  GENERAL FUNCTIONS
//===========================================

/*
  populateDevices()
  This function populates the arrays with objects to make the tests kinda easy.
  This function is loaded on the body onload()
*/


let populateDevices = () => {
    let video1 = _videos.push(new VideoDevice(25, 'LG', 'LG151412141', 1, 'hd', 'CRT'));
    let video2 = _videos.push(new VideoDevice(25, 'Samsung', 'SS251441', 1, 'hd', 'LCD'));
    let video3 = _videos.push(new VideoDevice(25, 'ACER', 'AC25111211', 1, 'fullhd', 'CRT'));
    let video4 = _videos.push(new VideoDevice(25, 'Sony', 'SN1254111', 1, '4k', 'LED'));
    let video5 = _videos.push(new VideoDevice(25, 'Toshiba', 'TB2544459666', 1, '4k', 'LED'));

    let harddisk1 = _hardDisks.push(new HardDisk(25, 'Seagate', 'SG2223232', 1, '250 GB', '7200', '25inch', '1'));
    let harddisk2 = _hardDisks.push(new HardDisk(25, 'Toshiba', 'TB2544459666', 1, '1 TB', '5400', '25inch', '1'));
    let harddisk3 = _hardDisks.push(new HardDisk(25, 'Transcend', 'TC4411-AA', 1, '250 GB', '7200', '35inch', '2'));
    let harddisk4 = _hardDisks.push(new HardDisk(25, 'Seagate', 'SG12091212', 1, '2 TB', '7200', '35inch', '2'));
    let harddisk5 = _hardDisks.push(new HardDisk(25, 'LG', 'LG3215525', 1, '500 GB', '5400', '25inch', '1'));

    let ssd1 = _ssds.push(new SSD(20, 'Seagate', 'SG2223232', 1, '250 GB', 'Transfer', 'SATA', '30'));
    let ssd2 = _ssds.push(new SSD(20, 'Toshiba', 'TB2544459666', 1, '1 TB', 'Transfer', 'PCIe', '45'));
    let ssd3 = _ssds.push(new SSD(20, 'Toshiba', 'TB2520199696', 1, '250 GB', 'Transfer', 'SATA', '12'));
    let ssd4 = _ssds.push(new SSD(20, 'Seagate', 'SG12091212', 1, '1 TB', 'Transfer', 'PCIe', '30'));
    let ssd5 = _ssds.push(new SSD(20, 'LG', 'LG3215525', 1, '1 TB', 'Transfer', 'mSATA', '35'));
}



/*
  validateForm()
  This function validates the form and returns a boolean value
*/
let validateForm = (form) => {
        //Validate Video Form
        if (form == "video") {
            if (document.getElementById('videoSupplierName').value == '') { //Video Supplier Name
                window.alert("Video Supplier Name has to be filled. Try again");
                document.getElementById('videoSupplierName').focus();
            } else if (document.getElementById('videoSerialNumber').value == '') { //Video Serial number
                window.alert("Video Serial Number has to be filled. Try again");
                document.getElementById('videoSerialNumber').focus();
            } else if (document.getElementById('videoRepCost').value == '') { //Video Replacement Cost
                window.alert("Video Replacement Cost has to be filled. Try again");
                document.getElementById('videoRepCost').focus();
            } else if (document.getElementById('videoResolution').value == '') { //Video Resolution
                window.alert("Video Resolution has to be filled. Try again");
                document.getElementById('videoResolution').focus();
            } else if (document.getElementById('videoType').value == '') { //Video Type
                window.alert("Video Resolution has to be filled. Try again");
                document.getElementById('videoType').focus();
            } else {
                return true;
            }
        } else if (form == "hardDisk") {
            if (document.getElementById('hdSupplierName').value == '') { //HD Supplier Name
                window.alert("Hard Disk Supplier Name has to be filled. Try again");
                document.getElementById('hdSupplierName').focus();
            } else if (document.getElementById('hdSerialNumber').value == '') { //HD Serial number
                window.alert("Hard Disk Serial Number has to be filled. Try again");
                document.getElementById('hdSerialNumber').focus();
            } else if (document.getElementById('hdRepCost').value == '') { //HD Replacement Cost
                window.alert("Hard Disk Replacement Cost has to be filled. Try again");
                document.getElementById('hdRepCost').focus();
            } else if (document.getElementById('hdSize').value == '') { //HD Size
                window.alert("Hard Disk Size has to be filled. Try again");
                document.getElementById('hdSize').focus();
            } else if (document.getElementById('hdTransferRate').value == '') { //HD Transfer Rate
                window.alert("Hard Disk Transfer Rate has to be filled. Try again");
                document.getElementById('hdTransferRate').focus();
            } else if (document.getElementById('hdPlatterSize').value == '') { //HD Platter Size
                window.alert("Hard Disk Platter Size has to be filled. Try again");
                document.getElementById('hdPlatterSize').focus();
            } else if (document.getElementById('hdNumberPlatters').value == '') { //HD Number of Plattes
                window.alert("Hard Disk Number of Plattes has to be filled. Try again");
                document.getElementById('hdNumberPlatters').focus();
            } else {
                return true;
            }
        } else if (form == "ssd") {
            if (document.getElementById('ssdSupplierName').value == '') { //SSD Supplier Name
                window.alert("SSD Supplier Name has to be filled. Try again");
                document.getElementById('ssdSupplierName').focus();
            } else if (document.getElementById('ssdSerialNumber').value == '') { //SSD Serial number
                window.alert("SSD Serial Number has to be filled. Try again");
                document.getElementById('ssdSerialNumber').focus();
            } else if (document.getElementById('ssdRepCost').value == '') { //SSD Replacement Cost
                window.alert("SSD Replacement Cost has to be filled. Try again");
                document.getElementById('ssdRepCost').focus();
            } else if (document.getElementById('ssdSize').value == '') { //SSD Size
                window.alert("SSD Size has to be filled. Try again");
                document.getElementById('ssdSize').focus();
            } else if (document.getElementById('ssdTransferRate').value == '') { //SSD Transfer Rate
                window.alert("SSD Transfer Rate has to be filled. Try again");
                document.getElementById('ssdTransferRate').focus();
            } else if (document.getElementById('ssdType').value == '') { //SSD Type
                window.alert("SSD Type has to be filled. Try again");
                document.getElementById('ssdType').focus();
            } else if (document.getElementById('ssdWearLeveling').value == '') { //SSD Wear Leveling
                window.alert("SSD Wear Leveling has to be filled. Try again");
                document.getElementById('ssdWearLeveling').focus();
            } else {
                return true;
            }
        }
    } //End of validateForm()



/*
  clearDeviceInput()
  This functions gets the document element and sets its to the default value
*/



let clearDeviceInput = (deviceType) => {

        if (deviceType == "video") {
            document.getElementById('videoSupplierName').value = "";
            document.getElementById('videoSerialNumber').value = "";
            document.getElementById('videoRepCost').value = "";
            document.getElementById('videoResolution').value = "";
            document.getElementById('videoType').value = "";
            document.getElementById('videoDisable').checked = false;
            _actualVideo = 0; //Reset video array index
            _nextVideo = 0; //Reset video array index
            document.getElementById("nextVideo").disabled = false; //Enables the next button
            document.getElementById("previousVideo").disabled = true; //Disables the previous button

        } else if (deviceType == "hardDisk") {
            document.getElementById('hdSupplierName').value = "";
            document.getElementById('hdSerialNumber').value = "";
            document.getElementById('hdRepCost').value = "";
            document.getElementById('hdSize').value = "";
            document.getElementById('hdTransferRate').value = "";
            document.getElementById('hdPlatterSize').value = "";
            document.getElementById('hdNumberPlatters').value = "";
            document.getElementById('hdDisable').checked = false;
            _actualHardDisk = 0; //Reset hard disk array index
            _nextHardDisk = 0; //Reset hard disk array index
            document.getElementById("nextHd").disabled = false; //Enables the next button
            document.getElementById("previousHd").disabled = true; //Disables the previous button
        } else if (deviceType == "ssd") {
            document.getElementById('ssdSupplierName').value = "";
            document.getElementById('ssdSerialNumber').value = "";
            document.getElementById('ssdRepCost').value = "";
            document.getElementById('ssdSize').value = "";
            document.getElementById('ssdTransferRate').value = "";
            document.getElementById('ssdType').value = "";
            document.getElementById('ssdWearLeveling').value = "";
            document.getElementById('ssdDisable').checked = false;
            _actualSSD = 0; //Reset SSD array index
            _nextSSD = 0; //Reset SSD array index
            document.getElementById("nextSSD").disabled = false; //Enables the next button
            document.getElementById("previousSSD").disabled = true; //Disables the previous button
        }
    } //End of clearDeviceInput()



/*
  fillInputs()
  This function gets the data from an array and sets the input values
*/



let fillInputs = (device, array, index) => {
        if (device == 'video') {
            document.getElementById('videoSupplierName').value = array[index]._supplierName;
            document.getElementById('videoSerialNumber').value = array[index]._serialNumber;
            document.getElementById('videoRepCost').value = array[index]._replacementCost;
            document.getElementById('videoResolution').value = array[index]._resolution;
            document.getElementById('videoType').value = array[index]._type;
            if (array[index]._status === 1) {
                document.getElementById('videoDisable').checked = false;
            } else {
                document.getElementById('videoDisable').checked = true;
            }

        }
        if (device == 'hardDisk') {
            document.getElementById('hdSupplierName').value = array[index]._supplierName;
            document.getElementById('hdSerialNumber').value = array[index]._serialNumber;
            document.getElementById('hdRepCost').value = array[index]._replacementCost;
            document.getElementById('hdSize').value = array[index]._size;
            document.getElementById('hdTransferRate').value = array[index]._transferRate;
            document.getElementById('hdPlatterSize').value = array[index]._platterSize;
            document.getElementById('hdNumberPlatters').value = array[index]._numberOfPlatters;
            if (array[index]._status === 1) {
                document.getElementById('hdDisable').checked = false;
            } else {
                document.getElementById('hdDisable').checked = true;
            }
        }
        if (device == 'ssd') {
            document.getElementById('ssdSupplierName').value = array[index]._supplierName;
            document.getElementById('ssdSerialNumber').value = array[index]._serialNumber;
            document.getElementById('ssdRepCost').value = array[index]._replacementCost;
            document.getElementById('ssdSize').value = array[index]._size;
            document.getElementById('ssdTransferRate').value = array[index]._transferRate;
            document.getElementById('ssdType').value = array[index]._type;
            document.getElementById('ssdWearLeveling').value = array[index]._wearLeveling;
            if (array[index]._status === 1) {
                document.getElementById('ssdDisable').checked = false;
            } else {
                document.getElementById('ssdDisable').checked = true;
            }
        }
    } // End of fillInputs()