export type FieldValidatorType = (value: string) => string | undefined


export const maxLength = (max: number): FieldValidatorType => (value) =>
    value && value.length > max ? `Вы привысили лимит водимых символов максимум ${max}` : undefined

export const Required: FieldValidatorType = (value) =>
    value === undefined ? 'Вы ничего не ввели' : undefined

export const minLength = (min: number): FieldValidatorType => (value) =>
    value && value.length < min ? `Вы не можете ввести меньше ${min} символов` : undefined

export const Nothing: FieldValidatorType = (value) =>
    value === '' ? 'Вы ничего не ввели' : undefined