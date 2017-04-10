const borderColor = 'black'

export const styles = {
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    display: 'block',
    border: 'none',
    borderBottom: `4px solid ${borderColor}`,
    width: '50%',
    fontSize: '50px',
    textAlign: 'center',
  },

  result: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
}
