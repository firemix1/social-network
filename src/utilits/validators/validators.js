
export const maxLength = value => (value && value.length > 10) ? "Max length is 10" : undefined

export const empty = value => (value ? undefined : " ")
export const required = value => (value ? undefined : "Required")

export const composeValidators = (...validators) => value =>
    validators.reduce((error, validator) => error || validator(value), undefined)

