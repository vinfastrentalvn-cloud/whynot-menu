// Меню еды кухни-партнёра (из PDF). vi — название как в меню кухни, name — для гостей, best — хит продаж.
// Включение блюд, разделов и цены приходят из приложения (Электронное меню → Еда); здесь встроенная копия.
window.FOOD = [
 {
  "id": "f_pho",
  "icon": "pho",
  "name": {
   "en": "Phở",
   "ru": "Фо",
   "vi": "Phở",
   "fr": "Phở",
   "es": "Phở",
   "de": "Phở",
   "ko": "쌀국수",
   "zh": "越南河粉"
  },
  "items": [
   {
    "id": "pho_lan",
    "vi": "Phở tái lăn",
    "name": {
     "en": "Stir-fried beef pho",
     "ru": "Фо с обжаренной говядиной",
     "fr": "Phở au bœuf sauté",
     "es": "Phở con ternera salteada",
     "de": "Phở mit gebratenem Rindfleisch",
     "ko": "볶은 소고기 쌀국수",
     "zh": "炒牛肉河粉"
    },
    "price": 70000,
    "img": "pho_lan.jpg",
    "best": true
   },
   {
    "id": "pho_vien",
    "vi": "Phở tái viên",
    "name": {
     "en": "Beef meatball pho",
     "ru": "Фо с говяжьими фрикадельками",
     "fr": "Phở aux boulettes de bœuf",
     "es": "Phở con albóndigas de ternera",
     "de": "Phở mit Rindfleischbällchen",
     "ko": "소고기 완자 쌀국수",
     "zh": "牛肉丸河粉"
    },
    "price": 60000,
    "img": "pho_vien.jpg"
   },
   {
    "id": "pho_tai",
    "vi": "Phở tái",
    "name": {
     "en": "Rare beef pho",
     "ru": "Фо с говядиной",
     "fr": "Phở au bœuf saignant",
     "es": "Phở con ternera poco hecha",
     "de": "Phở mit zartem Rindfleisch",
     "ko": "생소고기 쌀국수",
     "zh": "生牛肉河粉"
    },
    "price": 50000,
    "img": "pho_tai.jpg"
   },
   {
    "id": "pho_nam",
    "vi": "Phở tái nạm",
    "name": {
     "en": "Rare beef & brisket pho",
     "ru": "Фо с говядиной и грудинкой",
     "fr": "Phở bœuf saignant et poitrine",
     "es": "Phở con ternera y pecho",
     "de": "Phở mit Rindfleisch und Brust",
     "ko": "소고기 양지 쌀국수",
     "zh": "生牛肉牛腩河粉"
    },
    "price": 60000,
    "img": "pho_nam.jpg"
   },
   {
    "id": "pho_ga",
    "vi": "Phở gà",
    "name": {
     "en": "Chicken pho",
     "ru": "Фо с курицей",
     "fr": "Phở au poulet",
     "es": "Phở de pollo",
     "de": "Phở mit Hähnchen",
     "ko": "닭고기 쌀국수",
     "zh": "鸡肉河粉"
    },
    "price": 50000,
    "img": "pho_ga.jpg"
   },
   {
    "id": "pho_tron",
    "vi": "Phở trộn",
    "name": {
     "en": "Mixed pho (no broth)",
     "ru": "Фо-салат (без бульона)",
     "fr": "Phở mélangé (sans bouillon)",
     "es": "Phở mezclado (sin caldo)",
     "de": "Phở gemischt (ohne Brühe)",
     "ko": "비빔 쌀국수",
     "zh": "拌河粉"
    },
    "price": 70000,
    "img": "pho_tron.jpg"
   }
  ]
 },
 {
  "id": "f_rice",
  "icon": "rice",
  "name": {
   "en": "Fried rice",
   "ru": "Жареный рис",
   "vi": "Cơm chiên",
   "fr": "Riz sauté",
   "es": "Arroz frito",
   "de": "Gebratener Reis",
   "ko": "볶음밥",
   "zh": "炒饭"
  },
  "items": [
   {
    "id": "com_bo",
    "vi": "Cơm chiên dưa bò",
    "name": {
     "en": "Beef fried rice",
     "ru": "Жареный рис с говядиной",
     "fr": "Riz sauté au bœuf",
     "es": "Arroz frito con ternera",
     "de": "Gebratener Reis mit Rind",
     "ko": "소고기 볶음밥",
     "zh": "牛肉炒饭"
    },
    "price": 70000,
    "img": "com_bo.jpg",
    "best": true
   },
   {
    "id": "com_hs",
    "vi": "Cơm chiên hải sản",
    "name": {
     "en": "Seafood fried rice",
     "ru": "Жареный рис с морепродуктами",
     "fr": "Riz sauté aux fruits de mer",
     "es": "Arroz frito con marisco",
     "de": "Gebratener Reis mit Meeresfrüchten",
     "ko": "해산물 볶음밥",
     "zh": "海鲜炒饭"
    },
    "price": 100000,
    "img": "com_hs.jpg"
   },
   {
    "id": "com_trung",
    "vi": "Cơm chiên trứng",
    "name": {
     "en": "Egg fried rice",
     "ru": "Жареный рис с яйцом",
     "fr": "Riz sauté à l'œuf",
     "es": "Arroz frito con huevo",
     "de": "Gebratener Reis mit Ei",
     "ko": "계란 볶음밥",
     "zh": "鸡蛋炒饭"
    },
    "price": 70000,
    "img": "com_trung.jpg"
   },
   {
    "id": "com_ga",
    "vi": "Cơm chiên gà",
    "name": {
     "en": "Chicken fried rice",
     "ru": "Жареный рис с курицей",
     "fr": "Riz sauté au poulet",
     "es": "Arroz frito con pollo",
     "de": "Gebratener Reis mit Hähnchen",
     "ko": "닭고기 볶음밥",
     "zh": "鸡肉炒饭"
    },
    "price": 70000,
    "img": "com_ga.jpg"
   },
   {
    "id": "com_rau",
    "vi": "Cơm chiên rau củ",
    "name": {
     "en": "Veggie fried rice",
     "ru": "Жареный рис с овощами",
     "fr": "Riz sauté aux légumes",
     "es": "Arroz frito con verduras",
     "de": "Gebratener Reis mit Gemüse",
     "ko": "야채 볶음밥",
     "zh": "蔬菜炒饭"
    },
    "price": 60000,
    "img": "com_rau.jpg"
   }
  ]
 },
 {
  "id": "f_noodle",
  "icon": "noodle",
  "name": {
   "en": "Fried noodles",
   "ru": "Жареная лапша",
   "vi": "Mì xào",
   "fr": "Nouilles sautées",
   "es": "Fideos salteados",
   "de": "Gebratene Nudeln",
   "ko": "볶음면",
   "zh": "炒面"
  },
  "items": [
   {
    "id": "mi_bo",
    "vi": "Mì xào bò",
    "name": {
     "en": "Beef fried noodles",
     "ru": "Лапша с говядиной",
     "fr": "Nouilles sautées au bœuf",
     "es": "Fideos salteados con ternera",
     "de": "Gebratene Nudeln mit Rind",
     "ko": "소고기 볶음면",
     "zh": "牛肉炒面"
    },
    "price": 70000,
    "img": "mi_bo.jpg"
   },
   {
    "id": "mi_ga",
    "vi": "Mì xào gà",
    "name": {
     "en": "Chicken fried noodles",
     "ru": "Лапша с курицей",
     "fr": "Nouilles sautées au poulet",
     "es": "Fideos salteados con pollo",
     "de": "Gebratene Nudeln mit Hähnchen",
     "ko": "닭고기 볶음면",
     "zh": "鸡肉炒面"
    },
    "price": 70000,
    "img": "mi_ga.jpg"
   },
   {
    "id": "mi_trung",
    "vi": "Mì xào trứng",
    "name": {
     "en": "Egg fried noodles",
     "ru": "Лапша с яйцом",
     "fr": "Nouilles sautées à l'œuf",
     "es": "Fideos salteados con huevo",
     "de": "Gebratene Nudeln mit Ei",
     "ko": "계란 볶음면",
     "zh": "鸡蛋炒面"
    },
    "price": 70000,
    "img": "mi_trung.jpg"
   },
   {
    "id": "mi_hs",
    "vi": "Mì xào hải sản",
    "name": {
     "en": "Seafood fried noodles",
     "ru": "Лапша с морепродуктами",
     "fr": "Nouilles sautées aux fruits de mer",
     "es": "Fideos salteados con marisco",
     "de": "Gebratene Nudeln mit Meeresfrüchten",
     "ko": "해산물 볶음면",
     "zh": "海鲜炒面"
    },
    "price": 100000,
    "img": "mi_hs.jpg"
   },
   {
    "id": "mi_rau",
    "vi": "Mì xào rau củ",
    "name": {
     "en": "Veggie fried noodles",
     "ru": "Лапша с овощами",
     "fr": "Nouilles sautées aux légumes",
     "es": "Fideos salteados con verduras",
     "de": "Gebratene Nudeln mit Gemüse",
     "ko": "야채 볶음면",
     "zh": "蔬菜炒面"
    },
    "price": 60000,
    "img": "mi_rau.jpg"
   }
  ]
 },
 {
  "id": "f_salad",
  "icon": "salad",
  "name": {
   "en": "Salads",
   "ru": "Салаты",
   "vi": "Salad",
   "fr": "Salades",
   "es": "Ensaladas",
   "de": "Salate",
   "ko": "샐러드",
   "zh": "沙拉"
  },
  "items": [
   {
    "id": "sal_ngu",
    "vi": "Salad cá ngừ",
    "name": {
     "en": "Tuna salad",
     "ru": "Салат с тунцом",
     "fr": "Salade de thon",
     "es": "Ensalada de atún",
     "de": "Thunfischsalat",
     "ko": "참치 샐러드",
     "zh": "金枪鱼沙拉"
    },
    "price": 110000,
    "img": "sal_ngu.jpg"
   },
   {
    "id": "sal_ngong",
    "vi": "Lườn ngỗng",
    "name": {
     "en": "Smoked goose breast",
     "ru": "Копчёная гусиная грудка",
     "fr": "Magret d'oie fumé",
     "es": "Pechuga de oca ahumada",
     "de": "Geräucherte Gänsebrust",
     "ko": "훈제 거위 가슴살",
     "zh": "烟熏鹅胸"
    },
    "price": 120000,
    "img": "sal_ngong.jpg"
   },
   {
    "id": "sal_tom",
    "vi": "Salad tôm",
    "name": {
     "en": "Shrimp salad",
     "ru": "Салат с креветками",
     "fr": "Salade de crevettes",
     "es": "Ensalada de gambas",
     "de": "Garnelensalat",
     "ko": "새우 샐러드",
     "zh": "鲜虾沙拉"
    },
    "price": 110000,
    "img": "sal_tom.jpg"
   },
   {
    "id": "sal_bo",
    "vi": "Salad bò beefsteak",
    "name": {
     "en": "Beefsteak salad",
     "ru": "Салат с бифштексом",
     "fr": "Salade au steak de bœuf",
     "es": "Ensalada con bistec",
     "de": "Salat mit Rindersteak",
     "ko": "비프스테이크 샐러드",
     "zh": "牛排沙拉"
    },
    "price": 120000,
    "img": "sal_bo.jpg"
   },
   {
    "id": "sal_trung",
    "vi": "Salad trứng",
    "name": {
     "en": "Egg salad",
     "ru": "Салат с яйцом",
     "fr": "Salade aux œufs",
     "es": "Ensalada con huevo",
     "de": "Salat mit Ei",
     "ko": "계란 샐러드",
     "zh": "鸡蛋沙拉"
    },
    "price": 60000,
    "img": "sal_trung.jpg"
   }
  ]
 },
 {
  "id": "f_main",
  "icon": "main",
  "name": {
   "en": "Mains",
   "ru": "Горячее",
   "vi": "Món chính",
   "fr": "Plats",
   "es": "Platos principales",
   "de": "Hauptgerichte",
   "ko": "메인 요리",
   "zh": "主菜"
  },
  "items": [
   {
    "id": "bo_luclac",
    "vi": "Bò lúc lắc",
    "name": {
     "en": "Shaking beef",
     "ru": "Говядина «лук-лак»",
     "fr": "Bœuf « luc lac » sauté",
     "es": "Ternera «luc lac» salteada",
     "de": "Gebratene Rindfleischwürfel „Luc Lac“",
     "ko": "보 룩락 (소고기 큐브 볶음)",
     "zh": "越式骰子牛肉"
    },
    "price": 120000,
    "img": "bo_luclac.jpg"
   },
   {
    "id": "ga_cari",
    "vi": "Cà ri ức gà",
    "name": {
     "en": "Chicken curry",
     "ru": "Карри с курицей",
     "fr": "Curry de poulet",
     "es": "Curry de pollo",
     "de": "Hähnchen-Curry",
     "ko": "치킨 커리",
     "zh": "咖喱鸡"
    },
    "price": 60000,
    "img": "ga_cari.jpg"
   },
   {
    "id": "ga_xien",
    "vi": "Ức gà xiên que",
    "name": {
     "en": "Chicken breast skewers",
     "ru": "Шашлычки из куриной грудки",
     "fr": "Brochettes de blanc de poulet",
     "es": "Brochetas de pechuga de pollo",
     "de": "Hähnchenbrust-Spieße",
     "ko": "닭가슴살 꼬치",
     "zh": "鸡胸肉串"
    },
    "price": 120000,
    "img": "ga_xien.jpg"
   },
   {
    "id": "bo_kho",
    "vi": "Bò kho",
    "name": {
     "en": "Beef stew",
     "ru": "Тушёная говядина",
     "fr": "Bœuf mijoté",
     "es": "Estofado de ternera",
     "de": "Rindfleischeintopf",
     "ko": "소고기 스튜",
     "zh": "越式炖牛肉"
    },
    "price": 60000,
    "img": "bo_kho.jpg"
   },
   {
    "id": "ga_chien",
    "vi": "Ức gà chiên",
    "name": {
     "en": "Pan-fried chicken breast",
     "ru": "Жареная куриная грудка",
     "fr": "Blanc de poulet poêlé",
     "es": "Pechuga de pollo a la plancha",
     "de": "Gebratene Hähnchenbrust",
     "ko": "닭가슴살 구이",
     "zh": "香煎鸡胸"
    },
    "price": 110000,
    "img": "ga_chien.jpg"
   },
   {
    "id": "ga_cay",
    "vi": "Gà nấu cay",
    "name": {
     "en": "Spicy chicken stew",
     "ru": "Острое тушёное куриное",
     "fr": "Ragoût de poulet épicé",
     "es": "Guiso de pollo picante",
     "de": "Scharfer Hähnchen-Eintopf",
     "ko": "매운 닭고기 스튜",
     "zh": "香辣炖鸡"
    },
    "price": 60000,
    "img": "ga_cay.jpg"
   }
  ]
 },
 {
  "id": "f_snack",
  "icon": "snack",
  "name": {
   "en": "Snacks",
   "ru": "Закуски",
   "vi": "Món ăn nhẹ",
   "fr": "En-cas",
   "es": "Para picar",
   "de": "Snacks",
   "ko": "간식",
   "zh": "小吃"
  },
  "items": [
   {
    "id": "banhmi",
    "vi": "Bánh mì bơ tỏi",
    "name": {
     "en": "Garlic bread",
     "ru": "Чесночный хлеб",
     "fr": "Pain à l'ail",
     "es": "Pan de ajo",
     "de": "Knoblauchbrot",
     "ko": "갈릭 브레드",
     "zh": "蒜香面包"
    },
    "price": 50000,
    "img": "banhmi.jpg"
   },
   {
    "id": "fries",
    "vi": "Khoai tây chiên",
    "name": {
     "en": "French fries",
     "ru": "Картофель фри",
     "fr": "Frites",
     "es": "Patatas fritas",
     "de": "Pommes frites",
     "ko": "감자튀김",
     "zh": "炸薯条"
    },
    "price": 60000,
    "img": "fries.jpg"
   },
   {
    "id": "thitmuoi",
    "vi": "Thịt muối chiên giòn",
    "name": {
     "en": "Crispy fried salted pork",
     "ru": "Хрустящая солёная свинина",
     "fr": "Porc salé croustillant",
     "es": "Cerdo salado crujiente",
     "de": "Knuspriges gesalzenes Schweinefleisch",
     "ko": "바삭한 염장 돼지고기 튀김",
     "zh": "香脆炸咸肉"
    },
    "price": 120000,
    "img": "thitmuoi.jpg"
   },
   {
    "id": "chaca",
    "vi": "Chả cá Phan Thiết",
    "name": {
     "en": "Phan Thiet fish cake",
     "ru": "Рыбные котлетки по-фантьетски",
     "fr": "Galette de poisson de Phan Thiet",
     "es": "Pastel de pescado de Phan Thiet",
     "de": "Fischkuchen aus Phan Thiet",
     "ko": "판티엣 어묵",
     "zh": "藩切鱼饼"
    },
    "price": 60000,
    "img": "chaca.jpg"
   },
   {
    "id": "bo_opla",
    "vi": "Bò xào trứng ốp la",
    "name": {
     "en": "Stir-fried beef & fried eggs",
     "ru": "Говядина с яичницей",
     "fr": "Bœuf sauté et œufs au plat",
     "es": "Ternera salteada con huevos fritos",
     "de": "Gebratenes Rind mit Spiegelei",
     "ko": "소고기 볶음과 계란 프라이",
     "zh": "炒牛肉配煎蛋"
    },
    "price": 70000,
    "img": "bo_opla.jpg"
   },
   {
    "id": "chagio",
    "vi": "Chả giò",
    "name": {
     "en": "Spring rolls",
     "ru": "Жареные спринг-роллы",
     "fr": "Nems",
     "es": "Rollitos de primavera",
     "de": "Frühlingsrollen",
     "ko": "짜조 (튀김 춘권)",
     "zh": "炸春卷"
    },
    "price": 70000,
    "img": "chagio.jpg"
   }
  ]
 },
 {
  "id": "f_sea",
  "icon": "sea",
  "name": {
   "en": "Seafood",
   "ru": "Морепродукты",
   "vi": "Hải sản",
   "fr": "Fruits de mer",
   "es": "Mariscos",
   "de": "Meeresfrüchte",
   "ko": "해산물",
   "zh": "海鲜"
  },
  "items": [
   {
    "id": "ca_hap",
    "vi": "Cá biển Mũi Né hấp",
    "name": {
     "en": "Steamed Mui Ne sea fish",
     "ru": "Морская рыба Муйне на пару",
     "fr": "Poisson de Mui Ne à la vapeur",
     "es": "Pescado de Mui Ne al vapor",
     "de": "Gedämpfter Meeresfisch aus Mui Ne",
     "ko": "무이네 생선찜",
     "zh": "蒸美奈海鱼"
    },
    "price": 120000,
    "img": "ca_hap.jpg"
   },
   {
    "id": "ca_sot",
    "vi": "Cá sốt cà chua",
    "name": {
     "en": "Fish in tomato sauce",
     "ru": "Рыба в томатном соусе",
     "fr": "Poisson sauce tomate",
     "es": "Pescado en salsa de tomate",
     "de": "Fisch in Tomatensauce",
     "ko": "토마토소스 생선",
     "zh": "茄汁鱼"
    },
    "price": 150000,
    "img": "ca_sot.jpg"
   },
   {
    "id": "tom_bo",
    "vi": "Tôm bơ tỏi",
    "name": {
     "en": "Garlic butter shrimp",
     "ru": "Креветки в чесночном масле",
     "fr": "Crevettes au beurre à l'ail",
     "es": "Gambas al ajillo con mantequilla",
     "de": "Garnelen in Knoblauchbutter",
     "ko": "갈릭 버터 새우",
     "zh": "蒜香黄油虾"
    },
    "price": 120000,
    "img": "tom_bo.jpg"
   },
   {
    "id": "muc_hap",
    "vi": "Mực hấp gừng",
    "name": {
     "en": "Squid steamed with ginger",
     "ru": "Кальмар на пару с имбирём",
     "fr": "Calamar vapeur au gingembre",
     "es": "Calamar al vapor con jengibre",
     "de": "Gedämpfter Tintenfisch mit Ingwer",
     "ko": "생강 오징어찜",
     "zh": "姜蒸鱿鱼"
    },
    "price": 150000,
    "img": "muc_hap.jpg"
   }
  ]
 },
 {
  "id": "f_pot",
  "icon": "pot",
  "name": {
   "en": "Stir-fry & hot pot",
   "ru": "Сотэ и хот-пот",
   "vi": "Món xào & lẩu",
   "fr": "Sautés & fondues",
   "es": "Salteados y hot pot",
   "de": "Wok & Feuertopf",
   "ko": "볶음 & 전골",
   "zh": "小炒与火锅"
  },
  "items": [
   {
    "id": "bo_rau",
    "vi": "Bò xào rau củ",
    "name": {
     "en": "Beef stir-fried with vegetables",
     "ru": "Говядина с овощами",
     "fr": "Bœuf sauté aux légumes",
     "es": "Ternera salteada con verduras",
     "de": "Rind mit Wokgemüse",
     "ko": "소고기 야채 볶음",
     "zh": "牛肉炒时蔬"
    },
    "price": 100000,
    "img": "bo_rau.jpg"
   },
   {
    "id": "muc_rau",
    "vi": "Mực xào rau củ",
    "name": {
     "en": "Squid stir-fried with vegetables",
     "ru": "Кальмар с овощами",
     "fr": "Calamar sauté aux légumes",
     "es": "Calamar salteado con verduras",
     "de": "Tintenfisch mit Wokgemüse",
     "ko": "오징어 야채 볶음",
     "zh": "鱿鱼炒时蔬"
    },
    "price": 100000,
    "img": "muc_rau.jpg"
   },
   {
    "id": "tom_rau",
    "vi": "Tôm xào rau củ",
    "name": {
     "en": "Shrimp stir-fried with vegetables",
     "ru": "Креветки с овощами",
     "fr": "Crevettes sautées aux légumes",
     "es": "Gambas salteadas con verduras",
     "de": "Garnelen mit Wokgemüse",
     "ko": "새우 야채 볶음",
     "zh": "虾仁炒时蔬"
    },
    "price": 100000,
    "img": "tom_rau.jpg"
   },
   {
    "id": "lau_ca",
    "vi": "Lẩu cá",
    "name": {
     "en": "Fish hot pot",
     "ru": "Хот-пот с рыбой",
     "fr": "Fondue vietnamienne au poisson",
     "es": "Hot pot de pescado",
     "de": "Feuertopf mit Fisch",
     "ko": "생선 전골",
     "zh": "鱼火锅"
    },
    "price": 250000,
    "img": "lau_ca.jpg"
   },
   {
    "id": "lau_muc",
    "vi": "Bạch tuộc nhúng giấm",
    "name": {
     "en": "Octopus hot pot with vinegar broth",
     "ru": "Хот-пот с осьминогом",
     "fr": "Fondue de poulpe au vinaigre",
     "es": "Hot pot de pulpo al vinagre",
     "de": "Oktopus-Feuertopf in Essigbrühe",
     "ko": "식초 육수 문어 샤브샤브",
     "zh": "醋涮八爪鱼"
    },
    "price": 200000,
    "img": "lau_muc.jpg"
   },
   {
    "id": "lau_hs",
    "vi": "Lẩu hải sản",
    "name": {
     "en": "Seafood hot pot",
     "ru": "Хот-пот с морепродуктами",
     "fr": "Fondue aux fruits de mer",
     "es": "Hot pot de marisco",
     "de": "Feuertopf mit Meeresfrüchten",
     "ko": "해물 전골",
     "zh": "海鲜火锅"
    },
    "price": 300000,
    "img": "lau_hs.jpg"
   }
  ]
 },
 {
  "id": "f_veg",
  "icon": "veg",
  "name": {
   "en": "Vegetarian",
   "ru": "Вегетарианское",
   "vi": "Món chay",
   "fr": "Végétarien",
   "es": "Vegetariano",
   "de": "Vegetarisch",
   "ko": "채식",
   "zh": "素食"
  },
  "items": [
   {
    "id": "v_salad",
    "vi": "Salad",
    "name": {
     "en": "Green salad",
     "ru": "Овощной салат",
     "fr": "Salade verte",
     "es": "Ensalada verde",
     "de": "Grüner Salat",
     "ko": "그린 샐러드",
     "zh": "蔬菜沙拉"
    },
    "price": 60000,
    "img": "v_salad.jpg"
   },
   {
    "id": "v_chagio",
    "vi": "Chả giò chay",
    "name": {
     "en": "Veggie spring rolls",
     "ru": "Овощные спринг-роллы",
     "fr": "Nems végétariens",
     "es": "Rollitos de primavera vegetales",
     "de": "Vegetarische Frühlingsrollen",
     "ko": "채식 짜조",
     "zh": "素炸春卷"
    },
    "price": 70000,
    "img": "v_chagio.jpg"
   },
   {
    "id": "v_dauhu",
    "vi": "Đậu hủ sốt cà",
    "name": {
     "en": "Tofu in tomato sauce",
     "ru": "Тофу в томатном соусе",
     "fr": "Tofu sauce tomate",
     "es": "Tofu en salsa de tomate",
     "de": "Tofu in Tomatensauce",
     "ko": "토마토소스 두부",
     "zh": "茄汁豆腐"
    },
    "price": 70000,
    "img": "v_dauhu.jpg"
   },
   {
    "id": "v_cari",
    "vi": "Cà ri chay",
    "name": {
     "en": "Vegetable curry",
     "ru": "Овощное карри",
     "fr": "Curry de légumes",
     "es": "Curry de verduras",
     "de": "Gemüse-Curry",
     "ko": "야채 커리",
     "zh": "素咖喱"
    },
    "price": 60000,
    "img": "v_cari.jpg"
   },
   {
    "id": "v_com",
    "vi": "Cơm chiên chay",
    "name": {
     "en": "Veggie fried rice",
     "ru": "Жареный рис с овощами",
     "fr": "Riz sauté végétarien",
     "es": "Arroz frito vegetal",
     "de": "Vegetarischer gebratener Reis",
     "ko": "채식 볶음밥",
     "zh": "素炒饭"
    },
    "price": 70000,
    "img": "v_com.jpg"
   },
   {
    "id": "v_rau",
    "vi": "Rau xào tỏi",
    "name": {
     "en": "Greens stir-fried with garlic",
     "ru": "Овощи с чесноком",
     "fr": "Légumes sautés à l'ail",
     "es": "Verduras salteadas con ajo",
     "de": "Gemüse mit Knoblauch",
     "ko": "마늘 야채 볶음",
     "zh": "蒜炒青菜"
    },
    "price": 60000,
    "img": "v_rau.jpg"
   }
  ],
  "veg": true
 }
];
