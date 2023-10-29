export interface FieldroutesResponse {
    params: Params
    tokenUsage: TokenUsage
    tokenLimits: TokenLimits
    requestAction: string
    endpoint: string
    success: boolean
    idName: string
    processingTime: string
    count: number
    appointmentIDs: number[]
    propertyName: string
    appointmentIDsNoDataExported: any[]
    appointments: Appointment[]
    propertyNameData: string
  }
  
  export interface Params {
    endpoint: string
    action: string
    date: string
    authenticationKey: string
    authenticationToken: string
    includeData: string
  }
  
  export interface TokenUsage {
    requestsReadToday: string
    requestsWriteToday: string
    requestsReadInLastMinute: string
    requestsWriteInLastMinute: string
  }
  
  export interface TokenLimits {
    limitReadRequestsPerMinute: number
    limitReadRequestsPerDay: number
    limitWriteRequestsPerMinute: number
    limitWriteRequestsPerDay: number
  }
  
  export interface Appointment {
    appointmentID: string
    officeID: string
    customerID: string
    subscriptionID: string
    subscriptionRegionID: string
    routeID: string
    spotID: string
    date: string
    start: string
    end: string
    timeWindow: string
    duration: string
    type: string
    dateAdded: string
    employeeID: string
    status: string
    statusText: string
    callAhead: string
    isInitial: string
    subscriptionPreferredTech: string
    completedBy?: string
    servicedBy?: string
    dateCompleted?: string
    signedByCustomer: string
    signedByTech: string
    notes?: string
    officeNotes?: string
    timeIn?: string
    timeOut?: string
    checkIn?: string
    checkOut?: string
    windSpeed?: string
    windDirection?: string
    temperature?: string
    amountCollected?: string
    paymentMethod?: string
    servicedInterior?: string
    ticketID?: string
    dateCancelled: any
    additionalTechs: any
    rescheduleReasonID: any
    reserviceReasonID: any
    appointmentNotes: string
    doInterior: string
    dateUpdated: string
    cancelledBy: any
    assignedTech: string
    latIn?: string
    latOut?: string
    longIn?: string
    longOut?: string
    sequence: string
    lockedBy: string
    originalAppointmentID: string
    unitIDs: any[]
  }
