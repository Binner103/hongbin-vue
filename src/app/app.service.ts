import axios from 'axios';
import { API_BASE_URL } from './app.config';

/**
 * 创建axios 实例
 */
export const apiHttpClient = axios.create({
  baseURL: API_BASE_URL,
});
