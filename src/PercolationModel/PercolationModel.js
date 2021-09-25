import UF from '../UF'

const DIRECTIONS = [
    {
        row: 0,
        col: -1,
    },
    {
        row: 0,
        col: 1,
    },
    {
        row: 1,
        col: 0,
    },
    {
        row: -1,
        col: 0,
    },
]

class PercolationModel {
    constructor(rowsAm, colsAm) {
        this.rowsAm = rowsAm
        this.colsAm = colsAm
        this.uf = new UF((rowsAm + 1) * colsAm)

        this.percolateRoot = -1
        new Array(colsAm).fill(0).forEach((_, i) => {
            this.percolateRoot = this.uf.union(i, 0)
        })

        this.grid = new Array(rowsAm).fill(0).map(() => {
            return new Array(colsAm).fill(false)
        })
    }

    open(row, col) {
        this.grid[row][col] = true

        DIRECTIONS.forEach(({
            row: rowD,
            col: colD,
        }) => {
            this.join(
                {
                    row,
                    col,
                },
                {
                    row: row + rowD,
                    col: col + colD,
                },
            )
        })
    }

    toIndex(
        row,
        col,
    ) {
        return (row + 1) * this.colsAm + col
    }

    isOpen(row, col) {
        if (col < 0 || col >= this.colsAm) {
            return false
        }

        if (row === -1) {
            return true
        }

        if (row < 0 || row >= this.rowsAm) {
            return false
        }

        return this.grid[row][col]
    }

    join(a, b) {
        if (!this.isOpen(a.row, a.col) || !this.isOpen(b.row, b.col)) {
            return -1
        }

        const aI = this.toIndex(a.row, a.col)
        const bI = this.toIndex(b.row, b.col)

        const rootA = this.uf.find(aI)
        const rootB = this.uf.find(bI)

        const newRoot = this.uf.union(aI, bI)

        if (rootA === this.percolateRoot || rootB === this.percolateRoot) {
            this.percolateRoot = newRoot
        }

        return newRoot
    }

    percolates(row, col) {
        return this.uf.find(
            this.toIndex(
                row,
                col,
            ),
        ) === this.percolateRoot
    }
}

export default PercolationModel
