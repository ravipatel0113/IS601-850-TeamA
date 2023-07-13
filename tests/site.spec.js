// @ts-check
const { test, expect } = require('@playwright/test');

const websiteURL = 'http://localhost:3000'; // Replace with the URL of the student's resume page

// Expected constants
const expectedTitle = 'Beans & Brews';
const expectedLogoText = 'Beans & Brews';
const expectedLinks = 3;

test.beforeEach(async ({ page }) => {
  await page.goto(websiteURL);
});

test('Check Page Title', async ({ page }) => {
  const title = await page.title();
  expect(title).toBe(expectedTitle);
});

test('Check Logo in Header', async ({ page }) => {
  const logoText = await page.locator('.logo-name').textContent();
  expect(logoText).toBe(expectedLogoText);
});

test('Check Logo Image', async ({ page }) => {
  await page.goto(websiteURL);
  await expect(page.locator('.logo img')).toBeVisible();
});

/* This test checks that the has Video. */
test('Check Video Upload', async ({ page }) => {
  await page.goto(websiteURL);
  await expect(page.locator('.video-section video')).toBeVisible();
});

/* This test checks that the profile image is visible on the page */
test('Check Snapshot Image', async ({ page }) => {
  await page.goto(websiteURL);
  await expect(page.locator('.snapshot')).toBeVisible();
});

// This test checks the snapshots has 3 links to it .
test('Check Snapshot Image Links', async ({ page }) => {
  // await page.goto(websiteURL);
  const linksCount = await page.locator('.snapshot a').count();
  expect(linksCount).toBe(expectedLinks);
});

/* This test checks that the meta description for SEO is not empty */
test('Check SEO Meta Description', async ({ page }) => {
  await page.goto(websiteURL);
  const metaDescription = await page.getAttribute('meta[name="description"]', 'content');
  await expect(metaDescription).not.toBe('');
});

/* This test checks that the meta keywords for SEO are not empty */
test('Check SEO Meta Keywords', async ({ page }) => {
  await page.goto(websiteURL);
  const metaKeywords = await page.getAttribute('meta[name="keywords"]', 'content');
  await expect(metaKeywords).not.toBe('');
});

/* This test checks that the responsive meta tag is present */
test('Check Responsive Meta Tag', async ({ page }) => {
  await page.goto(websiteURL);
  const viewportMeta = await page.getAttribute('meta[name="viewport"]', 'content');
  await expect(viewportMeta).toBe('width=device-width, initial-scale=1');
});
