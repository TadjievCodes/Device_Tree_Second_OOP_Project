//===========================================
//  CLASSES
//===========================================

class Device {
    constructor(replacementCost, supplierName, serialNumber, status) {
        this._replacementCost = replacementCost;
        this._supplierName = supplierName;
        this._serialNumber = serialNumber;
        this._status = status;
    }

    get status() {
        return this._status;
    }

    set status(value) {
        return this._status = value;
    }

    enable() {
        return this._status = 1;
    }

    disable() {
        return this._status = 0;
    }
}

class VideoDevice extends Device {
    constructor(replacementCost, supplierName, serialNumber, status, resolution, type) {
        super(replacementCost, supplierName, serialNumber, status);
        this._resolution = resolution;
        this._type = type;
    }
}

class DiskDevice extends Device {
    constructor(replacementCost, supplierName, serialNumber, status, size, transferRate) {
        super(replacementCost, supplierName, serialNumber, status);
        this._size = size;
        this._transferRate = transferRate;
    }
}

class HardDisk extends DiskDevice {
    constructor(replacementCost, supplierName, serialNumber, status, size, transferRate, platterSize, numberOfPlatters) {
        super(replacementCost, supplierName, serialNumber, status, size, transferRate);
        this._platterSize = platterSize;
        this._numberOfPlatters = numberOfPlatters;
    }
}

class SSD extends DiskDevice {
    constructor(replacementCost, supplierName, serialNumber, status, size, transferRate, type, wearLeveling) {
        super(replacementCost, supplierName, serialNumber, status, size, transferRate);
        this._type = type;
        this._wearLeveling = wearLeveling;
    }
}