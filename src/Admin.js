import React, { Component } from 'react';
import './Admin.css';
import TopTabs from './TopTabs';
import SecondTabs from './SecondTabs';
import MatchWeek from './MatchWeek';
import Standings from './Standings';
import News from './News';

const topTabList = [
    {
        text: 'Premier League',
        link: 'https://www.premierleague.com/'
    },
    {
        text: 'Fantasy',
        link: 'https://www.premierleague.com/fantasy'
    },
    {
        text: 'Videos',
        link: 'https://www.premierleague.com/video'
    },
    {
        text: 'Community',
        link: 'https://www.premierleague.com/communities'
    },
    {
        text: 'More',
        link: 'https://www.premierleague.com/stats'
    },
    {
        text: 'Sign In',
        link: 'https://users.premierleague.com/?redirect_uri=https://www.premierleague.com/&app=pl-web'
    },
]

const secondTabList = [
    {
        text: 'Home',
        link: 'https://www.premierleague.com/'
    },
    {
        text: 'Fixtures',
        link: 'https://www.premierleague.com/fixtures'
    },
    {
        text: 'Results',
        link: 'https://www.premierleague.com/results'
    },
    {
        text: 'Tables',
        link: 'https://www.premierleague.com/tables'
    },
    {
        text: 'Hall of Fame',
        link: 'https://www.premierleague.com/hall-of-fame'
    },
    {
        text: 'Transfers',
        link: 'https://www.premierleague.com/transfers'
    },
    {
        text: 'Broadcast',
        link: 'https://www.premierleague.com/broadcast-schedules'
    },
    {
        text: 'Tickets',
        link: 'https://www.premierleague.com/tickets'
    },
    {
        text: 'Clubs',
        link: 'https://www.premierleague.com/clubs'
    },
    {
        text: 'Players',
        link: 'https://www.premierleague.com/players'
    },
    {
        text: 'Managers',
        link: 'https://www.premierleague.com/managers'
    },
    {
        text: 'News',
        link: 'https://www.premierleague.com/news'
    },
]

const matchList = [
    {
        date: 'Saturday 18 December',
        time: '7:00',
        teamOne: 'AVL',
        teamTwo: 'BUR'
    },
    {
        date: 'Saturday 18 December',
        time: '9:30',
        teamOne: 'LEE',
        teamTwo: 'ARS'
    },
    {
        date: 'Sunday 19 December',
        time: '6:00',
        teamOne: 'NEW',
        teamTwo: 'MCI'
    },
    {
        date: 'Sunday 19 December',
        time: '6:00',
        teamOne: 'WOL',
        teamTwo: 'CHE'
    },
    {
        date: 'Sunday 19 December',
        time: '8:30',
        teamOne: 'TOT',
        teamTwo: 'LIV'
    },
]

const standingsList = [
    {
        position: 'Pos',
        club: 'Club',
        pi: 'PI',
        gd: 'GD',
        pts: 'Pts'
    },
    {
        position: '1',
        club: 'Man City',
        pi: '17',
        gd: '+31',
        pts: '41'
    },
    {
        position: '2',
        club: 'Liverpool',
        pi: '17',
        gd: '+35',
        pts: '40'
    },
    {
        position: '3',
        club: 'Chelsea',
        pi: '17',
        gd: '+27',
        pts: '37'
    },
    {
        position: '4',
        club: 'Arsenal',
        pi: '17',
        gd: '+1',
        pts: '29'
    },
    {
        position: '5',
        club: 'West Ham',
        pi: '17',
        gd: '+7',
        pts: '28'
    },
    {
        position: '6',
        club: 'Man Utd',
        pi: '16',
        gd: '+2',
        pts: '27'
    },
    {
        position: '7',
        club: 'Spurs',
        pi: '14',
        gd: '-1',
        pts: '25'
    },
    {
        position: '8',
        club: 'Wolves',
        pi: '17',
        gd: '-1',
        pts: '24'
    },
    {
        position: '9',
        club: 'Leicester',
        pi: '16',
        gd: '0',
        pts: '22'
    },
    {
        position: '10',
        club: 'Aston Villa',
        pi: '17',
        gd: '-2',
        pts: '22'
    },
    {
        position: '11',
        club: 'Crystal Palace',
        pi: '17',
        gd: '0',
        pts: '20'
    },
    {
        position: '12',
        club: 'Brentford',
        pi: '16',
        gd: '-1',
        pts: '20'
    },
    {
        position: '13',
        club: 'Brighton',
        pi: '16',
        gd: '-3',
        pts: '20'
    },
    {
        position: '14',
        club: 'Everton',
        pi: '17',
        gd: '-8',
        pts: '19'
    },
    {
        position: '15',
        club: 'Southampton',
        pi: '17',
        gd: '-10',
        pts: '17'
    },
    {
        position: '16',
        club: 'Leeds',
        pi: '17',
        gd: '-15',
        pts: '16'
    },
    {
        position: '17',
        club: 'Watford',
        pi: '16',
        gd: '-10',
        pts: '13'
    },
    {
        position: '18',
        club: 'Burnley',
        pi: '15',
        gd: '-7',
        pts: '11'
    },
    {
        position: '19',
        club: 'Newcastle',
        pi: '17',
        gd: '-19',
        pts: '10'
    },
    {
        position: '20',
        club: 'Norwich',
        pi: '17',
        gd: '-26',
        pts: '10'
    },
]

const newsList = [
    {
        title: 'Conte faces first major test at Spurs against Liverpool',
        link: 'https://www.premierleague.com/news/2420314'
    },
    {
        title: 'Shearer: Getting vaccinated will help others',
        link: 'https://www.premierleague.com/news/2418855'
    },
    {
        title: 'Can Burnley extend their longest unbeaten run at Villa?',
        link: 'https://www.premierleague.com/news/2413889'
    },
    {
        title: 'Match officials for Matchweek 18',
        link: 'https://www.premierleague.com/news/2413760'
    },
    {
        title: 'Klopp: Listen to experts and get the jab',
        link: 'https://www.premierleague.com/news/2418399'
    },
    {
        title: 'Leeds look to extend unbeaten home run to six matches',
        link: 'https://www.premierleague.com/news/2413893'
    }
]


const displayTopTabList = topTabList.map((c, idx) => {
    return (
        <TopTabs key={idx} index={idx} text={c.text} link={c.link} />
    );
})

const displaySecondTabList = secondTabList.map((c, idx) => {
    return (
        <SecondTabs key={idx} index={idx} text={c.text} link={c.link} />
    );
})

const displayMatchWeekList = matchList.map((c, idx) => {
    return (
        <MatchWeek key={idx} index={idx} date={c.date} time={c.time} teamOne={c.teamOne} teamTwo={c.teamTwo} />
    );
})

const displayStandingsList = standingsList.map((c, idx) => {
    return (
        <Standings key={idx} index={idx} position={c.position} club={c.club} pi={c.pi} gd={c.gd} points={c.pts}/>
    );
})

const displayNewsList = newsList.map((c, idx) => {
    return (
        <News key={idx} index={idx} title={c.title} link={c.link} />
    );
})


class Admin extends Component {
    render() {
        return (
            <div>
                <nav className="navbar is-white">
                    <div className="container">
                        <div className="navbar-brand">
                            <img src="../images/premier-league-logo.jpg" alt="EPL Logo" width="100px" />
                            <div className="navbar-burger burger" data-target="navMenu">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                        <div id="navMenu" className="navbar-menu">
                            <div className="navbar-start">
                                {displayTopTabList}
                            </div>


                        </div>
                    </div>
                </nav>
                {/* <!-- END NAV --> */}
                <div className="container">
                    <div className="columns">
                        <div className="column is-3 ">
                            <aside className="menu is-hidden-mobile">
                                <p className="menu-label">
                                    Matchweek
                                </p>
                                <ul className="menu-list">
                                    {displayMatchWeekList}
                                </ul>
                                <p className="menu-label">
                                    Standings
                                </p>
                                <ul className="menu-list">
                                    {displayStandingsList}
                                </ul>
                            </aside>
                        </div>
                        <div className="column is-9">
                            <nav className="breadcrumb" aria-label="breadcrumbs">
                                <ul>
                                    {displaySecondTabList}
                                </ul>
                            </nav>
                            <section className="hero is-info welcome is-small">
                                <div className="hero-body">
                                    <div className="container">
                                        <h1 className="title">
                                            English Premier League 
                                        </h1>
                                    </div>
                                </div>
                            </section>
                            <section className="info-tiles">
                                <div className="tile is-ancestor has-text-centered">
                                    <div className="tile is-parent">
                                        <article className="tile is-child box">
                                            <p className="title">4.7 Billion</p>
                                            <p className="subtitle">Global Yearly Viewers</p>
                                        </article>
                                    </div>
                                    <div className="tile is-parent">
                                        <article className="tile is-child box">
                                            <p className="title">643 Million</p>
                                            <p className="subtitle">Average Viewers</p>
                                        </article>
                                    </div>
                                    <div className="tile is-parent">
                                        <article className="tile is-child box">
                                            <p className="title">20</p>
                                            <p className="subtitle">Teams</p>
                                        </article>
                                    </div>
                                    <div className="tile is-parent">
                                        <article className="tile is-child box">
                                            <p className="title">1</p>
                                            <p className="subtitle">Champion</p>
                                        </article>
                                    </div>
                                </div>
                            </section>
                            <div className="columns">
                                <div className="column is-6">
                                    <div className="card events-card">
                                        <header className="card-header">
                                            <p className="card-header-title">
                                                Latest News
                                            </p>
                                            <a href="#" className="card-header-icon" aria-label="more options">
                                                <span className="icon">
                                                    <i className="fa fa-angle-down" aria-hidden="true"></i>
                                                </span>
                                            </a>
                                        </header>
                                        <div className="card-table">
                                            <div className="content">
                                                <table className="table is-fullwidth is-striped">
                                                    <tbody>
                                                        {displayNewsList}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <footer className="card-footer">
                                            <a href="#" className="card-footer-item">View All</a>
                                        </footer>
                                    </div>
                                </div>
                                <div className="column is-6">
                                    <div className="card">
                                        <header className="card-header">
                                            <p className="card-header-title">
                                                Search Teams
                                            </p>
                                            <a href="#" className="card-header-icon" aria-label="more options">
                                                <span className="icon">
                                                    <i className="fa fa-angle-down" aria-hidden="true"></i>
                                                </span>
                                            </a>
                                        </header>
                                        <div className="card-content">
                                            <div className="content">
                                                <div className="control has-icons-left has-icons-right">
                                                    <input className="input is-large" type="text" placeholder="" />
                                                    <span className="icon is-medium is-left">
                                                        <i className="fa fa-search"></i>
                                                    </span>
                                                    <span className="icon is-medium is-right">
                                                        <i className="fa fa-check"></i>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <header className="card-header">
                                            <p className="card-header-title">
                                                Search Players
                                            </p>
                                            <a href="#" className="card-header-icon" aria-label="more options">
                                                <span className="icon">
                                                    <i className="fa fa-angle-down" aria-hidden="true"></i>
                                                </span>
                                            </a>
                                        </header>
                                        <div className="card-content">
                                            <div className="content">
                                                <div className="control has-icons-left has-icons-right">
                                                    <input className="input is-large" type="text" placeholder="" />
                                                    <span className="icon is-medium is-left">
                                                        <i className="fa fa-search"></i>
                                                    </span>
                                                    <span className="icon is-medium is-right">
                                                        <i className="fa fa-check"></i>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Admin;