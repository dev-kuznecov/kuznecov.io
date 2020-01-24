import { provide, inject } from '@vue/composition-api'

const ScrollBarSymbol = Symbol()

export function provideScrollBar(scrollbar: any) {
    provide(ScrollBarSymbol, scrollbar)
}

export function useScrollBar() {
    return inject(ScrollBarSymbol)
}