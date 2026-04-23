import { test, expect } from '@playwright/test';

test('Api GET request', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/posts/2');
    
    expect(response.status()).toBe(200);

    console.log(await response.json());

    const responseText = await response.text();
    console.log(responseText);


    expect(responseText).toContain('qui est esse');

});

test('Api POST request', async ({ request }) => {
    const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
        data: {
            title: 'quam voluptatibus rerum veritatis',
            body: 'nobis facilis odit tempore cupiditate quia\nassumenda doloribus rerum qui ea\nillum et qui totam\naut veniam repellendus',
            userId: 8
        }
    });

    expect(response.status()).toBe(201);

    console.log(await response.json());
});

test('Api PUT request', async ({ request }) => {
    const response = await request.put('https://jsonplaceholder.typicode.com/posts/2', {
        data: {
            title: 'quam voluptatibus rerum veritatis',
            body: 'nobis facilis odit tempore cupiditate quia\nassumenda doloribus rerum qui ea\nillum et qui totam\naut veniam repellendus',
            userId: 8
        }
    });

    expect(response.status()).toBe(200);

    console.log(await response.json());
});

    
