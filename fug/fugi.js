function afterNextPropagation(callback) {
    Promise.resolve().then(callback);
}

// Usage
afterNextPropagation(() => {
    console.log('Callback executed after the next propagation.');
});
