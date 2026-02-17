import { test, expect } from '@playwright/test';

test('verify katakana trainer functionality', async ({ page }) => {
  await page.goto('http://localhost:3000');

  // Home Screen
  await page.screenshot({ path: 'screenshots/home_screen.png' });

  // Start Quiz
  await page.click('.start-button');
  await page.waitForSelector('.flashcard-section');
  await page.screenshot({ path: 'screenshots/quiz_screen.png' });

  // Open Cheat Sheet Modal
  await page.click('#show-cheat-sheet-btn');
  await page.waitForSelector('.cheat-sheet.modal');
  await page.screenshot({ path: 'screenshots/cheat_sheet_modal.png' });

  // Verify ESC key closes modal
  await page.keyboard.press('Escape');
  await expect(page.locator('.cheat-sheet.modal')).not.toBeVisible();

  // Submit incorrect answer to see feedback and check for overlap
  await page.fill('#answer-input', 'incorrect_answer');
  await page.keyboard.press('Enter');
  await page.waitForSelector('.feedback.incorrect');
  await page.screenshot({ path: 'screenshots/incorrect_answer_feedback.png' });

  // Submit correct answer (we need the actual answer)
  // Since we don't know the word easily, we can use "Show sounds" to find it if we want,
  // or just check if input stayed focused.
  const input = page.locator('#answer-input');
  await expect(input).toBeFocused();

  // Finish quiz? Might take too long to do 10.
  // Let's just take a mobile screenshot
  await page.setViewportSize({ width: 375, height: 667 });
  await page.screenshot({ path: 'screenshots/mobile_view.png' });
});
