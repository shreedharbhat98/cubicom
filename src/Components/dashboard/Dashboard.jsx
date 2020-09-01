import React, { Component } from 'react';
import styles from "./Dashboard.module.css";
import Card from './Card';
import Chart from './Chart';
import Table from './Table';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showSidebar: false,
            cardsData: [
                {
                    number: 121,
                    type: "BOOKING",
                    desc: "No. of way bills",
                    img: '/icon_booking.svg'
                },
                {
                    number: 55,
                    type: "OFD",
                    desc: "Out for delivery",
                    img: '/icon_ofd.svg'
                },
                {
                    number: 430,
                    type: "DEL",
                    desc: "Deliveried",
                    img: '/icon_booking.svg'
                },
                {
                    number: 23,
                    type: "UNDEL",
                    desc: "Undeliveried",
                    img: '/icon_booking.svg'
                }
            ]
        };
    }

    showSidebar = () => {
        this.setState({ showSidebar: true })
    }
    handleClose = () => {
        this.setState({ showSidebar: false })
    }
    render() {
        const { showSidebar, cardsData } = this.state;
        let styleObject = { marginLeft: "0px" }
        if (showSidebar) {
            styleObject.marginLeft = "250px"
        }
        return (
            <div>
                <div>
                    {showSidebar ?
                        <>
                            <div className={styles.sidebar}>
                                <div className={styles.displayFlex}>
                                    <img className={styles.logos} src="/dashboard.svg" alt="logo" />
                                    <div className={styles.navbarItems}>Dashboard</div>
                                </div>
                                <div className={styles.displayFlex}>
                                    <img className={styles.logos} src="/operations.svg" alt="logo" />
                                    <div className={styles.navbarItems}>Operations</div>
                                </div>
                                <div className={styles.displayFlex}>
                                    <img className={styles.logos} src="/radar.svg" alt="logo" />
                                    <div className={styles.navbarItems}>Tracking</div>
                                </div>
                                <div className={styles.displayFlex}>
                                    <img className={styles.logos} src="/reports.svg" alt="logo" />
                                    <div className={styles.navbarItems}>Reports</div>
                                </div>
                                <div className={styles.displayFlex}>
                                    <img className={styles.logos} src="/configurations.svg" alt="logo" />
                                    <div className={styles.navbarItems}>Configurations</div>
                                </div>
                                <div className={styles.bottomHide}>
                                    <div onClick={this.handleClose}>
                                        <img src="/chevron_left.svg" alt="logo" />
                                        <img className={styles.bottomLogo} src="/chevron_left.svg" alt="logo" />
                                    </div>
                                </div>
                            </div>

                        </>
                        : null}
                </div>
                <div className={styles.dFlex}>
                    {
                        !showSidebar ? <div id="main">
                            <button className={styles.openbtn} onClick={this.showSidebar}>☰</button>
                        </div> :
                            null
                    }
                    <div>
                        <img className={styles.cubicom} src="/logo.svg" alt="cubicom" />
                    </div>
                    <div className={styles.navbarSelect}>
                        <select className={styles.select}>
                            <option>Location 1</option>
                            <option>Location 2</option>
                            <option>Location 3</option>
                        </select>
                    </div>
                    <div className={styles.navbarRight}>
                        <div className={styles.circle}>
                        </div>
                    </div>
                </div>
                <div style={styleObject}>
                    <div className={styles.container}>
                        <div className={styles.dashboard}>Dashboard</div>
                        <div className={styles.displayFlex}>
                            <div className={styles.searchBtn}>
                                <input className={styles.search} type="text" />
                            </div>
                            <div className={styles.calendar}>
                                <div className={styles.displayFlex}>
                                    <div>
                                        <img src="/cal.svg" alt="calendar" />
                                    </div>
                                    <div>
                                        <span className={styles.dateSpan}> 12/12/2019 - 18-12-2019 </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className={styles.grid}>
                        <div className={styles.cards}>
                            {cardsData.map((item, index) => <Card key={index} data={item} />)}
                        </div>
                        <div className={styles.chart}>
                            <Chart />
                        </div>
                    </div>
                    <div className={styles.table}>
                        <div className={styles.tableHead}>FE Performance</div>
                        <Table />
                    </div>
                    <div className={styles.paginationBox}>
                        <div className={styles.pagination}>
                            <a href="#">&#x3e;</a>
                            <a href="#" className={styles.active}>1</a>
                            <a href="#">2</a>
                            <a href="#">3</a>
                            <a href="#">4</a>
                            <a href="#">&#x3c;</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;