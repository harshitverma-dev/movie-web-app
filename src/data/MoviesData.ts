export interface MoviesDataType {
    id: number,
    title : string,
    director: string,
    year: number,
    genre: string,
    rating: number,
    cast: CastDataType[],
    duration: number, // in minutes
    language: string,
    country: string,
    boxOffice: string,
    awards: string[],
    description: string,
    img: string
}

export interface CastDataType{
    name : string,
    role: string
}

export const MoviesData:MoviesDataType[] = [
    {
        id: 1,
        title: "3 Idiots",
        director: "Rajkumar Hirani",
        year: 2009,
        genre: "Comedy, Drama",
        rating: 8.4,
        cast: [
            { name: "Aamir Khan", role: "Rancho" },
            { name: "Madhavan", role: "Farhan" },
            { name: "Sharman Joshi", role: "Raju" }
        ],
        duration: 170, // in minutes
        language: "Hindi",
        country: "India",
        boxOffice: "460.0M",
        awards: ["Filmfare Award for Best Film"],
        description: "Two friends are searching for their long-lost companion. They revisit their college days and recall the memories of their friend who inspired them to think differently.",
        img: "../src/assets/clouds.jpg"
    },
    {
        id: 2,
        title: "Dilwale Dulhania Le Jayenge",
        director: "Aditya Chopra",
        year: 1995,
        genre: "Drama, Romance",
        rating: 8.0,
        cast: [
            { name: "Shah Rukh Khan", role: "Raj" },
            { name: "Kajol", role: "Simran" },
            { name: "Amrish Puri", role: "Chaudhry Baldev Singh" }
        ],
        duration: 189, // in minutes
        language: "Hindi",
        country: "India",
        boxOffice: "1.22B",
        awards: ["Filmfare Award for Best Film"],
        description: "When Raj meets Simran in Europe, it isn't love at first sight but when Simran moves to India for an arranged marriage, love makes its presence felt.",
        img: "https://m.media-amazon.com/images/I/71L6F3RznlL._SL1500_.jpg"
    },
    {
        id: 3,
        title: "Dangal",
        director: "Nitesh Tiwari",
        year: 2016,
        genre: "Biography, Drama, Sport",
        rating: 8.4,
        cast: [
            { name: "Aamir Khan", role: "Mahavir Singh Phogat" },
            { name: "Sakshi Tanwar", role: "Daya Shobha Kaur" },
            { name: "Fatima Sana Shaikh", role: "Geeta Phogat" }
        ],
        duration: 161, // in minutes
        language: "Hindi",
        country: "India",
        boxOffice: "2.1B",
        awards: ["Filmfare Award for Best Film"],
        description: "Former wrestler Mahavir Singh Phogat trains his daughters to become India's top wrestlers.",
        img: "https://m.media-amazon.com/images/I/51tTEmxrm4L._SL1500_.jpg"
    },
    {
        id: 4,
        title: "Lagaan",
        director: "Ashutosh Gowariker",
        year: 2001,
        genre: "Drama, Musical, Sport",
        rating: 8.1,
        cast: [
            { name: "Aamir Khan", role: "Bhuvan" },
            { name: "Gracy Singh", role: "Gauri" },
            { name: "Rachel Shelley", role: "Elizabeth" }
        ],
        duration: 224, // in minutes
        language: "Hindi",
        country: "India",
        boxOffice: "590.0M",
        awards: ["Oscar Nomination for Best Foreign Language Film"],
        description: "A village in colonial India stakes its future on a game of cricket against the oppressive British rulers.",
        img: "https://m.media-amazon.com/images/I/71JwA4c4snL._SL1500_.jpg"
    },
    {
        id: 5,
        title: "Kabhi Khushi Kabhie Gham",
        director: "Karan Johar",
        year: 2001,
        genre: "Drama, Family, Romance",
        rating: 7.4,
        cast: [
            { name: "Shah Rukh Khan", role: "Rahul" },
            { name: "Kajol", role: "Tina" },
            { name: "Amitabh Bachchan", role: "Yash" }
        ],
        duration: 210, // in minutes
        language: "Hindi",
        country: "India",
        boxOffice: "1.2B",
        awards: ["Filmfare Award for Best Film"],
        description: "The story of a wealthy family dealing with relationships and expectations, focusing on the estrangement of the eldest son.",
        img: "https://m.media-amazon.com/images/I/71lg8m02MFL._SL1500_.jpg"
    },
    {
        id: 6,
        title: "Zindagi Na Milegi Dobara",
        director: "Zoya Akhtar",
        year: 2011,
        genre: "Comedy, Drama",
        rating: 8.1,
        cast: [
            { name: "Hrithik Roshan", role: "Arjun" },
            { name: "Farhan Akhtar", role: "Imraan" },
            { name: "Abhay Deol", role: "Kabir" }
        ],
        duration: 155, // in minutes
        language: "Hindi",
        country: "India",
        boxOffice: "1.53B",
        awards: ["Filmfare Award for Best Film"],
        description: "Three friends set out on a road trip across Spain, where they confront their fears and rediscover their friendship.",
        img: "https://m.media-amazon.com/images/I/71XTcJX1JFL._SL1500_.jpg"
    },
    {
        id: 7,
        title: "Bajrangi Bhaijaan",
        director: "Kabir Khan",
        year: 2015,
        genre: "Comedy, Drama",
        rating: 8.0,
        cast: [
            { name: "Salman Khan", role: "Pavan" },
            { name: "Kareena Kapoor", role: "Rasika" },
            { name: "Harshaali Malhotra", role: "Munni" }
        ],
        duration: 163, // in minutes
        language: "Hindi",
        country: "India",
        boxOffice: "969.0M",
        awards: ["Filmfare Award for Best Film"],
        description: "A devout Hanuman devotee helps a mute Pakistani girl return to her family across the border.",
        img: "https://m.media-amazon.com/images/I/71AwDikmPXL._SL1500_.jpg"
    },
    {
        id: 8,
        title: "Piku",
        director: "Shoojit Sircar",
        year: 2015,
        genre: "Comedy, Drama",
        rating: 7.6,
        cast: [
            { name: "Amitabh Bachchan", role: "Bhashkor Banerjee" },
            { name: "Deepika Padukone", role: "Piku Banerjee" },
            { name: "Irrfan Khan", role: "Rana Chaudhary" }
        ],
        duration: 123, // in minutes
        language: "Hindi",
        country: "India",
        boxOffice: "710.0M",
        awards: ["Filmfare Award for Best Film"],
        description: "A quirky comedy about a daughter caring for her aging father while managing her own life and career.",
        img: "https://m.media-amazon.com/images/I/71W4rRa2-EL._SL1500_.jpg"
    },
    {
        id: 9,
        title: "Andhadhun",
        director: "Sriram Raghavan",
        year: 2018,
        genre: "Crime, Thriller",
        rating: 8.2,
        cast: [
            { name: "Ayushmann Khurrana", role: "Aakash" },
            { name: "Radhika Apte", role: "Sophie" },
            { name: "Tabu", role: "Simi" }
        ],
        duration: 139, // in minutes
        language: "Hindi",
        country: "India",
        boxOffice: "455.0M",
        awards: ["Filmfare Award for Best Film"],
        description: "A blind pianist becomes embroiled in a murder mystery after witnessing a crime.",
        img: "https://m.media-amazon.com/images/I/71QOoeC5cSL._SL1500_.jpg"
    },
    {
        id: 10,
        title: "Queen",
        director: "Vikas Bahl",
        year: 2013,
        genre: "Comedy, Drama",
        rating: 8.1,
        cast: [
            { name: "Kangana Ranaut", role: "Rani Mehra" },
            { name: "Rajkummar Rao", role: "Vijay" },
            { name: "Lisa Haydon", role: "Champa" }
        ],
        duration: 146, // in minutes
        language: "Hindi",
        country: "India",
        boxOffice: "100.0M",
        awards: ["Filmfare Award for Best Film"],
        description: "A young woman embarks on a solo honeymoon trip to Europe after her fiancé calls off their wedding.",
        img: "https://m.media-amazon.com/images/I/71L7R2DYN4L._SL1500_.jpg"
    },
    {
        id: 11,
        title: "Barfi!",
        director: "Anurag Basu",
        year: 2012,
        genre: "Comedy, Drama, Romance",
        rating: 8.1,
        cast: [
            { name: "Ranbir Kapoor", role: "Barfi" },
            { name: "Priyanka Chopra", role: "Jhilmil" },
            { name: "Ileana D'Cruz", role: "Shruti" }
        ],
        duration: 151, // in minutes
        language: "Hindi",
        country: "India",
        boxOffice: "1.80B",
        awards: ["Filmfare Award for Best Film"],
        description: "A mute and deaf man falls in love with a beautiful girl and later becomes entangled with another woman with disabilities.",
        img: "https://m.media-amazon.com/images/I/71wyb4sJWyL._SL1500_.jpg"
    },
    {
        id: 12,
        title: "Chennai Express",
        director: "Rohit Shetty",
        year: 2013,
        genre: "Action, Comedy, Drama",
        rating: 5.3,
        cast: [
            { name: "Shah Rukh Khan", role: "Rahul" },
            { name: "Deepika Padukone", role: "Meenamma" },
            { name: "Sathyaraj", role: "Narayan" }
        ],
        duration: 141, // in minutes
        language: "Hindi",
        country: "India",
        boxOffice: "3.23B",
        awards: ["Filmfare Award for Best Film"],
        description: "A man travels from Mumbai to Rameswaram in search of the ashes of his grandfather and encounters a series of comic misadventures.",
        img: "https://m.media-amazon.com/images/I/51dXhp4RTCL._SL1500_.jpg"
    },
    {
        id: 13,
        title: "Bajrangi Bhaijaan",
        director: "Kabir Khan",
        year: 2015,
        genre: "Comedy, Drama",
        rating: 8.0,
        cast: [
            { name: "Salman Khan", role: "Pavan" },
            { name: "Kareena Kapoor", role: "Rasika" },
            { name: "Harshaali Malhotra", role: "Munni" }
        ],
        duration: 163, // in minutes
        language: "Hindi",
        country: "India",
        boxOffice: "969.0M",
        awards: ["Filmfare Award for Best Film"],
        description: "A devout Hanuman devotee helps a mute Pakistani girl return to her family across the border.",
        img: "https://m.media-amazon.com/images/I/71AwDikmPXL._SL1500_.jpg"
    },
    {
        id: 14,
        title: "Pardes",
        director: "Subhash Ghai",
        year: 1997,
        genre: "Drama, Musical, Romance",
        rating: 6.7,
        cast: [
            { name: "Shah Rukh Khan", role: "Arjun" },
            { name: "Mahima Chaudhry", role: "Ganga" },
            { name: "Amrish Puri", role: "Kishorilal" }
        ],
        duration: 188, // in minutes
        language: "Hindi",
        country: "India",
        boxOffice: "220.0M",
        awards: ["Filmfare Award for Best Music Director"],
        description: "A young Indian man returns to his village from America to find a suitable bride and ends up facing several cultural challenges.",
        img: "https://m.media-amazon.com/images/I/71vn3DhYj5L._SL1500_.jpg"
    },
    {
        id: 15,
        title: "Jab We Met",
        director: "Imtiaz Ali",
        year: 2007,
        genre: "Comedy, Drama, Romance",
        rating: 7.9,
        cast: [
            { name: "Shahid Kapoor", role: "Aditya" },
            { name: "Kareena Kapoor", role: "Geet" },
            { name: "Tarun Arora", role: "Rohit" }
        ],
        duration: 138, // in minutes
        language: "Hindi",
        country: "India",
        boxOffice: "580.0M",
        awards: ["Filmfare Award for Best Actress"],
        description: "A depressed businessman meets a lively and spontaneous girl who helps him rediscover joy and romance.",
        img: "https://m.media-amazon.com/images/I/71e8Vrfj7TL._SL1500_.jpg"
    },
    {
        id: 16,
        title: "Wake Up Sid",
        director: "Ayan Mukerji",
        year: 2009,
        genre: "Comedy, Drama",
        rating: 7.6,
        cast: [
            { name: "Ranbir Kapoor", role: "Sid" },
            { name: "Konkona Sen Sharma", role: "Aisha" },
            { name: "Amitabh Bachchan", role: "Himself" }
        ],
        duration: 139, // in minutes
        language: "Hindi",
        country: "India",
        boxOffice: "500.0M",
        awards: ["Filmfare Award for Best Debut Director"],
        description: "A young man realizes his responsibilities and dreams after his life is disrupted by his failure in college.",
        img: "https://m.media-amazon.com/images/I/71Vh2lhCswL._SL1500_.jpg"
    },
    {
        id: 17,
        title: "Om Shanti Om",
        director: "Farah Khan",
        year: 2007,
        genre: "Action, Comedy, Drama",
        rating: 6.2,
        cast: [
            { name: "Shah Rukh Khan", role: "Om" },
            { name: "Deepika Padukone", role: "Shantipriya" },
            { name: "Arjun Rampal", role: "Mickey" }
        ],
        duration: 168, // in minutes
        language: "Hindi",
        country: "India",
        boxOffice: "1.50B",
        awards: ["Filmfare Award for Best Film"],
        description: "A reincarnation drama where a junior artist seeks revenge against a powerful film producer who wronged him in his previous life.",
        img: "https://m.media-amazon.com/images/I/71aKDJXMm5L._SL1500_.jpg"
    },
    {
        id: 18,
        title: "Tanu Weds Manu",
        director: "Aanand L. Rai",
        year: 2011,
        genre: "Comedy, Drama, Romance",
        rating: 7.1,
        cast: [
            { name: "R Madhavan", role: "Mannu" },
            { name: "Kangana Ranaut", role: "Tanu" },
            { name: "Jimmy Shergill", role: "Raja" }
        ],
        duration: 119, // in minutes
        language: "Hindi",
        country: "India",
        boxOffice: "500.0M",
        awards: ["Filmfare Award for Best Actress"],
        description: "A comedy about the chaotic journey of a couple who have arranged their marriage but struggle with their personal feelings and choices.",
        img: "https://m.media-amazon.com/images/I/81qEGqj6cyL._SL1500_.jpg"
    },
    {
        id: 19,
        title: "Mardaani",
        director: "Pradeep Sarkar",
        year: 2014,
        genre: "Action, Crime, Drama",
        rating: 7.4,
        cast: [
            { name: "Rani Mukerji", role: "Shivani Shivaji Roy" },
            { name: "Tahir Raj Bhasin", role: "Walt" },
            { name: "Jisshu Sengupta", role: "Rakesh" }
        ],
        duration: 113, // in minutes
        language: "Hindi",
        country: "India",
        boxOffice: "600.0M",
        awards: ["Filmfare Award for Best Actress"],
        description: "A fierce female police officer fights against the trafficking of young girls in Mumbai.",
        img: "https://m.media-amazon.com/images/I/71UoO2VsXsL._SL1500_.jpg"
    },
    {
        id: 20,
        title: "Dil Chahta Hai",
        director: "Farhan Akhtar",
        year: 2001,
        genre: "Comedy, Drama",
        rating: 8.1,
        cast: [
            { name: "Aamir Khan", role: "Aakash" },
            { name: "Saif Ali Khan", role: "Sameer" },
            { name: "Akshaye Khanna", role: "Sid" }
        ],
        duration: 183, // in minutes
        language: "Hindi",
        country: "India",
        boxOffice: "500.0M",
        awards: ["Filmfare Award for Best Film"],
        description: "The lives and friendships of three inseparable childhood friends who struggle with love and life as they grow older.",
        img: "https://m.media-amazon.com/images/I/71Jk4v5Qe-L._SL1500_.jpg"
    },
    {
        id: 21,
        title: "Tanu Weds Manu Returns",
        director: "Aanand L. Rai",
        year: 2015,
        genre: "Comedy, Drama, Romance",
        rating: 7.2,
        cast: [
            { name: "Kangana Ranaut", role: "Tanu" },
            { name: "R Madhavan", role: "Mannu" },
            { name: "Jimmy Shergill", role: "Raja" }
        ],
        duration: 127, // in minutes
        language: "Hindi",
        country: "India",
        boxOffice: "300.0M",
        awards: ["Filmfare Award for Best Actress"],
        description: "The sequel to 'Tanu Weds Manu', focusing on the couple's new issues and the complications that arise.",
        img: "https://m.media-amazon.com/images/I/91MbdK9mUML._SL1500_.jpg"
    },
    {
        id: 22,
        title: "Zindagi Na Milegi Dobara",
        director: "Zoya Akhtar",
        year: 2011,
        genre: "Comedy, Drama",
        rating: 8.1,
        cast: [
            { name: "Hrithik Roshan", role: "Arjun" },
            { name: "Farhan Akhtar", role: "Imraan" },
            { name: "Abhay Deol", role: "Kabir" }
        ],
        duration: 155, // in minutes
        language: "Hindi",
        country: "India",
        boxOffice: "1.53B",
        awards: ["Filmfare Award for Best Film"],
        description: "Three friends set out on a road trip across Spain, where they confront their fears and rediscover their friendship.",
        img: "https://m.media-amazon.com/images/I/71XTcJX1JFL._SL1500_.jpg"
    },
    {
        id: 23,
        title: "PK",
        director: "Rajkumar Hirani",
        year: 2014,
        genre: "Comedy, Drama, Sci-Fi",
        rating: 8.1,
        cast: [
            { name: "Aamir Khan", role: "PK" },
            { name: "Anushka Sharma", role: "Jaggu" },
            { name: "Sushant Singh Rajput", role: "Shashi" }
        ],
        duration: 153, // in minutes
        language: "Hindi",
        country: "India",
        boxOffice: "792.0M",
        awards: ["Filmfare Award for Best Film"],
        description: "An alien comes to Earth and questions religious and cultural beliefs while searching for his spaceship.",
        img: "https://m.media-amazon.com/images/I/51zSSEnM6PL._SL1500_.jpg"
    },
    {
        id: 24,
        title: "Chhichhore",
        director: "Nitesh Tiwari",
        year: 2019,
        genre: "Comedy, Drama",
        rating: 7.6,
        cast: [
            { name: "Sushant Singh Rajput", role: "Anirudh" },
            { name: "Shraddha Kapoor", role: "Maya" },
            { name: "Varun Sharma", role: "Sexa" }
        ],
        duration: 143, // in minutes
        language: "Hindi",
        country: "India",
        boxOffice: "215.0M",
        awards: ["Filmfare Award for Best Film"],
        description: "A group of friends reunite and reflect on their college days and life choices after one of them faces a crisis.",
        img: "https://m.media-amazon.com/images/I/71B7ta4Of5L._SL1500_.jpg"
    },
    {
        id: 25,
        title: "Gully Boy",
        director: "Zoya Akhtar",
        year: 2019,
        genre: "Drama, Music",
        rating: 8.0,
        cast: [
            { name: "Ranveer Singh", role: "Murad" },
            { name: "Alia Bhatt", role: "Safeena" },
            { name: "Siddhant Chaturvedi", role: "MC Sher" }
        ],
        duration: 153, // in minutes
        language: "Hindi",
        country: "India",
        boxOffice: "238.0M",
        awards: ["Filmfare Award for Best Film"],
        description: "A street rapper from Mumbai aspires to become a famous artist despite facing numerous obstacles.",
        img: "https://m.media-amazon.com/images/I/71Zj1a1PVKL._SL1500_.jpg"
    },
    {
        id: 26,
        title: "Raazi",
        director: "Meghna Gulzar",
        year: 2018,
        genre: "Action, Drama, Thriller",
        rating: 7.8,
        cast: [
            { name: "Alia Bhatt", role: "Sehmat Khan" },
            { name: "Vicky Kaushal", role: "Ishaan" },
            { name: "Rajit Kapur", role: "Hidayat Khan" }
        ],
        duration: 138, // in minutes
        language: "Hindi",
        country: "India",
        boxOffice: "197.0M",
        awards: ["Filmfare Award for Best Film"],
        description: "A young Indian woman marries a Pakistani military officer to spy for India during the 1971 India-Pakistan war.",
        img: "https://m.media-amazon.com/images/I/71l8YXz0U3L._SL1500_.jpg"
    },
    {
        id: 27,
        title: "Stree",
        director: "Amar Kaushik",
        year: 2018,
        genre: "Comedy, Horror",
        rating: 7.6,
        cast: [
            { name: "Rajkummar Rao", role: "Vicky" },
            { name: "Shraddha Kapoor", role: "Stree" },
            { name: "Pankaj Tripathi", role: "Bittu" }
        ],
        duration: 128, // in minutes
        language: "Hindi",
        country: "India",
        boxOffice: "180.0M",
        awards: ["Filmfare Award for Best Actor"],
        description: "In a small town plagued by a mysterious female spirit, a group of friends seeks to unravel the mystery and save their town.",
        img: "https://m.media-amazon.com/images/I/71to3yl7-LL._SL1500_.jpg"
    },
    {
        id: 28,
        title: "Mubarakan",
        director: "Anees Bazmee",
        year: 2017,
        genre: "Comedy, Drama, Romance",
        rating: 5.4,
        cast: [
            { name: "Anil Kapoor", role: "Karanveer Singh" },
            { name: "Arjun Kapoor", role: "Chandermohan" },
            { name: "Ileana D'Cruz", role: "Sweety" }
        ],
        duration: 148, // in minutes
        language: "Hindi",
        country: "India",
        boxOffice: "68.0M",
        awards: ["Filmfare Award for Best Ensemble Cast"],
        description: "A comedy about twin brothers who find themselves entangled in a complicated web of mistaken identities and love.",
        img: "https://m.media-amazon.com/images/I/71BYPsF1XXL._SL1500_.jpg"
    },
    {
        id: 29,
        title: "Jab Tak Hai Jaan",
        director: "Yash Chopra",
        year: 2012,
        genre: "Drama, Romance",
        rating: 5.8,
        cast: [
            { name: "Shah Rukh Khan", role: "Samar" },
            { name: "Katrina Kaif", role: "Meera" },
            { name: "Anushka Sharma", role: "Akira" }
        ],
        duration: 176, // in minutes
        language: "Hindi",
        country: "India",
        boxOffice: "1.09B",
        awards: ["Filmfare Award for Best Film"],
        description: "A romance between a bomb disposal expert and two women from different backgrounds, set against the backdrop of war.",
        img: "https://m.media-amazon.com/images/I/61zwCBhZh2L._SL1500_.jpg"
    },
    {
        id: 30,
        title: "M.S. Dhoni: The Untold Story",
        director: "Neeraj Pandey",
        year: 2016,
        genre: "Biography, Drama, Sport",
        rating: 7.8,
        cast: [
            { name: "Sushant Singh Rajput", role: "MS Dhoni" },
            { name: "Disha Patani", role: "Priyanka Jha" },
            { name: "Kiara Advani", role: "Sakshi Singh" }
        ],
        duration: 190, // in minutes
        language: "Hindi",
        country: "India",
        boxOffice: "216.0M",
        awards: ["Filmfare Award for Best Actor"],
        description: "The biopic of Indian cricketer MS Dhoni, tracing his rise from a small-town boy to becoming the captain of the Indian cricket team.",
        img: "https://m.media-amazon.com/images/I/91EOyPUnwEL._SL1500_.jpg"
    }
]
