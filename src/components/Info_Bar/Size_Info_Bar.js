import React, { Component } from 'react'
import styles from '../../styles.css'


class Size_Info_Bar extends Component {
    constructor(props) {
        super(props)
    }
    getAvgFit() {
        const { reviews } = this.props
        const count = {}
        for (let e of reviews) {
            if (count[e.fit] === undefined) count[e.fit] = 1
            else {
                count[e.fit] = count[e.fit] + 1
                if (count[e.fit] > reviews.length / 2) return { 
                    fit: e.fit, 
                    percentage: (count[e.fit] / reviews.length * 100).toFixed()
                }
            }
        }
        return false
    }
    render() {
        const avgFit = this.getAvgFit()
        return (
            avgFit && (
            <div className={styles["box"]}>
                <p className={styles["grey"]}>{avgFit.fit}</p>
                <p>{avgFit.percentage + '%'}</p>
            </div>
        ))
    }
}


export default Size_Info_Bar