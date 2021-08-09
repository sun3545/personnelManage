import request from '@/router/axios'

export function fetchList(query) {
  return request({
    url: '/admin/customer/page',
    method: 'get',
    params: query
  })
}

export function addObj(obj) {
  return request({
    url: '/admin/customer',
    method: 'post',
    data: obj
  })
}

export function getObj(id) {
  return request({
    url: '/admin/customer/' + id,
    method: 'get'
  })
}

export function delObj(id) {
  return request({
    url: '/admin/customer/' + id,
    method: 'delete'
  })
}

export function putObj(obj) {
  return request({
    url: '/admin/customer',
    method: 'put',
    data: obj
  })
}
