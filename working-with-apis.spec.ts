import { test, expect } from '@playwright/test';
import tags from '../test-data/tags.json'

test('Delete article', async({page, request}) => {
  const loginResponse = await request.post('https://conduit-api.bondaracademy.com/api/users/login', {
    data: {
    "user": {
        "email": "robi90@test.ro",
        "password": "welcome123123"
    }
}
  })
  expect(loginResponse.status()).toEqual(200)
  const responseLoginJSON = await loginResponse.json()
  const token = responseLoginJSON.user.token
  console.log('Your token is:' + ' ' + token)

  const newArticleResponse = await request.post('https://conduit-api.bondaracademy.com/api/articles/', {
    data: {
      "article": {
        "title": "Test Title",
        "description": "test description",
        "body": "test body",
        "tag List": []
      }
    },
    headers: {
      Authorization: `Token ${token}`
    }
  })
  expect(newArticleResponse.status()).toEqual(201)

  await page.goto('https://conduit.bondaracademy.com/')
  await page.getByText('Sign in').click()
  await page.getByRole('textbox', {name: 'Email'}).fill('robi90@test.ro')
  await page.getByRole('textbox', {name: 'Password'}).fill('welcome123123')
  await page.getByRole('button', {name: 'Sign in'}).click()

  await expect(page.locator('.preview-link h1').first()).toContainText('Test Title')
  await page.getByText('Test Title').click()
  await page.getByRole('button', {name: 'Delete Article'}).first().click()
  await page.waitForResponse('https://conduit-api.bondaracademy.com/api/articles?limit=10&offset=0')
  await expect(page.locator('.preview-link h1').first()).not.toContainText('Test Title')
 
  await page.close()
})
