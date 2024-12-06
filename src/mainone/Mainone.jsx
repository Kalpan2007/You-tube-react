import './Mainone.css';

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

    const videoData = [
        {
            id: 1,
            thumbnail:
                "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-1.png?raw=true",
            logo:
                "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(4).png?raw=true",
            title: "Tech Skills Improve By Watching This Video",
            channel: "Tech World",
            verified:
                "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true",
        },
        {
            id: 2,
            thumbnail:
                "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-10.png?raw=true",
            logo:
                "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(2).png?raw=true",
            title: "Learn Advanced Tech Skills",
            channel: "UI-UX Designer",
            verified:
                "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true",
        },
        {
            id: 3,
            thumbnail:
                "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-2.png?raw=true",
            logo:
                "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(2).png?raw=true",
            title: "How to Become a Developer",
            channel: "CodeMaster",
            verified:
                "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true",
        },
        {
            id: 4,
            thumbnail:
                "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-4.png?raw=true",
            logo:
                "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(3).png?raw=true",
            title: "How to become ui-ux designer",
            channel: "Pro Designer",
            verified:
                "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true",
        },
        {
            id: 5,
            thumbnail:
                "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-5.png?raw=true",
            logo:
                "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204-1.png?raw=true",
            title: "Lets Feel Free and Vibing",
            channel: "Song Makers",
            verified:
                "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true",
        },
        {
            id: 6,
            thumbnail:
                "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-7.png?raw=true",
            logo:
                "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(3).png?raw=true",
            title: "Faster and Better In Figma",
            channel: "Figma Expert",
            verified:
                "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true",
        },
        {
            id: 7,
            thumbnail:
                "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-8.png?raw=true",
            logo:
                "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true",
            title: "Amezing Mash Ups",
            channel: "Coke Studio",
            verified:
                "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true",
        },
        {
            id: 8,
            thumbnail:
                "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-9.png?raw=true",
            logo:
                "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(5).png?raw=true",
            title: "Infinix note 12 pro review",
            channel: "Mobile World",
            verified:
                "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true",
        },
        {
            id: 9,
            thumbnail:
                "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-9.png?raw=true",
            logo:
                "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(5).png?raw=true",
            title: "Infinix note 12 pro review",
            channel: "Mobile World",
            verified:
                "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true",
        },


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
                <div className="arrow">
                    <img
                        src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/leftBottom.png?raw=true"
                        alt="Arrow Icon"
                    />
                </div>
            </div>
            <hr />
            <div className='firstrow-container'>
                <div className="firstrow">
                    {videoData.map((video) => (
                        <div className="box" key={video.id}>
                            <div className="thumbnail">
                                <img
                                    src={video.thumbnail}
                                    alt=""
                                    className="thumbnail-img"
                                />
                            </div>
                            <div className="content">
                                <div className="logoicon">
                                    <img
                                        src={video.logo}
                                        alt={`${video.channel} Logo`}
                                        className="logo-img"
                                    />
                                </div>
                                <div className="text-content">
                                    <p className="title">{video.title}</p>
                                    <p className="channal">
                                        {video.channel}
                                        <img
                                            src={video.verified}
                                            alt="Verified Icon"
                                            className="verify"
                                        />
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MainContent;
