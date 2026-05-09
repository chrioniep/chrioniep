import { http, HttpResponse } from 'msw'
import { mockSession, mockCourse } from '@/lib/schemas/session'

export const handlers = [
  /* Sessions */
  http.get('/api/sessions/:id', ({ params }) => {
    return HttpResponse.json(mockSession({ id: params['id'] as string }))
  }),

  http.post('/api/sessions', () => {
    return HttpResponse.json(mockSession(), { status: 201 })
  }),

  http.patch('/api/sessions/:id', async ({ params, request }) => {
    const body = await request.json() as Record<string, unknown>
    return HttpResponse.json(mockSession({ id: params['id'] as string, ...body }))
  }),

  /* Courses */
  http.get('/api/courses', () => {
    return HttpResponse.json([
      mockCourse({ title: 'Cardiology — Section 3' }),
      mockCourse({ title: 'Renal Physiology' }),
      mockCourse({ title: 'Pharmacology: Antibiotics' }),
    ])
  }),

  http.get('/api/courses/:id', ({ params }) => {
    return HttpResponse.json(mockCourse({ id: params['id'] as string }))
  }),

  /* Today's plan */
  http.get('/api/today', () => {
    return HttpResponse.json({
      sessions: [mockSession(), mockSession({ phase: 'idle' })],
      totalMinutes: 50,
      completedMinutes: 0,
    })
  }),
]
