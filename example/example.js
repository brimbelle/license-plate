import LicensePlate from '@brimbelle/license-plate';

// Set locale default is FR
LicensePlate.setLocale('BE');

// Create new license plate object
const licensePlate = new LicensePlate('1234-DEL', true);

// Check if license plate is valid
licensePlate.isValid()

// Get license plate formated
licensePlate.format()
