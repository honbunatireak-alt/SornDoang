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
                <h5>Price : $${item.price.toLocaleString('en-US')}</h5>
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
                <h5>Price : $${item.price.toLocaleString('en-US')}</h5>
                <button>Buy Now</button>
            </div>
        </figure>
    `;
})
lenovo_section.innerHTML = lenovo_html;

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
    },
]

let rog_html = ""
rog_category.map((item, index) => {
    rog_html +=`
        <figure>
            <img src="${item.image}" alt="">
            <h4>${item.title}</h4>
            <ul>
                ${item.specs.map((spec) => `<li>${spec}</li>`).join("")}
            </ul>
            <div>
                <h5>Price : $${item.price.toLocaleString('en-US')}</h5>
                <button>Buy Now</button>
            </div>
        </figure>
    `
})
rog_section.innerHTML = rog_html;