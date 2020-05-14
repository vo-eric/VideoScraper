import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: process.env.REACT_APP_API_KEY,
  },
});
