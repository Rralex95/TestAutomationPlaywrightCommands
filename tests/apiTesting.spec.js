import { test, expect } from '@playwright/test';

test('Api GET request', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/posts/5');
    
    expect(response.status()).toBe(200);

    console.log(await response.json());

    const responseText = await response.text();
    console.log(responseText);


    expect(responseText).toContain('nesciunt quas odio');

});

test('Api POST request', async ({ request }) => {
    const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
        data: {
            title: 'nesciunt quas odio',
            body: 'repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque',
            userId: 1,
            id: 5       
        }
    });

    expect(response.status()).toBe(201);

    console.log(await response.json());
});

test('Api PUT request', async ({ request }) => {
    const response = await request.put('https://jsonplaceholder.typicode.com/posts/5', {
        data: {
            title: 'Hola mundo',
            body: 'Hola mundo de colores',
            userId: 1,
        }
    });

    expect(response.status()).toBe(200);

    console.log(await response.json());
});

test('Api DELETE request', async ({ request }) => {
    const response = await request.delete('https://jsonplaceholder.typicode.com/posts/5', {
        data: {
            title: 'nesciunt quas odio',
            body: 'repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque',
            userId: 1
        }
    });

    expect(response.status()).toBe(200);

    console.log(await response.json());
});

test('Api PATCH request', async ({ request }) => {
    const response = await request.patch('https://jsonplaceholder.typicode.com/posts/5', {
        data: {
            title: 'nesciunt quas odio',
            body: 'repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque',
            userId: 1
        }
    });

    expect(response.status()).toBe(200);

    console.log(await response.json());
});



