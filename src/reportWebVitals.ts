import {ReportHandler} from 'web-vitals'

const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then((checks) => {
      checks.getCLS(onPerfEntry)
      checks.getFID(onPerfEntry)
      checks.getFCP(onPerfEntry)
      checks.getLCP(onPerfEntry)
      checks.getTTFB(onPerfEntry)
    })
  }
}

export default reportWebVitals
