import { test, expect } from '@playwright/test';

test('verify katakana trainer functionality and new fixes', async ({ page }) => {
  await page.goto('http://localhost:3000');

  // Home Screen
  await page.screenshot({ path: 'screenshots/home_screen_v2.png' });

  // Start Quiz
  await page.click('.start-button');
  await page.waitForSelector('.flashcard-section');

  // Verify ESC key closes modal
  await page.click('#show-cheat-sheet-btn');
  await page.waitForSelector('.cheat-sheet.modal');
  await page.keyboard.press('Escape');
  await expect(page.locator('.cheat-sheet.modal')).not.toBeVisible();

  // Submit incorrect answer to see feedback and check for animation/overlap
  await page.fill('#answer-input', 'incorrect_answer');
  await page.keyboard.press('Enter');

  const feedback = page.locator('#feedback');
  await expect(feedback).toHaveClass(/show/);
  await page.waitForTimeout(500); // Wait for animation
  await page.screenshot({ path: 'screenshots/feedback_animation_show.png' });

  // Answer correctly to 10 questions to reach results screen
  // We can just keep typing the correct answer if we know it.
  // Or we can just type 'incorrect' twice and then the correct answer.
  // Actually, 'handleSubmit' in App.tsx gives the answer in the message if wrong.

  for (let i = 0; i < 10; i++) {
    // Type something wrong to get the answer
    await page.fill('#answer-input', 'xyz');
    await page.keyboard.press('Enter');

    // The feedback message contains the answer: `Wrong! ${currentWord.katakana} is "${currentWord.answer}".`
    const feedbackText = await feedback.innerText();
    const match = feedbackText.match(/"([^"]+)"/);
    if (match) {
      const answer = match[1];
      await page.fill('#answer-input', answer);
      await page.keyboard.press('Enter');
    }
    // Wait for animation to next card
    await page.waitForTimeout(1000);
  }

  // Verify Results Screen
  await page.waitForSelector('.results');
  await page.screenshot({ path: 'screenshots/results_screen_v2.png' });

  // Verify Enter key triggers Try Again
  await page.keyboard.press('Enter');
  // Should be back at start or quiz (depending on if it restarts immediately)
  // handleStartQuiz sets view to 'quiz'
  await page.waitForSelector('.flashcard-section');
  await expect(page.locator('.progress')).toBeVisible();
  await page.screenshot({ path: 'screenshots/restarted_quiz.png' });
});
