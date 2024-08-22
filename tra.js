document.addEventListener('DOMContentLoaded', () => {
    const trafficInfo = document.getElementById('traffic-info');
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    const refreshBtn = document.getElementById('refresh-btn');

    // List of local areas in Trichy
    const localAreas = [
        "srirangam", "mylapore", "thillainagar", "ramalingamills",
        "chinthamani", "puthur", "ponmalai", "kambarasampettai", "chatram",
        "bhel", "nadupatti", "srinivasapuram", "nellikuppam", "vayalur",
        "mukkombu", "sembatti", "kavalur", "kondalampatti", "keeranur",
        "vijayanagar", "muthu nagar", "manikandam", "pappakkudi", "rasipuram",
        "nanjikottai", "sengarai", "pallapatti", "ariyamangalam", "puthur",
        "sungam", "kottapatti", "marungapuri", "keeranur", "thayanur",
        "kottaiyur", "periyaputhur", "kuzhumani", "sahupuram", "mannargudi",
        "ramanathapuram", "kodai", "ayyampalayam", "pillaiyarpatti", "kumaramangalam",
        "vepathur", "mangalapuram", "thavittupalayam", "pudukkottai", "vadipatti",
        "kavalkinaru", "keeranur"

    ];

    // Simulated traffic data
    const trafficData = {
        "srirangam": {
            location: "K.K. Nagar",
            congestion: "45%",
            speed: "40 km/h"
        },
        "kodai":{
            location: "Kodai",
            congestion: "65%",
            speed: "60 km/h"
        },
        "thillainagar":{
            location: "Thillai Nagar",
            congestion: "33%",
            speed: "30 km/h"
        }
        // Add more simulated data for other areas if needed
    };

    const fetchTrafficData = (location) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const data = trafficData[location];
                resolve(data);
            }, 500);
        });
    };

    const updateTrafficInfo = (data) => {
        if (data) {
            document.getElementById('location').textContent = `Location: ${data.location}`;
            document.getElementById('congestion').textContent = `Congestion Level: ${data.congestion}`;
            document.getElementById('speed').textContent = `Average Speed: ${data.speed}`;
        } else {
            trafficInfo.innerHTML = '<p>No data available for this location.</p>';
        }
    };

    const handleSearch = () => {
        const location = searchInput.value.trim().toLowerCase().replace(/\s+/g, '');
        if (location) {
            fetchTrafficData(String(location)).then(data => {
                updateTrafficInfo(data);
            });
        } else {
            trafficInfo.innerHTML = '<p>Please enter a location.</p>';
        }
    };

    searchBtn.addEventListener('click', handleSearch);

    refreshBtn.addEventListener('click', () => {
        // Force a hard reload
        window.location.reload(true);
    });

    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
        else{
            //pass
        }
    });
});
