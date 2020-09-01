import React, { Component } from 'react';
import styles from "./Dashboard.module.css";

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showSidebar: false
        };
    }

    showSidebar = () => {
        this.setState({ showSidebar: true })
    }
    handleClose = () => {
        this.setState({ showSidebar: false })
    }
    render() {
        const { showSidebar } = this.state;
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
                                        <img src="/chevron_left.svg" alt="logo"/>
                                        <img className={styles.bottomLogo} src="/chevron_left.svg" alt="logo"/>
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

            </div>
        );
    }
}

export default Dashboard;