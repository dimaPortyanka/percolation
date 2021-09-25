import React, {
    useState,
    useEffect,
    useCallback,
} from 'react'
import clsx from 'clsx'

import PercolationModel from '../PercolationModel'

import callOneByOne from './utils/callOneByOne'

import styles from './PercolationSimulation.module.css'

const PercolationSimulation = () => {
    const [
        {
            width,
            height,
        },
        setState,
    ] = useState({
        width: 40,
        height: 40,
    })

    const [
        {
            grid,
            model,
        },
        setGrid,
    ] = useState({
        grid: [],
        model: null,
    })

    const [
        randomCellAm,
        setRandomCellAm,
    ] = useState(150)

    useEffect(() => {
        setGrid({
            grid: new Array(height).fill(0).map(() => {
                return new Array(width).fill(false)
            }),
            model: new PercolationModel(height, width),
        })
    }, [
        width,
        height,
    ])

    const onInputChange = useCallback((event) => {
        setState({
            width,
            height,
            [event.target.name]: parseInt(event.target.value, 10) || 1,
        })
    }, [
        width,
        height,
    ])

    const open = useCallback((rowNum, colNum) => {
        model.open(rowNum, colNum)

        setGrid({
            model,
            grid: grid.map((row, rowI) => {
                return row.map((_cell, cellI) => {
                    return model.grid[rowI][cellI]
                })
            }),
        })
    }, [
        grid,
        model,
    ])

    const onCellClick = useCallback((event) => {
        const [
            rowNum,
            colNum,
        ] = event.target.getAttribute('data-cell')
            .split('-')
            .map((strNum) => {
                return parseInt(strNum, 10)
            })

        open(rowNum, colNum)
    }, [open])

    const onInputRandomCellAm = useCallback((event) => {
        setRandomCellAm(event.target.value)
    }, [])

    const reset = useCallback(() => {
        setGrid({
            grid: new Array(height).fill(0).map(() => {
                return new Array(width).fill(false)
            }),
            model: new PercolationModel(height, width),
        })
    }, [
        width,
        height,
    ])

    const randomFill = useCallback(() => {
        callOneByOne(
            ...new Array(randomCellAm).fill(0).map(() => {
                return () => {
                    return new Promise((resolve) => {
                        setTimeout(() => {
                            open(
                                Math.floor(
                                    Math.random() * height,
                                ),
                                Math.floor(
                                    Math.random() * width,
                                ),
                            )
                            resolve()
                        }, 200)
                    })
                }
            }),
        )
    }, [
        open,
        width,
        height,
        randomCellAm,
    ])

    return (
        <div>
            <div className={styles.controls}>
                <div>
                    <label htmlFor="width">
                        Width:
                        <input
                            type="number"
                            name="width"
                            value={width}
                            onChange={onInputChange}
                        />
                    </label>
                    <label htmlFor="height">
                        Height:
                        <input
                            type="number"
                            name="height"
                            value={height}
                            onChange={onInputChange}
                        />
                    </label>
                </div>
                <div>
                    <input
                        type="number"
                        name="randomCellAm"
                        value={randomCellAm}
                        onChange={onInputRandomCellAm}
                    />
                    <button
                        type="button"
                        onClick={randomFill}
                    >
                        random
                    </button>
                </div>
            </div>
            <div>
                <button
                    type="button"
                    onClick={reset}
                >
                    reset
                </button>
            </div>
            <div>
                <div className={styles.grid}>
                    {grid.map((row, i) => {
                        return (
                            <div className={styles.row}>
                                {row.map((opened, j) => {
                                    return (
                                        <div
                                            className={clsx(
                                                styles.cell,
                                                opened
                                                    && styles.openCell,
                                                opened
                                                    && model.percolates(i, j)
                                                    && styles.percolates,
                                            )}
                                        >
                                            <button
                                                className={
                                                    clsx(styles.cellButton)
                                                }
                                                type="button"
                                                onClick={onCellClick}
                                                data-cell={`${i}-${j}`}
                                            >
                                                open cell
                                                {' '}
                                                {i}
                                                {' '}
                                                {j}
                                            </button>
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default PercolationSimulation
