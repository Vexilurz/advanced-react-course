type Mods = Record<string, boolean | string | undefined>
type StringOrUndefined = (string | undefined)

export function classNames (
  cls: string,
  mods: Mods = {},
  additional: StringOrUndefined[] = []
): string {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([className, value]) => Boolean(value))
      .map(([className, value]) => className)
  ].join(' ')
}
