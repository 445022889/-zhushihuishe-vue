import api from './index'
import { axios } from '@/utils/request'

/**
 * login func
 * parameter: {
 *     username: '',
 *     password: '',
 *     remember_me: true,
 *     captcha: '12345'
 * }
 * @param parameter
 * @returns {*}
 */
export function login(parameter) {
  return axios({
    url: '/Init/index/login',
    method: 'post',
    data: parameter
  })
}

export function getSmsCaptcha(parameter) {
  return axios({
    url: api.SendSms,
    method: 'post',
    data: parameter
  })
}

export function getInfo() {
  return axios({
    url: '/Init/index/info',
    method: 'post',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'Access-Token': '1212',
    }
  })
}

export function logout() {
  return axios({
    url: '/Init/index/logout',
    method: 'post',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}