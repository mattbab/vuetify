// Utilities
import { computed } from 'vue'
import { convertToUnit } from '@/util/helpers'
import propsFactory from '@/util/propsFactory'

// Types
export interface PositionProps {
  bottom?: boolean | string
  left?: boolean | string
  position?: string
  right?: boolean | string
  top?: boolean | string
}

// Composables
export const makePositionProps = propsFactory({
  bottom: [Boolean, String],
  left: [Boolean, String],
  position: String,
  right: [Boolean, String],
  top: [Boolean, String],
})

export function usePosition (props: PositionProps) {
  const targets = ['top', 'right', 'bottom', 'left'] as const

  const positionClasses = computed(() => {
    const classes: string[] = []

    if (!props.position) return classes

    classes.push(`position-${props.position}`)

    return classes
  })

  const positionStyles = computed(() => {
    const styles: Partial<Record<typeof targets[number], string>> = {}

    for (const target of targets) {
      const prop = props[target]

      if (prop == null || prop === false) continue

      styles[target] = convertToUnit(prop === true ? '0' : String(prop))
    }

    return styles
  })

  return { positionClasses, positionStyles }
}
