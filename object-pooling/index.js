
class ObjectPoolItem {
    constructor(data) {
        this.free = true
        this.data = data
    }
}

class ObjectPool {
    constructor(factory, reset, initialSize = 1000) {
        this.factory = factory
        this.reset = reset // for reseting the object data to the fresh state
        this._pool = new Array(initialSize)
            .fill(0)
            .map(() => this.create());
    }

    create() {
        const data = this.factory()
        return new ObjectPoolItem(data)
    }

    get() {
        for (let i = 0; i< this._pool.length; ++i) {
            if (this._pool[i].free) {
                this._pool[i].free = false
                return this._pool[i]
            }
        }

        const newObject = this.create()
        this._pool.push(newObject)
        return newObject
    }

    release(item) {
        item.free = true
        this.reset(item.data)
    }

    releaseAll() {
        for (let i = 0; i < this._pool.length; ++i) {
            this.release(this._pool[i])
        }
    }
}