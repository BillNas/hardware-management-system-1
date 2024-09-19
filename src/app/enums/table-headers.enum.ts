export enum CarrierTableHeaders {
    ID = 'ID',
    name = 'Φορέας',
    units ='Αριθμός Μονάδων',
    actions = 'Επιλογές',
  }
  
  export enum ItemColumnNames {
    carrierName = 'Φορέας',
    aUnitName = 'Διοικητική Μονάδα',
    deviceName = 'Όνομα Συσκευής',
    model = 'Μοντέλο',
    serialNumber = 'Σειριακός Αριθμός',
    ram = 'RAM',
    actions = 'Ενέργειες',
    checkDateTime = 'Ημερομηνία Έλεγχου',
    employeeLastName = 'Επώνυμο Υπαλλήλου',
    employeeFirstName = 'Όνομα Υπαλλήλου',
    email = 'Email',
    phoneType = 'Τύπος τηλεφώνου',
    address = 'Διεύθυνση',
    printerType = 'Τύπος εκτυπωτή',
    personalPhone = 'Αριθμός Τηλεφώνου',
    operatingSystem = 'Λειτουργικού Σύστημα',
    networkEquipmentType = 'Τύπος δικτυακού εξοπλισμού',
    networkEquipmentIP = 'Τύπος IP',
    networkDisk = 'Δικτυακός δίσκος',
    diskRotations = 'Συστοιχία',
    ssd = 'Δίσκος SSD',
    serverDiskType = 'Τύπος δίσκου server',
    department = 'Τμήμα',
    city = 'Πόλη',
    actionType = 'Τύπος Ενέργειας',
    username = 'Όνομα Χρήστη',
    comments = 'Σχόλια',

  }
  
  export enum UserTableHeaders {
    userName= 'Όνομα Χρήστη',
    email= 'Email',
    carrier= 'Διαχειριστής Φορέα',
    active = 'Κατάσταση',
    roles= 'Ρόλος',
    actions= 'Επιλογές',
  }