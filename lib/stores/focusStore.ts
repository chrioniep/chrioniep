import { create } from 'zustand'

export type FocusMode = 'normal' | 'deep' | 'timed'

export interface FocusState {
  mode: FocusMode
  isActive: boolean
  whiteNoiseEnabled: boolean
  breathingPhase: 'inhale' | 'hold' | 'exhale' | 'rest'

  setMode: (mode: FocusMode) => void
  setActive: (active: boolean) => void
  toggleWhiteNoise: () => void
  setBreathingPhase: (phase: FocusState['breathingPhase']) => void
}

export const useFocusStore = create<FocusState>((set) => ({
  mode: 'normal',
  isActive: false,
  whiteNoiseEnabled: false,
  breathingPhase: 'rest',

  setMode: (mode) => set({ mode }),
  setActive: (isActive) => set({ isActive }),
  toggleWhiteNoise: () => set((s) => ({ whiteNoiseEnabled: !s.whiteNoiseEnabled })),
  setBreathingPhase: (breathingPhase) => set({ breathingPhase }),
}))
