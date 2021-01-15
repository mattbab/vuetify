// Utilities
import { useOutlined } from '..'

// Types
import type { OutlinedProps } from '..'

describe('outlined.ts', () => {
  it.each([
    [{ outlined: true }, ['border']],
    [{ outlined: false }, []],
    [{ outlined: undefined }, []],
    [{ outlined: null }, []],
    [{ outlined: 'primary' }, ['border-primary']],
  ])('should have proper classes', (props, expected) => {
    const { outlinedClasses } = useOutlined(props as OutlinedProps)

    expect(outlinedClasses.value).toEqual(expected)
  })
})
