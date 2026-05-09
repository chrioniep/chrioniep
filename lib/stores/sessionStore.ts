import { create } from 'zustand'

export type SessionPhase = 'idle' | 'reading' | 'recall' | 'feedback' | 'quiz' | 'break' | 'complete'

export interface SessionState {
  sessionId: string | null
  phase: SessionPhase
  currentLayer: number
  totalLayers: number
  courseId: string | null
  startedAt: number | null

  setSessionId: (id: string) => void
  setPhase: (phase: SessionPhase) => void
  setLayer: (layer: number) => void
  setCourse: (courseId: string) => void
  reset: () => void
}

const initialState = {
  sessionId: null,
  phase: 'idle' as SessionPhase,
  currentLayer: 1,
  totalLayers: 3,
  courseId: null,
  startedAt: null,
}

export const useSessionStore = create<SessionState>((set) => ({
  ...initialState,

  setSessionId: (id) => set({ sessionId: id, startedAt: Date.now() }),
  setPhase: (phase) => set({ phase }),
  setLayer: (layer) => set({ currentLayer: layer }),
  setCourse: (courseId) => set({ courseId }),
  reset: () => set(initialState),
}))
