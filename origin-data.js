// Страна происхождения бренда и тип напитка. Правится вручную (не генерируется).
// c — код страны (см. COUNTRIES), t — тип (см. DRINK_TYPES). Нет записи = страна не показывается.
window.ORIGIN = {
  saigon_g: { c: "VN", t: "lager" }, saigon_r: { c: "VN", t: "lager" }, saigon_s: { c: "VN", t: "lager" },
  tiger: { c: "SG", t: "lager" }, tiger_c: { c: "SG", t: "lager" }, strongbow: { c: "GB", t: "cider" },
  wallst: { c: "VN", t: "whisky" }, jimbeam: { c: "US", t: "bourbon" }, ballantines: { c: "SCO", t: "scotch" },
  jameson: { c: "IE", t: "irish" }, jack: { c: "US", t: "tennessee" },
  chauvet_r: { c: "FR", t: "dark_rum" }, chauvet_w: { c: "FR", t: "white_rum" }, bacardi: { c: "CU", t: "white_rum" },
  captain: { c: "FR", t: "spiced_rum" },
  harpoon: { c: "VN", t: "gin" }, gordons: { c: "GB", t: "gin" }, bombay: { c: "GB", t: "gin" },
  hanoi: { c: "VN", t: "vodka" }, smirnoff: { c: "RU", t: "vodka" },
  cuervo_g: { c: "MX", t: "tequila_gold" }, cuervo: { c: "MX", t: "tequila_silver" },
  jager: { c: "DE", t: "herbal" }, campari: { c: "IT", t: "bitter" }, martini: { c: "IT", t: "vermouth" }, baileys: { c: "IE", t: "cream" }
};

// flag — какой флаг рисовать (у Шотландии британский)
window.COUNTRIES = {
  VN: { flag: "VN", en: "Vietnam", ru: "Вьетнам", vi: "Việt Nam", fr: "Viêt Nam", es: "Vietnam", de: "Vietnam", ko: "베트남", zh: "越南" },
  SG: { flag: "SG", en: "Singapore", ru: "Сингапур", vi: "Singapore", fr: "Singapour", es: "Singapur", de: "Singapur", ko: "싱가포르", zh: "新加坡" },
  GB: { flag: "GB", en: "United Kingdom", ru: "Великобритания", vi: "Vương quốc Anh", fr: "Royaume-Uni", es: "Reino Unido", de: "Großbritannien", ko: "영국", zh: "英国" },
  SCO: { flag: "GB", en: "Scotland", ru: "Шотландия", vi: "Scotland", fr: "Écosse", es: "Escocia", de: "Schottland", ko: "스코틀랜드", zh: "苏格兰" },
  US: { flag: "US", en: "USA", ru: "США", vi: "Mỹ", fr: "États-Unis", es: "EE. UU.", de: "USA", ko: "미국", zh: "美国" },
  IE: { flag: "IE", en: "Ireland", ru: "Ирландия", vi: "Ireland", fr: "Irlande", es: "Irlanda", de: "Irland", ko: "아일랜드", zh: "爱尔兰" },
  FR: { flag: "FR", en: "France", ru: "Франция", vi: "Pháp", fr: "France", es: "Francia", de: "Frankreich", ko: "프랑스", zh: "法国" },
  CU: { flag: "CU", en: "Cuba", ru: "Куба", vi: "Cuba", fr: "Cuba", es: "Cuba", de: "Kuba", ko: "쿠바", zh: "古巴" },
  RU: { flag: "RU", en: "Russia", ru: "Россия", vi: "Nga", fr: "Russie", es: "Rusia", de: "Russland", ko: "러시아", zh: "俄罗斯" },
  MX: { flag: "MX", en: "Mexico", ru: "Мексика", vi: "Mexico", fr: "Mexique", es: "México", de: "Mexiko", ko: "멕시코", zh: "墨西哥" },
  DE: { flag: "DE", en: "Germany", ru: "Германия", vi: "Đức", fr: "Allemagne", es: "Alemania", de: "Deutschland", ko: "독일", zh: "德国" },
  IT: { flag: "IT", en: "Italy", ru: "Италия", vi: "Ý", fr: "Italie", es: "Italia", de: "Italien", ko: "이탈리아", zh: "意大利" },
  JM: { flag: "JM", en: "Jamaica", ru: "Ямайка", vi: "Jamaica", fr: "Jamaïque", es: "Jamaica", de: "Jamaika", ko: "자메이카", zh: "牙买加" }
};

window.DRINK_TYPES = {
  lager: { en: "Lager", ru: "Лагер", vi: "Bia lager", fr: "Lager", es: "Lager", de: "Lager", ko: "라거", zh: "拉格啤酒" },
  cider: { en: "Cider", ru: "Сидр", vi: "Cider", fr: "Cidre", es: "Sidra", de: "Cidre", ko: "사과주", zh: "苹果酒" },
  whisky: { en: "Whisky", ru: "Виски", vi: "Whisky", fr: "Whisky", es: "Whisky", de: "Whisky", ko: "위스키", zh: "威士忌" },
  bourbon: { en: "Bourbon", ru: "Бурбон", vi: "Bourbon", fr: "Bourbon", es: "Bourbon", de: "Bourbon", ko: "버번", zh: "波本威士忌" },
  scotch: { en: "Scotch whisky", ru: "Шотландский виски", vi: "Whisky Scotland", fr: "Scotch whisky", es: "Whisky escocés", de: "Scotch Whisky", ko: "스카치 위스키", zh: "苏格兰威士忌" },
  irish: { en: "Irish whiskey", ru: "Ирландский виски", vi: "Whiskey Ireland", fr: "Whiskey irlandais", es: "Whiskey irlandés", de: "Irischer Whiskey", ko: "아이리시 위스키", zh: "爱尔兰威士忌" },
  tennessee: { en: "Tennessee whiskey", ru: "Теннесси-виски", vi: "Whiskey Tennessee", fr: "Whiskey du Tennessee", es: "Whiskey de Tennessee", de: "Tennessee Whiskey", ko: "테네시 위스키", zh: "田纳西威士忌" },
  dark_rum: { en: "Dark rum", ru: "Тёмный ром", vi: "Rum đen", fr: "Rhum ambré", es: "Ron oscuro", de: "Dunkler Rum", ko: "다크 럼", zh: "黑朗姆酒" },
  white_rum: { en: "White rum", ru: "Белый ром", vi: "Rum trắng", fr: "Rhum blanc", es: "Ron blanco", de: "Weißer Rum", ko: "화이트 럼", zh: "白朗姆酒" },
  spiced_rum: { en: "Spiced rum", ru: "Пряный ром", vi: "Rum gia vị", fr: "Rhum épicé", es: "Ron especiado", de: "Gewürzrum", ko: "스파이스드 럼", zh: "香料朗姆酒" },
  gin: { en: "London dry gin", ru: "Лондонский сухой джин", vi: "Gin London Dry", fr: "Gin London Dry", es: "Ginebra London Dry", de: "London Dry Gin", ko: "런던 드라이 진", zh: "伦敦干金酒" },
  vodka: { en: "Vodka", ru: "Водка", vi: "Vodka", fr: "Vodka", es: "Vodka", de: "Wodka", ko: "보드카", zh: "伏特加" },
  tequila_gold: { en: "Gold tequila", ru: "Золотая текила", vi: "Tequila vàng", fr: "Tequila gold", es: "Tequila dorado", de: "Gold-Tequila", ko: "골드 데킬라", zh: "金色龙舌兰" },
  tequila_silver: { en: "Silver tequila", ru: "Серебряная текила", vi: "Tequila bạc", fr: "Tequila blanche", es: "Tequila plata", de: "Silber-Tequila", ko: "실버 데킬라", zh: "银色龙舌兰" },
  herbal: { en: "Herbal liqueur", ru: "Травяной ликёр", vi: "Rượu mùi thảo mộc", fr: "Liqueur aux herbes", es: "Licor de hierbas", de: "Kräuterlikör", ko: "허브 리큐어", zh: "草本利口酒" },
  bitter: { en: "Bitter aperitif", ru: "Биттер-аперитив", vi: "Rượu khai vị đắng", fr: "Apéritif amer", es: "Aperitivo amargo", de: "Bitter-Aperitif", ko: "비터 아페리티프", zh: "苦味开胃酒" },
  vermouth: { en: "Vermouth", ru: "Вермут", vi: "Vermouth", fr: "Vermouth", es: "Vermut", de: "Wermut", ko: "베르무트", zh: "味美思" },
  cream: { en: "Cream liqueur", ru: "Сливочный ликёр", vi: "Rượu kem", fr: "Liqueur à la crème", es: "Licor de crema", de: "Sahnelikör", ko: "크림 리큐어", zh: "奶油利口酒" }
};
