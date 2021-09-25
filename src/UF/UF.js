class UF {
    constructor(n) {
        if (!n) {
            throw new Error('n should be a number bigger then 0')
        }

        this.arr = new Array(n).fill(0).map((_, i) => {
            return i
        })
    }

    union(i, j) {
        const rootI = this.find(i)
        const rootJ = this.find(j)

        this.arr = this.arr.map((root) => {
            if (root === rootJ) {
                return rootI
            }

            return root
        })

        return rootI
    }

    find(i) {
        const root = this.arr[i]

        return root
    }
}

export default UF
