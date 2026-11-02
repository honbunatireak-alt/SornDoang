const apple_section = document.getElementById('apple');

const apple_category = [
    // 256GB
    {
        title : "MacBook Neo A18 Pro 2026",
        image : "assets/img/apple/Neo1.png",
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
        image : "assets/img/apple/Neo2.png",
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
        image : "assets/img/apple/Neo3.png",
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
        image : "assets/img/apple/Neo4.png",
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
        image : "assets/img/apple/Neo1.png",
        specs : [
            "Apple A18 Pro Chip (6C-CPU / 5GPU)",
            "RAM : 8GB Unified Memory",
            "SSD : 512GB SSD",
            "13.0-inch Liquid Retina display 500nits",
            "Magic Keyboard",
            "Weight : 1.2kg / Color : Indigo"
        ],
        price : 739,
    },
    {
        title : "MacBook Neo A18 Pro 2026",
        image : "assets/img/apple/Neo2.png",
        specs : [
            "Apple A18 Pro Chip (6C-CPU / 5GPU)",
            "RAM : 8GB Unified Memory",
            "SSD : 512GB SSD",
            "13.0-inch Liquid Retina display 500nits",
            "Magic Keyboard",
            "Weight : 1.2kg / Color : Indigo"
        ],
        price : 739,
    },
    {
        title : "MacBook Neo A18 Pro 2026",
        image : "assets/img/apple/Neo3.png",
        specs : [
            "Apple A18 Pro Chip (6C-CPU / 5GPU)",
            "RAM : 8GB Unified Memory",
            "SSD : 512GB SSD",
            "13.0-inch Liquid Retina display 500nits",
            "Magic Keyboard",
            "Weight : 1.2kg / Color : Indigo"
        ],
        price : 739,
    },
    {
        title : "MacBook Neo A18 Pro 2026",
        image : "assets/img/apple/Neo4.png",
        specs : [
            "Apple A18 Pro Chip (6C-CPU / 5GPU)",
            "RAM : 8GB Unified Memory",
            "SSD : 512GB SSD",
            "13.0-inch Liquid Retina display 500nits",
            "Magic Keyboard",
            "Weight : 1.2kg / Color : Indigo"
        ],
        price : 739,
    },
    // Air Models
    // 512GB
    {
        title : "MacBook Air 13-inch M5 2026",
        image : "assets/img/apple/Air1.png",
        specs : [
            "Apple A18 Pro Chip (6C-CPU / 5GPU)",
            "RAM : 8GB Unified Memory",
            "SSD : 512GB SSD",
            "13.0-inch Liquid Retina display 500nits",
            "Magic Keyboard",
            "Weight : 1.2kg / Color : Indigo"
        ],
        price : 739,
    },
    {
        title : "MacBook Air 13-inch M5 2026",
        image : "assets/img/apple/Air2.png",
        specs : [
            "Apple A18 Pro Chip (6C-CPU / 5GPU)",
            "RAM : 8GB Unified Memory",
            "SSD : 512GB SSD",
            "13.0-inch Liquid Retina display 500nits",
            "Magic Keyboard",
            "Weight : 1.2kg / Color : Indigo"
        ],
        price : 739,
    },
    {
        title : "MacBook Air 13-inch M5 2026",
        image : "assets/img/apple/Air3.png",
        specs : [
            "Apple A18 Pro Chip (6C-CPU / 5GPU)",
            "RAM : 8GB Unified Memory",
            "SSD : 512GB SSD",
            "13.0-inch Liquid Retina display 500nits",
            "Magic Keyboard",
            "Weight : 1.2kg / Color : Indigo"
        ],
        price : 739,
    },
    {
        title : "MacBook Air 13-inch M5 2026",
        image : "assets/img/apple/Air4.png",
        specs : [
            "Apple A18 Pro Chip (6C-CPU / 5GPU)",
            "RAM : 8GB Unified Memory",
            "SSD : 512GB SSD",
            "13.0-inch Liquid Retina display 500nits",
            "Magic Keyboard",
            "Weight : 1.2kg / Color : Indigo"
        ],
        price : 739,
    },
    // 1TB
    {
        title : "MacBook Air 13-inch M5 2026",
        image : "assets/img/apple/Air1.png",
        specs : [
            "Apple A18 Pro Chip (6C-CPU / 5GPU)",
            "RAM : 8GB Unified Memory",
            "SSD : 1TB SSD",
            "13.0-inch Liquid Retina display 500nits",
            "Magic Keyboard",
            "Weight : 1.2kg / Color : Indigo"
        ],
        price : 739,
    },
    {
        title : "MacBook Air 13-inch M5 2026",
        image : "assets/img/apple/Air2.png",
        specs : [
            "Apple A18 Pro Chip (6C-CPU / 5GPU)",
            "RAM : 8GB Unified Memory",
            "SSD : 1TB SSD",
            "13.0-inch Liquid Retina display 500nits",
            "Magic Keyboard",
            "Weight : 1.2kg / Color : Indigo"
        ],
        price : 739,
    },
    {
        title : "MacBook Air 13-inch M5 2026",
        image : "assets/img/apple/Air3.png",
        specs : [
            "Apple A18 Pro Chip (6C-CPU / 5GPU)",
            "RAM : 8GB Unified Memory",
            "SSD : 1TB SSD",
            "13.0-inch Liquid Retina display 500nits",
            "Magic Keyboard",
            "Weight : 1.2kg / Color : Indigo"
        ],
        price : 739,
    },
    {
        title : "MacBook Air 13-inch M5 2026",
        image : "assets/img/apple/Air4.png",
        specs : [
            "Apple A18 Pro Chip (6C-CPU / 5GPU)",
            "RAM : 8GB Unified Memory",
            "SSD : 1TB SSD",
            "13.0-inch Liquid Retina display 500nits",
            "Magic Keyboard",
            "Weight : 1.2kg / Color : Indigo"
        ],
        price : 739,
    },
    {
        title : "MacBook Neo A18 Pro 2026",
        image : "assets/img/apple/Pro.png",
        specs : [
            "Apple A18 Pro Chip (6C-CPU / 5GPU)",
            "RAM : 8GB Unified Memory",
            "SSD : 256GB SSD",
            "13.0-inch Liquid Retina display 500nits",
            "Magic Keyboard",
            "Weight : 1.2kg / Color : Indigo"
        ],
        price : 739,
    }
]
let apple_html = "";
apple_category.map((item, index) => {
    apple_html += `
        <figure>
            <img src="${item.image}" alt="">
            <h4>${item.title}</h4>
            <ul>
                ${item.specs.map((spec) => `<li>${spec}</li>`).join("")}
            </ul>
            <div>
                <h5>Price : ${item.price}</h5>
                <button>Buy Now</button>
            </div>
        </figure>
    `;
});
apple_section.innerHTML = apple_html;

// lenovo
const lenovo_section = document.getElementById('lenovo');

const lenovo_category = [
    {
        title : "ThinkPad X1 Carbon Gen 13 Aura Edition",
        image : "assets/img/Lenovo/x.png",
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
    },
    {
        title : "ThinkPad X1 Carbon Gen 13 Aura Edition",
        image : "assets/img/Lenovo/x.png",
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
    },
    {
        title : "ThinkPad X1 Carbon Gen 13 Aura Edition",
        image : "assets/img/Lenovo/x.png",
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
    },
    {
        title : "ThinkPad X1 Carbon Gen 13 Aura Edition",
        image : "assets/img/Lenovo/x.png",
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
    },
    {
        title : "Lenovo LOQ 15AHP9",
        image : "assets/img/Lenovo/loq1.png",
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
    },
    {
        title : "Lenovo LOQ 15AHP9",
        image : "assets/img/Lenovo/loq1.png",
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
    },
    {
        title : "Lenovo LOQ 15AHP9",
        image : "assets/img/Lenovo/loq1.png",
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
    },
    {
        title : "Lenovo LOQ 15AHP9",
        image : "assets/img/Lenovo/loq1.png",
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
    },
    {
        title : "Lenovo LOQ 15IRX9",
        image : "assets/img/Lenovo/loq2.png",
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
    },
    {
        title : "Lenovo LOQ 15IRX9",
        image : "assets/img/Lenovo/loq2.png",
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
    },
    {
        title : "Lenovo LOQ 15IRX9",
        image : "assets/img/Lenovo/loq2.png",
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
    },
    {
        title : "Lenovo LOQ 15IRX9",
        image : "assets/img/Lenovo/loq2.png",
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
    },
    {
        title : "Lenovo LOQ 17IRX10",
        image : "assets/img/Lenovo/loq3.png",
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
    },
    {
        title : "Lenovo LOQ 17IRX10",
        image : "assets/img/Lenovo/loq3.png",
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
    },
    {
        title : "Lenovo LOQ 17IRX10",
        image : "assets/img/Lenovo/loq3.png",
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
    },
    {
        title : "Lenovo LOQ 17IRX10",
        image : "assets/img/Lenovo/loq3.png",
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
    },

    {
        title : "LENOVO LEGION 5 15IRX10",
        image : "assets/img/Lenovo/legion1.png",
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
    },
    {
        title : "LENOVO LEGION 5 15IRX10",
        image : "assets/img/Lenovo/legion1.png",
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
    },
    {
        title : "LENOVO LEGION 5 15IRX10",
        image : "assets/img/Lenovo/legion1.png",
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
    },
    {
        title : "LENOVO LEGION 5 15IRX10",
        image : "assets/img/Lenovo/legion1.png",
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
    },

    {
        title : "LENOVO LEGION 5 15IRX10",
        image : "assets/img/Lenovo/legion1.png",
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
    },
    {
        title : "LENOVO LEGION 5 15IRX10",
        image : "assets/img/Lenovo/legion1.png",
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
    },
    {
        title : "LENOVO LEGION 5 15IRX10",
        image : "assets/img/Lenovo/legion1.png",
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
    },
    {
        title : "LENOVO LEGION 5 15IRX10",
        image : "assets/img/Lenovo/legion1.png",
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
    },

    {
        title : "LENOVO LEGION 5 15IRX10",
        image : "assets/img/Lenovo/legion2.png",
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
    },
    {
        title : "LENOVO LEGION 5 15IRX10",
        image : "assets/img/Lenovo/legion2.png",
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
    },
    {
        title : "LENOVO LEGION 5 15IRX10",
        image : "assets/img/Lenovo/legion2.png",
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
    },
    {
        title : "LENOVO LEGION 5 15IRX10",
        image : "assets/img/Lenovo/legion2.png",
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
    },

    {
        title : "LENOVO LEGION 5 15IRX10",
        image : "assets/img/Lenovo/legion2.png",
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
    },
    {
        title : "LENOVO LEGION 5 15IRX10",
        image : "assets/img/Lenovo/legion2.png",
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
    },
    {
        title : "LENOVO LEGION 5 15IRX10",
        image : "assets/img/Lenovo/legion2.png",
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
    },
    {
        title : "LENOVO LEGION 5 15IRX10",
        image : "assets/img/Lenovo/legion2.png",
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
    },

    {
        title : "LENOVO LEGION PRO 7 16IAX10H",
        image : "assets/img/Lenovo/legion3.png",
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
    },
    {
        title : "LENOVO LEGION PRO 7 16IAX10H",
        image : "assets/img/Lenovo/legion3.png",
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
    },
    {
        title : "LENOVO LEGION PRO 7 16IAX10H",
        image : "assets/img/Lenovo/legion3.png",
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
    },
    {
        title : "LENOVO LEGION PRO 7 16IAX10H",
        image : "assets/img/Lenovo/legion3.png",
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
    },
]
let lenovo_html = "";
lenovo_category.map((item, index) => {
    lenovo_html += `
        <figure>
            <img src="${item.image}" alt="">
            <h4>${item.title}</h4>
            <ul>
                ${item.specs.map((spec) => `<li>${spec}</li>`).join("")}
            </ul>
            <div>
                <h5>Price : ${item.price}</h5>
                <button>Buy Now</button>
            </div>
        </figure>
    `;
})
lenovo_section.innerHTML = lenovo_html;