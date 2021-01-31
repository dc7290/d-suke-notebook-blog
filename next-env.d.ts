/// <reference types="next" />
/// <reference types="next/types/global" />
interface Window {
  // pageviewのため
  gtag(
    type: 'config',
    googleAnalyticsId: string,
    options: {
      page_path: string
    }
  )
  // eventのため
  gtag(
    type: 'event',
    eventAction: string,
    fieldObject: {
      event_label: string
      event_category: string
      value?: string
    }
  )
}
