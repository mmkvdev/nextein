/**
 * THIS FILE IS LOADED BY WEBPACK TO REPLACE map/index.js in dev client and exported client
 */

import endpoints from '../../endpoints'
import { fetchOnce } from '../cache'
import { prefixed } from '../prefixed'

export async function metadata () {
  return (await fetchOnce(prefixed(`/${endpoints.metadata()}`))).json()
}