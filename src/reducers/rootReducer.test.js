import rootReducer from './rootReducer'
import {ADD_TO_CART, REMOVE_FROM_CART} from '../actionTypes'
import data from '../data.json'

describe('cart reducer', () => {
    

    it('should return the inital state', () => {
        expect(rootReducer(undefined, {})).toEqual(
            {
                products: data.products,
                cartItems: {},
                cartValue: 0.00,
                discountApplied: false,
                discountAmount: 0
            }
        )
    })

    it('should handle adding an item to the cart', () => {
        expect(rootReducer({}, {
            type: ADD_TO_CART,
            id: '47314fa1-ae56-4eae-80be-af6691145951'
        })).toEqual({
            cartItems: {'47314fa1-ae56-4eae-80be-af6691145951': 1},
            cartValue: '0.00'
        })


        expect(rootReducer({
            cartItems: {'47314fa1-ae56-4eae-80be-af6691145951': 1},
            cartValue: '0.00'
        }, {
            type: ADD_TO_CART,
            id: '47314fa1-ae56-4eae-80be-af6691145951'
        })).toEqual({
            cartItems: {'47314fa1-ae56-4eae-80be-af6691145951': 2},
            cartValue: '0.00'
        })
    })

    it('should handle removing an item from the cart', () => {
        expect(rootReducer({
            cartItems: {'47314fa1-ae56-4eae-80be-af6691145951': 2},
            cartValue: '0.00'
        }, {
            type: REMOVE_FROM_CART,
            id: '47314fa1-ae56-4eae-80be-af6691145951'
        })).toEqual({
            cartItems: {'47314fa1-ae56-4eae-80be-af6691145951': 1},
            cartValue: '0.00'
        })


        expect(rootReducer({
            cartItems: {'47314fa1-ae56-4eae-80be-af6691145951': 1},
            cartValue: '0.00'
        }, {
            type: REMOVE_FROM_CART,
            id: '47314fa1-ae56-4eae-80be-af6691145951'
        })).toEqual({
            cartItems: {},
            cartValue: "0.00"
        })
    })
})