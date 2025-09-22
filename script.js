// Plant Data
const plantData = {
    plant1: {
        EnglishName: "Holy Basil",
        NepaliName: "Tulasi",
        ScientificName: "Ocimum tenuiflorum",
        FamilyName: "Lamiaceae/Mints",
        PhysicalFeatures: "(Herb) Holy Basil has aromatic leaves that are oval or lance-shaped, with serrated edges. This plant has slender and branching stems that can grow up to a meter (3 feet) in height. Likewise, Holy Basil produces small, tubular flowers in various colors, including white, pink or purple. The flowers are arranged in dense clusters on upright spikes. Holy Basil also has a well-developed root system with fibrous roots that anchor the plant in the soil and absorb water and nutrients.",
        Importance: "It is used in aiding cough, asthma, cold and other respiratory diseases etc.<br><br>It is also rich in Vitamin C and zinc thus, it acts as a natural immunity booster.<br><br>It has anti-bacterial and anti-viral properties which help to fight infections and reduce fever.<br><br>Dried leaves of this plant are mixed with stored grains to repel insects.",
        FunFact: "Holy Basil is considered as a sacred plant in Hinduism and is revered for its spiritual and medicinal properties. It is very commonly found in South-East Asian households, temples and gardens. In addition to its cultural significance, Holy Basil has a unique fragrance that is often described as a combination of cloves, peppermint and lemon.",
        Image: "images/Tulasi.jpg",
    },
    plant2: {
        EnglishName: "Zonal Geranium",
        NepaliName: "Zonal Geranium",
        ScientificName: "Pelargonium",
        FamilyName: "Geraniaceae",
        PhysicalFeatures: "(Perennial shrub) Zonal geraniums have large, rounded or lobed leaves that are typically dark green in color. Likewise, these plants produce clusters of showy, symmetrical flowers in a wide range of colors. The flowers can be single or double and they come in shades of red, pink, white, salmon, and other vibrant hues. The stems of these plants are typically upright and slightly woody. Similarly, Zonal geraniums have fibrous roots and scented leaves, which can release pleasant aromas when touched or brushed against.",
        Importance: "Zonal geraniums are cultivated as ornamental plants due to their vibrant flowers and attractive foliage.<br><br>These plants have aromatic leaves that can be crushed to release a pleasant fragrance.<br><br>Although, this plant is mostly used for ornamental purposes, it is also used in traditional medicine for the treatment of respiratory infections and cold symptoms.<br><br>Zonal geraniums are well-suited for container gardening. They can be grown in pots, hanging baskets or window boxes adding beauty to balconies and indoor spaces.",
        FunFact: "Zonal geraniums have the ability to emit a pleasant scent when their leaves are touched or brushed. This scent is often described as a combination of various aromas, including rose, lemon, citrus or even hints of mint.",
        Image: "images/ZonalGeranium.jpg",
    },
    plant3: {
        EnglishName: "Welsh Onion",
        NepaliName: "Pyaj",
        ScientificName: "Allium fistulosum",
        FamilyName: "Amaryllidaceae",
        PhysicalFeatures: "(herb)The leaves of Welsh onions long, tubular and hollow. They are dark green in color and have a smooth texture. These plants also have small, elongated bulbs that grow underground. The bulbs are white in color, have a mild onion flavor and are edible. Similarly, Welsh onions have a fibrous root system that helps anchor the plant in the soil and absorb nutrients and water. Likewise, the stalks of these plants can reach a height of 60-90 centimeters(24-36 inches).",
        Importance: "Welsh onions are widely used in various cuisines around the world. The green leaves and white bulbs of it add a fresh and distinctive taste to food. They are commonly used in garnish, salads, stir-fries, soups and many other dishes.<br><br>They are a nutritious addition to meals. They are low in calories but rich in Vitamin C, Vitamin K, folate and potassium. Consuming it can contribute to a well-rounded and healthy diet.<br><br>Welsh onions contain beneficial compounds that possess potential medicinal properties. They have antioxidant, antimicrobial and anti-inflammatory effects, contributing to overall health and well-being.",
        FunFact: "The name “Welsh onion” can be a bit misleading as it does not have a direct connection to Wales. The term “Welsh” is believed to have derived from German word “Welsch” which means “foreign” or “non-native.” It was used to describe plants that were brought to Europe from other regions.",
        Image: "images/Welsh onion.jpg",
    },
    plant4: {
        EnglishName: "Umbrella Palm",
        NepaliName: "",
        ScientificName: "Cyperus alternifolius",
        FamilyName: "Cyperaceae",
        PhysicalFeatures: "(herb) The leaves of Umbrella Palm are long, slender and grass-like which grow in an umbrella-like arrangement at the top of its stem. The stem of this plant is slender, erect and cylindrical. Similarly, Umbrella Palm produces small flowers which are usually brown or green in color. Likewise, Umbrella Palm has rhizomes, which are underground stems that help the plant propagate and spread.",
        Importance: "Umbrella Palm is highly valued as an ornamental plant due to its unique and attractive appearance.<br><br>It is effective in filtration and purification of water. It has the ability to absorb excess nutrients, pollutants and toxins from water bodies, thereby improving water quality.<br><br>The dense root system of Umbrella Palm helps in stabilizing soil and prevent erosion, particularly in areas prone to erosion along water bodies and shorelines.",
        FunFact: "The Umbrella Palm is not actually a palm tree despite its name. It belongs to the Sedge family (Cyperaceae) and is commonly referred to as a palm due to its palm-like appearance with umbrella like arrangement.",
        Image: "images/Umbrellapalm.jpg",
    },
    plant5: {
        EnglishName: "Topped Lavender",
        NepaliName: "",
        ScientificName: "Lavandula stoechas",
        FamilyName: "Lamiaceae",
        PhysicalFeatures: "(Herb)Topped Lavender is a perennial herb that typically grows to a height of 12 to 24 inches. The leaves of Topped Lavender are narrow, elongated and ranging in color from grayish-green to green. The flowers of Tapped Lavender are arranged in dense clusters at the top of long stalks, forming a showy and colorful bloom. Similarly, Topped Lavender emits a pleasant and aromatic scent, which is often described as sweet, floral and herbaceous.",
        Importance: "Topped Lavender is highly valued as an ornamental plant due to its attractive appearance and vibrant flowers. It adds beauty, texture and a delightful fragrance to outdoor and indoor spaces.<br><br>In traditional herbal medicine, topped lavender has been used for various purposes. It is believed to have antiseptic, anti-inflammatory and antispasmodic properties.<br><br>The flowers of topped lavender, along with the tops are used as culinary herbs. They are infused in cooking oils, incorporated into desserts, added to beverages or used as a garnish.",
        FunFact: "Topped lavender (Lavandula stoechas) is sometimes referred to as 'Spanish lavender' due to its origin in the Mediterranean region, particularly Spain and Portugal. However, it is interesting to note that topped lavender is not exclusive to Spain, and it can also be found growing in various other countries with suitable climates around the world. So, despite the name, topped lavender has a global presence beyond Spain.",
        Image: "images/Topped lavender.jpg",
    },
    plant6: {
        EnglishName: "Mugwort",
        NepaliName: "Titepati",
        ScientificName: "Artemisia vulgaris",
        FamilyName: "Asteraceae",
        PhysicalFeatures: "(Herb) Mugwort is a perennial herbaceous plant that typically grows to a height of 60 to 150 centimeters. It has an erect and bushy growth habit. Similarly, the leaves of Mugwort are alternate, deeply lobed, and fern-like in appearance and are dark green on the upper surface and lighter underneath. Likewise, Mugwort has a sturdy and rigid stem that is grooved and often reddish or purplish in color. It also has a creeping rhizomatous root system, which allows it to spread and form dense colonies over time.",
        Importance: "Mugwort leaves have been used in certain culinary traditions, particularly in East Asian cuisines. They can be added to dishes as flavoring agents or used for wrapping foods before cooking.<br><br>The strong aroma of mugwort has been found to repel certain insects, including mosquitoes and moths. Some people use dried mugwort leaves as natural insect repellents or incorporate them into homemade repellent formulations.<br><br>It is believed to have various health benefits, such as promoting digestion, relieving menstrual discomfort, and aiding in relaxation.",
        FunFact: "Mugwort is known for its connection to dreams and vivid experiences. In some cultures, Mugwort is believed to enhance dreaming and increase the intensity of dreams. It has been used historically as a dream herb, with people placing Mugwort under their pillows or using it in herbal pillows to promote more vivid and lucid dreams. Mugwort's association with dreams has made it a subject of interest in folklore, literature, and mystical practices throughout history.",
        Image: "images/Titepati.jpg",
    },
    plant7: {
        EnglishName: "Thimble Cactus",
        NepaliName: "Madhyakalin Cactus",
        ScientificName: "Mammillaria gracilis",
        FamilyName: "Cactaceae",
        PhysicalFeatures: "(Herb) Thimble cacti are small to medium-sized cacti, typically growing up to 10-15 centimeters in height and 6-8 centimeters in diameter. The surface of the thimble cactus is covered in closely spaced tubercles. These tubercles are cone-shaped or cylindrical and arranged in a spiral pattern around the stem. Similarly, Thimble cacti have a dense covering of spines on their tubercles. The spines are usually straight, needle-like, and vary in color from white to yellow or brown. Likewise, Thimble cacti produce small, bell-shaped flowers that emerge from the space between the tubercles.",
        Importance: "Thimble cactus is highly valued for its ornamental appeal. Its compact size, attractive tubercles, and spines make it a popular choice for cactus collectors and enthusiasts.<br><br>It is often used in educational settings for learning about cacti and desert ecosystems.<br><br>Thimble cacti, like other cacti, play a role in their native ecosystems. They provide habitat and food sources for various small animals, insects, and birds.",
        FunFact: "Thimble cactus is known for its ability to produce beautiful flowers that open for a very short duration. The flowers typically bloom for only a day or two, usually in the morning, and then close by the evening.",
        Image: "images/Thimble Cactus.jpg",
    },
    plant8: {
        EnglishName: "Bay Leaf",
        NepaliName: "Tejpatta",
        ScientificName: "Cinnamomum tamala",
        FamilyName: "Lauraceae",
        PhysicalFeatures: "(Tree) Bay leaf comes from a medium-sized evergreen tree. It can grow up to 15 to 20 meters in height, with a trunk diameter of about 40 to 60 centimeters. Bay leaf has a strong and aromatic fragrance. When crushed or dried, the leaves emit a pleasant, spicy aroma. Similarly, the upper surface of the leaves of Bay Leaf is glossy and dark green, while the underside is lighter in color. The leaves are typically 5 to 12 centimeters long and 2 to 4 centimeters wide.",
        Importance: "Bay leaf is a widely used spice in Indian cuisine, especially in dishes from the southern regions. It is known for its strong, aromatic flavor that adds depth and richness to curries, stews and other savory dishes.<br><br>Bay leaf has been used in traditional medicine systems for its potential health benefits. It is believed to have antibacterial, anti-inflammatory, and digestive properties.<br><br>The strong and pleasant fragrance of Bay leaf makes it useful in aromatherapy and perfumery.<br><br>In some cultures, Bay leaf holds cultural and ritual significance. It is used in religious ceremonies, festivals, and as an offering to deities..",
        FunFact: "In ancient Greece and Rome, bay leaves were used as a symbol of honor and success. They were worn by emperors, scholars, heroes, poets, and Olympians.",
        Image: "images/Tejpatta.jpg",
    },
    plant9: {
        EnglishName: "Tea Rose",
        NepaliName: "Chiya Gulab",
        ScientificName: "Rosa × odorata",
        FamilyName: "Rosaceae",
        PhysicalFeatures: "(Shrub) Tea roses are known for their large, showy flowers that come in various colors, including shades of pink, red, white, and yellow. The flowers are typically double or semi-double, with multiple layers of petals. The tea rose is a woody shrub with thorny stems. Similarly, the stems are covered in small, sharp thorns or prickles. Likewise, the leaves of the tea rose are typically dark green and glossy and are composed of multiple leaflets arranged along a central stem.",
        Importance: "Tea roses are widely cultivated and appreciated for their ornamental beauty. Their large, fragrant flowers and variety of colors make them popular choices for gardens and floral arrangements.<br><br> It is known for its delightful fragrance. The essential oils extracted from it are used in the production of perfumes, soaps, and other cosmetics.<br><br> Roses, including tea roses, have long held symbolic meanings in various cultures. They are often associated with love, beauty, romance and are also are commonly used in weddings, anniversaries, and other special occasions as symbols of affection and celebration.",
        FunFact: "The first man on Earth was Adam according to Christianity and the first Tea Rose was named after him. Tea rose or Adam was given a unique and separate botanical name. It was Tea Scented China Rose with the scent of a newly opened choicest tea from China. As time passed by, the name was shortened into Tea Rose.",
        Image: "images/Tea rose.jpg"
    },
    plant10: {
        EnglishName: "Swiss Cheese Plant",
        NepaliName: "Monstera Plant",
        ScientificName: "Monstera deliciosa",
        FamilyName: "Araceae",
        PhysicalFeatures: "(Evergreen tropical vines and shrubs) The leaves of the Swiss cheese plant are large, glossy, and heart-shaped when young. As they mature, they develop distinct splits and holes, giving them a unique and characteristic appearance resembling Swiss cheese. Similarly, the stems of the Swiss cheese plant are thick, green, and aerial. Likewise, the Swiss cheese plant produces long, aerial roots that grow from the stems. In its natural habitat, the Swiss cheese plant can grow quite large, with leaves reaching up to 60 cm in length.",
        Importance: "The Swiss cheese plant is widely cultivated as an ornamental plant due to its unique physical appearance. The large leaves with splits and holes make it a popular choice for indoor gardens, offices, and tropical-themed landscapes.<br><br> Like many other houseplants, the Swiss cheese plant contributes to improving indoor air quality by filtering and purifying the air.",
        FunFact: "The natural splits and holes in the leaves of the Swiss cheese plant serve a purpose beyond aesthetics. In their native rainforest habitat, these fenestrations allow sunlight to pass through the dense canopy, enabling the plant to thrive on the forest floor. The holes in the leaves help to reduce wind resistance, allowing the leaves to withstand strong winds without getting damaged.",
        Image: "images/swiss.jpg"
    },
    plant11: {
        EnglishName: "Snake Plant",
        NepaliName: "Sarpindra",
        ScientificName: "Sansevieria trifasciata",
        FamilyName: "Sansevieria trifasciata",
        PhysicalFeatures: "(Perennial Herb) Snake plants can vary in size, ranging from small, compact varieties to larger specimens. On average, the leaves can grow between 60 to 120 centimeters in height. The leaves of a snake plant are long, upright and are generally dark green with light green or gray-green horizontal striping. Similarly, Snake plants have rhizomes (underground stems), from which roots and new shoots emerge. While snake plants can produce flowers, it is not common for them to bloom when grown indoors. The flowers are typically small and appear on long stalks rising from the center of the plant.",
        Importance: "Snake plants are known for their ability to improve indoor air quality. They absorb these harmful substances and release oxygen, making them excellent natural air purifiers.<br><br> It is also cultivated for its ornamental properties. It has attractive leaves with various patterns and colors, making it visually appealing as houseplants.<br><br> Snake plants also have additional health benefits, such as improving sleep quality by releasing oxygen at night and reducing headaches, eye irritation, and respiratory symptoms associated with indoor air pollution.",
        FunFact: "Snake plants are not only known for their air-purifying properties but also for their ability to release oxygen at night. Most plants release oxygen during the day through photosynthesis, but snake plants perform a type of photosynthesis called crassulacean acid metabolism. This adaptation allows them to store carbon dioxide during the day and release oxygen at night, making them ideal bedroom companions as they continue to emit oxygen even when you sleep. This unique behavior earned them the nickname 'bedroom plant' or 'oxygen plant.'",
        Image: "images/snake.jpg"
    },
    plant12: {
        EnglishName: "Chir Pine",
        NepaliName: "Khote Salla",
        ScientificName: "Pinus roxburghii",
        FamilyName: "Pinaceae",
        PhysicalFeatures: "(Tree) Salla trees are large and can reach heights of up to 35-40 meters or even taller. Its trunk is straight and cylindrical and can have a diameter of up to 2-3 meters or more. Similarly, the leaves are simple, alternate, and spirally arranged. They are large, leathery, with a shiny dark green upper surface and a lighter green lower surface. Likewise, the wood of the pine tree is highly valued for its strength and durability. It is reddish-brown in color and has excellent timber qualities.",
        Importance: "Salla wood is commonly used in construction, furniture making, flooring, etc. The timber is known for its excellent quality and is an important economic resource.<br><br>Some parts of the pine tree including the bark, leaves, and resin, have been used in traditional medicines. They are believed to have anti-inflammatory, antimicrobial, and antiseptic properties.<br><br>The widely spread root system of these trees help in preventing soil erosion and stabilizing slopes mainly in Hilly and forested regions.",
        FunFact: "Sal trees are known for their ability to produce a natural resin which can be tapped to produce turpentine, which has a distinct, pleasant smell and is widely used in paints, varnishes, and even traditional medicine!",
        Image: "images/Pine.jpg"
    },
    plant13: {
        EnglishName: "Stinging Nettle",
        NepaliName: "Sisnu",
        ScientificName: "Urtica dioica",
        FamilyName: "Urticaceae",
        PhysicalFeatures: "(Herb) The leaves of Stinging Nettle heart-shaped and are covered with tiny, hollow stinging hairs that can cause a stinging sensation upon contact. They have a dark green color and a rough texture. Likewise, the stems of Stinging Nettle are erect and are covered with stinging hairs similar to the leaves. The stems can grow up to several feet in height. Stinging Nettle has a fibrous root system structure that spreads horizontally underground. The roots are yellowish in color.",
        Importance: "1.	Stinging Nettle is used in traditional medicine. It is believed to have anti-inflammatory, antioxidant, and anti-allergic properties.<br><br>2.	Stinging Nettle is highly nutritious and is a good source of vitamin A, C and K and some minerals such as iron, calcium, and magnesium.<br><br>3.	Stinging Nettle leaves are known for their unique flavor and are valued for their culinary versatility.",
        FunFact: "When the leaves are cooked or dried, the stinging hairs lose their sting, making the plant safe to handle and consume. Stinging Nettle is known for its rich nutritional profile, including high levels of vitamins, minerals, and antioxidants, making it a nutritious and interesting addition to certain culinary preparations.",
        Image: "images/Sisnu.jpg"
    },
    plant14: {
        EnglishName: "Himalayan Cypress",
        NepaliName: "Dhupi",
        ScientificName: "Cupressus torulosa",
        FamilyName: "Cupressaceae",
        PhysicalFeatures: "(Tree) Himalayan cypress has a conical or pyramidal shape, with a broad base which is mostly trimmed to unique shapes for ornamental purposes. The bark of Himalayan cypress tree is thick, fibrous, and reddish-brown or grayish-brown in color. These trees are typically tall, with different plants having different height. They usually grow up to 35 metres tall. It is known for being lightweight, soft, and fragrant. Similarly, this Cypress tree produces small, oval-shaped cones. These cones contain the tree's seeds and can vary in size.",
        Importance: "1.	Himalayan Cypress is highly valued for its durability, strength, and natural resistance to decay and rot. It is used in various applications, such as construction, woodworking, furniture, cabinetry, flooring, and fences.<br><br>2. These trees can be trimmed into various unique shapes. Thus, they help in indoor and outdoor architecture as well.<br><br>3. The Himalayan Cypress trees have historical and cultural significance in many regions. They have been used in traditional medicine, herbal remedies, and cultural ceremonies.",
        FunFact: "The bark of the Himalayan Cypress has a unique and interesting characteristic. When the outer layer of the bark is peeled off or damaged, the inner layer reveals a vibrant reddish-brown color. This distinct coloration adds to the visual appeal of the tree and makes the Himalayan Cypress stand out among other trees in the forest.",
        Image: "images/Dhupi.png"
    },
    plant15: {
        EnglishName: "Sago Palm",
        NepaliName: "",
        ScientificName: "Cycas revoluta",
        FamilyName: "Cycadaceae",
        PhysicalFeatures: "(Tree) The Sago Palm has a cylindrical trunk that can grow up to 3 meters tall. The trunk is covered with old leaf bases, giving it a rough texture. Similarly, the leaves of the Sago Palm are large and feather-like. The leaves can reach lengths of 60 to 120 centimeters. Likewise, the Sago Palm has a fibrous root system that helps anchor the plant and absorb water and nutrients from the soil.",
        Importance: "1.	Sago Palms are widely valued as ornamental plants due to their attractive appearance.  It is often used in gardens, landscapes, and indoor spaces.<br><br>2. The Sago Palm is well adapted to dry and arid conditions. It is highly drought-tolerant and can survive in regions with limited water availability.<br><br>3. The starch-rich pith of the Sago Palm's trunk, known as 'sago', can be processed and used as a food ingredient.",
        FunFact: "Despite its name, the Sago Palm is not actually a true palm. It is a cycad, a primitive plant that has existed for millions of years. Cycads are often referred to as 'living fossils' because they have remained relatively unchanged for millions of years and are considered one of the oldest living plant lineages on Earth.",
        Image: "images/Sago palm.jpg"
    },
    plant16: {
        EnglishName: "Red Vein Abutilon",
        NepaliName: "",
        ScientificName: "Abutilon pictum",
        FamilyName: "Malvaceae",
        PhysicalFeatures: "(Shrub) Red Vein Abutilon can reach height of 1.5 to 3 meters when fully mature. The leaves of Red Vein Abutilon are generally heart-shaped with medium to dark green color and have prominent red veins that give the plant its common name. The flowers of Red Vein Abutilon are bell-shaped and have a base color ranging from pale yellow to light orange or peach, and striking red veins running through the petals. ",
        Importance: "1.	Red Vein Abutilon is highly valued for its ornamental beauty. Its attractive flowers with red veins create a striking visual display, making it a desirable choice for gardens, landscapes, and ornamental plantings.<br><br>2. In some traditional medicinal practices, various parts of the Red Vein Abutilon plant are used for their potential medicinal properties. They are believed to have anti-inflammatory, antioxidant, and other beneficial effects.<br><br>3. Red Vein Abutilon, like other plants, may hold cultural and symbolic significance in different regions. It can be associated with traditional beliefs, rituals, and ceremonies. In some cultures, the flowers may symbolize beauty, love, or other virtues.",
        FunFact: "The flowers of the Red Vein Abutilon are not only visually striking but also have an interesting characteristic. They are known to change color as they age. When the flowers first open, they typically have a lighter base color with distinct red veins. However, as the flowers mature, the base color intensifies, deepening into shades of orange or peach.",
        Image: "images/redvein.jpg"
    },
    plant17: {
        EnglishName: "Purple Heart",
        NepaliName: "",
        ScientificName: "Tradescantia pallida",
        FamilyName: "Commelinaceae (Spiderworts)",
        PhysicalFeatures: "(Herb) The stems of the Purple Heart plant are trailing, making it suitable for hanging baskets. Purple Heart plants produce small, three-petaled flowers which are usually pale pinkish-purple in color. The height of this plant can vary from 30 to 45 centimetres depending on growing conditions and care. The Purple Heart plant has a fibrous root system. The roots of the Purple Heart plant are efficient at absorbing moisture and nutrients from the soil.",
        Importance: "1.	The Purple Heart plant is highly valued for its striking purple foliage. It is commonly used as an ornamental plant in landscaping, gardens, and indoor spaces.<br><br>2. Like other plants, the Purple Heart plant contributes to a healthier environment. It absorbs carbon dioxide and releases oxygen, helping to improve air quality.<br><br>3. Due to its trailing stems and ability to spread, the Purple Heart plant can be used for erosion control on slopes or areas prone to soil erosion.",
        FunFact: "The Purple Heart plant is not only known for its vibrant purple foliage but also for its ability to regenerate and propagate easily. Even if you accidentally break off a piece of a Purple Heart plant, it has a high chance of rooting and growing into a new plant. The stem cuttings can be placed in water or directly in well-draining soil, and they will often develop roots and continue to grow.",
        Image: "images/purpleheart.jpg"
    },
    plant18: {
        EnglishName: "Pumpkin",
        NepaliName: "Pharsi",
        ScientificName: "Cucurbita pepo",
        FamilyName: "Cucurbits",
        PhysicalFeatures: "(Creeper) Pumpkin plants have vines that grow along the ground or climb on nearby structures or vegetation. The vines can extend several meters in length. The pumpkin plant has large, broad leaves that are typically green in color and have a rough texture and can reach sizes of up to 30 centimetres in diameter. The most recognizable feature of the pumpkin plant is, of course, the pumpkin itself. Pumpkins come in various shapes, sizes, and colors.",
        Importance: "1.	Pumpkins are widely consumed as a food source. It is used in various culinary applications, including soups, stews, desserts, etc.<br><br>2. Pumpkins are a good source of vitamins A and C, which are beneficial for eye health, immune function, and overall well-being. <br><br>3. Pumpkin seeds are pressed to extract oil, which is used in cooking, cosmetics, and traditional medicine. Pumpkin seed oil has a rich flavor and is often used as a salad dressing.",
        FunFact: "The largest pumpkin ever recorded weighed over 1,179 kilograms. This pumpkin was grown by Mathias Willemijns of Belgium in 2016 and set a new world record. To put it into perspective, that's equivalent to the weight of around 10 small cars or 70 adult humans!",
        Image: "images/Pumpkin.jpg"
    },
    plant19: {
        EnglishName: "Primrose Jasmine",
        NepaliName: "",
        ScientificName: "Jasminum mesnyi",
        FamilyName: "Oleaceae",
        PhysicalFeatures: "(Shrub) Primrose Jasmine reaches a height of around 1 to 2 meters and has a similar spread. The bark of the Primrose Jasmine is relatively smooth and light brown in color. On older stems, the bark may develop a slightly rough texture. The Primrose Jasmine produces bright yellow, trumpet-shaped flowers that are about 2 to 3 centimeters in diameter. One of the notable features of the Primrose Jasmine is its pleasant fragrance. The flowers emit a sweet, delicate scent that adds to the overall appeal of the plant.",
        Importance: "1.	The Primrose Jasmine is primarily valued for its attractive yellow flowers and pleasant fragrance. It is commonly used as an ornamental plant in gardens, parks, and landscapes to add beauty and visual appeal.<br><br>2. Some people cultivate the plant specifically for its fragrance, and the flowers are used to create perfumes, essential oils, and scented products.<br><br>3. The Primrose Jasmine holds cultural significance in some regions where it is grown. It may be associated with traditional beliefs, rituals, or customs and used in religious ceremonies or festivals.",
        FunFact: "The Primrose Jasmine is sometimes referred to as 'The Sunshine of the Winter' due to its ability to bloom during the colder months. While many other plants go dormant or produce fewer flowers in winter, the Primrose Jasmine defies the season by showcasing its bright yellow blossoms.",
        Image: "images/Primrose Jasmine.jpg"
    },
    plant20: {
        EnglishName: "Pot-marigold",
        NepaliName: "Asarfi phool",
        ScientificName: "Calendula officinalis",
        FamilyName: "Asteraceae",
        PhysicalFeatures: "(Herb) Pot marigold plants can vary in height, but they typically reach a height of about 30 to 60 cm. The flowers of this plant are large with vibrant colors ranging from yellow to orange. They have a daisy-like appearance, with layers of overlapping petals forming a central circle. The stems branching out from the base are typically green. They are usually slightly rough to the touch. The leaves are arranged alternately along the stems and have a slightly hairy texture. Likewise, Pot marigold flowers have a distinct aromatic scent.",
        Importance: "1.	The petals of pot marigold are edible and can be used as a colorful decoration in salads, soups, and other dishes. They have a slightly peppery flavor and are also used in soups, meat and rice dishes as well.<br><br>2. The yellow and orange petals of pot marigold can be used to produce natural dyes. They can be boiled to extract color and used to dye fabrics, yarns, and other materials.<br><br>3. Pot marigold flowers are commonly used in floral arrangements and decorations due to their bright and cheerful colors. They are often included in bouquets, garlands, and wreaths for festive occasions and celebrations.",
        FunFact: "Pot marigold flowers have a unique quality known as 'circadian rhythm.'' This means that the flowers open and close their petals in response to the time of day. In the morning, when the sunlight intensity is low, the flowers open up, displaying their vibrant petals to attract pollinators. As the day progresses and the sunlight becomes more intense, the flowers close up to protect themselves from excessive heat and potential damage.",
        Image: "images/Pot marigold.jpg"
    },
    plant21: {
        EnglishName: "Poinsettia",
        NepaliName: "Lalupate",
        ScientificName: "Euphorbia pulcherrima",
        FamilyName: "Spurges",
        PhysicalFeatures: "(Shrub) The most recognizable feature of the poinsettia are its bracts, which are often mistaken for petals. The bracts are large, colorful that come in various shades, including red, pink, white and yellow. The size of Poinsettia is typically around 60 to 120 centimeters in height, but they can grow taller in their natural habitat. Similarly, the flowers of Poinsettia are small and yellow in color and are located at the centre of the bracts.",
        Importance: "1.	Poinsettias are widely cultivated as ornamental plants, particularly during the holiday season. Their vibrant bracts in shades of red, pink, white, and other colors make them popular for festive decorations.<br><br>2.	Poinsettias have a long history of use in traditional medicine. Some cultures have utilized different parts of the plant for medicinal purposes, such as treating fevers, skin disorders, and dental issues. However, it's important to note that poinsettias contain a milky sap that can be mildly toxic and cause skin irritation or digestive discomfort if ingested.<br><br>3.	Poinsettias have become closely associated with celebrations in many cultures. In some traditions, they are used to decorate homes, religious sites, and public spaces.",
        FunFact: "Poinsettias are photoperiodic plants, meaning their flowering is triggered by the length of daylight. In order to produce their colorful bracts, poinsettias require a specific period of darkness each day. To initiate blooming, poinsettias need at least 12 to 14 hours of uninterrupted darkness for several weeks. The specific light requirements highly impact their flowering schedule!",
        Image: "images/Poinsettia.jpg"
    },
    plant22: {
        EnglishName: "Polka Dot Plant",
        NepaliName: "",
        ScientificName: "Hypoestes phyllostachya",
        FamilyName: "Acanthaceae",
        PhysicalFeatures: "(Herb) Polka Dot Plants are relatively small in size, making them suitable for indoor cultivation. They usually reach a height of around 5 to 30 cm, although they can grow slightly taller under optimal conditions. Similarly, the leaves of the Polka Dot Plant, which are the most striking feature of this plant, are generally oval in shape and have a soft, hairy texture. The leaves are typically green, but what makes this plant unique are the colorful spots or dots that cover the leaf surface.",
        Importance: "1.	Polka Dot Plants are commonly grown as houseplants due to their attractive and colorful foliage. Their polka dot-patterned leaves bring a lively and eye-catching element to indoor spaces, making them popular choices for adding visual interest and beauty.<br><br>2.	Polka Dot Plants contribute to indoor air purification by filtering out toxins and improving air quality.<br><br>3.	The leaves of the Polka Dot Plant can be used for natural dyeing projects. The vibrant colors and patterns on the leaves can transfer onto fabrics, creating unique and visually appealing patterns.",
        FunFact: "The Polka Dot Plant is sometimes referred to as the 'freckle face' plant due to its unique leaf patterns. Just like freckles on human skin, the Polka Dot Plant's leaves are adorned with small spots or dots of various colors, including pink, red, white, and even purple. These spots give the plant a playful and whimsical appearance, earning it the endearing nickname of 'freckle face' among plant enthusiasts.",
        Image: "images/Polka dot plant.jpg"
    },
    plant23: {
        EnglishName: "Pepinomelom",
        NepaliName: "",
        ScientificName: "Solanum muricatum",
        FamilyName: "Solanaceae/Nightshade",
        PhysicalFeatures: "(Shrub) The size of the pepino melon plant can vary, but it typically reaches a height of about 60 to 120 centimeters. Similarly, the flowers of the pepino melon are small and bell-shaped. They are typically white or pale purple and can be found in clusters along the stems. The fruit of the pepino melon is the most notable feature. It is oval-shaped, with a smooth and waxy skin that can range in color from yellow to pale green or even purple. The fruit is typically about 5 to 10 centimeters in length.",
        Importance: "1.	The pepino melon is mainly grown for its fruit, which is enjoyed fresh or used in various culinary applications. When ripe, the sweet and juicy flesh of the pepino melon can be eaten raw, similar to other melons.<br><br>2.	In traditional medicine, certain parts of the pepino melon plant have been used for their potential medicinal properties. For example, the leaves have been used topically as a poultice for skin conditions.<br><br>3.	Pepino melons are a good source of vitamins A and C, as well as dietary fiber. They also contain minerals like potassium and calcium.",
        FunFact: "The pepino melon is sometimes referred to as the 'melon pear' due to its unique combination of flavors. When fully ripe, the pepino melon has a taste that is often described as a cross between a melon and a pear. This interesting blend of flavors gives the pepino melon a distinctive and delightful taste that sets it apart from other melon varieties.",
        Image: "images/Pepinomelon.jpg"
    },



    plant24: {
        EnglishName: "Paper flower",
        NepaliName: "",
        ScientificName: "Bougainvillea",
        FamilyName: "Nyctaginaceae/ Four O'Clock family",
        PhysicalFeatures: "(Shrub) One of the most prominent features of Bougainvillea is its colorful bracts. These are modified leaves that surround the small, inconspicuous flowers. The bracts are responsible for the plant's vibrant and striking appearance. The true flowers of Bougainvillea are small and white, often located in the center of the colorful bracts. Similarly, the leaves of this plant are generally small to medium-sized, simple, and oval in shape. The leaves are typically green, but their color can vary slightly depending on the variety and growing conditions.",
        Importance: "1. One of the primary uses of Bougainvillea is as an ornamental plant. Its vibrant and showy bracts make it a popular choice for gardens, landscapes, and outdoor decor.<br><br>2.	2.	When grown as a climbing plant, Bougainvillea can serve as an effective privacy screen by covering walls or fences with its dense foliage and colorful bracts.<br><br>3.3.	In some regions, the bracts of Bougainvillea have been used to produce natural dyes for textiles and crafts.",
        FunFact: "The colorful 'flowers' that we associate with Bougainvillea are not actually its true flowers. The vibrant, petal-like structures that we see are called bracts, and they surround the small, inconspicuous true flowers. These bracts are modified leaves that serve to attract pollinators to the true flowers, which are nestled within. The vivid bracts are what give Bougainvillea its stunning and showy appearance, and they come in various colors, making the plant a favorite for adding splashes of color to gardens and landscapes.",
        Image: "images/bouginvillea.JPG"
    },
    plant25: {
        EnglishName: "Bottlebrush",
        NepaliName: "",
        ScientificName: "Callistemon",
        FamilyName: "Myrtaceae",
        PhysicalFeatures: "(Tree)The most distinctive feature of bottlebrush plants is their cylindrical flower spikes that resemble a bottle brush. These spikes are composed of numerous small individual flowers tightly packed together. The individual flowers on the spikes are small and tubular in shape. Bottlebrush plants typically have evergreen leaves that are narrow, lance-shaped, and arranged alternately along the stems. The leaves are usually dark green and glossy, contributing to the plant's attractive foliage. Bottlebrush trees can range in size from a few feet to several meters in height.",
        Importance: "1.	One of the primary uses of bottlebrush plants is as ornamental additions to gardens and landscapes. Their unique cylindrical flower spikes and attractive foliage make them popular choices for adding color and visual interest to outdoor spaces.<br><br> 2. 2.	The nectar-rich flowers of bottlebrush plants attract various pollinators, including bees, butterflies, and nectar-feeding birds. This makes them valuable contributors to local ecosystems and biodiversity.",
        FunFact: "The name 'bottlebrush' is derived from the plant's unique flower spikes, which resemble the shape of a traditional bottle-cleaning brush. The cylindrical flower spikes with numerous small flowers clustered around the stem create a brush-like appearance, leading to the common name 'bottlebrush'. This distinctive feature not only adds to the plant's visual appeal but also gives it a memorable and fitting name that reflects its appearance in nature.",
        Image: "images/bottlebrush.png"
    },
    plant26: {
        EnglishName: "Aloe vera",
        NepaliName: "Ghew Kumari",
        ScientificName: "Aloe barbadensis miller",
        FamilyName: "Asphodelaceae",
        PhysicalFeatures: "(Shrub)Aloe vera typically grows in a rosette form, with thick, fleshy leaves clustered around a central point. The leaves emerge from a basal stem or base. The leaves are succulent, meaning they are thick and fleshy, designed to store water. Similarly, Aloe vera has a shallow root system designed to quickly absorb water after rain or irrigation. This system helps the plant take advantage of infrequent water availability.",
        Importance: "1.	Aloe vera gel is renowned for its soothing and moisturizing properties. It's used to treat various skin issues, such as sunburn, minor burns, rashes, cuts, and insect bites. It can also help alleviate dry skin.<br><br>2. 2.	The gel of Aloe vera contains compounds that are believed to accelerate wound healing. It can be used to aid in the healing process of minor wounds, cuts, and abrasions.<br><br>3. 3.	Aloe vera gel is used in hair care products to promote hair health, reduce dandruff, soothe an itchy scalp, and add shine to hair.<br><br> 4. 4.	Aloe vera juice, extracted from the inner leaf, is consumed for potential digestive benefits. It's believed to support digestion, alleviate constipation, and promote gut health.",
        FunFact: "NASA has included Aloe vera in its list of air-purifying plants. Aloe vera is not only known for its skincare and healing properties but also for its ability to help improve indoor air quality. It's effective at removing pollutants like formaldehyde and benzene from the air, making it a natural air purifier. So, having an Aloe vera plant in your home not only offers potential skincare benefits but can also contribute to a healthier indoor environment!",
        Image: "images/aloevera.jpg"
    },
    plant27: {
        EnglishName: "Century plant",
        NepaliName: "",
        ScientificName: "Agave americana",
        FamilyName: "Asparagaceae",
        PhysicalFeatures: "(Herb)The leaves are the most prominent feature of the plant. They are large, broad, and lance-shaped, with sharp points at the tips. The leaves of Agave americana are often bluish-green or grayish-green and, the leaf margins are serrated with teeth or small spines along the edges. The leaf margins in some species are of light-yellow color. ",
        Importance: "1.	Agave americana is widely cultivated as an ornamental plant in gardens and landscapes due to its striking and architectural appearance. Its large rosette of spiky leaves adds unique visual interest to outdoor spaces.<br><br>2. 2.	The fibers extracted from the leaves of Agave americana are used to make ropes, mats, baskets, and various woven items. The strong and durable fibers made it a valuable resource for practical purposes.",
        FunFact: "Despite its common name 'Century Plant,' Agave americana does not actually take a century to flower. While it's a slow-growing plant, it typically takes between 10 to 30 years for it to bloom, depending on growing conditions. When it does flower, it sends up an impressive tall stalk that can reach up to 20 feet (6 meters) or more, showcasing a spectacular display of yellow flowers. After this grand display, the main plant dies, having completed its life cycle. However, by this time, it usually has produced several 'pups' or offsets, which will continue to grow and eventually flower in the future.",
        Image: "images/centuryplant.jpg"
    },
    plant28: {
        EnglishName: "African marigold",
        NepaliName: "",
        ScientificName: "Tagetes erecta",
        FamilyName: "Asteraceae",
        PhysicalFeatures: "(Herb)African marigolds are relatively tall annual plants, often growing to heights of 30 to 90 centimeters or even taller, depending on the variety and growing conditions. Similarly, the leaves of African marigolds are dark green, pinnate (feather-like), and arranged alternately along the stems. They can vary in size and shape, with serrated edges. African marigolds have large, showy flower heads and the flowers come in a range of vibrant colors, including shades of yellow, orange, and sometimes red.",
        Importance: "1.1.	African marigolds are widely cultivated as ornamental plants in gardens, landscapes, and containers due to their vibrant and large flower heads. They add a splash of color and beauty to outdoor spaces.<br><br>2. 2.	The bright and colorful blooms of African marigolds are often used in floral arrangements for various occasions, including weddings, festivals, and events.<br><br>3. 3.	The marigold is one of the most well-known insect-repelling plants and with good reason — they have a scent that will keep pests like mosquitoes, nematodes like cabbage worms, and other pests away.<br><br>4. 4.	The petals of some marigold varieties can be used to extract natural dyes for textiles and crafts.",
        FunFact: "The vibrant flowers of African marigolds aren't just visually appealing—they also have a culinary use! While not as commonly used as other edible flowers, the petals of African marigolds are considered safe to eat and can be used to add a touch of color and flavor to various dishes. The petals have a slightly citrusy and tangy flavor, making them a unique and decorative addition to salads, desserts, and even beverages. Just remember to use them sparingly and ensure that the flowers you use are grown without pesticides or chemicals.",
        Image: "images/african marigold.jpg"
    },
    plant29: {
        EnglishName: "Tailed Maidenhair",
        NepaliName: "",
        ScientificName: "Adiantum caudatum",
        FamilyName: "Pteridaceae",
        PhysicalFeatures: "(Shrub)The leaves of Adiantum caudatum are finely divided and feathery in appearance. They are composed of numerous small leaflets that give the plant a delicate look. The black or dark-colored stems of this fern are slender and rough, growing upright. Similarly, these plants are typically a small to medium-sized fern, reaching a height of about 30 to 60 cm. ",
        Importance: "1. Adiantum caudatum is primarily grown for its ornamental value. It is often used in gardens, landscapes, and indoor settings to add a touch of beauty and charm.<br><br>2.	It is often used in gardens, landscapes, and indoor settings to add a touch of beauty and charm.<br><br>3.	Tailed Maidenhair Ferns like other house plants, can contribute to indoor air purification by removing certain toxins and increasing humidity.",
        FunFact: "A fun fact about the Tailed Maidenhair Fern, is that it is often referred to as the 'Walking Maidenhair Fern.' The plant reproduces by dropping spores from the undersides of its fronds. When the spores are released and land on suitable growing conditions, new ferns can sprout. As a result, over time, this fern can seemingly 'walk' and spread to new locations as the spores establish themselves and grow into new plants.",
        Image: "images/tailed maidenhair.jpg"
    },
    plant30: {
        EnglishName: "Field Sowthistle",
        NepaliName: "",
        ScientificName: "Sonchus arvensis",
        FamilyName: "Daisy family",
        PhysicalFeatures: "(Herb)Field Sowthistle produces bright yellow, daisy-like flowers. The flower heads are typically 2.5 to 5 cm in diameter. The stem of Sonchus arvensis is erect, usually hairless, and can grow to varying heights, ranging from a few inches to several feet, depending on environmental conditions. The leaves of Field Sowthistle are typically lobed, lance-shaped and are generally green and sometimes covered with fine hairs.",
        Importance: "1.1.	Some people have consumed young leaves and stems of Sonchus arvensis as a leafy green vegetable, particularly in times of food scarcity. When properly prepared, these parts can be edible and a source of nutrition.<br><br>2. 2.	As a deep-rooted plant, Field Sowthistle can help improve soil structure and nutrient cycling in some cases.",
        FunFact: "A fun fact about Sonchus arvensis is that it's sometimes referred to as 'Hare's Colwort' because of the belief that hares and rabbits are particularly fond of this plant and often consume it as part of their diet.",
        Image: "images/Fieild Sowthistle.jpg"
    },
    plant31: {
        EnglishName: "Tropical Soda Apple",
        NepaliName: "Kaande Bhantaa",
        ScientificName: "Solanum viarum",
        FamilyName: "Solanaceae/Nightshade",
        PhysicalFeatures: "(Shrub)It is a woody shrub or small tree that can grow up to several meters in height. It typically has a multi-branched, bushy growth form. The leaves are alternately arranged along the stems and are typically large (10 to 20 cm). Similarly, the flowers of Solanum viarum are white to pale yellow in color and have five lobes. Likewise, the fruit is a round to slightly oval berry, initially green and turning yellow when ripe and contains numerous seeds.",
        Importance: "Solanium viarum is not edible and is considered toxic to humans and livestock. There are generally no benefits of this plant.",
        FunFact: "Efforts to control Tropical Soda Apple have led to innovative uses for the plant. In some regions, such as Florida, researchers have explored the use of biological control agents, such as specific insects that feed on the weed. These insects have been introduced to help manage and reduce the population of Tropical Soda Apple.",
        Image: "images/Tropical Soda Apple.jpg"
    },
    plant32: {
        EnglishName: "Tree tomato",
        NepaliName: "Rukh Tamatar",
        ScientificName: "Solanum betaceum",
        FamilyName: "Solanaceae/Nightshade",
        PhysicalFeatures: "(Tree)The plant grows as a small tree, reaching heights of 3 to 4.5 meters. It has a central trunk with branches and a canopy of leaves. Tree tomato fruits are typically oval or egg-shaped and can vary in size, typically measuring about 5 to 10 cm in length and are mostly red in color. Similarly, the tree tomato plant has large, simple leaves that are dark green and smooth.",
        Importance: "1. Tree tomatoes are primarily cultivated for their fruit, which is consumed fresh or used in various culinary applications.<br><br>2.	Its fruit can be used in a variety of dishes and recipes. It is often used to make chutneys, salsas, jams, and preserves.<br><br>3.	The fruit can be juiced to make refreshing beverages, smoothies, and cocktails. The juice can also be used as a base for sauces or salad dressings",
        FunFact: "Tree tomato (tamarillo) is not related to the traditional tomato at all, despite sharing the word 'tomato' in its name. Tamarillo is a member of the Solanum genus, like the tomato, but it belongs to a different species, Solanum betaceum. The name 'tree tomato' is due to the fruit's somewhat tomato-like appearance and the fact that it grows on a tree-like plant.",
        Image: "images/Tree Tomato.jpg"
    },
    plant33: {
        EnglishName: "Palmgrass",
        NepaliName: "",
        ScientificName: "Setaria palmifolia",
        FamilyName: "Poaceae",
        PhysicalFeatures: "(Herb)Setaria palmifolia is a large, herbaceous, clump-forming perennial grass. It can reach heights of up to 3 meters. The leaves of Setaria palmifolia are large and broad, resembling palm fronds. They are typically dark green in color and can grow to be around 60 cm long. Similarly, the stems of Setaria palmifolia are strong and can grow quite tall, with a tendency to arch gracefully under the weight of the leaves.",
        Importance: "1.	Setaria palmifolia is primarily grown as an ornamental plant for its attractive and tropical appearance. Its large, palm-like leaves and distinctive, fountain-like inflorescences make it a popular choice for landscaping.<br><br>2.	Setaria palmifolia can be employed for erosion control, especially in areas prone to soil erosion along riverbanks and coastal regions.",
        FunFact: "Setaria palmifolia (Palm Grass or Fountain Grass) is not actually a palm but a grass species. Despite its common name and palm-like appearance, it belongs to the family Poaceae, making it a member of the grass family.",
        Image: "images/palm grass.jpg"
    },
    plant34: {
        EnglishName: "Yellow Himalayan Raspberry",
        NepaliName: "Aiselu",
        ScientificName: "Rubus ellipticus",
        FamilyName: "Rosaceae",
        PhysicalFeatures: "(Shrub)Rubus ellipticus has thorny stems and the leaves are elliptical in shape, green and serrated, with a glossy appearance. This plant produces white to pale pink flowers that are typically around 2-3 centimeters in diameter. These flowers have five petals and are usually arranged in clusters. Similarly, the fruits of Rubus ellipticus are yellow to golden in color, and they are somewhat similar in appearance to raspberries.",
        Importance: "1.	The primary use of Rubus ellipticus is its edible fruit. The yellow to golden berries produced by the plant are consumed by local people in the Himalayan region and are used to make jams, jellies, and desserts.<br><br>2.	The growth habit of Rubus ellipticus, with its thorny thickets, can be beneficial in controlling soil erosion in certain areas.",
        FunFact: "A fun fact about Rubus ellipticus is that it's sometimes referred to as the 'Himalayan giant raspberry' due to the relatively large size of its berries compared to other Rubus species.",
        Image: "images/Yellow Himalayan Raspberry.jpg"
    },
    plant35: {
        EnglishName: "Shingle Oak",
        NepaliName: "",
        ScientificName: "Quercus imbricaria",
        FamilyName: "Fagaceae",
        PhysicalFeatures: "(Tree)Shingle oaks are medium to large deciduous trees. They can reach heights of 15 to 24 meters. The leaves are simple and alternate, with a unique shape. They are elliptical, with smooth margins, and have a distinctive glossy green appearance and the bark of mature shingle oaks is light gray.",
        Importance: "1.	Shingle Oak wood is a durable and strong wood that has been used for various purposes, including furniture & carpentry.<br><br>2.	It is also used to make shingles for covering roofs. ",
        FunFact: "This plant gets its common name from the appearance of its bark, which resembles shingles or scales. The scaly ridges on the bark create a unique and visually interesting texture that distinguishes this oak species from others.",
        Image: "images/Shingle Oak.jpg"
    },
    plant36: {
        EnglishName: "Nepal knotweed",
        NepaliName: "",
        ScientificName: "Persicaria nepalensis",
        FamilyName: "Polygonaceae",
        PhysicalFeatures: "(Herb)The leaves of Persicaria nepalensis are lance-shaped and can be green to bluish green in color and often have a distinct dark in the center. The stems of this plant are slender and may exhibit reddish or purplish hues. Similarly, the nodes along the stems can be somewhat swollen. ",
        Importance: "1.	Persicaria nepalensis is grown as an ornamental plant in gardens and landscapes for its aesthetic appeal. Its striking pink to reddish-pink flowers and colorful foliage add visual interest to outdoor spaces.",
        FunFact: "",
        Image: "images/african marigold.jpg"
    },
    plant37: {
        EnglishName: "Pink Knotweed",
        NepaliName: "",
        ScientificName: "Persicaria capitata",
        FamilyName: "Polygonaceae",
        PhysicalFeatures: "(Herb)The leaves of this plant are typically lance-shaped or elliptical and are often green, sometimes with purple spots which can measure 3-10 cm in length. The stems of Persicaria capitata are typically slender and green and slightly reddish in color. Similarly, the flowers are arranged in spike-like clusters and are pink to lavender in color.",
        Importance: "1.	Persicaria capitata is cultivated as an ornamental plant in gardens and landscapes. Its attractive pink to lavender flowers and colorful foliage add visual interest to outdoor spaces",
        FunFact: "A fun fact about Persicaria capitata, also known as pinkhead smartweed, is that it belongs to the Polygonaceae family, which is known for containing a variety of plants with distinctive jointed stems. These jointed stems are often called 'nodes' and can be seen in many members of this family, including smartweeds.",
        Image: "images/Pink Knotweed.jpg"
    },
    plant38: {
        EnglishName: "Common Lantana",
        NepaliName: "Banmara",
        ScientificName: "Lantana camara",
        FamilyName: "Verbenaceae",
        PhysicalFeatures: "(Shrub)Common lantana produces clusters of small, tubular flowers that are arranged in dense, globe-shaped heads. The flowers come in a variety of colors, including shades of red, orange, yellow, and pink. After the flowers fade, common lantana produces small, fleshy, and berry-like fruit. These fruits are typically dark purple to black when mature. Moreover, the leaves of common lantana are simple, opposite, and serrated.",
        Importance: "1.	Common lantana is commonly grown as an ornamental plant in gardens and landscapes. Its bright and colorful flowers, which come in various shades, make it an attractive addition to gardens.<br><br>2.	In some regions, lantana is used for erosion control because of its ability to form dense thickets and stabilize soil.",
        FunFact: "After the flowers fade, this plant leaves small berries which gradually mature over time. Even though these berries look like edible fruits, they are toxic if ingested. So, consumption of its fruits should be avoided.",
        Image: "images/common lantana.jpg"
    },
    plant39: {
        EnglishName: "Crofton Weed",
        NepaliName: "Kali jhar/Kalo Achhame",
        ScientificName: "Ageratina Adenophora",
        FamilyName: "Asteraceae",
        PhysicalFeatures: "(Shrub)Crofton weed can grow as a tall shrub or small tree, reaching heights of up to 4 meters. The stems of Crofton weed are woody and can be either erect or sprawling. They are often green or reddish-brown and may become somewhat woody as the plant matures. Similarly, the plant produces clusters of small, white, or creamy white, tubular flowers. These flowers are somewhat cottony in appearance when they bloom. ",
        Importance: "When animals consume Crofton weed, they may exhibit symptoms such as:<br><br>1.	Affected animals may show unusual and erratic behavior, including agitation and restlessness.<br><br>2.	They become extremely sensitive to sunlight, leading to a condition known as 'photosensitization.'<br><br>3.	Animals may develop skin problems, including sunburn-like lesions, scabbing, and peeling of the skin.",
        FunFact: "",
        Image: "images/crofton weed.jpg"
    },
    plant40: {
        EnglishName: "Billygoat Weed/Chick Weed",
        NepaliName: "Gandhe(Seto)",
        ScientificName: "Ageratum conyzoides",
        FamilyName: "Asteraceae",
        PhysicalFeatures: "(Herb)Ageratum conyzoides is a relatively low-growing plant, typically reaching heights of 20 to 80 centimeters. The leaves of it are opposite, simple, and typically egg-shaped. Similarly, the plant produces small, tubular, and fluffy-looking flowers. The flower heads are composed of numerous tiny individual florets that are typically white in color. Moreover, the stems of it are typically herbaceous, non-woody, and covered in fine hairs.",
        Importance: "1.	Ageratum conyzoides is sometimes cultivated as an ornamental plant. Its attractive lavender-blue or white flowers and bushy growth habit make it suitable for flower beds and borders.",
        FunFact: "Chick weed is not only an edible and nutritious plant but has a history of being used by early European settlers in North America as a food source. Chickweed is rich in vitamins and minerals, particularly vitamin C, and can be added to salads or used as a potherb. Its mild, fresh flavor and tender leaves make it a welcome addition to many dishes.",
        Image: "images/chick weed.jpg"
    },
    plant41: {
        EnglishName: "Alligator weed",
        NepaliName: "Jalijamboo",
        ScientificName: "Alternanthera philoxeroides",
        FamilyName: "Amaranthaceae",
        PhysicalFeatures: "(Herb)The leaves of alligator weed are opposite, lance-shaped, and usually measure 1 to 5 centimeters in length. Similarly, the stems of alligator weed are herbaceous and typically creeping or floating. They can root at the nodes, allowing the plant to spread and form dense mats on the water's surface. Also, Alligator weed has a fibrous root system and can also form roots at nodes along its stems.",
        Importance: "1.	Alligator weed can be utilized in some regions for erosion control. Its dense mats can prevent soil erosion in areas with slow-moving or still water bodies.",
        FunFact: "The plant's dense mats, which can float on the water's surface or cover the ground, are reminiscent of the back of an alligator or crocodile when seen from a distance. The name 'alligator weed' is a reference to this distinctive appearance.",
        Image: "images/Alligator weed.jpg"
    },
    plant42: {
        EnglishName: "Nepalese Alder",
        NepaliName: "Utis",
        ScientificName: "Alnus nepalensis",
        FamilyName: "Betulaceae",
        PhysicalFeatures: "(Tree)Alnus nepalensis can grow to a height of 20 to 30 meters or more, depending on growing conditions. The leaves of it are simple, alternate, and typically serrated along the edges. They are broadly ovate to elliptical in shape, dark green in color, and can measure 5 to 15 centimeters in length. Similarly, the bark of the tree is smooth and grayish when young, but it becomes rougher and darker as the tree matures.",
        Importance: "1.	Nepalese alder is known for its ability to improve soil fertility through a process known as nitrogen fixation. It forms a symbiotic relationship with nitrogen-fixing bacteria in its root nodules, which helps enrich the soil with nitrogen, benefiting neighboring plants.<br><br>2.	The wood of Alnus nepalensis is used for construction of furniture and firewood.",
        FunFact: "It has the unique ability to form a symbiotic relationship with specific nitrogen-fixing bacteria known as actinomycetes. These actinomycetes are not commonly associated with nitrogen fixation in other plants. This special relationship allows the Nepal alder to thrive in nitrogen-poor soils, as it can take atmospheric nitrogen and convert it into a form that can be used by the plant, thereby enriching the soil with this essential nutrient",
        Image: "images/nepalese alder.jpg"
    },
    plant43: {
        EnglishName: "Bamboo",
        NepaliName: "Baas",
        ScientificName: "Bambusa",
        FamilyName: "Poaceae",
        PhysicalFeatures: "(Herb)Bamboo is tall, slender, and hollow stems, which are often referred to as culms. These culms can vary in size from small and slender to large and robust. Bamboo culms have nodes or joints that occur at regular intervals along their length. Leaves, branches, and roots typically emerge from these nodes. Similarly, Bamboo leaves are typically elongated and narrow, with various shapes and sizes depending on the bamboo species. The leaves are often arranged in a symmetrical pattern along the branches.",
        Importance: "1.	Bamboo is widely used as a construction material for housing, bridges, scaffolding, and various other structures. Its high strength, flexibility, and lightweight properties make it an excellent alternative to traditional building materials like wood.<br><br>2.	Bamboo is commonly used to make furniture, such as chairs, tables, and shelves. It's also used for crafting a variety of decorative items and handicrafts.<br><br>3.	Certain bamboo shoots are edible and a common ingredient in various Asian cuisines. They are known for their crunchy texture and ability to absorb flavors from other ingredients.<br><br>4.	Bamboo can be used as a source of biofuel.<br><br>5.	Bamboo fibers are used to make soft and breathable fabrics. Bamboo clothing is comfortable and has natural moisture-wicking and antibacterial properties.",
        FunFact: "Bamboo is the fastest-growing plant on Earth. Some bamboo species are known to grow incredibly quickly, with certain types capable of growing up to 3 feet (or about 91 centimeters) in just 24 hours under the right conditions. This astonishing growth rate is due to the rapid cell division and elongation in the bamboo culms.",
        Image: "images/bamboo.jpg"
    },
    plant44: {
        EnglishName: "Black-jack",
        NepaliName: "Kaalo Kuro",
        ScientificName: "Bidens Pilosa",
        FamilyName: "Asteraceae",
        PhysicalFeatures: "(Herb)Bidens pilosa typically reaches a height of 1 to 2 meters, although it can vary depending on growing conditions. The leaves are opposite, pinnately compound, and have toothed margins. They are usually dark green, and each leaflet has a serrated edge. Similarly, the flowers of Bidens pilosa are small and daisy-like, with yellow or white ray florets and a central disk of darker disc florets.",
        Importance: "1.	In some cultures, the young leaves of Bidens pilosa are consumed as a leafy green vegetable. They can be added to soups, stews, or salads.<br><br>2.	Some communities use the crushed leaves and stems of Bidens pilosa as a natural insect repellent due to their strong odor.",
        FunFact: "Bidens Pilosa has inspired the development of certain types of fasteners and adhesives. The seeds of it are covered in tiny barbs or spines that allow them to easily stick to clothing, animal fur, or any surface they come into contact with. This natural 'hook-and-loop' mechanism has inspired the invention of Velcro, a well-known modern fastening system.",
        Image: "images/blacjack.jpg"
    },
    plant45: {
        EnglishName: "Lemon",
        NepaliName: "Kagati",
        ScientificName: "Citrus x limon",
        FamilyName: "Rutaceae",
        PhysicalFeatures: "(Tree)Lemon trees are relatively small to medium-sized trees, typically reaching heights of 3 to 6 meters. The leaves of the lemon tree are elliptical or ovate in shape, glossy, and dark green in color. They are typically 2 to 4 inches in length and have a fragrant aroma when crushed. Similarly, the lemon tree produces bright yellow, ellipsoidal or ovoid fruit known as lemons which have a sour or tart taste. Moreover, it produces white, fragrant, and waxy flowers with five petals.",
        Importance: "1.	Lemon juice and zest are widely used in cooking to add flavor and acidity to a variety of dishes, including soups, sauces, marinades, and salad dressings.<br><br>2.	Lemons are a good source of vitamin C and provide essential nutrients and antioxidants.<br><br>3.	Lemon essential oil is used in various perfumes, cleaning products, and scented candles.<br><br>4.	The lemon juice and flavoring industry relies on lemon production for various products, including bottled lemon juice, lemon-flavored beverages, etc.",
        FunFact: "Lemon trees can live for a surprisingly long time, with some well-cared-for trees living for over a century. They are also quite hardy and can continue to produce fruit year-round, which means a single lemon tree can provide lemons in various stages of ripeness throughout the year. This characteristic has earned them the nickname 'everbearing lemon tree.'",
        Image: "images/lemon.jpg"
    },
    plant46: {
        EnglishName: "Adlay/Job’s tears",
        NepaliName: " ",
        ScientificName: "Coix lacryma-jobi",
        FamilyName: "Poaceae",
        PhysicalFeatures: "(Herb)The most distinctive feature of Job's tears is its seeds. These seeds are oval or tear-shaped, hard, and pearly-white, resembling polished beads. Similarly, the stems of Adlays are slender, erect, and reed-like, typically reaching heights of 60 to 120 centimeters. Moreover, its leaves are alternate and linear in shape, with a grass-like appearance. They can be up to 30 centimeters long and about 2.5 centimeters wide.",
        Importance: "1.	The hard and bead-like seeds of Job's tears are often used for making jewelry, accessories, and craft projects. The seeds are strung together to create necklaces, bracelets, and other decorative items.<br><br>2.	In some cultures, Job's tears seeds are used as a food source. They can be ground into flour, cooked, and used in a variety of dishes, including porridge, soups, and desserts.",
        FunFact: "Its seeds have been used for thousands of years in traditional Chinese culture for their purported medicinal properties and symbolic significance. In Traditional Chinese Medicine (TCM), these seeds are known as 'Yi Yi Ren' and are believed to have properties that can help with various health conditions, including arthritis and edema.",
        Image: "images/Adlay Job’s tears.jpg"
    },
    plant47: {
        EnglishName: "Ebolo/Thickhead",
        NepaliName: "Anikale-jhar",
        ScientificName: "Crassocephalum crepidioides",
        FamilyName: "Asteraceae",
        PhysicalFeatures: "(Herb)The leaves are one of the most prominent features of Crassocephalum crepidioides. They are thick, fleshy, and can be quite large, with a distinct dark green color. Similarly, the plant has a short, thick stem that emerges from the center of the rosette of leaves. The stem may be reddish or purplish in color. Moreover, it produces small, daisy-like flowers with white or yellow petals. The flowers are often found in clusters or inflorescences.",
        Importance: "1.	The leaves of Crassocephalum crepidioides are a good source of essential nutrients, including vitamins (such as vitamin A and vitamin C) and minerals. They are consumed as a leafy green vegetable in many African and Asian cuisines.<br><br>2.	Crassocephalum crepidioides is sometimes used as fodder for livestock and as animal feed. It can be a valuable resource for supplementing the diets of farm animals.",
        FunFact: "A fun fact about Crassocephalum crepidioides is that it is often referred to by various colloquial names in different regions, reflecting its widespread cultivation and use. In addition to the common names 'Ebolo' and 'Thickhead,' it goes by several other local names, such as 'Cuban spinach' in some parts of the Caribbean and 'Gardinia' in West Africa.",
        Image: "images/EboloThickhead.jpg"
    },
    plant48: {
        EnglishName: "Dotted Smartweed",
        NepaliName: "",
        ScientificName: "Persicaria punctata",
        FamilyName: "Polygonaceae",
        PhysicalFeatures: "(Herb)Smartweed typically has erect or ascending stems that can reach heights between 30 to 120 cm. The leaves are sword shaped and often have a distinct reddish or purplish spot in the center, giving the plant its 'dotted' appearance. The size and shape of the leaves can vary, but they are generally pointed at the tip. Similarly, the flowers are arranged in elongated clusters called spikes. These spikes can be cylindrical or tapering and are often densely packed with tiny flowers. The flowers can vary in color, including shades of pink or white.",
        Importance: "1.	Dotted Smartweed is mainly used for its ornamental purpose.",
        FunFact: "This plant’s name 'smartweed' is derived from the plant's acrid taste. When animals graze on it, they may exhibit signs of discomfort or 'smarten up,' avoiding further consumption due to the pungent taste. This characteristic has led to the common name 'smartweed', reflecting the plant's ability to deter herbivores through its distinctive flavor.",
        Image: "images/Dotted Smartweed.jpg"
    },
    plant49: {
        EnglishName: "Alligator weed",
        NepaliName: "Jalijamboo",
        ScientificName: "Alternanthera philoxeroides",
        FamilyName: "Amaranthaceae",
        PhysicalFeatures: "(Herb)The leaves of alligator weed are opposite, lance-shaped, and usually measure 1 to 5 centimeters in length. Similarly, the stems of alligator weed are herbaceous and typically creeping or floating. They can root at the nodes, allowing the plant to spread and form dense mats on the water's surface. Also, Alligator weed has a fibrous root system and can also form roots at nodes along its stems.",
        Importance: "1.	Alligator weed can be utilized in some regions for erosion control. Its dense mats can prevent soil erosion in areas with slow-moving or still water bodies.",
        FunFact: "The plant's dense mats, which can float on the water's surface or cover the ground, are reminiscent of the back of an alligator or crocodile when seen from a distance. The name 'alligator weed' is a reference to this distinctive appearance.",
        Image: "images/Alligator weed.jpg"
    },
    plant50: {
        EnglishName: "Indian Goosegrass",
        NepaliName: "Kodo Ghaas",
        ScientificName: "Eleusine indica",
        FamilyName: "Poaceae",
        PhysicalFeatures: "(Herb)The height of goosegrass can vary, but it typically grows close to the ground, reaching a height of 10 to 60 centimeters. The stems are flattened, spreading, and can root at the nodes, allowing the plant to spread horizontally. The stems may have a slightly reddish or purplish tint. Similarly, the leaves are linear, smooth, and may have a slightly rough texture. They are arranged alternately along the stems and the leaf blades are often folded.",
        Importance: "1.	Goosegrass, with its low-growing and mat-forming habit, can help control soil erosion in disturbed areas.<br><br>2.	In some regions, goosegrass is grazed by livestock as forage. While it may not be a primary forage choice, animals may consume it when other options are limited.",
        FunFact: "The low-growing habit of goosegrass allows it to escape the blades of a lawnmower, and it can continue to thrive even in well-maintained lawns. This resilience and adaptability contribute to its status as a common and persistent weed in turfgrass areas, sometimes frustrating gardeners and lawn care enthusiasts who find it challenging to control.",
        Image: "images/Indian GooseGrass.jpg"
    },
    plant41: {
        EnglishName: "Alligator weed",
        NepaliName: "Jalijamboo",
        ScientificName: "Alternanthera philoxeroides",
        FamilyName: "Amaranthaceae",
        PhysicalFeatures: "(Herb)The leaves of alligator weed are opposite, lance-shaped, and usually measure 1 to 5 centimeters in length. Similarly, the stems of alligator weed are herbaceous and typically creeping or floating. They can root at the nodes, allowing the plant to spread and form dense mats on the water's surface. Also, Alligator weed has a fibrous root system and can also form roots at nodes along its stems.",
        Importance: "1.	Alligator weed can be utilized in some regions for erosion control. Its dense mats can prevent soil erosion in areas with slow-moving or still water bodies.",
        FunFact: "The plant's dense mats, which can float on the water's surface or cover the ground, are reminiscent of the back of an alligator or crocodile when seen from a distance. The name 'alligator weed' is a reference to this distinctive appearance.",
        Image: "images/Alligator weed.jpg"
    },
    plant41: {
        EnglishName: "Alligator weed",
        NepaliName: "Jalijamboo",
        ScientificName: "Alternanthera philoxeroides",
        FamilyName: "Amaranthaceae",
        PhysicalFeatures: "(Herb)The leaves of alligator weed are opposite, lance-shaped, and usually measure 1 to 5 centimeters in length. Similarly, the stems of alligator weed are herbaceous and typically creeping or floating. They can root at the nodes, allowing the plant to spread and form dense mats on the water's surface. Also, Alligator weed has a fibrous root system and can also form roots at nodes along its stems.",
        Importance: "1.	Alligator weed can be utilized in some regions for erosion control. Its dense mats can prevent soil erosion in areas with slow-moving or still water bodies.",
        FunFact: "The plant's dense mats, which can float on the water's surface or cover the ground, are reminiscent of the back of an alligator or crocodile when seen from a distance. The name 'alligator weed' is a reference to this distinctive appearance.",
        Image: "images/Alligator weed.jpg"
    },
    plant41: {
        EnglishName: "Alligator weed",
        NepaliName: "Jalijamboo",
        ScientificName: "Alternanthera philoxeroides",
        FamilyName: "Amaranthaceae",
        PhysicalFeatures: "(Herb)The leaves of alligator weed are opposite, lance-shaped, and usually measure 1 to 5 centimeters in length. Similarly, the stems of alligator weed are herbaceous and typically creeping or floating. They can root at the nodes, allowing the plant to spread and form dense mats on the water's surface. Also, Alligator weed has a fibrous root system and can also form roots at nodes along its stems.",
        Importance: "1.	Alligator weed can be utilized in some regions for erosion control. Its dense mats can prevent soil erosion in areas with slow-moving or still water bodies.",
        FunFact: "The plant's dense mats, which can float on the water's surface or cover the ground, are reminiscent of the back of an alligator or crocodile when seen from a distance. The name 'alligator weed' is a reference to this distinctive appearance.",
        Image: "images/Alligator weed.jpg"
    },
    plant41: {
        EnglishName: "Alligator weed",
        NepaliName: "Jalijamboo",
        ScientificName: "Alternanthera philoxeroides",
        FamilyName: "Amaranthaceae",
        PhysicalFeatures: "(Herb)The leaves of alligator weed are opposite, lance-shaped, and usually measure 1 to 5 centimeters in length. Similarly, the stems of alligator weed are herbaceous and typically creeping or floating. They can root at the nodes, allowing the plant to spread and form dense mats on the water's surface. Also, Alligator weed has a fibrous root system and can also form roots at nodes along its stems.",
        Importance: "1.	Alligator weed can be utilized in some regions for erosion control. Its dense mats can prevent soil erosion in areas with slow-moving or still water bodies.",
        FunFact: "The plant's dense mats, which can float on the water's surface or cover the ground, are reminiscent of the back of an alligator or crocodile when seen from a distance. The name 'alligator weed' is a reference to this distinctive appearance.",
        Image: "images/Alligator weed.jpg"
    },
    plant41: {
        EnglishName: "Alligator weed",
        NepaliName: "Jalijamboo",
        ScientificName: "Alternanthera philoxeroides",
        FamilyName: "Amaranthaceae",
        PhysicalFeatures: "(Herb)The leaves of alligator weed are opposite, lance-shaped, and usually measure 1 to 5 centimeters in length. Similarly, the stems of alligator weed are herbaceous and typically creeping or floating. They can root at the nodes, allowing the plant to spread and form dense mats on the water's surface. Also, Alligator weed has a fibrous root system and can also form roots at nodes along its stems.",
        Importance: "1.	Alligator weed can be utilized in some regions for erosion control. Its dense mats can prevent soil erosion in areas with slow-moving or still water bodies.",
        FunFact: "The plant's dense mats, which can float on the water's surface or cover the ground, are reminiscent of the back of an alligator or crocodile when seen from a distance. The name 'alligator weed' is a reference to this distinctive appearance.",
        Image: "images/Alligator weed.jpg"
    },
    plant41: {
        EnglishName: "Alligator weed",
        NepaliName: "Jalijamboo",
        ScientificName: "Alternanthera philoxeroides",
        FamilyName: "Amaranthaceae",
        PhysicalFeatures: "(Herb)The leaves of alligator weed are opposite, lance-shaped, and usually measure 1 to 5 centimeters in length. Similarly, the stems of alligator weed are herbaceous and typically creeping or floating. They can root at the nodes, allowing the plant to spread and form dense mats on the water's surface. Also, Alligator weed has a fibrous root system and can also form roots at nodes along its stems.",
        Importance: "1.	Alligator weed can be utilized in some regions for erosion control. Its dense mats can prevent soil erosion in areas with slow-moving or still water bodies.",
        FunFact: "The plant's dense mats, which can float on the water's surface or cover the ground, are reminiscent of the back of an alligator or crocodile when seen from a distance. The name 'alligator weed' is a reference to this distinctive appearance.",
        Image: "images/Alligator weed.jpg"
    },

    plant41: {
        EnglishName: "Alligator weed",
        NepaliName: "Jalijamboo",
        ScientificName: "Alternanthera philoxeroides",
        FamilyName: "Amaranthaceae",
        PhysicalFeatures: "(Herb)The leaves of alligator weed are opposite, lance-shaped, and usually measure 1 to 5 centimeters in length. Similarly, the stems of alligator weed are herbaceous and typically creeping or floating. They can root at the nodes, allowing the plant to spread and form dense mats on the water's surface. Also, Alligator weed has a fibrous root system and can also form roots at nodes along its stems.",
        Importance: "1.	Alligator weed can be utilized in some regions for erosion control. Its dense mats can prevent soil erosion in areas with slow-moving or still water bodies.",
        FunFact: "The plant's dense mats, which can float on the water's surface or cover the ground, are reminiscent of the back of an alligator or crocodile when seen from a distance. The name 'alligator weed' is a reference to this distinctive appearance.",
        Image: "images/Alligator weed.jpg"
    },
    plant41: {
        EnglishName: "Alligator weed",
        NepaliName: "Jalijamboo",
        ScientificName: "Alternanthera philoxeroides",
        FamilyName: "Amaranthaceae",
        PhysicalFeatures: "(Herb)The leaves of alligator weed are opposite, lance-shaped, and usually measure 1 to 5 centimeters in length. Similarly, the stems of alligator weed are herbaceous and typically creeping or floating. They can root at the nodes, allowing the plant to spread and form dense mats on the water's surface. Also, Alligator weed has a fibrous root system and can also form roots at nodes along its stems.",
        Importance: "1.	Alligator weed can be utilized in some regions for erosion control. Its dense mats can prevent soil erosion in areas with slow-moving or still water bodies.",
        FunFact: "The plant's dense mats, which can float on the water's surface or cover the ground, are reminiscent of the back of an alligator or crocodile when seen from a distance. The name 'alligator weed' is a reference to this distinctive appearance.",
        Image: "images/Alligator weed.jpg"
    },
    plant41: {
        EnglishName: "Alligator weed",
        NepaliName: "Jalijamboo",
        ScientificName: "Alternanthera philoxeroides",
        FamilyName: "Amaranthaceae",
        PhysicalFeatures: "(Herb)The leaves of alligator weed are opposite, lance-shaped, and usually measure 1 to 5 centimeters in length. Similarly, the stems of alligator weed are herbaceous and typically creeping or floating. They can root at the nodes, allowing the plant to spread and form dense mats on the water's surface. Also, Alligator weed has a fibrous root system and can also form roots at nodes along its stems.",
        Importance: "1.	Alligator weed can be utilized in some regions for erosion control. Its dense mats can prevent soil erosion in areas with slow-moving or still water bodies.",
        FunFact: "The plant's dense mats, which can float on the water's surface or cover the ground, are reminiscent of the back of an alligator or crocodile when seen from a distance. The name 'alligator weed' is a reference to this distinctive appearance.",
        Image: "images/Alligator weed.jpg"
    },
    plant41: {
        EnglishName: "Alligator weed",
        NepaliName: "Jalijamboo",
        ScientificName: "Alternanthera philoxeroides",
        FamilyName: "Amaranthaceae",
        PhysicalFeatures: "(Herb)The leaves of alligator weed are opposite, lance-shaped, and usually measure 1 to 5 centimeters in length. Similarly, the stems of alligator weed are herbaceous and typically creeping or floating. They can root at the nodes, allowing the plant to spread and form dense mats on the water's surface. Also, Alligator weed has a fibrous root system and can also form roots at nodes along its stems.",
        Importance: "1.	Alligator weed can be utilized in some regions for erosion control. Its dense mats can prevent soil erosion in areas with slow-moving or still water bodies.",
        FunFact: "The plant's dense mats, which can float on the water's surface or cover the ground, are reminiscent of the back of an alligator or crocodile when seen from a distance. The name 'alligator weed' is a reference to this distinctive appearance.",
        Image: "images/Alligator weed.jpg"
    },
    plant41: {
        EnglishName: "Alligator weed",
        NepaliName: "Jalijamboo",
        ScientificName: "Alternanthera philoxeroides",
        FamilyName: "Amaranthaceae",
        PhysicalFeatures: "(Herb)The leaves of alligator weed are opposite, lance-shaped, and usually measure 1 to 5 centimeters in length. Similarly, the stems of alligator weed are herbaceous and typically creeping or floating. They can root at the nodes, allowing the plant to spread and form dense mats on the water's surface. Also, Alligator weed has a fibrous root system and can also form roots at nodes along its stems.",
        Importance: "1.	Alligator weed can be utilized in some regions for erosion control. Its dense mats can prevent soil erosion in areas with slow-moving or still water bodies.",
        FunFact: "The plant's dense mats, which can float on the water's surface or cover the ground, are reminiscent of the back of an alligator or crocodile when seen from a distance. The name 'alligator weed' is a reference to this distinctive appearance.",
        Image: "images/Alligator weed.jpg"
    },
    plant41: {
        EnglishName: "Alligator weed",
        NepaliName: "Jalijamboo",
        ScientificName: "Alternanthera philoxeroides",
        FamilyName: "Amaranthaceae",
        PhysicalFeatures: "(Herb)The leaves of alligator weed are opposite, lance-shaped, and usually measure 1 to 5 centimeters in length. Similarly, the stems of alligator weed are herbaceous and typically creeping or floating. They can root at the nodes, allowing the plant to spread and form dense mats on the water's surface. Also, Alligator weed has a fibrous root system and can also form roots at nodes along its stems.",
        Importance: "1.	Alligator weed can be utilized in some regions for erosion control. Its dense mats can prevent soil erosion in areas with slow-moving or still water bodies.",
        FunFact: "The plant's dense mats, which can float on the water's surface or cover the ground, are reminiscent of the back of an alligator or crocodile when seen from a distance. The name 'alligator weed' is a reference to this distinctive appearance.",
        Image: "images/Alligator weed.jpg"
    },
    plant41: {
        EnglishName: "Alligator weed",
        NepaliName: "Jalijamboo",
        ScientificName: "Alternanthera philoxeroides",
        FamilyName: "Amaranthaceae",
        PhysicalFeatures: "(Herb)The leaves of alligator weed are opposite, lance-shaped, and usually measure 1 to 5 centimeters in length. Similarly, the stems of alligator weed are herbaceous and typically creeping or floating. They can root at the nodes, allowing the plant to spread and form dense mats on the water's surface. Also, Alligator weed has a fibrous root system and can also form roots at nodes along its stems.",
        Importance: "1.	Alligator weed can be utilized in some regions for erosion control. Its dense mats can prevent soil erosion in areas with slow-moving or still water bodies.",
        FunFact: "The plant's dense mats, which can float on the water's surface or cover the ground, are reminiscent of the back of an alligator or crocodile when seen from a distance. The name 'alligator weed' is a reference to this distinctive appearance.",
        Image: "images/Alligator weed.jpg"
    },
    plant41: {
        EnglishName: "Alligator weed",
        NepaliName: "Jalijamboo",
        ScientificName: "Alternanthera philoxeroides",
        FamilyName: "Amaranthaceae",
        PhysicalFeatures: "(Herb)The leaves of alligator weed are opposite, lance-shaped, and usually measure 1 to 5 centimeters in length. Similarly, the stems of alligator weed are herbaceous and typically creeping or floating. They can root at the nodes, allowing the plant to spread and form dense mats on the water's surface. Also, Alligator weed has a fibrous root system and can also form roots at nodes along its stems.",
        Importance: "1.	Alligator weed can be utilized in some regions for erosion control. Its dense mats can prevent soil erosion in areas with slow-moving or still water bodies.",
        FunFact: "The plant's dense mats, which can float on the water's surface or cover the ground, are reminiscent of the back of an alligator or crocodile when seen from a distance. The name 'alligator weed' is a reference to this distinctive appearance.",
        Image: "images/Alligator weed.jpg"
    },
    plant41: {
        EnglishName: "Alligator weed",
        NepaliName: "Jalijamboo",
        ScientificName: "Alternanthera philoxeroides",
        FamilyName: "Amaranthaceae",
        PhysicalFeatures: "(Herb)The leaves of alligator weed are opposite, lance-shaped, and usually measure 1 to 5 centimeters in length. Similarly, the stems of alligator weed are herbaceous and typically creeping or floating. They can root at the nodes, allowing the plant to spread and form dense mats on the water's surface. Also, Alligator weed has a fibrous root system and can also form roots at nodes along its stems.",
        Importance: "1.	Alligator weed can be utilized in some regions for erosion control. Its dense mats can prevent soil erosion in areas with slow-moving or still water bodies.",
        FunFact: "The plant's dense mats, which can float on the water's surface or cover the ground, are reminiscent of the back of an alligator or crocodile when seen from a distance. The name 'alligator weed' is a reference to this distinctive appearance.",
        Image: "images/Alligator weed.jpg"
    },


};



// Handle Navigation
document.getElementById('homeLink').addEventListener('click', function () {
    setActiveSection('home');
});

document.getElementById('contentsLink').addEventListener('click', function () {
    setActiveSection('contents');
    populatePlantList();  // Make sure to populate the plant list when opening the contents section
});

document.getElementById('contactLink').addEventListener('click', function () {
    setActiveSection('contact');
});

// Handle Plant Selection
document.querySelectorAll('.plantLink').forEach(function (link) {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const plantId = event.target.dataset.plant;
        showPlantDetails(plantId);
    });
});

// Function to Show Specific Section
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach((section) => {
        section.classList.remove('active');
    });

    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.classList.add('active');
    }

    if (sectionId === 'contents') {
        populatePlantList(); // Populate plant list when contents section is shown
    }
}

// Function to Populate Plant List and Sort It
function populatePlantList() {
    const plantList = document.getElementById('plantList');
    plantList.innerHTML = '';  // Clear existing list items

    const plantNames = Object.keys(plantData);  // Get all plant keys

    // Sort plant names alphabetically
    plantNames.sort((a, b) => {
        return plantData[a].EnglishName.localeCompare(plantData[b].EnglishName);
    });

    // Add sorted plants to the list
    plantNames.forEach(function(plantId) {
        const plant = plantData[plantId];
        const listItem = document.createElement('li');
        
        const plantLink = document.createElement('a');
        plantLink.href = '#';
        plantLink.className = 'plantLink';
        plantLink.dataset.plant = plantId; // Set the plant data attribute
        plantLink.textContent = plant.EnglishName;

        listItem.appendChild(plantLink);
        plantList.appendChild(listItem);
        
        // Re-add event listener for newly created links
        plantLink.addEventListener('click', function(event) {
            event.preventDefault();
            showPlantDetails(plantId);
        });
    });
}

// Function to display plant details in a separate section
function showPlantDetails(plantId) {
    const plant = plantData[plantId]; // Access the selected plant from plantData using plantId

    if (plant) {
        document.getElementById("plantName").textContent = plant.EnglishName;
        
        document.getElementById("plantData").innerHTML = `
            <p><strong>Nepali Name:</strong> ${plant.NepaliName}</p>
            <p><strong>Scientific Name:</strong> ${plant.ScientificName}</p>
            <p><strong>Family:</strong> ${plant.FamilyName}</p>
            <p><strong>Physical Features:</strong><br>${plant.PhysicalFeatures}</p>
            <p><strong>Importance:</strong><br>${plant.Importance}</p>
            <p><strong>Fun Fact:</strong><br>${plant.FunFact}</p>
            <img src="${plant.Image}" alt="${plant.EnglishName}" class="plant-image">
        `;
        
        showSection('plantDetails'); // Switch to plant details section
    }
}

// Initially populate the list when contents section is shown for the first time
populatePlantList();
