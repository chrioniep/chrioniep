import { test, expect } from '@playwright/test'

test.describe('Session flow', () => {
  test('today dashboard loads', async ({ page }) => {
    await page.goto('/today')
    await expect(page).toHaveTitle(/onion/)
  })

  test('sign-in page is accessible', async ({ page }) => {
    await page.goto('/sign-in')
    await expect(page.locator('main')).toBeVisible()
  })
})
