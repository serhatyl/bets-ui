/* eslint-disable no-undef */
const fetchHelper = async <T>(url: string, options: RequestInit = {}): Promise<T> => {
  const apiBaseUrl = process.env.API_BASE_URL;

  try {
    const response = await fetch(`${apiBaseUrl}${url}`, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    // NOTE burada global bir error handling yapılabilir Sentry kullanıp loglanabilir
    console.error('Fetch error: ', error);
    throw new Error('Something went wrong with the request');
  }
};

export default fetchHelper;
