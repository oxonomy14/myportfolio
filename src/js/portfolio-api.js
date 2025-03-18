import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const URL = 'https://portfolio-js.b.goit.study/api/reviews';

export async function fetchReviews() {
  try {
    const response = await axios.get(URL).then(response => response.data);
    return response;
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Error fetching reviews! Помилка отримання відгуків! ',
      position: 'topRight',
    });
    return [];
  }
}
