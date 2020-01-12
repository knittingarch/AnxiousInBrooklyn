import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '16px',
  bodyColor: '#292929',
  baseLineHeight: 1.5,
  baseFontWeight: 400,
  bodyFontFamily: [
    'Montserrat',
    'Helvetica Neue',
    'Segoe UI',
    'Helvetica',
    'Arial',
    'sans-serif',
  ],
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
