export const modalStyles = {
  content: {
    top:         '50%',
    left:        '50%',
    right:       'auto',
    bottom:      'auto',
    marginRight: '-50%',
    transform:   'translate(-50%, -50%)'
  }
}

export const requestOptions = {
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  }
}

export const HOT_KEYS_MAP = {
  submit: 'enter'
}

export const EMAIL_REGEX = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/