export async function fetchRegions() {
  const url = 'https://eatgo-customer-api.ahastudio.com/regions';
  const response = await fetch(url);
  const data = response.json();
  return data;
}

// TODO: delete this
export function xxx() {

}
