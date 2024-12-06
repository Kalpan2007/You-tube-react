
import './Mainone.css';
;

function MainContent() {


    const menuItems = [
        { id: 1, title: 'All' },
        { id: 2, title: 'Coke Studio' },
        { id: 3, title: 'Case Study' },
        { id: 4, title: 'Music' },
        { id: 5, title: 'Bangla Lofi' },
        { id: 6, title: 'Tour' },
        { id: 7, title: 'Saintmartin' },
        { id: 8, title: 'Tech' },
        { id: 9, title: 'iPhone 13' },
        { id: 10, title: 'User Interface Design' },
        { id: 11, title: 'Computer' },
    ];



    return (
        <div className="main-content">
            <div className="header">
                <div className="search-bar">
                    <input type="text" placeholder="Search" className="search-input" />
                    <button className="search-button">
                        <img
                            src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/search.png?raw=true"
                            alt="Search Icon"
                        />
                    </button>
                </div>

                <div className="menu-icons">
                    <img
                        src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/create.png?raw=true"
                        alt="Create Icon"
                        className="menu-icon"
                    />
                    <img
                        src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/more.png?raw=true"
                        alt="More Icon"
                        className="menu-icon"
                    />
                    <img
                        src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/bell.png?raw=true"
                        alt="Notifications Icon"
                        className="menu-icon"
                    />
                    <img
                        src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204-1.png?raw=true"
                        alt="Profile Icon"
                        className="menu-icon profile"
                    />
                </div>
            </div>
            <hr />
            <div className="horizontal-menu">
                {menuItems.map((item) => (
                    <div key={item.id} className="menu-item">
                        {item.title}
                    </div>
                ))}
            </div>


        </div>
    );
}

export default MainContent;
