import * as actions from './actions'
import * as types from './actionTypes'

describe('actions', () => {
    it('should create an add to cart action', () => {
        const id = '47314fa1-ae56-4eae-80be-af6691145951'
        const expectedAction = {
            type: types.ADD_TO_CART,
            id
        }
        expect(actions.addToCart(id)).toEqual(expectedAction)
    })

    it('should create an remove from cart action', () => {
        const id = '47314fa1-ae56-4eae-80be-af6691145951'
        const expectedAction = {
            type: types.REMOVE_FROM_CART,
            id
        }
        expect(actions.removeFromCart(id)).toEqual(expectedAction)
    })
})

