export const maxLength = max => value =>
    value && value.length > max ? `Вы привысили лимит водимых символов максимум ${max}` : undefined

export const Required = value =>
    value === undefined ? 'Вы ничего не ввели, чтобы ошибка исчезла введите что нибудь' : undefined