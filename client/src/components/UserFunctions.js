import axios from 'axios'

export const decreaseQuantity = (id, quantity) => {
    return axios
    .put('products/products/' + id, {
        quantity: quantity
    })
}


export const checkout = (cart, newCheckout) => {
    return axios
    .post('checkouts/checkout', {
        cart: cart,
        address: newCheckout.address,
        phone: newCheckout.phone
    })
    .then(res => {
        console.log('Checkouted!')
        
    })
}

export const register = newUser => {
    return axios
    .post('users/register', {
        first_name: newUser.first_name,
        last_name: newUser.last_name,
        email: newUser.email,
        password: newUser.password
    })
    .then(res => {
        console.log('Registered!')
        
    })
}


export const login = user => {
    return axios
    .post('users/login', {
        email: user.email,
        password: user.password
    })
    .then(res => {
        localStorage.setItem('usertoken', res.data)
        localStorage.setItem('email', user.email)
        return res.data
    })
    .catch(err => {
        console.log(err)
    })
}
