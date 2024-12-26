function SomeObject(data) {
    this.data = data;
}

SomeObject.prototype.cloneWithChannels = function(channels) {
    return Object.assign(new this.constructor(), this, channels);
};

let original = new SomeObject("original data");
let modified = original.cloneWithChannels({ channel1: "modified", channel2: "updated" });

console.log(modified);
