export type FieldValidatorType = (value: string) => string | undefined


export const maxLength = (max: number): FieldValidatorType => (value) =>
    value && value.length > max ? `Вы привысили лимит водимых символов максимум ${max}` : undefined

export const Required: FieldValidatorType = (value) =>
    value === undefined ? 'Вы ничего не ввели, чтобы ошибка исчезла введите что нибудь' : undefined
