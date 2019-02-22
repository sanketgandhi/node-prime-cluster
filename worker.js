const isPrime = require('./is-prime');

module.exports = (max = 0, callback = (err, result) => ({})) => {
    try {
        const primes = [];

        for (let i = 0; i <= max; i++) {
            if (isPrime(i)) primes.push(i);
        }

        callback(null, primes);
    } catch (ex) {
        callback(ex);
        console.error(err);
    }
};
