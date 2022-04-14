import { getRequest } from '../common/requests'

export function getAllProduct() {
    return getRequest('/products')
}
