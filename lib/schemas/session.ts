import { z } from 'zod'

export const SessionPhaseSchema = z.enum([
  'idle',
  'reading',
  'recall',
  'feedback',
  'quiz',
  'break',
  'complete',
])

export const SessionSchema = z.object({
  id: z.string().uuid(),
  courseId: z.string().uuid(),
  userId: z.string(),
  phase: SessionPhaseSchema,
  currentLayer: z.number().int().min(1).max(5),
  totalLayers: z.number().int().min(1).max(5),
  durationSeconds: z.number().int().nonnegative(),
  startedAt: z.string().datetime(),
  completedAt: z.string().datetime().nullable(),
  score: z.number().min(0).max(1).nullable(),
})

export type Session = z.infer<typeof SessionSchema>
export type SessionPhase = z.infer<typeof SessionPhaseSchema>

export function mockSession(overrides?: Partial<Session>): Session {
  return {
    id: crypto.randomUUID(),
    courseId: crypto.randomUUID(),
    userId: 'user_mock',
    phase: 'reading',
    currentLayer: 1,
    totalLayers: 3,
    durationSeconds: 0,
    startedAt: new Date().toISOString(),
    completedAt: null,
    score: null,
    ...overrides,
  }
}

export const CourseSchema = z.object({
  id: z.string().uuid(),
  title: z.string(),
  description: z.string().nullable(),
  layerCount: z.number().int().min(1),
  pageCount: z.number().int().nonnegative(),
  createdAt: z.string().datetime(),
  lastStudiedAt: z.string().datetime().nullable(),
  masteryScore: z.number().min(0).max(1).nullable(),
})

export type Course = z.infer<typeof CourseSchema>

export function mockCourse(overrides?: Partial<Course>): Course {
  return {
    id: crypto.randomUUID(),
    title: 'Cardiology — Section 3',
    description: 'Valvular disease, heart failure, arrhythmias.',
    layerCount: 3,
    pageCount: 48,
    createdAt: new Date().toISOString(),
    lastStudiedAt: new Date().toISOString(),
    masteryScore: 0.62,
    ...overrides,
  }
}
