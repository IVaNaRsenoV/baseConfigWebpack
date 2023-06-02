import axios from 'axios';
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

it("axios", async () => {
  const mockResponse = {
    data: {
      userId: 1,
      id: 1,
      title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    }
  };
  mockedAxios.get.mockResolvedValue(mockResponse);

  const url = "https://jsonplaceholder.typicode.com/posts/1";
  const response = await mockedAxios.get(url);

  expect(mockedAxios.get).toHaveBeenCalledTimes(1);
  expect(mockedAxios.get).toHaveBeenCalledWith(url);
  expect(response.data).toEqual(mockResponse.data);
});
