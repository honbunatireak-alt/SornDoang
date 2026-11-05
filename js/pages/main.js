const pageCategory = document.body.dataset.category || "all";

function renderBrand(sectionId, products) {
    const section = document.getElementById(sectionId);
    if (!section) return;

    const list = pageCategory === "all"
        ? products
        : products.filter(p => [].concat(p.category).includes(pageCategory));

    section.innerHTML = list.map(item => `
        <figure>
            <img src="${item.image}" alt="${item.title}">
            <h4>${item.title}</h4>
            <ul>
                ${item.specs.map(spec => `<li>${spec}</li>`).join("")}
            </ul>
            <div>
                <h5>Price : $${item.price.toLocaleString('en-US')}</h5>
                <button>Add to card</button>
            </div>
        </figure>
    `).join("");

    // hide the brand's <h3> and the section when nothing matches this page
    const show = list.length > 0;
    section.style.display = show ? "" : "none";
    const heading = section.previousElementSibling;
    if (heading && heading.tagName === "H3") heading.style.display = show ? "" : "none";
}
const apple_section = document.getElementById('apple');

const apple_category = [
    // 256GB
    {
        title : "MacBook Neo A18 Pro 2026",
        image : "/assets/img/apple/Neo1.png",
        specs : [
            "Apple A18 Pro Chip (6C-CPU / 5GPU)",
            "RAM : 8GB Unified Memory",
            "SSD : 256GB SSD",
            "13.0-inch Liquid Retina display 500nits",
            "Magic Keyboard",
            "Weight : 1.2kg / Color : Indigo"
        ],
        price : 739,
    },
    {
        title : "MacBook Neo A18 Pro 2026",
        image : "/assets/img/apple/Neo2.png",
        specs : [
            "Apple A18 Pro Chip (6C-CPU / 5GPU)",
            "RAM : 8GB Unified Memory",
            "SSD : 256GB SSD",
            "13.0-inch Liquid Retina display 500nits",
            "Magic Keyboard",
            "Weight : 1.2kg / Color : Indigo"
        ],
        price : 739,
    },
    {
        title : "MacBook Neo A18 Pro 2026",
        image : "/assets/img/apple/Neo3.png",
        specs : [
            "Apple A18 Pro Chip (6C-CPU / 5GPU)",
            "RAM : 8GB Unified Memory",
            "SSD : 256GB SSD",
            "13.0-inch Liquid Retina display 500nits",
            "Magic Keyboard",
            "Weight : 1.2kg / Color : Indigo"
        ],
        price : 739,
    },
    {
        title : "MacBook Neo A18 Pro 2026",
        image : "/assets/img/apple/Neo4.png",
        specs : [
            "Apple A18 Pro Chip (6C-CPU / 5GPU)",
            "RAM : 8GB Unified Memory",
            "SSD : 256GB SSD",
            "13.0-inch Liquid Retina display 500nits",
            "Magic Keyboard",
            "Weight : 1.2kg / Color : Indigo"
        ],
        price : 739,
    },
    // 512GB
    {
        title : "MacBook Neo A18 Pro 2026",
        image : "/assets/img/apple/Neo1.png",
        specs : [
            "Apple A18 Pro Chip (6C-CPU / 5GPU)",
            "RAM : 8GB Unified Memory",
            "SSD : 512GB SSD",
            "13.0-inch Liquid Retina display 500nits",
            "Magic Keyboard",
            "Weight : 1.2kg / Color : Indigo"
        ],
        price : 849,
    },
    {
        title : "MacBook Neo A18 Pro 2026",
        image : "/assets/img/apple/Neo2.png",
        specs : [
            "Apple A18 Pro Chip (6C-CPU / 5GPU)",
            "RAM : 8GB Unified Memory",
            "SSD : 512GB SSD",
            "13.0-inch Liquid Retina display 500nits",
            "Magic Keyboard",
            "Weight : 1.2kg / Color : Indigo"
        ],
        price : 849,
    },
    {
        title : "MacBook Neo A18 Pro 2026",
        image : "/assets/img/apple/Neo3.png",
        specs : [
            "Apple A18 Pro Chip (6C-CPU / 5GPU)",
            "RAM : 8GB Unified Memory",
            "SSD : 512GB SSD",
            "13.0-inch Liquid Retina display 500nits",
            "Magic Keyboard",
            "Weight : 1.2kg / Color : Indigo"
        ],
        price : 849,
    },
    {
        title : "MacBook Neo A18 Pro 2026",
        image : "/assets/img/apple/Neo4.png",
        specs : [
            "Apple A18 Pro Chip (6C-CPU / 5GPU)",
            "RAM : 8GB Unified Memory",
            "SSD : 512GB SSD",
            "13.0-inch Liquid Retina display 500nits",
            "Magic Keyboard",
            "Weight : 1.2kg / Color : Indigo"
        ],
        price : 849,
    },
    // Air Models
    // 512GB
    {
        title : "MacBook Air 13-inch M5 2026",
        image : "/assets/img/apple/Air1.png",
        specs : [
            "Apple A18 Pro Chip (6C-CPU / 5GPU)",
            "RAM : 8GB Unified Memory",
            "SSD : 512GB SSD",
            "13.0-inch Liquid Retina display 500nits",
            "Magic Keyboard",
            "Weight : 1.2kg / Color : Indigo"
        ],
        price : 1359,
        category : "ultrabook"
    },
    {
        title : "MacBook Air 13-inch M5 2026",
        image : "/assets/img/apple/Air2.png",
        specs : [
            "Apple A18 Pro Chip (6C-CPU / 5GPU)",
            "RAM : 8GB Unified Memory",
            "SSD : 512GB SSD",
            "13.0-inch Liquid Retina display 500nits",
            "Magic Keyboard",
            "Weight : 1.2kg / Color : Indigo"
        ],
        price : 1359,
        category : "ultrabook"
    },
    {
        title : "/MacBook Air 13-inch M5 2026",
        image : "/assets/img/apple/Air3.png",
        specs : [
            "Apple A18 Pro Chip (6C-CPU / 5GPU)",
            "RAM : 8GB Unified Memory",
            "SSD : 512GB SSD",
            "13.0-inch Liquid Retina display 500nits",
            "Magic Keyboard",
            "Weight : 1.2kg / Color : Indigo"
        ],
        price : 1359,
        category : "ultrabook"
    },
    {
        title : "MacBook Air 13-inch M5 2026",
        image : "/assets/img/apple/Air4.png",
        specs : [
            "Apple A18 Pro Chip (6C-CPU / 5GPU)",
            "RAM : 8GB Unified Memory",
            "SSD : 512GB SSD",
            "13.0-inch Liquid Retina display 500nits",
            "Magic Keyboard",
            "Weight : 1.2kg / Color : Indigo"
        ],
        price : 1359,
        category : "ultrabook"
    },
    // 1TB
    {
        title : "MacBook Air 13-inch M5 2026",
        image : "/assets/img/apple/Air1.png",
        specs : [
            "Apple A18 Pro Chip (6C-CPU / 5GPU)",
            "RAM : 8GB Unified Memory",
            "SSD : 1TB SSD",
            "13.0-inch Liquid Retina display 500nits",
            "Magic Keyboard",
            "Weight : 1.2kg / Color : Indigo"
        ],
        price : 1659,
        category : "ultrabook"
    },
    {
        title : "MacBook Air 13-inch M5 2026",
        image : "/assets/img/apple/Air2.png",
        specs : [
            "Apple A18 Pro Chip (6C-CPU / 5GPU)",
            "RAM : 8GB Unified Memory",
            "SSD : 1TB SSD",
            "13.0-inch Liquid Retina display 500nits",
            "Magic Keyboard",
            "Weight : 1.2kg / Color : Indigo"
        ],
        price : 1659,
        category : "ultrabook"
    },
    {
        title : "MacBook Air 13-inch M5 2026",
        image : "/assets/img/apple/Air3.png",
        specs : [
            "Apple A18 Pro Chip (6C-CPU / 5GPU)",
            "RAM : 8GB Unified Memory",
            "SSD : 1TB SSD",
            "13.0-inch Liquid Retina display 500nits",
            "Magic Keyboard",
            "Weight : 1.2kg / Color : Indigo"
        ],
        price : 1659,
        category : "ultrabook"
    },
    {
        title : "MacBook Air 13-inch M5 2026",
        image : "/assets/img/apple/Air4.png",
        specs : [
            "Apple A18 Pro Chip (6C-CPU / 5GPU)",
            "RAM : 8GB Unified Memory",
            "SSD : 1TB SSD",
            "13.0-inch Liquid Retina display 500nits",
            "Magic Keyboard",
            "Weight : 1.2kg / Color : Indigo"
        ],
        price : 1659,
        category : "ultrabook"
    },

    {
        title : "MacBook Pro 14-inch M5",
        image : "/assets/img/apple/Pro.png",
        specs : [
            "CPU : Apple M5 Chip 10-Core 10 GPU",
            "RAM : 16GB",
            "SSD : 1TB",
            "Display : 14-inch Liquid Retina XDR display²",
            "Keyboard : Magic Keyboard with Touch ID",
            "Weight : 1.55kg",
            "Color : Black"
        ],
        price : 2129,
        category : "workstation"
    },
    {
        title : "MacBook Pro 14-inch M5",
        image : "/assets/img/apple/pro2.png",
        specs : [
            "CPU : Apple M5 Chip 10-Core 10 GPU",
            "RAM : 24GB",
            "SSD : 1TB",
            "Display : 14-inch Liquid Retina XDR display²",
            "Keyboard : Magic Keyboard with Touch ID",
            "Weight : 1.55kg",
            "Color : Silver"
        ],
        price : 2359,
        category : "workstation"
    },
    {
        title : "MacBook Pro 14-inch M5",
        image : "/assets/img/apple/Pro.png",
        specs : [
            "CPU : Apple M5 Chip 10-Core 10 GPU",
            "RAM : 24GB",
            "SSD : 1TB",
            "Display : 14-inch Liquid Retina XDR display²",
            "Keyboard : Magic Keyboard with Touch ID",
            "Weight : 1.55kg",
            "Color : Black"
        ],
        price : 2359,
        category : "workstation"
    },
    {
        title : "MacBook Pro 14-inch M5",
        image : "/assets/img/apple/pro2.png",
        specs : [
            "CPU : Apple M5 Chip 10-Core 10 GPU",
            "RAM : 32GB",
            "SSD : 1TB",
            "Display : 14-inch Liquid Retina XDR display²",
            "Keyboard : Magic Keyboard with Touch ID",
            "Weight : 1.55kg",
            "Color : Silver"
        ],
        price : 2359,
        category : "workstation"
    },
]
// lenovo
const lenovo_section = document.getElementById('lenovo');

const lenovo_category = [
    {
        title : "ThinkPad X1 Carbon Gen 13 Aura Edition",
        image : "/assets/img/Lenovo/x.png",
        specs : [
            "CPU : Intel Core Ultra 7 268V Processor",
            "RAM : 32GB LPDDR5X | SSD : 1TB PCIe",
            "Display​ : 14-inch WUXGA-Touch",
            "GPU : Intel Arc Graphics",
            "IR/RGB Hybrid with Microphone",
            "OS : DOS",
            "Weight : 0.9kg | Eclipse Black"
        ],
        price : 2299,
        category : "ultrabook"
    },
    {
        title : "ThinkPad X1 Carbon Gen 13 Aura Edition",
        image : "/assets/img/Lenovo/x.png",
        specs : [
            "CPU : Intel Core Ultra 7 268V Processor",
            "RAM : 32GB LPDDR5X | SSD : 2TB PCIe",
            "Display​ : 14-inch WUXGA-Touch",
            "GPU : Intel Arc Graphics",
            "IR/RGB Hybrid with Microphone",
            "OS : DOS",
            "Weight : 0.9kg | Eclipse Black"
        ],
        price : 2299,
        category : "ultrabook"
    },
    {
        title : "ThinkPad X1 Carbon Gen 13 Aura Edition",
        image : "/assets/img/Lenovo/x.png",
        specs : [
            "CPU : Intel Core Ultra 7 268V Processor",
            "RAM : 32GB LPDDR5X | SSD : 1TB PCIe",
            "Display​ : 14-inch WUXGA-Touch",
            "GPU : Intel Arc Graphics",
            "IR/RGB Hybrid with Microphone",
            "OS : DOS",
            "Weight : 0.9kg | Eclipse Black"
        ],
        price : 2299,
        category : "ultrabook"
    },
    {
        title : "ThinkPad X1 Carbon Gen 13 Aura Edition",
        image : "/assets/img/Lenovo/x.png",
        specs : [
            "CPU : Intel Core Ultra 7 268V Processor",
            "RAM : 32GB LPDDR5X | SSD : 2TB PCIe",
            "Display​ : 14-inch WUXGA-Touch",
            "GPU : Intel Arc Graphics",
            "IR/RGB Hybrid with Microphone",
            "OS : DOS",
            "Weight : 0.9kg | Eclipse Black"
        ],
        price : 2299,
        category : "ultrabook"
    },
    {
        title : "Lenovo LOQ 15AHP9",
        image : "/assets/img/Lenovo/loq1.png",
        specs : [
            "CPU : AMD Ryzen 7 155 (6C/12T)",
            "RAM : 16GB DDR5 = 32GB = $xxx",
            "SSD : 512GB PCIe",
            "Display​ : 15.6” FHD IPS 144Hz",
            "GPU : NVIDIA RTX 3050 6GB GDDR6",
            "Backlit Keyboard, English",
            "OS : Windows 11 License",
            "Weight : 2.23kg | Color : Luna Grey"
        ],
        price : 1299,
        category : "gaming"
    },
    {
        title : "Lenovo LOQ 15AHP9",
        image : "/assets/img/Lenovo/loq1.png",
        specs : [
            "CPU : AMD Ryzen 7 155 (6C/12T)",
            "RAM : 16GB DDR5 = 32GB = $xxx",
            "SSD : 1TB PCIe",
            "Display​ : 15.6” FHD IPS 144Hz",
            "GPU : NVIDIA RTX 3050 6GB GDDR6",
            "Backlit Keyboard, English",
            "OS : Windows 11 License",
            "Weight : 2.23kg | Color : Luna Grey"
        ],
        price : 1389,
        category : "gaming"
    },
    {
        title : "Lenovo LOQ 15AHP9",
        image : "/assets/img/Lenovo/loq1.png",
        specs : [
            "CPU : AMD Ryzen 7 155 (6C/12T)",
            "RAM : 16GB DDR5 = 32GB = $xxx",
            "SSD : 2TB PCIe",
            "Display​ : 15.6” FHD IPS 144Hz",
            "GPU : NVIDIA RTX 3050 6GB GDDR6",
            "Backlit Keyboard, English",
            "OS : Windows 11 License",
            "Weight : 2.23kg | Color : Luna Grey"
        ],
        price : 1519,
        category : "gaming"
    },
    {
        title : "Lenovo LOQ 15AHP9",
        image : "/assets/img/Lenovo/loq1.png",
        specs : [
            "CPU : AMD Ryzen 7 155 (6C/12T)",
            "RAM : 16GB DDR5 = 32GB = $xxx",
            "SSD : 2TB PCIe",
            "Display​ : 15.6” FHD IPS 144Hz",
            "GPU : NVIDIA RTX 3050 6GB GDDR6",
            "Backlit Keyboard, English",
            "OS : Windows 11 License",
            "Weight : 2.23kg | Color : Luna Grey"
        ],
        price : 1519,
        category : "gaming"
    },
    {
        title : "Lenovo LOQ 15IRX9",
        image : "/assets/img/Lenovo/loq2.png",
        specs : [
            "CPU : Intel Core i7-14650HX (16C/24T)",
            "RAM : 16GB DDR5 = 32GB = $xxx",
            "SSD : 512GB PCIe",
            "Display​ : 15.6” FHD IPS 144Hz",
            "GPU : NVIDIA RTX 4050 6GB GDDR6",
            "4-Zone RGB Backlit, English",
            "OS : Windows 11 License",
            "Weight : 2.23kg | Color : Luna Grey"
        ],
        price : 1499,
        category : "gaming"
    },
    {
        title : "Lenovo LOQ 15IRX9",
        image : "/assets/img/Lenovo/loq2.png",
        specs : [
            "CPU : Intel Core i7-14650HX (16C/24T)",
            "RAM : 16GB DDR5 = 32GB = $xxx",
            "SSD : 1TB PCIe",
            "Display​ : 15.6” FHD IPS 144Hz",
            "GPU : NVIDIA RTX 4050 6GB GDDR6",
            "4-Zone RGB Backlit, English",
            "OS : Windows 11 License",
            "Weight : 2.23kg | Color : Luna Grey"
        ],
        price : 1589,
        category : "gaming"
    },
    {
        title : "Lenovo LOQ 15IRX9",
        image : "/assets/img/Lenovo/loq2.png",
        specs : [
            "CPU : Intel Core i7-14650HX (16C/24T)",
            "RAM : 16GB DDR5 = 32GB = $xxx",
            "SSD : 2TB PCIe",
            "Display​ : 15.6” FHD IPS 144Hz",
            "GPU : NVIDIA RTX 4050 6GB GDDR6",
            "4-Zone RGB Backlit, English",
            "OS : Windows 11 License",
            "Weight : 2.23kg | Color : Luna Grey"
        ],
        price : 1719,
        category : "gaming"
    },
    {
        title : "Lenovo LOQ 15IRX9",
        image : "/assets/img/Lenovo/loq2.png",
        specs : [
            "CPU : Intel Core i7-14650HX (16C/24T)",
            "RAM : 16GB DDR5 = 32GB = $xxx",
            "SSD : 2TB PCIe",
            "Display​ : 15.6” FHD IPS 144Hz",
            "GPU : NVIDIA RTX 4050 6GB GDDR6",
            "4-Zone RGB Backlit, English",
            "OS : Windows 11 License",
            "Weight : 2.23kg | Color : Luna Grey"
        ],
        price : 1719,
        category : "gaming"
    },
    {
        title : "Lenovo LOQ 17IRX10",
        image : "/assets/img/Lenovo/loq3.png",
        specs : [
            "CPU : Intel Core i7-14700HX Processor",
            "RAM : 16GB DDR5 = 32GB = $xxx",
            "SSD : 512GB PCIe",
            "Display​ : 17.3” FHD IPS 165Hz",
            "GPU : NVIDIA RTX 5070 8GB GDDR7",
            "24-Zone RGB Backlit, English",
            "OS : Windows 11 License",
            "Weight : 2.9kg | Color : Luna Grey"
        ],
        price : 1699,
        category : "gaming"
    },
    {
        title : "Lenovo LOQ 17IRX10",
        image : "/assets/img/Lenovo/loq3.png",
        specs : [
            "CPU : Intel Core i7-14700HX Processor",
            "RAM : 16GB DDR5 = 32GB = $xxx",
            "SSD : 1TB PCIe",
            "Display​ : 17.3” FHD IPS 165Hz",
            "GPU : NVIDIA RTX 5070 8GB GDDR7",
            "24-Zone RGB Backlit, English",
            "OS : Windows 11 License",
            "Weight : 2.9kg | Color : Luna Grey"
        ],
        price : 1789,
        category : "gaming"
    },
    {
        title : "Lenovo LOQ 17IRX10",
        image : "/assets/img/Lenovo/loq3.png",
        specs : [
            "CPU : Intel Core i7-14700HX Processor",
            "RAM : 16GB DDR5 = 32GB = $xxx",
            "SSD : 2TB PCIe",
            "Display​ : 17.3” FHD IPS 165Hz",
            "GPU : NVIDIA RTX 5070 8GB GDDR7",
            "24-Zone RGB Backlit, English",
            "OS : Windows 11 License",
            "Weight : 2.9kg | Color : Luna Grey"
        ],
        price : 1919,
        category : "gaming"
    },
    {
        title : "Lenovo LOQ 17IRX10",
        image : "/assets/img/Lenovo/loq3.png",
        specs : [
            "CPU : Intel Core i7-14700HX Processor",
            "RAM : 16GB DDR5 = 32GB = $xxx",
            "SSD : 2TB PCIe",
            "Display​ : 17.3” FHD IPS 165Hz",
            "GPU : NVIDIA RTX 5070 8GB GDDR7",
            "24-Zone RGB Backlit, English",
            "OS : Windows 11 License",
            "Weight : 2.9kg | Color : Luna Grey"
        ],
        price : 1919,
        category : "gaming"
    },

    {
        title : "LENOVO LEGION 5 15IRX10",
        image : "/assets/img/Lenovo/legion1.png",
        specs : [
            "CPU : Intel Core i7-13650HX Processor",
            "RAM : 16GB DDR5 = 32GB = $xxx",
            "SSD : 512GB PCIe",
            "Display : 15.3\" WUXGA 165Hz 100% sRGB",
            "GPU : NVIDIA RTX 5050 8GB GDDR7",
            "keyboard : Backlit Keyboard",
            "OS : Windows 11 License",
            "Weight : 2.3Kg | Color : Eclipse Black"
        ],
        price : 1399,
        category : "gaming"
    },
    {
        title : "LENOVO LEGION 5 15IRX10",
        image : "/assets/img/Lenovo/legion1.png",
        specs : [
            "CPU : Intel Core i7-13650HX Processor",
            "RAM : 16GB DDR5 = 32GB = $xxx",
            "SSD : 1TB PCIe",
            "Display : 15.3\" WUXGA 165Hz 100% sRGB",
            "GPU : NVIDIA RTX 5050 8GB GDDR7",
            "keyboard : Backlit Keyboard",
            "OS : Windows 11 License",
            "Weight : 2.3Kg | Color : Eclipse Black"
        ],
        price : 1489,
        category : "gaming"
    },
    {
        title : "LENOVO LEGION 5 15IRX10",
        image : "/assets/img/Lenovo/legion1.png",
        specs : [
            "CPU : Intel Core i7-13650HX Processor",
            "RAM : 16GB DDR5 = 32GB = $xxx",
            "SSD : 512GB + 1TB PCIe",
            "Display : 15.3\" WUXGA 165Hz 100% sRGB",
            "GPU : NVIDIA RTX 5050 8GB GDDR7",
            "keyboard : Backlit Keyboard",
            "OS : Windows 11 License",
            "Weight : 2.3Kg | Color : Eclipse Black"
        ],
        price : 1569,
        category : "gaming"
    },
    {
        title : "LENOVO LEGION 5 15IRX10",
        image : "/assets/img/Lenovo/legion1.png",
        specs : [
            "CPU : Intel Core i7-13650HX Processor",
            "RAM : 16GB DDR5 = 32GB = $xxx",
            "SSD : 2TB PCIe",
            "Display : 15.3\" WUXGA 165Hz 100% sRGB",
            "GPU : NVIDIA RTX 5050 8GB GDDR7",
            "keyboard : Backlit Keyboard",
            "OS : Windows 11 License",
            "Weight : 2.3Kg | Color : Eclipse Black"
        ],
        price : 1619,
        category : "gaming"
    },

    {
        title : "LENOVO LEGION 5 15IRX10",
        image : "/assets/img/Lenovo/legion1.png",
        specs : [
            "CPU : Intel Core i7-13650HX Processor",
            "RAM : 16GB DDR5 = 32GB = $xxx",
            "SSD : 512GB PCIe",
            "Display : 15.3\" WUXGA 165Hz 100% sRGB",
            "GPU : NVIDIA RTX 5060 8GB GDDR7",
            "keyboard : Backlit Keyboard",
            "OS : Windows 11 License",
            "Weight : 2.3Kg | Color : Eclipse Black"
        ],
        price : 1399,
        category : "gaming"
    },
    {
        title : "LENOVO LEGION 5 15IRX10",
        image : "/assets/img/Lenovo/legion1.png",
        specs : [
            "CPU : Intel Core i7-13650HX Processor",
            "RAM : 16GB DDR5 = 32GB = $xxx",
            "SSD : 1TB PCIe",
            "Display : 15.3\" WUXGA 165Hz 100% sRGB",
            "GPU : NVIDIA RTX 5060 8GB GDDR7",
            "keyboard : Backlit Keyboard",
            "OS : Windows 11 License",
            "Weight : 2.3Kg | Color : Eclipse Black"
        ],
        price : 1489,
        category : "gaming"
    },
    {
        title : "LENOVO LEGION 5 15IRX10",
        image : "/assets/img/Lenovo/legion1.png",
        specs : [
            "CPU : Intel Core i7-13650HX Processor",
            "RAM : 16GB DDR5 = 32GB = $xxx",
            "SSD : 512GB + 1TB PCIe",
            "Display : 15.3\" WUXGA 165Hz 100% sRGB",
            "GPU : NVIDIA RTX 5060 8GB GDDR7",
            "keyboard : Backlit Keyboard",
            "OS : Windows 11 License",
            "Weight : 2.3Kg | Color : Eclipse Black"
        ],
        price : 1569,
        category : "gaming"
    },
    {
        title : "LENOVO LEGION 5 15IRX10",
        image : "/assets/img/Lenovo/legion1.png",
        specs : [
            "CPU : Intel Core i7-13650HX Processor",
            "RAM : 16GB DDR5 = 32GB = $xxx",
            "SSD : 2TB PCIe",
            "Display : 15.3\" WUXGA 165Hz 100% sRGB",
            "GPU : NVIDIA RTX 5060 8GB GDDR7",
            "keyboard : Backlit Keyboard",
            "OS : Windows 11 License",
            "Weight : 2.3Kg | Color : Eclipse Black"
        ],
        price : 1619,
        category : "gaming"
    },

    {
        title : "LENOVO LEGION 5 15IRX10",
        image : "/assets/img/Lenovo/legion2.png",
        specs : [
            "CPU : Intel Core i7-14700HX Processor",
            "RAM : 16GB DDR5 = 32GB = $xxx",
            "SSD : 512GB PCIe",
            "Display : 15.1\" WQXGA OLED 165Hz 100% DCI P3",
            "GPU : NVIDIA RTX 5060 8GB GDDR7",
            "Keyboard : 24-Zone RGB Keyboard",
            "OS : Windows 11 License",
            "Weight : 2.3Kg | Color : Eclipse Black"
        ],
        price : 1599,
        category : "gaming"
    },
    {
        title : "LENOVO LEGION 5 15IRX10",
        image : "/assets/img/Lenovo/legion2.png",
        specs : [
            "CPU : Intel Core i7-14700HX Processor",
            "RAM : 16GB DDR5 = 32GB = $xxx",
            "SSD : 1TB PCIe",
            "Display : 15.1\" WQXGA OLED 165Hz 100% DCI P3",
            "GPU : NVIDIA RTX 5060 8GB GDDR7",
            "Keyboard : 24-Zone RGB Keyboard",
            "OS : Windows 11 License",
            "Weight : 2.3Kg | Color : Eclipse Black"
        ],
        price : 1599,
        category : "gaming"
    },
    {
        title : "LENOVO LEGION 5 15IRX10",
        image : "/assets/img/Lenovo/legion2.png",
        specs : [
            "CPU : Intel Core i7-14700HX Processor",
            "RAM : 16GB DDR5 = 32GB = $xxx",
            "SSD : 512GB + 1TBPCIe",
            "Display : 15.1\" WQXGA OLED 165Hz 100% DCI P3",
            "GPU : NVIDIA RTX 5060 8GB GDDR7",
            "Keyboard : 24-Zone RGB Keyboard",
            "OS : Windows 11 License",
            "Weight : 2.3Kg | Color : Eclipse Black"
        ],
        price : 1599,
        category : "gaming"
    },
    {
        title : "LENOVO LEGION 5 15IRX10",
        image : "/assets/img/Lenovo/legion2.png",
        specs : [
            "CPU : Intel Core i7-14700HX Processor",
            "RAM : 16GB DDR5 = 32GB = $xxx",
            "SSD : 2TB PCIe",
            "Display : 15.1\" WQXGA OLED 165Hz 100% DCI P3",
            "GPU : NVIDIA RTX 5060 8GB GDDR7",
            "Keyboard : 24-Zone RGB Keyboard",
            "OS : Windows 11 License",
            "Weight : 2.3Kg | Color : Eclipse Black"
        ],
        price : 1599,
        category : "gaming"
    },

    {
        title : "LENOVO LEGION 5 15IRX10",
        image : "/assets/img/Lenovo/legion2.png",
        specs : [
            "CPU : Intel Core i9-14900HX (20C/28T)",
            "RAM : 16GB DDR5 = 32GB = $xxx",
            "SSD : 512GB PCIe",
            "Display : 15.1\" WQXGA OLED 165Hz 100% DCI P3",
            "GPU : NVIDIA RTX 5070 8GB GDDR7",
            "Keyboard : 24-Zone RGB Keyboard",
            "OS : Windows 11 License",
            "Weight : 2.3Kg | Color : Eclipse Black"
        ],
        price : 1599,
        category : "gaming"
    },
    {
        title : "LENOVO LEGION 5 15IRX10",
        image : "/assets/img/Lenovo/legion2.png",
        specs : [
            "CPU : Intel Core i9-14900HX (20C/28T)",
            "RAM : 16GB DDR5 = 32GB = $xxx",
            "SSD : 1TB PCIe",
            "Display : 15.1\" WQXGA OLED 165Hz 100% DCI P3",
            "GPU : NVIDIA RTX 5070 8GB GDDR7",
            "Keyboard : 24-Zone RGB Keyboard",
            "OS : Windows 11 License",
            "Weight : 2.3Kg | Color : Eclipse Black"
        ],
        price : 1599,
        category : "gaming"
    },
    {
        title : "LENOVO LEGION 5 15IRX10",
        image : "/assets/img/Lenovo/legion2.png",
        specs : [
            "CPU : Intel Core i9-14900HX (20C/28T)",
            "RAM : 16GB DDR5 = 32GB = $xxx",
            "SSD : 512GB + 1TBPCIe",
            "Display : 15.1\" WQXGA OLED 165Hz 100% DCI P3",
            "GPU : NVIDIA RTX 5070 8GB GDDR7",
            "Keyboard : 24-Zone RGB Keyboard",
            "OS : Windows 11 License",
            "Weight : 2.3Kg | Color : Eclipse Black"
        ],
        price : 1599,
        category : "gaming"
    },
    {
        title : "LENOVO LEGION 5 15IRX10",
        image : "/assets/img/Lenovo/legion2.png",
        specs : [
            "CPU : Intel Core i9-14900HX (20C/28T)",
            "RAM : 16GB DDR5 = 32GB = $xxx",
            "SSD : 2TB PCIe",
            "Display : 15.1\" WQXGA OLED 165Hz 100% DCI P3",
            "GPU : NVIDIA RTX 5070 8GB GDDR7",
            "Keyboard : 24-Zone RGB Keyboard",
            "OS : Windows 11 License",
            "Weight : 2.3Kg | Color : Eclipse Black"
        ],
        price : 1599,
        category : "gaming"
    },

    {
        title : "LENOVO LEGION PRO 7 16IAX10H",
        image : "/assets/img/Lenovo/legion3.png",
        specs : [
            "CPU : Intel Core Ultra 9 290HX Plus",
            "RAM : 32GB DDR5 = 64GB = $xxx",
            "SSD : 1TB PCIe",
            "Display : 16\" WQXGA OLED 240Hz 100% DCI P3",
            "GPU : NVIDIA RTX 5080 16GB GDDR7",
            "Keyboard : Per-key RGB Backlit Keyboard",
            "OS : Windows 11 License",
            "Weight : 2.54Kg | Color : Eclipse Black"
        ],
        price : 4579,
        category : "gaming"
    },
    {
        title : "LENOVO LEGION PRO 7 16IAX10H",
        image : "/assets/img/Lenovo/legion3.png",
        specs : [
            "CPU : Intel Core Ultra 9 290HX Plus",
            "RAM : 32GB DDR5 = 64GB = $xxx",
            "SSD : 512GB + 1TB PCIe",
            "Display : 16\" WQXGA OLED 240Hz 100% DCI P3",
            "GPU : NVIDIA RTX 5080 16GB GDDR7",
            "Keyboard : Per-key RGB Backlit Keyboard",
            "OS : Windows 11 License",
            "Weight : 2.54Kg | Color : Eclipse Black"
        ],
        price : 1659,
        category : "gaming"
    },
    {
        title : "LENOVO LEGION PRO 7 16IAX10H",
        image : "/assets/img/Lenovo/legion3.png",
        specs : [
            "CPU : Intel Core Ultra 9 290HX Plus",
            "RAM : 32GB DDR5 = 64GB = $xxx",
            "SSD : 2TB PCIe",
            "Display : 16\" WQXGA OLED 240Hz 100% DCI P3",
            "GPU : NVIDIA RTX 5080 16GB GDDR7",
            "Keyboard : Per-key RGB Backlit Keyboard",
            "OS : Windows 11 License",
            "Weight : 2.54Kg | Color : Eclipse Black"
        ],
        price : 4709,
        category : "gaming"
    },
    {
        title : "LENOVO LEGION PRO 7 16IAX10H",
        image : "/assets/img/Lenovo/legion3.png",
        specs : [
            "CPU : Intel Core Ultra 9 290HX Plus",
            "RAM : 32GB DDR5 = 64GB = $xxx",
            "SSD : 512GB + 2TB PCIe",
            "Display : 16\" WQXGA OLED 240Hz 100% DCI P3",
            "GPU : NVIDIA RTX 5080 16GB GDDR7",
            "Keyboard : Per-key RGB Backlit Keyboard",
            "OS : Windows 11 License",
            "Weight : 2.54Kg | Color : Eclipse Black"
        ],
        price : 4789,
        category : "gaming"
    },
]
const proart_section = document.getElementById('proart')
const proart_category = [
    {
        title : "Asus ProArt PZ14 HT7407NA-SN023W",
        image : "/assets/img/asus/proart1.png",
        specs : [
            "CPU : Snapdragon X2 Elite X2E88100",
            "RAM : 32GB LPDDR5X",
            "SSD : 1TB PCIe 4.0",
            "Display : 14\" 3K OLED Touch 144hz",
            "GPU : Qualcomm® Adreno™ GPU",
            "OS : Windows 11 License",
            "Keyboard : Soft Keyboard With Copilot key, Stylus",
            "Color : Nano Black | Weight: 0.79Kg"
        ],
        price : 2849,
        category : "workstation"
    },
    {
        title : "Asus ProArt P16 RTX Spark H7607BA-SE328W",
        image : "/assets/img/asus/proart3.png",
        specs : [
            "CPU : RTX Spark N1X 20-Core",
            "RAM : 48GB LPDDR5X",
            "SSD : 1TB PCIe 4.0",
            "Display : 16\" WQUXGA OLED Touch 120Hz,100% DCI-P3",
            "GPU : NVIDIA Blackwell RTX 6144-Core GPU",
            "OS : Windows 11 License",
            "Keyboard : Backlit Chiclet",
            "Color : Nano Black",
            "Weight: 1.77Kg"
        ],
        price : 4499,
        category : "workstation"
    },
    {
        title : "Asus ProArt P16 H7606WX-SE004W",
        image : "/assets/img/asus/proart2.png",
        specs : [
            "CPU : AMD Ryzen™ AI 9 HX 370",
            "RAM : 64GB LPDDR5X",
            "SSD : 4TB PCIe",
            "Display : 16\" 4K OLED Touch 100% DCI-P3",
            "GPU : NVIDIA® RTX™ 5090 24GB",
            "OS : Windows 11 License",
            "Keyboard : Backlit Chiclet",
            "Color : Nano Black",
            "Weight: 1.85Kg"
        ],
        price : 5999,
        category : "workstation"
    },
    {
        title : "Asus ProArt P16 H7606WX-SE004W",
        image : "/assets/img/asus/proart4.png",
        specs : [
            "CPU : AMD Ryzen™ AI 9 HX 370",
            "RAM : 64GB LPDDR5X",
            "SSD : 4TB PCIe",
            "Display : 16\" 4K OLED Touch 100% DCI-P3",
            "GPU : NVIDIA® RTX™ 5090 24GB",
            "OS : Windows 11 License",
            "Keyboard : Backlit Chiclet",
            "Color : Nano Black",
            "Weight: 1.85Kg"
        ],
        price : 5999,
        category : "workstation"
    },
]
const rog_section = document.getElementById('rog')
const rog_category = [
    {
        title : "ROG Strix G16 | G615JHR-RV073W",
        image : "/assets/img/rog/strix1.png",
        specs : [
            "CPU : 14th Gen Intel® Core™ i7-14650HX",
            "RAM : 16GB (DDR5) = 32GB = $xxx",
            "SSD : 1TB M.2 PCIe",
            "Display : 16-inch FHD+ 165Hz DCI-P3:100.00%",
            "VGA 2 : NVIDIA RTX 5050 8GB",
            "OS : Windows 11 License",
            "Keyboard : Backlit Chiclet Keyboard Per-Key RGB",
            "Color : Volt Green | Weight: 3.0Kg"
        ],
        price : 1649,
        category : "gaming"
    },
    {
        title : "ROG Strix G16 | G615JHR-RV073W",
        image : "/assets/img/rog/strix1.png",
        specs : [
            "CPU : 14th Gen Intel® Core™ i7-14650HX",
            "RAM : 16GB (DDR5) = 32GB = $xxx",
            "SSD : 512GB + 1TB M.2 PCIe",
            "Display : 16-inch FHD+ 165Hz DCI-P3:100.00%",
            "VGA 2 : NVIDIA RTX 5050 8GB",
            "OS : Windows 11 License",
            "Keyboard : Backlit Chiclet Keyboard Per-Key RGB",
            "Color : Volt Green | Weight: 3.0Kg"
        ],
        price : 1729,
        category : "gaming"
    },
    {
        title : "ROG Strix G16 | G615JHR-RV073W",
        image : "/assets/img/rog/strix1.png",
        specs : [
            "CPU : 14th Gen Intel® Core™ i7-14650HX",
            "RAM : 16GB (DDR5) = 32GB = $xxx",
            "SSD : 2TB M.2 PCIe",
            "Display : 16-inch FHD+ 165Hz DCI-P3:100.00%",
            "VGA 2 : NVIDIA RTX 5050 8GB",
            "OS : Windows 11 License",
            "Keyboard : Backlit Chiclet Keyboard Per-Key RGB",
            "Color : Volt Green | Weight: 3.0Kg"
        ],
        price : 1779,
        category : "gaming"
    },
    {
        title : "ROG Strix G16 | G615JHR-RV073W",
        image : "/assets/img/rog/strix1.png",
        specs : [
            "CPU : 14th Gen Intel® Core™ i7-14650HX",
            "RAM : 16GB (DDR5) = 32GB = $xxx",
            "SSD : 512GB + 2TB M.2 PCIe",
            "Display : 16-inch FHD+ 165Hz DCI-P3:100.00%",
            "VGA 2 : NVIDIA RTX 5050 8GB",
            "OS : Windows 11 License",
            "Keyboard : Backlit Chiclet Keyboard Per-Key RGB",
            "Color : Volt Green | Weight: 3.0Kg"
        ],
        price : 1859,
        category : "gaming"
    },

    {
        title : "ROG Strix G16 | G615JMR-RV163W",
        image : "/assets/img/rog/strix1.png",
        specs : [
            "CPU : 14th Gen Intel Core i7-14650HX",
            "RAM : 16GB (DDR5) = 32GB = $xxx",
            "SSD : 1TB M.2 PCIe",
            "GPU : NVIDIA RTX 5060 8GB DDR7",
            "Display : 16-inch FHD+ 165Hz DCI-P3:100.00%",
            "OS : Windows 11 License",
            "Keyboard : Backlit Chiclet Keyboard Per-Key RGB",
            "Color : Volt Green | Weight: 3.0Kg"
        ],
        price : 1749,
        category : "gaming"
    },
    {
        title : "ROG Strix G16 | G615JMR-RV163W",
        image : "/assets/img/rog/strix1.png",
        specs : [
            "CPU : 14th Gen Intel Core i7-14650HX",
            "RAM : 16GB (DDR5) = 32GB = $xxx",
            "SSD : 512GB + 1TB M.2 PCIe",
            "GPU : NVIDIA RTX 5060 8GB DDR7",
            "Display : 16-inch FHD+ 165Hz DCI-P3:100.00%",
            "OS : Windows 11 License",
            "Keyboard : Backlit Chiclet Keyboard Per-Key RGB",
            "Color : Volt Green | Weight: 3.0Kg"
        ],
        price : 1749,
        category : "gaming"
    },
    {
        title : "ROG Strix G16 | G615JMR-RV163W",
        image : "/assets/img/rog/strix1.png",
        specs : [
            "CPU : 14th Gen Intel Core i7-14650HX",
            "RAM : 16GB (DDR5) = 32GB = $xxx",
            "SSD : 2TB M.2 PCIe",
            "GPU : NVIDIA RTX 5060 8GB DDR7",
            "Display : 16-inch FHD+ 165Hz DCI-P3:100.00%",
            "OS : Windows 11 License",
            "Keyboard : Backlit Chiclet Keyboard Per-Key RGB",
            "Color : Volt Green | Weight: 3.0Kg"
        ],
        price : 1749,
        category : "gaming"
    },
    {
        title : "ROG Strix G16 | G615JMR-RV163W",
        image : "/assets/img/rog/strix1.png",
        specs : [
            "CPU : 14th Gen Intel Core i7-14650HX",
            "RAM : 16GB (DDR5) = 32GB = $xxx",
            "SSD : 512GB + 2TB M.2 PCIe",
            "GPU : NVIDIA RTX 5060 8GB DDR7",
            "Display : 16-inch FHD+ 165Hz DCI-P3:100.00%",
            "OS : Windows 11 License",
            "Keyboard : Backlit Chiclet Keyboard Per-Key RGB",
            "Color : Volt Green | Weight: 3.0Kg"
        ],
        price : 1959,
        category : "gaming"
    },

    {
        title : "ROG Strix G18 | G815JMR-S9071W",
        image : "/assets/img/rog/strix1.png",
        specs : [
            "CPU : 14th Gen Intel Core i7-14650HX",
            "RAM : 16GB (DDR5) = 32GB = $xxx",
            "SSD : 1TB M.2 PCIe",
            "GPU : NVIDIA RTX 5060 8GB DDR7",
            "Display : 18-inch 2.5K 240Hz DCI-P3:100.00%",
            "OS : Windows 11 License",
            "Keyboard : Backlit Chiclet Keyboard Per-Key RGB",
            "Color : Volt Green | Weight: 3.2Kg"
        ],
        price : 1949,
        category : "gaming"
    },
    {
        title : "ROG Strix G18 | G815JMR-S9071W",
        image : "/assets/img/rog/strix1.png",
        specs : [
            "CPU : 14th Gen Intel Core i7-14650HX",
            "RAM : 16GB (DDR5) = 32GB = $xxx",
            "SSD : 512GB + 1TB M.2 PCIe",
            "GPU : NVIDIA RTX 5060 8GB DDR7",
            "Display : 18-inch 2.5K 240Hz DCI-P3:100.00%",
            "OS : Windows 11 License",
            "Keyboard : Backlit Chiclet Keyboard Per-Key RGB",
            "Color : Volt Green | Weight: 3.2Kg"
        ],
        price : 1029,
        category : "gaming"
    },
    {
        title : "ROG Strix G18 | G815JMR-S9071W",
        image : "/assets/img/rog/strix1.png",
        specs : [
            "CPU : 14th Gen Intel Core i7-14650HX",
            "RAM : 16GB (DDR5) = 32GB = $xxx",
            "SSD : 2TB M.2 PCIe",
            "GPU : NVIDIA RTX 5060 8GB DDR7",
            "Display : 18-inch 2.5K 240Hz DCI-P3:100.00%",
            "OS : Windows 11 License",
            "Keyboard : Backlit Chiclet Keyboard Per-Key RGB",
            "Color : Volt Green | Weight: 3.2Kg"
        ],
        price : 2079,
        category : "gaming"
    },
    {
        title : "ROG Strix G18 | G815JMR-S9071W",
        image : "/assets/img/rog/strix1.png",
        specs : [
            "CPU : 14th Gen Intel Core i7-14650HX",
            "RAM : 16GB (DDR5) = 32GB = $xxx",
            "SSD : 512GB + 2TB M.2 PCIe",
            "GPU : NVIDIA RTX 5060 8GB DDR7",
            "Display : 18-inch 2.5K 240Hz DCI-P3:100.00%",
            "OS : Windows 11 License",
            "Keyboard : Backlit Chiclet Keyboard Per-Key RGB",
            "Color : Volt Green | Weight: 3.2Kg"
        ],
        price : 2159,
        category : "gaming"
    },
    //4
    {
        title : "ROG Strix G18 | G815LP-TT145W",
        image : "/assets/img/rog/strix1.png",
        specs : [
            "CPU : 14th Gen Intel Core i7-14650HX",
            "RAM : 16GB (DDR5) = 32GB = $xxx",
            "SSD : 1TB M.2 PCIe",
            "GPU : NVIDIA RTX 5060 8GB DDR7",
            "Display : 18-inch 2.5K 240Hz DCI-P3:100.00%",
            "OS : Windows 11 License",
            "Keyboard : Backlit Chiclet Keyboard Per-Key RGB",
            "Color : Volt Green | Weight: 3.2Kg"
        ],
        price : 1949,
        category : "gaming"
    },
    {
        title : "ROG Strix G18 | G815LP-TT145W",
        image : "/assets/img/rog/strix1.png",
        specs : [
            "CPU : 14th Gen Intel Core i7-14650HX",
            "RAM : 16GB (DDR5) = 32GB = $xxx",
            "SSD : 512GB + 1TB M.2 PCIe",
            "GPU : NVIDIA RTX 5060 8GB DDR7",
            "Display : 18-inch 2.5K 240Hz DCI-P3:100.00%",
            "OS : Windows 11 License",
            "Keyboard : Backlit Chiclet Keyboard Per-Key RGB",
            "Color : Volt Green | Weight: 3.2Kg"
        ],
        price : 2029,
        category : "gaming"
    },
    {
        title : "ROG Strix G18 | G815LP-TT145W",
        image : "/assets/img/rog/strix1.png",
        specs : [
            "CPU : 14th Gen Intel Core i7-14650HX",
            "RAM : 16GB (DDR5) = 32GB = $xxx",
            "SSD : 2TB M.2 PCIe",
            "GPU : NVIDIA RTX 5060 8GB DDR7",
            "Display : 18-inch 2.5K 240Hz DCI-P3:100.00%",
            "OS : Windows 11 License",
            "Keyboard : Backlit Chiclet Keyboard Per-Key RGB",
            "Color : Volt Green | Weight: 3.2Kg"
        ],
        price : 2079,
        category : "gaming"
    },
    {
        title : "ROG Strix G18 | G815LP-TT145W",
        image : "/assets/img/rog/strix1.png",
        specs : [
            "CPU : 14th Gen Intel Core i7-14650HX",
            "RAM : 16GB (DDR5) = 32GB = $xxx",
            "SSD : 512GB + 2TB M.2 PCIe",
            "GPU : NVIDIA RTX 5060 8GB DDR7",
            "Display : 18-inch 2.5K 240Hz DCI-P3:100.00%",
            "OS : Windows 11 License",
            "Keyboard : Backlit Chiclet Keyboard Per-Key RGB",
            "Color : Volt Green | Weight: 3.2Kg"
        ],
        price : 2159,
        category : "gaming"
    },

    {
        title : "ROG Strix G18 | G815LR-TT285W",
        image : "/assets/img/rog/strix1.png",
        specs : [
            "CPU : Intel Core Ultra 9 290HX Plus",
            "RAM : 16GB (DDR5) = 32GB = $xxx",
            "SSD : 1TB M.2 PCIe",
            "GPU : NVIDIA RTX 5070Ti 12GB DDR7",
            "Display : 18-inch 2.5K 300Hz DCI-P3:100.00%",
            "OS : Windows 11 License",
            "Keyboard : Backlit Chiclet Keyboard Per-Key RGB",
            "Color : Volt Green | Weight: 3.2Kg"
        ],
        price : 2999,
        category : "gaming"
    },
    {
        title : "ROG Strix G18 | G815LR-TT285W",
        image : "/assets/img/rog/strix1.png",
        specs : [
            "CPU : Intel Core Ultra 9 290HX Plus",
            "RAM : 16GB (DDR5) = 32GB = $xxx",
            "SSD : 512GB + 1TB M.2 PCIe",
            "GPU : NVIDIA RTX 5070Ti 12GB DDR7",
            "Display : 18-inch 2.5K 300Hz DCI-P3:100.00%",
            "OS : Windows 11 License",
            "Keyboard : Backlit Chiclet Keyboard Per-Key RGB",
            "Color : Volt Green | Weight: 3.2Kg"
        ],
        price : 3079,
        category : "gaming"
    },
    {
        title : "ROG Strix G18 | G815LR-TT285W",
        image : "/assets/img/rog/strix1.png",
        specs : [
            "CPU : Intel Core Ultra 9 290HX Plus",
            "RAM : 16GB (DDR5) = 32GB = $xxx",
            "SSD : 2TB M.2 PCIe",
            "GPU : NVIDIA RTX 5070Ti 16GB DDR7",
            "Display : 18-inch 2.5K 300Hz DCI-P3:100.00%",
            "OS : Windows 11 License",
            "Keyboard : Backlit Chiclet Keyboard Per-Key RGB",
            "Color : Volt Green | Weight: 3.2Kg"
        ],
        price : 3129,
        category : "gaming"
    },
    {
        title : "ROG Strix G18 | G815LR-TT285W",
        image : "/assets/img/rog/strix1.png",
        specs : [
            "CPU : Intel Core Ultra 9 290HX Plus",
            "RAM : 16GB (DDR5) = 32GB = $xxx",
            "SSD : 512GB + 2TB M.2 PCIe",
            "GPU : NVIDIA RTX 5070Ti 12GB DDR7",
            "Display : 18-inch 2.5K 300Hz DCI-P3:100.00%",
            "OS : Windows 11 License",
            "Keyboard : Backlit Chiclet Keyboard Per-Key RGB",
            "Color : Volt Green | Weight: 3.2Kg"
        ],
        price : 3209,
        category : "gaming"
    },

    //strix2
    {
        title : "ROG STRIX SCAR 18 | G835LWG-TQ349W 1A",
        image : "/assets/img/rog/strix2.png",
        specs : [
            "CPU : Intel Core Ultra 9 290HX Plus",
            "RAM : 32GB (DDR5) = 64GB = $xxx",
            "SSD : 1TB M.2 PCIe",
            "GPU : NVIDIA RTX 5080 16GB DDR7",
            "Display : 18-inch 4K 240Hz Mini LED DCI-P3 100%",
            "OS : Windows 11 License",
            "Keyboard : Backlit Chiclet Keyboard Per-Key RGB",
            "Color : Off Black | Weight : 3.3Kg"
        ],
        price : 4299,
        category : "gaming"
    },
    {
        title : "ROG STRIX SCAR 18 | G835LWG-TQ349W 1A",
        image : "/assets/img/rog/strix2.png",
        specs : [
            "CPU : Intel Core Ultra 9 290HX Plus",
            "RAM : 32GB (DDR5) = 64GB = $xxx",
            "SSD : 2TB M.2 PCIe",
            "GPU : NVIDIA RTX 5080 16GB DDR7",
            "Display : 18-inch 4K 240Hz Mini LED DCI-P3 100%",
            "OS : Windows 11 License",
            "Keyboard : Backlit Chiclet Keyboard Per-Key RGB",
            "Color : Off Black | Weight : 3.3Kg"
        ],
        price : 4429,
        category : "gaming"
    },
    {
        title : "ROG STRIX SCAR 18 | G835LWG-TQ349W 1A",
        image : "/assets/img/rog/strix2.png",
        specs : [
            "CPU : Intel Core Ultra 9 290HX Plus",
            "RAM : 32GB (DDR5) = 64GB = $xxx",
            "SSD : 1TB + 2TB M.2 PCIe",
            "GPU : NVIDIA RTX 5080 16GB DDR7",
            "Display : 18-inch 4K 240Hz Mini LED DCI-P3 100%",
            "OS : Windows 11 License",
            "Keyboard : Backlit Chiclet Keyboard Per-Key RGB",
            "Color : Off Black | Weight : 3.3Kg"
        ],
        price : 4589,
        category : "gaming"
    },
    {
        title : "ROG STRIX SCAR 18 | G835LWG-TQ349W 1A",
        image : "/assets/img/rog/strix2.png",
        specs : [
            "CPU : Intel Core Ultra 9 290HX Plus",
            "RAM : 32GB (DDR5) = 64GB = $xxx",
            "SSD : 2TB + 2TB M.2 PCIe",
            "GPU : NVIDIA RTX 5080 16GB DDR7",
            "Display : 18-inch 4K 240Hz Mini LED DCI-P3 100%",
            "OS : Windows 11 License",
            "Keyboard : Backlit Chiclet Keyboard Per-Key RGB",
            "Color : Off Black | Weight : 3.3Kg"
        ],
        price : 4719,
        category : "gaming"
    },
    //2
    {
        title : "ROG STRIX SCAR 18 | G835LXG-TQ496W",
        image : "/assets/img/rog/strix2.png",
        specs : [
            "CPU : Intel Core Ultra 9 290HX Plus",
            "RAM : 32GB (DDR5) = 64GB = $xxx",
            "SSD : 1TB M.2 PCIe",
            "GPU : NVIDIA RTX 5090 24GB DDR7",
            "Display : 18-inch 4K 240Hz Mini LED DCI-P3 100%",
            "OS : Windows 11 License",
            "Keyboard : Backlit Chiclet Keyboard Per-Key RGB",
            "Color : Off Black | Weight : 3.3Kg"
        ],
        price : 4999,
        category : "gaming"
    },
    {
        title : "ROG STRIX SCAR 18 | G835LXG-TQ496W",
        image : "/assets/img/rog/strix2.png",
        specs : [
            "CPU : Intel Core Ultra 9 290HX Plus",
            "RAM : 32GB (DDR5) = 64GB = $xxx",
            "SSD : 2TB M.2 PCIe",
            "GPU : NVIDIA RTX 5090 24GB DDR7",
            "Display : 18-inch 4K 240Hz Mini LED DCI-P3 100%",
            "OS : Windows 11 License",
            "Keyboard : Backlit Chiclet Keyboard Per-Key RGB",
            "Color : Off Black | Weight : 3.3Kg"
        ],
        price : 5129,
        category : "gaming"
    },
    {
        title : "ROG STRIX SCAR 18 | G835LXG-TQ496W",
        image : "/assets/img/rog/strix2.png",
        specs : [
            "CPU : Intel Core Ultra 9 290HX Plus",
            "RAM : 32GB (DDR5) = 64GB = $xxx",
            "SSD : 1TB + 2TB M.2 PCIe",
            "GPU : NVIDIA RTX 5090 24GB DDR7",
            "Display : 18-inch 4K 240Hz Mini LED DCI-P3 100%",
            "OS : Windows 11 License",
            "Keyboard : Backlit Chiclet Keyboard Per-Key RGB",
            "Color : Off Black | Weight : 3.3Kg"
        ],
        price : 5389,
        category : "gaming"
    },
    {
        title : "ROG STRIX SCAR 18 | G835LXG-TQ496W",
        image : "/assets/img/rog/strix2.png",
        specs : [
            "CPU : Intel Core Ultra 9 290HX Plus",
            "RAM : 32GB (DDR5) = 64GB = $xxx",
            "SSD : 2TB + 2TB M.2 PCIe",
            "GPU : NVIDIA RTX 5090 24GB DDR7",
            "Display : 18-inch 4K 240Hz Mini LED DCI-P3 100%",
            "OS : Windows 11 License",
            "Keyboard : Backlit Chiclet Keyboard Per-Key RGB",
            "Color : Off Black | Weight : 3.3Kg"
        ],
        price : 5419,
        category : "gaming"
    },
    //strix3
    {
        title : "ROG Strix G16 | G614PH-RV152W",
        image : "/assets/img/rog/strix3.png",
        specs : [
            "CPU : AMD Ryzen™ 9 8940HX (16C/32T)",
            "RAM : 16GB (DDR5) = 32GB = $xxx",
            "SSD : 512GB PCIe",
            "GPU : NVIDIA RTX™ 5050 8GB GDDR7",
            "Display : 16.0-inch (1920 x 1200) IPS 165Hz",
            "OS : Windows 11 License",
            "Keyboard : Backlit Chiclet Keyboard 4-Zone RGB",
            "Color : Volt Green | Weight : 2.5Kg"
        ],
        price : 1749,
        category : "gaming"
    },
    {
        title : "ROG Strix G16 | G614PH-RV152W",
        image : "/assets/img/rog/strix3.png",
        specs : [
            "CPU : AMD Ryzen™ 9 8940HX (16C/32T)",
            "RAM : 16GB (DDR5) = 32GB = $xxx",
            "SSD : 1TB PCIe",
            "GPU : NVIDIA RTX™ 5050 8GB GDDR7",
            "Display : 16.0-inch (1920 x 1200) IPS 165Hz",
            "OS : Windows 11 License",
            "Keyboard : Backlit Chiclet Keyboard 4-Zone RGB",
            "Color : Volt Green | Weight : 2.5Kg"
        ],
        price : 1839,
        category : "gaming"
    },
    {
        title : "ROG Strix G16 | G614PH-RV152W",
        image : "/assets/img/rog/strix3.png",
        specs : [
            "CPU : AMD Ryzen™ 9 8940HX (16C/32T)",
            "RAM : 16GB (DDR5) = 32GB = $xxx",
            "SSD : 512GB + 1TB PCIe",
            "GPU : NVIDIA RTX™ 5050 8GB GDDR7",
            "Display : 16.0-inch (1920 x 1200) IPS 165Hz",
            "OS : Windows 11 License",
            "Keyboard : Backlit Chiclet Keyboard 4-Zone RGB",
            "Color : Volt Green | Weight : 2.5Kg"
        ],
        price : 1919,
        category : "gaming"
    },
    {
        title : "ROG Strix G16 | G614PH-RV152W",
        image : "/assets/img/rog/strix3.png",
        specs : [
            "CPU : AMD Ryzen™ 9 8940HX (16C/32T)",
            "RAM : 16GB (DDR5) = 32GB = $xxx",
            "SSD : 2TB PCIe",
            "GPU : NVIDIA RTX™ 5050 8GB GDDR7",
            "Display : 16.0-inch (1920 x 1200) IPS 165Hz",
            "OS : Windows 11 License",
            "Keyboard : Backlit Chiclet Keyboard 4-Zone RGB",
            "Color : Volt Green | Weight : 2.5Kg"
        ],
        price : 1969,
        category : "gaming"
    },
    //2
    {
        title : "ROG Strix G16 | G614PH-RV152W",
        image : "/assets/img/rog/strix3.png",
        specs : [
            "CPU : AMD Ryzen™ 9 8940HX (16C/32T)",
            "RAM : 16GB (DDR5) = 32GB = $xxx",
            "SSD : 512GB PCIe",
            "GPU : NVIDIA RTX™ 5060 8GB GDDR7",
            "Display : 16.0-inch (1920 x 1200) IPS 165Hz",
            "OS : Windows 11 License",
            "Keyboard : Backlit Chiclet Keyboard 4-Zone RGB",
            "Color : Volt Green | Weight : 2.5Kg"
        ],
        price : 1949,
        category : "gaming"
    },
    {
        title : "ROG Strix G16 | G614PH-RV152W",
        image : "/assets/img/rog/strix3.png",
        specs : [
            "CPU : AMD Ryzen™ 9 8940HX (16C/32T)",
            "RAM : 16GB (DDR5) = 32GB = $xxx",
            "SSD : 1TB PCIe",
            "GPU : NVIDIA RTX™ 5060 8GB GDDR7",
            "Display : 16.0-inch (1920 x 1200) IPS 165Hz",
            "OS : Windows 11 License",
            "Keyboard : Backlit Chiclet Keyboard 4-Zone RGB",
            "Color : Volt Green | Weight : 2.5Kg"
        ],
        price : 2039,
        category : "gaming"
    },
    {
        title : "ROG Strix G16 | G614PH-RV152W",
        image : "/assets/img/rog/strix3.png",
        specs : [
            "CPU : AMD Ryzen™ 9 8940HX (16C/32T)",
            "RAM : 16GB (DDR5) = 32GB = $xxx",
            "SSD : 512GB + 1TB PCIe",
            "GPU : NVIDIA RTX™ 5060 8GB GDDR7",
            "Display : 16.0-inch (1920 x 1200) IPS 165Hz",
            "OS : Windows 11 License",
            "Keyboard : Backlit Chiclet Keyboard 4-Zone RGB",
            "Color : Volt Green | Weight : 2.5Kg"
        ],
        price : 2119,
        category : "gaming"
    },
    {
        title : "ROG Strix G16 | G614PH-RV152W",
        image : "/assets/img/rog/strix3.png",
        specs : [
            "CPU : AMD Ryzen™ 9 8940HX (16C/32T)",
            "RAM : 16GB (DDR5) = 32GB = $xxx",
            "SSD : 2TB PCIe",
            "GPU : NVIDIA RTX™ 5060 8GB GDDR7",
            "Display : 16.0-inch (1920 x 1200) IPS 165Hz",
            "OS : Windows 11 License",
            "Keyboard : Backlit Chiclet Keyboard 4-Zone RGB",
            "Color : Volt Green | Weight : 2.5Kg"
        ],
        price : 2169,
        category : "gaming"
    },

    {
        title : "ROG STRIX G16 | G614PP-RV115W",
        image : "/assets/img/rog/strix3.png",
        specs : [
            "CPU : AMD Ryzen™ 9 8940HX (16C/32T)",
            "RAM : 16GB (DDR5) = 32GB = $xxx",
            "SSD : 1TB PCIe",
            "GPU : NVIDIA RTX™ 5070 8GB GDDR7",
            "Display : 16.0-inch (1920 x 1200) IPS 165Hz",
            "OS : Windows 11 License",
            "Keyboard : Backlit Chiclet Keyboard 4-Zone RGB",
            "Color : Volt Green | Weight : 2.5Kg"
        ],
        price : 2049,
        category : "gaming"
    },
    {
        title : "ROG STRIX G16 | G614PP-RV115W",
        image : "/assets/img/rog/strix3.png",
        specs : [
            "CPU : AMD Ryzen™ 9 8940HX (16C/32T)",
            "RAM : 16GB (DDR5) = 32GB = $xxx",
            "SSD : 512GB +1TB PCIe",
            "GPU : NVIDIA RTX™ 5070 8GB GDDR7",
            "Display : 16.0-inch (1920 x 1200) IPS 165Hz",
            "OS : Windows 11 License",
            "Keyboard : Backlit Chiclet Keyboard 4-Zone RGB",
            "Color : Volt Green | Weight : 2.5Kg"
        ],
        price : 2129,
        category : "gaming"
    },
    {
        title : "ROG STRIX G16 | G614PP-RV115W",
        image : "/assets/img/rog/strix3.png",
        specs : [
            "CPU : AMD Ryzen™ 9 8940HX (16C/32T)",
            "RAM : 16GB (DDR5) = 32GB = $xxx",
            "SSD : 2TB PCIe",
            "GPU : NVIDIA RTX™ 5070 8GB GDDR7",
            "Display : 16.0-inch (1920 x 1200) IPS 165Hz",
            "OS : Windows 11 License",
            "Keyboard : Backlit Chiclet Keyboard 4-Zone RGB",
            "Color : Volt Green | Weight : 2.5Kg"
        ],
        price : 2179,
        category : "gaming"
    },
    {
        title : "ROG STRIX G16 | G614PP-RV115W",
        image : "/assets/img/rog/strix3.png",
        specs : [
            "CPU : AMD Ryzen™ 9 8940HX (16C/32T)",
            "RAM : 16GB (DDR5) = 32GB = $xxx",
            "SSD : 512GB + 2TB PCIe",
            "GPU : NVIDIA RTX™ 5070 8GB GDDR7",
            "Display : 16.0-inch (1920 x 1200) IPS 165Hz",
            "OS : Windows 11 License",
            "Keyboard : Backlit Chiclet Keyboard 4-Zone RGB",
            "Color : Volt Green | Weight : 2.5Kg"
        ],
        price : 2259,
        category : "gaming"
    },

    {
        title : "ROG STRIX G16 | G614PP-RV192W",
        image : "/assets/img/rog/strix3.png",
        specs : [
            "CPU : AMD Ryzen™ 9 8940HX (16C/32T)",
            "RAM : 16GB (DDR5) = 32GB = $xxx",
            "SSD : 512GB PCIe",
            "GPU : NVIDIA RTX™ 5070 8GB GDDR7",
            "Display : 16.0-inch (1920 x 1200) IPS 165Hz",
            "OS : Windows 11 License",
            "Keyboard : Backlit Chiclet Keyboard 4-Zone RGB",
            "Color : Volt Green | Weight : 2.5Kg"
        ],
        price : 1999,
        category : "gaming"
    },
    {
        title : "ROG STRIX G16 | G614PP-RV192W",
        image : "/assets/img/rog/strix3.png",
        specs : [
            "CPU : AMD Ryzen™ 9 8940HX (16C/32T)",
            "RAM : 16GB (DDR5) = 32GB = $xxx",
            "SSD : 1TB PCIe",
            "GPU : NVIDIA RTX™ 5070 8GB GDDR7",
            "Display : 16.0-inch (1920 x 1200) IPS 165Hz",
            "OS : Windows 11 License",
            "Keyboard : Backlit Chiclet Keyboard 4-Zone RGB",
            "Color : Volt Green | Weight : 2.5Kg"
        ],
        price : 2089,
        category : "gaming"
    },
    {
        title : "ROG STRIX G16 | G614PP-RV192W",
        image : "/assets/img/rog/strix3.png",
        specs : [
            "CPU : AMD Ryzen™ 9 8940HX (16C/32T)",
            "RAM : 16GB (DDR5) = 32GB = $xxx",
            "SSD : 512GB + 1TB PCIe",
            "GPU : NVIDIA RTX™ 5070 8GB GDDR7",
            "Display : 16.0-inch (1920 x 1200) IPS 165Hz",
            "OS : Windows 11 License",
            "Keyboard : Backlit Chiclet Keyboard 4-Zone RGB",
            "Color : Volt Green | Weight : 2.5Kg"
        ],
        price : 2169,
        category : "gaming"
    },
    {
        title : "ROG STRIX G16 | G614PP-RV192W",
        image : "/assets/img/rog/strix3.png",
        specs : [
            "CPU : AMD Ryzen™ 9 8940HX (16C/32T)",
            "RAM : 16GB (DDR5) = 32GB = $xxx",
            "SSD : 2TB PCIe",
            "GPU : NVIDIA RTX™ 5070 8GB GDDR7",
            "Display : 16.0-inch (1920 x 1200) IPS 165Hz",
            "OS : Windows 11 License",
            "Keyboard : Backlit Chiclet Keyboard 4-Zone RGB",
            "Color : Volt Green | Weight : 2.5Kg"
        ],
        price : 2219,
        category : "gaming"
    },

    {
        title : "ROG STRIX G16 | G614PR-RV151W",
        image : "/assets/img/rog/strix1.png",
        specs : [
            "CPU : AMD Ryzen™ 9 8940HX (16C/32T)",
            "RAM : 16GB (DDR5) = 32GB = $xxx",
            "SSD : 512GB PCIe",
            "GPU : NVIDIA RTX™ 5070Ti 12GB GDDR7",
            "Display : 16.0-inch (1920 x 1200) IPS 165Hz",
            "OS : Windows 11 License",
            "Keyboard : Per-Key RGB With Copilot key",
            "Color : Volt Green | Weight : 2.5Kg"
        ],
        price : 2399,
        category : "gaming"
    },
    {
        title : "ROG STRIX G16 | G614PR-RV151W",
        image : "/assets/img/rog/strix1.png",
        specs : [
            "CPU : AMD Ryzen™ 9 8940HX (16C/32T)",
            "RAM : 16GB (DDR5) = 32GB = $xxx",
            "SSD : 1TB PCIe",
            "GPU : NVIDIA RTX™ 5070Ti 12GB GDDR7",
            "Display : 16.0-inch (1920 x 1200) IPS 165Hz",
            "OS : Windows 11 License",
            "Keyboard : Per-Key RGB With Copilot key",
            "Color : Volt Green | Weight : 2.5Kg"
        ],
        price : 2489,   
        category : "gaming"
    },
    {
        title : "ROG STRIX G16 | G614PR-RV151W",
        image : "/assets/img/rog/strix1.png",
        specs : [
            "CPU : AMD Ryzen™ 9 8940HX (16C/32T)",
            "RAM : 16GB (DDR5) = 32GB = $xxx",
            "SSD : 512GB + 1TB PCIe",
            "GPU : NVIDIA RTX™ 5070Ti 12GB GDDR7",
            "Display : 16.0-inch (1920 x 1200) IPS 165Hz",
            "OS : Windows 11 License",
            "Keyboard : Per-Key RGB With Copilot key",
            "Color : Volt Green | Weight : 2.5Kg"
        ],
        price : 2489,   
        category : "gaming"
    },
    {
        title : "ROG STRIX G16 | G614PR-RV151W",
        image : "/assets/img/rog/strix1.png",
        specs : [
            "CPU : AMD Ryzen™ 9 8940HX (16C/32T)",
            "RAM : 16GB (DDR5) = 32GB = $xxx",
            "SSD : 2TB PCIe",
            "GPU : NVIDIA RTX™ 5070Ti 12GB GDDR7",
            "Display : 16.0-inch (1920 x 1200) IPS 165Hz",
            "OS : Windows 11 License",
            "Keyboard : Per-Key RGB With Copilot key",
            "Color : Volt Green | Weight : 2.5Kg"
        ],
        price : 2619,   
        category : "gaming"
    },

    {
        title : "ROG STRIX G16 | G614PR-RV151W",
        image : "/assets/img/rog/strix1.png",
        specs : [
            "CPU : AMD Ryzen™ 9 8940HX (16C/32T)",
            "RAM : 16GB (DDR5) = 32GB = $xxx",
            "SSD : 1TB PCIe",
            "GPU : NVIDIA RTX™ 5080 16GB GDDR7",
            "Display : 16-inch 2.5K 300Hz DCI-P3:100%",
            "OS : Windows 11 License",
            "Keyboard : Per-Key RGB With Copilot key",
            "Color : Volt Green | Weight : 2.5Kg"
        ],
        price : 3399,   
        category : "gaming"
    },
    {
        title : "ROG STRIX G16 | G614PR-RV151W",
        image : "/assets/img/rog/strix1.png",
        specs : [
            "CPU : AMD Ryzen™ 9 8940HX (16C/32T)",
            "RAM : 16GB (DDR5) = 32GB = $xxx",
            "SSD : 512GB + 1TB PCIe",
            "GPU : NVIDIA RTX™ 5080 16GB GDDR7",
            "Display : 16-inch 2.5K 300Hz DCI-P3:100%",
            "OS : Windows 11 License",
            "Keyboard : Per-Key RGB With Copilot key",
            "Color : Volt Green | Weight : 2.5Kg"
        ],
        price : 3479,   
        category : "gaming"
    },
    {
        title : "ROG STRIX G16 | G614PR-RV151W",
        image : "/assets/img/rog/strix1.png",
        specs : [
            "CPU : AMD Ryzen™ 9 8940HX (16C/32T)",
            "RAM : 16GB (DDR5) = 32GB = $xxx",
            "SSD : 2TB PCIe",
            "GPU : NVIDIA RTX™ 5080 16GB GDDR7",
            "Display : 16-inch 2.5K 300Hz DCI-P3:100%",
            "OS : Windows 11 License",
            "Keyboard : Per-Key RGB With Copilot key",
            "Color : Volt Green | Weight : 2.5Kg"
        ],
        price : 3529,   
        category : "gaming"
    },
    {
        title : "ROG STRIX G16 | G614PR-RV151W",
        image : "/assets/img/rog/strix1.png",
        specs : [
            "CPU : AMD Ryzen™ 9 8940HX (16C/32T)",
            "RAM : 16GB (DDR5) = 32GB = $xxx",
            "SSD : 512GB + 2TB PCIe",
            "GPU : NVIDIA RTX™ 5080 16GB GDDR7",
            "Display : 16-inch 2.5K 300Hz DCI-P3:100%",
            "OS : Windows 11 License",
            "Keyboard : Per-Key RGB With Copilot key",
            "Color : Volt Green | Weight : 2.5Kg"
        ],
        price : 3609,   
        category : "gaming"
    },
    // zephyrus
    {
        title : "ROG Zephyrus G16 GU605CM QR132W 2E",
        image : "/assets/img/rog/zephyrus1.png",
        specs : [
            "CPU : Intel Core Ultra 9 285H Processor",
            "RAM : 16GB LPDDR5X 7467 on board",
            "SSD : 512GB PCIe NVMe 4.0",
            "GPU : NVIDIA RTX 5060 8GB DDR7",
            "Display : 16\" 2.5K OLED 240Hz 100% DCI-P3",
            "OS : Windows 11 License",
            "Keyboard : Backlit Chiclet Keyboard 1-Zone RGB",
            "Color : Eclipse Gray | Weight : 1.85Kg"
        ],
        price : 2499,   
        category : "gaming"
    },
    {
        title : "ROG Zephyrus G16 GU605CM QR132W 2E",
        image : "/assets/img/rog/zephyrus1.png",
        specs : [
            "CPU : Intel Core Ultra 9 285H Processor",
            "RAM : 16GB LPDDR5X 7467 on board",
            "SSD : 1TB PCIe NVMe 4.0",
            "GPU : NVIDIA RTX 5060 8GB DDR7",
            "Display : 16\" 2.5K OLED 240Hz 100% DCI-P3",
            "OS : Windows 11 License",
            "Keyboard : Backlit Chiclet Keyboard 1-Zone RGB",
            "Color : Eclipse Gray | Weight : 1.85Kg"
        ],
        price : 2589,   
        category : "gaming"
    },
    {
        title : "ROG Zephyrus G16 GU605CM QR132W 2E",
        image : "/assets/img/rog/zephyrus1.png",
        specs : [
            "CPU : Ryzen™ AI 9 HX 370 (12C/24T)",
            "RAM : 32GB LPDDR5X 7500 on board",
            "SSD : 1TB PCIe NVMe 4.0",
            "GPU : NVIDIA RTX 5060 8GB DDR7",
            "Display : 14\" 3K OLED 120Hz 100% DCI-P3",
            "OS : Windows 11 License",
            "Keyboard : Backlit Chiclet Keyboard 1-Zone RGB",
            "Color : Eclipse Gray | Weight : 1.85Kg"
        ],
        price : 1899,   
        category : "gaming"
    },
    {
        title : "ROG Zephyrus G16 GU605CM QR132W 2E",
        image : "/assets/img/rog/zephyrus1.png",
        specs : [
            "CPU : Ryzen™ AI 9 HX 370 (12C/24T)",
            "RAM : 32GB LPDDR5X 7500 on board",
            "SSD : 2TB PCIe NVMe 4.0",
            "GPU : NVIDIA RTX 5060 8GB DDR7",
            "Display : 14\" 3K OLED 120Hz 100% DCI-P3",
            "OS : Windows 11 License",
            "Keyboard : Backlit Chiclet Keyboard 1-Zone RGB",
            "Color : Eclipse Gray | Weight : 1.85Kg"
        ],
        price : 2029,   
        category : "gaming"
    },
    //2
    {
        title : "ROG Zephyrus G16 2026 GU606AR TB042W | AI PC",
        image : "/assets/img/rog/zephyrus1.png",
        specs : [
            "CPU : Intel Core Ultra 9 386H (16C/16T)",
            "RAM : 32GB LPDDR5X 8533 on board",
            "SSD : 1TB PCIe NVMe 4.0",
            "GPU : NVIDIA RTX 5070Ti 12GB GDDR7",
            "Display : 16\" 2.5K OLED 240Hz 100% DCI-P3",
            "OS : Windows 11 License",
            "Keyboard : Backlit Chiclet Keyboard 1-Zone RGB",
            "Color : Eclipse Gray | Weight : 1.85Kg"
        ],
        price : 3499,   
        category : "gaming"
    },
    {
        title : "ROG Zephyrus G16 2026 GU606AR TB042W | AI PC",
        image : "/assets/img/rog/zephyrus1.png",
        specs : [
            "CPU : Intel Core Ultra 9 386H (16C/16T)",
            "RAM : 32GB LPDDR5X 8533 on board",
            "SSD : 2TB PCIe NVMe 4.0",
            "GPU : NVIDIA RTX 5070Ti 12GB GDDR7",
            "Display : 16\" 2.5K OLED 240Hz 100% DCI-P3",
            "OS : Windows 11 License",
            "Keyboard : Backlit Chiclet Keyboard 1-Zone RGB",
            "Color : Eclipse Gray | Weight : 1.85Kg"
        ],
        price : 3629,   
        category : "gaming"
    },
    {
        title : "ROG Zephyrus G16 2026 GU606AX-TB100W | AI PC",
        image : "/assets/img/rog/zephyrus1.png",
        specs : [
            "CPU : Intel Core Ultra 9 386H (16C/16T)",
            "RAM : 64GB LPDDR5X 8533 on board",
            "SSD : 2TB PCIe NVMe 4.0",
            "GPU : NVIDIA RTX 5090 24GB GDDR7",
            "Display : 16\" 2.5K OLED 240Hz 100% DCI-P3",
            "OS : Windows 11 License",
            "Keyboard : Backlit Chiclet Keyboard 1-Zone RGB",
            "Color : Eclipse Gray | Weight : 1.85Kg"
        ],
        price : 5699,   
        category : "gaming"
    },
    {
        title : "ROG Zephyrus G16 2026 GU606AX-TB100W | AI PC",
        image : "/assets/img/rog/zephyrus1.png",
        specs : [
            "CPU : Intel Core Ultra 9 386H (16C/16T)",
            "RAM : 64GB LPDDR5X 8533 on board",
            "SSD : 2TB PCIe NVMe 4.0",
            "GPU : NVIDIA RTX 5090 24GB GDDR7",
            "Display : 16\" 2.5K OLED 240Hz 100% DCI-P3",
            "OS : Windows 11 License",
            "Keyboard : Backlit Chiclet Keyboard 1-Zone RGB",
            "Color : Eclipse Gray | Weight : 1.85Kg"
        ],
        price : 5699,   
        category : "gaming"
    },

    {
        title : "ROG Zephyrus G16 2026 GU606AX-TB100W | AI PC",
        image : "/assets/img/rog/zephyrus2.png",
        specs : [
            "CPU : Intel Core Ultra 9 386H (16C/16T)",
            "RAM : 32GB LPDDR5X 8533 on board",
            "SSD : 2TB PCIe NVMe 4.0",
            "GPU : NVIDIA RTX 5090 24GB GDDR7",
            "Display : 16\" 3K OLED 120Hz Touch",
            "OS : Windows 11 License",
            "Keyboard : Backlit Chiclet Keyboard 1-Zone RGB",
            "Color : Stellar Grey | Weight : 2.82Kg"
        ],
        price : 5699,
        category : "gaming"
    },
    {
        title : "ROG Zephyrus G16 2026 GU606AX-TB100W | AI PC",
        image : "/assets/img/rog/zephyrus2.png",
        specs : [
            "CPU : Intel Core Ultra 9 386H (16C/16T)",
            "RAM : 32GB LPDDR5X 8533 on board",
            "SSD : 2TB PCIe NVMe 4.0",
            "GPU : NVIDIA RTX 5090 24GB GDDR7",
            "Display : 16\" 3K OLED 120Hz Touch",
            "OS : Windows 11 License",
            "Keyboard : Backlit Chiclet Keyboard 1-Zone RGB",
            "Color : Stellar Grey | Weight : 2.82Kg"
        ],
        price : 5699,
        category : "gaming"
    },
]

const msi_section = document.getElementById('msi')
const msi_category = [
    {
        title : "Cyborg 15 Black Edition A13VE-2448KH",
        image : "/assets/img/msi/cyborg1.png",
        specs : [
            "CPU : 13th Gen Intel Core I5-13420H",
            "RAM : 16GB DDR5 = 32GB = $xxx",
            "SSD : 512GB M.2 PCIe 4",
            "GPU : NVIDIA RTX 4050 6GB GDDR6",
            "Display : 15.6” FHD (1920x1080), IPS-Level 144Hz",
            "OS : Windows 11 License",
            "Keyboard : Backlight Key (Single-Color blue)",
            "Color : Translucent Black | Weight : 1.98Kg"
        ],
        price : 1049,
        category : "gaming"
    },
    {
        title : "Cyborg 15 Black Edition A13VE-2448KH",
        image : "/assets/img/msi/cyborg1.png",
        specs : [
            "CPU : 13th Gen Intel Core I5-13420H",
            "RAM : 16GB DDR5 = 32GB = $xxx",
            "SSD : 1TB M.2 PCIe 4",
            "GPU : NVIDIA RTX 4050 6GB GDDR6",
            "Display : 15.6” FHD (1920x1080), IPS-Level 144Hz",
            "OS : Windows 11 License",
            "Keyboard : Backlight Key (Single-Color blue)",
            "Color : Translucent Black | Weight : 1.98Kg"
        ],
        price : 1139,
        category : "gaming"
    },
    {
        title : "Cyborg 15 Black Edition A13VE-2448KH",
        image : "/assets/img/msi/cyborg1.png",
        specs : [
            "CPU : 13th Gen Intel Core I5-13420H",
            "RAM : 16GB DDR5 = 32GB = $xxx",
            "SSD : 2TB M.2 PCIe 4",
            "GPU : NVIDIA RTX 4050 6GB GDDR6",
            "Display : 15.6” FHD (1920x1080), IPS-Level 144Hz",
            "OS : Windows 11 License",
            "Keyboard : Backlight Key (Single-Color blue)",
            "Color : Translucent Black | Weight : 1.98Kg"
        ],
        price : 1269,
        category : "gaming"
    },
    {
        title : "Cyborg 15 Black Edition A13VE-2448KH",
        image : "/assets/img/msi/cyborg1.png",
        specs : [
            "CPU : 13th Gen Intel Core I5-13420H",
            "RAM : 16GB DDR5 = 32GB = $xxx",
            "SSD : 2TB M.2 PCIe 4",
            "GPU : NVIDIA RTX 4050 6GB GDDR6",
            "Display : 15.6” FHD (1920x1080), IPS-Level 144Hz",
            "OS : Windows 11 License",
            "Keyboard : Backlight Key (Single-Color blue)",
            "Color : Translucent Black | Weight : 1.98Kg"
        ],
        price : 1269,
        category : "gaming"
    },

    {
        title : "Cyborg 15 Edition A13VEO 2601KH",
        image : "/assets/img/msi/cyborg1.png",
        specs : [
            "CPU : 13th Gen Intel Core i7 13620H",
            "RAM : 16GB DDR5 = 32GB = $xxx",
            "SSD : 512GB M.2 PCIe 4",
            "GPU : NVIDIA RTX 4050 6GB GDDR6",
            "Display : 15.6” FHD (1920x1080), IPS-Level 144Hz",
            "OS : Windows 11 License",
            "Keyboard : Backlight Key (Single-Color blue)",
            "Color : Translucent Black | Weight : 1.98Kg"
        ],
        price : 1099,
        category : "gaming"
    },
    {
        title : "Cyborg 15 Edition A13VEO 2601KH",
        image : "/assets/img/msi/cyborg1.png",
        specs : [
            "CPU : 13th Gen Intel Core i7 13620H",
            "RAM : 16GB DDR5 = 32GB = $xxx",
            "SSD : 1TB M.2 PCIe 4",
            "GPU : NVIDIA RTX 4050 6GB GDDR6",
            "Display : 15.6” FHD (1920x1080), IPS-Level 144Hz",
            "OS : Windows 11 License",
            "Keyboard : Backlight Key (Single-Color blue)",
            "Color : Translucent Black | Weight : 1.98Kg"
        ],
        price : 1189,
        category : "gaming"
    },
    {
        title : "Cyborg 15 Edition A13VEO 2601KH",
        image : "/assets/img/msi/cyborg1.png",
        specs : [
            "CPU : 13th Gen Intel Core i7 13620H",
            "RAM : 16GB DDR5 = 32GB = $xxx",
            "SSD : 2TB M.2 PCIe 4",
            "GPU : NVIDIA RTX 4050 6GB GDDR6",
            "Display : 15.6” FHD (1920x1080), IPS-Level 144Hz",
            "OS : Windows 11 License",
            "Keyboard : Backlight Key (Single-Color blue)",
            "Color : Translucent Black | Weight : 1.98Kg"
        ],
        price : 1319,
        category : "gaming"
    },
    {
        title : "Cyborg 15 Edition A13VEO 2601KH",
        image : "/assets/img/msi/cyborg1.png",
        specs : [
            "CPU : 13th Gen Intel Core i7 13620H",
            "RAM : 16GB DDR5 = 32GB = $xxx",
            "SSD : 2TB M.2 PCIe 4",
            "GPU : NVIDIA RTX 4050 6GB GDDR6",
            "Display : 15.6” FHD (1920x1080), IPS-Level 144Hz",
            "OS : Windows 11 License",
            "Keyboard : Backlight Key (Single-Color blue)",
            "Color : Translucent Black | Weight : 1.98Kg"
        ],
        price : 1319,
        category : "gaming"
    },

    {
        title : "Cyborg 15 Edition A13VEO 2601KH",
        image : "/assets/img/msi/cyborg2.png",
        specs : [
            "CPU : 13th Gen Intel Core i7 13620H",
            "RAM : 16GB DDR5 = 32GB = $xxx",
            "SSD : 512GB M.2 PCIe 4",
            "GPU : NVIDIA RTX 5050 8GB GDDR7",
            "Display : 15.6” FHD (1920x1080), IPS-Level 144Hz",
            "OS : Windows 11 License",
            "Keyboard : Backlight Key (Single-Color blue)",
            "Color : Translucent Black | Weight : 1.98Kg"
        ],
        price : 1249,
        category : "gaming"
    },
    {
        title : "Cyborg 15 Edition A13VEO 2601KH",
        image : "/assets/img/msi/cyborg2.png",
        specs : [
            "CPU : 13th Gen Intel Core i7 13620H",
            "RAM : 16GB DDR5 = 32GB = $xxx",
            "SSD : 1TB M.2 PCIe 4",
            "GPU : NVIDIA RTX 5050 8GB GDDR7",
            "Display : 15.6” FHD (1920x1080), IPS-Level 144Hz",
            "OS : Windows 11 License",
            "Keyboard : Backlight Key (Single-Color blue)",
            "Color : Translucent Black | Weight : 1.98Kg"
        ],
        price : 1339,
        category : "gaming"
    },
    {
        title : "Cyborg 15 Edition A13VEO 2601KH",
        image : "/assets/img/msi/cyborg2.png",
        specs : [
            "CPU : 13th Gen Intel Core i7 13620H",
            "RAM : 16GB DDR5 = 32GB = $xxx",
            "SSD : 2TB M.2 PCIe 4",
            "GPU : NVIDIA RTX 5050 8GB GDDR7",
            "Display : 15.6” FHD (1920x1080), IPS-Level 144Hz",
            "OS : Windows 11 License",
            "Keyboard : Backlight Key (Single-Color blue)",
            "Color : Translucent Black | Weight : 1.98Kg"
        ],
        price : 1469,
        category : "gaming"
    },
    {
        title : "Cyborg 15 Edition A13VEO 2601KH",
        image : "/assets/img/msi/cyborg2.png",
        specs : [
            "CPU : 13th Gen Intel Core i7 13620H",
            "RAM : 16GB DDR5 = 32GB = $xxx",
            "SSD : 2TB M.2 PCIe 4",
            "GPU : NVIDIA RTX 5050 8GB GDDR7",
            "Display : 15.6” FHD (1920x1080), IPS-Level 144Hz",
            "OS : Windows 11 License",
            "Keyboard : Backlight Key (Single-Color blue)",
            "Color : Translucent Black | Weight : 1.98Kg"
        ],
        price : 1469,
        category : "gaming"
    },

    {
        title : "Cyborg 15 Edition A13VEO 2601KH",
        image : "/assets/img/msi/cyborg2.png",
        specs : [
            "CPU : 13th Gen Intel Core i7 13620H",
            "RAM : 16GB DDR5 = 32GB = $xxx",
            "SSD : 512GB M.2 PCIe 4",
            "GPU : NVIDIA RTX 5060 8GB GDDR7",
            "Display : 15.6” FHD (1920x1080), IPS-Level 144Hz",
            "OS : Windows 11 License",
            "Keyboard : Backlight Key (Single-Color blue)",
            "Color : Translucent Black | Weight : 1.98Kg"
        ],
        price : 1249,
        category : "gaming"
    },
    {
        title : "Cyborg 15 Edition A13VEO 2601KH",
        image : "/assets/img/msi/cyborg2.png",
        specs : [
            "CPU : 13th Gen Intel Core i7 13620H",
            "RAM : 16GB DDR5 = 32GB = $xxx",
            "SSD : 1TB M.2 PCIe 4",
            "GPU : NVIDIA RTX 5060 8GB GDDR7",
            "Display : 15.6” FHD (1920x1080), IPS-Level 144Hz",
            "OS : Windows 11 License",
            "Keyboard : Backlight Key (Single-Color blue)",
            "Color : Translucent Black | Weight : 1.98Kg"
        ],
        price : 1339,
        category : "gaming"
    },
    {
        title : "Cyborg 15 Edition A13VEO 2601KH",
        image : "/assets/img/msi/cyborg2.png",
        specs : [
            "CPU : 13th Gen Intel Core i7 13620H",
            "RAM : 16GB DDR5 = 32GB = $xxx",
            "SSD : 2TB M.2 PCIe 4",
            "GPU : NVIDIA RTX 5060 8GB GDDR7",
            "Display : 15.6” FHD (1920x1080), IPS-Level 144Hz",
            "OS : Windows 11 License",
            "Keyboard : Backlight Key (Single-Color blue)",
            "Color : Translucent Black | Weight : 1.98Kg"
        ],
        price : 1469,
        category : "gaming"
    },
    {
        title : "Cyborg 15 Edition A13VEO 2601KH",
        image : "/assets/img/msi/cyborg2.png",
        specs : [
            "CPU : 13th Gen Intel Core i7 13620H",
            "RAM : 16GB DDR5 = 32GB = $xxx",
            "SSD : 2TB M.2 PCIe 4",
            "GPU : NVIDIA RTX 5060 8GB GDDR7",
            "Display : 15.6” FHD (1920x1080), IPS-Level 144Hz",
            "OS : Windows 11 License",
            "Keyboard : Backlight Key (Single-Color blue)",
            "Color : Translucent Black | Weight : 1.98Kg"
        ],
        price : 1469,
        category : "gaming"
    },

    {
        title : "MSI Cyborg 15 B13WEKG 872KH",
        image : "/assets/img/msi/cyborg3.png",
        specs : [
            "CPU : 13th Gen Intel Core I5-13420H",
            "RAM : 16GB DDR5 = 32GB = $xxx",
            "SSD : 512GB M.2 PCIe 4",
            "GPU : NVIDIA RTX 5050 8GB GDDR7",
            "Display : 15.6” FHD (1920x1080), IPS-Level 144Hz",
            "OS : Windows 11 License",
            "Keyboard : 4-Zone RGB Gaming Keyboard",
            "Color : Translucent Black | Weight : 2.1Kg"
        ],
        price : 1029,
        category : "gaming"
    },
    {
        title : "MSI Cyborg 15 B13WEKG 872KH",
        image : "/assets/img/msi/cyborg3.png",
        specs : [
            "CPU : 13th Gen Intel Core I5-13420H",
            "RAM : 16GB DDR5 = 32GB = $xxx",
            "SSD : 1TB M.2 PCIe 4",
            "GPU : NVIDIA RTX 5050 8GB GDDR7",
            "Display : 15.6” FHD (1920x1080), IPS-Level 144Hz",
            "OS : Windows 11 License",
            "Keyboard : 4-Zone RGB Gaming Keyboard",
            "Color : Translucent Black | Weight : 2.1Kg"
        ],
        price : 1119,
        category : "gaming"
    },
    {
        title : "MSI Cyborg 15 B13WEKG (621KHNN)",
        image : "/assets/img/msi/cyborg3.png",
        specs : [
            "CPU : 13th Gen Intel Core i7 13620H",
            "RAM : 16GB DDR5 = 32GB = $xxx",
            "SSD : 512GB M.2 PCIe 4",
            "GPU : NVIDIA RTX 5050 8GB GDDR7",
            "Display : 15.6” FHD (1920x1080), IPS-Level 144Hz",
            "OS : Windows 11 License",
            "Keyboard : 4-Zone RGB Gaming Keyboard",
            "Color : Translucent Black | Weight : 2.1Kg"
        ],
        price : 1379,
        category : "gaming"
    },
    {
        title : "MSI Cyborg 15 B13WEKG (621KHNN)",
        image : "/assets/img/msi/cyborg3.png",
        specs : [
            "CPU : 13th Gen Intel Core i7 13620H",
            "RAM : 16GB DDR5 = 32GB = $xxx",
            "SSD : 1TB M.2 PCIe 4",
            "GPU : NVIDIA RTX 5050 8GB GDDR7",
            "Display : 15.6” FHD (1920x1080), IPS-Level 144Hz",
            "OS : Windows 11 License",
            "Keyboard : 4-Zone RGB Gaming Keyboard",
            "Color : Translucent Black | Weight : 2.1Kg"
        ],
        price : 1469,
        category : "gaming"
    },

    {
        title : "MSI Cyborg 15 B2RWEKG 828KHNN",
        image : "/assets/img/msi/cyborg3.png",
        specs : [
            "CPU : Intel Core 7 240H Processor",
            "RAM : 16GB DDR5 = 32GB = $xxx",
            "SSD : 512GB M.2 PCIe 4",
            "GPU : NVIDIA RTX 5050 8GB GDDR7",
            "Display : 15.6” FHD (1920x1080), IPS-Level 144Hz",
            "OS : Windows 11 License",
            "Keyboard : 4-Zone RGB Gaming Keyboard",
            "Color : Translucent Black | Weight : 2.1Kg"
        ],
        price : 1139,
        category : "gaming"
    },
    {
        title : "MSI Cyborg 15 B2RWEKG 828KHNN",
        image : "/assets/img/msi/cyborg3.png",
        specs : [
            "CPU : Intel Core 7 240H Processor",
            "RAM : 16GB DDR5 = 32GB = $xxx",
            "SSD : 1TB M.2 PCIe 4",
            "GPU : NVIDIA RTX 5050 8GB GDDR7",
            "Display : 15.6” FHD (1920x1080), IPS-Level 144Hz",
            "OS : Windows 11 License",
            "Keyboard : 4-Zone RGB Gaming Keyboard",
            "Color : Translucent Black | Weight : 2.1Kg"
        ],
        price : 1229,
        category : "gaming"
    },
    {
        title : "MSI Cyborg 15 B13WFKG 620KH",
        image : "/assets/img/msi/cyborg3.png",
        specs : [
            "CPU : 13th Gen Intel Core i7 13620H",
            "RAM : 16GB DDR5 = 32GB = $xxx",
            "SSD : 512GB M.2 PCIe 4",
            "GPU : NVIDIA RTX 5050 8GB GDDR7",
            "Display : 15.6” FHD (1920x1080), IPS-Level 144Hz",
            "OS : Windows 11 License",
            "Keyboard : 4-Zone RGB Gaming Keyboard",
            "Color : Translucent Black | Weight : 2.1Kg"
        ],
        price : 1449,
        category : "gaming"
    },
    {
        title : "MSI Cyborg 15 B13WFKG 620KH",
        image : "/assets/img/msi/cyborg3.png",
        specs : [
            "CPU : 13th Gen Intel Core i7 13620H",
            "RAM : 16GB DDR5 = 32GB = $xxx",
            "SSD : 1TB M.2 PCIe 4",
            "GPU : NVIDIA RTX 5050 8GB GDDR7",
            "Display : 15.6” FHD (1920x1080), IPS-Level 144Hz",
            "OS : Windows 11 License",
            "Keyboard : 4-Zone RGB Gaming Keyboard",
            "Color : Translucent Black | Weight : 2.1Kg"
        ],
        price : 1539,
        category : "gaming"
    },

    {
        title : "MSI Cyborg 17 B13WEKG 257KH",
        image : "/assets/img/msi/cyborg3.png",
        specs : [
            "CPU : Intel Core 7 240H Processor",
            "RAM : 16GB DDR5 = 32GB = $xxx",
            "SSD : 512GB M.2 PCIe 4",
            "GPU : NVIDIA RTX 5050 8GB GDDR7",
            "Display : 15.6” FHD (1920x1080), IPS-Level 144Hz",
            "OS : Windows 11 License",
            "Keyboard : 4-Zone RGB Gaming Keyboard",
            "Color : Translucent Black | Weight : 2.1Kg"
        ],
        price : 1209,
        category : "gaming"
    },
    {
        title : "MSI Cyborg 17 B13WEKG 257KH",
        image : "/assets/img/msi/cyborg3.png",
        specs : [
            "CPU : Intel Core 7 240H Processor",
            "RAM : 16GB DDR5 = 32GB = $xxx",
            "SSD : 1TB M.2 PCIe 4",
            "GPU : NVIDIA RTX 5050 8GB GDDR7",
            "Display : 15.6” FHD (1920x1080), IPS-Level 144Hz",
            "OS : Windows 11 License",
            "Keyboard : 4-Zone RGB Gaming Keyboard",
            "Color : Translucent Black | Weight : 2.1Kg"
        ],
        price : 1299,
        category : "gaming"
    },
    {
        title : "MSI Cyborg 17 B13WEKG 257KH",
        image : "/assets/img/msi/cyborg3.png",
        specs : [
            "CPU : Intel Core 7 240H Processor",
            "RAM : 16GB DDR5 = 32GB = $xxx",
            "SSD : 512GB M.2 PCIe 4",
            "GPU : NVIDIA RTX 5050 8GB GDDR7",
            "Display : 15.6” FHD (1920x1080), IPS-Level 144Hz",
            "OS : Windows 11 License",
            "Keyboard : 4-Zone RGB Gaming Keyboard",
            "Color : Translucent Black | Weight : 2.1Kg"
        ],
        price : 1209,
        category : "gaming"
    },
    {
        title : "MSI Cyborg 17 B13WEKG 257KH",
        image : "/assets/img/msi/cyborg3.png",
        specs : [
            "CPU : Intel Core 7 240H Processor",
            "RAM : 16GB DDR5 = 32GB = $xxx",
            "SSD : 1TB M.2 PCIe 4",
            "GPU : NVIDIA RTX 5050 8GB GDDR7",
            "Display : 15.6” FHD (1920x1080), IPS-Level 144Hz",
            "OS : Windows 11 License",
            "Keyboard : 4-Zone RGB Gaming Keyboard",
            "Color : Translucent Black | Weight : 2.1Kg"
        ],
        price : 1229,
        category : "gaming"
    },

    {
        title : "CROSSHAIR 16 HX E14WFK 040KH",
        image : "/assets/img/msi/crosshair1.png",
        specs : [
            "CPU : Intel Core i7 14650HX Processor",
            "RAM : 16GB DDR5 = 32GB = $xxx",
            "SSD : 512GB M.2 PCIe",
            "GPU : NVIDIA RTX 5060 8GB",
            "Display : 16” QHD+ (2560x1600) 240Hz IPS-Level",
            "OS : Windows 11 License",
            "Keyboard : 4-Zone RGB Gaming Keyboard",
            "Color : Core Black | Weight : 2.3Kg"
        ],
        price : 1699,
        category : "gaming"
    },
    {
        title : "CROSSHAIR 16 HX E14WFK 040KH",
        image : "/assets/img/msi/crosshair1.png",
        specs : [
            "CPU : Intel Core i7 14650HX Processor",
            "RAM : 16GB DDR5 = 32GB = $xxx",
            "SSD : 512GB + 512GB M.2 PCIe",
            "GPU : NVIDIA RTX 5060 8GB",
            "Display : 16” QHD+ (2560x1600) 240Hz IPS-Level",
            "OS : Windows 11 License",
            "Keyboard : 4-Zone RGB Gaming Keyboard",
            "Color : Core Black | Weight : 2.3Kg"
        ],
        price : 1779,
        category : "gaming"
    },
    {
        title : "CROSSHAIR 16 HX E14WFK 040KH",
        image : "/assets/img/msi/crosshair1.png",
        specs : [
            "CPU : Intel Core i7 14650HX Processor",
            "RAM : 16GB DDR5 = 32GB = $xxx",
            "SSD : 512GB + 1TB M.2 PCIe",
            "GPU : NVIDIA RTX 5060 8GB",
            "Display : 16” QHD+ (2560x1600) 240Hz IPS-Level",
            "OS : Windows 11 License",
            "Keyboard : 4-Zone RGB Gaming Keyboard",
            "Color : Core Black | Weight : 2.3Kg"
        ],
        price : 1869,
        category : "gaming"
    },
    {
        title : "CROSSHAIR 16 HX E14WFK 040KH",
        image : "/assets/img/msi/crosshair1.png",
        specs : [
            "CPU : Intel Core i7 14650HX Processor",
            "RAM : 16GB DDR5 = 32GB = $xxx",
            "SSD : 512GB + 2TB M.2 PCIe",
            "GPU : NVIDIA RTX 5060 8GB",
            "Display : 16” QHD+ (2560x1600) 240Hz IPS-Level",
            "OS : Windows 11 License",
            "Keyboard : 4-Zone RGB Gaming Keyboard",
            "Color : Core Black | Weight : 2.3Kg"
        ],
        price : 1999,
        category : "gaming"
    },

    {
        title : "MSI CROSSHAIR 16 HX AI D2XWFKG 044KH",
        image : "/assets/img/msi/crosshair2.png",
        specs : [
            "CPU : Intel Core Ultra 9-275HX",
            "RAM : 16GB DDR5 = 32GB = $xxx",
            "SSD : 1TB M.2 PCIe",
            "GPU : NVIDIA RTX 5060 8GB DDR7",
            "Display : 16” QHD+ (2560x1600) 240Hz IPS-Level",
            "OS : Windows 11 License",
            "Keyboard : 24-Zone RGB Gaming Keyboard",
            "Color : Cosmos Gray | Weight : 2.7Kg"
        ],
        price : 1699,
        category : "gaming"
    },
    {
        title : "MSI CROSSHAIR 16 HX AI D2XWFKG 044KH",
        image : "/assets/img/msi/crosshair2.png",
        specs : [
            "CPU : Intel Core Ultra 9-275HX",
            "RAM : 16GB DDR5 = 32GB = $xxx",
            "SSD : 512GB + 1TB M.2 PCIe",
            "GPU : NVIDIA RTX 5060 8GB DDR7",
            "Display : 16” QHD+ (2560x1600) 240Hz IPS-Level",
            "OS : Windows 11 License",
            "Keyboard : 24-Zone RGB Gaming Keyboard",
            "Color : Cosmos Gray | Weight : 2.7Kg"
        ],
        price : 1779,
        category : "gaming"
    },
    {
        title : "MSI CROSSHAIR 16 HX AI D2XWFKG 044KH",
        image : "/assets/img/msi/crosshair2.png",
        specs : [
            "CPU : Intel Core Ultra 9-275HX",
            "RAM : 16GB DDR5 = 32GB = $xxx",
            "SSD : 2TB M.2 PCIe",
            "GPU : NVIDIA RTX 5060 8GB DDR7",
            "Display : 16” QHD+ (2560x1600) 240Hz IPS-Level",
            "OS : Windows 11 License",
            "Keyboard : 24-Zone RGB Gaming Keyboard",
            "Color : Cosmos Gray | Weight : 2.7Kg"
        ],
        price : 1829,
        category : "gaming"
    },
    {
        title : "MSI CROSSHAIR 16 HX AI D2XWFKG 044KH",
        image : "/assets/img/msi/crosshair2.png",
        specs : [
            "CPU : Intel Core Ultra 9-275HX",
            "RAM : 16GB DDR5 = 32GB = $xxx",
            "SSD : 512GB + 2TB M.2 PCIe",
            "GPU : NVIDIA RTX 5060 8GB DDR7",
            "Display : 16” QHD+ (2560x1600) 240Hz IPS-Level",
            "OS : Windows 11 License",
            "Keyboard : 24-Zone RGB Gaming Keyboard",
            "Color : Cosmos Gray | Weight : 2.7Kg"
        ],
        price : 1909,
        category : "gaming"
    },

    {
        title : "MSI CROSSHAIR 16 HX AI D2XWGKG 033KH",
        image : "/assets/img/msi/crosshair2.png",
        specs : [
            "CPU : Intel Core Ultra 9-275HX",
            "RAM : 16GB DDR5 = 32GB = $xxx",
            "SSD : 1TB M.2 PCIe",
            "GPU : NVIDIA RTX 5070 8GB DDR7",
            "Display : 16” QHD+ (2560x1600) 240Hz IPS-Level",
            "OS : Windows 11 License",
            "Keyboard : 24-Zone RGB Gaming Keyboard",
            "Color : Cosmos Gray | Weight : 2.7Kg"
        ],
        price : 1799,
        category : "gaming"
    },
    {
        title : "MSI CROSSHAIR 16 HX AI D2XWGKG 033KH",
        image : "/assets/img/msi/crosshair2.png",
        specs : [
            "CPU : Intel Core Ultra 9-275HX",
            "RAM : 16GB DDR5 = 32GB = $xxx",
            "SSD : 512GB + 1TB M.2 PCIe",
            "GPU : NVIDIA RTX 5070 8GB DDR7",
            "Display : 16” QHD+ (2560x1600) 240Hz IPS-Level",
            "OS : Windows 11 License",
            "Keyboard : 24-Zone RGB Gaming Keyboard",
            "Color : Cosmos Gray | Weight : 2.7Kg"
        ],
        price : 1879,
        category : "gaming"
    },
    {
        title : "MSI CROSSHAIR 16 HX AI D2XWGKG 033KH",
        image : "/assets/img/msi/crosshair2.png",
        specs : [
            "CPU : Intel Core Ultra 9-275HX",
            "RAM : 16GB DDR5 = 32GB = $xxx",
            "SSD : 2TB M.2 PCIe",
            "GPU : NVIDIA RTX 5070 8GB DDR7",
            "Display : 16” QHD+ (2560x1600) 240Hz IPS-Level",
            "OS : Windows 11 License",
            "Keyboard : 24-Zone RGB Gaming Keyboard",
            "Color : Cosmos Gray | Weight : 2.7Kg"
        ],
        price : 1929,
        category : "gaming"
    },
    {
        title : "MSI CROSSHAIR 16 HX AI D2XWGKG 033KH",
        image : "/assets/img/msi/crosshair2.png",
        specs : [
            "CPU : Intel Core Ultra 9-275HX",
            "RAM : 16GB DDR5 = 32GB = $xxx",
            "SSD : 512GB + 2TB M.2 PCIe",
            "GPU : NVIDIA RTX 5070 8GB DDR7",
            "Display : 16” QHD+ (2560x1600) 240Hz IPS-Level",
            "OS : Windows 11 License",
            "Keyboard : 24-Zone RGB Gaming Keyboard",
            "Color : Cosmos Gray | Weight : 2.7Kg"
        ],
        price : 2009,
        category : "gaming"
    },

    {
        title : "MSI Crosshair A16 HX MLG Edition E8WGK-217KH",
        image : "/assets/img/msi/crosshair3.png",
        specs : [
            "CPU : AMD Ryzen 9 8940HX Processor",
            "RAM : 16GB DDR5 = 32GB = $xxx",
            "SSD : 512GB PCIe",
            "GPU : NVIDIA RTX 5060 8GB DDR7",
            "Display : 16\" QHD+ 240Hz 100% DCI-P3",
            "OS : Windows 11 License",
            "Keyboard : 4-Zone RGB Gaming",
            "Color : Stellar White | Weight : 2.3Kg"
        ],
        price : 1899,
        category : "gaming"
    },
    {
        title : "MSI Crosshair A16 HX MLG Edition E8WGK-217KH",
        image : "/assets/img/msi/crosshair3.png",
        specs : [
            "CPU : AMD Ryzen 9 8940HX Processor",
            "RAM : 16GB DDR5 = 32GB = $xxx",
            "SSD : 1TB PCIe",
            "GPU : NVIDIA RTX 5060 8GB DDR7",
            "Display : 16\" QHD+ 240Hz 100% DCI-P3",
            "OS : Windows 11 License",
            "Keyboard : 4-Zone RGB Gaming",
            "Color : Stellar White | Weight : 2.3Kg"
        ],
        price : 1989,
        category : "gaming"
    },
    {
        title : "MSI Crosshair A16 HX MLG Edition E8WGK-217KH",
        image : "/assets/img/msi/crosshair3.png",
        specs : [
            "CPU : AMD Ryzen 9 8940HX Processor",
            "RAM : 16GB DDR5 = 32GB = $xxx",
            "SSD : 2TB PCIe",
            "GPU : NVIDIA RTX 5060 8GB DDR7",
            "Display : 16\" QHD+ 240Hz 100% DCI-P3",
            "OS : Windows 11 License",
            "Keyboard : 4-Zone RGB Gaming",
            "Color : Stellar White | Weight : 2.3Kg"
        ],
        price : 2119,
        category : "gaming"
    },
    {
        title : "MSI Crosshair A16 HX MLG Edition E8WGK-217KH",
        image : "/assets/img/msi/crosshair3.png",
        specs : [
            "CPU : AMD Ryzen 9 8940HX Processor",
            "RAM : 16GB DDR5 = 32GB = $xxx",
            "SSD : 512GB + 2TB PCIe",
            "GPU : NVIDIA RTX 5060 8GB DDR7",
            "Display : 16\" QHD+ 240Hz 100% DCI-P3",
            "OS : Windows 11 License",
            "Keyboard : 4-Zone RGB Gaming",
            "Color : Stellar White | Weight : 2.3Kg"
        ],
        price : 2199,
        category : "gaming"
    },

    {
        title : "MSI Crosshair A16 HX MLG Edition E8WGK-216KH",
        image : "/assets/img/msi/crosshair3.png",
        specs : [
            "CPU : AMD Ryzen 9 8940HX Processor",
            "RAM : 16GB DDR5 = 32GB = $xxx",
            "SSD : 1TB PCIe",
            "GPU : NVIDIA RTX 5070 8GB DDR7",
            "Display : 16\" QHD+ 240Hz 100% DCI-P3",
            "OS : Windows 11 License",
            "Keyboard : 4-Zone RGB Gaming",
            "Color : Stellar White | Weight : 2.3Kg"
        ],
        price : 2299,
        category : "gaming"
    },
    {
        title : "MSI Crosshair A16 HX MLG Edition E8WGK-216KH",
        image : "/assets/img/msi/crosshair3.png",
        specs : [
            "CPU : AMD Ryzen 9 8940HX Processor",
            "RAM : 16GB DDR5 = 32GB = $xxx",
            "SSD : 512GB + 1TB PCIe",
            "GPU : NVIDIA RTX 5070 8GB DDR7",
            "Display : 16\" QHD+ 240Hz 100% DCI-P3",
            "OS : Windows 11 License",
            "Keyboard : 4-Zone RGB Gaming",
            "Color : Stellar White | Weight : 2.3Kg"
        ],
        price : 2379,
        category : "gaming"
    },
    {
        title : "MSI Crosshair A16 HX MLG Edition E8WGK-216KH",
        image : "/assets/img/msi/crosshair3.png",
        specs : [
            "CPU : AMD Ryzen 9 8940HX Processor",
            "RAM : 16GB DDR5 = 32GB = $xxx",
            "SSD : 2TB PCIe",
            "GPU : NVIDIA RTX 5070 8GB DDR7",
            "Display : 16\" QHD+ 240Hz 100% DCI-P3",
            "OS : Windows 11 License",
            "Keyboard : 4-Zone RGB Gaming",
            "Color : Stellar White | Weight : 2.3Kg"
        ],
        price : 2429,
        category : "gaming"
    },
    {
        title : "MSI Crosshair A16 HX MLG Edition E8WGK-216KH",
        image : "/assets/img/msi/crosshair3.png",
        specs : [
            "CPU : AMD Ryzen 9 8940HX Processor",
            "RAM : 16GB DDR5 = 32GB = $xxx",
            "SSD : 512GB + 2TB PCIe",
            "GPU : NVIDIA RTX 5070 8GB DDR7",
            "Display : 16\" QHD+ 240Hz 100% DCI-P3",
            "OS : Windows 11 License",
            "Keyboard : 4-Zone RGB Gaming",
            "Color : Stellar White | Weight : 2.3Kg"
        ],
        price : 2509,
        category : "gaming"
    },
    //vector
    {
        title : "MSI VECTOR A18 HX A9WIG 096KH",
        image : "/assets/img/msi/vector.png",
        specs : [
            "CPU : Ryzen 9 9955HX-Processors",
            "RAM : 32GB (DDR5) = 64GB = $xxx",
            "SSD : 1TB M.2 PCIe",
            "GPU : NVIDIA RTX 5080 16GB DDR7",
            "Display : 18” QHD+ (2560x1600), IPS-Level 240Hz",
            "OS : Windows 11 License",
            "Keyboard : 26-Zone RGB Gaming",
            "Color : Cosmos Gray | Weight : 3.6Kg"
        ],
        price : 2999,
        category : "gaming"
    },
    {
        title : "MSI VECTOR A18 HX A9WIG 096KH",
        image : "/assets/img/msi/vector.png",
        specs : [
            "CPU : Ryzen 9 9955HX-Processors",
            "RAM : 512GB +1TB M.2 PCIe",
            "SSD : 1TB M.2 PCIe",
            "GPU : NVIDIA RTX 5080 16GB DDR7",
            "Display : 18” QHD+ (2560x1600), IPS-Level 240Hz",
            "OS : Windows 11 License",
            "Keyboard : 26-Zone RGB Gaming",
            "Color : Cosmos Gray | Weight : 3.6Kg"
        ],
        price : 3079,
        category : "gaming"
    },
    {
        title : "MSI VECTOR A18 HX A9WIG 096KH",
        image : "/assets/img/msi/vector.png",
        specs : [
            "CPU : Ryzen 9 9955HX-Processors",
            "RAM : 32GB (DDR5) = 64GB = $xxx",
            "SSD : 2TB M.2 PCIe",
            "GPU : NVIDIA RTX 5080 16GB DDR7",
            "Display : 18” QHD+ (2560x1600), IPS-Level 240Hz",
            "OS : Windows 11 License",
            "Keyboard : 26-Zone RGB Gaming",
            "Color : Cosmos Gray | Weight : 3.6Kg"
        ],
        price : 3129,
        category : "gaming"
    },
    {
        title : "MSI VECTOR A18 HX A9WIG 096KH",
        image : "/assets/img/msi/vector.png",
        specs : [
            "CPU : Ryzen 9 9955HX-Processors",
            "RAM : 32GB (DDR5) = 64GB = $xxx",
            "SSD : 512GB +2TB M.2 PCIe",
            "GPU : NVIDIA RTX 5080 16GB DDR7",
            "Display : 18” QHD+ (2560x1600), IPS-Level 240Hz",
            "OS : Windows 11 License",
            "Keyboard : 26-Zone RGB Gaming",
            "Color : Cosmos Gray | Weight : 3.6Kg"
        ],
        price : 3209,
        category : "gaming"
    },
    //titan
    {
        title : "TITAN 18 HX DRAGON EDITION DRACO EPIC A2WJ-1284KH",
        image : "/assets/img/msi/titan.png",
        specs : [
            "CPU : Intel Core Ultra 9 290HX Plus",
            "RAM : 96GB DDR5 (48GB*2) 6400MHz",
            "SSD : 2TB G5 + 2TB G4",
            "GPU : NVIDIA RTX 5090 24GB GDDR7",
            "Display : 18” UHD+ (3840x2400), MiniLED 240Hz",
            "OS : Windows 11 License",
            "Keyboard : 26-Zone RGB Gaming",
            "Color : Dragon Edition Draco Epic | Weight : 3.6Kg"
        ],
        price : 6899,
        category : "gaming"
    },
    {
        title : "TITAN 18 HX DRAGON EDITION DRACO EPIC A2WJ-1284KH",
        image : "/assets/img/msi/titan.png",
        specs : [
            "CPU : Intel Core Ultra 9 290HX Plus",
            "RAM : 96GB DDR5 (48GB*2) 6400MHz",
            "SSD : 2TB G5 + 2TB G4",
            "GPU : NVIDIA RTX 5090 24GB GDDR7",
            "Display : 18” UHD+ (3840x2400), MiniLED 240Hz",
            "OS : Windows 11 License",
            "Keyboard : 26-Zone RGB Gaming",
            "Color : Dragon Edition Draco Epic | Weight : 3.6Kg"
        ],
        price : 6899,
        category : "gaming"
    },
    {
        title : "TITAN 18 HX DRAGON EDITION DRACO EPIC A2WJ-1284KH",
        image : "/assets/img/msi/titan.png",
        specs : [
            "CPU : Intel Core Ultra 9 290HX Plus",
            "RAM : 96GB DDR5 (48GB*2) 6400MHz",
            "SSD : 2TB G5 + 2TB G4",
            "GPU : NVIDIA RTX 5090 24GB GDDR7",
            "Display : 18” UHD+ (3840x2400), MiniLED 240Hz",
            "OS : Windows 11 License",
            "Keyboard : 26-Zone RGB Gaming",
            "Color : Dragon Edition Draco Epic | Weight : 3.6Kg"
        ],
        price : 6899,
        category : "gaming"
    },
    {
        title : "TITAN 18 HX DRAGON EDITION DRACO EPIC A2WJ-1284KH",
        image : "/assets/img/msi/titan.png",
        specs : [
            "CPU : Intel Core Ultra 9 290HX Plus",
            "RAM : 96GB DDR5 (48GB*2) 6400MHz",
            "SSD : 2TB G5 + 2TB G4",
            "GPU : NVIDIA RTX 5090 24GB GDDR7",
            "Display : 18” UHD+ (3840x2400), MiniLED 240Hz",
            "OS : Windows 11 License",
            "Keyboard : 26-Zone RGB Gaming",
            "Color : Dragon Edition Draco Epic | Weight : 3.6Kg"
        ],
        price : 6899,
        category : "gaming"
    },
]

const alienware_section = document.getElementById('alienware')
const alienware_category = [
    {
        title : "Alienware Aurora 16 Gaming",
        image : "/assets/img/dell/Aurora.png",
        specs : [
            "CPU : Intel Core 7 240H (10C/16T)",
            "RAM : 16GB DDR5",
            "SSD : 512GB PCIe",
            "Display : 16\" WQXGA 120Hz",
            "VGA 2 : NVIDIA RTX 5050 8GB GDDR7",
            "OS : Windows 11 License",
            "Keyboard : Backlit Keyboard",
            "Color : Blue | Weight: 2.57Kg"
        ],
        price : 1299,
        category : "gaming"
    },
    {
        title : "Alienware Aurora 16 Gaming",
        image : "/assets/img/dell/Aurora.png",
        specs : [
            "CPU : Intel Core 7 240H (10C/16T)",
            "RAM : 32GB DDR5",
            "SSD : 1TB PCIe",
            "Display : 16\" WQXGA 120Hz",
            "VGA 2 : NVIDIA RTX 5060 8GB GDDR7",
            "OS : Windows 11 License",
            "Keyboard : Backlit Keyboard",
            "Color : Blue | Weight: 2.57Kg"
        ],
        price : 1299,
        category : "gaming"
    },
    {
        title : "Alienware Aurora 16 Gaming",
        image : "/assets/img/dell/Aurora.png",
        specs : [
            "CPU : Intel Core 7 240H (10C/16T)",
            "RAM : 16GB DDR5",
            "SSD : 512GB PCIe",
            "Display : 16\" WQXGA 120Hz",
            "VGA 2 : NVIDIA RTX 5050 8GB GDDR7",
            "OS : Windows 11 License",
            "Keyboard : Backlit Keyboard",
            "Color : Blue | Weight: 2.57Kg"
        ],
        price : 1299,
        category : "gaming"
    },
    {
        title : "Alienware Aurora 16 Gaming",
        image : "/assets/img/dell/Aurora.png",
        specs : [
            "CPU : Intel Core 7 240H (10C/16T)",
            "RAM : 32GB DDR5",
            "SSD : 1TB PCIe",
            "Display : 16\" WQXGA 120Hz",
            "VGA 2 : NVIDIA RTX 5060 8GB GDDR7",
            "OS : Windows 11 License",
            "Keyboard : Backlit Keyboard",
            "Color : Blue | Weight: 2.57Kg"
        ],
        price : 1299,
        category : "gaming"
    }
]
const omen_section = document.getElementById('omen')
const omen_category = [
    {
        title : "OMEN GAMING LAPTOP 16",
        image : "/assets/img/hp/omen1.png",
        specs : [
            "CPU : Intel® Core™ i7 14th generation processor",
            "RAM : 32GB",
            "SSD : 1TB PCIe",
            "Display : 16\" diagonal WQXGA",
            "GPU : NVIDIA® GeForce RTX™ 5070 8GB GDDR7",
            "Keyboard : Single-Zone White Backlit Keyboard",
            "OS : Windows 11 License",
            "Weight : 2.45Kg",
            "Color : Shadow black"
        ],
        price : 1999,
        category : "gaming"
    },
    {
        title : "OMEN GAMING LAPTOP 16-AP0097NR 16",
        image : "/assets/img/hp/omen1.png",
        specs : [
            "CPU : AMD Ryzen™ AI 9 processor",
            "RAM : 32GB",
            "SSD : 1TB PCIe",
            "Display : 16\" diagonal WQXGA",
            "GPU : NVIDIA® GeForce RTX™ 5070 8GB GDDR7",
            "Keyboard : Single-Zone White Backlit Keyboard",
            "OS : Windows 11 License",
            "Weight : 2.45Kg",
            "Color : Shadow black"
        ],
        price : 2599,
        category : "gaming"
    },
    {
        title : "OMEN TRANSCEND LAPTOP 16-FB0097NR 14",
        image : "/assets/img/hp/omen3.png",
        specs : [
            "CPU : Intel® Core™ Ultra 9 processor",
            "RAM : 32GB",
            "SSD : 1TB PCIe",
            "Display : 16\" diagonal WQXGA",
            "GPU : NVIDIA® GeForce RTX™ 4070 8GB GDDR6",
            "Keyboard : HyperX RGB Keyboard with Translucent Keycaps",
            "OS : Windows 11 License",
            "Weight : 1.63Kg",
            "Color : Shadow black, Ceramic white"
        ],
        price : 2249,
        category : "gaming"
    },
    {
        title : "OMEN TRANSCEND LAPTOP 16-FB0097NR 14",
        image : "/assets/img/hp/omen4.png",
        specs : [
            "CPU : Intel® Core™ Ultra 7 Series 2 processor",
            "RAM : 32GB",
            "SSD : 1TB PCIe",
            "Display : 16\" diagonal WQXGA",
            "GPU : NVIDIA® GeForce RTX™ 5060 8GB GDDR7",
            "Keyboard : HyperX RGB Keyboard",
            "OS : Windows 11 License",
            "Weight : 1.63Kg",
            "Color : Shadow black, Ceramic white"
        ],
        price : 2599,
        category : "gaming"
    },

    {
        title : "OMEN GAMING LAPTOP 16-AP0097NR 16",
        image : "/assets/img/hp/omen2.png",
        specs : [
            "CPU : AMD Ryzen™ AI 7 processor",
            "RAM : 16GB",
            "SSD : 1TB PCIe",
            "Display : 16\" diagonal WQXGA",
            "GPU : NVIDIA® GeForce RTX™ 5070 8GB GDDR7",
            "Keyboard : HP OMEN 4-Zone RGB Backlit",
            "OS : Windows 11 License",
            "Weight : 2.45Kg",
            "Color : Shadow black"
        ],
        price : 2099,
        category : "gaming"
    },
    {
        title : "OMEN GAMING LAPTOP 16-AP0097NR 16",
        image : "/assets/img/hp/omen2.png",
        specs : [
            "CPU : Intel® Core™ Ultra 7 processor",
            "RAM : 16GB",
            "SSD : 1TB PCIe",
            "Display : 16\" 2K diagonal",
            "GPU : NVIDIA® GeForce RTX™ 5070 8GB GDDR7",
            "Keyboard : HP OMEN 4-Zone RGB Backlit",
            "OS : Windows 11 License",
            "Weight : 2.45Kg",
            "Color : Shadow black"
        ],
        price : 2099,
        category : "gaming"
    },
    {
        title : "OMEN GAMING LAPTOP 16-AP0097NR 16",
        image : "/assets/img/hp/omen2.png",
        specs : [
            "CPU : AMD Ryzen™ AI 9 Series 2 processor",
            "RAM : 32GB",
            "SSD : 1TB PCIe",
            "Display : 16\" diagonal WQXGA",
            "GPU : NVIDIA® GeForce RTX™ 5080 16GB GDDR7",
            "Keyboard : HP OMEN 4-Zone RGB Backlit",
            "OS : Windows 11 License",
            "Weight : 2.45Kg",
            "Color : Shadow black"
        ],
        price : 3799,
        category : "gaming"
    },
    {
        title : "OMEN GAMING LAPTOP 16-AP0097NR 16",
        image : "/assets/img/hp/omen2.png",
        specs : [
            "CPU : AMD Ryzen™ AI 9 processor",
            "RAM : 32GB",
            "SSD : 1TB PCIe",
            "Display : 16\" diagonal WQXGA",
            "GPU : NVIDIA® GeForce RTX™ 5080 8 GB GDDR7",
            "Keyboard : HP OMEN 4-Zone RGB Backlit",
            "OS : Windows 11 License",
            "Weight : 2.45Kg",
            "Color : Shadow black"
        ],
        price : 3899,
        category : "gaming"
    },
]

const acer_section = document.getElementById('acer')
const acer_category = [
    // workstation
    {
        title : "ConceptD 5 Laptop - CN516-73G-70XD",
        image : "/assets/img/acer/concept1.png",
        specs : [
            "CPU : Intel® Core™ i7-12700H processor",
            "RAM : 32GB",
            "SSD : 1TB",
            "Display : 16\" WQXGA+ (3072 x 1920) 16:10",
            "GPU : NVIDIA® GeForce RTX™ 3070Ti",
            "OS : Windows 11 License",
            "Keyboard : Amber Backlit",
            "Color : Blacklight | Weight: 2.4"
        ],
        price : 2299,
        category : "workstation"
    },
    {
        title : "ConceptD 7 Laptop - CN715-71-73A9",
        image : "/assets/img/acer/concept2.png",
        specs : [
            "CPU : Intel® Core™ i7-9750H processor",
            "RAM : 32GB",
            "SSD : 1TB",
            "Display : 15.6\" 4K UHD (3840 x 2160) 16:9 IPS",
            "GPU : NVIDIA® GeForce RTX™ 2080",
            "OS : Windows 10 License",
            "Keyboard : FineTip Amber-Backlit",
            "Color : Pure White | Weight: 2.1"
        ],
        price : 2999,
        category : "workstation"
    },
    {
        title : "ConceptD 5 Laptop - CN516-73G-70XD",
        image : "/assets/img/acer/concept1.png",
        specs : [
            "CPU : Intel® Core™ i7-12700H processor",
            "RAM : 32GB",
            "SSD : 1TB",
            "Display : 16\" WQXGA+ (3072 x 1920) 16:10",
            "GPU : NVIDIA® GeForce RTX™ 3070Ti",
            "OS : Windows 11 License",
            "Keyboard : Amber Backlit",
            "Color : Blacklight | Weight: 2.4"
        ],
        price : 2299,
        category : "workstation"
    },
    {
        title : "ConceptD 7 Laptop - CN715-71-73A9",
        image : "/assets/img/acer/concept2.png",
        specs : [
            "CPU : Intel® Core™ i7-9750H processor",
            "RAM : 32GB",
            "SSD : 1TB",
            "Display : 15.6\" 4K UHD (3840 x 2160) 16:9 IPS",
            "GPU : NVIDIA® GeForce RTX™ 2080",
            "OS : Windows 10 License",
            "Keyboard : FineTip Amber-Backlit",
            "Color : Pure White | Weight: 2.1"
        ],
        price : 2999,
        category : "workstation"
    },
    //ultrabook
    {
        title : "Swift Go 14 SFG14-73-51GF Notebook",
        image : "/assets/img/acer/swift1.png",
        specs : [
            "CPU : Intel® Core™ Ultra 5 Series 1 125H",
            "RAM : 16GB",
            "SSD : 1TB",
            "Display : 14\" 2.8K (2880 x 1800) 90 Hz",
            "GPU : Intel® Arc™ Graphics shared memory",
            "OS : Windows 10 License",
            "Keyboard : black backlit",
            "Color : Black keycaps | Weight: 1.5"
        ],
        price : 829,
        category : "ultrabook"
    },
    {
        title : "Swift Go 14",
        image : "/assets/img/acer/swift1.png",
        specs : [
            "CPU : Intel® Core™ Ultra 5 Series 1 125H",
            "RAM : 16GB",
            "SSD : 512GB",
            "Display : 35.6 cm (14\") 2.8K (2880 x 1800) 16:10 Eyesafe 90 Hz",
            "GPU : Intel® Arc™ Graphics shared memory",
            "OS : Windows 10 License",
            "Keyboard : black backlit",
            "Color : Black keycaps | Weight: 1.5"
        ],
        price : 759,
        category : "ultrabook"
    },
    {
        title : "Acer Swift Go 14 AI Copilot+ PC OLED",
        image : "/assets/img/acer/swift3.png",
        specs : [
            "CPU : Intel® Core™ Ultra 5 processor 226V",
            "RAM : 16GB",
            "SSD : 512GB",
            "Display : 14-inch 16:10 WUXGA (1920 x 1200) OLED",
            "GPU : Intel® Arc™ Graphics shared memory",
            "OS : Windows 10 License",
            "Keyboard : black backlit",
            "Color : Steam blue | Weight: 1.27"
        ],
        price : 999,
        category : "ultrabook"
    },
    {
        title : "Acer Swift Go 14 AI Copilot+ PC OLED Laptop",
        image : "/assets/img/acer/swift3.png",
        specs : [
            "CPU : Intel® Core™ Ultra 7 processor 256V",
            "RAM : 16GB",
            "SSD : 1TB PCIe Gen 4",
            "Display : 14-inch WUXGA(1920x1200)OLED",
            "GPU : Intel® ARC Graphics 140V",
            "OS : Windows 10 License",
            "Keyboard : Backlit",
            "Color : Steam blue | Weight: 1.27"
        ],
        price : 919,
        category : "ultrabook"
    },
    // gaming
    {
        title : "Acer Nitro V 16",
        image : "/assets/img/acer/nitro1.png",
        specs : [
            "CPU : Intel® Core™ 7 Series 2 240H",
            "RAM : 8GB",
            "SSD : 1TB",
            "Display : 16\" WUXGA (1920 x 1200) 16:10 IPS 165 Hz",
            "GPU : NVIDIA® GeForce RTX™ 5050",
            "OS : Windows 11 License",
            "Keyboard : RGB 4 Zones Backlight",
            "Color : Volt Green | Weight: 2.1"
        ],
        price : 1899,
        category : "gaming"
    },
    {
        title : "Acer Nitro V 16",
        image : "/assets/img/acer/nitro1.png",
        specs : [
            "CPU : Intel® Core™ 7 Series 2 240H",
            "RAM : 16GB",
            "SSD : 1TB",
            "Display : 16\" WUXGA (1920 x 1200) 16:10 IPS 165 Hz",
            "GPU : NVIDIA® GeForce RTX™ 5070",
            "OS : Windows 11 License",
            "Keyboard : RGB 4 Zones Backlight",
            "Color : Volt Green | Weight: 2.1"
        ],
        price : 2399,
        category : "gaming"
    },
    {
        title : "Acer Nitro V 17 AI",
        image : "/assets/img/acer/nitro2.png",
        specs : [
            "CPU : AMD Ryzen™ 5 Ryzen 200 Series",
            "RAM : 16GB",
            "SSD : 1TB",
            "Display : 17.3\" Full HD (1920 x 1080) 16:9 IPS 180 Hz",
            "GPU : NVIDIA® GeForce RTX™ 5060",
            "OS : Windows 11 License",
            "Keyboard : RGB 4 Zones Backlight",
            "Color : Volt Green | Weight: 2.1"
        ],
        price : 2399,
        category : "gaming"
    },
    {
        title : "Acer Nitro V 16",
        image : "/assets/img/acer/nitro2.png",
        specs : [
            "CPU : Intel® Core™ 7 Series 2 240H",
            "RAM : 32GB",
            "SSD : 512GB",
            "Display : 16\" WUXGA (1920 x 1200) 16:10 IPS 180 Hz",
            "GPU : NVIDIA® GeForce RTX™ 5060",
            "OS : Windows 11 License",
            "Keyboard : RGB 4 Zones Backlight",
            "Color : Volt Green | Weight: 2.1"
        ],
        price : 1249,
        category : "gaming"
    },
    // predator
    {
        title : "Predator Helios Neo 16",
        image : "/assets/img/acer/predator1.png",
        specs : [
            "CPU : Intel® Core™ i7-14650HX",
            "RAM : 16GB",
            "SSD : 512GB",
            "Display : 16\" WUXGA (1920 x 1200) 16:10 IPS 180 Hz",
            "GPU : NVIDIA® GeForce RTX™ 5060",
            "OS : Windows 11 License",
            "Keyboard : RGB 4 Zones Backlight",
            "Color : Abyssal Black | Weight: 2.8"
        ],
        price : 1999,
        category : "gaming"
    },
    {
        title : "Predator Helios Neo 16 AI",
        image : "/assets/img/acer/predator1.png",
        specs : [
            "CPU : Intel® Core™ Ultra 9 Series 2 290HX",
            "RAM : 32GB",
            "SSD : 1TB",
            "Display : 16\" WQXGA (2560 x 1600) 16:10 IPS 240 Hz",
            "GPU : NVIDIA® GeForce RTX™ 5080",
            "OS : Windows 11 License",
            "Keyboard : RGB 4 Zones Backlight",
            "Color : Abyssal Black | Weight: 2.8"
        ],
        price : 3249,
        category : "gaming"
    },
    {
        title : "Predator Helios 16 AI",
        image : "/assets/img/acer/predator2.png",
        specs : [
            "CPU : Intel® Core™ Ultra 9 Series 2 275HX",
            "RAM : 32GB",
            "SSD : 1TB",
            "Display : 16\" WQXGA (2560 x 1600) 16:10 IPS 240 Hz",
            "GPU : NVIDIA® GeForce RTX™ 5090",
            "OS : Windows 11 License",
            "Keyboard : RGB 4 Zones Backlight",
            "Color : Abyssal Black | Weight: 2.7"
        ],
        price : 3999,
        category : "gaming"
    },
    {
        title : "Predator Helios 16 AI",
        image : "/assets/img/acer/predator2.png",
        specs : [
            "CPU : Intel® Core™ Ultra 9 Series 2 275HX",
            "RAM : 32GB",
            "SSD : 1TB",
            "Display : 16\" WQXGA (2560 x 1600) 16:10 IPS 240 Hz",
            "GPU : NVIDIA® GeForce RTX™ 5090",
            "OS : Windows 11 License",
            "Keyboard : RGB 4 Zones Backlight",
            "Color : Abyssal Black | Weight: 2.7"
        ],
        price : 3999,
        category : "gaming"
    },
]
const brand = {
    apple: apple_category,
    lenovo: lenovo_category,
    proart: proart_category,
    rog: rog_category,
    msi: msi_category,
    alienware: alienware_category,
    omen: omen_category,
    acer: acer_category
};

Object.entries(brand).forEach(([id, products]) => renderBrand(id, products));