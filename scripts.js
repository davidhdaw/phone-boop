const numbers = [
    {
        number: "584-969",
        name: "Pennsylvania Dutch Yinz-enary",
        foundAt: "RT"
    },
    {
        number: "313-131",
        name: "C-Street/Denver according to ETNL Reception Desk",
        foundAt: "RT"
    },
    {
        number: "376-101",
        name: "Walter Dram",
        foundAt: "OM"
    },
    {
        number: "376-102",
        name: "Cecelia Dram",
        foundAt: "OM"
    },
    {
        number: "376-105",
        name: "Kaz Matsumura",
        foundAt: "OM"
    },
    {
        number: "376-771",
        name: "Lord Petri Dockett III",
        foundAt: "OM"
    },
    {
        number: "376-772",
        name: "Beatrice Young",
        foundAt: "OM"
    },
    {
        number: "376-773",
        name: "Elder Yanis",
        foundAt: "OM"
    },
    {
        number: "376-774",
        name: "Oni Stern",
        foundAt: "OM"
    },
    {
        number: "376-775",
        name: "Belmont Grant",
        foundAt: "OM"
    },
    {
        number: "376-776",
        name: "Javier Apodaca",
        foundAt: "OM"
    },
    {
        number: "376-777",
        name: "Olive Rojas-Diaz",
        foundAt: "OM"
    },
    {
        number: "376-778",
        name: "Jacqueline Sorrentino",
        foundAt: "OM"
    },
    {
        number: "376-779",
        name: "El Espectro",
        foundAt: "OM"
    },
    {
        number: "376-305",
        name: "Dramcorp Main Line",
        foundAt: "OM"
    },
    {
        number: "376-303",
        name: "Dramcorp IT",
        foundAt: "OM"
    },
    {
        number: "376-307",
        name: "Dramcorp HR",
        foundAt: "OM"
    },
    {
        number: "376-406",
        name: "Dramcorp Legal",
        foundAt: "OM"
    },
    {
        number: "376-501",
        name: "Dramcorp Marketing",
        foundAt: "OM"
    },
    {
        number: "376-868",
        name: "Dramcorp Hotline",
        foundAt: "OM"
    },
    {
        number: "376-912",
        name: "Dramcorp Security",
        foundAt: "OM"
    },
    {
        number: "378-001",
        name: "DART Offices",
        foundAt: "OM"
    },
    {
        number: "378-010",
        name: "DART Portal Testing",
        foundAt: "OM"
    },
    {
        number: "378-492",
        name: "DART Flyer",
        foundAt: "RT"
    },
    {
        number: "322-426",
        name: "Dramcorp Factory Foreman's Office",
        foundAt: "OM"
    },

    {
        number: "972-736-7676",
        name: "Dug's Old Phone Number (Use MW App Now)",
        foundAt: "TRU",
        image: "dug.png",
        imageAlt: "Got a bean for your mind garden? Text Dug at 972-736-7676"
    },
    {
        number: "443-401",
        name: "Cyber Night",
        foundAt: "RT"
    },
    {
        number: "484-666",
        name: "Plotzo/Undermallers?",
        foundAt: "???"
    },
    {
        number: "484-777",
        name: "Battle of the Ages/Llama",
        foundAt: "TRU"
    },
    {
        number: "484-237",
        name: "?ur-i-ñoz",
        foundAt: "TRU"
    },
    {
        number: "584-388",
        name: "ETNL Main",
        foundAt: "RT"
    }, 
    {
        number: "584-935",
        name: "Zelfina's Burgz",
        foundAt: "RT"
    }, 
    {
        number: "584-076",
        name: "ETNL Reception",
        foundAt: "RT"
    },
    {
        number: "584-344",
        name: "Mamacita's Pickled Eggs",
        foundAt: "RT"
    },
    {
        number: "584-001",
        name: "ETNL Station Manager",
        foundAt: "RT"
    }, 
    {
        number: "584-748",
        name: "ETNL Green Room",
        foundAt: "RT"
    }, 
    {
        number: "584-480",
        name: "ETNL Rack Room",
        foundAt: "RT"
    }, 
    {
        number: "584-873",
        name: "ETNL Roof Deck",
        foundAt: "RT"
    }, 
    {
        number: "584-986",
        name: "ETNL Breakroom",
        foundAt: "RT"
    }, 
    {
        number: "584-549",
        name: "The Lizard Pit",
        foundAt: "RT"
    }, 
    {
        number: "639-466",
        name: "Silent Schleppers",
        foundAt: "RT"
    }, 
    {
        number: "639-744",
        name: "Silent Schleppers",
        foundAt: "RT"
    },
    {
        number: "639-349",
        name: "Are you Flexing On Me Bro? (Male Aggression Hotline)",
        foundAt: "RT"
    }, 
    {
        number: "639-282",
        name: "Amalgam",
        foundAt: "RT"
    }, 
    {
        number: "484-327",
        name: "Ear Idyllic Ear Scan",
        foundAt: "RT"
    }, 
    {
        number: "639-555",
        name: "??? (Call failed)",
        foundAt: "RT"
    }, 
    {
        number: "484-211",
        name: "Lampshop Alley",
        foundAt: "RT"
    }, 
    {
        number: "484-366",
        name: "Presidential World Domination Red Phone Line",
        foundAt: "RT"
    }, 
    {
        number: "278-209",
        name: "??? (All circuits busy now)",
        foundAt: "RT"
    },
    {
        number: "010-222-8371",
        name: "Smellin Melvin",
        foundAt: "RT"
    }, 
    {
        number: "278-201",
        name: "??? (No response)",
        foundAt: "RT"
    }, 
    {
        number: "278-986",
        name: "??? (All circuits busy now)",
        foundAt: "RT"
    }, 
    {
        number: "278-208",
        name: "??? (No answer -- On breaker switch)",
        foundAt: "RT"
    },
    {
        number: "594-386",
        name: "??? (RT Teaser Commercial)",
        foundAt: "RT"
    },
    {
        number: "584-386",
        name: "ETNL Main/Phone Tree",
        foundAt: "RT"
    },
    {
        number: "484-201",
        name: "Delaney Kitchen",
        foundAt: "RT"
    },
    {
        number: "713-281",
        name: "DJ Hawk? (Cannot be completed ad dialed)",
        foundAt: "RT"
    },
    {
        number: "484-437",
        name: "Doppelgänger Hotline (Not in service)",
        foundAt: "RT"
    },
    {
        number: "484-237",
        name: "No Questions Asked New Identity Hotline",
        foundAt: "TRU"
    }, 
    {
        number: "584-447",
        name: "Garlic Inferno",
        foundAt: "RT"
    },
    {
        number: "584-228",
        name: "Ramona's Music Lessons",
        foundAt: "RT"
    }, 
    {
        number: "589-777",
        name: "Cowboix Hevvven",
        foundAt: "RT"
    }, 
    {
        number: "1-777-CBX-HVVN",
        name: "Cowboix Hevvven",
        foundAt: "RT"
    }, 
    {
        number: "634-799",
        name: "??? (Cannot be completed as dialed)",
        foundAt: "RT"
    }, 
    {
        number: "639-119",
        name: "Emergency Dispatch Center",
        foundAt: "RT"
    }, 
    {
        number: "484-204",
        name: "Le Coupez, Alteraciones",
        foundAt: "RT"
    }, 
    {
        number: "773-404",
        name: "Charlie Dram",
        foundAt: "RT"
    },
    {
        number: "443-226",
        name: "Banana Wizard",
        foundAt: "RT"
    },
    {
        number: "834-286",
        name: "Defense Class",
        foundAt: "RT"
    },
    {
        number: "664-739",
        name: "Hester Dram Dial-A-Romance",
        foundAt: "RT"
    },
    {
        number: "664-206",
        name: "??? (Live phone somewhere)",
        foundAt: "RT"
    },
    {
        number: "664-205",
        name: "??? (Live phone somewhere)",
        foundAt: "RT"
    },
    {
        number: "664-666",
        name: "Dramcorp Chambers of Customer Service",
        foundAt: "RT"
    },
    {
        number: "443-242",
        name: "Prank Bell",
        foundAt: "RT"
    },
    {
        number: "639-000",
        name: "Meow Wolf Helpline",
        foundAt: "???"
    },
    {
        number: "322-201",
        name: "???",
        foundAt: "Reddit"
    },
    {
        number: "322-354",
        name: "Oscillabond Maintenance",
        foundAt: "Reddit"
    },
    {
        number: "278-LAW (529)",
        name: "Law Offices of La Madrina",
        foundAt: "Reddit"
    },
    {
        number: "262-201",
        name: "CS?",
        foundAt: "Discord"
    },
    {
        number: "262-201",
        name: "CS?",
        foundAt: "Discord"
    },
    {
        number: "262-202",
        name: "R@s Nest",
        foundAt: "Discord"
    },
    {
        number: "262-203",
        name: "Rest Stop (CS Bathroom)",
        foundAt: "Discord"
    },
    {
        number: "276-676",
        name: "Marin Dram Tip Line",
        foundAt: "Discord"
    },
    {
        number: "278-112",
        name: "Elektro",
        foundAt: "Discord"
    },
    {
        number: "278-201",
        name: "Panopticon Technician",
        foundAt: "Discord"
    },
    {
        number: "278-202",
        name: "SaLawn",
        foundAt: "Discord"
    },
    {
        number: "278-203",
        name: "C-Street Alley Payphone",
        foundAt: "Discord"
    },
    {
        number: "278-204",
        name: "Mijo Miho",
        foundAt: "Discord"
    },
    {
        number: "278-205",
        name: "C-Street North Payphone",
        foundAt: "Discord"
    },
    {
        number: "278-206",
        name: "C-Street South Payphone",
        foundAt: "Discord"
    },
    {
        number: "278-207",
        name: "The Cycle",
        foundAt: "Discord"
    },
    {
        number: "278-209",
        name: "May & Fred Cotter",
        foundAt: "Discord"
    },
    {
        number: "278-221",
        name: "Sid the Psychic",
        foundAt: "Discord"
    },
    {
        number: "278-346",
        name: "Oprheum Monoplex Movie Phone",
        foundAt: "Discord"
    },
    {
        number: "278-404",
        name: "Forgotten Four Tipline",
        foundAt: "Discord"
    },
    {
        number: "278-487",
        name: "The Gyre Apartments",
        foundAt: "Discord"
    },
    {
        number: "278-563",
        name: "Infatuation Station Stanline",
        foundAt: "Discord"
    },
    {
        number: "278-569",
        name: "Hair Management",
        foundAt: "Discord"
    },
    {
        number: "278-636",
        name: "SameDay News Office",
        foundAt: "Discord"
    },
    {
        number: "278-747",
        name: "Daily Phaseball Recap",
        foundAt: "Discord"
    },
    {
        number: "278-766",
        name: "Cecil Baca's Audio Poem Repository",
        foundAt: "Discord"
    },
    {
        number: "278-930",
        name: "Convergence Exchange Main Line",
        foundAt: "Discord"
    },
    {
        number: "278-995",
        name: "Pet Shop",
        foundAt: "Discord"
    },
    {
        number: "877-942-8484",
        name: "Sherman Stokes",
        foundAt: "Reddit"
    }
];

const createSMSLink = (number) => {
    const link = document.createElement('a');
    link.textContent = number;
    link.setAttribute("href", "sms:+1" + number.replace(/\D/g, ''));
    return link;
};

const createSpan = (contents) => {
    const span = document.createElement('span');
    span.textContent = contents;
    return span;
};

const createStrong = (contents) => {
    const span = document.createElement('strong');
    span.textContent = contents;
    return span;
}; 

const createImage = (src, alt) => {
    const img = document.createElement('img');
    img.setAttribute("src", src);
    img.setAttribute("alt", alt);
    return img;
}; 


const list = document.createElement('ul');

numbers.sort((dataA, dataB) => {
    let nameComp = dataA.name.localeCompare(dataB.name);

    if (nameComp !== 0) {
        return nameComp;
    }

    return dataA.number.localeCompare(dataB.number);
}).forEach((data) => {
    const listItem = document.createElement('li');
    
    listItem.appendChild(createStrong(data.name));
    listItem.appendChild(createSpan(''));
    
    if (data.text) { 
        listItem.appendChild(createSMSLink(data.number));
    } else {
            listItem.appendChild(createSpan(data.number));
    } 
        
    list.appendChild(listItem);
    
    if (data.image) {
        const listItemImg = document.createElement('li');
        listItemImg.classList.add("imageItem");
        listItemImg.setAttribute("img-src", data.image);
        
        listItemImg.appendChild(createImage(data.image, data.imageAlt));
        
        list.appendChild(listItemImg);
    } 
});
    
document.body.insertBefore(list, document.querySelector('footer')); 
    