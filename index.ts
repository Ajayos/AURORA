import makeWASocket from './Socket'

export * from './Proto'
export * from './Utils'
export * from './Types'
export * from './Store'
export * from './Defaults'
export * from './Binary'

export type WASocket = ReturnType<typeof makeWASocket>

export default makeWASocket