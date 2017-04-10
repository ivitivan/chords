const borderWidthFirstRow = '6px'
const borderWidth = '4px'
const borderColor = 'black'

export const styles = {
  name: {
    textAlign: 'center',
  },

  shape: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },

  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  col: {
    width: '50px',
    height: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottom: `${borderWidth} solid ${borderColor}`,
    position: 'relative',
    boxSizing: 'border-box',

    '&:before': {
      display: 'block',
      content: '""',
      width: '4px',
      height: '50px',
      background: borderColor,
      position: 'absolute',
      zIndex: '0',
    },

    '&:first-child:after': {
      display: 'block',
      content: '""',
      position: 'absolute',
      background: 'white',
      width: `calc(50% - ${borderWidth} / 2)`,
      height: borderWidth,
      bottom: `-${borderWidth}`,
      left: '0',
    },

    '&:last-child:after': {
      display: 'block',
      content: '""',
      position: 'absolute',
      background: 'white',
      width: `calc(50% - ${borderWidth} / 2)`,
      height: borderWidth,
      bottom: `-${borderWidth}`,
      right: '0',
    },
  },

  colFirst: {
    '&:after': {
      display: 'block',
      content: '""',
      position: 'absolute',
      background: 'white',
      width: `calc(50% - ${borderWidth} / 2)`,
      height: borderWidth,
      bottom: `-${borderWidth}`,
      left: '0',
    }
  },

  colFirstRow: {
    '&:before': {
      display: 'none',
    },
  },

  firstFret: {
    borderBottom: `${borderWidthFirstRow} solid ${borderColor}`,

    '&:before': {
      display: 'none',
    },

    '&:first-child:after': {
      display: 'block',
      content: '""',
      position: 'absolute',
      background: 'white',
      width: `calc(50% - ${borderWidth} / 2)`,
      height: borderWidthFirstRow,
      bottom: `-${borderWidthFirstRow}`,
      left: '0',
    },

    '&:last-child:after': {
      display: 'block',
      content: '""',
      position: 'absolute',
      background: 'white',
      width: `calc(50% - ${borderWidth} / 2)`,
      height: borderWidthFirstRow,
      bottom: `-${borderWidthFirstRow}`,
      right: '0',
    },
  },

  caption: {
    background: borderColor,
    color: 'white',
    borderRadius: '50%',
    width: '20px',
    height: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    zIndex: '1',
  },

  captionFirstRow: {
    background: 'white',
    border: `1px solid ${borderColor}`,
  },

  captionBarre: {
    width: '100%',
    borderRadius: 0,
  },

  captionBarreFirst: {
    width: '20px',
    borderTopLeftRadius: '50%',
    borderBottomLeftRadius: '50%',
    position: 'relative',

    '&:after': {
      display: 'block',
      content: '""',
      position: 'absolute',
      height: '20px',
      background: borderColor,
      width: '100%',
      right: '-100%',
      top: '0',
    },
  },

  captionBarreLast: {
    width: '20px',
    borderTopRightRadius: '50%',
    borderBottomRightRadius: '50%',

    '&:after': {
      display: 'block',
      content: '""',
      position: 'absolute',
      height: '20px',
      background: borderColor,
      width: '100%',
      left: '-100%',
      top: '0',
    },
  },

  x: {
    '&:after': {
      content: '"✕"',
      display: 'block',
    },
  },

  xFallback: {
    display: 'none',
  },

  base: {
    position: 'absolute',
    fontWeight: 'bold',
  },

  barre: {
    background: 'green',
  },
}

