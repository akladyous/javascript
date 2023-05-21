function PostsBuilder(posts) {
    this.posts = posts;
};
PostsBuilder.prototype.removeDuplicate = function (key = 'id') {
    const noDuplicated = this.posts.reduce(function (prev, next) {
        const removed = prev.filter(v => {
            return v[key] !== next[key];
        });
        return [...removed, next];
    }, []);
    this.posts = noDuplicated
    return this;
}

PostsBuilder.prototype.sortBy = function (key, order = 'asc') {
    const direction = order === "asc" ? 1 : -1;
    return (a, b) => {
        const A = (typeof a[key] === 'string') ? a[key].toLowerCase() : a[key];
        const B = (typeof b[key] === 'string') ? b[key].toLowerCase() : b[key];
        // return A > B ? direction : A < B ? ~direction + 1 : 0
        return A > B ? direction : A < B ? direction * -1 : 0
    };
    // return this
}
