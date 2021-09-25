import UF from '../UF'

test('init uf', () => {
    const N = 5
    const uf = new UF(N)

    new Array(N).fill(0).forEach((_, val) => {
        expect(val).toBe(uf.find(val))
    })
})

test('union', () => {
    const N = 15
    const uf = new UF(N)

    uf.union(1, 2)
    uf.union(1, 3)
    uf.union(3, 5)

    uf.union(7, 8)
    uf.union(9, 10)
    uf.union(7, 10)

    uf.union(9, 3)

    expect(
        new Array(N).fill(0).map((_, val) => {
            return uf.find(val)
        }),
    ).toEqual(
        [
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
        ],
    )
})
