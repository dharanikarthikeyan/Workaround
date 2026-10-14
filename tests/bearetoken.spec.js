import { test, expect } from '@playwright/test';
//purpose : retrive access token from response.
test('Beare token authendication', async ({ request }) => {

    const loginresponse = await request.post(
        'https://dummyjson.com/auth/login', {

        data: {
            username: 'emilys',
            password: 'emilyspass'
        }
    }

    );
    expect(loginresponse.status()).toBe(200);
    const loginbody = await loginresponse.json();
    console.log(loginbody);

    const accessToken = loginbody.accessToken
    console.log("Access token ", accessToken);

})