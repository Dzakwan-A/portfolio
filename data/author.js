// Backend Expertise
import NodeIcon from "assets/devicon/node.svg?component";
// Frontend Expertise
import BootstrapIcon from "assets/devicon/bootstrap.svg?component";
import JavascriptIcon from "assets/devicon/javascript.svg?component";
// Timeline
import Home from "assets/icons/home.svg?component";
import Academy from "assets/icons/academy.svg?component";

const author = {
    author_image: "/author.jpg",
    name: "Dzakwan A.A",
    position: "Mahasiswa UB",
    email: "aryasuta04@gmail.com",
    location: "Malang, Indonesia",
    github: "aryasuta",
    socials: {
        twitter: "aryasuta04",
        youtube: "Dzakwanadiyatma05",
        linkedin: "#"
    },
    expertises: {
        "Frontend": [
            {
                name: "Bootstrap",
                icon: BootstrapIcon,
                description: "",
            },
            {
                name: "Javascript",
                icon: JavascriptIcon,
                description: "",
            },
        ],
        "Backend": [
            {
                name: "NodeJs",
                icon: NodeIcon,
                description: "",
            }
        ]
    },
    timeline: [
        {
            icon: Academy,
            title: "2023 - Universitas Brawijaya ",
            subtitle: "2023",
            description: "Belajar di Program Studi Teknologi Informasi Vokasi Brawijaya",
        },
        {
            icon: Home,
            title: "Lahir Tahun 2004, 1 Maret",
            subtitle: "Madiun Indonesia",
            description: "Tempat saya lahir dan sekolah dari TK sampai SMA",
        }
    ],
};

export default author;
