// @ts-check
import { test, expect } from '@playwright/test';

test.only('Retrive api key from catapi endpoints',async({request})=>{

  const response = await request.get('https://api.thecatapi.com/v1/images/search',
    {
      headers:{
                   'x-api-key': 'live_PImeEKWo6W0BHK0n5EZlaq8l3opnik5ZhKguE7C0sytig50eHM4wQRuPXAsDxnuO'
      }
    }
  );

  expect(response.status()).toBe(200);
  const responsebody = await response.json();
  console.log(responsebody);

      expect(Array.isArray(responsebody)).toBeTruthy();
      expect(responsebody.length).toBeGreaterThan(0);
      expect(responsebody[0]).toHaveProperty('id');
      

});
