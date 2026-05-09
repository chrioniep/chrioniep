import { create } from 'zustand'

export type TimerStatus = 'idle' | 'running' | 'paused' | 'done'

const POMODORO_DURATION = 25 * 60  // 25 minutes in seconds
const BREAK_DURATION    = 5 * 60   // 5 minutes in seconds

export interface TimerState {
  duration: number
  remaining: number
  status: TimerStatus
  pomodoroCount: number
  isBreak: boolean

  start: () => void
  pause: () => void
  resume: () => void
  tick: () => void
  reset: (duration?: number) => void
  startBreak: () => void
}

export const useTimerStore = create<TimerState>((set, get) => ({
  duration: POMODORO_DURATION,
  remaining: POMODORO_DURATION,
  status: 'idle',
  pomodoroCount: 0,
  isBreak: false,

  start: () => set({ status: 'running' }),
  pause: () => set({ status: 'paused' }),
  resume: () => set({ status: 'running' }),

  tick: () => {
    const { remaining, status, pomodoroCount } = get()
    if (status !== 'running') return

    if (remaining <= 1) {
      set({
        remaining: 0,
        status: 'done',
        pomodoroCount: pomodoroCount + 1,
      })
    } else {
      set({ remaining: remaining - 1 })
    }
  },

  reset: (duration = POMODORO_DURATION) =>
    set({ duration, remaining: duration, status: 'idle', isBreak: false }),

  startBreak: () =>
    set({
      duration: BREAK_DURATION,
      remaining: BREAK_DURATION,
      status: 'running',
      isBreak: true,
    }),
}))
