import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization: 'Bearer FHnw7lcncUTtvo2Lhyxbm_C4XkPi9Qd-mIO_dRcjV5rSUzpQmO5gaZI53JPPjZOp00Youj7HNnzjsw9RFYk336xo5Q9OBsQ8dHCghR1sdFiKU6KHZkdFqyk_D6RiXnYx'
    }
});