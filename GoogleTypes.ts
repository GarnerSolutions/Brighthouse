export interface EventsListResponse {
    kind: string
    etag: string
    summary: string
    description: string
    updated: string
    timeZone: string
    accessRole: string
    defaultReminders: any[]
    nextSyncToken: string
    items: Event[]
}

export interface Event {
    kind: string
    etag: string
    id: string
    status: string
    htmlLink: string
    created: string
    updated: string
    summary: string
    creator: Creator
    organizer: Organizer
    start: Start
    end: End
    iCalUID: string
    sequence: number
    reminders: Reminders
    eventType: string
    description?: string
    location?: string
}

export interface Creator {
    email: string
    self?: boolean
}

export interface Organizer {
    email: string
    self: boolean
}

export interface Start {
    dateTime: string
    timeZone: string
}

export interface End {
    dateTime: string
    timeZone: string
}

export interface Reminders {
    useDefault: boolean
}
