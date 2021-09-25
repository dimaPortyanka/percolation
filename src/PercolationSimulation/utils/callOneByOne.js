const callOneByOne = (...cbs) => {
    let i = 0

    return new Promise((resolve, reject) => {
        cbs.forEach((cb) => {
            cb().then(() => {
                i += 1

                if (i === cbs.length) {
                    resolve()
                }
            }).catch(() => {
                reject()
            })
        })
    })
}

export default callOneByOne
